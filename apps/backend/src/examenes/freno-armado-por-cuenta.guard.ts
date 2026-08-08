import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

/**
 * Freno anti-vaciado POR CUENTA (Capa 3 · Movimiento 1) para los endpoints que
 * ARMAN examen — los que sirven reactivos frescos al azar y son el verdadero
 * vector de "vaciado" del banco.
 *
 * ¿Por qué por cuenta y no por IP? El freno global de `app.module` cuenta por IP:
 * un script lo evade rotando de IP, y castiga de más a un salón que comparte una
 * misma internet. La cuenta es lo que se paga y lo que hay que proteger, así que
 * el tope es por usuario.
 *
 * Ventana deslizante EN MEMORIA (igual que el throttler de NestJS, que también
 * guarda en memoria por instancia): un mismo usuario no puede armar más de
 * LIMITE exámenes dentro de VENTANA_MS. Es holgadísimo para un humano —arma un
 * examen y se tarda; nadie arma decenas por hora— y letal para un script que
 * quiere pasar por todo el banco. Cuando la plataforma corra en varias
 * instancias, esto (y el throttler global) se mudan a un almacén compartido.
 *
 * Va DESPUÉS de JwtAuthGuard (a nivel de método), así que `req.user` ya está.
 */
@Injectable()
export class FrenoArmadoPorCuentaGuard implements CanActivate {
  // Tope de armados por ventana y tamaño de la ventana. Ajustables por env; los
  // afinamos con datos reales en el Movimiento 2 (vigilar).
  private static readonly LIMITE = Number(process.env.ARMADO_LIMITE ?? 30);
  private static readonly VENTANA_MS = Number(
    process.env.ARMADO_VENTANA_MS ?? 60 * 60 * 1000, // 1 hora
  );

  // usuarioId → marcas de tiempo (ms) de sus armados dentro de la ventana.
  // static: el estado se comparte aunque NestJS instancie el guard más de una vez.
  private static readonly recientes = new Map<number, number[]>();

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const usuarioId: unknown = req?.user?.id;

    // Sin usuario (no debería pasar tras JwtAuthGuard) no frenamos por cuenta
    // aquí; el freno global por IP sigue puesto.
    if (typeof usuarioId !== 'number') return true;

    const ahora = Date.now();
    const corte = ahora - FrenoArmadoPorCuentaGuard.VENTANA_MS;
    // Nos quedamos solo con los armados que caen dentro de la ventana.
    const previas = (
      FrenoArmadoPorCuentaGuard.recientes.get(usuarioId) ?? []
    ).filter((t) => t > corte);

    if (previas.length >= FrenoArmadoPorCuentaGuard.LIMITE) {
      // Guarda la lista ya podada y corta con 429 (demasiadas peticiones).
      FrenoArmadoPorCuentaGuard.recientes.set(usuarioId, previas);
      throw new HttpException(
        'Vas demasiado rápido armando exámenes. Espera un momento e inténtalo de nuevo.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    previas.push(ahora);
    FrenoArmadoPorCuentaGuard.recientes.set(usuarioId, previas);
    return true;
  }
}
