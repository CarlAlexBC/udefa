import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Métricas agregadas para el dashboard del admin panel.
 *
 * Regla de diseño: un único endpoint que devuelve todas las stats en una
 * sola llamada. Prisma corre los counts en paralelo con Promise.all para
 * minimizar el round-trip a la BD. El frontend recibe un payload compacto
 * y lo pinta directo sin más queries.
 */
@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async obtenerStats() {
    const hace30Dias = new Date();
    hace30Dias.setDate(hace30Dias.getDate() - 30);

    const [
      usuariosTotal,
      usuariosActivos30d,
      sesionesTotal,
      sesionesCompletadas,
      sesionesAbandonadas,
      intentosTotal,
      reactivosTotal,
      distribucionPorPlantelRaw,
      reactivosPorExamenRaw,
      intentosPorExamenRaw,
      recientes,
    ] = await Promise.all([
      this.prisma.usuario.count(),
      // Activos = usuarios con al menos una sesión creada en los últimos 30 días.
      this.prisma.usuario.count({
        where: { sesionesCompletas: { some: { createdAt: { gte: hace30Dias } } } },
      }),
      this.prisma.sesionExamenCompleto.count(),
      this.prisma.sesionExamenCompleto.count({
        where: { estado: 'COMPLETADA' },
      }),
      this.prisma.sesionExamenCompleto.count({
        where: { estado: 'ABANDONADA' },
      }),
      this.prisma.intentoExamen.count(),
      this.prisma.reactivo.count(),
      // groupBy usuarios por plantelId + join a nombre del plantel
      this.prisma.usuario.groupBy({
        by: ['plantelId'],
        _count: { _all: true },
        orderBy: { _count: { plantelId: 'desc' } },
      }),
      // Reactivos por examen: no puedo `groupBy` de reactivo filtrando por
      // relación, así que hago 3 counts en paralelo filtrando por
      // `bloque.examenId`. La forma [{examenId, _count:number}] la uso
      // más abajo para armar reactivosPorFase.
      Promise.all(
        [1, 2, 3].map(async (examenId) => ({
          examenId,
          _count: await this.prisma.reactivo.count({
            where: { bloque: { examenId } },
          }),
        })),
      ),
      // Intentos agrupados por examenId directamente.
      this.prisma.intentoExamen.groupBy({
        by: ['examenId'],
        _count: { _all: true },
      }),
      // Últimas 10 sesiones completadas para el feed de actividad reciente.
      this.prisma.sesionExamenCompleto.findMany({
        where: { estado: 'COMPLETADA' },
        take: 10,
        orderBy: { updatedAt: 'desc' },
        select: {
          id: true,
          estado: true,
          createdAt: true,
          updatedAt: true,
          usuario: { select: { nombre: true, email: true } },
          plantel: { select: { nombre: true } },
        },
      }),
    ]);

    // Enriquecer distribucionPorPlantel con el nombre del plantel
    const plantelIds = distribucionPorPlantelRaw
      .map((d) => d.plantelId)
      .filter((id): id is number => id !== null);
    const planteles = await this.prisma.plantel.findMany({
      where: { id: { in: plantelIds } },
      select: { id: true, nombre: true },
    });
    const nombrePorId = new Map(planteles.map((p) => [p.id, p.nombre]));
    const distribucionPorPlantel = distribucionPorPlantelRaw.map((d) => ({
      plantelId: d.plantelId,
      plantelNombre:
        d.plantelId !== null
          ? nombrePorId.get(d.plantelId) ?? `Plantel ${d.plantelId}`
          : 'Sin plantel',
      usuarios: d._count._all,
    }));

    // Nombres legibles de los 3 exámenes (id fijo por convención del seed).
    const NOMBRE_EXAMEN: Record<number, string> = {
      1: 'Psicométrico',
      2: 'Personalidad',
      3: 'Axiológico',
    };
    const reactivosPorFase = reactivosPorExamenRaw.map((r) => ({
      examenId: r.examenId,
      nombre: NOMBRE_EXAMEN[r.examenId] ?? `Examen ${r.examenId}`,
      total: r._count,
    }));
    const intentosPorFase = intentosPorExamenRaw.map((r) => ({
      examenId: r.examenId,
      nombre: NOMBRE_EXAMEN[r.examenId] ?? `Examen ${r.examenId}`,
      total: r._count._all,
    }));

    return {
      usuarios: { total: usuariosTotal, activos30d: usuariosActivos30d },
      sesiones: {
        total: sesionesTotal,
        completadas: sesionesCompletadas,
        abandonadas: sesionesAbandonadas,
      },
      intentos: { total: intentosTotal, porFase: intentosPorFase },
      reactivos: { total: reactivosTotal, porFase: reactivosPorFase },
      distribucionPorPlantel,
      recientes,
    };
  }

  /**
   * Analítica de errores del banco.
   *
   * Clave de diseño: filtramos por `esCorrecta not null`. Ese campo es un
   * snapshot que solo se llena en exámenes calificables (psicométrico); en
   * personalidad/axiológico queda null porque no hay acierto/error. Así que
   * `esCorrecta not null` ⟺ respuesta de un examen calificable — sin
   * necesidad de joinear a examen.calificable.
   *
   * Estrategia de eficiencia:
   *   1. Dos groupBy por reactivoId (total + incorrectas) — agregación en la BD.
   *   2. Un findMany de los reactivos referenciados (para nombre/tema/bloque).
   *   3. Rollup en memoria a nivel bloque y tema sobre los conteos ya agregados
   *      (no sobre las respuestas crudas — el set es chico).
   */
  async obtenerAnalitica() {
    const TOP_N = 20;
    // Umbral mínimo de respuestas para que un reactivo/tema sea "confiable".
    // Un reactivo con 1 sola respuesta y 100% error no dice nada estadístico.
    const MIN_RESPUESTAS = 1;

    const [totalPorReactivo, incorrectasPorReactivo] = await Promise.all([
      this.prisma.respuestaReactivo.groupBy({
        by: ['reactivoId'],
        where: { esCorrecta: { not: null } },
        _count: { _all: true },
      }),
      this.prisma.respuestaReactivo.groupBy({
        by: ['reactivoId'],
        where: { esCorrecta: false },
        _count: { _all: true },
      }),
    ]);

    // Mapa reactivoId → incorrectas para cruzar rápido.
    const incorrectasMap = new Map(
      incorrectasPorReactivo.map((r) => [r.reactivoId, r._count._all]),
    );

    // Estadística por reactivo (total, incorrectas, tasa).
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

    // Traemos metadata (enunciado, tema, bloque) de los reactivos respondidos.
    const reactivoIds = statsPorReactivo.map((s) => s.reactivoId);
    const reactivos = await this.prisma.reactivo.findMany({
      where: { id: { in: reactivoIds } },
      select: {
        id: true,
        enunciado: true,
        tema: true,
        bloque: { select: { id: true, nombre: true } },
      },
    });
    const metaPorReactivo = new Map(reactivos.map((r) => [r.id, r]));

    // Reactivos más fallados (con metadata), ordenados por tasa de error desc.
    const reactivosMasFallados = statsPorReactivo
      .filter((s) => s.total >= MIN_RESPUESTAS)
      .map((s) => {
        const meta = metaPorReactivo.get(s.reactivoId);
        return {
          reactivoId: s.reactivoId,
          enunciado: meta?.enunciado ?? '(reactivo eliminado)',
          tema: meta?.tema ?? null,
          bloqueNombre: meta?.bloque?.nombre ?? null,
          total: s.total,
          incorrectas: s.incorrectas,
          tasaError: Number((s.tasaError * 100).toFixed(1)),
        };
      })
      .sort((a, b) => b.tasaError - a.tasaError || b.total - a.total)
      .slice(0, TOP_N);

    // Rollup a bloque y tema sumando los conteos ya agregados por reactivo.
    const bloqueAcc = new Map<
      number,
      { nombre: string; total: number; incorrectas: number }
    >();
    const temaAcc = new Map<string, { total: number; incorrectas: number }>();

    for (const s of statsPorReactivo) {
      const meta = metaPorReactivo.get(s.reactivoId);
      if (!meta) continue;

      if (meta.bloque) {
        const prev = bloqueAcc.get(meta.bloque.id) ?? {
          nombre: meta.bloque.nombre,
          total: 0,
          incorrectas: 0,
        };
        prev.total += s.total;
        prev.incorrectas += s.incorrectas;
        bloqueAcc.set(meta.bloque.id, prev);
      }

      if (meta.tema) {
        const prev = temaAcc.get(meta.tema) ?? { total: 0, incorrectas: 0 };
        prev.total += s.total;
        prev.incorrectas += s.incorrectas;
        temaAcc.set(meta.tema, prev);
      }
    }

    const erroresPorBloque = Array.from(bloqueAcc.entries())
      .map(([bloqueId, v]) => ({
        bloqueId,
        nombre: v.nombre,
        total: v.total,
        incorrectas: v.incorrectas,
        tasaError: v.total > 0 ? Number(((v.incorrectas / v.total) * 100).toFixed(1)) : 0,
      }))
      .sort((a, b) => b.tasaError - a.tasaError);

    const erroresPorTema = Array.from(temaAcc.entries())
      .map(([tema, v]) => ({
        tema,
        total: v.total,
        incorrectas: v.incorrectas,
        tasaError: v.total > 0 ? Number(((v.incorrectas / v.total) * 100).toFixed(1)) : 0,
      }))
      .sort((a, b) => b.tasaError - a.tasaError);

    const totalRespuestasCalificadas = statsPorReactivo.reduce(
      (acc, s) => acc + s.total,
      0,
    );

    return {
      totalRespuestasCalificadas,
      reactivosMasFallados,
      erroresPorBloque,
      erroresPorTema,
    };
  }
}
