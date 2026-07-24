/**
 * Armado del examen cultural (SOLO LECTURA) — camino 1: por temaId.
 *
 * Prueba de que el examen de una carrera se puede armar directo desde el árbol de
 * oferta (Libro/Capítulo/Tema, banco='cultural'), sin materializar bloques planos
 * ni duplicar reactivos: cruza el puente (código → slug + capítulos), muestrea N
 * por materia y devuelve el examen en memoria.
 *
 * Es la lógica que luego irá a un método armarExamenCultural en ExamenesService.
 * Aquí sólo consulta y reporta; NO escribe nada.
 *
 * Uso:
 *   npx ts-node scripts/armar-cultural.ts               → HCM (1ª carrera)
 *   npx ts-node scripts/armar-cultural.ts --plantel HCM
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

// Reparto de las 100 preguntas. Vacío = parejo (DEFAULT por materia). Éste es el
// único lugar a tocar cuando Carlo confirme el reparto oficial, p. ej.
//   { 'ESP-01-2026': 30, 'ALG-02-2026': 30, 'HIST-03-2026': 20, 'GEO-04-2026': 20 }
const DEFAULT_POR_MATERIA = 25;
const REPARTO: Record<string, number> = {};

/** Fisher-Yates uniforme (azar por corrida, como un intento real). */
function mezclar<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function main() {
  const prisma = new PrismaClient();
  try {
    const carrera = temarios.carreras.find((c: any) => c.plantel === PLANTEL);
    if (!carrera) throw new Error(`no hay carrera para el plantel ${PLANTEL}`);

    console.log('=== Armado cultural (camino 1: por temaId) — SOLO LECTURA ===');
    console.log(`${PLANTEL} · ${carrera.carrera}\n`);

    const bloques: {
      materia: string;
      codigo: string;
      pedidos: number;
      disponibles: number;
      reactivos: { id: number; enunciado: string; opciones: any; respuestaCorrecta: string | null }[];
    }[] = [];

    for (const m of carrera.materias || []) {
      const cod = m.codigo_normalizado || m.codigo;
      const e = puente[cod];
      if (!e) {
        console.log(`  ! ${cod} (${m.nombre}): sin puente, se omite (libro no importado)`);
        continue;
      }
      const disponibles = await prisma.reactivo.findMany({
        where: {
          banco: 'cultural',
          temaBanco: { capitulo: { numero: { in: e.capitulos }, libro: { slug: e.slug } } },
        },
        select: { id: true, enunciado: true, opciones: true, respuestaCorrecta: true },
      });
      const n = REPARTO[cod] ?? DEFAULT_POR_MATERIA;
      bloques.push({
        materia: m.nombre,
        codigo: cod,
        pedidos: n,
        disponibles: disponibles.length,
        reactivos: mezclar(disponibles).slice(0, n),
      });
    }

    // --- Reporte + validación ---
    let total = 0;
    const problemas: string[] = [];
    const idsVistos = new Set<number>();

    console.log('Bloques del examen armado:');
    for (const b of bloques) {
      total += b.reactivos.length;
      console.log(
        `  ${b.materia.padEnd(12)} ${b.codigo.padEnd(14)} ${b.reactivos.length}/${b.pedidos} elegidos  (de ${b.disponibles} disponibles)`,
      );
      if (b.reactivos.length < b.pedidos)
        problemas.push(`${b.materia}: solo hay ${b.reactivos.length} y se pedían ${b.pedidos}`);
      for (const r of b.reactivos) {
        if (idsVistos.has(r.id)) problemas.push(`reactivo repetido en el examen: id=${r.id}`);
        idsVistos.add(r.id);
      }
    }
    console.log(`  ${'TOTAL'.padEnd(27)} ${total} reactivos\n`);

    const muestra = bloques[0]?.reactivos[0];
    if (muestra) {
      console.log('Muestra (1er reactivo del 1er bloque, ya barajado desde la importación):');
      console.log(`  ${muestra.enunciado}`);
      for (const o of muestra.opciones as string[]) {
        console.log(`    - ${o}${o === muestra.respuestaCorrecta ? '   ✓ correcta' : ''}`);
      }
      console.log('');
    }

    if (problemas.length) {
      console.log('✗ Problemas:');
      problemas.forEach((p) => console.log('   - ' + p));
    } else {
      console.log(`✓ Examen de ${total} reactivos armado sin problemas. Nada se escribió a la base.`);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
