import { ConflictException, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

/**
 * `CompraPendiente` existe para una sola cosa: que dos personas que mandan el
 * MISMO correo al formulario de compra no acaben compartiendo una cuenta.
 *
 * Antes se creaba la cuenta al llenar el formulario, así que el último en
 * mandarlo se quedaba con la contraseña de la cuenta que pagó el otro. Aquí se
 * fija que eso ya no pueda pasar, y que el webhook pueda reintentar sin
 * duplicar nada.
 */
describe('UsuariosService — compras pendientes', () => {
  /** Prisma de mentiras con una tabla en memoria. */
  const montar = (opts: {
    compras?: Record<number, any>;
    usuarioPorEmail?: Record<string, any>;
  }) => {
    const compras = opts.compras ?? {};
    const usuarios: Record<string, any> = opts.usuarioPorEmail ?? {};
    let siguienteId = 100;

    const prisma = {
      compraPendiente: {
        create: jest.fn(({ data }) => {
          const fila = { id: ++siguienteId, ...data, usuarioId: null, usadaEn: null };
          compras[fila.id] = fila;
          return Promise.resolve(fila);
        }),
        findUnique: jest.fn(({ where }) => Promise.resolve(compras[where.id] ?? null)),
        update: jest.fn(({ where, data }) => {
          Object.assign(compras[where.id], data);
          return Promise.resolve(compras[where.id]);
        }),
      },
      usuario: {
        findUnique: jest.fn(({ where }) =>
          Promise.resolve(
            where.email
              ? (usuarios[where.email] ?? null)
              : (Object.values(usuarios).find((u: any) => u.id === where.id) ?? null),
          ),
        ),
        create: jest.fn(({ data }) => {
          const fila = { id: ++siguienteId, ...data };
          usuarios[data.email] = fila;
          return Promise.resolve(fila);
        }),
        update: jest.fn(({ where, data }) => {
          const u: any = Object.values(usuarios).find((x: any) => x.id === where.id);
          Object.assign(u, data);
          return Promise.resolve(u);
        }),
      },
    };
    return { service: new UsuariosService(prisma as never), prisma, compras, usuarios };
  };

  it('EL ATAQUE: dos intentos con el mismo correo NO comparten cuenta; gana quien pagó', async () => {
    const { service, compras, usuarios } = montar({});

    // La víctima llena el formulario…
    const deLaVictima = await service.registrarCompraPendiente({
      nombre: 'Víctima', email: 'aspirante@correo.com',
      password: 'la-de-la-victima', paquete: 'cultural', ciclo: '2027',
    });
    // …y un impostor manda el MISMO correo con SU contraseña antes de que pague.
    const delImpostor = await service.registrarCompraPendiente({
      nombre: 'Impostor', email: 'aspirante@correo.com',
      password: 'la-del-impostor', paquete: 'cultural', ciclo: '2027',
    });

    // Son dos filas distintas: nadie pisó a nadie.
    expect(deLaVictima.id).not.toEqual(delImpostor.id);

    // Paga la víctima → la cuenta nace con SU contraseña.
    const cuenta = await service.crearCuentaDesdeCompra(deLaVictima.id);
    expect(cuenta.recienCreada).toBe(true);
    expect(usuarios['aspirante@correo.com'].password).toBe(
      compras[deLaVictima.id].password,
    );
    expect(usuarios['aspirante@correo.com'].password).not.toBe(
      compras[delImpostor.id].password,
    );
    expect(usuarios['aspirante@correo.com'].estado).toBe('ACTIVA');
  });

  it('el intento del impostor, si nunca paga, no crea nada', async () => {
    const { service, usuarios } = montar({});
    await service.registrarCompraPendiente({
      nombre: 'Impostor', email: 'otro@correo.com',
      password: 'x', paquete: 'cultural', ciclo: '2027',
    });
    expect(Object.keys(usuarios)).toHaveLength(0);
  });

  it('es idempotente: el webhook puede reintentar sin duplicar la cuenta', async () => {
    const { service, prisma } = montar({});
    const compra = await service.registrarCompraPendiente({
      nombre: 'Aspirante', email: 'uno@correo.com',
      password: 'x', paquete: 'cultural', ciclo: '2027',
    });

    const primera = await service.crearCuentaDesdeCompra(compra.id);
    const segunda = await service.crearCuentaDesdeCompra(compra.id);

    expect(primera.usuarioId).toBe(segunda.usuarioId);
    expect(primera.recienCreada).toBe(true);
    expect(segunda.recienCreada).toBe(false); // no manda el correo otra vez
    expect(prisma.usuario.create).toHaveBeenCalledTimes(1);
  });

  it('si el correo ya tiene cuenta, la reutiliza y NO le pisa la contraseña', async () => {
    const { service, usuarios } = montar({
      usuarioPorEmail: {
        'viejo@correo.com': {
          id: 7, nombre: 'Dueño', email: 'viejo@correo.com',
          password: 'la-del-dueño', estado: 'ACTIVA',
        },
      },
    });
    // Se salta registrarCompraPendiente (rechazaría por cuenta activa) y se
    // simula un intento que quedó de antes.
    const compra = { id: 1, nombre: 'Otro', email: 'viejo@correo.com',
      password: 'la-del-que-pago', paquete: 'cultural', ciclo: '2027',
      usuarioId: null, usadaEn: null };
    const { service: svc, usuarios: us } = montar({
      compras: { 1: compra }, usuarioPorEmail: usuarios,
    });

    const cuenta = await svc.crearCuentaDesdeCompra(1);
    expect(cuenta.usuarioId).toBe(7);
    expect(cuenta.recienCreada).toBe(false);
    expect(us['viejo@correo.com'].password).toBe('la-del-dueño');
  });

  it('rechaza registrar una compra si el correo ya tiene cuenta activa', async () => {
    const { service } = montar({
      usuarioPorEmail: {
        'activo@correo.com': { id: 3, email: 'activo@correo.com', estado: 'ACTIVA' },
      },
    });
    await expect(
      service.registrarCompraPendiente({
        nombre: 'X', email: 'activo@correo.com',
        password: 'x', paquete: 'cultural', ciclo: '2027',
      }),
    ).rejects.toThrow(ConflictException);
  });

  it('truena claro si la compra no existe', async () => {
    const { service } = montar({});
    await expect(service.crearCuentaDesdeCompra(999)).rejects.toThrow(NotFoundException);
  });
});
