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
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('planteles')
export class PlantelesController {
  constructor(private plantelesService: PlantelesService) {}

  // GET público — el formulario de registro necesita listar planteles antes
  // de que el usuario tenga cuenta.
  @Get()
  obtenerTodos() {
    return this.plantelesService.obtenerTodos();
  }

  // Mutaciones: solo admin. JwtAuthGuard rellena req.user, RolesGuard valida rol.
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  crear(@Body() datos: { nombre: string; descripcion?: string }) {
    return this.plantelesService.crear(datos.nombre, datos.descripcion);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  borrar(@Param('id') id: string) {
    return this.plantelesService.borrar(Number(id));
  }
}