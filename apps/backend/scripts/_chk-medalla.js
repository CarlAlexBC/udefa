// ¿El 🎖 (marcador interno de diseño) quedó dentro del enunciado en la base v3?
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
(async () => {
  const totalV3 = await p.reactivo.count({ where: { banco: 'v3' } });
  const conMedallaV3 = await p.reactivo.count({
    where: { banco: 'v3', enunciado: { contains: '🎖' } },
  });
  const patTotal = await p.reactivo.count({ where: { banco: 'v3', tema: 'patriotismo' } });
  const patMedalla = await p.reactivo.count({
    where: { banco: 'v3', tema: 'patriotismo', enunciado: { contains: '🎖' } },
  });
  console.log('v3 TOTAL:', totalV3, '· con 🎖 en enunciado:', conMedallaV3);
  console.log('patriotismo v3:', patTotal, '· con 🎖 en enunciado:', patMedalla);
  const m = await p.reactivo.findFirst({
    where: { banco: 'v3', tema: 'patriotismo', enunciado: { contains: '🎖' } },
    select: { id: true, enunciado: true, opciones: true },
  });
  console.log('muestra:', JSON.stringify(m));
})()
  .catch((e) => { console.error('ERR', e.message); process.exitCode = 1; })
  .finally(() => p.$disconnect());
