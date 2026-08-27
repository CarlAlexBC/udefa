/**
 * SÓLO LECTURA. Dice qué pasaría si se corriera el importador cultural, sin
 * tocar nada.
 *
 * Existe porque el modo prueba del importador sólo lee los .md: valida el
 * formato pero no se asoma a la base, así que no puede avisar cuántos
 * reactivos crearía, actualizaría o dejaría huérfanos.
 *
 * El importador empareja cada reactivo por (tema, enunciado). Al haberle
 * cambiado el enunciado a varios cientos, para él son otros: los nuevos se
 * crean y los viejos quedan huérfanos. Un huérfano se borra sólo si NADIE lo
 * referencia; si alguien ya lo contestó, se conserva y quedan las dos
 * versiones. Este script cuenta exactamente cuántos caen en cada caso.
 *
 *   railway run node scripts/_previo-import-cultural.js
 */
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const BANCO = 'cultural';
const RAIZ = path.resolve(__dirname, '../../../docs/examen-cultural');
const NO_BANCO = new Set(['auditoria']);

function enunciadosDeLosMd() {
  const vivos = new Set();
  let retirados = 0;

  for (const carpeta of fs.readdirSync(RAIZ, { withFileTypes: true })) {
    if (!carpeta.isDirectory() || NO_BANCO.has(carpeta.name)) continue;
    const dir = path.join(RAIZ, carpeta.name);
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md'))) {
      const texto = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n/g, '\n');
      const partes = texto.split(/^### \d+$/m).slice(1);
      for (const bloque of partes) {
        if (/^\*\*Retirado:\*\*/m.test(bloque)) {
          retirados++;
          continue;
        }
        const lineas = bloque.split('\n');
        const enun = [];
        for (const l of lineas) {
          if (/^-\s*[A-D]\.\s/.test(l)) break;
          if (l.trim()) enun.push(l.trim());
        }
        const e = enun.join(' ').trim();
        if (e) vivos.add(e);
      }
    }
  }
  return { vivos, retirados };
}

(async () => {
  const prisma = new PrismaClient();
  try {
    const { vivos, retirados } = enunciadosDeLosMd();

    const enBase = await prisma.reactivo.findMany({
      where: { banco: BANCO },
      select: {
        id: true,
        enunciado: true,
        _count: {
          select: { respuestas: true, repasos: true, respuestasPractica: true },
        },
      },
    });

    const setBase = new Set(enBase.map((r) => r.enunciado));
    const nuevos = [...vivos].filter((e) => !setBase.has(e));
    const huerfanos = enBase.filter((r) => !vivos.has(r.enunciado));
    const conHistorial = huerfanos.filter(
      (r) =>
        r._count.respuestas + r._count.repasos + r._count.respuestasPractica > 0,
    );

    console.log('=== PREVIO (nada se tocó) ===\n');
    console.log(`En los .md, vivos      : ${vivos.size}`);
    console.log(`En los .md, retirados  : ${retirados}`);
    console.log(`En la base ahora       : ${enBase.length}`);
    console.log('');
    console.log(`Se CREARÍAN            : ${nuevos.length}`);
    console.log(`Quedarían huérfanos    : ${huerfanos.length}`);
    console.log(`  · se borrarían       : ${huerfanos.length - conHistorial.length}`);
    console.log(`  · se CONSERVARÍAN    : ${conHistorial.length}  (alguien ya los contestó)`);
    console.log('');
    console.log(`Total en la base al terminar: ${enBase.length - (huerfanos.length - conHistorial.length) + nuevos.length}`);

    if (conHistorial.length) {
      console.log('\nLos que se conservarían (quedarían duplicados con su versión nueva):');
      for (const r of conHistorial.slice(0, 15)) {
        console.log(`  [#${r.id}] ${r.enunciado.slice(0, 110)}`);
      }
      if (conHistorial.length > 15) {
        console.log(`  … y ${conHistorial.length - 15} más`);
      }
    }
  } finally {
    await prisma.$disconnect();
  }
})();
