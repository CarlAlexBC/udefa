import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Extrae el usuario autenticado del request.
 * Requiere que la ruta esté protegida con @UseGuards(JwtAuthGuard) —
 * el guard valida el token y coloca el usuario en req.user antes de
 * que este decorador lo lea.
 *
 * Uso:
 *   crear(@UsuarioActual() usuario: UsuarioAutenticado) { ... }
 */
export interface UsuarioAutenticado {
  id: number;
  email: string;
  sid: string;
  rol: string;
}

export const UsuarioActual = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UsuarioAutenticado => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
