import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CATALOGO_CURSOS } from './catalogo-cursos';

@Injectable()
export class TropaService {
  constructor(private prisma: PrismaService) {}

  /**
   * Cursos de tropa reales (existen como Plantel tipo TROPA en la base),
   * enriquecidos con el catálogo versionado (escuela, nombre legible, logo).
   * Un curso del catálogo sin fila en la base todavía no se muestra -- así
   * nunca se ofrece un curso "fantasma" que no se puede seleccionar de verdad.
   */
  async obtenerCursos() {
    const planteles = await this.prisma.plantel.findMany({
      where: { tipo: 'TROPA' },
      select: { id: true, nombre: true },
    });
    const porCodigo = new Map(planteles.map((p) => [p.nombre, p.id]));

    return CATALOGO_CURSOS.filter((c) => porCodigo.has(c.codigo)).map((c) => ({
      id: porCodigo.get(c.codigo)!,
      codigo: c.codigo,
      escuela: c.escuela,
      nombre: c.nombre,
      logo: c.logo,
      escudoRespaldo: c.escudoRespaldo,
    }));
  }
}
