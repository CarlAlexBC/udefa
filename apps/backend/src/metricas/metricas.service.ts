import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Contador de visitas. El porqué de que sea tan pequeño está en el comentario
 * del modelo VistaDiaria, en el schema: sin cookies, sin terceros y sin nada
 * que permita reconstruir quién visitó qué.
 */
@Injectable()
export class MetricasService {
  private readonly logger = new Logger(MetricasService.name);

  constructor(private prisma: PrismaService) {}

  /** Hoy en México, "AAAA-MM-DD". Mismo criterio que la racha de estudio. */
  private hoy(): string {
    return this.diaDe(new Date());
  }

  private diaDe(d: Date): string {
    return d
      .toLocaleDateString('es-MX', {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .split('/')
      .reverse()
      .join('-');
  }

  /**
   * Los robots no son visitas. El user-agent se mira, se decide y se tira: no se
   * guarda. Esto caza a los que se anuncian —que son casi todos— y no pretende
   * cazar a los que mienten.
   */
  private esRobot(userAgent: string): boolean {
    return /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|whatsapp|headless|python-requests|curl|wget|monitor|uptime|preview/i.test(
      userAgent,
    );
  }

  /**
   * Normaliza la ruta: los segmentos que son sólo números pasan a ":id".
   * Sin esto, cada intento de examen abriría su propia fila y la tabla crecería
   * sin control con datos que no dicen nada.
   */
  private normalizar(ruta: string): string | null {
    if (typeof ruta !== 'string' || !ruta.startsWith('/')) return null;
    const limpia = ruta.split('?')[0].split('#')[0].slice(0, 120);
    return (
      '/' +
      limpia
        .split('/')
        .filter(Boolean)
        .map((seg) => (/^\d+$/.test(seg) ? ':id' : seg))
        .join('/')
    );
  }

  /** Suma una vista. Nunca lanza: una métrica no puede romperle la página a nadie. */
  async registrar(ruta: string, userAgent: string): Promise<void> {
    try {
      if (this.esRobot(userAgent ?? '')) return;
      const normalizada = this.normalizar(ruta);
      if (!normalizada) return;

      const fecha = this.hoy();
      await this.prisma.vistaDiaria.upsert({
        where: { fecha_ruta: { fecha, ruta: normalizada } },
        create: { fecha, ruta: normalizada, conteo: 1 },
        update: { conteo: { increment: 1 } },
      });
    } catch (e) {
      this.logger.warn(`No se pudo contar la vista de ${ruta}: ${String(e)}`);
    }
  }

  /** Resumen para el panel: hoy, ayer, la semana y las rutas más vistas. */
  async resumen() {
    const dias: string[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      dias.push(this.diaDe(d));
    }

    const filas = await this.prisma.vistaDiaria.findMany({
      where: { fecha: { in: dias } },
    });

    const porDia = dias
      .map((fecha) => ({
        fecha,
        vistas: filas
          .filter((f) => f.fecha === fecha)
          .reduce((t, f) => t + f.conteo, 0),
      }))
      .reverse();

    const porRuta = new Map<string, number>();
    filas.forEach((f) =>
      porRuta.set(f.ruta, (porRuta.get(f.ruta) ?? 0) + f.conteo),
    );

    return {
      hoy: porDia[porDia.length - 1]?.vistas ?? 0,
      ayer: porDia[porDia.length - 2]?.vistas ?? 0,
      semana: porDia.reduce((t, d) => t + d.vistas, 0),
      porDia,
      topRutas: [...porRuta.entries()]
        .map(([ruta, vistas]) => ({ ruta, vistas }))
        .sort((a, b) => b.vistas - a.vistas)
        .slice(0, 8),
    };
  }
}
