import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GuiaService } from './guia.service';
import { MarcarLeidaDto, MarcarVariasDto } from './dto/marcar-leida.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

/**
 * Avance de lectura de la Guía del Aspirante.
 *
 * Todo va por el usuario de la sesión: nunca se recibe un usuarioId por
 * parámetro, así que nadie puede leer ni tocar el avance de otro.
 */
@UseGuards(JwtAuthGuard)
@Controller('guia')
export class GuiaController {
  constructor(private guiaService: GuiaService) {}

  /** Las secciones que ya leí. */
  @Get('leidas')
  misLeidas(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.guiaService.leidas(usuario.id);
  }

  /** Marcar una sección como leída. Se puede llamar de más: es idempotente. */
  @Post('leidas')
  @HttpCode(204)
  async marcar(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body() dto: MarcarLeidaDto,
  ) {
    await this.guiaService.marcar(usuario.id, dto.slug);
  }

  /**
   * Subir de un golpe el avance que el aspirante traía en su navegador, de
   * cuando esto no se guardaba en la base. Se llama una sola vez por equipo.
   */
  @Post('leidas/lote')
  @HttpCode(204)
  async marcarVarias(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body() dto: MarcarVariasDto,
  ) {
    await this.guiaService.marcarVarias(usuario.id, dto.slugs);
  }

  /** Reiniciar mi avance. */
  @Delete('leidas')
  @HttpCode(204)
  async reiniciar(@UsuarioActual() usuario: UsuarioAutenticado) {
    await this.guiaService.reiniciar(usuario.id);
  }
}
