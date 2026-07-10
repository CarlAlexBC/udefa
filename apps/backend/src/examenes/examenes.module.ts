import { Module } from '@nestjs/common';
import { ExamenesController } from './examenes.controller';
import { ExamenesService } from './examenes.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  controllers: [ExamenesController],
  providers: [ExamenesService, PrismaService]
})
export class ExamenesModule {}
