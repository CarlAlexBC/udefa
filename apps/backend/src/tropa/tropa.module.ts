import { Module } from '@nestjs/common';
import { TropaController } from './tropa.controller';
import { TropaService } from './tropa.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TropaController],
  providers: [TropaService, PrismaService],
})
export class TropaModule {}
