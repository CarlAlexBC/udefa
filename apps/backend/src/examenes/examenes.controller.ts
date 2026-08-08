import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  Query,
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
  // Aditivo: no reemplaza a :id/armar (que sirve el banco plano). SOLO ADMIN: el
  // aspirante arma su examen por `:id/armar` (que valida su plantel); este toma el
  // plantel de la URL SIN verificar quién llama, así que se restringe a admin para
  // que nadie arme el examen de otra escuela con una URL adivinable. El front no lo
  // usa (comprobado 3 ago 2026).
  @Get('cultural/:plantel/armar')
  @Roles('admin')
  armarExamenCultural(@Param('plantel') plantel: string) {
    return this.examenesService.armarExamenCultural(plantel);
  }

  // ── Práctica cultural por materia (Fase 04) ──────────────────────────────
  // Abiertas a cualquier aspirante autenticado: el plantel se resuelve del
  // usuario (no de la URL), así que nadie ve el examen de otra escuela.

  /** Materias del examen cultural del plantel del aspirante + nº de reactivos. */
  @Get('practica/cultural/materias')
  materiasPracticaCultural(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.examenesService.materiasPracticaCultural(usuario.id);
  }

  /** Los temas (capítulos) de una materia, con cuántos reactivos tiene cada uno. */
  @Get('practica/cultural/temas')
  temasPracticaCultural(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Query('materia') materia: string,
  ) {
    return this.examenesService.temasPracticaCultural(usuario.id, materia);
  }

  /** N reactivos aleatorios de UNA materia (sin la respuesta correcta).
   *  Con ?capitulo=<id> acota la práctica a un solo tema del temario. */
  @Get('practica/cultural')
  armarPracticaCultural(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Query('materia') materia: string,
    @Query('n') n?: string,
    @Query('capitulo') capitulo?: string,
  ) {
    return this.examenesService.armarPracticaCultural(
      usuario.id,
      materia,
      Number(n) || 20,
      capitulo ? Number(capitulo) : undefined,
    );
  }

  /** Califica una respuesta y devuelve la corrección con la cita del libro. */
  @Post('practica/cultural/responder')
  calificarPracticaCultural(
    @Body() datos: { reactivoId: number; respuestaSeleccionada: string },
  ) {
    return this.examenesService.calificarPracticaCultural(
      datos.reactivoId,
      datos.respuestaSeleccionada,
    );
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