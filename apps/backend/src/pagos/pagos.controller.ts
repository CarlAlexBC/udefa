import {
  Body,
  Controller,
  Headers,
  HttpCode,
  Logger,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { PagosService } from './pagos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RegistrarYPagarDto } from './dto/registrar-y-pagar.dto';
import { firmaValida } from './verificar-firma';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

@Controller('pagos')
export class PagosController {
  private readonly logger = new Logger(PagosController.name);

  constructor(private pagosService: PagosService) {}

  /**
   * Inicia el pago de un paquete. Devuelve la URL del checkout de Mercado Pago,
   * a la que el frontend redirige al aspirante. Requiere sesión: el pago se
   * amarra al usuario autenticado.
   */
  @UseGuards(JwtAuthGuard)
  @Post('preferencia')
  crearPreferencia(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body() datos: { paquete: string },
  ) {
    return this.pagosService.crearPreferencia(usuario.id, datos.paquete);
  }

  /**
   * Flujo de invitado "datos y luego pagar": crea la cuenta en PENDIENTE con los
   * datos del aspirante y devuelve el checkout. PÚBLICO — todavía no hay sesión.
   * La cuenta se activa cuando el pago se aprueba (webhook / confirmar).
   */
  // Freno estricto (5/min por IP, como "olvidé mi contraseña"): es la ÚNICA
  // puerta pública que crea cuentas, así que sin freno se puede sembrar la base
  // con miles de correos ajenos o tantear cuáles ya son clientes.
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Post('registrar-y-pagar')
  registrarYPagar(@Body() datos: RegistrarYPagarDto) {
    return this.pagosService.registrarYPagar(datos);
  }

  /**
   * Confirma un pago al volver del checkout (plan B cuando el webhook no llega,
   * p. ej. en desarrollo). PÚBLICO a propósito: en el flujo "datos y luego pagar"
   * el comprador vuelve SIN sesión iniciada. No usa la sesión — saca a quién dar
   * acceso del propio pago (external_reference) y solo activa si Mercado Pago
   * confirma el pago 'approved', igual que el webhook. Idempotente: no duplica.
   */
  // Freno: es público y responde si un pago está aprobado o no, así que sin tope
  // sirve para ir tanteando números de pago a ver cuáles existen.
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  @Post('confirmar')
  async confirmar(@Body() datos: { paymentId: string }) {
    const otorgado = await this.pagosService.procesarPago(
      String(datos.paymentId),
    );
    return { otorgado };
  }

  /**
   * Webhook de Mercado Pago: lo llama MP cuando cambia el estado de un pago.
   * Es PÚBLICO (MP no manda token). Siempre responde 200 para que MP no lo
   * reintente en bucle; el trabajo real (dar acceso si el pago fue aprobado)
   * ocurre en procesarPago y es idempotente.
   *
   * MP manda el id del pago de varias formas según la versión del aviso; se
   * cubren body.data.id y los query `data.id` / `id`.
   *
   * FIRMA: si `MERCADOPAGO_WEBHOOK_SECRET` está configurado, se exige que el
   * aviso venga firmado por MP y se descarta cualquier otro. Si NO está
   * configurado, se procesa igual pero dejando un aviso en el log — así no se
   * rompe lo que ya está corriendo, pero queda claro que falta encender el
   * candado. Aun sin firma, nadie puede regalarse acceso por aquí: procesarPago
   * le pregunta a Mercado Pago por el pago y sólo confía en lo que MP responda.
   */
  @Throttle({ default: { limit: 60, ttl: 60000 } })
  @Post('webhook')
  @HttpCode(200)
  async webhook(
    @Body()
    body: { type?: string; action?: string; data?: { id?: string | number } },
    @Query() query: Record<string, string>,
    @Headers('x-signature') xSignature?: string,
    @Headers('x-request-id') xRequestId?: string,
  ) {
    const tipo = body?.type ?? query?.type ?? query?.topic;
    const paymentId =
      body?.data?.id ?? query?.['data.id'] ?? query?.id ?? undefined;

    const secreto = process.env.MERCADOPAGO_WEBHOOK_SECRET;
    if (!secreto) {
      this.logger.warn(
        'Webhook sin verificar: falta MERCADOPAGO_WEBHOOK_SECRET en el .env. ' +
          'Cualquiera puede llamar a esta ruta mientras siga así.',
      );
    } else if (
      !firmaValida({
        xSignature,
        xRequestId,
        paymentId: String(paymentId ?? ''),
        secreto,
      })
    ) {
      // Ni un 401: a un impostor no se le confirma nada. MP tampoco reintenta
      // porque seguimos respondiendo 200.
      this.logger.warn(
        `Aviso de webhook DESCARTADO por firma inválida (pago ${String(paymentId)}).`,
      );
      return { recibido: true };
    }

    if (tipo === 'payment' && paymentId) {
      await this.pagosService.procesarPago(String(paymentId));
    }
    return { recibido: true };
  }
}
