import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { MetricasService } from './metricas.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('metricas')
export class MetricasController {
  constructor(private metricas: MetricasService) {}

  /**
   * El aviso de visita.
   *
   * Va ABIERTO a propósito: lo manda cualquiera que abra la web, tenga cuenta o
   * no, y ése es justo el dato que interesa — cuánta gente llega, no cuántos
   * clientes entran. Responde 204 (sin contenido) para que el navegador no se
   * quede esperando nada.
   *
   * Lleva freno por IP (abajo). No lo vuelve infalsificable —quien reparta las
   * llamadas entre muchas IP puede inflarlo— pero sí lo saca del alcance de un
   * bucle desde una sola máquina, que es el caso realista.
   */
  // 30 avisos por minuto y por IP: de sobra para alguien navegando (una vista
  // por pantalla) y muy poco para inflar el contador a mano.
  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  @Post('vista')
  @HttpCode(204)
  async registrar(
    @Body('ruta') ruta: string,
    @Headers('user-agent') userAgent: string,
  ): Promise<void> {
    await this.metricas.registrar(ruta, userAgent);
  }

  /** El resumen es sólo para el panel. */
  @Get('resumen')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  resumen() {
    return this.metricas.resumen();
  }
}
