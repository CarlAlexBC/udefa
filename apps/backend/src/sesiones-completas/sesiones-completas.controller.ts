import {
  Controller,
  Post,
  Patch,
  Get,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { SesionesCompletasService } from './sesiones-completas.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

@UseGuards(JwtAuthGuard)
@Controller('sesiones-completas')
export class SesionesCompletasController {
  constructor(private sesionesCompletasService: SesionesCompletasService) {}

  @Post()
  crear(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @Body() datos: { plantelId: number },
  ) {
    return this.sesionesCompletasService.crear(usuario.id, datos.plantelId);
  }

  @Patch(':id/finalizar')
  finalizar(
    @Param('id') id: string,
    @Body() datos: { estado: 'COMPLETADA' | 'ABANDONADA' },
  ) {
    return this.sesionesCompletasService.finalizar(Number(id), datos.estado);
  }

  @Get(':id/resultados')
  obtenerResultados(@Param('id') id: string) {
    return this.sesionesCompletasService.obtenerResultados(Number(id));
  }
}
