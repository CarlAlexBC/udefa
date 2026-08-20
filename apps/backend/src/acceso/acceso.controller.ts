import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OtorgarAccesoDto } from './dto/otorgar-acceso.dto';
import { UsuariosService } from '../usuarios/usuarios.service';
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
  constructor(
    private accesoService: AccesoService,
    private usuariosService: UsuariosService,
  ) {}

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
  async otorgar(@Body() datos: OtorgarAccesoDto) {
    const accesos = await this.accesoService.otorgar(
      datos.usuarioId,
      datos.modulos,
      datos.ciclo,
      datos.expiraEn ? new Date(datos.expiraEn) : null,
      datos.origen,
    );

    // Dar acceso a mano también ACTIVA la cuenta. Sin esto, alguien que compró
    // por fuera y llegó por "datos y luego pagar" se queda en PENDIENTE, y el
    // login lo rechaza diciéndole que espera su pago — a alguien que ya pagó.
    // (Se activa aquí y no dentro de AccesoService.otorgar a propósito: ese
    // método también lo llama el webhook de Mercado Pago, y allí la activación
    // tiene que ocurrir DESPUÉS, porque `activarParaCompra` distingue la primera
    // activación para mandar el correo de compra una sola vez.)
    await this.usuariosService.activar(datos.usuarioId);

    return accesos;
  }

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Get('usuario/:id')
  listarDeUsuario(@Param('id', ParseIntPipe) id: number) {
    return this.accesoService.listarDeUsuario(id);
  }

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Delete(':id')
  revocar(@Param('id', ParseIntPipe) id: number) {
    return this.accesoService.revocar(id);
  }
}
