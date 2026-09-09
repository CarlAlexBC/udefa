import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PrismaService } from '../prisma/prisma.service';
import { RecordatoriosCompraModule } from '../recordatorios-compra/recordatorios-compra.module';

@Module({
  imports: [RecordatoriosCompraModule],
  controllers: [AdminController],
  providers: [AdminService, PrismaService],
})
export class AdminModule {}
