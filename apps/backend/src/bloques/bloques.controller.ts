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
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

// RolesGuard deja pasar las rutas sin @Roles; las mutaciones llevan @Roles('admin').
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('bloques')
export class BloquesController {
  constructor(private bloquesService: BloquesService) {}

  @Post()
  @Roles('admin')
  crear(
    @Body()
    datos: {
      examenId: number;
      nombre: string;
      orden: number;
      tiempoLimite: number;
    },
  ) {
    return this.bloquesService.crear(
      datos.examenId,
      datos.nombre,
      datos.orden,
      datos.tiempoLimite,
    );
  }

  @Get()
  obtenerTodos() {
    return this.bloquesService.obtenerTodos();
  }

  @Delete(':id')
  @Roles('admin')
  borrar(@Param('id') id: string) {
    return this.bloquesService.borrar(Number(id));
  }
}
