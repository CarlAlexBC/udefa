import { Controller, Get, UseGuards } from '@nestjs/common';
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
}
