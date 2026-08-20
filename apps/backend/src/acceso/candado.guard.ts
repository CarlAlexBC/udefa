import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccesoService } from './acceso.service';
import { MODULO_KEY } from './modulo.decorator';
import type { Modulo } from './acceso.service';

/**
 * Muro de pago para las rutas que SIRVEN contenido comprado.
 *
 * Hasta hoy el candado vivía en un solo lugar —`IntentosService.crear`, o sea el
 * simulador— y el resto del contenido de pago (práctica, repaso, explicaciones)
 * quedaba abierto a cualquiera con sesión. Este guard es ese mismo cerrojo,
 * convertido en pieza reutilizable para poder ponerlo en todas las puertas.
 *
 * Funciona igual que `RolesGuard`: si el handler no declara `@Modulo(...)`, deja
 * pasar. Y si el candado general está APAGADO (`CANDADO_ACCESO` != 'on', que es
 * el default), tampoco bloquea nada — no rompe a nadie mientras aún no cobramos.
 *
 * Va DESPUÉS de JwtAuthGuard, así que `req.user` ya está lleno.
 */
@Injectable()
export class CandadoGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private acceso: AccesoService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const modulo = this.reflector.getAllAndOverride<Modulo | undefined>(
      MODULO_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Ruta sin marcar como de pago, o candado apagado: no hay nada que cerrar.
    if (!modulo || !this.acceso.candadoActivo()) return true;

    const request = context
      .switchToHttp()
      .getRequest<{ user?: { id?: number } }>();
    const usuarioId = request.user?.id;

    // Sin usuario no deberíamos llegar aquí (JwtAuthGuard va antes). Si pasara,
    // cerramos: más vale negar de más que regalar contenido de pago.
    if (typeof usuarioId !== 'number') {
      throw new ForbiddenException({
        message: 'Necesitas iniciar sesión para ver este contenido.',
        code: 'SIN_ACCESO',
        modulo,
      });
    }

    if (!(await this.acceso.tieneAcceso(usuarioId, modulo))) {
      // Mismo `code` que usa el simulador, para que el front ya sepa mandarlo
      // a /precios sin cambiarle nada.
      throw new ForbiddenException({
        message: 'Necesitas comprar este módulo para ver este contenido. Ve a /precios.',
        code: 'SIN_ACCESO',
        modulo,
      });
    }

    return true;
  }
}
