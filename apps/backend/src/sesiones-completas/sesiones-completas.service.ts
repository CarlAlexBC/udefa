import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IntentosService } from '../intentos/intentos.service';

@Injectable()
export class SesionesCompletasService {
  constructor(
    private prisma: PrismaService,
    private intentosService: IntentosService,
  ) {}

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
    estado: 'COMPLETADA' | 'ABANDONADA',
  ) {
    const sesion = await this.prisma.sesionExamenCompleto.findUnique({
      where: { id: sesionId },
      include: { intentos: true },
    });
    if (!sesion) {
      throw new NotFoundException('Sesión no encontrada');
    }
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

  async obtenerResultados(sesionId: number) {
    const sesion = await this.prisma.sesionExamenCompleto.findUnique({
      where: { id: sesionId },
      include: {
        intentos: {
          include: { examen: true },
          orderBy: { inicioAt: 'asc' },
        },
        plantel: true,
      },
    });
    if (!sesion) {
      throw new NotFoundException('Sesión no encontrada');
    }

    const resultadosPorIntento = await Promise.all(
      sesion.intentos.map((intento) =>
        this.intentosService.obtenerResultados(intento.id),
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
}
