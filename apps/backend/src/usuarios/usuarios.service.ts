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
   * Guarda un INTENTO de compra del flujo "datos y luego pagar". NO crea cuenta:
   * la cuenta nace cuando el pago se aprueba (ver `crearCuentaDesdeCompra`).
   *
   * Ésta es la pieza que arregla de raíz el problema que tenía
   * `crearPendienteParaCompra`: como aquella creaba la cuenta al llenar el
   * formulario, dos personas con el mismo correo acababan compartiendo una sola
   * y se pisaban la contraseña. Aquí cada intento es su propia fila y nadie
   * toca lo del otro.
   *
   * Sigue rechazando si el correo YA tiene cuenta activa: ahí no hay nada que
   * comprar a ciegas, hay que iniciar sesión.
   */
  async registrarCompraPendiente(datos: {
    nombre: string;
    email: string;
    password: string;
    paquete: string;
    ciclo: string;
  }) {
    const existente = await this.prisma.usuario.findUnique({
      where: { email: datos.email },
    });
    if (existente && (existente.estado ?? 'ACTIVA') === 'ACTIVA') {
      throw new ConflictException(
        'Ese correo ya tiene una cuenta activa. Inicia sesión para comprar.',
      );
    }

    return this.prisma.compraPendiente.create({
      data: {
        nombre: datos.nombre,
        email: datos.email,
        password: await bcrypt.hash(datos.password, 10),
        paquete: datos.paquete,
        ciclo: datos.ciclo,
      },
    });
  }

  /**
   * Convierte un intento de compra en cuenta de verdad. La llama PagosService
   * cuando Mercado Pago confirma el pago.
   *
   * Idempotente por partida doble, porque el webhook reintenta:
   *   - si este intento ya se usó, devuelve la misma cuenta sin tocar nada;
   *   - si el correo ya tenía cuenta (se registró por otro lado mientras tanto,
   *     o pagó dos veces), la reutiliza en vez de duplicar.
   *
   * `recienCreada` dice si ESTA llamada fue la que creó la cuenta. Con eso
   * PagosService manda el correo de compra una sola vez.
   */
  async crearCuentaDesdeCompra(compraId: number): Promise<{
    usuarioId: number;
    email: string;
    nombre: string;
    recienCreada: boolean;
  }> {
    const compra = await this.prisma.compraPendiente.findUnique({
      where: { id: compraId },
    });
    if (!compra) {
      throw new NotFoundException(`No existe la compra pendiente ${compraId}.`);
    }

    // Ya se procesó este intento: el webhook está reintentando.
    if (compra.usadaEn && compra.usuarioId) {
      const ya = await this.prisma.usuario.findUnique({
        where: { id: compra.usuarioId },
      });
      if (ya) {
        return {
          usuarioId: ya.id,
          email: ya.email,
          nombre: ya.nombre,
          recienCreada: false,
        };
      }
    }

    const existente = await this.prisma.usuario.findUnique({
      where: { email: compra.email },
    });

    // Si ya hay cuenta con ese correo, NO se le toca la contraseña: quien pagó
    // no tiene por qué poder cambiársela a quien ya era dueño de la cuenta.
    const usuario =
      existente ??
      (await this.prisma.usuario.create({
        data: {
          nombre: compra.nombre,
          email: compra.email,
          password: compra.password,
          estado: 'ACTIVA',
        },
      }));

    if (existente) {
      await this.prisma.usuario.update({
        where: { id: usuario.id },
        data: { estado: 'ACTIVA' },
      });
    }

    await this.prisma.compraPendiente.update({
      where: { id: compra.id },
      data: { usuarioId: usuario.id, usadaEn: new Date() },
    });

    return {
      usuarioId: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
      recienCreada: !existente,
    };
  }

  /**
   * CAMINO VIEJO — se conserva por los pagos que ya iban en vuelo cuando entró
   * `CompraPendiente`: su `external_reference` lleva `usuarioId` y apunta a una
   * cuenta PENDIENTE creada por el método de abajo. Para compras nuevas ya no se
   * usa ninguno de los dos.
   *
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
   * Igual que `activar`, pero además dice si ESTA llamada fue la que pasó la
   * cuenta de PENDIENTE a ACTIVA. Sirve para mandar el correo de "compra
   * confirmada" UNA sola vez: el webhook de Mercado Pago reintenta el aviso, y
   * sin esto se mandarían correos duplicados en cada reintento.
   * Devuelve también el contacto (correo + nombre) para el correo.
   */
  async activarParaCompra(usuarioId: number): Promise<{
    usuarioId: number;
    email: string;
    nombre: string;
    recienActivada: boolean;
  }> {
    const antes = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
    });
    const recienActivada =
      ((antes as { estado?: string } | null)?.estado ?? 'ACTIVA') !== 'ACTIVA';
    const usuario = await this.prisma.usuario.update({
      where: { id: usuarioId },
      data: { estado: 'ACTIVA' } as unknown as Prisma.UsuarioUpdateInput,
    });
    return {
      usuarioId: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
      recienActivada,
    };
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
  async listarParaAdmin(
    opciones: {
      take?: number;
      skip?: number;
      search?: string;
    } = {},
  ) {
    const TAKE_DEFAULT = 50;
    const TAKE_MAX = 200;
    const take = Math.min(opciones.take ?? TAKE_DEFAULT, TAKE_MAX);
    const skip = opciones.skip ?? 0;

    const where = opciones.search
      ? {
          OR: [
            {
              email: {
                contains: opciones.search,
                mode: 'insensitive' as const,
              },
            },
            {
              nombre: {
                contains: opciones.search,
                mode: 'insensitive' as const,
              },
            },
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
      data: { rol: nuevoRol },
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
  async cambiarPlantelDeUsuario(objetivoUsuarioId: number, plantelId: number) {
    const existe = await this.prisma.usuario.findUnique({
      where: { id: objetivoUsuarioId },
      select: { id: true },
    });
    if (!existe) throw new NotFoundException('Usuario no encontrado');
    return this.asignarPlantel(objetivoUsuarioId, plantelId);
  }
}
