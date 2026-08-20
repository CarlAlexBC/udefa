import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mail: MailService,
  ) {}

  // A dónde apunta el link del correo (el frontend). Reutiliza FRONTEND_URL,
  // la misma variable que ya usa el flujo de pagos.
  private readonly FRONTEND_URL =
    process.env.FRONTEND_URL ?? 'http://localhost:3000';

  async login(email: string, password: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    const passwordCorrecta = await bcrypt.compare(password, usuario.password);

    if (!passwordCorrecta) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    // Cuenta creada por "datos y luego pagar" cuyo pago nunca se aprobó. Si no
    // se corta AQUÍ, esa puerta es registro gratis: `/pagos/registrar-y-pagar`
    // es público y crea la cuenta ANTES de cobrar, así que cualquiera podía
    // llenar el formulario, ignorar el checkout y entrar igual.
    // El cast defensivo es el mismo de usuarios.service: la columna existe en la
    // base y su default es ACTIVA, así que ninguna cuenta previa se ve afectada
    // aunque el cliente de Prisma aún no refleje el campo.
    const estado = (usuario as { estado?: string }).estado ?? 'ACTIVA';
    if (estado === 'PENDIENTE') {
      throw new UnauthorizedException({
        message:
          'Tu cuenta está esperando el pago. En cuanto se confirme la compra se activa sola y podrás entrar.',
        code: 'CUENTA_PENDIENTE',
      });
    }

    // Antes de contar dispositivos, limpiamos las sesiones MUERTAS de este
    // usuario: las que ya rebasaron la vigencia del pase (7 días) tienen el JWT
    // caducado —jwt.strategy rechaza tokens expirados—, así que su fila ya no
    // sirve para entrar y sólo estorba. Sin esto se acumulan y pueden bloquear
    // un login legítimo con un falso "máximo de dispositivos". Podar por edad no
    // necesita migración: la tabla Sesion ya guarda createdAt.
    const VIGENCIA_SESION_MS = 7 * 24 * 60 * 60 * 1000; // debe coincidir con expiresIn '7d' (auth.module) y el maxAge de la cookie (auth.controller)
    await this.prisma.sesion.deleteMany({
      where: {
        usuarioId: usuario.id,
        createdAt: { lt: new Date(Date.now() - VIGENCIA_SESION_MS) },
      },
    });

    const sesionesActivas = await this.prisma.sesion.count({
      where: { usuarioId: usuario.id },
    });

    const LIMITE_DISPOSITIVOS = 2;

    // Tope de dispositivos simultáneos (los admin están exentos, decisión de
    // Carlo). En vez de BLOQUEAR al usuario —que puede dejar fuera al dueño
    // legítimo si no alcanza a cerrar sesión en el aparato viejo— hacemos
    // "evicción": cerramos la(s) sesión(es) MÁS VIEJA(S) para hacerle lugar a la
    // nueva. Así siempre entra quien tiene la contraseña, nunca hay más de
    // LIMITE_DISPOSITIVOS a la vez, y compartir la cuenta se vuelve molesto: en
    // un salón los aparatos se van cerrando entre ellos sin parar.
    if (usuario.rol !== 'admin' && sesionesActivas >= LIMITE_DISPOSITIVOS) {
      // Cuántas sobran para que, al crear la nueva, queden exactamente LIMITE.
      const aCerrar = sesionesActivas - LIMITE_DISPOSITIVOS + 1;
      const masViejas = await this.prisma.sesion.findMany({
        where: { usuarioId: usuario.id },
        orderBy: { createdAt: 'asc' },
        take: aCerrar,
        select: { id: true },
      });
      await this.prisma.sesion.deleteMany({
        where: { id: { in: masViejas.map((s) => s.id) } },
      });
    }

    const numeroDeSerie = randomUUID();

    await this.prisma.sesion.create({
      data: {
        usuarioId: usuario.id,
        token: numeroDeSerie,
      },
    });

    const payload = {
      sub: usuario.id,
      email: usuario.email,
      sid: numeroDeSerie,
    };
    const token = await this.jwtService.signAsync(payload);

    const { password: _, ...usuarioSinPassword } = usuario;
    return {
      usuario: usuarioSinPassword,
      access_token: token,
    };
  }

  /**
   * Paso 1 de "olvidé mi contraseña": si el correo existe, le manda un enlace
   * con un token de un solo propósito (reset-password) que vence en 1 hora.
   *
   * SIEMPRE responde el mismo mensaje, exista o no el correo: así no se puede
   * usar este endpoint para averiguar qué correos tienen cuenta.
   */
  async solicitarReset(email: string) {
    const usuario = await this.prisma.usuario.findUnique({ where: { email } });

    if (usuario) {
      const token = await this.jwtService.signAsync(
        { sub: usuario.id, purpose: 'reset-password' },
        { expiresIn: '1h' },
      );
      const link = `${this.FRONTEND_URL}/restablecer?token=${encodeURIComponent(token)}`;
      await this.mail.enviarRecuperacion(usuario.email, link);
    }

    return {
      mensaje:
        'Si el correo está registrado, te enviamos un enlace para restablecer tu contraseña.',
    };
  }

  /**
   * Paso 2: valida el token del correo y cambia la contraseña.
   * Al cambiarla, CIERRA todas las sesiones abiertas del usuario — si alguien
   * más tenía la cuenta, se cae de todos lados.
   */
  async restablecerPassword(token: string, nuevaPassword: string) {
    let payload: { sub: number; purpose?: string };
    try {
      payload = await this.jwtService.verifyAsync(token);
    } catch {
      throw new UnauthorizedException(
        'El enlace no es válido o ya venció. Pide uno nuevo.',
      );
    }

    // Que sea un token de reset, no un token de sesión reutilizado.
    if (payload.purpose !== 'reset-password') {
      throw new UnauthorizedException('El enlace no es válido.');
    }

    const passwordEncriptada = await bcrypt.hash(nuevaPassword, 10);
    await this.prisma.usuario.update({
      where: { id: payload.sub },
      data: { password: passwordEncriptada },
    });

    // Cierra todas las sesiones abiertas de ese usuario.
    await this.prisma.sesion.deleteMany({ where: { usuarioId: payload.sub } });

    return { mensaje: 'Tu contraseña se actualizó. Ya puedes iniciar sesión.' };
  }

  async logout(sid: string) {
    await this.prisma.sesion.deleteMany({
      where: { token: sid },
    });
    return { mensaje: 'Sesión cerrada correctamente' };
  }

  /**
   * Devuelve el perfil del usuario autenticado incluyendo su plantel.
   * Sin password. Si plantel es null (usuario legacy sin plantel asignado),
   * el frontend muestra el flujo de "elige tu plantel".
   */
  async obtenerPerfilCompleto(usuarioId: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      include: { plantel: true },
    });
    if (!usuario) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
    const { password: _password, ...usuarioSinPassword } = usuario;
    return usuarioSinPassword;
  }
}
