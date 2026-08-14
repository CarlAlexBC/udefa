import {
  Controller,
  Get,
  Put,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ExplicacionesService } from './explicaciones.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

// RolesGuard deja pasar lo que no lleva @Roles: `por-reactivo` queda abierto a
// cualquier aspirante autenticado; las rutas de edición son solo admin.
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('explicaciones')
export class ExplicacionesController {
  constructor(private explicaciones: ExplicacionesService) {}

  /** Aspirante: la explicación PUBLICADA del capítulo de un reactivo (o null). */
  @Get('por-reactivo')
  porReactivo(@Query('reactivoId') reactivoId: string) {
    return this.explicaciones.porReactivo(Number(reactivoId));
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
  obtener(@Param('capituloId') capituloId: string) {
    return this.explicaciones.obtenerParaEditar(Number(capituloId));
  }

  /** Admin: guardar (borrador o publicado) la explicación de un capítulo. */
  @Put('admin/:capituloId')
  @Roles('admin')
  guardar(
    @Param('capituloId') capituloId: string,
    @Body() datos: { contenido: string; estado: 'BORRADOR' | 'PUBLICADO' },
  ) {
    return this.explicaciones.guardar(
      Number(capituloId),
      datos.contenido,
      datos.estado,
    );
  }
}
