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
import { ReactivosService } from './reactivos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

/**
 * Endpoints del banco de reactivos.
 *
 * Todos requieren rol admin. El simulador NO usa estos endpoints — llama a
 * ExamenesService.armarExamen que consulta Prisma directamente, así que
 * restringir /reactivos a admin no rompe el flujo del aspirante.
 */
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
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

  /**
   * Lista los temas distintos del banco (para poblar el selector del admin).
   * Se declara ANTES de `@Get()` genérico y de `@Delete(':id')` para que Nest
   * no lo confunda con el patrón `:id`.
   */
  @Get('temas')
  listarTemas(@Query('examenId') examenId?: string) {
    return this.reactivosService.listarTemas(
      examenId ? Number(examenId) : undefined,
    );
  }

  /**
   * Igual que `temas` pero con el conteo de cada tema. Se declara junto al
   * anterior, ANTES del `@Get()` genérico y de `@Delete(':id')`, para que Nest
   * no lo tome como un `:id`.
   */
  @Get('temas-conteo')
  listarTemasConConteo(@Query('examenId') examenId?: string) {
    return this.reactivosService.listarTemasConConteo(
      examenId ? Number(examenId) : undefined,
    );
  }

  @Get()
  obtenerTodos(
    @Query('take') take?: string,
    @Query('skip') skip?: string,
    @Query('bloqueId') bloqueId?: string,
    @Query('examenId') examenId?: string,
    @Query('tema') tema?: string,
    @Query('polaridad') polaridad?: 'POSITIVA' | 'NEGATIVA',
    @Query('search') search?: string,
  ) {
    return this.reactivosService.obtenerTodos({
      take: take ? Number(take) : undefined,
      skip: skip ? Number(skip) : undefined,
      bloqueId: bloqueId ? Number(bloqueId) : undefined,
      examenId: examenId ? Number(examenId) : undefined,
      tema: tema || undefined,
      polaridad,
      search: search || undefined,
    });
  }

  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body()
    datos: {
      enunciado?: string;
      opciones?: any;
      respuestaCorrecta?: string | null;
      explicacion?: string | null;
      tema?: string | null;
      referencia?: string | null;
    },
  ) {
    return this.reactivosService.actualizar(Number(id), datos);
  }

  @Delete(':id')
  borrar(@Param('id') id: string) {
    return this.reactivosService.borrar(Number(id));
  }
}