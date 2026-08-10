// Limpieza única: saca el 🎖 del enunciado de los reactivos v3 ya importados y
// pone militar=true donde lo tenía. Usa SQL crudo para no depender del cliente
// Prisma regenerado (el generate quedó bloqueado por el backend en marcha).
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

(async () => {
  const rows = await p.reactivo.findMany({
    where: { banco: 'v3', enunciado: { contains: '🎖' } },
    select: { id: true, enunciado: true },
  });
  console.log('filas v3 con 🎖 en el enunciado:', rows.length);

  let cambiadas = 0;
  for (const r of rows) {
    const limpio = r.enunciado.replace(/\s*🎖️?/g, '').replace(/\s+/g, ' ').trim();
    await p.$executeRaw`UPDATE "Reactivo" SET militar = true, enunciado = ${limpio} WHERE id = ${r.id}`;
    cambiadas++;
  }
  console.log('actualizadas (militar=true + enunciado limpio):', cambiadas);

  // Verificación
  const quedan = await p.reactivo.count({ where: { banco: 'v3', enunciado: { contains: '🎖' } } });
  const militares = await p.$queryRaw`SELECT COUNT(*)::int AS n FROM "Reactivo" WHERE banco='v3' AND militar=true`;
  console.log('v3 con 🎖 restantes (debe ser 0):', quedan);
  console.log('v3 con militar=true:', militares[0].n);
  const m = await p.reactivo.findFirst({
    where: { banco: 'v3', tema: 'patriotismo' },
    orderBy: { id: 'asc' },
    select: { enunciado: true },
  });
  console.log('muestra patriotismo #1 (limpia):', JSON.stringify(m.enunciado));
})()
  .catch((e) => { console.error('ERR', e.message); process.exitCode = 1; })
  .finally(() => p.$disconnect());
