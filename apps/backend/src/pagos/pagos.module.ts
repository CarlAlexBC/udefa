import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { AccesoModule } from '../acceso/acceso.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  // AccesoModule exporta AccesoService: el pago aprobado otorga acceso con él.
  // UsuariosModule exporta UsuariosService: crea la cuenta PENDIENTE del flujo
  // "datos y luego pagar" y la activa cuando el pago se aprueba.
  // AuthModule exporta AuthService: al activar una cuenta de invitado, anula la
  // contraseña del formulario y arma el enlace para que el dueño la defina.
  imports: [AccesoModule, UsuariosModule, AuthModule],
  providers: [PagosService],
  controllers: [PagosController],
})
export class PagosModule {}
