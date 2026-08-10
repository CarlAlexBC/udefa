import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TemasPrioridadService {
  constructor(private prisma: PrismaService) {}

  /**
   * Lista todos los temas registrados en el catálogo de prioridades.
   * Ordenados por peso descendente para que los prioritarios aparezcan primero.
   */
  async obtenerTodos() {
    return this.prisma.temaPrioridad.findMany({
      orderBy: [{ peso: 'desc' }, { tema: 'asc' }],
    });
  }

  /**
   * Devuelve un mapa `tema → peso` listo para consultar rápido desde
   * ExamenesService al armar exámenes con muestreo estratificado.
   *
   * Si un tema aparece en Reactivo.tema pero no está en TemaPrioridad,
   * NO aparece en el mapa — los callers deben usar el default 1 al no
   * encontrarlo.
   */
  async obtenerPesos(): Promise<Record<string, number>> {
    const registros = await this.prisma.temaPrioridad.findMany({
      select: { tema: true, peso: true },
    });
    return Object.fromEntries(registros.map((r) => [r.tema, r.peso]));
  }

  /**
   * Actualiza (o crea) la prioridad de un tema.
   * Uso PATCH desde el admin panel.
   */
  async actualizar(
    tema: string,
    datos: {
      peso?: number;
      descripcion?: string | null;
      motivoContextual?: string | null;
    },
  ) {
    if (datos.peso !== undefined && (datos.peso < 1 || datos.peso > 10)) {
      throw new BadRequestException('El peso debe estar entre 1 y 10');
    }

    // Upsert — si el tema no existe lo creamos con los valores dados + defaults.
    // Si existe, actualizamos solo los campos que llegaron.
    return this.prisma.temaPrioridad.upsert({
      where: { tema },
      update: {
        ...(datos.peso !== undefined && { peso: datos.peso }),
        ...(datos.descripcion !== undefined && {
          descripcion: datos.descripcion,
        }),
        ...(datos.motivoContextual !== undefined && {
          motivoContextual: datos.motivoContextual,
        }),
      },
      create: {
        tema,
        peso: datos.peso ?? 1,
        descripcion: datos.descripcion ?? null,
        motivoContextual: datos.motivoContextual ?? null,
      },
    });
  }

  /**
   * Devuelve un tema específico por su nombre.
   * 404 si no existe.
   */
  async obtenerUno(tema: string) {
    const registro = await this.prisma.temaPrioridad.findUnique({
      where: { tema },
    });
    if (!registro) {
      throw new NotFoundException(
        `Tema "${tema}" no encontrado en el catálogo de prioridades`,
      );
    }
    return registro;
  }
}
