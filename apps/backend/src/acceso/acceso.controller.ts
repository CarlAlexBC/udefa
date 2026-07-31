import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AccesoService } from './acceso.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  UsuarioActual,
  type UsuarioAutenticado,
} from '../auth/decorators/usuario-actual.decorator';

@UseGuards(JwtAuthGuard)
@Controller('acceso')
export class AccesoController {
  constructor(private accesoService: AccesoService) {}

  /**
   * Estado de acceso del usuario autenticado, para pintar el candado en /inicio:
   * - `candadoActivo`: si el muro de pago está encendido (si no, no hay candado
   *   que mostrar porque todo está abierto).
   * - `modulos`: los módulos de pago que tiene desbloqueados ahora mismo.
   */
  @Get('mios')
  async mios(@UsuarioActual() usuario: UsuarioAutenticado) {
    return {
      candadoActivo: this.accesoService.candadoActivo(),
      modulos: await this.accesoService.modulosVigentes(usuario.id),
    };
  }

  /* ═══════════════════════════════════════════════════════════
     Admin — dar/ver/quitar acceso a mano (ventas por fuera, cortesías, pruebas)
     ═══════════════════════════════════════════════════════════ */

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Post()
  otorgar(
    @Body()
    datos: {
      usuarioId: number;
      modulos: string[];
      ciclo: string;
      expiraEn?: string | null;
      origen?: string;
    },
  ) {
    return this.accesoService.otorgar(
      datos.usuarioId,
      datos.modulos,
      datos.ciclo,
      datos.expiraEn ? new Date(datos.expiraEn) : null,
      datos.origen,
    );
  }

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Get('usuario/:id')
  listarDeUsuario(@Param('id') id: string) {
    return this.accesoService.listarDeUsuario(Number(id));
  }

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Delete(':id')
  revocar(@Param('id') id: string) {
    return this.accesoService.revocar(Number(id));
  }
}
