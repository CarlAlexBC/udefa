import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { ExamenesService } from './examenes.service';

@Controller('examenes')
export class ExamenesController {
  constructor(private examenesService: ExamenesService) {}

  @Post()
  crear(@Body() datos: { tipo: string; nombre: string; duracionMin: number; calificable: boolean }) {
    return this.examenesService.crear(datos.tipo, datos.nombre, datos.duracionMin, datos.calificable);
  }

  @Get()
  obtenerTodos() {
    return this.examenesService.obtenerTodos();
  }

  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body() datos: { tipo: string; nombre: string; duracionMin: number; calificable: boolean },
  ) {
    return this.examenesService.actualizar(Number(id), datos.tipo, datos.nombre, datos.duracionMin, datos.calificable);
  }

  @Delete(':id')
  borrar(@Param('id') id: string) {
    return this.examenesService.borrar(Number(id));
  }
}