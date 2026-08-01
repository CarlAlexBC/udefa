import { Module } from '@nestjs/common';
import { MuestraController } from './muestra.controller';
import { MuestraService } from './muestra.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MuestraController],
  providers: [MuestraService, PrismaService],
})
export class MuestraModule {}
