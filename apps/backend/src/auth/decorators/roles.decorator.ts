import { SetMetadata } from '@nestjs/common';

/**
 * Decorador `@Roles('admin')` (o cualquier lista) para marcar handlers
 * o controllers que requieren un rol específico del usuario.
 *
 * Debe ir junto con `JwtAuthGuard` + `RolesGuard`, en ese orden:
 * el primero rellena req.user, el segundo compara req.user.rol contra
 * lo que declara el metadata.
 */
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
