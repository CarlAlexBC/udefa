import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { CulturalService } from './cultural.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

/**
 * Navegación del banco cultural para el panel admin. Solo lectura, solo admin.
 * El simulador NO usa estos endpoints; arma el examen en ExamenesService.
 */
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Controller('cultural')
export class CulturalController {
  constructor(private culturalService: CulturalService) {}

  /** Buscador del banco cultural. Mínimo 3 letras; ver el servicio. */
  @Get('buscar')
  buscar(@Query('q') q: string, @Query('take') take?: string) {
    return this.culturalService.buscarReactivos(q, take ? Number(take) : 50);
  }

  @Get('libros')
  listarLibros() {
    return this.culturalService.listarLibros();
  }

  @Get('analitica')
  obtenerAnalitica() {
    return this.culturalService.obtenerAnalitica();
  }

  @Get('libros/:id')
  obtenerLibro(@Param('id') id: string) {
    return this.culturalService.obtenerLibro(Number(id));
  }

  @Get('temas/:id/reactivos')
  listarReactivosDeTema(@Param('id') id: string) {
    return this.culturalService.listarReactivosDeTema(Number(id));
  }
}
