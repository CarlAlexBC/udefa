import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Vista de solo lectura del banco cultural (árbol de oferta) para el panel admin.
 *
 * El banco cultural NO cuelga de bloques: el reactivo pertenece a un Tema, que
 * pertenece a un Capítulo, que pertenece a un Libro. Este servicio recorre ese
 * árbol para que el admin pueda navegarlo. La escritura (importar/editar) vive
 * en otro lado; aquí solo se lee.
 */
@Injectable()
export class CulturalService {
  constructor(private prisma: PrismaService) {}

  /** Lista de libros con su conteo de capítulos y de reactivos. */
  async listarLibros() {
    const libros = await this.prisma.libro.findMany({
      orderBy: { materia: 'asc' },
      include: { _count: { select: { capitulos: true } } },
    });

    // Reactivos por libro: un count por libro siguiendo la cadena
    // reactivo → tema → capítulo → libro. Son pocos libros (7), así que el
    // puñado de counts en paralelo no pesa.
    return Promise.all(
      libros.map(async (l) => ({
        id: l.id,
        slug: l.slug,
        materia: l.materia,
        autor: l.autor,
        edicion: l.edicion,
        anio: l.anio,
        capitulos: l._count.capitulos,
        reactivos: await this.prisma.reactivo.count({
          where: { temaBanco: { capitulo: { libroId: l.id } } },
        }),
      })),
    );
  }

  /** Árbol de un libro: capítulos → temas, con el conteo de reactivos por tema. */
  async obtenerLibro(id: number) {
    return this.prisma.libro.findUnique({
      where: { id },
      include: {
        capitulos: {
          orderBy: { numero: 'asc' },
          include: {
            temas: {
              orderBy: { nombre: 'asc' },
              include: { _count: { select: { reactivos: true } } },
            },
          },
        },
      },
    });
  }

  /** Reactivos de un tema, para revisar el contenido. */
  async listarReactivosDeTema(temaId: number) {
    return this.prisma.reactivo.findMany({
      where: { temaId },
      orderBy: { id: 'asc' },
      select: {
        id: true,
        enunciado: true,
        opciones: true,
        respuestaCorrecta: true,
        explicacion: true,
        referencia: true,
        tema: true,
      },
    });
  }
}
