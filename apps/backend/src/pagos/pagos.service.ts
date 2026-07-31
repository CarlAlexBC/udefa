import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import { AccesoService } from '../acceso/acceso.service';

/** Convocatoria vigente y hasta cuándo dura el acceso comprado. Ajustable. */
const CICLO = '2027';
// Acceso vigente hasta el cierre de la convocatoria (resultados en mayo 2027).
const FIN_CONVOCATORIA = new Date('2027-06-30T23:59:59');

type Paquete = 'cultural' | 'psicologico' | 'completa';

/** Qué vende cada paquete: título, precio (MXN) y qué módulos desbloquea. */
const PAQUETES: Record<Paquete, { titulo: string; precio: number; modulos: string[] }> = {
  cultural: { titulo: 'Preparación Cultural', precio: 999, modulos: ['cultural'] },
  psicologico: { titulo: 'Preparación Psicológica', precio: 1999, modulos: ['psicologico'] },
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

  constructor(private acceso: AccesoService) {}

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
          external_reference: JSON.stringify({ usuarioId, paquete, ciclo: CICLO }),
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
      this.logger.error('Error creando la preferencia de Mercado Pago', e as Error);
      throw new InternalServerErrorException('No se pudo iniciar el pago.');
    }
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
      this.logger.error(`No se pudo consultar el pago ${paymentId}`, e as Error);
      return false;
    }

    if (info.status !== 'approved') {
      this.logger.log(
        `Pago ${paymentId} en estado "${info.status}"; no se otorga acceso.`,
      );
      return false;
    }

    if (!info.external_reference) {
      this.logger.warn(`Pago ${paymentId} aprobado pero sin external_reference.`);
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
      this.logger.warn(`Paquete desconocido "${datos.paquete}" en el pago ${paymentId}.`);
      return false;
    }

    await this.acceso.otorgar(
      datos.usuarioId,
      paqueteInfo.modulos,
      datos.ciclo ?? CICLO,
      FIN_CONVOCATORIA,
      'mercadopago',
    );
    this.logger.log(
      `Acceso otorgado a usuario ${datos.usuarioId} [${paqueteInfo.modulos.join(', ')}] por el pago ${paymentId}.`,
    );
    return true;
  }
}
