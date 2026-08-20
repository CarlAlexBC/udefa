import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Verifica que un aviso del webhook venga DE VERDAD de Mercado Pago.
 *
 * MP firma cada aviso con un secreto que sólo él y nosotros conocemos. Manda dos
 * encabezados:
 *   x-signature:  ts=1700000000,v1=<firma en hexadecimal>
 *   x-request-id: <id de la petición>
 *
 * Con eso se arma un "manifiesto" en un formato fijo que MP publica:
 *   id:<id del pago>;request-id:<x-request-id>;ts:<ts>;
 * se le saca un HMAC-SHA256 con el secreto, y el resultado debe dar igual que
 * el `v1` que vino en el encabezado. Si no coincide, el aviso es falso.
 *
 * Si algún dato no viene, su pedazo se OMITE del manifiesto (así lo especifica
 * MP; pasa con avisos viejos que no traen request-id).
 */
export function firmaValida(datos: {
  xSignature?: string;
  xRequestId?: string;
  paymentId: string;
  secreto: string;
}): boolean {
  const { xSignature, xRequestId, paymentId, secreto } = datos;
  if (!xSignature || !secreto || !paymentId) return false;

  // "ts=...,v1=..." → { ts, v1 }. Se parte por coma y luego por el PRIMER '='
  // (la firma en sí no trae '=', pero no cuesta nada ser estrictos).
  const partes = new Map<string, string>();
  for (const trozo of xSignature.split(',')) {
    const i = trozo.indexOf('=');
    if (i > 0) {
      partes.set(trozo.slice(0, i).trim(), trozo.slice(i + 1).trim());
    }
  }

  const ts = partes.get('ts');
  const v1 = partes.get('v1');
  if (!ts || !v1) return false;

  // El id va en minúsculas cuando es alfanumérico (regla de MP).
  const id = paymentId.toLowerCase();
  const manifiesto =
    `id:${id};` + (xRequestId ? `request-id:${xRequestId};` : '') + `ts:${ts};`;

  const esperada = createHmac('sha256', secreto).update(manifiesto).digest('hex');

  // Comparación en tiempo constante: comparar con === deja medir, por lo que
  // tarda, qué tan cerca anda una firma inventada. Es la misma razón por la que
  // las contraseñas se comparan con bcrypt.compare y no con ===.
  const a = Buffer.from(esperada, 'utf8');
  const b = Buffer.from(v1, 'utf8');
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
