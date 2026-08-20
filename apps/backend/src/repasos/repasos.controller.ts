import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RepasosService } from './repasos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CandadoGuard } from '../acceso/candado.guard';
import { Modulo } from '../acceso/modulo.decorator';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

// La cola de repaso se siembra SÓLO desde simulacros culturales, así que todo lo
// que sirve es contenido del módulo 'cultural'. `resumen` queda fuera del muro a
// propósito: son puros conteos (ningún reactivo) y los pinta el panel de inicio
// de cualquier aspirante, incluso antes de comprar.
@UseGuards(JwtAuthGuard, CandadoGuard)
@Controller('repasos')
export class RepasosController {
  constructor(private repasosService: RepasosService) {}

  /** Cuántos repasos le tocan hoy al aspirante y su reparto por caja. */
  @Get('resumen')
  resumen(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.repasosService.resumen(usuario.id);
  }

  /** La cola del día: reactivos vencidos, barajados y sin la respuesta. */
  @Modulo('cultural')
  @Get('pendientes')
  pendientes(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.repasosService.pendientes(usuario.id);
  }

  /**
   * Registra un repaso y mueve la caja de Leitner. Devuelve la corrección
   * (respuesta correcta + cita del libro) para mostrarla al instante.
   */
  @Modulo('cultural')
  @Post(':reactivoId/responder')
  responder(
    @Param('reactivoId') reactivoId: string,
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body() datos: { respuestaSeleccionada: string },
  ) {
    return this.repasosService.responder(
      usuario.id,
      Number(reactivoId),
      datos.respuestaSeleccionada,
    );
  }
}
