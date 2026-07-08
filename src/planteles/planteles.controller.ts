import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { PlantelesService } from './planteles.service';

@Controller('planteles')
export class PlantelesController {
  constructor(private plantelesService: PlantelesService) {}

  @Post()
  crear(@Body() datos: { nombre: string; descripcion?: string }) {
    return this.plantelesService.crear(datos.nombre, datos.descripcion);
  }

  @Get()
  obtenerTodos() {
    return this.plantelesService.obtenerTodos();
  }

  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body() datos: { nombre: string; descripcion?: string },
  ) {
    return this.plantelesService.actualizar(Number(id), datos.nombre, datos.descripcion);
  }

  @Delete(':id')
  borrar(@Param('id') id: string) {
    return this.plantelesService.borrar(Number(id));
  }
}