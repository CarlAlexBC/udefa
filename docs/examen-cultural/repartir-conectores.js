/**
 * Reparte las tres fórmulas de arranque del Anexo "H" entre los enunciados
 * del banco cultural.
 *
 * El Anexo "H" alterna "De acuerdo con", "De conformidad con" y "En relación
 * con". El banco quedó escrito con "De acuerdo con" en los 1170.
 *
 * El reparto es DETERMINISTA (sembrado con el propio enunciado): correr el
 * script dos veces da exactamente el mismo resultado, y un reactivo conserva
 * su fórmula aunque se reordene el archivo.
 *
 * Uso:  node repartir-conectores.js            → prueba, no escribe
 *       node repartir-conectores.js --escribir → aplica a los .md
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DIR = path.resolve('docs/examen-cultural/HCM');
const ESCRIBIR = process.argv.includes('--escribir');

const FORMULAS = ['De acuerdo con', 'De conformidad con', 'En relación con'];
const VIEJA = 'De acuerdo con';

/** Elige fórmula por hash del enunciado — mismo texto, misma fórmula, siempre. */
function elegir(enunciado) {
  const h = crypto.createHash('sha256').update(enunciado).digest();
  return FORMULAS[h.readUInt32BE(0) % FORMULAS.length];
}

const conteo = Object.fromEntries(FORMULAS.map((f) => [f, 0]));
let tocados = 0;
const muestra = [];

for (const archivo of fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).sort()) {
  const ruta = path.join(DIR, archivo);
  const original = fs.readFileSync(ruta, 'utf8');
  const usaCRLF = original.includes('\r\n');
  const lineas = original.replace(/\r\n/g, '\n').split('\n');

  let dentro = false;
  for (let i = 0; i < lineas.length; i++) {
    const s = lineas[i].trim();

    if (/^### \d+$/.test(s)) { dentro = true; continue; }
    if (s === '---' || /^#{1,4} /.test(s)) { dentro = false; continue; }
    if (!dentro || !s) continue;
    // Opciones, campos y notas no son el enunciado.
    if (s.startsWith('- ') || s.startsWith('**') || s.startsWith('>')) { dentro = false; continue; }

    // Primera línea de texto tras "### N": el enunciado.
    if (s.startsWith(VIEJA)) {
      const nueva = elegir(s);
      conteo[nueva]++;
      if (nueva !== VIEJA) {
        lineas[i] = lineas[i].replace(VIEJA, nueva);
        tocados++;
        if (muestra.length < 6) muestra.push(lineas[i].trim().slice(0, 88));
      }
    }
    dentro = false;
  }

  if (ESCRIBIR) {
    const salida = lineas.join('\n');
    fs.writeFileSync(ruta, usaCRLF ? salida.replace(/\n/g, '\r\n') : salida, 'utf8');
  }
}

const total = Object.values(conteo).reduce((a, b) => a + b, 0);
console.log(`Enunciados procesados: ${total}`);
for (const f of FORMULAS) {
  console.log(`  ${f.padEnd(20)} ${String(conteo[f]).padStart(5)}  ${(100 * conteo[f] / total).toFixed(1)}%`);
}
console.log(`\nReescritos: ${tocados}`);
if (muestra.length) {
  console.log('\nEjemplos:');
  muestra.forEach((m) => console.log('   ' + m));
}
console.log(ESCRIBIR ? '\n✓ Archivos actualizados.' : '\nModo prueba: no se escribió nada. Usa --escribir.');
