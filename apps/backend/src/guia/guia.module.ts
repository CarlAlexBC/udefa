import { Module } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { GuiaController } from './guia.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [GuiaService, PrismaService],
  controllers: [GuiaController],
})
export class GuiaModule {}
