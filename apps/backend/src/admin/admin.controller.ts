import { Controller, Get, UseGuards } from '@nestjs/common';
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
}
