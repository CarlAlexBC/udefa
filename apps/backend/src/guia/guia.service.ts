import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Avance de lectura de la Guía del Aspirante.
 *
 * Guarda qué secciones ya leyó cada usuario. Antes esto vivía en el
 * localStorage del navegador, lo que significaba que el avance se perdía al
 * cambiar de teléfono, al limpiar el navegador o al entrar desde la computadora.
 *
 * El catálogo de secciones NO vive aquí: son archivos .md en
 * docs/guia-aspirante/, y el índice del frontend (SECCIONES_ONLINE) es su
 * fuente de verdad. Aquí sólo se guarda el slug, que es su identificador.
 * Por eso el servicio no valida que el slug exista — si algún día se renombra
 * un archivo, lo peor que pasa es que quede una fila huérfana que nadie lee.
 */
@Injectable()
export class GuiaService {
  constructor(private prisma: PrismaService) {}

  /** Los slugs de las secciones que este usuario ya leyó. */
  async leidas(usuarioId: number): Promise<string[]> {
    const filas = await this.prisma.seccionLeida.findMany({
      where: { usuarioId },
      select: { slug: true },
    });
    return filas.map((f) => f.slug);
  }

  /**
   * Marca una sección como leída.
   *
   * Es idempotente por el índice único de (usuarioId, slug): el frontend la
   * llama cada vez que se abre una sección, sin llevar cuenta de si ya la
   * había marcado. `upsert` con `update: {}` deja intacta la fecha original,
   * que es lo que queremos — interesa CUÁNDO la leyó por primera vez.
   */
  async marcar(usuarioId: number, slug: string): Promise<void> {
    await this.prisma.seccionLeida.upsert({
      where: { usuarioId_slug: { usuarioId, slug } },
      create: { usuarioId, slug },
      update: {},
    });
  }

  /**
   * Marca varias de un golpe. Sirve para subir lo que el aspirante ya tenía
   * guardado en su navegador de antes de que esto existiera, sin disparar una
   * petición por sección.
   *
   * `skipDuplicates` deja pasar las que ya estaban en vez de tronar.
   */
  async marcarVarias(usuarioId: number, slugs: string[]): Promise<void> {
    if (slugs.length === 0) return;
    // Se quitan repetidos antes de mandar: createMany no los tolera dentro del
    // mismo lote aunque lleve skipDuplicates.
    const unicos = [...new Set(slugs)];
    await this.prisma.seccionLeida.createMany({
      data: unicos.map((slug) => ({ usuarioId, slug })),
      skipDuplicates: true,
    });
  }

  /** Borra todo el avance del usuario (el "reiniciar" del índice de la Guía). */
  async reiniciar(usuarioId: number): Promise<void> {
    await this.prisma.seccionLeida.deleteMany({ where: { usuarioId } });
  }
}
