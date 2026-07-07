import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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

    return { id: payload.sub, email: payload.email, sid: payload.sid };
  }
}