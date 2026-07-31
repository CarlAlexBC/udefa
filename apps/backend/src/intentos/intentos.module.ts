import { Module } from '@nestjs/common';
import { IntentosService } from './intentos.service';
import { IntentosController } from './intentos.controller';
import { PrismaService } from '../prisma/prisma.service';
import { RepasosModule } from '../repasos/repasos.module';
import { AccesoModule } from '../acceso/acceso.module';

@Module({
  imports: [RepasosModule, AccesoModule],
  providers: [IntentosService, PrismaService],
  controllers: [IntentosController],
  exports: [IntentosService],
})
export class IntentosModule {}
