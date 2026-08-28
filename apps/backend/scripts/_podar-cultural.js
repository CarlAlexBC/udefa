/**
 * Poda los reactivos culturales que ya no están en los .md.
 *
 * POR QUÉ EXISTE APARTE. El importador completo hace esta poda al final, pero
 * tarda quince minutos de consultas seguidas y Neon cierra la conexión antes
 * (P1017, "Server has closed the connection"). Cuando lo único pendiente es la
 * poda —porque los enunciados ya se re-enlazaron y no hay nada que crear ni
 * actualizar— esto la hace en segundos.
 *
 * MISMA REGLA QUE EL IMPORTADOR, sin atajos: sólo borra un reactivo si NADIE lo
 * referencia. Si alguien ya lo contestó, en examen o en práctica, o lo tiene en
 * su cola de repaso, se conserva y se avisa. Perder esas filas sería borrarle el
 * avance a un aspirante.
 *
 *   railway run node scripts/_podar-cultural.js            (simulación)
 *   railway run node scripts/_podar-cultural.js --aplicar  (borra)
 */
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const APLICAR = process.argv.includes('--aplicar');
const BANCO = 'cultural';
const RAIZ = path.resolve(__dirname, '../../../docs/examen-cultural');
const NO_BANCO = new Set(['auditoria']);

function enunciadosVivos() {
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
    const vivos = enunciadosVivos();
    const enBase = await prisma.reactivo.findMany({
      where: { banco: BANCO },
      select: {
        id: true,
        enunciado: true,
        _count: { select: { respuestas: true, repasos: true, respuestasPractica: true } },
      },
    });

    const huerfanos = enBase.filter((r) => !vivos.has(r.enunciado));
    const conHistorial = huerfanos.filter(
      (r) => r._count.respuestas + r._count.repasos + r._count.respuestasPractica > 0,
    );
    const borrables = huerfanos.filter(
      (r) => r._count.respuestas + r._count.repasos + r._count.respuestasPractica === 0,
    );

    console.log(APLICAR ? '=== PODANDO ===\n' : '=== SIMULACIÓN (nada se tocó) ===\n');
    console.log(`En la base        : ${enBase.length}`);
    console.log(`Huérfanos         : ${huerfanos.length}`);
    console.log(`  · borrables     : ${borrables.length}`);
    console.log(`  · con historial : ${conHistorial.length}  (se conservan)`);

    for (const r of borrables.slice(0, 10)) {
      console.log(`\n  borrar [#${r.id}] ${r.enunciado.slice(0, 120)}`);
    }
    for (const r of conHistorial.slice(0, 10)) {
      console.log(`\n  CONSERVAR [#${r.id}] ${r.enunciado.slice(0, 120)}`);
    }

    if (!APLICAR) {
      console.log('\nPara borrar: railway run node scripts/_podar-cultural.js --aplicar');
      return;
    }
    if (!borrables.length) {
      console.log('\nNada que podar.');
      return;
    }

    const { count } = await prisma.reactivo.deleteMany({
      where: { id: { in: borrables.map((r) => r.id) } },
    });
    const final = await prisma.reactivo.count({ where: { banco: BANCO } });
    console.log(`\n✓ Borrados ${count}. Quedan ${final} reactivos ${BANCO}.`);
  } finally {
    await prisma.$disconnect();
  }
})();
