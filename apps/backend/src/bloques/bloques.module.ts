import { Module } from '@nestjs/common';
import { BloquesController } from './bloques.controller';
import { BloquesService } from './bloques.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [BloquesController],
  providers: [BloquesService, PrismaService],
})
export class BloquesModule {}
