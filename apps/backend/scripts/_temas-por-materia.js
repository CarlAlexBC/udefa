// TEMPORAL — inspecciona qué "temas" hay por materia del HCM (capítulos vs
// subtemas) para diseñar el desglose de la Fase 04. Solo lectura. Borrar al terminar.
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const MATERIAS = [
  ['Español', 'espanol-zarzar', [1, 3]],
  ['Álgebra', 'algebra-baldor', [1, 2, 3, 4, 5, 6]],
  ['Historia', 'historia-rodriguez', [6]],
  ['Geografía', 'geografia-tamayo', [1, 3, 4, 5]],
];

(async () => {
  for (const [nombre, slug, caps] of MATERIAS) {
    const inCaps = caps.join(',');
    console.log(`\n===== ${nombre} (${slug}) caps ${inCaps} =====`);

    const chapters = await p.$queryRawUnsafe(
      `SELECT c.numero AS cap, c.titulo AS titulo, COUNT(r.id)::int AS n
       FROM "Reactivo" r JOIN "Tema" t ON t.id=r."temaId"
       JOIN "Capitulo" c ON c.id=t."capituloId" JOIN "Libro" l ON l.id=c."libroId"
       WHERE r.banco='cultural' AND l.slug='${slug}' AND c.numero IN (${inCaps})
       GROUP BY c.numero, c.titulo ORDER BY c.numero`,
    );
    console.log('  CAPÍTULOS (titulo → reactivos):');
    for (const ch of chapters) console.log(`    ${ch.cap} · "${ch.titulo}" → ${ch.n}`);

    const distintos = await p.$queryRawUnsafe(
      `SELECT COUNT(DISTINCT t.nombre)::int AS n
       FROM "Reactivo" r JOIN "Tema" t ON t.id=r."temaId"
       JOIN "Capitulo" c ON c.id=t."capituloId" JOIN "Libro" l ON l.id=c."libroId"
       WHERE r.banco='cultural' AND l.slug='${slug}' AND c.numero IN (${inCaps})`,
    );
    console.log(`  # subtemas distintos (Tema.nombre): ${distintos[0].n}`);

    const temas = await p.$queryRawUnsafe(
      `SELECT t.nombre AS tema, COUNT(r.id)::int AS n
       FROM "Reactivo" r JOIN "Tema" t ON t.id=r."temaId"
       JOIN "Capitulo" c ON c.id=t."capituloId" JOIN "Libro" l ON l.id=c."libroId"
       WHERE r.banco='cultural' AND l.slug='${slug}' AND c.numero IN (${inCaps})
       GROUP BY t.nombre ORDER BY n DESC LIMIT 10`,
    );
    console.log('  SUBTEMAS (muestra top 10, nombre crudo → reactivos):');
    for (const tm of temas) console.log(`    "${tm.tema}" → ${tm.n}`);
  }
  await p.$disconnect();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
