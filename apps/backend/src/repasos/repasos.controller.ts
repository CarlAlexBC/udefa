import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RepasosService } from './repasos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

@UseGuards(JwtAuthGuard)
@Controller('repasos')
export class RepasosController {
  constructor(private repasosService: RepasosService) {}

  /** Cuántos repasos le tocan hoy al aspirante y su reparto por caja. */
  @Get('resumen')
  resumen(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.repasosService.resumen(usuario.id);
  }

  /** La cola del día: reactivos vencidos, barajados y sin la respuesta. */
  @Get('pendientes')
  pendientes(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.repasosService.pendientes(usuario.id);
  }

  /**
   * Registra un repaso y mueve la caja de Leitner. Devuelve la corrección
   * (respuesta correcta + cita del libro) para mostrarla al instante.
   */
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
