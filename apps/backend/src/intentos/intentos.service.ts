import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IntentosService {
  constructor(private prisma: PrismaService) {}

  /**
   * Helper compartido: valida que un recurso exista y sea del usuario dado.
   * Devuelve el recurso tipado (TypeScript sabe que ya no es null tras esta llamada).
   * Si no existe → 404. Si es de otro → 403.
   */
  private validarPropiedad<T extends { usuarioId: number }>(
    recurso: T | null,
    usuarioId: number,
    tipo: string,
  ): T {
    if (!recurso) throw new NotFoundException(`${tipo} no encontrado`);
    if (recurso.usuarioId !== usuarioId) {
      throw new ForbiddenException(
        `No tienes permiso para acceder a este ${tipo.toLowerCase()}`,
      );
    }
    return recurso;
  }

  async crear(
    usuarioId: number,
    examenId: number,
    sesionCompletoId?: number,
  ) {
    const examen = await this.prisma.examen.findUnique({
      where: { id: examenId },
    });
    if (!examen) {
      throw new NotFoundException('Examen no encontrado');
    }

    return this.prisma.intentoExamen.create({
      data: {
        usuarioId,
        examenId,
        sesionCompletoId,
      },
    });
  }

  async responder(
    intentoId: number,
    usuarioId: number,
    reactivoId: number,
    respuestaSeleccionada: string,
    respondidoEnMs: number,
  ) {
    const intento = this.validarPropiedad(
      await this.prisma.intentoExamen.findUnique({
        where: { id: intentoId },
        include: { examen: true },
      }),
      usuarioId,
      'Intento',
    );

    if (intento.estado !== 'EN_PROGRESO') {
      throw new BadRequestException(
        'El intento ya fue terminado, no se pueden agregar respuestas',
      );
    }

    const reactivo = await this.prisma.reactivo.findUnique({
      where: { id: reactivoId },
    });
    if (!reactivo) {
      throw new NotFoundException('Reactivo no encontrado');
    }

    const esCorrecta = intento.examen.calificable
      ? reactivo.respuestaCorrecta === respuestaSeleccionada
      : null;

    return this.prisma.respuestaReactivo.create({
      data: {
        intentoExamenId: intentoId,
        reactivoId,
        respuestaSeleccionada,
        esCorrecta,
        respondidoEnMs,
      },
    });
  }

  async finalizar(
    intentoId: number,
    usuarioId: number,
    estado: 'COMPLETADA' | 'TIEMPO_AGOTADO' | 'ABANDONADA',
  ) {
    const intento = this.validarPropiedad(
      await this.prisma.intentoExamen.findUnique({
        where: { id: intentoId },
      }),
      usuarioId,
      'Intento',
    );

    if (intento.estado !== 'EN_PROGRESO') {
      throw new BadRequestException(
        'El intento ya fue terminado, no se puede volver a finalizar',
      );
    }

    return this.prisma.intentoExamen.update({
      where: { id: intentoId },
      data: {
        estado,
        finAt: new Date(),
      },
    });
  }

  async obtenerResultados(intentoId: number, usuarioId: number) {
    const intento = this.validarPropiedad(
      await this.prisma.intentoExamen.findUnique({
        where: { id: intentoId },
        include: {
          examen: true,
          respuestas: {
            include: {
              reactivo: {
                include: { bloque: true },
              },
            },
          },
        },
      }),
      usuarioId,
      'Intento',
    );

    const calificable = intento.examen.calificable;

    // Ordenar respuestas cronológicamente y calcular delta por reactivo.
    const ordenadas = [...intento.respuestas].sort(
      (a, b) => a.respondidoEnMs - b.respondidoEnMs,
    );
    const respuestasConDelta = ordenadas.map((r, i) => ({
      ...r,
      tiempoDeltaMs:
        i === 0
          ? r.respondidoEnMs
          : r.respondidoEnMs - ordenadas[i - 1].respondidoEnMs,
    }));

    // --- Métricas globales ---
    const reactivosRespondidos = respuestasConDelta.length;
    const aciertos = calificable
      ? respuestasConDelta.filter((r) => r.esCorrecta === true).length
      : null;
    const porcentajeAciertos =
      calificable && reactivosRespondidos > 0
        ? Math.round((aciertos! / reactivosRespondidos) * 100)
        : null;
    const tiempoTotalMs = respuestasConDelta.reduce(
      (max, r) => Math.max(max, r.respondidoEnMs),
      0,
    );

    // --- Agregación por bloque (con tiempo acumulado) ---
    const bloqueStats = new Map<
      number,
      {
        nombre: string;
        respondidos: number;
        aciertos: number;
        tiempoMs: number;
      }
    >();
    for (const r of respuestasConDelta) {
      const id = r.reactivo.bloqueId;
      let stats = bloqueStats.get(id);
      if (!stats) {
        stats = {
          nombre: r.reactivo.bloque.nombre,
          respondidos: 0,
          aciertos: 0,
          tiempoMs: 0,
        };
        bloqueStats.set(id, stats);
      }
      stats.respondidos++;
      stats.tiempoMs += r.tiempoDeltaMs;
      if (r.esCorrecta === true) stats.aciertos++;
    }
    const porBloque = Array.from(bloqueStats.entries()).map(([id, s]) => ({
      bloqueId: id,
      nombre: s.nombre,
      respondidos: s.respondidos,
      aciertos: calificable ? s.aciertos : null,
      porcentaje:
        calificable && s.respondidos > 0
          ? Math.round((s.aciertos / s.respondidos) * 100)
          : null,
      tiempoMs: s.tiempoMs,
    }));

    // --- Agregación por tema (con tiempo acumulado) ---
    const temaStats = new Map<
      string,
      { respondidos: number; aciertos: number; tiempoMs: number }
    >();
    for (const r of respuestasConDelta) {
      const tema = r.reactivo.tema ?? 'sin_tema';
      let stats = temaStats.get(tema);
      if (!stats) {
        stats = { respondidos: 0, aciertos: 0, tiempoMs: 0 };
        temaStats.set(tema, stats);
      }
      stats.respondidos++;
      stats.tiempoMs += r.tiempoDeltaMs;
      if (r.esCorrecta === true) stats.aciertos++;
    }
    const porTema = Array.from(temaStats.entries()).map(([tema, s]) => ({
      tema,
      respondidos: s.respondidos,
      aciertos: calificable ? s.aciertos : null,
      porcentaje:
        calificable && s.respondidos > 0
          ? Math.round((s.aciertos / s.respondidos) * 100)
          : null,
      tiempoMs: s.tiempoMs,
    }));

    // --- Métricas temporales ---
    const metricasTemporales = this.calcularMetricasTemporales(
      respuestasConDelta.map((r) => r.tiempoDeltaMs),
    );

    return {
      intentoId: intento.id,
      examen: {
        id: intento.examen.id,
        nombre: intento.examen.nombre,
        calificable,
      },
      estado: intento.estado,
      tiempoTotalMs,
      reactivosRespondidos,
      aciertos,
      porcentajeAciertos,
      porBloque,
      porTema,
      metricasTemporales,
    };
  }

  /**
   * Calcula métricas temporales sobre un arreglo de tiempos por reactivo (deltas).
   *
   * Devuelve:
   * - tiempoPorReactivoMs: el arreglo completo (para graficar).
   * - promedio, mediano: dos medidas centrales complementarias.
   * - coeficienteVariacion: dispersión normalizada (0 = perfectamente parejo).
   * - tendencia: 'acelerando' | 'desacelerando' | 'estable' basado en cambio 1a vs 2a mitad.
   * - patronFatigaDetectado: true si aceleró ≥ 20% en 2a mitad (indicio de apuro final).
   * - detalleFatiga: promedios de cada mitad + diferencia porcentual.
   */
  private calcularMetricasTemporales(tiempos: number[]) {
    if (tiempos.length === 0) {
      return {
        tiempoPorReactivoMs: [] as number[],
        tiempoPromedioReactivoMs: 0,
        tiempoMedianoReactivoMs: 0,
        coeficienteVariacion: 0,
        tendencia: 'estable' as const,
        patronFatigaDetectado: false,
        detalleFatiga: null,
      };
    }

    const UMBRAL_TENDENCIA_PCT = 10; // cambio de 10% ya es tendencia
    const UMBRAL_FATIGA_PCT = -20; // 20% más rápido en 2a mitad = fatiga

    const promedio = this.mean(tiempos);
    const mediano = this.median(tiempos);
    const desviacion = this.stddev(tiempos);
    const coeficienteVariacion = promedio > 0 ? desviacion / promedio : 0;

    // Split-half para detectar tendencia y fatiga.
    const mitad = Math.floor(tiempos.length / 2);
    const primeraMitad = tiempos.slice(0, mitad);
    const segundaMitad = tiempos.slice(mitad);
    const promPrimera = this.mean(primeraMitad);
    const promSegunda = this.mean(segundaMitad);
    const diferenciaPct =
      promPrimera > 0
        ? Math.round(((promSegunda - promPrimera) / promPrimera) * 100)
        : 0;

    let tendencia: 'acelerando' | 'desacelerando' | 'estable';
    if (diferenciaPct <= -UMBRAL_TENDENCIA_PCT) tendencia = 'acelerando';
    else if (diferenciaPct >= UMBRAL_TENDENCIA_PCT) tendencia = 'desacelerando';
    else tendencia = 'estable';

    const patronFatigaDetectado = diferenciaPct <= UMBRAL_FATIGA_PCT;

    return {
      tiempoPorReactivoMs: tiempos,
      tiempoPromedioReactivoMs: Math.round(promedio),
      tiempoMedianoReactivoMs: Math.round(mediano),
      coeficienteVariacion: Math.round(coeficienteVariacion * 100) / 100,
      tendencia,
      patronFatigaDetectado,
      detalleFatiga:
        primeraMitad.length > 0 && segundaMitad.length > 0
          ? {
              tiempoPromedioPrimeraMitadMs: Math.round(promPrimera),
              tiempoPromedioSegundaMitadMs: Math.round(promSegunda),
              diferenciaPorcentual: diferenciaPct,
            }
          : null,
    };
  }

  private mean(arr: number[]): number {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, n) => sum + n, 0) / arr.length;
  }

  private median(arr: number[]): number {
    if (arr.length === 0) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  private stddev(arr: number[]): number {
    if (arr.length === 0) return 0;
    const m = this.mean(arr);
    const varianza =
      arr.reduce((sum, n) => sum + (n - m) ** 2, 0) / arr.length;
    return Math.sqrt(varianza);
  }

  /**
   * Lista los intentos del usuario autenticado, del más reciente al más viejo.
   * Filtros opcionales por examen o estado.
   */
  async listarPorUsuario(
    usuarioId: number,
    filtros?: { examenId?: number; estado?: string },
  ) {
    return this.prisma.intentoExamen.findMany({
      where: {
        usuarioId,
        ...(filtros?.examenId ? { examenId: filtros.examenId } : {}),
        ...(filtros?.estado
          ? { estado: filtros.estado as 'EN_PROGRESO' | 'COMPLETADA' | 'TIEMPO_AGOTADO' | 'ABANDONADA' }
          : {}),
      },
      include: {
        examen: {
          select: { id: true, nombre: true, tipo: true },
        },
      },
      orderBy: { inicioAt: 'desc' },
    });
  }

  /**
   * Devuelve todas las respuestas de un intento, ordenadas cronológicamente,
   * con la información del reactivo (enunciado, tema, bloque).
   * Verifica que el intento sea del usuario.
   */
  async obtenerRespuestas(intentoId: number, usuarioId: number) {
    const intento = this.validarPropiedad(
      await this.prisma.intentoExamen.findUnique({
        where: { id: intentoId },
      }),
      usuarioId,
      'Intento',
    );

    return this.prisma.respuestaReactivo.findMany({
      where: { intentoExamenId: intento.id },
      include: {
        reactivo: {
          select: {
            id: true,
            enunciado: true,
            tema: true,
            bloque: { select: { id: true, nombre: true } },
          },
        },
      },
      orderBy: { respondidoEnMs: 'asc' },
    });
  }
}
