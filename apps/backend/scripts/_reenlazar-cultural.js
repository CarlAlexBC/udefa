/**
 * Re-enlaza los reactivos culturales cuyo ENUNCIADO se limpió en los .md.
 *
 * EL PROBLEMA. El importador empareja cada reactivo por (tema, enunciado). Al
 * quitarles a 229 enunciados la frase "según la figura 32-7" o el preámbulo
 * "en el capítulo 3 sobre...", para el importador son reactivos distintos:
 * crearía los nuevos y dejaría huérfanos los viejos. Los huérfanos que alguien
 * ya contestó NO se borran (bien hecho: se perdería su historial), así que
 * quedarían quince preguntas duplicadas, una con la frase vieja y otra sin.
 *
 * LA SOLUCIÓN. Aplicarle a la BASE la misma limpieza que se le aplicó a los
 * .md, ANTES de importar. Así el importador los encuentra, los da por
 * "sin cambio" y no crea ni borra nada: se conservan los ids, las respuestas,
 * los repasos y las prácticas de todo el mundo.
 *
 * SEGURO POR CONSTRUCCIÓN: sólo renombra un reactivo si el texto ya limpio
 * EXISTE en los .md. Si la limpieza produjera algo que no está en el banco, no
 * toca esa fila.
 *
 *   railway run node scripts/_reenlazar-cultural.js            (simulación)
 *   railway run node scripts/_reenlazar-cultural.js --aplicar  (escribe)
 */
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const APLICAR = process.argv.includes('--aplicar');
const BANCO = 'cultural';
const RAIZ = path.resolve(__dirname, '../../../docs/examen-cultural');
const NO_BANCO = new Set(['auditoria']);

// Las MISMAS dos expresiones con las que se limpiaron los .md.
const FIGURA = /,?\s*(?:seg[uú]n|de acuerdo con|conforme a)\s+(?:el|la|los|las)\s+(?:figuras?|tablas?|esquemas?|gr[aá]ficas?|diagramas?|mapas?|ilustraciones?|im[aá]genes?|paneles?|panel)[^,?¿]*,/i;
const PREAMBULO = /,?\s*(?:en|del?)\s+(?:el\s+)?(?:cap[ií]tulo|secci[oó]n|apartado)\s*\d*[^,?¿]*,/i;

function limpiar(e) {
  let n = e.replace(FIGURA, ',').replace(PREAMBULO, ',');
  n = n.replace(/,\s*,/g, ',').replace(/\s{2,}/g, ' ').trim();
  n = n.replace(/,\s*¿/g, ', ¿');
  return n;
}

function enunciadosVivosDeLosMd() {
  const vivos = new Set();
  for (const c of fs.readdirSync(RAIZ, { withFileTypes: true })) {
    if (!c.isDirectory() || NO_BANCO.has(c.name)) continue;
    const dir = path.join(RAIZ, c.name);
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md'))) {
      const texto = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n/g, '\n');
      for (const bloque of texto.split(/^### \d+$/m).slice(1)) {
        if (/^\*\*Retirado:\*\*/m.test(bloque)) continue;
        const enun = [];
        for (const l of bloque.split('\n')) {
          if (/^-\s*[A-D]\.\s/.test(l)) break;
          if (l.trim()) enun.push(l.trim());
        }
        const e = enun.join(' ').trim();
        if (e) vivos.add(e);
      }
    }
  }
  return vivos;
}

(async () => {
  const prisma = new PrismaClient();
  try {
    const vivos = enunciadosVivosDeLosMd();
    const enBase = await prisma.reactivo.findMany({
      where: { banco: BANCO },
      select: { id: true, enunciado: true },
    });

    const plan = [];
    const sinDestino = [];
    for (const r of enBase) {
      if (vivos.has(r.enunciado)) continue; // ya coincide, no se toca
      const limpio = limpiar(r.enunciado);
      if (limpio !== r.enunciado && vivos.has(limpio)) {
        plan.push({ id: r.id, antes: r.enunciado, despues: limpio });
      } else {
        sinDestino.push(r);
      }
    }

    console.log(APLICAR ? '=== APLICANDO ===\n' : '=== SIMULACIÓN (nada se tocó) ===\n');
    console.log(`Reactivos en la base       : ${enBase.length}`);
    console.log(`Ya coinciden con los .md   : ${enBase.length - plan.length - sinDestino.length}`);
    console.log(`Se re-enlazarían           : ${plan.length}`);
    console.log(`Huérfanos sin destino claro: ${sinDestino.length}`);

    for (const r of plan.slice(0, 5)) {
      console.log(`\n  [#${r.id}]`);
      console.log(`   antes  : ${r.antes.slice(0, 120)}`);
      console.log(`   después: ${r.despues.slice(0, 120)}`);
    }

    if (sinDestino.length) {
      console.log('\nSin destino (el importador decidirá qué hacer con ellos):');
      for (const r of sinDestino.slice(0, 10)) {
        console.log(`  [#${r.id}] ${r.enunciado.slice(0, 110)}`);
      }
      if (sinDestino.length > 10) console.log(`  … y ${sinDestino.length - 10} más`);
    }

    if (!APLICAR) {
      console.log('\nPara escribir: railway run node scripts/_reenlazar-cultural.js --aplicar');
      return;
    }

    let hechos = 0;
    for (const r of plan) {
      await prisma.reactivo.update({
        where: { id: r.id },
        data: { enunciado: r.despues },
      });
      hechos++;
    }
    console.log(`\n✓ Re-enlazados ${hechos} reactivos. Ningún id cambió; el historial sigue intacto.`);
  } finally {
    await prisma.$disconnect();
  }
})();
