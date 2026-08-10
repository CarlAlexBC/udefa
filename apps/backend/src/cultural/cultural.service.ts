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

  /**
   * Analítica de errores del banco CULTURAL, agregada por materia (libro) y por
   * tema. Espeja a admin.obtenerAnalitica pero recorre tema→capítulo→libro en
   * vez de bloque, porque el cultural no cuelga de bloques.
   *
   * Filtra `esCorrecta not null` (respuestas de exámenes calificables) y
   * `reactivo.banco = 'cultural'`. Hasta que haya intentos culturales, devuelve
   * todo en cero.
   */
  async obtenerAnalitica() {
    const TOP_N = 20;

    const [totalPorReactivo, incorrectasPorReactivo] = await Promise.all([
      this.prisma.respuestaReactivo.groupBy({
        by: ['reactivoId'],
        where: { esCorrecta: { not: null }, reactivo: { banco: 'cultural' } },
        _count: { _all: true },
      }),
      this.prisma.respuestaReactivo.groupBy({
        by: ['reactivoId'],
        where: { esCorrecta: false, reactivo: { banco: 'cultural' } },
        _count: { _all: true },
      }),
    ]);

    const incorrectasMap = new Map(
      incorrectasPorReactivo.map((r) => [r.reactivoId, r._count._all]),
    );
    const statsPorReactivo = totalPorReactivo.map((r) => {
      const total = r._count._all;
      const incorrectas = incorrectasMap.get(r.reactivoId) ?? 0;
      return {
        reactivoId: r.reactivoId,
        total,
        incorrectas,
        tasaError: total > 0 ? incorrectas / total : 0,
      };
    });

    // Metadata: enunciado + la cadena tema→capítulo→libro para materia y tema.
    const reactivos = await this.prisma.reactivo.findMany({
      where: { id: { in: statsPorReactivo.map((s) => s.reactivoId) } },
      select: {
        id: true,
        enunciado: true,
        temaBanco: {
          select: {
            nombre: true,
            capitulo: { select: { libro: { select: { materia: true } } } },
          },
        },
      },
    });
    const meta = new Map(reactivos.map((r) => [r.id, r]));

    const reactivosMasFallados = statsPorReactivo
      .map((s) => {
        const m = meta.get(s.reactivoId);
        return {
          reactivoId: s.reactivoId,
          enunciado: m?.enunciado ?? '(reactivo eliminado)',
          materia: m?.temaBanco?.capitulo.libro.materia ?? null,
          tema: m?.temaBanco?.nombre ?? null,
          total: s.total,
          incorrectas: s.incorrectas,
          tasaError: Number((s.tasaError * 100).toFixed(1)),
        };
      })
      .sort((a, b) => b.tasaError - a.tasaError || b.total - a.total)
      .slice(0, TOP_N);

    // Rollup por materia y por tema.
    const materiaAcc = new Map<
      string,
      { total: number; incorrectas: number }
    >();
    const temaAcc = new Map<string, { total: number; incorrectas: number }>();
    for (const s of statsPorReactivo) {
      const m = meta.get(s.reactivoId);
      if (!m?.temaBanco) continue;
      const materia = m.temaBanco.capitulo.libro.materia;
      const tema = m.temaBanco.nombre;
      const pm = materiaAcc.get(materia) ?? { total: 0, incorrectas: 0 };
      pm.total += s.total;
      pm.incorrectas += s.incorrectas;
      materiaAcc.set(materia, pm);
      const pt = temaAcc.get(tema) ?? { total: 0, incorrectas: 0 };
      pt.total += s.total;
      pt.incorrectas += s.incorrectas;
      temaAcc.set(tema, pt);
    }

    const tasa = (inc: number, tot: number) =>
      tot > 0 ? Number(((inc / tot) * 100).toFixed(1)) : 0;

    const erroresPorMateria = Array.from(materiaAcc.entries())
      .map(([materia, v]) => ({
        materia,
        total: v.total,
        incorrectas: v.incorrectas,
        tasaError: tasa(v.incorrectas, v.total),
      }))
      .sort((a, b) => b.tasaError - a.tasaError);

    const erroresPorTema = Array.from(temaAcc.entries())
      .map(([tema, v]) => ({
        tema,
        total: v.total,
        incorrectas: v.incorrectas,
        tasaError: tasa(v.incorrectas, v.total),
      }))
      .sort((a, b) => b.tasaError - a.tasaError)
      .slice(0, TOP_N); // hay ~1372 temas; solo los 20 peores

    return {
      totalRespuestasCalificadas: statsPorReactivo.reduce(
        (a, s) => a + s.total,
        0,
      ),
      reactivosMasFallados,
      erroresPorMateria,
      erroresPorTema,
    };
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
