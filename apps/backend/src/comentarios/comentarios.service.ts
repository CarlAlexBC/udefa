import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/** Largo del mensaje. Corto de más no dice nada; largo de más es un ensayo. */
const MINIMO = 10;
const MAXIMO = 1000;

/**
 * Buzón de comentarios.
 *
 * El aspirante escribe desde su pantalla de inicio y Carlo lo lee en el panel.
 * No hay conversación ni respuesta dentro de la plataforma: es un buzón, y si
 * hay que contestar se contesta por correo, que para eso se guarda quién
 * escribió.
 *
 * LAS CUENTAS DE PRUEBA QUEDAN FUERA, y en los dos sentidos: no pueden escribir
 * y no aparecen en la lista. Son cuentas desechables —se borran solas al vencer,
 * con todo lo suyo— así que un comentario suyo sería ruido con fecha de
 * caducidad. Se reconocen por el correo `@prueba.local`, que es inventado a
 * propósito y nadie de fuera puede tener.
 */
@Injectable()
export class ComentariosService {
  constructor(private prisma: PrismaService) {}

  private esDePrueba(email: string) {
    return email.toLowerCase().endsWith('@prueba.local');
  }

  /** Guarda un comentario del aspirante. */
  async crear(usuarioId: number, texto: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: { email: true },
    });
    if (!usuario) throw new ForbiddenException('Cuenta no encontrada.');
    if (this.esDePrueba(usuario.email)) {
      throw new ForbiddenException(
        'Las cuentas de prueba no pueden mandar comentarios.',
      );
    }

    const limpio = (texto ?? '').trim();
    if (limpio.length < MINIMO) {
      throw new BadRequestException(
        `Escribe un poco más: al menos ${MINIMO} caracteres.`,
      );
    }
    if (limpio.length > MAXIMO) {
      throw new BadRequestException(
        `El mensaje es muy largo: máximo ${MAXIMO} caracteres.`,
      );
    }

    const creado = await this.prisma.comentario.create({
      data: { usuarioId, texto: limpio },
      select: { id: true, createdAt: true },
    });
    return { ok: true, ...creado };
  }

  /**
   * Los últimos comentarios, para el panel.
   *
   * `soloSinLeer` sirve para cuando ya hay muchos y sólo interesa lo nuevo.
   */
  async listarParaAdmin(opciones: { soloSinLeer?: boolean; take?: number } = {}) {
    const take = Math.min(opciones.take ?? 100, 300);
    const filas = await this.prisma.comentario.findMany({
      where: {
        ...(opciones.soloSinLeer ? { leido: false } : {}),
        // Ni las de prueba de hoy ni las que hubieran quedado de antes.
        usuario: { email: { not: { endsWith: '@prueba.local' } } },
      },
      orderBy: { createdAt: 'desc' },
      take,
      select: {
        id: true,
        texto: true,
        leido: true,
        createdAt: true,
        usuario: {
          select: { id: true, nombre: true, email: true, nivelAcceso: true },
        },
      },
    });

    const sinLeer = filas.filter((c) => !c.leido).length;
    return { total: filas.length, sinLeer, comentarios: filas };
  }

  /** Cuántos hay sin leer. Es lo que pinta el globito del menú. */
  async contarSinLeer() {
    const sinLeer = await this.prisma.comentario.count({
      where: {
        leido: false,
        usuario: { email: { not: { endsWith: '@prueba.local' } } },
      },
    });
    return { sinLeer };
  }

  /** Marca uno como leído (o lo regresa a sin leer). */
  async marcarLeido(id: number, leido: boolean) {
    await this.prisma.comentario.update({ where: { id }, data: { leido } });
    return { ok: true };
  }
}
