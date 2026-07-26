import { Module } from '@nestjs/common';
import { TemariosService } from './temarios.service';
import { TemariosController } from './temarios.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TemariosController],
  providers: [TemariosService, PrismaService],
  exports: [TemariosService],
})
export class TemariosModule {}
