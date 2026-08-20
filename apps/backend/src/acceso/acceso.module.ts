import { Module } from '@nestjs/common';
import { AccesoService } from './acceso.service';
import { AccesoController } from './acceso.controller';
import { CandadoGuard } from './candado.guard';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [AccesoService, CandadoGuard, PrismaService],
  controllers: [AccesoController],
  // Se exportan para que otros módulos puedan poner el muro de pago:
  // AccesoService (candado a mano, como en IntentosService.crear) y
  // CandadoGuard (candado declarativo con @Modulo, en práctica/repaso/explicaciones).
  exports: [AccesoService, CandadoGuard],
})
export class AccesoModule {}
