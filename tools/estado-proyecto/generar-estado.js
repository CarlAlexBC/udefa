/**
 * Genera ESTADO.md en la raíz del repo: el avance real de la plataforma UDEFA.
 *
 *   node tools/estado-proyecto/generar-estado.js
 *
 * Por qué generado y no escrito a mano: en este mismo repo ya pasó que la
 * documentación manual del banco de personalidad terminó mintiendo, y se
 * arregló generando su ESTADO.md desde el importador. Este script aplica la
 * misma idea al proyecto completo — las cifras salen de los archivos, así que
 * no pueden quedar desfasadas.
 *
 * Lo que NO se puede derivar de los archivos (decisiones abiertas, el reparto
 * entre chats, cómo trabajar con Carlo) vive en CLAUDE.md, que sí es manual.
 */

const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..', '..');
const rel = (...p) => path.join(RAIZ, ...p);
const existe = (p) => fs.existsSync(p);

// Se normalizan los saltos de línea a \n. Sin esto, en Windows los archivos
// vienen con CRLF y cualquier regex que busque "\n\n" para cortar un párrafo
// falla en silencio y arrastra texto de más.
const leer = (p) => fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n');

/** Reactivos del examen cultural: un archivo por materia, `### N` por reactivo. */
function examenCultural() {
  const dir = rel('docs', 'examen-cultural', 'HCM');
  if (!existe(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => {
      const txt = leer(path.join(dir, f));
      const titulo = (txt.match(/^# (.+)$/m) || [, f])[1];
      const total = (txt.match(/^### \d+$/gm) || []).length;

      // El encabezado de cada archivo declara qué le falta. Se lee de ahí para
      // que el pendiente lo mantenga quien escribe los reactivos, no este script.
      //
      // Si el archivo NO declara nada, se dice "no declarado", nunca "—". La
      // diferencia importa: "—" se lee como "ya no falta nada" y eso sería una
      // mentira silenciosa, que es exactamente lo que este archivo debe evitar.
      const m = txt.match(/\*\*Pendiente:\*\*\s*([\s\S]*?)(?:\n\n|\n##)/);
      const pendiente = m ? m[1].replace(/\s+/g, ' ').trim() : null;

      return { archivo: f, titulo, total, pendiente };
    });
}

/** El banco de personalidad ya publica su propio ESTADO.md generado: se lee de ahí. */
function personalidad() {
  const p = rel('docs', 'personalidad-remaster', 'ESTADO.md');
  if (!existe(p)) return null;

  const fila = leer(p).match(/^\|\s*\|\s*\*\*TOTAL\*\*\s*\|\s*\*\*(\d+)\*\*\s*\|(.*)$/m);
  if (!fila) return null;

  const cols = fila[2].split('|').map((c) => c.trim());
  const ejes = (leer(p).match(/^\|\s*\d+\s*\|/gm) || []).length;

  return {
    total: Number(fila[1]),
    ejes,
    trampas: cols[2] || '?',
    criticos: cols[4] || '?',
    pares: cols[5] || '?',
  };
}

/** Bancos JSON del material original, previo a la remasterización. */
function reactivosIniciales() {
  const dir = rel('docs', 'reactivos-iniciales');
  if (!existe(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => {
      let n = 0;
      try {
        const d = JSON.parse(leer(path.join(dir, f)));
        n = Array.isArray(d) ? d.length : Object.keys(d).length;
      } catch {
        n = -1; // JSON roto: se reporta en vez de romper la corrida
      }
      return { archivo: f, total: n };
    });
}

/** Secciones de la Guía del Aspirante, a la que remite el panel de resultados. */
function guiaAspirante() {
  const dir = rel('docs', 'guia-aspirante');
  if (!existe(dir)) return 0;
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).length;
}

function construir() {
  const cultural = examenCultural();
  const pers = personalidad();
  const iniciales = reactivosIniciales();
  const guia = guiaAspirante();

  const totalCultural = cultural.reduce((s, m) => s + m.total, 0);
  const sinDeclarar = cultural.filter((m) => !m.pendiente);

  // Declarar un pendiente no es lo mismo que tenerlo: un archivo cerrado declara
  // "ninguno". Contar toda declaración como materia abierta hacía que el resumen
  // reportara ocho abiertas cuando sólo Álgebra lo estaba.
  const cerrado = (p) => /^ningun[oa]\b/i.test((p || '').trim());
  const abiertos = cultural.filter((m) => m.pendiente && !cerrado(m.pendiente));

  const L = [];
  L.push('# Estado del proyecto — Plataforma UDEFA');
  L.push('');
  L.push('**Archivo generado — no lo edites a mano.** Lo escribe');
  L.push('`tools/estado-proyecto/generar-estado.js` a partir de los archivos reales.');
  L.push('Para regenerarlo:');
  L.push('');
  L.push('```');
  L.push('node tools/estado-proyecto/generar-estado.js');
  L.push('```');
  L.push('');
  L.push('El contexto que no se puede contar —cómo trabajar, decisiones abiertas,');
  L.push('reparto entre sesiones— vive en `CLAUDE.md`, que sí se escribe a mano.');
  L.push('');
  L.push(`_Regenerado el ${new Date().toISOString().slice(0, 10)}._`);
  L.push('');

  L.push('## Resumen');
  L.push('');
  L.push('| Bloque | Reactivos | Estado |');
  L.push('|---|---:|---|');
  if (pers) {
    L.push(`| Personalidad (remaster) | ${pers.total} | banco cerrado, ${pers.ejes} ejes |`);
  }
  L.push(
    `| Examen cultural · HCM | ${totalCultural} | ${
      abiertos.length === 0
        ? 'todas las materias cerradas'
        : `abiertas: ${abiertos.map((m) => m.titulo.split(' · ')[0]).join(', ')}`
    } |`,
  );
  for (const b of iniciales) {
    const nombre = b.archivo.replace(/^reactivos_/, '').replace(/\.json$/, '').replace(/_/g, ' ');
    L.push(`| Inicial · ${nombre} | ${b.total < 0 ? 'JSON ROTO' : b.total} | material previo |`);
  }
  L.push(`| Guía del aspirante | — | ${guia} secciones |`);
  L.push('');

  L.push('## Examen cultural · HCM');
  L.push('');
  L.push('| Materia | Reactivos | Pendiente |');
  L.push('|---|---:|---|');
  for (const m of cultural) {
    L.push(`| ${m.titulo} | ${m.total} | ${m.pendiente || '_no declarado_' } |`);
  }
  L.push(`| **Total** | **${totalCultural}** | |`);
  L.push('');
  if (sinDeclarar.length) {
    L.push(
      `> ${sinDeclarar.length} archivo(s) no declaran pendiente en su encabezado, así que` +
        ' este resumen **no puede afirmar que estén cerrados**. Para que aparezcan como',
    );
    L.push('> terminados, agrégales una línea `**Pendiente:**` que lo diga.');
    L.push('');
  }

  if (pers) {
    L.push('## Personalidad (remaster)');
    L.push('');
    L.push(`- **${pers.total} reactivos** en ${pers.ejes} ejes.`);
    L.push(`- ${pers.trampas} trampas · ${pers.criticos} críticos · ${pers.pares} pares.`);
    L.push('- Desglose por eje: `docs/personalidad-remaster/ESTADO.md`.');
    L.push('');
  }

  L.push('## Dónde está cada cosa');
  L.push('');
  L.push('| Ruta | Qué es |');
  L.push('|---|---|');
  L.push('| `docs/examen-cultural/` | Reactivos del módulo cultural + cómo se trabajan |');
  L.push('| `docs/personalidad-remaster/` | Banco de personalidad y su estado generado |');
  L.push('| `docs/guia-aspirante/` | Guía a la que remite el panel de resultados |');
  L.push('| `docs/reactivos-iniciales/` | Bancos JSON del material original |');
  L.push('| `examen_cultural/` | Escaneos de los libros y temarios (fuente, no work product) |');
  L.push('| `apps/backend` · `apps/web` · `apps/mobile` | La plataforma |');
  L.push('| `tools/` | Scripts de apoyo |');
  L.push('');

  return L.join('\n') + '\n';
}

const destino = rel('ESTADO.md');
const nuevo = construir();
const previo = existe(destino) ? leer(destino) : null;

// Se compara ignorando la línea de fecha: si sólo cambió el día, el archivo no
// se reescribe. Así un `git status` sucio siempre significa avance real.
const sinFecha = (s) => (s || '').replace(/^_Regenerado el .*$/m, '');

if (previo !== null && sinFecha(previo) === sinFecha(nuevo)) {
  console.log('ESTADO.md sin cambios.');
} else {
  fs.writeFileSync(destino, nuevo, 'utf8');
  console.log(previo === null ? 'ESTADO.md creado.' : 'ESTADO.md actualizado.');
}
