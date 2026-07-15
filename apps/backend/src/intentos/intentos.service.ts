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

    // Solo para exámenes no calificables (personalidad/axiológico):
    // analiza consistencia interna usando polaridad y tema del reactivo.
    // Es el corazón del diagnóstico para autoevaluación — detecta si el
    // aspirante se contradice dentro de un mismo tema.
    const analisisConsistencia = calificable
      ? undefined
      : this.calcularAnalisisConsistencia(
          respuestasConDelta,
          intento.examen.tipo,
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
      analisisConsistencia,
    };
  }

  /**
   * Análisis de consistencia interna para exámenes de autoevaluación.
   *
   * Para cada tema, cruza las respuestas del aspirante considerando la
   * polaridad del reactivo (positiva = afirma un rasgo, negativa = niega).
   * Los reactivos se normalizan a un score en la misma dirección del "rasgo
   * esperado" y se compara la consistencia dentro del tema.
   *
   * Métricas por tema:
   * - puntajeDireccion: promedio de scores normalizados
   *   - Personalidad (dicotómico): -1 a +1, donde +1 = afirma consistentemente
   *   - Axiológico (escala 5): 1-5, donde 5 = alta identificación con perfil positivo
   * - coherencia (0-100): qué tan consistentes son las respuestas del tema
   * - contradiccionesDetectadas: pares en direcciones opuestas dentro del tema
   *
   * Métricas globales:
   * - totalContradicciones: suma de todas las contradicciones
   * - temasConInconsistencia: temas con coherencia < 60
   * - perfilCoherente: true si NO hay temas con inconsistencia
   */
  private calcularAnalisisConsistencia(
    respuestas: Array<{
      respuestaSeleccionada: string;
      reactivo: {
        tema: string | null;
        polaridad: string | null;
        opciones: unknown;
      };
    }>,
    tipoExamen: string,
  ) {
    const porTema = new Map<string, number[]>();

    for (const r of respuestas) {
      if (!r.reactivo.tema || !r.reactivo.polaridad) continue;
      const score = this.normalizarRespuestaPolarizada(
        r.respuestaSeleccionada,
        r.reactivo.opciones as string[],
        r.reactivo.polaridad,
        tipoExamen,
      );
      if (score === null) continue;
      const lista = porTema.get(r.reactivo.tema) ?? [];
      lista.push(score);
      porTema.set(r.reactivo.tema, lista);
    }

    const analisisPorTema = Array.from(porTema.entries()).map(
      ([tema, scores]) => {
        const total = scores.length;
        const promedio = scores.reduce((s, v) => s + v, 0) / total;

        let coherencia: number;
        let contradicciones: number;

        if (tipoExamen === 'personalidad') {
          // Scores son +1 (afirma rasgo) o -1 (niega rasgo)
          const positivos = scores.filter((s) => s > 0).length;
          const negativos = scores.filter((s) => s < 0).length;
          const dominante = Math.max(positivos, negativos);
          coherencia = total > 0 ? Math.round((dominante / total) * 100) : 0;
          contradicciones = Math.min(positivos, negativos);
        } else {
          // Axiológico: scores 1-5 normalizados. Coherencia por desviación estándar.
          const desv = Math.sqrt(
            scores.reduce((s, v) => s + Math.pow(v - promedio, 2), 0) / total,
          );
          const desvMax = 2; // desviación máxima esperada en escala 1-5
          coherencia = Math.max(
            0,
            Math.round((1 - desv / desvMax) * 100),
          );
          // Contradicciones: pares donde uno es alto (≥4) y otro bajo (≤2)
          const alto = scores.filter((s) => s >= 4).length;
          const bajo = scores.filter((s) => s <= 2).length;
          contradicciones = Math.min(alto, bajo);
        }

        return {
          tema,
          totalReactivos: total,
          puntajeDireccion: Math.round(promedio * 100) / 100,
          coherencia,
          contradiccionesDetectadas: contradicciones,
        };
      },
    );

    // Ordenamos los temas por mayor cantidad de contradicciones primero
    analisisPorTema.sort(
      (a, b) => b.contradiccionesDetectadas - a.contradiccionesDetectadas,
    );

    const UMBRAL_COHERENCIA = 60;
    const temasConInconsistencia = analisisPorTema
      .filter((t) => t.coherencia < UMBRAL_COHERENCIA)
      .map((t) => t.tema);
    const totalContradicciones = analisisPorTema.reduce(
      (s, t) => s + t.contradiccionesDetectadas,
      0,
    );

    // Sesgo de respuesta + deseabilidad social — solo aplica a personalidad.
    // Detecta aquiescencia (siempre Sí), negativismo (siempre No), y perfil
    // idealizado (responde exclusivamente en dirección socialmente deseable).
    const sesgoRespuesta =
      tipoExamen === 'personalidad'
        ? this.calcularSesgoRespuesta(respuestas)
        : null;

    // Score global de coincidencia con perfil militar ideal — solo aplica al
    // axiológico. Promedia los scores normalizados por polaridad y los mapea
    // a una escala 0-100 donde 100 = coincidencia total con el perfil ideal.
    const scoreCoincidenciaIdeal =
      tipoExamen === 'axiologico'
        ? this.calcularScoreCoincidenciaIdeal(respuestas)
        : null;

    return {
      porTema: analisisPorTema,
      totalContradicciones,
      temasConInconsistencia,
      perfilCoherente: temasConInconsistencia.length === 0,
      sesgoRespuesta,
      scoreCoincidenciaIdeal,
    };
  }

  /**
   * Sesgo de respuesta y deseabilidad social (solo personalidad Sí/No).
   *
   * - porcentajeSi / porcentajeNo: distribución global de las respuestas
   * - indiceDeseabilidad: % de reactivos respondidos "en dirección socialmente
   *   deseable" (POSITIVA + Sí, o NEGATIVA + No). Un valor muy alto indica
   *   que el aspirante está tratando de proyectar un perfil idealizado.
   * - tieneSesgoAquiescencia: responde >75% Sí a todo (asentimiento automático)
   * - tieneSesgoNegativismo: responde >75% No a todo (rechazo automático)
   * - perfilIdealizado: índiceDeseabilidad > 90% (poco creíble para el sistema)
   */
  private calcularSesgoRespuesta(
    respuestas: Array<{
      respuestaSeleccionada: string;
      reactivo: { polaridad: string | null };
    }>,
  ) {
    let totalSi = 0;
    let totalNo = 0;
    let idealizados = 0;
    let totalConPolaridad = 0;

    for (const r of respuestas) {
      const respLower = r.respuestaSeleccionada.toLowerCase().trim();
      const respondioSi = respLower === 'sí' || respLower === 'si';
      const respondioNo = respLower === 'no';
      if (respondioSi) totalSi++;
      if (respondioNo) totalNo++;

      if (r.reactivo.polaridad && (respondioSi || respondioNo)) {
        totalConPolaridad++;
        if (r.reactivo.polaridad === 'POSITIVA' && respondioSi) idealizados++;
        if (r.reactivo.polaridad === 'NEGATIVA' && respondioNo) idealizados++;
      }
    }

    const total = totalSi + totalNo;
    if (total === 0) return null;

    const porcentajeSi = Math.round((totalSi / total) * 100);
    const porcentajeNo = Math.round((totalNo / total) * 100);
    const indiceDeseabilidad =
      totalConPolaridad > 0
        ? Math.round((idealizados / totalConPolaridad) * 100)
        : 0;

    const UMBRAL_SESGO = 75;
    const UMBRAL_IDEALIZACION = 90;

    return {
      porcentajeSi,
      porcentajeNo,
      indiceDeseabilidad,
      tieneSesgoAquiescencia: porcentajeSi > UMBRAL_SESGO,
      tieneSesgoNegativismo: porcentajeNo > UMBRAL_SESGO,
      perfilIdealizado: indiceDeseabilidad > UMBRAL_IDEALIZACION,
    };
  }

  /**
   * Score de coincidencia con el perfil militar ideal (0-100).
   * Solo axiológico. Promedia los scores normalizados por polaridad (que
   * ya vienen en escala 1-5 con 5 = alineado al ideal) y los mapea a 0-100.
   * Devuelve también una etiqueta cualitativa.
   */
  private calcularScoreCoincidenciaIdeal(
    respuestas: Array<{
      respuestaSeleccionada: string;
      reactivo: {
        polaridad: string | null;
        opciones: unknown;
      };
    }>,
  ) {
    const scores: number[] = [];
    for (const r of respuestas) {
      if (!r.reactivo.polaridad) continue;
      const s = this.normalizarRespuestaPolarizada(
        r.respuestaSeleccionada,
        r.reactivo.opciones as string[],
        r.reactivo.polaridad,
        'axiologico',
      );
      if (s !== null) scores.push(s);
    }
    if (scores.length === 0) return null;

    const promedio = scores.reduce((s, v) => s + v, 0) / scores.length;
    // Escala 1-5 → 0-100
    const scoreNormalizado = Math.round(((promedio - 1) / 4) * 100);

    let etiqueta: 'alta' | 'media' | 'baja';
    if (scoreNormalizado >= 80) etiqueta = 'alta';
    else if (scoreNormalizado >= 60) etiqueta = 'media';
    else etiqueta = 'baja';

    return {
      score: scoreNormalizado,
      promedio: Math.round(promedio * 100) / 100,
      etiqueta,
    };
  }

  /**
   * Normaliza una respuesta a un score en la dirección del rasgo positivo
   * del tema, considerando la polaridad del reactivo.
   *
   * Personalidad (dicotómico Sí/No):
   *   POSITIVA + Sí → +1 (afirma rasgo positivo)
   *   POSITIVA + No → −1 (niega rasgo positivo)
   *   NEGATIVA + Sí → −1 (afirma rasgo negativo, contrario al ideal)
   *   NEGATIVA + No → +1 (niega rasgo negativo, alineado con el ideal)
   *
   * Axiológico (escala 5 puntos):
   *   Se mapea la opción a un score 5..1 según su posición (primera = 5).
   *   Si polaridad NEGATIVA, se invierte (6 − score) para normalizar
   *   a "5 = alta identificación con perfil positivo".
   */
  private normalizarRespuestaPolarizada(
    respuestaSeleccionada: string,
    opciones: string[],
    polaridad: string,
    tipoExamen: string,
  ): number | null {
    if (tipoExamen === 'personalidad') {
      const respuestaLower = respuestaSeleccionada.toLowerCase().trim();
      const respondioSi = respuestaLower === 'sí' || respuestaLower === 'si';
      const respondioNo = respuestaLower === 'no';
      if (!respondioSi && !respondioNo) return null;
      if (polaridad === 'POSITIVA') return respondioSi ? 1 : -1;
      if (polaridad === 'NEGATIVA') return respondioSi ? -1 : 1;
      return null;
    }

    if (tipoExamen === 'axiologico') {
      const idx = opciones.indexOf(respuestaSeleccionada);
      if (idx === -1) return null;
      // Primera opción = mayor score. Ej: 5 opciones → idx 0 = score 5, idx 4 = score 1
      const score = opciones.length - idx;
      if (polaridad === 'POSITIVA') return score;
      if (polaridad === 'NEGATIVA') return opciones.length + 1 - score;
      return null;
    }

    return null;
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
