/**
 * Hace más específicos los enunciados del examen cultural, según la crítica
 * recibida el 21 jul 2026 y las decisiones de Carlo:
 *
 *   - Formato B (redacción natural, sin paréntesis):
 *       De acuerdo con el libro de Biología, en el capítulo 4 sobre la
 *       organización de las células, ¿...?
 *
 *   - "Sólo cuando aclara": la referencia se pone SÓLO a los reactivos que son
 *     un dato suelto —una cifra, una fecha, un porcentaje— que sin el capítulo
 *     "flota" y no se ubica. Los que ya nombran su concepto en la pregunta
 *     ("¿qué es el nucléolo?", "¿qué es la fagocitosis?") quedan limpios.
 *
 * El capítulo se lee del H1; el TEMA (con su artículo, en minúscula) se pasa
 * como argumento, porque el artículo el/la depende del sustantivo y no se puede
 * adivinar bien. Idempotente: primero quita cualquier referencia anterior
 * (incluida la de paréntesis) y luego decide de cero.
 *
 * Uso:
 *   node especificar-reactivos.js --tema "la organización de las células" <archivo.md>
 *   node especificar-reactivos.js --escribir --tema "el origen de la vida" <archivo.md>
 */
const fs = require('fs');

const args = process.argv.slice(2);
const ESCRIBIR = args.includes('--escribir');
const temaIdx = args.indexOf('--tema');
const TEMA = temaIdx >= 0 ? args[temaIdx + 1] : null;
const archivos = args.filter(
  (a, i) => !a.startsWith('--') && i !== temaIdx + 1,
);

const CONECTORES = ['De acuerdo con', 'De conformidad con', 'En relación con'];

// El reactivo "flota" (necesita la referencia) cuando pregunta por un dato
// suelto: una cantidad, una fecha, una proporción. Si ya nombra su concepto,
// no se toca.
// Los sustantivos de cantidad (porcentaje, diámetro, grosor…) se buscan SIN el
// "¿" pegado, para cazar también "¿alrededor de qué porcentaje…" o "¿de qué
// diámetro…". Los interrogativos de tiempo/cantidad sí llevan "¿" para no
// disparar con esas palabras a media frase.
const FLOTA = /¿a cuánto|¿cuánto|¿cuánta|¿cuántos|¿cuántas|¿en qué año|¿en qué década|¿en qué siglo|¿en qué fecha|¿hace cuánto|¿hace aproximadamente|¿desde qué década|¿desde qué año|¿desde qué momento|¿desde cuándo|¿de cuándo|¿qué año|¿qué década|¿a qué edad|qué diámetro|qué proporción|qué porcentaje|qué tamaño|qué masa|qué grosor|qué espesor|entre qué valores/i;

if (!TEMA) {
  console.log('Falta --tema "el/la <tema en minúscula>"');
  process.exit(1);
}

for (const ruta of archivos) {
  const original = fs.readFileSync(ruta, 'utf8');
  const usaCRLF = original.includes('\r\n');
  const lineas = original.replace(/\r\n/g, '\n').split('\n');

  const h1 = lineas.find((l) => l.startsWith('# ')) || '';
  const capRaw = h1
    .replace(/^# /, '')
    .split(' · ')
    .find((p) => /^Cap[íi]tulo/i.test(p));
  if (!capRaw) {
    console.log(`  ${ruta}: no pude leer el capítulo del H1, lo salto`);
    continue;
  }
  const numCap = capRaw.match(/\d+/)[0];
  const refB = `en el capítulo ${numCap} sobre ${TEMA}, `;

  // Quita cualquier referencia previa tras "el libro de X, ": tanto la de
  // paréntesis "capítulo N (Título), " como una format-B anterior.
  const stripRe =
    /(el libro de [^,]+, )(?:capítulo \d+ \([^)]+\), |en el capítulo \d+ sobre [^,]+, )/;

  let conRef = 0;
  let sinRef = 0;

  const nuevas = lineas.map((linea) => {
    if (!CONECTORES.some((c) => linea.startsWith(c))) return linea;
    if (!linea.includes('el libro de ')) return linea;

    // 1. Normaliza: deja el enunciado sin ninguna referencia.
    const plano = linea.replace(stripRe, '$1');

    // 2. Decide si este reactivo necesita la referencia.
    if (FLOTA.test(plano)) {
      conRef++;
      return plano.replace(/(el libro de [^,]+, )/, `$1${refB}`);
    }
    sinRef++;
    return plano;
  });

  console.log(`  ${ruta}`);
  console.log(`      referencia: "${refB.trim()}"`);
  console.log(`      con referencia (dato suelto): ${conRef}`);
  console.log(`      sin referencia (se explica solo): ${sinRef}`);
  const ej = nuevas.find((l) => l.includes(refB));
  if (ej) console.log(`      ejemplo con: ${ej.slice(0, 115)}...`);

  if (ESCRIBIR) {
    const salida = nuevas.join('\n');
    fs.writeFileSync(ruta, usaCRLF ? salida.replace(/\n/g, '\r\n') : salida, 'utf8');
  }
}

console.log(ESCRIBIR ? '\n✓ Archivos actualizados.' : '\nModo prueba: no se escribió nada. Usa --escribir.');
