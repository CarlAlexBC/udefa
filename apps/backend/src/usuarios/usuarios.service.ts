import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';
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
   * Cuándo se le vio por última vez a cada aspirante.
   *
   * La plataforma no tiene "latido": nadie avisa "sigo aquí". Lo que sí deja
   * rastro con hora exacta es lo que ESCRIBE, así que la presencia se deduce de
   * sus huellas — responder en el simulacro, practicar, marcar una sección de la
   * Guía, empezar o cerrar un intento. Quien esté sólo leyendo no aparece: es el
   * límite conocido de este método, y se arregla el día que se ponga un latido.
   *
   * Sólo se mira el último día: una huella de la semana pasada no cambia el
   * color del punto y sí encarecería la consulta.
   */
  private async ultimaSenalPorUsuario(ids: number[]): Promise<Map<number, Date>> {
    if (ids.length === 0) return new Map();
    const desde = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const [practica, guia, intentos] = await Promise.all([
      this.prisma.respuestaPractica.groupBy({
        by: ['usuarioId'],
        where: { usuarioId: { in: ids }, createdAt: { gte: desde } },
        _max: { createdAt: true },
      }),
      this.prisma.seccionLeida.groupBy({
        by: ['usuarioId'],
        where: { usuarioId: { in: ids }, createdAt: { gte: desde } },
        _max: { createdAt: true },
      }),
      this.prisma.intentoExamen.findMany({
        where: { usuarioId: { in: ids }, updatedAt: { gte: desde } },
        select: { id: true, usuarioId: true, updatedAt: true },
      }),
    ]);

    const mapa = new Map<number, Date>();
    const anotar = (usuarioId: number, fecha: Date | null | undefined) => {
      if (!fecha) return;
      const actual = mapa.get(usuarioId);
      if (!actual || fecha > actual) mapa.set(usuarioId, fecha);
    };

    practica.forEach((p) => anotar(p.usuarioId, p._max.createdAt));
    guia.forEach((g) => anotar(g.usuarioId, g._max.createdAt));
    intentos.forEach((i) => anotar(i.usuarioId, i.updatedAt));

    // A media prueba nadie toca IntentoExamen: la huella viva son sus respuestas.
    // Se consultan sólo las de los intentos recientes, que son un puñado.
    if (intentos.length > 0) {
      const porIntento = await this.prisma.respuestaReactivo.groupBy({
        by: ['intentoExamenId'],
        where: { intentoExamenId: { in: intentos.map((i) => i.id) } },
        _max: { createdAt: true },
      });
      const duenoDelIntento = new Map(intentos.map((i) => [i.id, i.usuarioId]));
      porIntento.forEach((r) => {
        const usuarioId = duenoDelIntento.get(r.intentoExamenId);
        if (usuarioId) anotar(usuarioId, r._max.createdAt);
      });
    }

    return mapa;
  }

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
    // Barrer aquí, y no sólo al repartir una prueba nueva. La limpieza vivía
    // enganchada a la creación: si no se creaba otra cuenta de prueba, las
    // vencidas se quedaban en la lista para siempre. Esta es la pantalla donde
    // se notan, así que es el momento honesto de barrerlas.
    //
    // Va sin `await` y con `catch`: si la limpieza falla, la lista de usuarios
    // NO se cae. Cuando no hay nada que borrar cuesta una consulta que vuelve
    // vacía y se corta ahí. El día de gracia NO se toca: sigue en 24 h.
    void this.limpiarCuentasDePruebaCaducadas().catch(() => undefined);

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

    // Punto verde: a cada usuario de ESTA página se le cuelga su última huella.
    // El `select` de arriba lleva un `as never` (por el campo rol), así que Prisma
    // devuelve las filas sin tipo; aquí se les nombra lo mínimo para poder usarlas.
    const filas = data as unknown as Array<{ id: number }>;
    const senales = await this.ultimaSenalPorUsuario(filas.map((u) => u.id));

    return {
      data: filas.map((u) => ({
        ...u,
        ultimaSenal: senales.get(u.id)?.toISOString() ?? null,
      })),
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

  /* ═══════════════════════════════════════════════════════════
     Cuentas de PRUEBA — el gancho comercial.

     Una cuenta que sirve unos minutos para que alguien conozca la plataforma por
     dentro. No es una versión recortada: ve lo mismo que un cliente, pero por un
     rato.

     Se apoya entera en lo que ya existía: el candado YA comprueba `expiraEn` en
     cada petición (AccesoService.tieneAcceso), así que "temporal" no necesitó
     lógica nueva — sólo una caducidad corta en vez de la de fin de convocatoria.

     Qué pasa cuando se acaba, para que no sorprenda: deja de pasar el candado en
     la SIGUIENTE petición que lo cruce. Si estaba a media práctica, termina la
     que ya tenía cargada; lo que no puede es empezar otra. Se apaga como una
     vela, no como un portazo.
     ═══════════════════════════════════════════════════════════ */

  /**
   * Crea una cuenta temporal y le da acceso por N minutos.
   *
   * El correo es inventado (@prueba.local) a propósito: nadie tiene que dar el
   * suyo para probar, y así no choca con el de un cliente real. La contraseña se
   * genera legible para poder dictarla por WhatsApp, sin letras que se confundan
   * al hablar (nada de l/1 ni O/0). Las dos se devuelven UNA sola vez: en la base
   * la contraseña vive cifrada, como la de cualquiera.
   */
  /**
   * Alta de una cuenta desde el panel de admin.
   *
   * Por qué existe: hasta hoy la única forma de que alguien tuviera cuenta era
   * que se registrara él mismo o que pagara. Carlo necesita poder dar de alta a
   * mano — su propia cuenta de aspirante separada de la de admin, un colaborador,
   * o alguien que pagó por fuera.
   *
   * La contraseña la genera el sistema y se devuelve UNA vez, igual que en las
   * cuentas de prueba: así nadie tiene que teclear la contraseña de otro, y la
   * persona la cambia cuando quiera desde "olvidé mi contraseña".
   *
   * No otorga accesos. Dar acceso es otra decisión y ya tiene su propia pantalla
   * ("Gestionar" en cada renglón): mezclarlas haría que dar de alta a alguien
   * regalara producto sin querer.
   */
  async crearCuentaDesdePanel(datos: {
    nombre: string;
    email: string;
    plantelId?: number | null;
    rol?: string;
  }) {
    const nombre = datos.nombre?.trim();
    const email = datos.email?.trim().toLowerCase();

    if (!nombre) throw new BadRequestException('Falta el nombre.');
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      throw new BadRequestException('El correo no es válido.');
    }
    const rol = datos.rol === 'admin' ? 'admin' : 'aspirante';

    const yaExiste = await this.prisma.usuario.findFirst({
      where: { email: { equals: email, mode: 'insensitive' } },
      select: { id: true },
    });
    if (yaExiste) {
      throw new BadRequestException('Ya hay una cuenta con ese correo.');
    }

    if (datos.plantelId) {
      const plantel = await this.prisma.plantel.findUnique({
        where: { id: datos.plantelId },
      });
      if (!plantel) throw new NotFoundException('Plantel no encontrado');
    }

    // Sin letras ni números que se confundan al dictarla por teléfono.
    const SIN_CONFUSIONES = 'abcdefghjkmnpqrstuvwxyz23456789';
    const passwordEnClaro =
      'monote-' +
      Array.from(
        { length: 8 },
        () => SIN_CONFUSIONES[randomInt(SIN_CONFUSIONES.length)],
      ).join('');

    const usuario = await this.prisma.usuario.create({
      data: {
        nombre,
        email,
        password: await bcrypt.hash(passwordEnClaro, 10),
        plantelId: datos.plantelId ?? null,
        estado: 'ACTIVA',
        ...({ rol } as Record<string, string>),
      } as never,
    });

    return {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol,
      /** Se muestra UNA vez en el panel. No se guarda en claro en ningún lado. */
      password: passwordEnClaro,
    };
  }

  async crearCuentaDePrueba(datos: {
    plantelId: number;
    modulos: string[];
    minutos: number;
    ciclo: string;
    nombre?: string;
  }) {
    const plantel = await this.prisma.plantel.findUnique({
      where: { id: datos.plantelId },
    });
    if (!plantel) throw new NotFoundException('Plantel no encontrado');
    if (!datos.modulos.length) {
      throw new BadRequestException('Elige al menos un módulo para la prueba.');
    }

    // Aprovecha el viaje para barrer las de antes (ver
    // limpiarCuentasDePruebaCaducadas). Si la limpieza fallara, NO se cae la
    // creación: que no se pueda barrer no es motivo para no poder repartir.
    const limpieza = await this.limpiarCuentasDePruebaCaducadas().catch(() => ({
      borradas: 0,
    }));

    const SIN_CONFUSIONES = 'abcdefghjkmnpqrstuvwxyz23456789';
    const sufijo = Array.from(
      { length: 5 },
      () => SIN_CONFUSIONES[randomInt(SIN_CONFUSIONES.length)],
    ).join('');

    const email = 'prueba-' + sufijo + '@prueba.local';
    const passwordEnClaro = 'monote-' + randomInt(1000, 10000);
    const expiraEn = new Date(Date.now() + datos.minutos * 60_000);

    const usuario = await this.prisma.usuario.create({
      data: {
        nombre: datos.nombre?.trim() || 'Prueba ' + sufijo,
        email,
        password: await bcrypt.hash(passwordEnClaro, 10),
        plantelId: datos.plantelId,
        estado: 'ACTIVA',
      },
    });

    await this.prisma.acceso.createMany({
      data: datos.modulos.map((modulo) => ({
        usuarioId: usuario.id,
        modulo,
        ciclo: datos.ciclo,
        expiraEn,
        origen: 'prueba',
      })),
    });

    return {
      id: usuario.id,
      nombre: usuario.nombre,
      email,
      password: passwordEnClaro,
      expiraEn,
      minutos: datos.minutos,
      modulos: datos.modulos,
      /** Cuántas cuentas de prueba viejas se barrieron de paso. */
      caducadasBorradas: limpieza.borradas,
    };
  }

  /**
   * Borra una cuenta y TODO lo que cuelga de ella.
   *
   * Un aspirante no es una fila: arrastra intentos, respuestas de simulacro y de
   * práctica, cola de repaso, racha, secciones leídas, accesos y sesiones. Si se
   * borrara sólo la fila, la base lo impediría por llave foránea. Por eso va en
   * orden y dentro de una transacción: o se va todo, o no se va nada.
   *
   * No se puede borrar uno a sí mismo. Es la equivocación más fácil de cometer y
   * la más cara: deja el panel sin quien lo administre.
   */
  async eliminar(usuarioId: number, solicitanteId: number) {
    if (usuarioId === solicitanteId) {
      throw new BadRequestException('No puedes borrar tu propia cuenta.');
    }
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: { id: true, email: true },
    });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const intentos = await this.prisma.intentoExamen.findMany({
      where: { usuarioId },
      select: { id: true },
    });
    const idsIntentos = intentos.map((i) => i.id);

    await this.prisma.$transaction([
      this.prisma.respuestaReactivo.deleteMany({
        where: { intentoExamenId: { in: idsIntentos } },
      }),
      this.prisma.intentoExamen.deleteMany({ where: { usuarioId } }),
      this.prisma.sesionExamenCompleto.deleteMany({ where: { usuarioId } }),
      this.prisma.repasoReactivo.deleteMany({ where: { usuarioId } }),
      this.prisma.respuestaPractica.deleteMany({ where: { usuarioId } }),
      this.prisma.actividadDiaria.deleteMany({ where: { usuarioId } }),
      this.prisma.seccionLeida.deleteMany({ where: { usuarioId } }),
      this.prisma.acceso.deleteMany({ where: { usuarioId } }),
      this.prisma.sesion.deleteMany({ where: { usuarioId } }),
      this.prisma.usuario.delete({ where: { id: usuarioId } }),
    ]);

    return { borrado: usuario.email, intentosBorrados: idsIntentos.length };
  }

  /**
   * Barre las cuentas de prueba que ya vencieron.
   *
   * CUÁNDO CORRE: en dos momentos, los dos por visita y ninguno por
   * temporizador —así no hace falta añadirle un programador de tareas al
   * proyecto ni gasta nada cuando nadie está usando el panel—:
   *   1. al crear una cuenta de prueba nueva: repartes una, se van las muertas;
   *   2. al abrir la lista de Usuarios del panel, que es donde se notan. Sin
   *      esto, quien no volviera a crear pruebas se quedaba con las vencidas
   *      en la lista para siempre.
   *
   * POR QUÉ ESPERA UN DÍA: borrar en cuanto vence destruiría la evidencia de si
   * la persona llegó a USAR la prueba (sus intentos y respuestas se van con la
   * cuenta). Con un día de gracia queda tiempo de mirar quién entró y qué hizo
   * antes de que desaparezca.
   *
   * A QUIÉN NO TOCA, y conviene que sea estricto porque esto borra solo:
   *   - a nadie que no tenga correo @prueba.local;
   *   - a nadie sin un acceso de origen 'prueba';
   *   - a quien tenga algún acceso todavía vigente (por si se le amplió a mano);
   *   - a ningún admin, aunque cumpliera todo lo anterior.
   */
  async limpiarCuentasDePruebaCaducadas(): Promise<{ borradas: number }> {
    const GRACIA_HORAS = 24;
    const corte = new Date(Date.now() - GRACIA_HORAS * 60 * 60 * 1000);

    const candidatas = await this.prisma.usuario.findMany({
      where: {
        email: { endsWith: '@prueba.local' },
        rol: { not: 'admin' },
        accesos: { some: { origen: 'prueba' } },
        // Ni un acceso que siga vivo o dentro del día de gracia.
        NOT: { accesos: { some: { OR: [{ expiraEn: null }, { expiraEn: { gt: corte } }] } } },
      },
      select: { id: true },
    });
    if (!candidatas.length) return { borradas: 0 };

    const ids = candidatas.map((u) => u.id);
    const intentos = await this.prisma.intentoExamen.findMany({
      where: { usuarioId: { in: ids } },
      select: { id: true },
    });

    await this.prisma.$transaction([
      this.prisma.respuestaReactivo.deleteMany({
        where: { intentoExamenId: { in: intentos.map((i) => i.id) } },
      }),
      this.prisma.intentoExamen.deleteMany({ where: { usuarioId: { in: ids } } }),
      this.prisma.sesionExamenCompleto.deleteMany({ where: { usuarioId: { in: ids } } }),
      this.prisma.repasoReactivo.deleteMany({ where: { usuarioId: { in: ids } } }),
      this.prisma.respuestaPractica.deleteMany({ where: { usuarioId: { in: ids } } }),
      this.prisma.actividadDiaria.deleteMany({ where: { usuarioId: { in: ids } } }),
      this.prisma.seccionLeida.deleteMany({ where: { usuarioId: { in: ids } } }),
      this.prisma.acceso.deleteMany({ where: { usuarioId: { in: ids } } }),
      this.prisma.sesion.deleteMany({ where: { usuarioId: { in: ids } } }),
      this.prisma.usuario.deleteMany({ where: { id: { in: ids } } }),
    ]);

    return { borradas: ids.length };
  }
}
