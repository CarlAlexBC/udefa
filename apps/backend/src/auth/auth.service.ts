import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
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

    const sesionesActivas = await this.prisma.sesion.count({
      where: { usuarioId: usuario.id },
    });

    const LIMITE_DISPOSITIVOS = 2;

    // Los admin no tienen tope de dispositivos (decisión de Carlo).
    if (usuario.rol !== 'admin' && sesionesActivas >= LIMITE_DISPOSITIVOS) {
      throw new ForbiddenException(
        'Alcanzaste el máximo de dispositivos. Cierra sesión en otro dispositivo para continuar.',
      );
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