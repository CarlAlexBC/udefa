import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IntentosService } from '../intentos/intentos.service';

@Injectable()
export class SesionesCompletasService {
  constructor(
    private prisma: PrismaService,
    private intentosService: IntentosService,
  ) {}

  private validarPropiedad<T extends { usuarioId: number }>(
    recurso: T | null,
    usuarioId: number,
    tipo: string,
  ): T {
    if (!recurso) throw new NotFoundException(`${tipo} no encontrada`);
    if (recurso.usuarioId !== usuarioId) {
      throw new ForbiddenException(
        `No tienes permiso para acceder a esta ${tipo.toLowerCase()}`,
      );
    }
    return recurso;
  }

  async crear(usuarioId: number, plantelId: number) {
    const plantel = await this.prisma.plantel.findUnique({
      where: { id: plantelId },
    });
    if (!plantel) {
      throw new NotFoundException('Plantel no encontrado');
    }

    return this.prisma.sesionExamenCompleto.create({
      data: {
        usuarioId,
        plantelId,
      },
    });
  }

  async finalizar(
    sesionId: number,
    usuarioId: number,
    estado: 'COMPLETADA' | 'ABANDONADA',
  ) {
    const sesion = this.validarPropiedad(
      await this.prisma.sesionExamenCompleto.findUnique({
        where: { id: sesionId },
        include: { intentos: true },
      }),
      usuarioId,
      'Sesión',
    );

    if (sesion.estado !== 'EN_PROGRESO') {
      throw new BadRequestException(
        'La sesión ya fue terminada, no se puede volver a finalizar',
      );
    }

    // Business rule: no se puede marcar COMPLETADA si hay intentos en curso.
    if (estado === 'COMPLETADA') {
      const enCurso = sesion.intentos.filter((i) => i.estado === 'EN_PROGRESO');
      if (enCurso.length > 0) {
        throw new BadRequestException(
          `No se puede completar la sesión: hay ${enCurso.length} intento(s) aún en progreso`,
        );
      }
    }

    return this.prisma.sesionExamenCompleto.update({
      where: { id: sesionId },
      data: {
        estado,
        finAt: new Date(),
      },
    });
  }

  async obtenerResultados(sesionId: number, usuarioId: number) {
    const sesion = this.validarPropiedad(
      await this.prisma.sesionExamenCompleto.findUnique({
        where: { id: sesionId },
        include: {
          intentos: {
            include: { examen: true },
            orderBy: { inicioAt: 'asc' },
          },
          plantel: true,
        },
      }),
      usuarioId,
      'Sesión',
    );

    const resultadosPorIntento = await Promise.all(
      sesion.intentos.map((intento) =>
        this.intentosService.obtenerResultados(intento.id, usuarioId),
      ),
    );

    // Análisis cross-examen: distancia Personalidad ↔ Axiológico.
    // Compara la coherencia del perfil declarado en personalidad contra
    // el perfil aceptado en axiológico dentro del tema común "valores_militares".
    const distanciaCrossExamen =
      this.calcularDistanciaCrossExamen(resultadosPorIntento);

    return {
      sesionId: sesion.id,
      plantel: { id: sesion.plantel.id, nombre: sesion.plantel.nombre },
      estado: sesion.estado,
      inicioAt: sesion.inicioAt,
      finAt: sesion.finAt,
      intentos: resultadosPorIntento,
      distanciaCrossExamen,
    };
  }

  /**
   * Calcula la coherencia entre lo declarado en Personalidad y lo aceptado
   * en Axiológico. Ambos exámenes evalúan el tema "valores_militares" —
   * si la persona dice tener valores militares altos en Personalidad pero
   * en Axiológico se identifica poco con perfiles que los reflejan, hay
   * incoherencia entre autoconcepto y valores implícitos.
   *
   * Devuelve null si la sesión no incluye ambos exámenes o no tienen el
   * tema común.
   */
  private calcularDistanciaCrossExamen(
    intentos: Array<{
      examen: { id: number; nombre: string; calificable: boolean };
      analisisConsistencia?: {
        porTema: Array<{ tema: string; puntajeDireccion: number }>;
      };
    }>,
  ) {
    const personalidad = intentos.find((i) =>
      i.examen.nombre.toLowerCase().includes('personalidad'),
    );
    const axiologico = intentos.find((i) =>
      i.examen.nombre.toLowerCase().includes('axiológico'),
    );

    if (
      !personalidad?.analisisConsistencia ||
      !axiologico?.analisisConsistencia
    ) {
      return null;
    }

    const TEMA_COMUN = 'valores_militares';
    const temaPers = personalidad.analisisConsistencia.porTema.find(
      (t) => t.tema === TEMA_COMUN,
    );
    const temaAxio = axiologico.analisisConsistencia.porTema.find(
      (t) => t.tema === TEMA_COMUN,
    );

    if (!temaPers || !temaAxio) return null;

    // Personalidad: puntajeDireccion está en escala -1 a +1
    // Normalizamos a 0-100: (-1 → 0, +1 → 100)
    const puntajePersonalidadNorm = Math.round(
      ((temaPers.puntajeDireccion + 1) / 2) * 100,
    );
    // Axiológico: puntajeDireccion está en escala 1-5
    // Normalizamos a 0-100: (1 → 0, 5 → 100)
    const puntajeAxiologicoNorm = Math.round(
      ((temaAxio.puntajeDireccion - 1) / 4) * 100,
    );

    // Distancia absoluta entre ambos scores (0 = coherencia perfecta, 100 = máxima divergencia)
    const distancia = Math.abs(puntajePersonalidadNorm - puntajeAxiologicoNorm);

    let interpretacion: 'coherente' | 'aceptable' | 'divergente';
    const UMBRAL_COHERENTE = 15;
    const UMBRAL_ACEPTABLE = 30;
    if (distancia <= UMBRAL_COHERENTE) interpretacion = 'coherente';
    else if (distancia <= UMBRAL_ACEPTABLE) interpretacion = 'aceptable';
    else interpretacion = 'divergente';

    return {
      temaComun: TEMA_COMUN,
      puntajePersonalidad: puntajePersonalidadNorm,
      puntajeAxiologico: puntajeAxiologicoNorm,
      distancia,
      interpretacion,
    };
  }

  /**
   * Lista las sesiones completas del usuario, de la más reciente a la más vieja.
   */
  async listarPorUsuario(usuarioId: number) {
    return this.prisma.sesionExamenCompleto.findMany({
      where: { usuarioId },
      include: {
        plantel: { select: { id: true, nombre: true } },
        intentos: {
          select: {
            id: true,
            examenId: true,
            estado: true,
            inicioAt: true,
            finAt: true,
          },
          orderBy: { inicioAt: 'asc' },
        },
      },
      orderBy: { inicioAt: 'desc' },
    });
  }
}
