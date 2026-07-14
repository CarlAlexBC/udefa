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
import { BloquesService } from './bloques.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('bloques')
export class BloquesController {
  constructor(private bloquesService: BloquesService) {}

  @Post()
  crear(@Body() datos: { examenId: number; nombre: string; orden: number; tiempoLimite: number }) {
    return this.bloquesService.crear(datos.examenId, datos.nombre, datos.orden, datos.tiempoLimite);
  }

  @Get()
  obtenerTodos() {
    return this.bloquesService.obtenerTodos();
  }

  @Delete(':id')
  borrar(@Param('id') id: string) {
    return this.bloquesService.borrar(Number(id));
  }
}