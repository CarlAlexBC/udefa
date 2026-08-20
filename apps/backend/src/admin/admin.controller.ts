import { Controller, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

/**
 * Endpoints del dashboard del panel admin.
 * Todo requiere rol admin.
 */
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('stats')
  obtenerStats() {
    return this.adminService.obtenerStats();
  }

  @Get('analitica')
  obtenerAnalitica() {
    return this.adminService.obtenerAnalitica();
  }

  /**
   * Distribución de respuestas para exámenes sin acierto/error
   * (Personalidad=2, Axiológico=3). Ver AdminService.obtenerDistribucion.
   */
  @Get('distribucion')
  obtenerDistribucion(@Query('examenId', ParseIntPipe) examenId: number) {
    return this.adminService.obtenerDistribucion(examenId);
  }

  /**
   * Cuentas a vigilar por posible "vaciado" del banco (Capa 3 · Mov. 2).
   * Lista rankeada por cobertura del banco. Ver AdminService.cuentasAVigilar.
   */
  @Get('vaciado')
  cuentasAVigilar() {
    return this.adminService.cuentasAVigilar();
  }

  /**
   * Reactivos-canario (trampas anti-copia, Capa 5). Ver AdminService.canarios.
   */
  @Get('canarios')
  canarios() {
    return this.adminService.canarios();
  }

  /**
   * Bancos del sistema: cuál se sirve de verdad y cuál sigue guardado sin uso.
   * Ver AdminService.bancos.
   */
  @Get('bancos')
  bancos() {
    return this.adminService.bancos();
  }
}
