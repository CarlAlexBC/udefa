import { Injectable, NotFoundException } from '@nestjs/common';
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

  async armarExamen(examenId: number, reactivosPorBloque: number = 25) {
    const examen = await this.prisma.examen.findUnique({
      where: { id: examenId },
      include: {
        bloques: {
          orderBy: { orden: 'asc' },
        },
      },
    });

    if (!examen) {
      throw new NotFoundException('Examen no encontrado');
    }

    const bloquesConReactivos = await Promise.all(
      examen.bloques.map(async (bloque) => ({
        ...bloque,
        reactivos: await this.obtenerReactivosAleatoriosDeBloque(
          bloque.id,
          reactivosPorBloque,
        ),
      })),
    );

    return {
      ...examen,
      bloques: bloquesConReactivos,
    };
  }

  private async obtenerReactivosAleatoriosDeBloque(
    bloqueId: number,
    cantidad: number,
  ) {
    const todosLosIds = await this.prisma.reactivo.findMany({
      where: { bloqueId },
      select: { id: true },
    });

    const idsAleatorios = this.mezclar(todosLosIds.map((r) => r.id)).slice(
      0,
      cantidad,
    );

    const reactivos = await this.prisma.reactivo.findMany({
      where: { id: { in: idsAleatorios } },
      select: {
        id: true,
        enunciado: true,
        opciones: true,
        tipo: true,
        tema: true,
        imagenUrl: true,
      },
    });

    const porId = new Map(reactivos.map((r) => [r.id, r]));
    return idsAleatorios.map((id) => porId.get(id)!);
  }

  private mezclar<T>(arreglo: T[]): T[] {
    const copia = [...arreglo];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }
}
