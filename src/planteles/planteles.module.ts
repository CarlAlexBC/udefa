import { Module } from '@nestjs/common';
import { PlantelesController } from './planteles.controller';
import { PlantelesService } from './planteles.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  controllers: [PlantelesController],
  providers: [PlantelesService, PrismaService]
})
export class PlantelesModule {}
