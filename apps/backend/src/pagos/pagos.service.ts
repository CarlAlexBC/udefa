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
import { AuthService } from '../auth/auth.service';

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
    private auth: AuthService,
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
  async crearPreferencia(usuarioId: number, paquete: string) {
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
            usuarioId,
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
          metadata: { usuario_id: usuarioId, paquete, ciclo: CICLO },
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
   * Flujo "datos y luego pagar" (invitado): crea (o reutiliza) una cuenta
   * PENDIENTE con los datos del aspirante y le arma el checkout del paquete. La
   * cuenta se activa sola cuando el pago se apruebe (ver procesarPago). No exige
   * login: es la puerta de entrada de quien todavía no tiene cuenta.
   */
  async registrarYPagar(datos: {
    nombre: string;
    email: string;
    password: string;
    paquete: string;
  }) {
    // Validamos el paquete ANTES de crear la cuenta, para no dejar cuentas
    // PENDIENTE colgando por un paquete inexistente.
    if (!PAQUETES[datos.paquete as Paquete]) {
      throw new BadRequestException(
        `Paquete inválido: "${datos.paquete}". Válidos: ${Object.keys(PAQUETES).join(', ')}`,
      );
    }
    const usuario = await this.usuarios.crearPendienteParaCompra({
      nombre: datos.nombre,
      email: datos.email,
      password: datos.password,
    });
    return this.crearPreferencia(usuario.id, datos.paquete);
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

    let datos: { usuarioId: number; paquete: string; ciclo?: string };
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

    await this.acceso.otorgar(
      datos.usuarioId,
      paqueteInfo.modulos,
      datos.ciclo ?? CICLO,
      FIN_CONVOCATORIA,
      'mercadopago',
    );
    // Si la cuenta se creó en PENDIENTE por el flujo "datos y luego pagar", al
    // aprobarse el pago se activa. `activarParaCompra` dice si ESTA fue la
    // primera activación, para mandar el correo de confirmación una sola vez.
    const activacion = await this.usuarios.activarParaCompra(datos.usuarioId);
    this.logger.log(
      `Acceso otorgado a usuario ${datos.usuarioId} [${paqueteInfo.modulos.join(', ')}] por el pago ${paymentId}.`,
    );

    // Correo de compra confirmada + acceso listo. Solo en la primera activación
    // (el webhook de Mercado Pago reintenta, y no queremos correos dobles). Si
    // el correo falla, se registra pero NO se rompe el webhook: el pago ya está
    // procesado y el acceso otorgado.
    if (activacion.recienActivada) {
      // Cuenta del flujo de invitado: la contraseña del formulario no prueba de
      // quién es el correo (ver AuthService.prepararDefinicionDePassword), así
      // que se anula y se manda un enlace para definirla.
      //
      // Con UNA excepción: si este servidor no puede mandar correo de verdad
      // (sin RESEND_API_KEY, modo consola), anular la contraseña dejaría al
      // comprador fuera de una cuenta que acaba de pagar. En ese caso se
      // conserva la contraseña del formulario y queda una advertencia gorda.
      let definirPasswordLink: string | undefined;
      if (this.mail.puedeEnviar()) {
        definirPasswordLink = await this.auth.prepararDefinicionDePassword(
          datos.usuarioId,
        );
      } else {
        this.logger.warn(
          `Cuenta ${datos.usuarioId} activada SIN el paso de "define tu contraseña": ` +
            'este servidor no puede enviar correo (falta RESEND_API_KEY). La contraseña ' +
            'del formulario de compra sigue siendo válida.',
        );
      }

      try {
        await this.mail.enviarCompraConfirmada({
          to: activacion.email,
          nombre: activacion.nombre,
          paqueteTitulo: paqueteInfo.titulo,
          precio: paqueteInfo.precio,
          ciclo: datos.ciclo ?? CICLO,
          definirPasswordLink,
        });
      } catch (e) {
        this.logger.error(
          `Pago ${paymentId} procesado, pero falló el correo de confirmación a ${activacion.email}: ${(e as Error).message}`,
        );
        if (definirPasswordLink) {
          // La contraseña YA quedó anulada y el enlace iba en ese correo que no
          // salió. No se pierde el acceso —"Olvidé mi contraseña" con ese mismo
          // correo lo devuelve— pero hay que saberlo si el aspirante escribe.
          this.logger.error(
            `OJO: ${activacion.email} pagó y su cuenta quedó esperando definir contraseña, ` +
              'pero el correo con el enlace NO salió. Puede entrar con "Olvidé mi contraseña".',
          );
        }
      }
    }
    return true;
  }
}
