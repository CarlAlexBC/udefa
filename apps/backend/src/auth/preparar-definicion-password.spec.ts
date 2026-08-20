import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

/**
 * El paso de "define tu contraseña" que corre cuando un pago activa una cuenta
 * del flujo de invitado.
 *
 * Se prueba aquí porque es lo único que impide que la cuenta pagada se la quede
 * quien llenó el formulario en vez de quien es dueño del correo. Si la
 * contraseña vieja sobreviviera, el arreglo no serviría de nada.
 */
describe('AuthService.prepararDefinicionDePassword', () => {
  const PASSWORD_DEL_FORMULARIO = 'LaQueTecleoElImpostor123';

  const montar = () => {
    const update = jest.fn().mockResolvedValue({});
    const deleteMany = jest.fn().mockResolvedValue({ count: 2 });
    const prisma = { usuario: { update }, sesion: { deleteMany } };
    const jwt = { signAsync: jest.fn().mockResolvedValue('token-firmado') };
    const service = new AuthService(
      prisma as never,
      jwt as never,
      { enviarRecuperacion: jest.fn() } as never,
    );
    return { service, update, deleteMany, jwt };
  };

  it('anula la contraseña: la del formulario deja de servir', async () => {
    const { service, update } = montar();
    await service.prepararDefinicionDePassword(77);

    const guardada = update.mock.calls[0][0].data.password as string;
    // Quedó un hash de verdad (no texto plano, no vacío)...
    expect(guardada).toMatch(/^\$2[aby]\$/);
    // ...y NO corresponde a la contraseña que se tecleó al comprar.
    await expect(
      bcrypt.compare(PASSWORD_DEL_FORMULARIO, guardada),
    ).resolves.toBe(false);
    expect(update).toHaveBeenCalledWith(
      expect.objectContaining({ where: { id: 77 } }),
    );
  });

  it('cierra las sesiones abiertas de esa cuenta', async () => {
    const { service, deleteMany } = montar();
    await service.prepararDefinicionDePassword(77);
    expect(deleteMany).toHaveBeenCalledWith({ where: { usuarioId: 77 } });
  });

  it('firma un token de reset que dura 7 días y arma el enlace', async () => {
    const { service, jwt } = montar();
    const link = await service.prepararDefinicionDePassword(77);

    expect(jwt.signAsync).toHaveBeenCalledWith(
      { sub: 77, purpose: 'reset-password' },
      { expiresIn: '7d' },
    );
    expect(link).toContain('/restablecer?token=token-firmado');
  });

  it('nunca genera dos veces la misma contraseña imposible', async () => {
    const a = montar();
    const b = montar();
    await a.service.prepararDefinicionDePassword(1);
    await b.service.prepararDefinicionDePassword(1);
    expect(a.update.mock.calls[0][0].data.password).not.toEqual(
      b.update.mock.calls[0][0].data.password,
    );
  });
});
