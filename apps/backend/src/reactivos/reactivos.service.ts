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

  /**
   * Edita un reactivo existente. Solo toca los campos que llegan definidos:
   * Prisma ignora las claves `undefined`, así que un PATCH parcial no borra
   * lo que no se envía.
   */
  async actualizar(
    id: number,
    datos: {
      enunciado?: string;
      opciones?: any;
      respuestaCorrecta?: string | null;
      explicacion?: string | null;
      tema?: string | null;
      referencia?: string | null;
    },
  ) {
    return this.prisma.reactivo.update({
      where: { id },
      data: datos,
      // Mismo shape que obtenerTodos, para que el frontend refresque la fila
      // completa (incluida la fase) sin un fetch extra.
      include: {
        bloque: {
          select: {
            id: true,
            nombre: true,
            examen: { select: { id: true, tipo: true } },
          },
        },
      },
    });
  }

  async obtenerTodos(
    opciones: {
      take?: number;
      skip?: number;
      bloqueId?: number;
      examenId?: number;
      tema?: string;
      polaridad?: 'POSITIVA' | 'NEGATIVA';
      search?: string;
      banco?: string;
    } = {},
  ) {
    // Paginacion: default 50, tope 200 para evitar descargas masivas.
    const TAKE_DEFAULT = 50;
    const TAKE_MAX = 200;

    const take = Math.min(opciones.take ?? TAKE_DEFAULT, TAKE_MAX);
    const skip = opciones.skip ?? 0;

    // Construimos el `where` dinámicamente. Cada filtro es opcional y se combina
    // con AND implícito. `search` hace ilike sobre el enunciado.
    // examenId se filtra vía la relación bloque → examen (sin necesidad de joins manuales).
    const where: {
      bloqueId?: number;
      tema?: string;
      polaridad?: 'POSITIVA' | 'NEGATIVA';
      enunciado?: { contains: string; mode: 'insensitive' };
      bloque?: { examenId: number };
      banco?: string;
    } = {};
    if (opciones.bloqueId) where.bloqueId = opciones.bloqueId;
    if (opciones.tema) where.tema = opciones.tema;
    if (opciones.polaridad) where.polaridad = opciones.polaridad;
    if (opciones.banco) where.banco = opciones.banco;
    if (opciones.search) {
      where.enunciado = { contains: opciones.search, mode: 'insensitive' };
    }
    if (opciones.examenId) {
      where.bloque = { examenId: opciones.examenId };
    }

    const [data, total] = await Promise.all([
      this.prisma.reactivo.findMany({
        where,
        take,
        skip,
        orderBy: { id: 'asc' },
        // Incluimos bloque + examen para que el admin panel muestre a qué fase
        // pertenece cada reactivo sin hacer N+1 fetches desde el frontend.
        include: {
          bloque: {
            select: {
              id: true,
              nombre: true,
              examen: { select: { id: true, tipo: true } },
            },
          },
        },
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

  /**
   * Lista los temas distintos del banco, opcionalmente filtrados por examen.
   * Usa Prisma `distinct` para no traer duplicados del server.
   */
  async listarTemas(examenId?: number, banco?: string) {
    const registros = await this.prisma.reactivo.findMany({
      where: {
        tema: { not: null },
        ...(examenId ? { bloque: { examenId } } : {}),
        ...(banco ? { banco } : {}),
      },
      select: { tema: true },
      distinct: ['tema'],
      orderBy: { tema: 'asc' },
    });
    return registros.map((r) => r.tema).filter((t): t is string => t !== null);
  }

  /**
   * Igual que `listarTemas` pero con el número de reactivos de cada tema, en un
   * solo `groupBy` (no N counts). Alimenta el árbol del banco psicológico para
   * que cada tema muestre su tamaño, igual que el Banco cultural. Excluye los
   * reactivos sin tema —los mismos que `listarTemas` ya no lista—; siguen siendo
   * accesibles por búsqueda.
   */
  async listarTemasConConteo(examenId?: number, banco?: string) {
    const grupos = await this.prisma.reactivo.groupBy({
      by: ['tema'],
      where: {
        tema: { not: null },
        ...(examenId ? { bloque: { examenId } } : {}),
        ...(banco ? { banco } : {}),
      },
      _count: { _all: true },
      orderBy: { tema: 'asc' },
    });
    return grupos
      .filter((g): g is typeof g & { tema: string } => g.tema !== null)
      .map((g) => ({ tema: g.tema, total: g._count._all }));
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
