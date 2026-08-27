/**
 * Importa el banco del examen cultural (docs/examen-cultural/HCM/*.md)
 * a la tabla Reactivo con banco="cultural-hcm".
 *
 * Uso:
 *   npx ts-node scripts/importar-cultural.ts            → MODO PRUEBA (no toca la base)
 *   npx ts-node scripts/importar-cultural.ts --escribir → escribe a la base
 *
 * En modo prueba lee los 14 archivos, arma las filas, corre todas las
 * validaciones y reporta los números. No toca la base de datos.
 *
 * Los otros bancos (v1, remaster) no se tocan en ningún caso.
 *
 * DOS REGLAS QUE DECIDIÓ CARLO Y QUE ESTE SCRIPT CUMPLE
 * (ver docs/examen-cultural/README.md):
 *
 *   1. Las opciones se BARAJAN. En los .md la correcta se escribe casi siempre
 *      en A porque es cómodo de revisar, pero eso no debe llegar al aspirante.
 *      Aquí se desordenan y se recalcula cuál quedó siendo la correcta.
 *
 *   2. Las notas "> ..." NO son para el aspirante. Explican el reactivo
 *      nombrando las opciones por su letra ("el distractor B invierte...") y
 *      están escritas contra el orden del .md. Si se mostraran después de
 *      barajar, mentirían. Se guardan en notaRevisor, que es campo interno.
 */

import { PrismaClient } from '@prisma/client';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

const DIR = path.resolve(__dirname, '../../../docs/examen-cultural/HCM');
const BANCO = 'cultural-hcm';
const PLANTEL_HCM = 1;
const ANIO = 2026;
const ESCRIBIR = process.argv.includes('--escribir');

/** Prefijo del archivo → materia. Cada materia es un bloque del examen. */
const MATERIAS: Record<string, { nombre: string; orden: number }> = {
  espanol: { nombre: 'Español', orden: 1 },
  algebra: { nombre: 'Álgebra', orden: 2 },
  historia: { nombre: 'Historia', orden: 3 },
  geografia: { nombre: 'Geografía', orden: 4 },
};

const LETRAS = ['A', 'B', 'C', 'D'] as const;
type Letra = (typeof LETRAS)[number];

interface Fila {
  archivo: string;
  materia: string;
  numero: number;
  enunciado: string;
  /** En el orden del .md: índice 0 = opción A, 1 = B, 2 = C, 3 = D. */
  opciones: string[];
  /** Índice (0-3) de la correcta dentro de `opciones`, en el orden del .md. */
  correcta: number;
  referencia: string;
  tema: string;
  justificacion: string;
  notaRevisor: string | null;
  /**
   * Motivo por el que se retiró del banco, o null si está vivo.
   *
   * Un retirado NO se importa, pero SIGUE EN EL ARCHIVO con su número: la
   * numeración de cada .md tiene que quedar corrida, y borrar uno de en medio
   * obligaría a renumerar todos los siguientes.
   * Ver docs/examen-cultural/auditoria/README.md.
   */
  retirado: string | null;
}

/** Quita las negritas del markdown para poder comparar texto. */
const limpio = (s: string) => s.replace(/\*\*/g, '').trim();

/**
 * Baraja de forma DETERMINISTA: el mismo reactivo siempre queda en el mismo
 * orden, corras el importador las veces que corras.
 *
 * Se hace así a propósito. Con un azar normal, cada importación reordenaría
 * todo y sería imposible reproducir un reporte de "la pregunta 40 tiene mal la
 * respuesta": al volver a importar, la 40 ya sería otra cosa. Sembrando el azar
 * con el propio enunciado, el orden es estable y el bug se puede perseguir.
 */
