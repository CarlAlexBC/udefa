import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { AccesoModule } from '../acceso/acceso.module';

@Module({
  // AccesoModule exporta AccesoService: el pago aprobado otorga acceso con él.
  imports: [AccesoModule],
  providers: [PagosService],
  controllers: [PagosController],
})
export class PagosModule {}
