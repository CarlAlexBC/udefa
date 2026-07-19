import {
  Controller,
  Get,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TemasPrioridadService } from './temas-prioridad.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

/**
 * Endpoints para gestionar el catálogo de prioridad de temas.
 *
 * Requieren rol admin: RolesGuard compara req.user.rol contra la lista
 * declarada en @Roles. JwtAuthGuard va primero para rellenar req.user.
 */
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Controller('temas-prioridad')
export class TemasPrioridadController {
  constructor(private temasService: TemasPrioridadService) {}

  /** Lista todos los temas con su peso actual. Usado por el admin panel. */
  @Get()
  obtenerTodos() {
    return this.temasService.obtenerTodos();
  }

  @Get(':tema')
  obtenerUno(@Param('tema') tema: string) {
    return this.temasService.obtenerUno(tema);
  }

  /**
   * Actualiza peso/descripción/motivoContextual de un tema.
   * Si el tema no existe todavía, lo crea con los valores dados.
   */
  @Patch(':tema')
  actualizar(
    @Param('tema') tema: string,
    @Body()
    datos: {
      peso?: number;
      descripcion?: string | null;
      motivoContextual?: string | null;
    },
  ) {
    return this.temasService.actualizar(tema, datos);
  }
}
