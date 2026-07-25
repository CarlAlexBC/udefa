import { NotFoundException } from '@nestjs/common';
import { RepasosService } from './repasos.service';

/**
 * Movimientos de la caja de Leitner y la cola del día.
 *
 * Se fijan aquí porque son el corazón del repaso: si un acierto no sube de caja
 * o un fallo no vuelve a la 1, el aspirante repasa lo que no debe. Y porque la
 * regla dura del banco es que la respuesta correcta NUNCA viaja al cliente en la
 * cola — sólo al contestar.
 */
describe('RepasosService', () => {
  /** Días de intervalo por caja, para calcular el próximo repaso esperado. */
  const INTERVALOS = [1, 3, 7, 21, 60];

  /** Días (redondeados) entre hoy y una fecha futura. */
  const diasHasta = (fecha: Date) =>
    Math.round((fecha.getTime() - Date.now()) / 86_400_000);

  /** Monta el service con un Prisma mockeado a la medida del caso. */
  const montar = (opts: {
    repaso?: { caja: number; rachaAciertos: number } | null;
    reactivo?: {
      respuestaCorrecta: string | null;
      explicacion?: string | null;
      referencia?: string | null;
    } | null;
  }) => {
    const update = jest.fn().mockResolvedValue({});
    const prisma = {
      repasoReactivo: {
        findUnique: jest
          .fn()
          .mockResolvedValue(opts.repaso === undefined ? null : opts.repaso),
        update,
      },
      reactivo: {
        findUnique: jest
          .fn()
          .mockResolvedValue(opts.reactivo === undefined ? null : opts.reactivo),
      },
    };
    return { svc: new RepasosService(prisma as any), prisma, update };
  };

  describe('responder', () => {
    it('acierta: sube una caja, suma racha y reprograma según la caja nueva', async () => {
      const { svc, update } = montar({
        repaso: { caja: 2, rachaAciertos: 1 },
        reactivo: { respuestaCorrecta: 'París', explicacion: 'cap. 3', referencia: 'Pág. 40' },
      });

      const out = await svc.responder(7, 55, 'París');

      expect(out.esCorrecta).toBe(true);
      expect(out.cajaAnterior).toBe(2);
      expect(out.caja).toBe(3);
      // La cita del libro se revela al contestar.
      expect(out.explicacion).toBe('cap. 3');
      expect(out.referencia).toBe('Pág. 40');

      const data = update.mock.calls[0][0].data;
      expect(data.caja).toBe(3);
      expect(data.rachaAciertos).toBe(2);
      expect(diasHasta(data.proximoRepaso)).toBe(INTERVALOS[2]); // 7 días
    });

    it('falla: cae a la caja 1, reinicia la racha y vuelve mañana', async () => {
      const { svc, update } = montar({
        repaso: { caja: 4, rachaAciertos: 3 },
        reactivo: { respuestaCorrecta: 'París' },
      });

      const out = await svc.responder(7, 55, 'Madrid');

      expect(out.esCorrecta).toBe(false);
      expect(out.cajaAnterior).toBe(4);
      expect(out.caja).toBe(1);

      const data = update.mock.calls[0][0].data;
      expect(data.caja).toBe(1);
      expect(data.rachaAciertos).toBe(0);
      expect(diasHasta(data.proximoRepaso)).toBe(INTERVALOS[0]); // mañana
    });

    it('topa en la última caja: acertar en la 5 no la manda a la 6', async () => {
      const { svc, update } = montar({
        repaso: { caja: 5, rachaAciertos: 9 },
        reactivo: { respuestaCorrecta: 'París' },
      });

      const out = await svc.responder(7, 55, 'París');

      expect(out.caja).toBe(5);
      const data = update.mock.calls[0][0].data;
      expect(data.caja).toBe(5);
      expect(data.rachaAciertos).toBe(10);
      expect(diasHasta(data.proximoRepaso)).toBe(INTERVALOS[4]); // 60 días
    });

    it('404 si el reactivo no está en la cola del aspirante', async () => {
      const { svc, update } = montar({ repaso: null });

      await expect(svc.responder(7, 999, 'lo que sea')).rejects.toBeInstanceOf(
        NotFoundException,
      );
      // Contestar no crea filas ni actualiza nada.
      expect(update).not.toHaveBeenCalled();
    });
  });

  describe('pendientes', () => {
    it('pide sólo los vencidos y no filtra la respuesta correcta al cliente', async () => {
      const findMany = jest.fn().mockResolvedValue([
        {
          caja: 2,
          reactivo: {
            id: 55,
            enunciado: '¿Capital de Francia?',
            opciones: ['París', 'Madrid', 'Roma', 'Berlín'],
            tema: 'geografía',
          },
        },
      ]);
      const prisma = { repasoReactivo: { findMany } };
      const svc = new RepasosService(prisma as any);

      const out = await svc.pendientes(7);

      // Sólo los vencidos: where con proximoRepaso <= ahora.
      const where = findMany.mock.calls[0][0].where;
      expect(where.usuarioId).toBe(7);
      expect(where.proximoRepaso.lte).toBeInstanceOf(Date);

      expect(out).toHaveLength(1);
      const item = out[0];
      expect(item).toMatchObject({ reactivoId: 55, caja: 2, tema: 'geografía' });
      // La respuesta no viaja en la cola.
      expect(item).not.toHaveProperty('respuestaCorrecta');
      expect(item).not.toHaveProperty('explicacion');
      // Las opciones son las mismas (aunque barajadas).
      expect([...item.opciones].sort()).toEqual(
        ['Berlín', 'Madrid', 'París', 'Roma'].sort(),
      );
    });
  });
});
