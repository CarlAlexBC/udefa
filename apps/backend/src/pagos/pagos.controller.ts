import {
  Body,
  Controller,
  HttpCode,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PagosService } from './pagos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RegistrarYPagarDto } from './dto/registrar-y-pagar.dto';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

@Controller('pagos')
export class PagosController {
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
  @Post('confirmar')
  async confirmar(@Body() datos: { paymentId: string }) {
    const otorgado = await this.pagosService.procesarPago(String(datos.paymentId));
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
   */
  @Post('webhook')
  @HttpCode(200)
  async webhook(
    @Body() body: { type?: string; action?: string; data?: { id?: string | number } },
    @Query() query: Record<string, string>,
  ) {
    const tipo = body?.type ?? query?.type ?? query?.topic;
    const paymentId =
      body?.data?.id ?? query?.['data.id'] ?? query?.id ?? undefined;

    if (tipo === 'payment' && paymentId) {
      await this.pagosService.procesarPago(String(paymentId));
    }
    return { recibido: true };
  }
}
