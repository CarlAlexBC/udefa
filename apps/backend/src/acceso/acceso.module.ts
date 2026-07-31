import { Module } from '@nestjs/common';
import { AccesoService } from './acceso.service';
import { AccesoController } from './acceso.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [AccesoService, PrismaService],
  controllers: [AccesoController],
  // Se exporta para que IntentosModule pueda usar el candado al crear un intento.
  exports: [AccesoService],
})
export class AccesoModule {}
