import { Module } from '@nestjs/common';
import { RecordatoriosCompraService } from './recordatorios-compra.service';
import { PrismaService } from '../prisma/prisma.service';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule],
  providers: [RecordatoriosCompraService, PrismaService],
  // Se exporta para que AdminModule pueda forzar un recordatorio puntual
  // desde el panel (probarlo sin esperar horas reales).
  exports: [RecordatoriosCompraService],
})
export class RecordatoriosCompraModule {}
