import { createHmac } from 'crypto';
import { firmaValida } from './verificar-firma';

const SECRETO = 'secreto-de-prueba';

/** Arma una firma legítima, igual que la armaría Mercado Pago. */
function firmar(paymentId: string, requestId: string | undefined, ts: string) {
  const manifiesto =
    `id:${paymentId.toLowerCase()};` +
    (requestId ? `request-id:${requestId};` : '') +
    `ts:${ts};`;
  const v1 = createHmac('sha256', SECRETO).update(manifiesto).digest('hex');
  return `ts=${ts},v1=${v1}`;
}

describe('firmaValida', () => {
  it('acepta un aviso firmado de verdad', () => {
    expect(
      firmaValida({
        xSignature: firmar('123456', 'req-abc', '1700000000'),
        xRequestId: 'req-abc',
        paymentId: '123456',
        secreto: SECRETO,
      }),
    ).toBe(true);
  });

  it('acepta un aviso sin request-id (avisos viejos de MP)', () => {
    expect(
      firmaValida({
        xSignature: firmar('123456', undefined, '1700000000'),
        paymentId: '123456',
        secreto: SECRETO,
      }),
    ).toBe(true);
  });

  it('rechaza una firma inventada', () => {
    expect(
      firmaValida({
        xSignature: 'ts=1700000000,v1=' + 'a'.repeat(64),
        xRequestId: 'req-abc',
        paymentId: '123456',
        secreto: SECRETO,
      }),
    ).toBe(false);
  });

  it('rechaza si cambian el id del pago (firma de otro pago reusada)', () => {
    expect(
      firmaValida({
        xSignature: firmar('123456', 'req-abc', '1700000000'),
        xRequestId: 'req-abc',
        paymentId: '999999',
        secreto: SECRETO,
      }),
    ).toBe(false);
  });

  it('rechaza si el secreto no es el nuestro', () => {
    const ajena = createHmac('sha256', 'otro-secreto')
      .update('id:123456;request-id:req-abc;ts:1700000000;')
      .digest('hex');
    expect(
      firmaValida({
        xSignature: `ts=1700000000,v1=${ajena}`,
        xRequestId: 'req-abc',
        paymentId: '123456',
        secreto: SECRETO,
      }),
    ).toBe(false);
  });

  it('rechaza cuando no viene encabezado de firma', () => {
    expect(
      firmaValida({ paymentId: '123456', secreto: SECRETO }),
    ).toBe(false);
  });

  it('rechaza cuando el encabezado viene incompleto (sin v1)', () => {
    expect(
      firmaValida({
        xSignature: 'ts=1700000000',
        paymentId: '123456',
        secreto: SECRETO,
      }),
    ).toBe(false);
  });
});
