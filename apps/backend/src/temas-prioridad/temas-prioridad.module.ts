import { Module } from '@nestjs/common';
import { TemasPrioridadService } from './temas-prioridad.service';
import { TemasPrioridadController } from './temas-prioridad.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TemasPrioridadController],
  providers: [TemasPrioridadService, PrismaService],
  exports: [TemasPrioridadService],
})
export class TemasPrioridadModule {}
