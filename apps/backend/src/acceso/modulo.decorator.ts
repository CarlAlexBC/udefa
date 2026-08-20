import { SetMetadata } from '@nestjs/common';
import type { Modulo as ModuloPago } from './acceso.service';

/**
 * Decorador `@Modulo('cultural')` para marcar una ruta como contenido DE PAGO.
 *
 * Es el gemelo de `@Roles(...)`: no bloquea por sí solo, sólo deja escrito a qué
 * módulo pertenece la ruta. Quien bloquea es `CandadoGuard`, que lee esta marca.
 *
 * Debe ir junto con `JwtAuthGuard` + `CandadoGuard`, en ese orden: el primero
 * rellena req.user, el segundo compara contra los accesos comprados.
 */
export const MODULO_KEY = 'modulo';
export const Modulo = (modulo: ModuloPago) => SetMetadata(MODULO_KEY, modulo);
