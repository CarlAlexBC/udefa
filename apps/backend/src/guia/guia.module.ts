import { Module } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { GuiaController } from './guia.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AccesoModule } from '../acceso/acceso.module';

@Module({
  imports: [AccesoModule],
  providers: [GuiaService, PrismaService],
  controllers: [GuiaController],
})
export class GuiaModule {}
