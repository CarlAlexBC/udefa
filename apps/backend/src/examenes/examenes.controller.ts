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
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

// RolesGuard deja pasar las rutas sin @Roles; solo las mutaciones son admin.
// Los GET (listar y armar) quedan abiertos a cualquier usuario autenticado.
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('examenes')
export class ExamenesController {
  constructor(private examenesService: ExamenesService) {}

  @Post()
  @Roles('admin')
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

  // Examen cultural armado desde el árbol de oferta (por temaId), por plantel.
  // Aditivo: no reemplaza a :id/armar (que sirve el banco plano).
  @Get('cultural/:plantel/armar')
  armarExamenCultural(@Param('plantel') plantel: string) {
    return this.examenesService.armarExamenCultural(plantel);
  }

  @Patch(':id')
  @Roles('admin')
  actualizar(
    @Param('id') id: string,
    @Body() datos: { tipo: string; nombre: string; duracionMin: number; calificable: boolean },
  ) {
    return this.examenesService.actualizar(Number(id), datos.tipo, datos.nombre, datos.duracionMin, datos.calificable);
  }

  @Delete(':id')
  @Roles('admin')
  borrar(@Param('id') id: string) {
    return this.examenesService.borrar(Number(id));
  }
}