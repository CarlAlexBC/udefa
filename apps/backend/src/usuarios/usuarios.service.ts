import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

const ROLES_VALIDOS = ['aspirante', 'admin'] as const;
type Rol = (typeof ROLES_VALIDOS)[number];

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async registrar(datos: CrearUsuarioDto) {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { email: datos.email },
    });

    if (usuarioExistente) {
      throw new ConflictException('Ese correo ya está registrado');
    }

    // Validar que el plantel existe antes de crear el usuario
    const plantel = await this.prisma.plantel.findUnique({
      where: { id: datos.plantelId },
    });
    if (!plantel) {
      throw new NotFoundException('Plantel no encontrado');
    }

    const passwordEncriptada = await bcrypt.hash(datos.password, 10);

    const nuevoUsuario = await this.prisma.usuario.create({
      data: {
        nombre: datos.nombre,
        email: datos.email,
        password: passwordEncriptada,
        plantelId: datos.plantelId,
      },
    });

    const { password: _password, ...usuarioSinPassword } = nuevoUsuario;
    return usuarioSinPassword;
  }

  /**
   * Crea (o reutiliza) una cuenta en estado PENDIENTE para el flujo
   * "datos y luego pagar". No recibe plantel: se elige después de entrar.
   * - Si el correo ya tiene cuenta ACTIVA → pide iniciar sesión (no duplica).
   * - Si quedó una cuenta PENDIENTE de un intento anterior → la reutiliza con
   *   los datos nuevos, para que el aspirante pueda reintentar el pago.
   * La activa PagosService cuando el pago se aprueba (ver `activar`).
   */
  async crearPendienteParaCompra(datos: {
    nombre: string;
    email: string;
    password: string;
  }) {
    const existente = await this.prisma.usuario.findUnique({
      where: { email: datos.email },
    });
    const passwordEncriptada = await bcrypt.hash(datos.password, 10);

    if (existente) {
      // `estado` existe en la BD tras la migración; el cliente Prisma puede no
      // reflejarlo hasta correr `prisma generate` (mismo caso que `rol`).
      const estado = (existente as { estado?: string }).estado ?? 'ACTIVA';
      if (estado === 'ACTIVA') {
        throw new ConflictException(
          'Ese correo ya tiene una cuenta activa. Inicia sesión para comprar.',
        );
      }
      // Cuenta PENDIENTE de un intento previo: la reutilizamos con los datos nuevos.
      return this.prisma.usuario.update({
        where: { id: existente.id },
        data: {
          nombre: datos.nombre,
          password: passwordEncriptada,
          estado: 'PENDIENTE',
        } as unknown as Prisma.UsuarioUpdateInput,
      });
    }

    return this.prisma.usuario.create({
      data: {
        nombre: datos.nombre,
        email: datos.email,
        password: passwordEncriptada,
        estado: 'PENDIENTE',
      } as unknown as Prisma.UsuarioCreateInput,
    });
  }

  /**
   * Marca una cuenta como ACTIVA. La llama PagosService cuando el pago se
   * aprueba. Idempotente: activar una cuenta ya activa no hace daño.
   */
  async activar(usuarioId: number) {
    return this.prisma.usuario.update({
      where: { id: usuarioId },
      data: { estado: 'ACTIVA' } as unknown as Prisma.UsuarioUpdateInput,
    });
  }

  /**
   * Cambia (o asigna por primera vez) el plantel del usuario dado.
   * Valida que el plantel existe. No requiere que el usuario tenga plantel previo.
   */
  async asignarPlantel(usuarioId: number, plantelId: number) {
    const plantel = await this.prisma.plantel.findUnique({
      where: { id: plantelId },
    });
    if (!plantel) {
      throw new NotFoundException('Plantel no encontrado');
    }
    const actualizado = await this.prisma.usuario.update({
      where: { id: usuarioId },
      data: { plantelId },
      include: { plantel: true },
    });
    const { password: _password, ...usuarioSinPassword } = actualizado;
    return usuarioSinPassword;
  }

  /* ═══════════════════════════════════════════════════════════
     Métodos admin — protegidos con @Roles('admin') en el controller
     ═══════════════════════════════════════════════════════════ */

  /**
   * Lista paginada de usuarios con su plantel y contador de sesiones.
   * Busca opcionalmente por email o nombre (ilike). Ordenado por más recientes.
   */
  async listarParaAdmin(opciones: {
    take?: number;
    skip?: number;
    search?: string;
  } = {}) {
    const TAKE_DEFAULT = 50;
    const TAKE_MAX = 200;
    const take = Math.min(opciones.take ?? TAKE_DEFAULT, TAKE_MAX);
    const skip = opciones.skip ?? 0;

    const where = opciones.search
      ? {
          OR: [
            { email: { contains: opciones.search, mode: 'insensitive' as const } },
            { nombre: { contains: opciones.search, mode: 'insensitive' as const } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.usuario.findMany({
        where,
        take,
        skip,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          nombre: true,
          email: true,
          nivelAcceso: true,
          emailVerificado: true,
          createdAt: true,
          // rol viene del schema tras la migración; cast para el tipo
          // del cliente hasta que se corra prisma generate.
          ...({ rol: true } as Record<string, true>),
          plantel: { select: { id: true, nombre: true } },
          _count: { select: { sesionesCompletas: true, intentos: true } },
        } as never,
      }),
      this.prisma.usuario.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        take,
        skip,
        hasMore: skip + data.length < total,
      },
    };
  }

  /**
   * Cambia el rol de un usuario. Business rule: un admin no se puede
   * degradar a sí mismo — evita quedarnos sin admins por accidente. Si
   * quieres cambiar tu propio rol, otro admin debe hacerlo por ti.
   */
  async cambiarRol(
    objetivoUsuarioId: number,
    nuevoRol: string,
    admin: { id: number; rol: string },
  ) {
    if (!ROLES_VALIDOS.includes(nuevoRol as Rol)) {
      throw new BadRequestException(
        `Rol inválido. Valores permitidos: ${ROLES_VALIDOS.join(', ')}`,
      );
    }
    if (objetivoUsuarioId === admin.id && nuevoRol !== 'admin') {
      throw new BadRequestException(
        'No puedes quitarte tu propio rol admin. Pide a otro admin hacerlo.',
      );
    }
    const existe = await this.prisma.usuario.findUnique({
      where: { id: objetivoUsuarioId },
      select: { id: true },
    });
    if (!existe) throw new NotFoundException('Usuario no encontrado');

    const actualizado = await this.prisma.usuario.update({
      where: { id: objetivoUsuarioId },
      // Cast defensivo: el cliente Prisma aún puede no reflejar `rol` hasta
      // que se corra prisma generate. En runtime la columna existe.
      data: { rol: nuevoRol } as unknown as { rol: string },
      select: {
        id: true,
        nombre: true,
        email: true,
        ...({ rol: true } as Record<string, true>),
      } as never,
    });
    return actualizado;
  }

  /**
   * Cambia el plantel de otro usuario (versión admin de `asignarPlantel`).
   * Reutiliza la misma validación de existencia del plantel.
   */
  async cambiarPlantelDeUsuario(
    objetivoUsuarioId: number,
    plantelId: number,
  ) {
    const existe = await this.prisma.usuario.findUnique({
      where: { id: objetivoUsuarioId },
      select: { id: true },
    });
    if (!existe) throw new NotFoundException('Usuario no encontrado');
    return this.asignarPlantel(objetivoUsuarioId, plantelId);
  }
}