import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

/**
 * Guard que exige que req.user.rol esté dentro de la lista declarada
 * con `@Roles(...)`. Si el handler no declara @Roles, deja pasar (útil
 * para endpoints que solo requieren JWT).
 *
 * Requiere que un guard previo (típicamente JwtAuthGuard) haya rellenado
 * req.user con al menos { rol: string }.
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const rolesRequeridos = this.reflector.getAllAndOverride<
      string[] | undefined
    >(ROLES_KEY, [context.getHandler(), context.getClass()]);

    if (!rolesRequeridos || rolesRequeridos.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<{ user?: { rol?: string } }>();
    const rolUsuario = request.user?.rol;

    if (!rolUsuario || !rolesRequeridos.includes(rolUsuario)) {
      throw new ForbiddenException(
        'No tienes permiso para acceder a este recurso.',
      );
    }

    return true;
  }
}
