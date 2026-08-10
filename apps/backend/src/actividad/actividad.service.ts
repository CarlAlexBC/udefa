import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/** Un día de la tira semanal (lunes→domingo) del panel de racha. */
export interface DiaSemana {
  fecha: string; // "AAAA-MM-DD" en hora de México
  activo: boolean; // ¿estudió ese día?
  esHoy: boolean;
}

export interface Racha {
  rachaActual: number; // días seguidos hasta hoy (o hasta ayer si hoy aún no estudia)
  rachaMaxima: number; // la racha más larga que ha logrado
  hoyActivo: boolean; // ¿ya estudió hoy?
  semana: DiaSemana[]; // 7 días, lunes→domingo, de la semana en curso
}

@Injectable()
export class ActividadService {
  constructor(private prisma: PrismaService) {}

  /**
   * Fecha LOCAL de México ("AAAA-MM-DD"). Contamos el "día" en hora de México y
   * no en UTC, o la racha se rompería a medianoche para el aspirante. `en-CA`
   * formatea justo como AAAA-MM-DD.
   */
  private fechaMexico(d: Date = new Date()): string {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Mexico_City',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(d);
  }

  /**
   * Aritmética de calendario sobre el texto "AAAA-MM-DD" usando SOLO getters/setters
   * UTC: así sumar/restar días no arrastra ningún desfase de zona horaria.
   */
  private sumarDias(fecha: string, n: number): string {
    const [a, m, d] = fecha.split('-').map(Number);
    const dt = new Date(Date.UTC(a, m - 1, d));
    dt.setUTCDate(dt.getUTCDate() + n);
    return dt.toISOString().slice(0, 10);
  }

  /** Día de la semana de una fecha "AAAA-MM-DD": 0=domingo … 6=sábado. */
  private diaDeSemana(fecha: string): number {
    const [a, m, d] = fecha.split('-').map(Number);
    return new Date(Date.UTC(a, m - 1, d)).getUTCDay();
  }

  /**
   * Marca HOY (hora de México) como día activo del aspirante. Idempotente: si ya
   * estaba marcado, no hace nada. Se llama cuando el aspirante contesta un reactivo
   * en práctica, simulacro o repaso.
   */
  async marcarHoy(usuarioId: number): Promise<void> {
    const fecha = this.fechaMexico();
    await this.prisma.actividadDiaria.upsert({
      where: { usuarioId_fecha: { usuarioId, fecha } },
      create: { usuarioId, fecha },
      update: {},
    });
  }

  /**
   * La racha del aspirante: días seguidos, récord y la tira de esta semana.
   * Todo se calcula al vuelo desde `ActividadDiaria` (no hay números guardados
   * que se puedan desincronizar).
   */
  async obtenerRacha(usuarioId: number): Promise<Racha> {
    const filas = await this.prisma.actividadDiaria.findMany({
      where: { usuarioId },
      select: { fecha: true },
    });
    const dias = new Set(filas.map((f) => f.fecha));

    const hoy = this.fechaMexico();
    const ayer = this.sumarDias(hoy, -1);
    const hoyActivo = dias.has(hoy);

    // La racha vive si estudió hoy o ayer. Se cuenta hacia atrás desde ese día
    // mientras no haya un hueco. Si el último día activo fue antes de ayer, se rompió.
    let rachaActual = 0;
    let cursor = hoyActivo ? hoy : dias.has(ayer) ? ayer : null;
    while (cursor && dias.has(cursor)) {
      rachaActual++;
      cursor = this.sumarDias(cursor, -1);
    }

    // Racha máxima: la corrida consecutiva más larga de todo el historial.
    let rachaMaxima = 0;
    const ordenadas = [...dias].sort();
    let corrida = 0;
    let previa: string | null = null;
    for (const f of ordenadas) {
      corrida = previa && this.sumarDias(previa, 1) === f ? corrida + 1 : 1;
      if (corrida > rachaMaxima) rachaMaxima = corrida;
      previa = f;
    }
    // La racha actual también cuenta para el récord (por si hoy es el día más largo).
    if (rachaActual > rachaMaxima) rachaMaxima = rachaActual;

    // Tira de la semana en curso, lunes→domingo. Domingo=0, así que el lunes está
    // 6 días atrás cuando hoy es domingo, y (dow−1) días atrás el resto.
    const dow = this.diaDeSemana(hoy);
    const lunes = this.sumarDias(hoy, dow === 0 ? -6 : -(dow - 1));
    const semana: DiaSemana[] = Array.from({ length: 7 }, (_, i) => {
      const fecha = this.sumarDias(lunes, i);
      return { fecha, activo: dias.has(fecha), esHoy: fecha === hoy };
    });

    return { rachaActual, rachaMaxima, hoyActivo, semana };
  }
}
