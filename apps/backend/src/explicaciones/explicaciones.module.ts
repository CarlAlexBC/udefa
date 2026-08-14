import { Module } from '@nestjs/common';
import { ExplicacionesService } from './explicaciones.service';
import { ExplicacionesController } from './explicaciones.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ExplicacionesService, PrismaService],
  controllers: [ExplicacionesController],
})
export class ExplicacionesModule {}
