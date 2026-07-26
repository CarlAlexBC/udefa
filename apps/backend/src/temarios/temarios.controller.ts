import {
  Controller,
  Get,
  Patch,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { TemariosService } from './temarios.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

/**
 * Endpoints del panel admin para los Temarios del examen cultural.
 *
 * Admin-only: JwtAuthGuard rellena req.user y RolesGuard exige rol 'admin'
 * (mismo patrón que temas-prioridad).
 */
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Controller('temarios')
export class TemariosController {
  constructor(private temariosService: TemariosService) {}

  /** Lista los temarios con sus materias y nº de preguntas (pantalla de Reparto). */
  @Get()
  listar() {
    return this.temariosService.listarConMaterias();
  }

  /** Cambia el nº de reactivos de una materia del temario. */
  @Patch('materias/:id')
  actualizarMateria(
    @Param('id', ParseIntPipe) id: number,
    @Body() datos: { numPreguntas: number },
  ) {
    return this.temariosService.actualizarNumPreguntas(id, datos.numPreguntas);
  }
}
