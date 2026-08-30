import { Controller, Get } from '@nestjs/common';
import { TropaService } from './tropa.service';

@Controller('tropa')
export class TropaController {
  constructor(private tropaService: TropaService) {}

  // Público -- igual que /planteles, el aspirante de tropa elige su curso
  // antes de tener cuenta.
  @Get('cursos')
  obtenerCursos() {
    return this.tropaService.obtenerCursos();
  }
}
