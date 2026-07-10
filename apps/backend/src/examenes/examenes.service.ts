import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExamenesService {
  constructor(private prisma: PrismaService) {}

  async crear(tipo: string, nombre: string, duracionMin: number, calificable: boolean) {
    return this.prisma.examen.create({
      data: {
        tipo,
        nombre,
        duracionMin,
        calificable,
      },
    });
  }

  async obtenerTodos() {
    return this.prisma.examen.findMany();
  }

  async actualizar(id: number, tipo: string, nombre: string, duracionMin: number, calificable: boolean) {
    return this.prisma.examen.update({
      where: { id },
      data: {
        tipo,
        nombre,
        duracionMin,
        calificable,
      },
    });
  }

  async borrar(id: number) {
    return this.prisma.examen.delete({
      where: { id },
    });
  }

async armarExamen(examenId: number) {
    const examen = await this.prisma.examen.findUnique({
      where: { id: examenId },
      include: {
        bloques: {
          orderBy: { orden: 'asc' },
          include: {
            reactivos: {
              select: {
                id: true,
                enunciado: true,
                opciones: true,
                tipo: true,
                tema: true,
                imagenUrl: true,
              },
            },
          },
        },
      },
    });

    return examen;
  }

}