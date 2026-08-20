import { Module } from '@nestjs/common';
import { ExplicacionesService } from './explicaciones.service';
import { ExplicacionesController } from './explicaciones.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AccesoModule } from '../acceso/acceso.module';

@Module({
  imports: [AccesoModule],
  providers: [ExplicacionesService, PrismaService],
  controllers: [ExplicacionesController],
})
export class ExplicacionesModule {}
