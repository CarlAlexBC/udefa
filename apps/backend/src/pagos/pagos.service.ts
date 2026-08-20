import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import { AccesoService } from '../acceso/acceso.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { MailService } from '../mail/mail.service';

/** Convocatoria vigente y hasta cuándo dura el acceso comprado. Ajustable. */
const CICLO = '2027';
// Acceso vigente hasta el cierre de la convocatoria (resultados en mayo 2027).
const FIN_CONVOCATORIA = new Date('2027-06-30T23:59:59');

type Paquete = 'cultural' | 'psicologico' | 'completa';

/** Qué vende cada paquete: título, precio (MXN) y qué módulos desbloquea. */
const PAQUETES: Record<
  Paquete,
  { titulo: string; precio: number; modulos: string[] }
> = {
  cultural: {
    titulo: 'Preparación Cultural',
    precio: 999,
    modulos: ['cultural'],
  },
  psicologico: {
    titulo: 'Preparación Psicológica',
    precio: 1999,
    modulos: ['psicologico'],
  },
  completa: {
    titulo: 'Preparación Completa',
    precio: 2500,
    modulos: ['cultural', 'psicologico'],
  },
};

@Injectable()
export class PagosService {
  private readonly logger = new Logger(PagosService.name);
  private readonly client = new MercadoPagoConfig({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN ?? '',
  });

  constructor(
    private acceso: AccesoService,
    private usuarios: UsuariosService,
    private mail: MailService,
  ) {}

  private frontendUrl(): string {
    return process.env.FRONTEND_URL ?? 'http://localhost:3000';
  }

  /**
   * Crea una preferencia de Checkout Pro para un paquete y devuelve la URL del
   * checkout de Mercado Pago, a la que el frontend redirige al aspirante.
   * Guarda usuarioId + paquete + ciclo en `external_reference` para saber a
   * quién darle acceso cuando el pago se apruebe.
   */
  /**
   * Qué se guarda en `external_reference` (el dato que Mercado Pago nos devuelve
   * con el aviso de pago, y lo único que dice a quién darle acceso):
   *
   *   - `{ compraId }`  → flujo de invitado. Apunta a una fila de
   *     CompraPendiente; la cuenta se crea al aprobarse el pago.
   *   - `{ usuarioId }` → compra con sesión ya iniciada, y también el CAMINO
   *     VIEJO del flujo de invitado (antes de CompraPendiente). `procesarPago`
   *     sigue entendiéndolo para no dejar tirado ningún pago en vuelo.
   */
  private async crearPreferenciaCon(
    referencia: { usuarioId: number } | { compraId: number },
    paquete: string,
  ) {
    const info = PAQUETES[paquete as Paquete];
    if (!info) {
      throw new BadRequestException(
        `Paquete inválido: "${paquete}". Válidos: ${Object.keys(PAQUETES).join(', ')}`,
      );
    }
    if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
      throw new InternalServerErrorException(
        'Falta configurar MERCADOPAGO_ACCESS_TOKEN en el backend.',
      );
    }

    const front = this.frontendUrl();
    // auto_return y notification_url exigen URLs públicas; en localhost se omiten
    // para que la preferencia no falle mientras aún no hay túnel/deploy.
    const esPublico = /^https:\/\//.test(front) && !front.includes('localhost');

