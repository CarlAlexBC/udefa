import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

/** Estado que ve el admin: además de los dos del enum, "SIN_ESCRIBIR" = no hay fila. */
type EstadoAdmin = 'SIN_ESCRIBIR' | 'BORRADOR' | 'PUBLICADO';

@Injectable()
export class ExplicacionesService {
  constructor(private prisma: PrismaService) {}

  /**
   * ADMIN — lista de capítulos culturales ordenada por lo MÁS FALLADO, con el
   * estado de su explicación. El % de fallo sale de juntar las respuestas de
   * práctica y de simulacro (solo reactivos culturales) agrupadas por capítulo.
   * Capítulos sin respuestas todavía → sin % (van al final).
   */
  async listarCapitulos() {
    const filas = await this.prisma.$queryRaw<
      Array<{
        capituloId: number;
        numero: number;
        titulo: string;
        materia: string;
        total: bigint;
        incorrectas: bigint;
      }>
    >(Prisma.sql`
      SELECT c.id AS "capituloId", c.numero, c.titulo, l.materia,
             COUNT(resp."reactivoId") AS total,
             COUNT(*) FILTER (WHERE resp."esCorrecta" = false) AS incorrectas
      FROM "Capitulo" c
      JOIN "Libro" l ON l.id = c."libroId"
      JOIN "Tema" t ON t."capituloId" = c.id
      JOIN "Reactivo" rx ON rx."temaId" = t.id AND rx.banco = 'cultural'
      LEFT JOIN (
        SELECT "reactivoId", "esCorrecta" FROM "RespuestaPractica"
        UNION ALL
        SELECT "reactivoId", "esCorrecta" FROM "RespuestaReactivo"
        WHERE "esCorrecta" IS NOT NULL
      ) resp ON resp."reactivoId" = rx.id
      GROUP BY c.id, c.numero, c.titulo, l.materia
    `);

    const explicaciones = await this.prisma.explicacionCapitulo.findMany({
      select: { capituloId: true, estado: true },
    });
    const estadoPorCap = new Map(explicaciones.map((e) => [e.capituloId, e.estado]));

    return filas
      .map((f) => {
        const total = Number(f.total);
        const incorrectas = Number(f.incorrectas);
        const porcentajeFallo =
          total > 0 ? Math.round((incorrectas / total) * 100) : null;
        return {
          capituloId: f.capituloId,
          materia: f.materia,
          numero: f.numero,
          titulo: f.titulo,
          totalRespuestas: total,
          porcentajeFallo,
          estado: (estadoPorCap.get(f.capituloId) ?? 'SIN_ESCRIBIR') as EstadoAdmin,
        };
      })
      // Más fallado primero; los que aún no tienen datos (null), al final.
      .sort((a, b) => (b.porcentajeFallo ?? -1) - (a.porcentajeFallo ?? -1));
  }

  /**
   * ADMIN — lo necesario para editar un capítulo: su explicación actual (si la
   * hay) y unas CITAS FUENTE del propio capítulo (solo lectura), para revisar
   * contra el libro sin salir del editor.
   */
  async obtenerParaEditar(capituloId: number) {
    const capitulo = await this.prisma.capitulo.findUnique({
      where: { id: capituloId },
      include: { libro: { select: { materia: true } } },
    });
    if (!capitulo) throw new NotFoundException('Capítulo no encontrado');

    const explicacion = await this.prisma.explicacionCapitulo.findUnique({
      where: { capituloId },
    });

    const fuentes = await this.prisma.reactivo.findMany({
      where: { banco: 'cultural', temaBanco: { capituloId } },
      select: { explicacion: true, referencia: true },
      take: 8,
    });

    return {
      capituloId,
      materia: capitulo.libro.materia,
      numero: capitulo.numero,
      titulo: capitulo.titulo,
      contenido: explicacion?.contenido ?? '',
      estado: (explicacion?.estado ?? 'SIN_ESCRIBIR') as EstadoAdmin,
      fuentes: fuentes.filter((f) => f.explicacion || f.referencia),
    };
  }

  /** ADMIN — crea o actualiza la explicación de un capítulo. */
  async guardar(
    capituloId: number,
    contenido: string,
    estado: 'BORRADOR' | 'PUBLICADO',
  ) {
    const capitulo = await this.prisma.capitulo.findUnique({
      where: { id: capituloId },
    });
    if (!capitulo) throw new NotFoundException('Capítulo no encontrado');

    return this.prisma.explicacionCapitulo.upsert({
      where: { capituloId },
      create: { capituloId, contenido, estado },
      update: { contenido, estado },
    });
  }

  /**
   * ASPIRANTE — la explicación PUBLICADA del capítulo al que pertenece un
   * reactivo. Devuelve `null` si no hay o si sigue en borrador. Se resuelve por
   * reactivoId para NO tener que tocar la corrección de práctica ni de repaso.
   */
  async porReactivo(reactivoId: number) {
    const reactivo = await this.prisma.reactivo.findUnique({
      where: { id: reactivoId },
      select: { temaBanco: { select: { capituloId: true } } },
    });
    const capituloId = reactivo?.temaBanco?.capituloId;
    if (!capituloId) return { explicacion: null };

    const exp = await this.prisma.explicacionCapitulo.findUnique({
      where: { capituloId },
    });
    if (!exp || exp.estado !== 'PUBLICADO') return { explicacion: null };
    return { explicacion: exp.contenido };
  }
}
