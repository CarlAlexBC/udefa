/**
 * TEMPORAL — sólo para la prueba de carga (campaña de escalabilidad).
 * Siembra UN token de prueba para el admin id=50 sin pasar por el login:
 *   1. crea una fila en Sesion (token = UUID)  ← reversible, se borra al final
 *   2. firma un JWT a mano (HS256) con la misma JWT_SECRET del backend
 *
 * El JWT lleva { sub, email, sid } — la misma forma que emite auth.service —
 * para que jwt.strategy valide la sesión en la base y cargue el usuario.
 *
 * Uso:   node scripts/_loadtest-seed.js            (siembra e imprime token)
 *        node scripts/_loadtest-seed.js --limpiar  (borra las sesiones de prueba)
 *
 * Borra este archivo al terminar la campaña.
 */
require('dotenv').config();
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const USUARIO_ID = 50; // admin, plantel HCM (id=1): puede armar psicológicos y el cultural HCM
const EMAIL = 'elmonoteteguia@gmail.com';
const MARCA = 'loadtest'; // prefijo del token de Sesion para poder limpiarlo luego
const SALIDA = path.resolve(__dirname, '..', '..', '..',
  // scratchpad de esta sesión
  process.env.LOADTEST_OUT ||
  'C:/Users/carlo/AppData/Local/Temp/claude/C--proyectos-udefa/83b91010-10fc-48cf-a69e-8e7448a403e2/scratchpad/token.txt');

function base64url(input) {
  return Buffer.from(input).toString('base64')
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function firmarJWT(payload, secret) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const ahora = Math.floor(Date.now() / 1000);
  const cuerpo = { ...payload, iat: ahora, exp: ahora + 7 * 24 * 60 * 60 };
  const h = base64url(JSON.stringify(header));
  const p = base64url(JSON.stringify(cuerpo));
  const firma = crypto.createHmac('sha256', secret)
    .update(`${h}.${p}`).digest('base64')
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  return `${h}.${p}.${firma}`;
}

async function limpiar() {
  const r = await prisma.sesion.deleteMany({
    where: { token: { startsWith: MARCA + '-' } },
  });
  console.log(`Limpieza: ${r.count} sesión(es) de prueba borrada(s).`);
}

async function sembrar() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('Falta JWT_SECRET en el .env');

  const sid = `${MARCA}-${crypto.randomUUID()}`;
  await prisma.sesion.create({ data: { usuarioId: USUARIO_ID, token: sid } });

  const token = firmarJWT({ sub: USUARIO_ID, email: EMAIL, sid }, secret);
  fs.writeFileSync(SALIDA, token, 'utf8');

  console.log('Token de prueba sembrado.');
  console.log('  Sesion.token (sid):', sid);
  console.log('  JWT escrito en   :', SALIDA);
  console.log('  JWT              :', token);
}

(async () => {
  try {
    if (process.argv.includes('--limpiar')) await limpiar();
    else await sembrar();
  } catch (e) {
    console.error('ERROR:', e.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
