import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { RepasosService } from '../repasos/repasos.service';
import { AccesoService } from '../acceso/acceso.service';
import { ActividadService } from '../actividad/actividad.service';

/**
 * Cuántos simulacros puede arrancar una cuenta en un día. Es un freno
 * anti-vaciado, no una regla de estudio: ver el comentario en `crear`.
 */
const TOPE_INTENTOS_POR_DIA = 12;

/**
 * Cuántos reactivos trae cada examen completo.
 *
 * Espejo de REACTIVOS_POR_BLOQUE_POR_TIPO (examenes.service.ts) ya multiplicado
 * por sus bloques. El cultural va fijo en 100 porque su reparto cambia según el
 * plantel —hay carreras de tres materias que van 34/33/33— pero el total
 * siempre es 100.
 *
 * Si alguna vez se cambia el tamaño de un examen, hay que cambiarlo AQUÍ
 * también, o el panel dirá "de 100" sobre un examen de otro tamaño.
 */
const TOTAL_POR_TIPO: Record<string, number> = {
  psicometrico: 100,
  personalidad: 256,
  axiologico: 39,
  cultural: 100,
};

@Injectable()
export class IntentosService {
  constructor(
    private prisma: PrismaService,
    private repasos: RepasosService,
    private acceso: AccesoService,
    private actividad: ActividadService,
    private mail: MailService,
  ) {}

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

