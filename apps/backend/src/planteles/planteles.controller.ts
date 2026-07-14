import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { PlantelesService } from './planteles.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('planteles')
export class PlantelesController {
  constructor(private plantelesService: PlantelesService) {}

  // GET publico — el formulario de registro necesita listar planteles antes
  // de que el usuario tenga cuenta.
  @Get()
  obtenerTodos() {
    return this.plantelesService.obtenerTodos();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  crear(@Body() datos: { nombre: string; descripcion?: string }) {
    return this.plantelesService.crear(datos.nombre, datos.descripcion);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body() datos: { nombre: string; descripcion?: string },
  ) {
    return this.plantelesService.actualizar(
      Number(id),
      datos.nombre,
      datos.descripcion,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  borrar(@Param('id') id: string) {
    return this.plantelesService.borrar(Number(id));
  }
}