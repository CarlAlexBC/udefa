import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { MuestraService } from './muestra.service';

/**
 * Muestra pública sin cuenta ("Explora"): sirve una probadita de 50 reactivos
 * calificables (cultural + psicométrico) y la califica en el servidor. PÚBLICO a
 * propósito y NO persiste nada — es el gancho de entrada antes de comprar. El
 * puntaje se muestra; el diagnóstico completo queda para el paquete de pago.
 */
@Controller('muestra')
export class MuestraController {
  constructor(private muestra: MuestraService) {}

  @Get()
  armar() {
    return this.muestra.armar();
  }

  @Post('calificar')
  @HttpCode(200)
  calificar(
    @Body() datos: { respuestas: { reactivoId: number; respuesta: string }[] },
  ) {
    return this.muestra.calificar(datos?.respuestas ?? []);
  }
}
