/**
 * Hace más específicos los enunciados del examen cultural: añade el CAPÍTULO y
 * su TEMA justo después de la mención del libro.
 *
 *   antes:  De acuerdo con el libro de Biología, ¿...?
 *   después: De acuerdo con el libro de Biología, capítulo 4 (La organización
 *            de las células), ¿...?
 *
 * El capítulo y el título se leen del encabezado H1 de cada archivo, no se
 * escriben a mano. Idempotente: si el enunciado ya trae "capítulo", lo salta.
 *
 * Uso:  node especificar-reactivos.js <archivo.md> [<archivo.md> ...]           → prueba
 *       node especificar-reactivos.js --escribir <archivo.md> [...]             → aplica
 */
const fs = require('fs');

const ESCRIBIR = process.argv.includes('--escribir');
const archivos = process.argv.slice(2).filter((a) => a !== '--escribir');

const CONECTORES = ['De acuerdo con', 'De conformidad con', 'En relación con'];

for (const ruta of archivos) {
  const original = fs.readFileSync(ruta, 'utf8');
  const usaCRLF = original.includes('\r\n');
  const lineas = original.replace(/\r\n/g, '\n').split('\n');

  // Capítulo y título desde el H1: "# Biología · Capítulo 4 · La organización de las células"
  const h1 = lineas.find((l) => l.startsWith('# ')) || '';
  const partes = h1.replace(/^# /, '').split(' · ');
  const capRaw = partes.find((p) => /^Cap[íi]tulo/i.test(p)); // "Capítulo 4"
  const titulo = partes[partes.length - 1]; // "La organización de las células"
  if (!capRaw || !titulo) {
    console.log(`  ${ruta}: no pude leer capítulo/título del H1, lo salto`);
    continue;
  }
  const cap = capRaw.replace(/^Cap/, 'cap'); // minúscula a media frase
  const inserto = `${cap} (${titulo}), `;

  let tocados = 0;
  const libroRe = /^(De acuerdo con|De conformidad con|En relación con) (el libro de [^,]+, )/;

  const nuevas = lineas.map((linea) => {
    if (!CONECTORES.some((c) => linea.startsWith(c))) return linea;
    if (!linea.includes('el libro de ')) return linea;
    if (linea.includes('capítulo') || linea.includes('capitulo')) return linea; // ya hecho
    const m = linea.match(libroRe);
    if (!m) return linea;
    tocados++;
    // El espacio entre el conector y "el libro" lo consume la regex pero no lo
    // captura: hay que reponerlo, o quedaría "De acuerdo conel libro".
    return linea.replace(libroRe, `$1 $2${inserto}`);
  });

  console.log(`  ${ruta}`);
  console.log(`      capítulo: ${cap} (${titulo})`);
  console.log(`      enunciados modificados: ${tocados}`);
  if (tocados > 0) {
    const ej = nuevas.find((l) => l.includes(inserto));
    console.log(`      ejemplo: ${ej.slice(0, 110)}...`);
  }

  if (ESCRIBIR && tocados > 0) {
    const salida = nuevas.join('\n');
    fs.writeFileSync(ruta, usaCRLF ? salida.replace(/\n/g, '\r\n') : salida, 'utf8');
  }
}

console.log(ESCRIBIR ? '\n✓ Archivos actualizados.' : '\nModo prueba: no se escribió nada. Usa --escribir.');
