import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

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

    const payload = { sub: usuario.id, email: usuario.email, sid: numeroDeSerie };
    const token = await this.jwtService.signAsync(payload);

    const { password: _, ...usuarioSinPassword } = usuario;
    return {
      usuario: usuarioSinPassword,
      access_token: token,
    };
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