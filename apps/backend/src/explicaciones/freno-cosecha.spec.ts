import { ForbiddenException } from '@nestjs/common';
import { ExplicacionesService } from './explicaciones.service';

/**
 * Freno anti-cosecha de "Entiende el tema".
 *
 * Las explicaciones son por CAPÍTULO, así que son pocas y valiosas: sin freno,
 * una sola cuenta recorre los ids de reactivo y se lleva el trabajo completo.
 * La regla es que la explicación se gana contestando. Aquí se fija que los tres
 * caminos legítimos abran (práctica, repaso y simulacro) y que pedirla a secas
 * NO abra.
 */
describe('ExplicacionesService.porReactivo — freno anti-cosecha', () => {
  const CAPITULO = { capituloId: 9 };

  /**
   * Prisma de mentiras. `visto` dice por cuál de los tres caminos vio el
   * reactivo este usuario; 'ninguno' es el cosechador.
   */
  const montar = (
    visto: 'practica' | 'repaso' | 'simulacro' | 'ninguno',
    estadoExplicacion: 'PUBLICADO' | 'BORRADOR' = 'PUBLICADO',
  ) => {
    const hallado = { id: 1 };
    const prisma = {
      respuestaPractica: {
        findFirst: jest.fn().mockResolvedValue(visto === 'practica' ? hallado : null),
      },
      repasoReactivo: {
        findFirst: jest.fn().mockResolvedValue(visto === 'repaso' ? hallado : null),
      },
      respuestaReactivo: {
        findFirst: jest.fn().mockResolvedValue(visto === 'simulacro' ? hallado : null),
      },
      reactivo: {
        findUnique: jest.fn().mockResolvedValue({ temaBanco: CAPITULO }),
      },
      explicacionCapitulo: {
        findUnique: jest.fn().mockResolvedValue({
          contenido: 'La explicación del capítulo 9.',
          estado: estadoExplicacion,
        }),
      },
    };
    return { service: new ExplicacionesService(prisma as never), prisma };
  };

  it('la niega a quien NO ha contestado ese reactivo (el cosechador)', async () => {
    const { service, prisma } = montar('ninguno');
    await expect(service.porReactivo(77, 12345)).rejects.toThrow(ForbiddenException);
    // Y no llega siquiera a mirar la explicación.
    expect(prisma.explicacionCapitulo.findUnique).not.toHaveBeenCalled();
  });

  it('la niega con el código que el front puede distinguir', async () => {
    const { service } = montar('ninguno');
    await service.porReactivo(77, 12345).catch((e: ForbiddenException) => {
      expect((e.getResponse() as { code: string }).code).toBe('REACTIVO_NO_CONTESTADO');
    });
    expect.assertions(1);
  });

  it.each(['practica', 'repaso', 'simulacro'] as const)(
    'la entrega a quien lo contestó en %s',
    async (camino) => {
      const { service } = montar(camino);
      await expect(service.porReactivo(77, 12345)).resolves.toEqual({
        explicacion: 'La explicación del capítulo 9.',
      });
    },
  );

  it('sigue sin entregar borradores aunque sí lo haya contestado', async () => {
    const { service } = montar('practica', 'BORRADOR');
    await expect(service.porReactivo(77, 12345)).resolves.toEqual({
      explicacion: null,
    });
  });

  it('busca por el usuario de la sesión, no por el que pidan', async () => {
    const { service, prisma } = montar('practica');
    await service.porReactivo(77, 12345);
    expect(prisma.respuestaPractica.findFirst).toHaveBeenCalledWith(
      expect.objectContaining({ where: { usuarioId: 77, reactivoId: 12345 } }),
    );
  });
});
