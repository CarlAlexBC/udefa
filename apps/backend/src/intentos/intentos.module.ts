import { Module } from '@nestjs/common';
import { IntentosService } from './intentos.service';
import { IntentosController } from './intentos.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [IntentosService, PrismaService],
  controllers: [IntentosController],
  exports: [IntentosService],
})
export class IntentosModule {}