  async crear(usuarioId: number, examenId: number, sesionCompletoId?: number) {
    const examen = await this.prisma.examen.findUnique({
      where: { id: examenId },
    });
    if (!examen) {
      throw new NotFoundException('Examen no encontrado');
    }

    // Candado de acceso: si el examen pertenece a un módulo de pago y el
    // candado está encendido, exige acceso vigente. Con el candado apagado
    // (default) esto no bloquea nada. El front lee `code: 'SIN_ACCESO'` para
    // mandar al aspirante a /precios.
    const modulo = this.acceso.moduloDeExamen(examen.tipo);
    if (
      modulo &&
      this.acceso.candadoActivo() &&
      !(await this.acceso.tieneAcceso(usuarioId, modulo))
    ) {
      throw new ForbiddenException({
        message:
          'Necesitas comprar este módulo para empezar el simulador. Ve a /precios.',
        code: 'SIN_ACCESO',
        modulo,
      });
    }

    // TOPE DIARIO DE SIMULACROS (22 ago 2026).
    //
    // Cada simulacro sirve hasta 100 reactivos. Sin tope, una cuenta puede
    // arrancar exámenes en bucle y llevarse el banco en una noche; la pantalla
    // de "cuentas a vigilar" lo DETECTA, pero al día siguiente y sólo si Carlo
    // la abre. Esto lo IMPIDE.
    //
    // El número está alto a propósito: un aspirante de verdad no hace doce
    // simulacros en un día —el cultural dura dos horas—, así que no estorba a
    // nadie honesto. Lo que corta es el bucle automático.
    const desdeMedianoche = new Date();
    desdeMedianoche.setHours(0, 0, 0, 0);
    const hoyLleva = await this.prisma.intentoExamen.count({
      where: { usuarioId, createdAt: { gte: desdeMedianoche } },
    });
    if (hoyLleva >= TOPE_INTENTOS_POR_DIA) {
      // Sólo en el PRIMER intento bloqueado del día: si alguien sigue dándole,
      // no queremos convertir la alerta en una lluvia de correos.
      if (hoyLleva === TOPE_INTENTOS_POR_DIA) {
        this.avisarDeTope(usuarioId, hoyLleva).catch(() => undefined);
      }
      throw new ForbiddenException({
        message:
          'Llegaste al límite de simulacros por día. Vuelve mañana — y si de ' +
          'verdad los necesitas hoy, escríbenos y te lo abrimos.',
        code: 'TOPE_DIARIO',
      });
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

    // Los reactivos "no puntúa" (p. ej. los canarios anti-copia de la Capa 5) NO
    // se califican: se sirven, pero no cuentan ni a favor ni en contra. Guardamos
    // esCorrecta = null para que queden fuera de todo conteo (aquí y en analítica).
    const esCorrecta =
      intento.examen.calificable && !reactivo.noPuntua
        ? reactivo.respuestaCorrecta === respuestaSeleccionada
        : null;

    // Una fila por reactivo, no una por toque. Antes esto era siempre `create`,
    // así que cambiar de opción (o un doble toque) dejaba DOS filas del mismo
    // reactivo y el panel decía "270 reactivos respondidos" en un examen de 256.
    // No hay índice único en la tabla (hay intentos viejos con filas repetidas),
    // así que buscamos a mano antes de escribir.
    const yaRespondido = await this.prisma.respuestaReactivo.findFirst({
      where: { intentoExamenId: intentoId, reactivoId },
      orderBy: { id: 'desc' },
    });

    const respuesta = yaRespondido
      ? await this.prisma.respuestaReactivo.update({
          where: { id: yaRespondido.id },
          data: { respuestaSeleccionada, esCorrecta, respondidoEnMs },
        })
      : await this.prisma.respuestaReactivo.create({
          data: {
            intentoExamenId: intentoId,
            reactivoId,
            respuestaSeleccionada,
            esCorrecta,
            respondidoEnMs,
          },
        });

    // Prende la racha del día. Nunca debe tumbar la respuesta si falla.
    await this.actividad.marcarHoy(usuarioId).catch(() => undefined);

    return respuesta;
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

    const actualizado = await this.prisma.intentoExamen.update({
      where: { id: intentoId },
      data: {
        estado,
        finAt: new Date(),
      },
    });

    // Capa verde: al cerrar un simulacro cultural, siembra la cola de repaso con
    // lo que el aspirante falló o llevó frágil. No se siembra desde un abandono.
    // El service filtra por tipo cultural, así que esto es inofensivo para el
    // psicológico.
    if (estado !== 'ABANDONADA') {
      await this.repasos.sembrarDesdeIntento(intentoId, usuarioId);
    }

    return actualizado;
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
    const cronologicas = [...intento.respuestas].sort(
      (a, b) => a.respondidoEnMs - b.respondidoEnMs,
    );

    // Los intentos anteriores al arreglo de `responder()` traen VARIAS filas del
    // mismo reactivo (una por cada vez que se tocó una opción). Vale la última:
    // en un examen cuenta la respuesta final. Sin esto, el panel contaba toques
    // en vez de reactivos e inflaba aciertos, %, por-tema y pares contradictorios.
    const ultimaPorReactivo = new Map<number, (typeof cronologicas)[number]>();
    for (const r of cronologicas) {
      ultimaPorReactivo.set(r.reactivoId, r);
    }
    const ordenadas = [...ultimaPorReactivo.values()].sort(
      (a, b) => a.respondidoEnMs - b.respondidoEnMs,
    );

    const respuestasConDelta = ordenadas
      .map((r, i) => ({
        ...r,
        tiempoDeltaMs:
          i === 0
            ? r.respondidoEnMs
            : r.respondidoEnMs - ordenadas[i - 1].respondidoEnMs,
      }))
      // Canarios anti-copia (Capa 5): se sirven pero NO cuentan. El delta se
      // calcula sobre la secuencia completa y luego se sacan, para no ensuciar
      // aciertos, %, por-bloque, por-tema, diagnóstico ni señales críticas.
      .filter((r) => !r.reactivo.noPuntua);

    // --- Métricas globales ---
    const reactivosRespondidos = respuestasConDelta.length;

    // CUÁNTOS REACTIVOS TRAÍA EL EXAMEN COMPLETO.
    //
    // Hace falta para no mentirle al aspirante: si contestó 11 de 35 y acertó 8,
    // el porcentaje sobre lo contestado da 73% — y en el examen real, donde lo
    // que dejas en blanco cuenta como error, ese mismo resultado es 23%. El
    // panel enseña las dos lecturas (decisión de Carlo, 22 ago 2026).
    //
    // Debe seguir a REACTIVOS_POR_BLOQUE_POR_TIPO de examenes.service.ts: si
    // allá cambia el armado, aquí cambia el denominador.
    const totalDelExamen = TOTAL_POR_TIPO[intento.examen.tipo] ?? null;
    const sinContestar =
      totalDelExamen !== null
        ? Math.max(0, totalDelExamen - reactivosRespondidos)
        : null;
    const aciertos = calificable
      ? respuestasConDelta.filter((r) => r.esCorrecta === true).length
      : null;
    // Sobre lo CONTESTADO: mide lo que sabe.
    const porcentajeAciertos =
      calificable && reactivosRespondidos > 0
        ? Math.round((aciertos! / reactivosRespondidos) * 100)
        : null;

    // Sobre el EXAMEN COMPLETO: es la lectura del examen real, donde lo que
    // dejas en blanco cuenta como error.
    const porcentajeDelExamen =
      calificable && totalDelExamen
        ? Math.round((aciertos! / totalDelExamen) * 100)
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
      // Culturales: se agregan por tema, no por bloque, y hoy no entran a un
      // intento psicológico. Sin bloque no hay fila que agrupar aquí.
      if (r.reactivo.bloqueId == null || !r.reactivo.bloque) continue;
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

    // Escalas de validez L/K/F. Van aparte del análisis de consistencia porque
    // no dicen nada sobre los rasgos del aspirante: dicen si se le puede creer
    // lo que contestó en todo lo demás. Devuelve null si el examen no trajo
    // reactivos-trampa.
    const escalasValidez = calificable
      ? null
      : this.calcularEscalasValidez(respuestasConDelta, intento.examen.tipo);

    // Protocolo de señales críticas. Va aparte de todo lo demás porque no es
    // un resultado del examen: es la única parte del panel que puede tener que
    // poner un número de emergencia en pantalla.
    const senalesCriticas = calificable
      ? null
      : this.detectarSenalesCriticas(respuestasConDelta, intento.examen.tipo);

    // Diagnóstico del examen cultural. Va aparte de las métricas de arriba
    // porque no cuenta aciertos: dice POR QUÉ falló y qué páginas abrir.
    const diagnosticoCultural =
      intento.examen.tipo === 'cultural'
        ? this.calcularDiagnosticoCultural(respuestasConDelta)
        : null;

    return {
      intentoId: intento.id,
      examen: {
        id: intento.examen.id,
        nombre: intento.examen.nombre,
        tipo: intento.examen.tipo,
        calificable,
      },
      estado: intento.estado,
      tiempoTotalMs,
      reactivosRespondidos,
      totalDelExamen,
      sinContestar,
      porcentajeDelExamen,
      aciertos,
      porcentajeAciertos,
      porBloque,
      porTema,
      metricasTemporales,
      analisisConsistencia,
      escalasValidez,
      senalesCriticas,
      diagnosticoCultural,
    };
  }

  /**
   * Diagnóstico del examen cultural.
   *
   * El cultural es de recuerdo literal: cada reactivo sale textual de un libro
   * del temario y guarda su referencia con página impresa. Eso permite un panel
   * que no dice "sacaste 61" sino "estudia estas páginas".
   *
   * Dos ideas lo sostienen:
   *
   * 1. **Cruzar acierto con velocidad.** Salen cuatro situaciones que se
   *    arreglan distinto, y dos de ellas no se ven en la calificación:
   *    acertar dudando (frágil) y fallar habiendo estudiado (confundido).
   *    El corte de "lento" es la mediana del PROPIO aspirante, no un número
   *    fijo: a alguien rápido de por sí, 60 segundos ya le es tardanza.
   *
   * 2. **Agrupar los errores por página del libro.** "Estudia Geografía" no le
   *    sirve a nadie; "18 errores entre las páginas 74 y 79" sí.
   */
  private calcularDiagnosticoCultural(
    respuestas: Array<{
      esCorrecta: boolean | null;
      tiempoDeltaMs: number;
      respuestaSeleccionada: string;
      reactivo: {
        tema: string | null;
        referencia: string | null;
        enunciado: string;
        respuestaCorrecta: string | null;
        explicacion: string | null;
      };
    }>,
  ) {
    if (respuestas.length === 0) return null;

    const tiempos = respuestas
      .map((r) => r.tiempoDeltaMs)
      .sort((a, b) => a - b);
    const medianaMs = tiempos[Math.floor(tiempos.length / 2)];

    const cuadrantes = {
      dominado: 0, // correcto y rápido — no gastes tiempo aquí
      fragil: 0, // correcto pero lento — con cronómetro es lo primero que se cae
      confundido: 0, // incorrecto y lento — lo estudió y lo tiene cruzado
      sinVer: 0, // incorrecto y rápido — todavía no lo lee
    };
    for (const r of respuestas) {
      const lento = r.tiempoDeltaMs > medianaMs;
      if (r.esCorrecta) cuadrantes[lento ? 'fragil' : 'dominado']++;
      else cuadrantes[lento ? 'confundido' : 'sinVer']++;
    }

    const aciertos = respuestas.filter((r) => r.esCorrecta === true).length;

    // Errores agrupados por libro y por página, con las páginas contiguas
    // unidas en rangos para que el plan de estudio se lea de un vistazo.
    const porLibro = new Map<string, Map<number, number>>();
    for (const r of respuestas) {
      if (r.esCorrecta) continue;
      const ref = r.reactivo.referencia ?? '';
      const pagina = Number(/Pág\.\s*(\d+)/i.exec(ref)?.[1]);
      // "Baldor, Aurelio (2019) Álgebra, Editorial…" → "Álgebra"
      const libro = /\(\d{4}\)\s*([^,]+)/.exec(ref)?.[1]?.trim();
      if (!libro || !Number.isFinite(pagina)) continue;
      if (!porLibro.has(libro)) porLibro.set(libro, new Map());
      const paginas = porLibro.get(libro)!;
      paginas.set(pagina, (paginas.get(pagina) ?? 0) + 1);
    }

    const libros = [...porLibro.entries()]
      .map(([libro, paginas]) => {
        const ordenadas = [...paginas.keys()].sort((a, b) => a - b);
        const rangos: Array<{
          desde: number;
          hasta: number;
          errores: number;
        }> = [];
        for (const p of ordenadas) {
          const ultimo = rangos[rangos.length - 1];
          if (ultimo && p === ultimo.hasta + 1) {
            ultimo.hasta = p;
            ultimo.errores += paginas.get(p)!;
          } else {
            rangos.push({ desde: p, hasta: p, errores: paginas.get(p)! });
          }
        }
        return {
          libro,
          errores: [...paginas.values()].reduce((a, b) => a + b, 0),
          rangos: rangos.sort((a, b) => b.errores - a.errores),
        };
      })
      .sort((a, b) => b.errores - a.errores);

    // Los pares que confundió: qué eligió contra qué era.
    //
    // Se arma comparando textos, no letras. Las notas del banco explican los
    // pares nombrando las opciones por su letra ("el distractor B invierte
    // minuendo y sustraendo"), pero el importador baraja las opciones, así que
    // esas letras ya no corresponden a lo que vio el aspirante. Enfrentar los
    // dos textos dice lo mismo y no puede desfasarse.
    //
    // Se priorizan los errores lentos —los "confundidos"— porque son los que
    // el aspirante sí estudió y tiene cruzados: los recuperables.
    const confusiones = respuestas
      .filter(
        (r) =>
          !r.esCorrecta &&
          r.reactivo.respuestaCorrecta &&
          r.respuestaSeleccionada !== r.reactivo.respuestaCorrecta,
      )
      .sort((a, b) => {
        const aLento = a.tiempoDeltaMs > medianaMs ? 1 : 0;
        const bLento = b.tiempoDeltaMs > medianaMs ? 1 : 0;
        if (aLento !== bLento) return bLento - aLento;
        return b.tiempoDeltaMs - a.tiempoDeltaMs;
      })
      .slice(0, 8)
      .map((r) => ({
        tema: r.reactivo.tema,
        pregunta: r.reactivo.enunciado,
        elegiste: r.respuestaSeleccionada,
        era: r.reactivo.respuestaCorrecta!,
        dice: r.reactivo.explicacion,
        referencia: r.reactivo.referencia,
        // Dudó: tardó más que su propia mediana. Distingue "lo tenía cruzado"
        // de "no lo había visto".
        dudo: r.tiempoDeltaMs > medianaMs,
      }));

    return {
      medianaSegundos: Math.round(medianaMs / 1000),
      cuadrantes,
      // Si desenreda todo lo que tiene cruzado, hasta dónde llegaría. No hay
      // puntaje de corte oficial en el cultural, así que la meta honesta es
      // su propio techo, no un umbral inventado.
      techoAlcanzable: aciertos + cuadrantes.confundido,
      libros,
      confusiones,
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
          coherencia = Math.max(0, Math.round((1 - desv / desvMax) * 100));
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
   * Sesgo de respuesta y deseabilidad social (solo personalidad; funciona igual
   * para Sí/No del banco remaster y Verdadero/Falso del v3 vía direccionRespuesta).
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
      const dir = this.direccionRespuesta(r.respuestaSeleccionada);
      const respondioSi = dir === 'afirma';
      const respondioNo = dir === 'niega';
      if (respondioSi) totalSi++;
      if (respondioNo) totalNo++;

      // Las trampas (polaridad TRAMPA) NO entran aquí: no tienen dirección
      // socialmente deseable en el sentido de este índice y, si se contaran,
      // inflarían el denominador sin poder sumar nunca al numerador. Se miden
      // aparte en calcularEscalasValidez.
      const esPolarizado =
        r.reactivo.polaridad === 'POSITIVA' ||
        r.reactivo.polaridad === 'NEGATIVA';
      if (esPolarizado && (respondioSi || respondioNo)) {
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
   * Escalas de validez L, K y F — solo personalidad (banco remaster o v3).
   *
   * Los 297 reactivos-trampa del banco no miden ningún rasgo: miden si se le
   * puede creer al aspirante. Cada uno afirma algo que una persona honesta no
   * puede sostener, así que responder "Sí" es el dato.
   *
   * - **L (Lie)** — afirmaciones absolutas sobre la propia conducta:
   *   *"Nunca he dicho una mentira en toda mi vida."* Un Sí no es virtud, es
   *   una afirmación que nadie puede sostener. L alto = intento ingenuo de
   *   verse impecable.
   *
   * - **K (Defensiveness)** — idealizaciones sobre cómo *deberían* ser las
   *   cosas: *"Una persona con valores firmes no debería enfrentar dilemas."*
   *   Es más sofisticada que L porque no habla de uno mismo sino de un
   *   estándar. K alto = el aspirante contesta desde un ideal, no desde su
   *   experiencia, y va a negar cualquier déficit del resto del examen.
   *
   * - **F (Infrequency)** — capacidades imposibles: *"Puedo darme cuenta
   *   siempre de cuándo alguien me está mintiendo."* F alto tiene dos lecturas
   *   opuestas: o contestó sin leer, o se atribuye capacidades que no existen.
   *   Se desempata con las métricas temporales.
   *
   * El denominador es cuántas trampas de ese tipo **aparecieron en este
   * examen**, no cuántas hay en el banco: el muestreo no las incluye todas.
   *
   * Devuelve null si el examen no trajo trampas (banco v1 o examen de otro
   * tipo), para que el panel sepa que no hay escalas que mostrar en vez de
   * mostrar ceros engañosos.
   */
  private calcularEscalasValidez(
    respuestas: Array<{
      respuestaSeleccionada: string;
      reactivo: {
        polaridad: string | null;
        tipoTrampa: string | null;
      };
    }>,
    tipoExamen: string,
  ) {
    if (tipoExamen !== 'personalidad') return null;

    const conteo: Record<string, { presentadas: number; afirmadas: number }> = {
      L: { presentadas: 0, afirmadas: 0 },
      K: { presentadas: 0, afirmadas: 0 },
      F: { presentadas: 0, afirmadas: 0 },
    };

    for (const r of respuestas) {
      const tipo = r.reactivo.tipoTrampa;
      if (r.reactivo.polaridad !== 'TRAMPA' || !tipo || !conteo[tipo]) continue;

      const dir = this.direccionRespuesta(r.respuestaSeleccionada);
      const respondioSi = dir === 'afirma';
      const respondioNo = dir === 'niega';
      if (!respondioSi && !respondioNo) continue;

      conteo[tipo].presentadas++;
      if (respondioSi) conteo[tipo].afirmadas++;
    }

    const totalPresentadas =
      conteo.L.presentadas + conteo.K.presentadas + conteo.F.presentadas;
    if (totalPresentadas === 0) return null;

    // Umbrales. L y K toleran más que F porque en un examen largo es normal
    // caer en alguna afirmación absoluta; en cambio atribuirse capacidades
    // imposibles no tiene lectura benigna.
    const BANDAS: Record<string, { elevada: number; alta: number }> = {
      L: { elevada: 20, alta: 40 },
      K: { elevada: 25, alta: 50 },
      F: { elevada: 15, alta: 30 },
    };

    const escala = (tipo: string) => {
      const { presentadas, afirmadas } = conteo[tipo];
      const porcentaje =
        presentadas > 0 ? Math.round((afirmadas / presentadas) * 100) : null;
      const banda =
        porcentaje === null
          ? 'sin_datos'
          : porcentaje > BANDAS[tipo].alta
            ? 'alta'
            : porcentaje > BANDAS[tipo].elevada
              ? 'elevada'
              : 'normal';
      return { presentadas, afirmadas, porcentaje, banda };
    };

    const L = escala('L');
    const K = escala('K');
    const F = escala('F');

    // Veredicto global. "Cuestionable" no significa que el aspirante mienta:
    // significa que el resto del examen no se puede leer al pie de la letra,
    // porque las respuestas están sesgadas hacia una imagen.
    const altas = [L, K, F].filter((e) => e.banda === 'alta').length;
    const elevadas = [L, K, F].filter((e) => e.banda === 'elevada').length;
    const veredicto =
      altas >= 2
        ? 'cuestionable'
        : altas === 1 || elevadas >= 2
          ? 'con_reservas'
          : 'valido';

    return {
      L,
      K,
      F,
      totalTrampasPresentadas: totalPresentadas,
      veredicto,
      // Bandera separada: K alto con L normal es el perfil que más se escapa,
      // porque el aspirante no se declara perfecto — declara un estándar
      // perfecto, y eso suena maduro.
      idealizacionSofisticada: K.banda === 'alta' && L.banda === 'normal',
    };
  }

  /**
   * Protocolo de señales críticas — solo personalidad, solo banco remaster.
   *
   * El banco marca 88 reactivos como CRÍTICO, pero no todos quieren decir lo
   * mismo. En los ejes 1 y 2 un "sí" habla de riesgo sobre la propia vida:
   * ideación, percepción de ser una carga, acceso a medios. En los demás ejes
   * describe un hallazgo fuerte de conducta — sostener una mentira, callar
   * algo del grupo, ejercer la autoridad con dureza — que es serio pero no es
   * una urgencia.
   *
   * Por eso solo los ejes 1 y 2 activan recursos de crisis. Si se dispararan
   * con `esCritico` a secas, a alguien que admitió falsear un trámite le
   * saldría un número de emergencia en pantalla, y eso desgasta la alerta
   * justo para quien sí la necesita.
   *
   * El eje 1 lo fija `docs/personalidad-remaster/01-suicidio-sentido-vida.md`.
   * El eje 2 lo añadió Carlo: sus críticos son percepción de ser una carga,
   * que en el modelo Joiner pesa igual que los del eje 1.
   *
   * Dos reglas de sistema del mismo documento, que aquí se respetan por
   * omisión y conviene no perder de vista:
   * - **No se notifica a nadie.** El resultado no viaja al plantel ni a
   *   reclutamiento. Es análisis privado del aspirante.
   * - **No se invalida el examen.** La plataforma es preparación, no la
   *   evaluación oficial de la UDEFA.
   *
   * Devuelve null si el examen no trae críticos, para que el panel sepa que no
   * hay nada que mostrar en vez de dibujar un "0 señales" que asusta solo.
   */
  private detectarSenalesCriticas(
    respuestas: Array<{
      respuestaSeleccionada: string;
      reactivo: {
        eje: number | null;
        numeroEnEje: number | null;
        polaridad: string | null;
        esCritico: boolean;
        tema: string | null;
      };
    }>,
    tipoExamen: string,
  ) {
    if (tipoExamen !== 'personalidad') return null;

    const EJES_PROTOCOLO_CRISIS = [1, 2];

    /**
     * Un crítico afirma riesgo según su polaridad, no siempre con el "Sí": 87
     * de los 88 son negativos y ahí el Sí es el dato, pero e10#88 es positivo
     * y el riesgo lo marca el No. Devuelve null si no contestó.
     */
    const afirmaRiesgo = (r: {
      respuestaSeleccionada: string;
      reactivo: { polaridad: string | null };
    }): boolean | null => {
      const dir = this.direccionRespuesta(r.respuestaSeleccionada);
      if (dir === null) return null;
      const dijoSi = dir === 'afirma';
      const dijoNo = dir === 'niega';
      return r.reactivo.polaridad === 'POSITIVA' ? dijoNo : dijoSi;
    };

    const criticos = respuestas.filter((r) => r.reactivo.esCritico);
    if (criticos.length === 0) return null;

    let senalesCrisis = 0;
    const hallazgosPorTema: Record<string, number> = {};
    for (const r of criticos) {
      if (afirmaRiesgo(r) !== true) continue;
      if (
        r.reactivo.eje !== null &&
        EJES_PROTOCOLO_CRISIS.includes(r.reactivo.eje)
      ) {
        senalesCrisis++;
      } else {
        const tema = r.reactivo.tema ?? 'sin_tema';
        hallazgosPorTema[tema] = (hallazgosPorTema[tema] ?? 0) + 1;
      }
    }

    // Combinación de riesgo agudo del eje 1: planeación con método (71) +
    // acceso a medios (72) + ausencia de pacto de crisis (73). El 73 es
    // POSITIVA, así que quien afirma riesgo ahí es el que contesta "No".
    //
    // Solo se puede evaluar si el muestreo trajo los tres al examen. Cuando no
    // los trae, `combinacionEvaluable` queda en false para que el panel no lea
    // el "no se cumple" como si fuera un descarte clínico.
    const delEje1 = (n: number) =>
      respuestas.find(
        (r) => r.reactivo.eje === 1 && r.reactivo.numeroEnEje === n,
      );
    const r71 = delEje1(71);
    const r72 = delEje1(72);
    const r73 = delEje1(73);
    const combinacionEvaluable = !!(r71 && r72 && r73);
    const combinacionRiesgoAgudo =
      combinacionEvaluable &&
      afirmaRiesgo(r71) === true &&
      afirmaRiesgo(r72) === true &&
      afirmaRiesgo(r73) === true;

    // Reactivos de máxima severidad del sub-lote 8 del eje 1 (ampliación 8 ago
    // 2026): intención (104), conducta preparatoria (105, 118), plan/ensayo
    // (111, 112), intento previo/múltiple/interrumpido (106, 113, 114),
    // autolesión (119), futuro cancelado directo (122), rechazo de ayuda (124),
    // urgencia aguda (125). Un solo "Verdadero" en cualquiera fuerza alerta
    // máxima — el intento previo (106/113/114) es el predictor de riesgo más
    // fuerte. Ver docs/personalidad-remaster/v3/01-suicidio-sentido-vida.md.
    const MAXIMA_SEVERIDAD_E1 = new Set([
      104, 105, 106, 111, 112, 113, 114, 118, 119, 122, 124, 125,
    ]);
    const hayMaximaSeveridadE1 = respuestas.some(
      (r) =>
        r.reactivo.eje === 1 &&
        r.reactivo.numeroEnEje !== null &&
        MAXIMA_SEVERIDAD_E1.has(r.reactivo.numeroEnEje) &&
        afirmaRiesgo(r) === true,
    );

    const nivel =
      combinacionRiesgoAgudo || hayMaximaSeveridadE1
        ? 'alerta_maxima'
        : senalesCrisis > 0
          ? 'alerta'
          : 'ninguna';

    return {
      nivel,
      protocoloCrisis: nivel !== 'ninguna',
      // Cuántas señales, no cuáles. El panel no debe repetirle al aspirante
      // el enunciado que acaba de marcar: leer de vuelta "identificaste un
      // objeto para lastimarte" no ayuda a nadie que esté mal.
      senalesCrisis,
      criticosPresentados: criticos.length,
      combinacionEvaluable,
      hallazgosPorTema,
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
      const dir = this.direccionRespuesta(respuestaSeleccionada);
      if (dir === null) return null;
      const afirma = dir === 'afirma';
      if (polaridad === 'POSITIVA') return afirma ? 1 : -1;
      if (polaridad === 'NEGATIVA') return afirma ? -1 : 1;
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
   * Dirección de la respuesta del aspirante, **agnóstica de escala**. Sirve por
   * igual para el banco remaster (Sí/No) y el v3 (Verdadero/Falso) sin distinguir
   * cuál es, así el scoring no se rompe al convivir los dos bancos.
   *   'afirma' = Sí / Verdadero (el aspirante endorsa el enunciado)
   *   'niega'  = No / Falso
   *   null     = respuesta no legible / sin contestar
   */
  private direccionRespuesta(respuesta: string): 'afirma' | 'niega' | null {
    const r = respuesta.toLowerCase().trim();
    if (r === 'sí' || r === 'si' || r === 'verdadero' || r === 'v')
      return 'afirma';
    if (r === 'no' || r === 'falso' || r === 'f') return 'niega';
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
    const varianza = arr.reduce((sum, n) => sum + (n - m) ** 2, 0) / arr.length;
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
          ? {
              estado: filtros.estado as
                'EN_PROGRESO' | 'COMPLETADA' | 'TIEMPO_AGOTADO' | 'ABANDONADA',
            }
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

    const respuestas = await this.prisma.respuestaReactivo.findMany({
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

    // MIENTRAS EL EXAMEN SIGUE ABIERTO, `esCorrecta` NO SALE. (22 ago 2026)
    //
    // Es del intento de quien pregunta, así que el permiso está bien. El
    // problema era otro: con el examen EN CURSO, este endpoint contestaba si
    // cada respuesta era correcta. Desde las herramientas del navegador se podía
    // contestar A, preguntar aquí, y si decía que no, cambiar a B — y repitiendo
    // eso de forma sistemática se extraía la clave del banco, cien reactivos por
    // intento y con intentos ilimitados. No era una fuga de datos personales:
    // era la puerta trasera al banco entero, que es el producto.
    //
    // Al terminar el examen sí se devuelve: ahí ya no hay nada que proteger,
    // porque el panel de resultados se lo enseña completo.
    if (intento.estado === 'EN_PROGRESO') {
      return respuestas.map(({ esCorrecta: _oculto, ...resto }) => ({
        ...resto,
        esCorrecta: null,
      }));
    }

    return respuestas;
  }
  /**
   * Le avisa a Carlo por correo que una cuenta llegó al tope diario.
   *
   * La pantalla "cuentas a vigilar" ya detectaba el vaciado, pero sólo sirve si
   * alguien la abre. Esto convierte la vigilancia en una alerta: llega sola, el
   * mismo día, con el nombre y el correo de quien topó.
   *
   * Nunca lanza: si el correo falla, el tope ya hizo su trabajo —el examen no se
   * creó— y eso es lo que importa.
   */
  private async avisarDeTope(usuarioId: number, intentosHoy: number) {
    const destino = process.env.MAIL_ALERTAS ?? process.env.MAIL_FROM;
    if (!destino) return;

    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: { nombre: true, email: true },
    });
    if (!usuario) return;

    await this.mail.enviar({
      to: destino,
      subject: `Una cuenta llegó al tope de simulacros (${intentosHoy} hoy)`,
      html: `
        <p><strong>${usuario.nombre}</strong> (${usuario.email}) arrancó
        ${intentosHoy} simulacros hoy y llegó al límite diario.</p>
        <p>Puede ser alguien estudiando muchísimo, o alguien vaciando el banco.
        Para distinguirlo, mira <em>Analítica → Cuentas a vigilar</em>: ahí está
        cuántos reactivos <strong>distintos</strong> lleva vistos. Un aspirante
        real repite reactivos; el que copia, no.</p>
      `,
    });
  }

}