    const preference = new Preference(this.client);
    try {
      const res = await preference.create({
        body: {
          items: [
            {
              id: paquete,
              title: info.titulo,
              quantity: 1,
              unit_price: info.precio,
              currency_id: 'MXN',
            },
          ],
          external_reference: JSON.stringify({
            ...referencia,
            paquete,
            ciclo: CICLO,
          }),
          back_urls: {
            success: `${front}/pago/exito`,
            failure: `${front}/pago/error`,
            pending: `${front}/pago/pendiente`,
          },
          ...(esPublico ? { auto_return: 'approved' } : {}),
          ...(process.env.MERCADOPAGO_WEBHOOK_URL
            ? { notification_url: process.env.MERCADOPAGO_WEBHOOK_URL }
            : {}),
          metadata: { ...referencia, paquete, ciclo: CICLO },
        },
      });
      return { preferenceId: res.id, initPoint: res.init_point };
    } catch (e) {
      this.logger.error(
        'Error creando la preferencia de Mercado Pago',
        e as Error,
      );
      throw new InternalServerErrorException('No se pudo iniciar el pago.');
    }
  }

  /**
   * Inicia el pago de alguien que YA tiene sesión abierta. La referencia es su
   * usuarioId, porque su cuenta ya existe.
   */
  crearPreferencia(usuarioId: number, paquete: string) {
    return this.crearPreferenciaCon({ usuarioId }, paquete);
  }

  /**
   * Flujo "datos y luego pagar" (invitado): guarda el intento de compra y le
   * arma el checkout. NO crea cuenta todavía — nace cuando el pago se aprueba,
   * con los datos de ESTE intento (ver procesarPago y CompraPendiente).
   *
   * Así se acabó el problema de que dos personas mandaran el mismo correo y
   * terminaran compartiendo una cuenta: cada intento va por su lado.
   */
  async registrarYPagar(datos: {
    nombre: string;
    email: string;
    password: string;
    paquete: string;
  }) {
    // Validamos el paquete ANTES de guardar nada, para no dejar intentos de
    // compra colgando por un paquete inexistente.
    if (!PAQUETES[datos.paquete as Paquete]) {
      throw new BadRequestException(
        `Paquete inválido: "${datos.paquete}". Válidos: ${Object.keys(PAQUETES).join(', ')}`,
      );
    }
    const compra = await this.usuarios.registrarCompraPendiente({
      nombre: datos.nombre,
      email: datos.email,
      password: datos.password,
      paquete: datos.paquete,
      ciclo: CICLO,
    });
    return this.crearPreferenciaCon({ compraId: compra.id }, datos.paquete);
  }

  /**
   * Procesa un aviso de pago (webhook). Consulta el pago en Mercado Pago y, si
   * está aprobado, otorga el acceso del paquete comprado. Es idempotente: si el
   * aviso llega varias veces, `AccesoService.otorgar` no duplica nada.
   * Devuelve true si otorgó acceso.
   */
  async procesarPago(paymentId: string): Promise<boolean> {
    if (!paymentId) return false;

    const payment = new Payment(this.client);
    let info: { status?: string; external_reference?: string };
    try {
      info = await payment.get({ id: paymentId });
    } catch (e) {
      this.logger.error(
        `No se pudo consultar el pago ${paymentId}`,
        e as Error,
      );
      return false;
    }

    if (info.status !== 'approved') {
      this.logger.log(
        `Pago ${paymentId} en estado "${info.status}"; no se otorga acceso.`,
      );
      return false;
    }

    if (!info.external_reference) {
      this.logger.warn(
        `Pago ${paymentId} aprobado pero sin external_reference.`,
      );
      return false;
    }

    let datos: {
      usuarioId?: number;
      compraId?: number;
      paquete: string;
      ciclo?: string;
    };
    try {
      datos = JSON.parse(info.external_reference);
    } catch {
      this.logger.warn(`external_reference ilegible en el pago ${paymentId}.`);
      return false;
    }

    const paqueteInfo = PAQUETES[datos.paquete as Paquete];
    if (!paqueteInfo) {
      this.logger.warn(
        `Paquete desconocido "${datos.paquete}" en el pago ${paymentId}.`,
      );
      return false;
    }

    // A quién darle el acceso. Dos formas, y hay que entender las dos:
    //   compraId  → flujo de invitado de hoy: la cuenta NACE aquí, con los
    //               datos del intento de compra que se pagó.
    //   usuarioId → compra con sesión iniciada, y también los pagos viejos del
    //               flujo de invitado que ya iban en vuelo cuando entró
    //               CompraPendiente. Sin esto, esos pagos llegarían y no
    //               sabríamos a quién darle nada.
    let cuenta: {
      usuarioId: number;
      email: string;
      nombre: string;
      recienActivada: boolean;
    };
    if (datos.compraId) {
      const creada = await this.usuarios.crearCuentaDesdeCompra(datos.compraId);
      cuenta = { ...creada, recienActivada: creada.recienCreada };
    } else if (datos.usuarioId) {
      cuenta = await this.usuarios.activarParaCompra(datos.usuarioId);
    } else {
      this.logger.warn(
        `external_reference del pago ${paymentId} no trae ni compraId ni usuarioId.`,
      );
      return false;
    }

    await this.acceso.otorgar(
      cuenta.usuarioId,
      paqueteInfo.modulos,
      datos.ciclo ?? CICLO,
      FIN_CONVOCATORIA,
      'mercadopago',
    );
    const activacion = cuenta;
    this.logger.log(
      `Acceso otorgado a usuario ${cuenta.usuarioId} [${paqueteInfo.modulos.join(', ')}] por el pago ${paymentId}.`,
    );

    // Correo de compra confirmada + acceso listo. Solo en la primera activación
    // (el webhook de Mercado Pago reintenta, y no queremos correos dobles). Si
    // el correo falla, se registra pero NO se rompe el webhook: el pago ya está
    // procesado y el acceso otorgado.
    if (activacion.recienActivada) {
      // El comprador entra con la contraseña que eligió al comprar. Punto.
      //
      // Aquí hubo un paso de "define tu contraseña por correo" (se anulaba la
      // del formulario y se mandaba un enlace). Se quitó el 20 ago, decisión de
      // Carlo, y conviene saber por qué para no reponerlo por costumbre:
      //
      //   - Nació para tapar que dos personas con el mismo correo compartían
      //     cuenta. Eso ya lo arregló CompraPendiente DE RAÍZ: la contraseña de
      //     este intento sí es de quien pagó, porque el pago viene de SU checkout.
      //   - Lo único que seguía aportando era comprobar que el correo fuera
      //     suyo, y cobraba esa comprobación bloqueando el acceso justo después
      //     de que alguien pagó.
      //   - Y falla feo: si el correo no llega —dominio sin verificar en Resend,
      //     una letra mal escrita— el comprador queda encerrado fuera de algo que
      //     ya pagó, y "olvidé mi contraseña" tampoco le llega. Un correo mal
      //     escrito, en cambio, se corrige desde el panel.
      //
      // Si algún día se quiere verificar el correo, el lugar es un aviso de
      // "confirma tu correo" que NO bloquee el acceso — no una puerta en el
      // momento de la compra.

      try {
        await this.mail.enviarCompraConfirmada({
          to: activacion.email,
          nombre: activacion.nombre,
          paqueteTitulo: paqueteInfo.titulo,
          precio: paqueteInfo.precio,
          ciclo: datos.ciclo ?? CICLO,
        });
      } catch (e) {
        // Que el recibo no salga NO deja a nadie fuera: el acceso ya está dado y
        // el comprador entra con su contraseña. Se registra para poder reenviarlo.
        this.logger.error(
          `Pago ${paymentId} procesado, pero falló el correo de confirmación a ${activacion.email}: ${(e as Error).message}`,
        );
      }
    }
    return true;
  }
}
