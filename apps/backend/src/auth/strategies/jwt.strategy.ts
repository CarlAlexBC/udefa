import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { Request } from 'express';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Lee el token de la cookie httpOnly `token` sin depender de cookie-parser:
 * parsea el encabezado Cookie a mano. Devuelve null si no viene, para que
 * passport pruebe el siguiente extractor (el header Authorization).
 */
function extraerDeCookie(req: Request): string | null {
  const crudo = req?.headers?.cookie;
  if (!crudo) return null;
  const match = crudo.match(/(?:^|;\s*)token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      // Primero la cookie httpOnly (modo nuevo, seguro); si no está, cae al
      // header Authorization: Bearer (modo viejo, para sesiones ya abiertas).
      jwtFromRequest: ExtractJwt.fromExtractors([
        extraerDeCookie,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET as string,
    });
  }

  async validate(payload: { sub: number; email: string; sid: string }) {
    const sesion = await this.prisma.sesion.findUnique({
      where: { token: payload.sid },
    });

    if (!sesion) {
      throw new UnauthorizedException('Sesión cerrada o expirada');
    }

    // Cargamos el usuario en cada request para tener el rol actualizado —
    // si un admin degrada a un usuario, el cambio surte efecto inmediato
    // sin necesidad de re-emitir el JWT.
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: payload.sub },
    });

    if (!usuario) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    // Cast defensivo: hasta que se corra `prisma generate` tras la migración,
    // el tipo Usuario del cliente no incluye `rol`. En runtime siempre está
    // porque la columna tiene default 'aspirante'.
    const rol =
      (usuario as { rol?: string }).rol ?? 'aspirante';

    return { id: payload.sub, email: payload.email, sid: payload.sid, rol };
  }
}