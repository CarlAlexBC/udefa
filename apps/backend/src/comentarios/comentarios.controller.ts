import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ComentariosService } from './comentarios.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

/**
 * Buzón de comentarios.
 *
 * OJO CON EL ORDEN DE LOS DECORADORES. Aquí conviven rutas del aspirante y
 * rutas del panel, y `@UseGuards` aplica al método que va INMEDIATAMENTE
 * debajo. Si se mete un método nuevo entre un guard y su método, la ruta se
 * queda sin candado y compila igual — ya pasó una vez en este proyecto. Cada
 * método de abajo lleva su guard pegado, sin excepción.
 */
@Controller('comentarios')
export class ComentariosController {
  constructor(private comentariosService: ComentariosService) {}

  /**
   * El aspirante manda su comentario.
   *
   * Con freno de 5 por hora: el buzón lo lee una persona, y sin tope basta un
   * aburrido para dejarlo inservible.
   */
  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 5, ttl: 60 * 60 * 1000 } })
  @Post()
  crear(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body('texto') texto: string,
  ) {
    return this.comentariosService.crear(usuario.id, texto);
  }

  /** Lista para el panel. */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  listar(@Query('sinLeer') sinLeer?: string) {
    return this.comentariosService.listarParaAdmin({
      soloSinLeer: sinLeer === '1',
    });
  }

  /** Cuántos sin leer: es el globito del menú del panel. */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('sin-leer')
  contarSinLeer() {
    return this.comentariosService.contarSinLeer();
  }

  /** Marca leído / sin leer. */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id/leido')
  marcarLeido(
    @Param('id', ParseIntPipe) id: number,
    @Body('leido') leido?: boolean,
  ) {
    return this.comentariosService.marcarLeido(id, leido !== false);
  }
}
