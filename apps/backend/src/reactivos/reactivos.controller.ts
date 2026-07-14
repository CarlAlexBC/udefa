import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ReactivosService } from './reactivos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('reactivos')
export class ReactivosController {
  constructor(private reactivosService: ReactivosService) {}

  @Post()
  crear(@Body() datos: { bloqueId: number; enunciado: string; opciones: any; tipo: string; respuestaCorrecta?: string; explicacion?: string; tema?: string; imagenUrl?: string }) {
    return this.reactivosService.crear(
      datos.bloqueId,
      datos.enunciado,
      datos.opciones,
      datos.tipo,
      datos.respuestaCorrecta,
      datos.explicacion,
      datos.tema,
      datos.imagenUrl,
    );
  }

  @Post('masivo')
  crearMuchos(@Body() reactivos: any[]) {
    return this.reactivosService.crearMuchos(reactivos);
  }

  @Get()
  obtenerTodos() {
    return this.reactivosService.obtenerTodos();
  }

  @Delete(':id')
  borrar(@Param('id') id: string) {
    return this.reactivosService.borrar(Number(id));
  }
}