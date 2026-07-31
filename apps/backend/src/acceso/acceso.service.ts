import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/** Módulos de pago que existen hoy. El "Pack Completa" es la suma de los dos. */
export const MODULOS = ['cultural', 'psicologico'] as const;
export type Modulo = (typeof MODULOS)[number];

@Injectable()
export class AccesoService {
  constructor(private prisma: PrismaService) {}

  /**
   * A qué módulo de pago pertenece cada tipo de examen. Si el tipo no está
   * aquí (p. ej. un examen de práctica libre), devuelve null = sin candado.
   */
  private readonly MODULO_POR_TIPO: Record<string, Modulo> = {
    cultural: 'cultural',
    psicometrico: 'psicologico',
    personalidad: 'psicologico',
    axiologico: 'psicologico',
  };

  moduloDeExamen(tipo: string): Modulo | null {
    return this.MODULO_POR_TIPO[tipo] ?? null;
  }

  /**
   * Interruptor del candado. Mientras `CANDADO_ACCESO` no valga 'on', el
   * candado está APAGADO y todo queda abierto como hoy — así no se rompe a
   * nadie mientras aún no cobramos. Se enciende poniendo CANDADO_ACCESO=on en
   * el .env (idealmente cuando entre Mercado Pago).
   */
  candadoActivo(): boolean {
    return process.env.CANDADO_ACCESO === 'on';
  }

  /** ¿El usuario tiene acceso VIGENTE (no caducado) a este módulo? */
  async tieneAcceso(usuarioId: number, modulo: string): Promise<boolean> {
    const ahora = new Date();
    const acceso = await this.prisma.acceso.findFirst({
      where: {
        usuarioId,
        modulo,
        OR: [{ expiraEn: null }, { expiraEn: { gt: ahora } }],
      },
      select: { id: true },
    });
    return acceso !== null;
  }

  /**
   * Otorga acceso a uno o más módulos. Idempotente por (usuario, módulo, ciclo):
   * volver a otorgar el mismo sólo refresca la caducidad y el origen.
   */
  async otorgar(
    usuarioId: number,
    modulos: string[],
    ciclo: string,
    expiraEn: Date | null = null,
    origen = 'manual',
  ) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: { id: true },
    });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const invalidos = modulos.filter((m) => !MODULOS.includes(m as Modulo));
    if (invalidos.length) {
      throw new BadRequestException(
        `Módulo(s) inválido(s): ${invalidos.join(', ')}. Válidos: ${MODULOS.join(', ')}`,
      );
    }

    return Promise.all(
      modulos.map((modulo) =>
        this.prisma.acceso.upsert({
          where: { usuarioId_modulo_ciclo: { usuarioId, modulo, ciclo } },
          update: { expiraEn, origen },
          create: { usuarioId, modulo, ciclo, expiraEn, origen },
        }),
      ),
    );
  }

  /** Todos los accesos de un usuario (para el panel admin y el perfil). */
  listarDeUsuario(usuarioId: number) {
    return this.prisma.acceso.findMany({
      where: { usuarioId },
      orderBy: { otorgadoEn: 'desc' },
    });
  }

  /** Los módulos vigentes del usuario, como lista de strings. */
  async modulosVigentes(usuarioId: number): Promise<Modulo[]> {
    const ahora = new Date();
    const filas = await this.prisma.acceso.findMany({
      where: {
        usuarioId,
        OR: [{ expiraEn: null }, { expiraEn: { gt: ahora } }],
      },
      select: { modulo: true },
    });
    return [...new Set(filas.map((f) => f.modulo))] as Modulo[];
  }

  async revocar(id: number) {
    const existe = await this.prisma.acceso.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Acceso no encontrado');
    return this.prisma.acceso.delete({ where: { id } });
  }
}
