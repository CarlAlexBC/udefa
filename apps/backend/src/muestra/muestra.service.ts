import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// Cuántos reactivos calificables entran a la muestra, por módulo. 25 + 25 = 50.
const N_CULTURAL = 25;
const N_PSICOMETRICO = 25;
// El examen psicométrico es la fase CALIFICABLE del módulo psicológico
// (personalidad y axiológico son de autoevaluación: no tienen respuesta correcta,
// así que no entran a una muestra con puntaje).
const EXAMEN_PSICOMETRICO_ID = 1;

type FilaMuestra = {
  id: number;
  enunciado: string;
  opciones: unknown;
  tema: string | null;
};

export type ReactivoMuestra = {
  id: number;
  enunciado: string;
  opciones: string[];
  tema: string | null;
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
    // Cultural: del árbol de oferta (temaId), solo con respuesta.
    const cultural = await this.prisma.$queryRaw<FilaMuestra[]>`
      SELECT id, enunciado, opciones, tema
      FROM "Reactivo"
      WHERE "temaId" IS NOT NULL AND "respuestaCorrecta" IS NOT NULL
      ORDER BY random()
      LIMIT ${N_CULTURAL}
    `;
    // Psicométrico: reactivos de los bloques del examen psicométrico, con respuesta.
    const psico = await this.prisma.$queryRaw<FilaMuestra[]>`
      SELECT r.id, r.enunciado, r.opciones, r.tema
      FROM "Reactivo" r
      JOIN "Bloque" b ON r."bloqueId" = b.id
      WHERE b."examenId" = ${EXAMEN_PSICOMETRICO_ID} AND r."respuestaCorrecta" IS NOT NULL
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
    const correctaPorId = new Map(reactivos.map((r) => [r.id, r.respuestaCorrecta]));
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
