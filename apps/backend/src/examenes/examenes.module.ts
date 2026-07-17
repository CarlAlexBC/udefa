import { Module } from '@nestjs/common';
import { ExamenesController } from './examenes.controller';
import { ExamenesService } from './examenes.service';
import { PrismaService } from '../prisma/prisma.service';
import { TemasPrioridadModule } from '../temas-prioridad/temas-prioridad.module';


@Module({
  imports: [TemasPrioridadModule],
  controllers: [ExamenesController],
  providers: [ExamenesService, PrismaService]
})
export class ExamenesModule {}
