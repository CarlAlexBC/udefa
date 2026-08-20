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
import { FrenoArmadoPorCuentaGuard } from './freno-armado-por-cuenta.guard';
import { CandadoGuard } from '../acceso/candado.guard';
import { Modulo } from '../acceso/modulo.decorator';

// RolesGuard deja pasar las rutas sin @Roles; solo las mutaciones son admin.
// Los GET (listar y armar) quedan abiertos a cualquier usuario autenticado.
// CandadoGuard deja pasar las rutas sin @Modulo; las que SIRVEN contenido
// cultural de pago lo llevan (ver la sección de práctica, más abajo).
@UseGuards(JwtAuthGuard, RolesGuard, CandadoGuard)
@Controller('examenes')
export class ExamenesController {
  constructor(private examenesService: ExamenesService) {}

  @Post()
  @Roles('admin')
  crear(
    @Body()
    datos: {
      tipo: string;
      nombre: string;
      duracionMin: number;
      calificable: boolean;
    },
  ) {
    return this.examenesService.crear(
      datos.tipo,
      datos.nombre,
      datos.duracionMin,
      datos.calificable,
    );
  }

  @Get()
  obtenerTodos() {
    return this.examenesService.obtenerTodos();
  }

  // Freno anti-vaciado por cuenta: este endpoint sirve reactivos frescos al azar,
  // así que es el principal vector de "vaciado" del banco (Capa 3 · Mov. 1).
  @UseGuards(FrenoArmadoPorCuentaGuard)
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
  // Mismo freno anti-vaciado por cuenta: también entrega reactivos al azar.
  // Y muro de pago: esto sirve el banco cultural, que es lo que se compra.
  @Modulo('cultural')
  @UseGuards(FrenoArmadoPorCuentaGuard)
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

  /** Califica una respuesta, la guarda como práctica y devuelve la corrección. */
  // De pago igual que armar: la corrección revela la respuesta y la cita del libro.
  @Modulo('cultural')
  @Post('practica/cultural/responder')
  calificarPracticaCultural(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body() datos: { reactivoId: number; respuestaSeleccionada: string },
  ) {
    return this.examenesService.calificarPracticaCultural(
      usuario.id,
      datos.reactivoId,
      datos.respuestaSeleccionada,
    );
  }

  /** Cuántas prácticas lleva el aspirante (para "Empieza por aquí"). */
  @Get('practica/cultural/mi-actividad')
  miActividadPractica(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.examenesService.miActividadPractica(usuario.id);
  }

  /** Progreso por tema del aspirante (el semáforo). Para "Tu avance". */
  @Get('practica/cultural/mi-avance')
  miAvanceCultural(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.examenesService.miAvanceCultural(usuario.id);
  }

  @Patch(':id')
  @Roles('admin')
  actualizar(
    @Param('id') id: string,
    @Body()
    datos: {
      tipo: string;
      nombre: string;
      duracionMin: number;
      calificable: boolean;
    },
  ) {
    return this.examenesService.actualizar(
      Number(id),
      datos.tipo,
      datos.nombre,
      datos.duracionMin,
      datos.calificable,
    );
  }

  @Delete(':id')
  @Roles('admin')
  borrar(@Param('id') id: string) {
    return this.examenesService.borrar(Number(id));
  }
}
