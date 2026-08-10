// Verifica que el filtro `banco` del endpoint de reactivos hace lo esperado:
// replica listarTemasConConteo(examenId=2, 'v3') y obtenerTodos(tema, 'v3').
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

(async () => {
  // 1) temas-conteo del examen de personalidad (id 2), solo banco v3
  const grupos = await p.reactivo.groupBy({
    by: ['tema'],
    where: { tema: { not: null }, bloque: { examenId: 2 }, banco: 'v3' },
    _count: { _all: true },
    orderBy: { tema: 'asc' },
  });
  console.log('=== temas v3 (examenId=2):', grupos.length, 'temas ===');
  console.log(
    grupos.map((g) => `${g.tema} (${g._count._all})`).join('  ·  '),
  );

  // 2) muestra de reactivos de un tema, con los campos enriquecidos
  const muestra = await p.reactivo.findMany({
    where: { tema: 'suicidio', banco: 'v3' },
    take: 3,
    orderBy: { id: 'asc' },
    include: { bloque: { select: { id: true, examen: { select: { id: true } } } } },
  });
  console.log('\n=== muestra tema=suicidio banco=v3 (campos que llegan al admin) ===');
  for (const r of muestra) {
    console.log({
      id: r.id,
      eje: r.eje,
      numeroEnEje: r.numeroEnEje,
      polaridad: r.polaridad,
      tipoTrampa: r.tipoTrampa,
      esCritico: r.esCritico,
      subLote: r.subLote,
      parNumero: r.parNumero,
      opciones: r.opciones,
      banco: r.banco,
      examenId: r.bloque?.examen?.id,
    });
  }
})()
  .catch((e) => {
    console.error('ERR', e.message);
    process.exitCode = 1;
  })
  .finally(() => p.$disconnect());
