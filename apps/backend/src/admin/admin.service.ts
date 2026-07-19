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
}
