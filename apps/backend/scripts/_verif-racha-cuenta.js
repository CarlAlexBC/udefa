/**
 * Lectura (NO modifica nada): muestra los días activos y la racha calculada de
 * una cuenta real, para confirmar en vivo sin navegador. Uso:
 *   node scripts/_verif-racha-cuenta.js <email>
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const { ActividadService } = require('../dist/actividad/actividad.service');

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];
  const usuario = email
    ? await prisma.usuario.findUnique({ where: { email } })
    : await prisma.usuario.findFirst({ where: { rol: 'admin' } });

  if (!usuario) {
    console.log(`No encontré usuario (${email ?? 'primer admin'}).`);
    return;
  }

  const dias = await prisma.actividadDiaria.findMany({
    where: { usuarioId: usuario.id },
    orderBy: { fecha: 'asc' },
    select: { fecha: true },
  });

  const svc = new ActividadService(prisma);
  const r = await svc.obtenerRacha(usuario.id);

  console.log(`Cuenta: ${usuario.nombre} <${usuario.email}> (id ${usuario.id})`);
  console.log(`Días activos registrados: ${dias.map((d) => d.fecha).join(', ') || '(ninguno)'}`);
  console.log(`\nRacha calculada:`);
  console.log(`  rachaActual  = ${r.rachaActual}`);
  console.log(`  rachaMaxima  = ${r.rachaMaxima}`);
  console.log(`  hoyActivo    = ${r.hoyActivo}`);
  console.log(
    `  tira semana  = ` +
      r.semana
        .map((d) => `${d.fecha.slice(5)}${d.esHoy ? '*' : ''}${d.activo ? '✓' : '·'}`)
        .join(' '),
  );
}

main()
  .catch((e) => console.error('ERROR:', e.message))
  .finally(() => prisma.$disconnect());
