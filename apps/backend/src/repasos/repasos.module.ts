import { Module } from '@nestjs/common';
import { RepasosService } from './repasos.service';
import { RepasosController } from './repasos.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ActividadModule } from '../actividad/actividad.module';
import { AccesoModule } from '../acceso/acceso.module';

@Module({
  imports: [ActividadModule, AccesoModule],
  providers: [RepasosService, PrismaService],
  controllers: [RepasosController],
  // Se exporta para que IntentosModule pueda sembrar la cola al finalizar.
  exports: [RepasosService],
})
export class RepasosModule {}
