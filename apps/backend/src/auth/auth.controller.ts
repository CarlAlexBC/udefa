import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { OlvidePasswordDto } from './dto/olvide-password.dto';
import { RestablecerPasswordDto } from './dto/restablecer-password.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

// Nombre de la cookie de sesión. El middleware de Next lee este mismo nombre.
const TOKEN_COOKIE = 'token';
// 7 días, en milisegundos — igual que la vigencia del JWT.
const TOKEN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * Opciones de la cookie del token.
 *
 * - httpOnly: el JavaScript del navegador NO puede leerla → aunque hubiera un
 *   ataque XSS, no pueden robar el token.
 * - secure: sólo viaja por HTTPS. Se activa SÓLO en producción, porque en
 *   desarrollo (http://localhost) el navegador descartaría una cookie Secure.
 * - sameSite 'lax': la manda en la navegación normal del propio sitio; corta
 *   el envío automático desde sitios de terceros (defensa CSRF básica).
 */
function opcionesCookie() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: TOKEN_MAX_AGE_MS,
    path: '/',
  };
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Freno estricto contra fuerza bruta: 10 intentos de login por minuto desde
  // una misma IP (el freno general de la app es 200/min; éste lo pisa sólo aquí).
  // 10 corta en seco un ataque de contraseñas sin castigar a varios aspirantes
  // legítimos que compartan internet (cibercafé, escuela). Ajustable si hiciera
  // falta. ttl en ms.
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  @Post('login')
  async login(
    @Body() datos: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const resultado = await this.authService.login(datos.email, datos.password);
    // El backend pone la cookie httpOnly. Seguimos devolviendo access_token en
    // el cuerpo por compatibilidad con sesiones/versiones que aún lo usan.
    res.cookie(TOKEN_COOKIE, resultado.access_token, opcionesCookie());
    return resultado;
  }

  // "Olvidé mi contraseña": manda el enlace de recuperación. Público, pero con
  // freno estricto (5/min por IP) para que nadie lo use para tantear correos ni
  // para bombardear a alguien con correos.
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Post('olvide-password')
  olvidePassword(@Body() datos: OlvidePasswordDto) {
    return this.authService.solicitarReset(datos.email);
  }

  // Paso 2: recibe el token del correo + la nueva contraseña.
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Post('restablecer-password')
  restablecerPassword(@Body() datos: RestablecerPasswordDto) {
    return this.authService.restablecerPassword(
      datos.token,
      datos.nuevaPassword,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  verPerfil(@Request() req) {
    return this.authService.obtenerPerfilCompleto(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Request() req, @Res({ passthrough: true }) res: Response) {
    const resultado = await this.authService.logout(req.user.sid);
    // Borra la cookie httpOnly (el JavaScript no puede hacerlo por sí solo).
    res.clearCookie(TOKEN_COOKIE, { path: '/' });
    return resultado;
  }
}
