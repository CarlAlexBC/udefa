import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BloquesService {
  constructor(private prisma: PrismaService) {}

  async crear(
    examenId: number,
    nombre: string,
    orden: number,
    tiempoLimite: number,
  ) {
    return this.prisma.bloque.create({
      data: {
        examenId,
        nombre,
        orden,
        tiempoLimite,
      },
    });
  }

  async obtenerTodos() {
    return this.prisma.bloque.findMany();
  }

  async borrar(id: number) {
    return this.prisma.bloque.delete({
      where: { id },
    });
  }
}
