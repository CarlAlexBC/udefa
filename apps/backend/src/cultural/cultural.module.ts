import { Module } from '@nestjs/common';
import { CulturalController } from './cultural.controller';
import { CulturalService } from './cultural.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CulturalController],
  providers: [CulturalService, PrismaService],
})
export class CulturalModule {}
