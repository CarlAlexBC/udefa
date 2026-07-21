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
import { ExamenesService } from './examenes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

@UseGuards(JwtAuthGuard)
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

  @Get(':id/armar')
  armarExamen(
    @Param('id') id: string,
    @UsuarioActual() usuario: UsuarioAutenticado,
  ) {
    return this.examenesService.armarExamen(Number(id), usuario.id);
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