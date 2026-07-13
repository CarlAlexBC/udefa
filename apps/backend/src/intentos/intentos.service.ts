import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IntentosService {
  constructor(private prisma: PrismaService) {}

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
    reactivoId: number,
    respuestaSeleccionada: string,
    respondidoEnMs: number,
  ) {
    const intento = await this.prisma.intentoExamen.findUnique({
      where: { id: intentoId },
      include: { examen: true },
    });
    if (!intento) {
      throw new NotFoundException('Intento no encontrado');
    }
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
    estado: 'COMPLETADA' | 'TIEMPO_AGOTADO' | 'ABANDONADA',
  ) {
    const intento = await this.prisma.intentoExamen.findUnique({
      where: { id: intentoId },
    });
    if (!intento) {
      throw new NotFoundException('Intento no encontrado');
    }
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
}
