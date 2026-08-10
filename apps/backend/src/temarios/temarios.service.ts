import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Gestión de los Temarios (la DEMANDA del examen cultural) para el panel admin.
 *
 * Hoy cubre el REPARTO: cuántos reactivos aporta cada materia al examen de 100.
 * El contenido (qué capítulos entran) se edita/importa aparte.
 */
@Injectable()
export class TemariosService {
  constructor(private prisma: PrismaService) {}

  /**
   * Lista los temarios con su plantel y sus materias (nombre + nº de preguntas),
   * ordenados por plantel y año. Alimenta la pantalla de Reparto del panel.
   */
  async listarConMaterias() {
    return this.prisma.temario.findMany({
      orderBy: [{ plantelId: 'asc' }, { anio: 'desc' }],
      include: {
        plantel: { select: { id: true, nombre: true } },
        materias: {
          orderBy: { orden: 'asc' },
          select: { id: true, nombre: true, numPreguntas: true, orden: true },
        },
      },
    });
  }

  /**
   * Cambia el nº de reactivos de UNA materia del temario (el reparto).
   *
   * NO exige que las materias sumen 100: eso es un aviso en la UI, no un candado
   * —decisión de Carlo (repartir flexible)—. Sólo valida entero >= 0.
   */
  async actualizarNumPreguntas(materiaId: number, numPreguntas: number) {
    if (!Number.isInteger(numPreguntas) || numPreguntas < 0) {
      throw new BadRequestException(
        'numPreguntas debe ser un entero mayor o igual a 0.',
      );
    }
    const materia = await this.prisma.materiaTemario.findUnique({
      where: { id: materiaId },
      select: { id: true },
    });
    if (!materia) {
      throw new NotFoundException(
        `No existe la materia de temario ${materiaId}.`,
      );
    }
    return this.prisma.materiaTemario.update({
      where: { id: materiaId },
      data: { numPreguntas },
      select: { id: true, nombre: true, numPreguntas: true, temarioId: true },
    });
  }
}
