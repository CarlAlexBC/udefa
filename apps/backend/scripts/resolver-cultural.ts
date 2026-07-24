/**
 * Resolver cultural (SOLO LECTURA) — prueba la conexión OFERTA ↔ DEMANDA.
 *
 * Cruza el puente curado (docs/examen-cultural/puente-oferta-demanda.json:
 * código de materia → slug + capítulos) contra el árbol de oferta ya importado
 * (Libro/Capítulo/Tema, banco='cultural'), y para cada carrera de un plantel
 * reporta cuántos reactivos hay disponibles por materia para armar su examen.
 *
 * No escribe nada. Es el paso previo al armado real (que decidirá si se hace una
 * ruta nueva armarExamenCultural por temaId o se materializan bloques planos).
 *
 * Uso:
 *   npx ts-node scripts/resolver-cultural.ts              → HCM (default)
 *   npx ts-node scripts/resolver-cultural.ts --plantel EMM
 */

import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const RAIZ = path.resolve(__dirname, '../../../docs/examen-cultural');
const puente: Record<string, { slug: string; capitulos: number[] }> = JSON.parse(
  fs.readFileSync(path.join(RAIZ, 'puente-oferta-demanda.json'), 'utf8'),
).puente;
const temarios = JSON.parse(fs.readFileSync(path.join(RAIZ, 'temarios.json'), 'utf8'));

const argPlantel = process.argv.indexOf('--plantel');
const PLANTEL = argPlantel >= 0 ? process.argv[argPlantel + 1] : 'HCM';

async function main() {
  const prisma = new PrismaClient();
  try {
    // 1. Validar el puente contra el árbol de oferta: cada slug y cada capítulo
    //    referido tiene que existir de verdad.
    console.log('=== Validación del puente vs árbol de oferta ===');
    let gaps = 0;
    for (const [cod, e] of Object.entries(puente)) {
      const libro = await prisma.libro.findUnique({
        where: { slug: e.slug },
        include: { capitulos: true },
      });
      if (!libro) {
        console.log(`  ✗ ${cod}: el slug '${e.slug}' no existe en la oferta`);
        gaps++;
        continue;
      }
      const existentes = new Set(libro.capitulos.map((c) => c.numero));
      const faltan = e.capitulos.filter((n) => !existentes.has(n));
      if (faltan.length) {
        console.log(`  ✗ ${cod} (${e.slug}): faltan capítulos ${faltan.join(', ')} en la oferta`);
        gaps++;
      }
    }
    if (!gaps) console.log('  ✓ todos los slugs y capítulos del puente existen en la oferta');
    console.log('');

    // 2. Resolver por carrera del plantel: qué reactivos hay disponibles por materia.
    const carreras = temarios.carreras.filter((c: any) => c.plantel === PLANTEL);
    console.log(`=== ${PLANTEL}: ${carreras.length} carrera(s) ===\n`);

    for (const c of carreras) {
      console.log(`### ${c.carrera}`);
      let total = 0;
      for (const m of c.materias || []) {
        const cod = m.codigo_normalizado || m.codigo;
        const e = puente[cod];
        if (!e) {
          console.log(`  - ${cod} (${m.nombre}): SIN PUENTE (libro aún no importado)`);
          continue;
        }
        const n = await prisma.reactivo.count({
          where: {
            banco: 'cultural',
            temaBanco: { capitulo: { numero: { in: e.capitulos }, libro: { slug: e.slug } } },
          },
        });
        total += n;
        console.log(
          `  - ${cod} (${m.nombre}) → ${e.slug} caps [${e.capitulos.join(',')}]: ${n} reactivos disponibles`,
        );
      }
      console.log(`  ─ TOTAL disponible: ${total}  (el examen pide 100)\n`);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
