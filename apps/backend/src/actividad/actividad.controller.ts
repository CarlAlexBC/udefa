import { Controller, Get, UseGuards } from '@nestjs/common';
import { ActividadService } from './actividad.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

@UseGuards(JwtAuthGuard)
@Controller('actividad')
export class ActividadController {
  constructor(private actividadService: ActividadService) {}

  /** La racha de días del aspirante (para la tarjeta del panel). */
  @Get('racha')
  miRacha(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.actividadService.obtenerRacha(usuario.id);
  }
}
