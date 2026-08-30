import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlantelesService {
  constructor(private prisma: PrismaService) {}

  async crear(nombre: string, descripcion?: string) {
    return this.prisma.plantel.create({
      data: {
        nombre,
        descripcion,
      },
    });
  }

  // Esta lista alimenta el formulario público de registro y el panel de
  // Planteles del admin -- los dos son sólo escuelas de ADMISIÓN. Los
  // "Plantel" de tropa (tipo TROPA) son cursos, no escuelas reales; se
  // gestionan aparte, nunca aquí.
  async obtenerTodos() {
    return this.prisma.plantel.findMany({ where: { tipo: 'ADMISION' } });
  }

  async borrar(id: number) {
    return this.prisma.plantel.delete({
      where: { id },
    });
  }

  async actualizar(id: number, nombre: string, descripcion?: string) {
    return this.prisma.plantel.update({
      where: { id },
      data: {
        nombre,
        descripcion,
      },
    });
  }
}
