import {
  Controller,
  Post,
  Patch,
  Get,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { IntentosService } from './intentos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

@UseGuards(JwtAuthGuard)
@Controller('intentos')
export class IntentosController {
  constructor(private intentosService: IntentosService) {}

  @Get()
  listar(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Query('examenId') examenId?: string,
    @Query('estado') estado?: string,
  ) {
    return this.intentosService.listarPorUsuario(usuario.id, {
      examenId: examenId ? Number(examenId) : undefined,
      estado,
    });
  }

  @Post()
  crear(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body()
    datos: {
      examenId: number;
      sesionCompletoId?: number;
    },
  ) {
    return this.intentosService.crear(
      usuario.id,
      datos.examenId,
      datos.sesionCompletoId,
    );
  }

  @Post(':id/responder')
  responder(
    @Param('id') id: string,
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body()
    datos: {
      reactivoId: number;
      respuestaSeleccionada: string;
      respondidoEnMs: number;
    },
  ) {
    return this.intentosService.responder(
      Number(id),
      usuario.id,
      datos.reactivoId,
      datos.respuestaSeleccionada,
      datos.respondidoEnMs,
    );
  }

  @Patch(':id/finalizar')
  finalizar(
    @Param('id') id: string,
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body() datos: { estado: 'COMPLETADA' | 'TIEMPO_AGOTADO' | 'ABANDONADA' },
  ) {
    return this.intentosService.finalizar(
      Number(id),
      usuario.id,
      datos.estado,
    );
  }

  @Get(':id/resultados')
  obtenerResultados(
    @Param('id') id: string,
    @UsuarioActual() usuario: UsuarioAutenticado,
  ) {
    return this.intentosService.obtenerResultados(Number(id), usuario.id);
  }

  @Get(':id/respuestas')
  obtenerRespuestas(
    @Param('id') id: string,
    @UsuarioActual() usuario: UsuarioAutenticado,
  ) {
    return this.intentosService.obtenerRespuestas(Number(id), usuario.id);
  }
}
