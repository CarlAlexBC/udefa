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
      const enCurso = sesion.intentos.filter(
        (i) => i.estado === 'EN_PROGRESO',
      );
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

    return {
      sesionId: sesion.id,
      plantel: { id: sesion.plantel.id, nombre: sesion.plantel.nombre },
      estado: sesion.estado,
      inicioAt: sesion.inicioAt,
      finAt: sesion.finAt,
      intentos: resultadosPorIntento,
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
          select: { id: true, examenId: true, estado: true, inicioAt: true, finAt: true },
          orderBy: { inicioAt: 'asc' },
        },
      },
      orderBy: { inicioAt: 'desc' },
    });
  }
}
