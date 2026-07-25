import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Repaso espaciado — la "capa verde".
 *
 * Mantiene, por aspirante y por reactivo, en qué caja de Leitner va un dato y
 * cuándo toca volverlo a ver. La cola se siembra sola al terminar un simulacro
 * cultural; de ahí en adelante cada repaso sube o baja la caja.
 */
@Injectable()
export class RepasosService {
  constructor(private prisma: PrismaService) {}

  /**
   * Intervalos de Leitner en días, por caja. Índice = caja − 1.
   * caja 1 → mañana, 2 → 3 días, 3 → 1 semana, 4 → 3 semanas, 5 → 2 meses.
   */
  private static readonly INTERVALOS_DIAS = [1, 3, 7, 21, 60];

  private proximaFecha(caja: number, desde = new Date()): Date {
    const dias =
      RepasosService.INTERVALOS_DIAS[caja - 1] ??
      RepasosService.INTERVALOS_DIAS[RepasosService.INTERVALOS_DIAS.length - 1];
    const fecha = new Date(desde);
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  /**
   * Siembra la cola de repaso a partir de un simulacro cultural terminado.
   *
   * Reusa la idea de "acierto × velocidad" del diagnóstico cultural: la mediana
   * de tiempos del PROPIO intento separa rápido de lento.
   *   - falló (confundido o sin ver)  → caja 1 (vuelve mañana)
   *   - acertó pero lento (frágil)     → caja 2
   *   - acertó y rápido (dominado)     → no entra a la cola
   *
   * Idempotente: si el aspirante ya tenía estado de repaso para ese reactivo, no
   * lo pisa (pudo haberlo avanzado en repasos anteriores). Eso lo garantiza
   * `skipDuplicates` contra el índice único (usuarioId, reactivoId).
   */
  async sembrarDesdeIntento(intentoId: number, usuarioId: number) {
    const intento = await this.prisma.intentoExamen.findUnique({
      where: { id: intentoId },
      include: { examen: true, respuestas: true },
    });

    // Solo el cultural alimenta la cola: es de recuerdo literal. El psicológico
    // no es de acierto/error, así que no tiene nada que repasar así.
    if (!intento || intento.examen.tipo !== 'cultural') {
      return { sembrados: 0 };
    }

    const respuestas = intento.respuestas;
    if (respuestas.length === 0) return { sembrados: 0 };

    const tiempos = respuestas
      .map((r) => r.respondidoEnMs)
      .sort((a, b) => a - b);
    const medianaMs = tiempos[Math.floor(tiempos.length / 2)];

    const ahora = new Date();
    const nuevos = respuestas
      .map((r) => {
        const lento = r.respondidoEnMs > medianaMs;
        let caja: number | null;
        if (r.esCorrecta === false) caja = 1; // confundido o sin ver
        else if (r.esCorrecta === true && lento) caja = 2; // frágil
        else caja = null; // dominado → fuera de la cola
        return caja === null
          ? null
          : {
              usuarioId,
              reactivoId: r.reactivoId,
              caja,
              proximoRepaso: this.proximaFecha(caja, ahora),
              ultimoVistoAt: ahora,
            };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    if (nuevos.length === 0) return { sembrados: 0 };

    const res = await this.prisma.repasoReactivo.createMany({
      data: nuevos,
      skipDuplicates: true,
    });
    return { sembrados: res.count };
  }

  /**
   * Resumen de la cola de un aspirante: cuántos reactivos le tocan hoy y cómo
   * están repartidos entre las cinco cajas. Es la ventanita para comprobar que
   * el sembrado funcionó, y luego alimenta el badge "Repaso de hoy" del panel.
   */
  async resumen(usuarioId: number) {
    const ahora = new Date();
    const [pendientesHoy, total, porCajaRaw] = await Promise.all([
      this.prisma.repasoReactivo.count({
        where: { usuarioId, proximoRepaso: { lte: ahora } },
      }),
      this.prisma.repasoReactivo.count({ where: { usuarioId } }),
      this.prisma.repasoReactivo.groupBy({
        by: ['caja'],
        where: { usuarioId },
        _count: { _all: true },
      }),
    ]);

    const porCaja = [1, 2, 3, 4, 5].map((caja) => ({
      caja,
      total: porCajaRaw.find((c) => c.caja === caja)?._count._all ?? 0,
    }));

    return { pendientesHoy, total, porCaja };
  }
}