function barajarDeterminista<T>(items: T[], semilla: string): T[] {
  const h = crypto.createHash('sha256').update(semilla).digest();
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    // Se toman 4 bytes distintos por cada intercambio, no uno. Con un solo
    // byte, "byte % 3" reparte 256 valores entre 3 casillas —85, 85, 86— y esa
    // casilla de más inclina el sorteo lo suficiente para notarse en el
    // recuento final. Con 32 bits el sesgo queda en una parte entre mil
    // millones, que ya no mueve nada.
    const off = (i * 4) % (h.length - 3);
    const j = h.readUInt32BE(off) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Lee un .md y devuelve sus reactivos.
 *
 * El formato es el del Anexo "H" tal como quedó en el banco:
 *
 *   ### 122
 *   <enunciado>
 *   - A. <opción>   (A a D)
 *   **Respuesta:** A
 *   **Referencia:** <libro, editorial, página>
 *   **Subtema:** <tema>
 *   <justificación: cita textual del libro>
 *   > <nota para quien revisa, opcional>
 */
function parsearArchivo(archivo: string): Fila[] {
  const texto = fs.readFileSync(path.join(DIR, archivo), 'utf8').replace(/\r\n/g, '\n');
  const lineas = texto.split('\n');

  const prefijo = archivo.split('-')[0];
  const materia = MATERIAS[prefijo]?.nombre ?? '(desconocida)';

  const filas: Fila[] = [];
  let actual: Partial<Fila> & { opciones: string[] } = { opciones: [] };
  let dentro = false;

  const cerrar = () => {
    if (dentro && actual.numero !== undefined) {
      filas.push({
        archivo,
        materia,
        numero: actual.numero,
        enunciado: actual.enunciado ?? '',
        opciones: actual.opciones,
        correcta: actual.correcta ?? -1,
        referencia: actual.referencia ?? '',
        tema: actual.tema ?? '',
        justificacion: (actual.justificacion ?? '').trim(),
        notaRevisor: actual.notaRevisor ? actual.notaRevisor.trim() : null,
        retirado: actual.retirado ?? null,
      });
    }
    actual = { opciones: [] };
    dentro = false;
  };

  for (const cruda of lineas) {
    const linea = cruda.trim();

    // Un "### <número>" abre reactivo. Un "### <texto>" no es un reactivo:
    // en este banco los encabezados de prosa van en ## o ####.
    const cabecera = linea.match(/^### (\d+)$/);
    if (cabecera) {
      cerrar();
      dentro = true;
      actual = { opciones: [], numero: parseInt(cabecera[1], 10) };
      continue;
    }

    // Un separador o un encabezado de sección cierran el reactivo en curso.
    if (linea === '---' || /^#{1,4} /.test(linea)) {
      cerrar();
      continue;
    }

    if (!dentro || linea === '') continue;

    const opcion = linea.match(/^- ([A-D])\. (.+)$/);
    if (opcion) {
      actual.opciones.push(opcion[2].trim());
      continue;
    }

    const respuesta = linea.match(/^\*\*Respuesta:\*\*\s*(.+)$/);
    if (respuesta) {
      const letra = limpio(respuesta[1]) as Letra;
      actual.correcta = LETRAS.indexOf(letra);
      continue;
    }

    const referencia = linea.match(/^\*\*Referencia:\*\*\s*(.+)$/);
    if (referencia) {
      actual.referencia = limpio(referencia[1]).replace(/\*/g, '');
      continue;
    }

    const subtema = linea.match(/^\*\*Subtema:\*\*\s*(.+)$/);
    if (subtema) {
      actual.tema = limpio(subtema[1]);
      continue;
    }

    const retirado = linea.match(/^\*\*Retirado:\*\*\s*(.+)$/);
    if (retirado) {
      actual.retirado = limpio(retirado[1]);
      continue;
    }

    // Las notas "> ..." pueden ocupar varias líneas.
    if (linea.startsWith('>')) {
      const trozo = linea.replace(/^>\s?/, '');
      actual.notaRevisor = actual.notaRevisor ? `${actual.notaRevisor} ${trozo}` : trozo;
      continue;
    }

    // Cualquier otra línea de texto: antes de las opciones es el enunciado,
    // después de los tres campos es la justificación.
    if (actual.opciones.length === 0 && !actual.enunciado) {
      actual.enunciado = linea;
    } else if (actual.tema) {
      actual.justificacion = actual.justificacion ? `${actual.justificacion} ${linea}` : linea;
    }
  }

  cerrar();
  return filas;
}

/** Devuelve la lista de problemas encontrados. Vacía = todo bien. */
function validar(filas: Fila[], conteosDeclarados: Record<string, number>): string[] {
  const problemas: string[] = [];
  const donde = (f: Fila) => `${f.archivo} #${f.numero}`;

  // A un retirado no se le exige nada: no va a la base. Sólo cuenta para que la
  // numeración del archivo siga corrida.
  for (const f of filas.filter((x) => !x.retirado)) {
    if (f.opciones.length !== 4) {
      problemas.push(`${donde(f)}: tiene ${f.opciones.length} opciones, deben ser 4`);
    }
    if (f.correcta < 0) {
      problemas.push(`${donde(f)}: la respuesta correcta no es una letra A-D`);
    }
    if (!f.enunciado) problemas.push(`${donde(f)}: sin enunciado`);
    if (!f.referencia) problemas.push(`${donde(f)}: sin referencia`);
    if (!f.tema) problemas.push(`${donde(f)}: sin subtema`);
    if (!f.justificacion) problemas.push(`${donde(f)}: sin justificación`);

    // La referencia tiene que traer página: es la regla dura del banco.
    if (f.referencia && !/Pág\.\s*\d+/i.test(f.referencia)) {
      problemas.push(`${donde(f)}: la referencia no trae página → "${f.referencia}"`);
    }

    // Dos opciones iguales harían el reactivo irresoluble.
    const unicas = new Set(f.opciones.map((o) => o.toLowerCase()));
    if (unicas.size !== f.opciones.length) {
      problemas.push(`${donde(f)}: tiene opciones repetidas`);
    }
  }

  // Numeración: corrida, sin huecos ni repetidos, dentro de cada archivo.
  const porArchivo = new Map<string, number[]>();
  for (const f of filas) {
    if (!porArchivo.has(f.archivo)) porArchivo.set(f.archivo, []);
    porArchivo.get(f.archivo)!.push(f.numero);
  }
  for (const [archivo, numeros] of porArchivo) {
    const repetidos = numeros.filter((n, i) => numeros.indexOf(n) !== i);
    if (repetidos.length) {
      problemas.push(`${archivo}: números repetidos → ${[...new Set(repetidos)].join(', ')}`);
    }
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] !== i + 1) {
        problemas.push(
          `${archivo}: la numeración salta — se esperaba ${i + 1} y vino ${numeros[i]}`,
        );
        break;
      }
    }

    // El pie "**Reactivos en este archivo:** N" no debe mentir, y cuenta los
    // VIVOS: es el número que le importa a quien arma un examen.
    const vivos = filas.filter((f) => f.archivo === archivo && !f.retirado).length;
    const declarado = conteosDeclarados[archivo];
    if (declarado !== undefined && declarado !== vivos) {
      problemas.push(
        `${archivo}: el pie declara ${declarado} reactivos pero hay ${vivos} vivos`,
      );
    }
  }

  return problemas;
}

