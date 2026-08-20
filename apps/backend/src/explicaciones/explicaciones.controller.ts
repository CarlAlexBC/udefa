import {
  Controller,
  Get,
  Put,
  Body,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GuardarExplicacionDto } from './dto/guardar-explicacion.dto';
import { ExplicacionesService } from './explicaciones.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CandadoGuard } from '../acceso/candado.guard';
import { Modulo } from '../acceso/modulo.decorator';

// RolesGuard deja pasar lo que no lleva @Roles: `por-reactivo` queda abierto a
// cualquier aspirante autenticado; las rutas de edición son solo admin.
// CandadoGuard hace lo propio con @Modulo: la explicación que ve el aspirante es
// contenido cultural de pago; las de admin no lo llevan (ya son admin-only).
@UseGuards(JwtAuthGuard, RolesGuard, CandadoGuard)
@Controller('explicaciones')
export class ExplicacionesController {
  constructor(private explicaciones: ExplicacionesService) {}

  /** Aspirante: la explicación PUBLICADA del capítulo de un reactivo (o null). */
  @Modulo('cultural')
  @Get('por-reactivo')
  porReactivo(@Query('reactivoId', ParseIntPipe) reactivoId: number) {
    return this.explicaciones.porReactivo(reactivoId);
  }

  /** Admin: capítulos ordenados por más-fallado, con estado de su explicación. */
  @Get('admin/capitulos')
  @Roles('admin')
  listarCapitulos() {
    return this.explicaciones.listarCapitulos();
  }

  /** Admin: la explicación de un capítulo + citas fuente para editar. */
  @Get('admin/:capituloId')
  @Roles('admin')
  obtener(@Param('capituloId', ParseIntPipe) capituloId: number) {
    return this.explicaciones.obtenerParaEditar(capituloId);
  }

  /** Admin: guardar (borrador o publicado) la explicación de un capítulo. */
  @Put('admin/:capituloId')
  @Roles('admin')
  guardar(
    @Param('capituloId', ParseIntPipe) capituloId: number,
    @Body() datos: GuardarExplicacionDto,
  ) {
    return this.explicaciones.guardar(
      capituloId,
      datos.contenido,
      datos.estado,
    );
  }
}
