import { Body, Controller, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post('registro')
  registrar(@Body() datos: CrearUsuarioDto) {
    return this.usuariosService.registrar(datos);
  }

  /**
   * Asigna (o cambia) el plantel del usuario autenticado.
   * Útil para migrar usuarios legacy que se registraron antes de que el
   * campo `plantelId` fuera obligatorio.
   */
  @UseGuards(JwtAuthGuard)
  @Patch('mi-plantel')
  asignarMiPlantel(
    @Request() req: { user: { id: number } },
    @Body() datos: { plantelId: number },
  ) {
    return this.usuariosService.asignarPlantel(req.user.id, datos.plantelId);
  }
}
