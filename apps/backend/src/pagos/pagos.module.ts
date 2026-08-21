import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { AccesoModule } from '../acceso/acceso.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  // AccesoModule exporta AccesoService: el pago aprobado otorga acceso con él.
  // UsuariosModule exporta UsuariosService: crea la cuenta PENDIENTE del flujo
  // "datos y luego pagar" y la activa cuando el pago se aprueba.
  imports: [AccesoModule, UsuariosModule],
  // PrismaService: cada pago aprobado se anota en el libro de caja (modelo Pago).
  providers: [PagosService, PrismaService],
  controllers: [PagosController],
})
export class PagosModule {}
