import { Injectable, NotFoundException } from '@nestjs/common';
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

    // "Lento" se mide con el tiempo POR REACTIVO, no con el acumulado. Como
    // respondidoEnMs cuenta desde el inicio del examen (es acumulado), se ordena
    // cronológicamente y se saca el delta de cada reactivo. Es el mismo criterio
    // que usa calcularDiagnosticoCultural, para que lo que se siembra coincida
    // con los cuadrantes que ve el aspirante en el panel.
    const ordenadas = [...respuestas].sort(
      (a, b) => a.respondidoEnMs - b.respondidoEnMs,
    );
    const conDelta = ordenadas.map((r, i) => ({
      respuesta: r,
      tiempoDeltaMs:
        i === 0
          ? r.respondidoEnMs
          : r.respondidoEnMs - ordenadas[i - 1].respondidoEnMs,
    }));

    const deltasOrdenados = conDelta
      .map((c) => c.tiempoDeltaMs)
      .sort((a, b) => a - b);
    const medianaMs = deltasOrdenados[Math.floor(deltasOrdenados.length / 2)];

    const ahora = new Date();
    const nuevos = conDelta
      .map(({ respuesta: r, tiempoDeltaMs }) => {
        const lento = tiempoDeltaMs > medianaMs;
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

  /**
   * La cola del día: los reactivos del aspirante ya vencidos (`proximoRepaso`
   * pasado), barajados y SIN la respuesta, listos para la pantalla de estudio.
   *
   * No manda `respuestaCorrecta`, la justificación ni la cita: eso se revela
   * sólo al contestar (ver `responder`), igual que el simulador nunca filtra la
   * correcta al cliente. Baraja la lista y las opciones de cada reactivo para
   * que el aspirante fije el dato y no la posición.
   */
  async pendientes(usuarioId: number) {
    const ahora = new Date();
    const filas = await this.prisma.repasoReactivo.findMany({
      where: { usuarioId, proximoRepaso: { lte: ahora } },
      select: {
        caja: true,
        reactivo: {
          select: { id: true, enunciado: true, opciones: true, tema: true },
        },
      },
    });

    const items = filas.map((f) => ({
      reactivoId: f.reactivo.id,
      caja: f.caja,
      enunciado: f.reactivo.enunciado,
      tema: f.reactivo.tema,
      opciones: this.mezclar(f.reactivo.opciones as string[]),
    }));

    return this.mezclar(items);
  }

  /**
   * Registra el resultado de un repaso y mueve la caja de Leitner.
   *
   * Leitner puro: sólo cuenta si acertó o no (la velocidad se usó una sola vez
   * al sembrar, no aquí).
   *   - acierta → sube una caja (tope en la última) y vuelve más tarde; racha +1
   *   - falla   → cae a la caja 1 y vuelve mañana; racha a 0
   *
   * Devuelve la corrección para pintarla al instante: la respuesta correcta, la
   * justificación textual y la cita con página, más el salto de caja. Contestar
   * NO crea filas: si el reactivo no está en la cola del aspirante → 404
   * (sembrar es sólo del simulacro).
   */
  async responder(
    usuarioId: number,
    reactivoId: number,
    respuestaSeleccionada: string,
  ) {
    const clave = { usuarioId_reactivoId: { usuarioId, reactivoId } };

    const repaso = await this.prisma.repasoReactivo.findUnique({
      where: clave,
    });
    if (!repaso) {
      throw new NotFoundException('Ese reactivo no está en tu cola de repaso');
    }

    const reactivo = await this.prisma.reactivo.findUnique({
      where: { id: reactivoId },
      select: { respuestaCorrecta: true, explicacion: true, referencia: true },
    });
    if (!reactivo) {
      throw new NotFoundException('Reactivo no encontrado');
    }

    // Comparación por TEXTO, no por letra: las opciones se barajan por intento,
    // así que la letra ya no significa nada (mismo criterio que el simulador).
    const esCorrecta = reactivo.respuestaCorrecta === respuestaSeleccionada;
    const cajaAnterior = repaso.caja;

    // Tope en la última caja: si dejara subir más allá, ese reactivo caería
    // fuera del reparto por caja (1..5) que reporta `resumen`.
    const MAX_CAJA = RepasosService.INTERVALOS_DIAS.length;
    const caja = esCorrecta ? Math.min(cajaAnterior + 1, MAX_CAJA) : 1;
    const rachaAciertos = esCorrecta ? repaso.rachaAciertos + 1 : 0;
    const ahora = new Date();
    const proximoRepaso = this.proximaFecha(caja, ahora);

    await this.prisma.repasoReactivo.update({
      where: clave,
      data: { caja, rachaAciertos, proximoRepaso, ultimoVistoAt: ahora },
    });

    return {
      esCorrecta,
      respuestaCorrecta: reactivo.respuestaCorrecta,
      explicacion: reactivo.explicacion,
      referencia: reactivo.referencia,
      cajaAnterior,
      caja,
      proximoRepaso,
    };
  }

  /** Fisher-Yates: baraja una copia sin tocar el arreglo original. */
  private mezclar<T>(arreglo: T[]): T[] {
    const copia = [...arreglo];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }
}
