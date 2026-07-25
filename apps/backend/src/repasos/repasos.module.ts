import { Module } from '@nestjs/common';
import { RepasosService } from './repasos.service';
import { RepasosController } from './repasos.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [RepasosService, PrismaService],
  controllers: [RepasosController],
  // Se exporta para que IntentosModule pueda sembrar la cola al finalizar.
  exports: [RepasosService],
})
export class RepasosModule {}
