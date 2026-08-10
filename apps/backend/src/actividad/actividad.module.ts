import { Module } from '@nestjs/common';
import { ActividadService } from './actividad.service';
import { ActividadController } from './actividad.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ActividadService, PrismaService],
  controllers: [ActividadController],
  // Se exporta para que examenes, intentos y repasos marquen el día activo.
  exports: [ActividadService],
})
export class ActividadModule {}
