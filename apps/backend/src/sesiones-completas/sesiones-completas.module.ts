import { Module } from '@nestjs/common';
import { SesionesCompletasService } from './sesiones-completas.service';
import { SesionesCompletasController } from './sesiones-completas.controller';
import { PrismaService } from '../prisma/prisma.service';
import { IntentosModule } from '../intentos/intentos.module';

@Module({
  imports: [IntentosModule],
  providers: [SesionesCompletasService, PrismaService],
  controllers: [SesionesCompletasController],
})
export class SesionesCompletasModule {}
