import { Controller, Post, Patch, Body, Param } from '@nestjs/common';
import { IntentosService } from './intentos.service';

@Controller('intentos')
export class IntentosController {
  constructor(private intentosService: IntentosService) {}

  @Post()
  crear(
    @Body()
    datos: {
      usuarioId: number;
      examenId: number;
      sesionCompletoId?: number;
    },
  ) {
    return this.intentosService.crear(
      datos.usuarioId,
      datos.examenId,
      datos.sesionCompletoId,
    );
  }

  @Post(':id/responder')
  responder(
    @Param('id') id: string,
    @Body()
    datos: {
      reactivoId: number;
      respuestaSeleccionada: string;
      respondidoEnMs: number;
    },
  ) {
    return this.intentosService.responder(
      Number(id),
      datos.reactivoId,
      datos.respuestaSeleccionada,
      datos.respondidoEnMs,
    );
  }

  @Patch(':id/finalizar')
  finalizar(
    @Param('id') id: string,
    @Body() datos: { estado: 'COMPLETADA' | 'TIEMPO_AGOTADO' | 'ABANDONADA' },
  ) {
    return this.intentosService.finalizar(Number(id), datos.estado);
  }
}
