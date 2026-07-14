import { Controller, Post, Patch, Get, Body, Param } from '@nestjs/common';
import { SesionesCompletasService } from './sesiones-completas.service';

@Controller('sesiones-completas')
export class SesionesCompletasController {
  constructor(private sesionesCompletasService: SesionesCompletasService) {}

  @Post()
  crear(@Body() datos: { usuarioId: number; plantelId: number }) {
    return this.sesionesCompletasService.crear(datos.usuarioId, datos.plantelId);
  }

  @Patch(':id/finalizar')
  finalizar(
    @Param('id') id: string,
    @Body() datos: { estado: 'COMPLETADA' | 'ABANDONADA' },
  ) {
    return this.sesionesCompletasService.finalizar(Number(id), datos.estado);
  }

  @Get(':id/resultados')
  obtenerResultados(@Param('id') id: string) {
    return this.sesionesCompletasService.obtenerResultados(Number(id));
  }
}
