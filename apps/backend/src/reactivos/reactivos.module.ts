import { Module } from '@nestjs/common';
import { ReactivosController } from './reactivos.controller';
import { ReactivosService } from './reactivos.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ReactivosController],
  providers: [ReactivosService, PrismaService],
})
export class ReactivosModule {}
