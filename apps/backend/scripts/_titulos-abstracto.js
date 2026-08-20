/**
 * Títulos de los reactivos con IMAGEN de Razonamiento Abstracto (bloque 5).
 *
 * Los 32 reactivos se cargaron con el enunciado VACÍO: el aspirante veía la
 * figura sin saber qué se le preguntaba. Este script deja escrito el título de
 * cada uno, agrupado POR TIPO DE RAZONAMIENTO — mismo texto para el mismo tipo,
 * a propósito: así el aspirante reconoce de un vistazo qué le piden, como en el
 * examen real, en vez de releer un enunciado distinto cada vez.
 *
 * Los títulos también se pueden escribir a mano desde el panel
 * (Admin → Claves · Abstracto); esto existe para no tener que repetir 32 veces
 * el trabajo al montar OTRA base — la de producción el día del despliegue.
 *
 * Uso:
 *   node scripts/_titulos-abstracto.js              → MODO PRUEBA (no toca la base)
 *   node scripts/_titulos-abstracto.js --escribir   → escribe
 *
 * Es idempotente: correrlo dos veces deja lo mismo. Identifica cada reactivo por
 * el número de su imagen (ra-07.png → 7), no por id, porque los ids cambian de
 * una base a otra.
 */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ESCRIBIR = process.argv.includes('--escribir');

const MATRIZ = '¿Cuál figura completa la matriz?';
const SUCESION = '¿Cuál figura continúa la sucesión?';
const PLANTILLA = 'Al armar esta plantilla, ¿qué cubo se forma?';

/** ra-NN → título. Ver el porqué de cada excepción abajo. */
const TITULOS = {
  1: MATRIZ, 2: MATRIZ, 3: MATRIZ, 4: MATRIZ, 5: MATRIZ, 6: MATRIZ, 7: MATRIZ,
  // Son dados: nombrarlos ayuda más que decir "figura".
  8: '¿Cuál dado completa la matriz?',
  9: '¿Cuál figura completa la analogía?',
  // Las opciones son TIRAS completas, no figuras sueltas.
  10: '¿Cuál tira continúa la sucesión?',
  11: MATRIZ, 12: MATRIZ,
  13: '¿Cuál cubo es el mismo de arriba, visto desde otro ángulo?',
  14: PLANTILLA,
  15: SUCESION,
  // El hueco está EN MEDIO, no al final: decir "continúa" lo mandaría a buscar
  // donde no es.
  16: '¿Cuál figura falta en la sucesión?',
  // Este va al revés que los otros de plantilla, y ese cambio de dirección es
  // justo lo que el reactivo evalúa.
  17: '¿Cuál plantilla forma el cubo de arriba?',
  18: PLANTILLA, 19: PLANTILLA,
  20: SUCESION, 21: SUCESION,
  22: PLANTILLA,
  23: SUCESION, 24: SUCESION, 25: SUCESION, 26: SUCESION, 27: SUCESION,
  28: SUCESION, 29: SUCESION, 30: SUCESION, 31: SUCESION, 32: SUCESION,
};

/**
 * Correcciones al número de opciones, donde lo cargado no coincidía con lo que
 * enseña la imagen. Se revisaron las 32 una por una contra su figura.
 *   - ra-18: la imagen muestra CINCO opciones (A–E) y tenía cuatro guardadas,
 *     así que la quinta se veía en el dibujo y no se podía elegir.
 */
const OPCIONES = { 18: ['A', 'B', 'C', 'D', 'E'] };

(async () => {
  const reactivos = await prisma.reactivo.findMany({
    where: { bloqueId: 5, tema: 'razonamiento_abstracto' },
    select: { id: true, imagenUrl: true, enunciado: true, opciones: true, respuestaCorrecta: true },
    orderBy: { id: 'asc' },
  });

  if (!reactivos.length) {
    console.log('No hay reactivos de razonamiento abstracto en esta base. ¿Falta cargarlos?');
    return;
  }

  let porPoner = 0, yaIguales = 0, opcionesPorCambiar = 0;
  const avisos = [];

  for (const r of reactivos) {
    const m = (r.imagenUrl || '').match(/ra-(\d+)/);
    if (!m) { avisos.push(`reactivo ${r.id}: su imagen no dice ra-NN (${r.imagenUrl})`); continue; }
    const n = Number(m[1]);
    const titulo = TITULOS[n];
    if (!titulo) { avisos.push(`ra-${m[1]}: no hay título definido para este número`); continue; }

    if (r.enunciado === titulo) yaIguales++;
    else {
      porPoner++;
      if (ESCRIBIR) await prisma.reactivo.update({ where: { id: r.id }, data: { enunciado: titulo } });
    }

    const nuevas = OPCIONES[n];
    if (nuevas && JSON.stringify(r.opciones) !== JSON.stringify(nuevas)) {
      // No se toca si la clave se quedaría fuera: antes hay que revisar a mano.
      if (r.respuestaCorrecta && !nuevas.includes(r.respuestaCorrecta)) {
        avisos.push(`ra-${m[1]}: NO se cambian sus opciones — la clave "${r.respuestaCorrecta}" quedaría fuera`);
      } else {
        opcionesPorCambiar++;
        if (ESCRIBIR) await prisma.reactivo.update({ where: { id: r.id }, data: { opciones: nuevas } });
      }
    }
  }

  console.log(`Reactivos con imagen encontrados: ${reactivos.length}`);
  console.log(`Títulos ${ESCRIBIR ? 'puestos' : 'por poner'}: ${porPoner}   ·   ya estaban igual: ${yaIguales}`);
  console.log(`Opciones ${ESCRIBIR ? 'corregidas' : 'por corregir'}: ${opcionesPorCambiar}`);
  avisos.forEach((a) => console.log('  ⚠ ' + a));
  if (!ESCRIBIR) console.log('\nModo prueba: la base no se tocó. Para escribir:\n  node scripts/_titulos-abstracto.js --escribir');
})().finally(() => prisma.$disconnect());
