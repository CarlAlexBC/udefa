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

    const respuestas = intento.respuestas;
    const calificable = intento.examen.calificable;

    // --- Métricas globales ---
    const reactivosRespondidos = respuestas.length;
    const aciertos = calificable
      ? respuestas.filter((r) => r.esCorrecta === true).length
      : null;
    const porcentajeAciertos =
      calificable && reactivosRespondidos > 0
        ? Math.round((aciertos! / reactivosRespondidos) * 100)
        : null;
    const tiempoTotalMs = respuestas.reduce(
      (max, r) => Math.max(max, r.respondidoEnMs),
      0,
    );

    // --- Agregación por bloque ---
    const bloqueStats = new Map<
      number,
      { nombre: string; respondidos: number; aciertos: number }
    >();
    for (const r of respuestas) {
      const id = r.reactivo.bloqueId;
      let stats = bloqueStats.get(id);
      if (!stats) {
        stats = {
          nombre: r.reactivo.bloque.nombre,
          respondidos: 0,
          aciertos: 0,
        };
        bloqueStats.set(id, stats);
      }
      stats.respondidos++;
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
    }));

    // --- Agregación por tema ---
    const temaStats = new Map<
      string,
      { respondidos: number; aciertos: number }
    >();
    for (const r of respuestas) {
      const tema = r.reactivo.tema ?? 'sin_tema';
      let stats = temaStats.get(tema);
      if (!stats) {
        stats = { respondidos: 0, aciertos: 0 };
        temaStats.set(tema, stats);
      }
      stats.respondidos++;
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
    }));

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
    };
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
