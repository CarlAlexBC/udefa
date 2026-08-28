/**
 * Espeja en la base la marca **Retirado:** de los .md.
 *
 * POR QUÉ APARTE. El importador completo ya sabe hacerlo, pero tarda quince
 * minutos de consultas seguidas y Neon corta la conexión antes de terminar
 * (P1017). Cuando lo único pendiente es marcar —porque los enunciados ya se
 * re-enlazaron y no hay nada que crear— esto lo hace en segundos.
 *
 * Un retirado NO se borra: se marca. Borrarlo se llevaría por delante las
 * respuestas, los repasos y el avance de quien ya lo contestó. Marcado, deja de
 * servirse en exámenes y en práctica, pero su historial queda intacto.
 *
 * También DESMARCA: un reactivo que vuelve a estar vivo en los .md recupera su
 * lugar. Así la base siempre refleja los archivos, que son la fuente de verdad.
 *
 *   railway run node scripts/_marcar-retirados.js            (simulación)
 *   railway run node scripts/_marcar-retirados.js --aplicar
 */
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const APLICAR = process.argv.includes('--aplicar');
const BANCO = 'cultural';
const RAIZ = path.resolve(__dirname, '../../../docs/examen-cultural');
const NO_BANCO = new Set(['auditoria']);

/** Lee los .md y devuelve el enunciado de cada retirado con su motivo. */
function retiradosDeLosMd() {
  const lista = [];
  for (const c of fs.readdirSync(RAIZ, { withFileTypes: true })) {
    if (!c.isDirectory() || NO_BANCO.has(c.name)) continue;
    const dir = path.join(RAIZ, c.name);
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md'))) {
      const texto = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n/g, '\n');
      for (const bloque of texto.split(/^### \d+$/m).slice(1)) {
        const m = bloque.match(/^\*\*Retirado:\*\*\s*(.+)$/m);
        if (!m) continue;
        const enun = [];
        for (const l of bloque.split('\n')) {
          if (/^-\s*[A-D]\.\s/.test(l)) break;
          if (l.trim()) enun.push(l.trim());
        }
        const e = enun.join(' ').trim();
        if (e) lista.push({ enunciado: e, motivo: m[1].trim() });
      }
    }
  }
  return lista;
}

(async () => {
  const prisma = new PrismaClient();
  try {
    const retirados = retiradosDeLosMd();
    const textos = new Set(retirados.map((r) => r.enunciado));

    const enBase = await prisma.reactivo.findMany({
      where: { banco: BANCO },
      select: { id: true, enunciado: true, retirado: true },
    });

    const porMarcar = enBase.filter((r) => !r.retirado && textos.has(r.enunciado));
    const porDesmarcar = enBase.filter((r) => r.retirado && !textos.has(r.enunciado));
    const yaOk = enBase.filter((r) => r.retirado && textos.has(r.enunciado));

    console.log(APLICAR ? '=== APLICANDO ===\n' : '=== SIMULACIÓN (nada se tocó) ===\n');
    console.log(`Retirados en los .md   : ${retirados.length}`);
    console.log(`Ya marcados en la base : ${yaOk.length}`);
    console.log(`Se MARCARÍAN           : ${porMarcar.length}`);
    console.log(`Se DESMARCARÍAN        : ${porDesmarcar.length}`);

    const familias = new Map();
    for (const r of retirados) {
      const fam = r.motivo.split('·')[0].trim();
      familias.set(fam, (familias.get(fam) ?? 0) + 1);
    }
    console.log(
      '\nPor familia: ' + [...familias].map(([f, n]) => `${f} ${n}`).join(', '),
    );

    if (!APLICAR) {
      console.log('\nPara escribir: railway run node scripts/_marcar-retirados.js --aplicar');
      return;
    }

    let marcados = 0;
    for (const r of retirados) {
      const res = await prisma.reactivo.updateMany({
        where: { banco: BANCO, enunciado: r.enunciado, retirado: null },
        data: { retirado: r.motivo },
      });
      marcados += res.count;
    }
    let desmarcados = 0;
    if (porDesmarcar.length) {
      const res = await prisma.reactivo.updateMany({
        where: { id: { in: porDesmarcar.map((r) => r.id) } },
        data: { retirado: null },
      });
      desmarcados = res.count;
    }

    const vivos = await prisma.reactivo.count({
      where: { banco: BANCO, retirado: null },
    });
    const fuera = await prisma.reactivo.count({
      where: { banco: BANCO, retirado: { not: null } },
    });
    console.log(`\n✓ Marcados ${marcados}, desmarcados ${desmarcados}.`);
    console.log(`  Servibles: ${vivos}   ·   Retirados (guardados): ${fuera}`);
  } finally {
    await prisma.$disconnect();
  }
})();