async function main() {
  const archivos = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .sort();

  const filas: Fila[] = [];
  const conteosDeclarados: Record<string, number> = {};

  for (const archivo of archivos) {
    const texto = fs.readFileSync(path.join(DIR, archivo), 'utf8');
    const m = texto.match(/\*\*Reactivos en este archivo:\*\*\s*(\d+)/);
    if (m) conteosDeclarados[archivo] = parseInt(m[1], 10);
    filas.push(...parsearArchivo(archivo));
  }

  // ---- retirados ----
  // Se apartan aquí: de este punto en adelante el importador trabaja sólo con
  // los vivos. Se reporta siempre, aunque sean cero, para que nadie se pregunte
  // si el importador los está viendo.
  const retiradas = filas.filter((f) => f.retirado);
  const vivas = filas.filter((f) => !f.retirado);
  const porMotivo = new Map<string, number>();
  for (const f of retiradas) {
    const familia = (f.retirado ?? '').split('·')[0].trim() || '(sin motivo)';
    porMotivo.set(familia, (porMotivo.get(familia) ?? 0) + 1);
  }
  console.log('');
  console.log(
    `Retirados (NO se importan): ${retiradas.length}` +
      (porMotivo.size
        ? '  → ' + [...porMotivo].map(([m, n]) => `${m} ${n}`).join(', ')
        : ''),
  );

  // ---- reporte de lectura ----
  console.log('');
  console.log(`Leídos ${archivos.length} archivos de ${DIR}`);
  console.log('');
  // Se cuentan los VIVOS: es el número de reactivos que de verdad va a la base.
  const porMateria = new Map<string, number>();
  for (const f of vivas) porMateria.set(f.materia, (porMateria.get(f.materia) ?? 0) + 1);
  for (const [materia, n] of [...porMateria].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${materia.padEnd(12)} ${String(n).padStart(5)} reactivos`);
  }
  console.log(`  ${'TOTAL'.padEnd(12)} ${String(vivas.length).padStart(5)} reactivos`);

  // ---- validación ----
  const problemas = validar(filas, conteosDeclarados);
  console.log('');
  if (problemas.length === 0) {
    console.log('✓ Validación: sin problemas.');
  } else {
    console.log(`✗ Validación: ${problemas.length} problemas`);
    for (const p of problemas.slice(0, 30)) console.log(`    ${p}`);
    if (problemas.length > 30) console.log(`    ... y ${problemas.length - 30} más`);
  }

  // ---- barajado ----
  const barajadas = vivas.map((f) => {
    const conIndice = f.opciones.map((texto, i) => ({ texto, era: i }));
    const nuevo = barajarDeterminista(conIndice, f.enunciado);
    return {
      ...f,
      opcionesBarajadas: nuevo.map((o) => o.texto),
      correctaBarajada: nuevo.findIndex((o) => o.era === f.correcta),
    };
  });

  const antes: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  const despues: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const f of barajadas) {
    antes[LETRAS[f.correcta]]++;
    despues[LETRAS[f.correctaBarajada]]++;
  }
  console.log('');
  console.log('Posición de la respuesta correcta:');
  console.log(
    `  en los .md   A:${antes.A}  B:${antes.B}  C:${antes.C}  D:${antes.D}`,
  );
  console.log(
    `  ya barajada  A:${despues.A}  B:${despues.B}  C:${despues.C}  D:${despues.D}`,
  );

  const conNota = barajadas.filter((f) => f.notaRevisor).length;
  console.log('');
  console.log(`Notas del revisor: ${conNota} (van a notaRevisor, NO se le muestran al aspirante)`);

  if (!ESCRIBIR) {
    console.log('');
    console.log('Modo prueba: la base no se tocó. Para escribir:');
    console.log('  npx ts-node scripts/importar-cultural.ts --escribir');
    await prisma.$disconnect();
    return;
  }

  if (problemas.length > 0) {
    console.log('');
    console.log('✗ Hay problemas de validación. No se escribe nada. Corrígelos y vuelve a correr.');
    await prisma.$disconnect();
    process.exit(1);
  }

  // ---- examen y bloques ----
  console.log('');
  let examen = await prisma.examen.findFirst({
    where: { tipo: 'cultural', plantelId: PLANTEL_HCM, anio: ANIO },
  });
  if (!examen) {
    examen = await prisma.examen.create({
      data: {
        tipo: 'cultural',
        nombre: `Examen cultural HCM ${ANIO}`,
        duracionMin: 120,
        calificable: true,
        plantelId: PLANTEL_HCM,
        anio: ANIO,
      },
    });
    console.log(`Examen creado: [${examen.id}] ${examen.nombre}`);
  } else {
    console.log(`Examen existente: [${examen.id}] ${examen.nombre}`);
  }

  const bloquePorMateria = new Map<string, number>();
  for (const { nombre, orden } of Object.values(MATERIAS)) {
    let bloque = await prisma.bloque.findFirst({
      where: { examenId: examen.id, nombre },
    });
    if (!bloque) {
      bloque = await prisma.bloque.create({
        data: { examenId: examen.id, nombre, orden, tiempoLimite: 30 },
      });
      console.log(`  bloque creado: [${bloque.id}] ${nombre}`);
    }
    bloquePorMateria.set(nombre, bloque.id);
  }

  // ---- escritura ----
  const yaHay = await prisma.reactivo.count({ where: { banco: BANCO } });
  if (yaHay > 0) {
    console.log('');
    console.log(`Borrando ${yaHay} reactivos ${BANCO} previos (los otros bancos no se tocan)...`);
    await prisma.reactivo.deleteMany({ where: { banco: BANCO } });
  }

  console.log(`Insertando ${barajadas.length} reactivos...`);
  await prisma.reactivo.createMany({
    data: barajadas.map((f) => ({
      bloqueId: bloquePorMateria.get(f.materia)!,
      enunciado: f.enunciado,
      tipo: 'opcion_multiple',
      opciones: f.opcionesBarajadas,
      // El TEXTO de la opción correcta, no su letra.
      //
      // El simulador manda de vuelta el texto de lo que eligió el aspirante
      // (`responder(opcionTexto)`), y la calificación es una comparación
      // directa contra este campo. Guardar aquí "A" hacía que ninguna
      // respuesta coincidiera nunca y el examen calificara todo mal.
      // El banco v1 del psicométrico siempre guardó el texto; esto lo alinea.
      respuestaCorrecta: f.opcionesBarajadas[f.correctaBarajada],
      explicacion: f.justificacion,
      referencia: f.referencia,
      notaRevisor: f.notaRevisor,
      tema: f.tema,
      banco: BANCO,
      numeroEnEje: f.numero,
    })),
  });

  const final = await prisma.reactivo.count({ where: { banco: BANCO } });
  console.log(`✓ Listo: ${final} reactivos ${BANCO} en la base.`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
