import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReactivosService {
  constructor(private prisma: PrismaService) {}

  async crear(
    bloqueId: number,
    enunciado: string,
    opciones: any,
    tipo: string,
    respuestaCorrecta?: string,
    explicacion?: string,
    tema?: string,
    imagenUrl?: string,
  ) {
    return this.prisma.reactivo.create({
      data: {
        bloqueId,
        enunciado,
        opciones,
        tipo,
        respuestaCorrecta,
        explicacion,
        tema,
        imagenUrl,
      },
    });
  }

  async obtenerTodos(opciones: {
    take?: number;
    skip?: number;
    bloqueId?: number;
  } = {}) {
    // Paginacion: default 50, tope 200 para evitar descargas masivas.
    const TAKE_DEFAULT = 50;
    const TAKE_MAX = 200;

    const take = Math.min(opciones.take ?? TAKE_DEFAULT, TAKE_MAX);
    const skip = opciones.skip ?? 0;

    const where = opciones.bloqueId ? { bloqueId: opciones.bloqueId } : {};

    const [data, total] = await Promise.all([
      this.prisma.reactivo.findMany({
        where,
        take,
        skip,
        orderBy: { id: 'asc' },
      }),
      this.prisma.reactivo.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        take,
        skip,
        hasMore: skip + data.length < total,
      },
    };
  }

  async borrar(id: number) {
    return this.prisma.reactivo.delete({
      where: { id },
    });
  }

  async crearMuchos(reactivos: any[]) {
    return this.prisma.reactivo.createMany({
      data: reactivos,
    });
  }

}