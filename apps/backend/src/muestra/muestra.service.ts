import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// Cuántos reactivos calificables entran a la muestra, por módulo. 25 + 25 = 50.
const N_CULTURAL = 25;
const N_PSICOMETRICO = 25;
// El examen psicométrico es la fase CALIFICABLE del módulo psicológico
// (personalidad y axiológico son de autoevaluación: no tienen respuesta correcta,
// así que no entran a una muestra con puntaje).
const EXAMEN_PSICOMETRICO_ID = 1;

// Reactivos que NO pueden entrar a la probadita porque su pregunta vive en una
// imagen que aquí no se pinta: los de figuras del psicométrico y los culturales
// que remiten a una figura numerada del libro ("según la figura 32-14").
//
// El patrón es deliberadamente estrecho: pide un NÚMERO después de "figura" o
// "gráfica", o la forma "cuál figura". Así no se lleva por delante a los de
// Español que hablan de "figura retórica", que sí se contestan leyendo.
//
// Esto es un parche para la muestra, no la solución: el día que los reactivos
// con imagen se soporten de verdad (adjuntar el recorte), esto se puede quitar.
const SIN_IMAGEN =
  '(cu[aá]l figura|seg[uú]n la figura|de la figura|en la figura|figura [0-9]|gr[aá]fica [0-9]|esquema [0-9])';

// OJO: ese filtro sólo se aplica a los reactivos que NO traen imagen adjunta.
// Desde el 22 ago 2026 la probadita sí pinta figuras, así que un reactivo con su
// recorte pegado es contestable y entra; sigue fuera el que remite a una figura
// del libro que nadie adjuntó.

type FilaMuestra = {
  id: number;
  enunciado: string;
  opciones: unknown;
  tema: string | null;
  imagenUrl: string | null;
};

export type ReactivoMuestra = {
  id: number;
  enunciado: string;
  opciones: string[];
  tema: string | null;
  imagenUrl: string | null;
  modulo: 'cultural' | 'psicologico';
};

@Injectable()
export class MuestraService {
  constructor(private prisma: PrismaService) {}

  /**
   * Arma una muestra pública sin cuenta: reactivos calificables de cultural y de
   * psicométrico, barajados y **SIN la respuesta correcta** (esa nunca sale al
   * cliente; la muestra se califica en el servidor). No persiste nada.
   */
  async armar(): Promise<ReactivoMuestra[]> {
    // Cultural: del árbol de oferta (temaId), solo con respuesta y sin los que
    // remiten a una figura del libro (ver SIN_IMAGEN).
    const cultural = await this.prisma.$queryRaw<FilaMuestra[]>`
      SELECT id, enunciado, opciones, tema, "imagenUrl"
      FROM "Reactivo"
      WHERE "temaId" IS NOT NULL
        AND "respuestaCorrecta" IS NOT NULL
        AND ("imagenUrl" IS NOT NULL OR enunciado !~* ${SIN_IMAGEN})
      ORDER BY random()
      LIMIT ${N_CULTURAL}
    `;
    // Psicométrico: reactivos de los bloques del examen psicométrico, con
    // respuesta y FUERA de Razonamiento Abstracto.
    //
    // Por qué se excluye ese bloque: sus reactivos son figuras — la pregunta ES
    // la imagen, y las opciones son "A, B, C, D, E" refiriéndose a dibujos. La
    // probadita no pinta imágenes, así que ahí salían preguntas imposibles de
    // contestar: "¿Cuál figura falta en la sucesión?" con cinco letras huérfanas.
    // Es lo primero que ve alguien que todavía no compra, así que no puede pasar.
    // El hueco lo llenan solos los otros bloques, porque el LIMIT no cambia.
    const psico = await this.prisma.$queryRaw<FilaMuestra[]>`
      SELECT r.id, r.enunciado, r.opciones, r.tema, r."imagenUrl"
      FROM "Reactivo" r
      JOIN "Bloque" b ON r."bloqueId" = b.id
      WHERE b."examenId" = ${EXAMEN_PSICOMETRICO_ID}
        AND r."respuestaCorrecta" IS NOT NULL
        AND b.nombre NOT ILIKE ${'%abstracto%'}
        AND (r."imagenUrl" IS NOT NULL OR r.enunciado !~* ${SIN_IMAGEN})
      ORDER BY random()
      LIMIT ${N_PSICOMETRICO}
    `;

    const items: ReactivoMuestra[] = [
      ...cultural.map((r) => this.normalizar(r, 'cultural')),
      ...psico.map((r) => this.normalizar(r, 'psicologico')),
    ];
    return this.barajar(items);
  }

  /**
   * Califica la muestra en el servidor y devuelve SOLO el puntaje agregado (el
   * gancho): total, aciertos y el desglose por módulo. A propósito NO devuelve el
   * detalle pregunta-por-pregunta ni el diagnóstico — eso es la parte de pago,
   * para dejar picada a la persona. Nunca sale el texto de la respuesta correcta
   * y no guarda nada.
   */
  async calificar(respuestas: { reactivoId: number; respuesta: string }[]) {
    if (!Array.isArray(respuestas) || respuestas.length === 0) {
      throw new BadRequestException('No hay respuestas para calificar.');
    }
    const ids = respuestas
      .map((r) => Number(r.reactivoId))
      .filter((n) => Number.isFinite(n));
    const reactivos = await this.prisma.reactivo.findMany({
      where: { id: { in: ids } },
      select: { id: true, respuestaCorrecta: true, temaId: true },
    });
    const correctaPorId = new Map(
      reactivos.map((r) => [r.id, r.respuestaCorrecta]),
    );
    const moduloPorId = new Map(
      reactivos.map(
        (r) => [r.id, r.temaId != null ? 'cultural' : 'psicologico'] as const,
      ),
    );

    const porModulo = {
      cultural: { total: 0, aciertos: 0 },
      psicologico: { total: 0, aciertos: 0 },
    };
    // Solo se tallan los agregados. A propósito NO se devuelve el detalle
    // pregunta-por-pregunta ni el diagnóstico: la muestra deja ver el puntaje
    // (el gancho) y el diagnóstico completo queda para el paquete de pago.
    let aciertos = 0;
    for (const r of respuestas) {
      const id = Number(r.reactivoId);
      const correcta = correctaPorId.get(id);
      const acerto = correcta != null && r.respuesta === correcta;
      const modulo = moduloPorId.get(id);
      if (modulo) {
        porModulo[modulo].total++;
        if (acerto) porModulo[modulo].aciertos++;
      }
      if (acerto) aciertos++;
    }
    const total = respuestas.length;
    return {
      total,
      aciertos,
      porcentaje: total ? Math.round((aciertos / total) * 100) : 0,
      porModulo,
    };
  }

  private normalizar(
    fila: FilaMuestra,
    modulo: 'cultural' | 'psicologico',
  ): ReactivoMuestra {
    const opciones = Array.isArray(fila.opciones)
      ? (fila.opciones as string[])
      : [];
    return {
      id: fila.id,
      enunciado: fila.enunciado,
      opciones,
      tema: fila.tema,
      imagenUrl: fila.imagenUrl,
      modulo,
    };
  }

  // Barajado Fisher-Yates, para que cultural y psicométrico salgan mezclados.
  private barajar<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
