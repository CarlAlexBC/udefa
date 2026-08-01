import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UsuarioActual } from '../auth/decorators/usuario-actual.decorator';
// Importado como type porque es una interface (no una class) y TS con
// `isolatedModules` + `emitDecoratorMetadata` rechaza usarla en la firma
// de un parámetro decorado si no viene de un import type.
import type { UsuarioAutenticado } from '../auth/decorators/usuario-actual.decorator';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  // Crear cuenta: SOLO admin (cortesías / cuentas manuales). El registro público
  // gratuito se retiró — una cuenta nueva nace al comprar (registrar-y-pagar) o
  // la crea un admin aquí. Así la base no se llena de cuentas sin compra.
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
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

  /* ═══════════════════════════════════════════════════════════
     Endpoints admin
     ═══════════════════════════════════════════════════════════ */

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  listarParaAdmin(
    @Query('take') take?: string,
    @Query('skip') skip?: string,
    @Query('search') search?: string,
  ) {
    return this.usuariosService.listarParaAdmin({
      take: take ? Number(take) : undefined,
      skip: skip ? Number(skip) : undefined,
      search: search || undefined,
    });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id/rol')
  cambiarRol(
    @Param('id') id: string,
    @Body() datos: { rol: string },
    @UsuarioActual() admin: UsuarioAutenticado,
  ) {
    return this.usuariosService.cambiarRol(Number(id), datos.rol, admin);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id/plantel')
  cambiarPlantelDeUsuario(
    @Param('id') id: string,
    @Body() datos: { plantelId: number },
  ) {
    return this.usuariosService.cambiarPlantelDeUsuario(
      Number(id),
      datos.plantelId,
    );
  }
}
