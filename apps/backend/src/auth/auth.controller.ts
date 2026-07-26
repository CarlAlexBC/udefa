import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

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
  login(@Body() datos: LoginDto) {
    return this.authService.login(datos.email, datos.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  verPerfil(@Request() req) {
    return this.authService.obtenerPerfilCompleto(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Request() req) {
    return this.authService.logout(req.user.sid);
  }
}