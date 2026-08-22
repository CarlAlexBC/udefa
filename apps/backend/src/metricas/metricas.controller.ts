import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
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
   * Se puede inflar llamándolo en bucle. Es un contador de visitas, no una caja
   * registradora: si algún día el número deja de parecerse a la realidad, se le
   * pone un freno por IP como el que ya tienen otros endpoints.
   */
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
