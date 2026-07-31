import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaService],
  // Se exporta para que PagosModule lo reuse en el flujo "datos y luego pagar"
  // (crear la cuenta PENDIENTE y activarla al aprobarse el pago).
  exports: [UsuariosService],
})
export class UsuariosModule {}