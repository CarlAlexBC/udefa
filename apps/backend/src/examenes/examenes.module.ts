import { Module } from '@nestjs/common';
import { ExamenesController } from './examenes.controller';
import { ExamenesService } from './examenes.service';
import { PrismaService } from '../prisma/prisma.service';
import { TemasPrioridadModule } from '../temas-prioridad/temas-prioridad.module';
import { ActividadModule } from '../actividad/actividad.module';

@Module({
  imports: [TemasPrioridadModule, ActividadModule],
  controllers: [ExamenesController],
  providers: [ExamenesService, PrismaService],
})
export class ExamenesModule {}
