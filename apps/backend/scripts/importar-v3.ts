/**
 * Importa el banco de personalidad **v3** (docs/personalidad-remaster/v3/*.md)
 * a la tabla Reactivo con banco="v3" y opciones Verdadero/Falso.
 *
 * Uso:
 *   npx ts-node scripts/importar-v3.ts            → MODO PRUEBA (no toca la base)
 *   npx ts-node scripts/importar-v3.ts --escribir → escribe a la base
 *
 * Hermano de importar-remaster.ts (banco "remaster", escala Sí/No). Diferencias:
 * - Lee docs/personalidad-remaster/v3/ y son 33 ejes (incluye 08 y 30-33).
 * - Escala Verdadero/Falso.
 * - Parser flexible para los DOS formatos de tabla del banco v3:
 *     · Rasgos (y eje 28): | # | enun | pol | par | sub | marco |, trampas/críticos inline.
 *     · Valores (08, 30-33): banco | # | enun | pol | par | sub | (sin marco) +
 *       trampas/críticos en tablas aparte | # | enun | tipo | sub |, bajo secciones "### ".
 *
 * El banco viejo (banco="v1") y el "remaster" no se tocan en ningún caso.
 */

import { PrismaClient, Polaridad, TipoTrampa } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

const DIR = path.resolve(__dirname, '../../../docs/personalidad-remaster/v3');
const BLOQUE_PERSONALIDAD = 6;
const BANCO = 'v3';
const ESCRIBIR = process.argv.includes('--escribir');

/** Eje → slug de tema (33 ejes; alimenta el peso de TemaPrioridad). */
const TEMA_POR_EJE: Record<number, string> = {
  1: 'suicidio',
  2: 'depresion',
  3: 'ansiedad',
  4: 'manejo_emocional',
  5: 'control_ira',
  6: 'adicciones',
  7: 'autoestima',
  8: 'patriotismo',
  9: 'empatia',
  10: 'disciplina',
  11: 'liderazgo',
  12: 'corrupcion',
  13: 'liderazgo_autoritario',
  14: 'autocuidado',
  15: 'vinculos',
  16: 'lealtad',
  17: 'honor',
  18: 'responsabilidad',
  19: 'honestidad_integridad',
  20: 'confianza',
  21: 'autoridad_obediencia',
  22: 'adaptabilidad',
  23: 'estres_presion',
  24: 'resiliencia',
  25: 'influenciabilidad',
  26: 'sociabilidad',
  27: 'control_conductual',
  28: 'espiritu_cuerpo',
  29: 'valores_aplicados',
  30: 'igualdad',
  31: 'abnegacion',
  32: 'honradez',
  33: 'valor',
};

interface Fila {
  eje: number;
  subLote: number;
  numeroEnEje: number;
  enunciado: string;
  polaridad: Polaridad | null;
  parNumero: number | null;
  tipoTrampa: TipoTrampa | null;
  esCritico: boolean;
  noPuntua: boolean;
  subnota: string;
  marco: string;
  crossRef: string | null;
  tema: string;
  archivo: string;
}

/** Quita negritas y espacios para poder buscar texto en subnota/marco. */
const limpio = (s: string) => s.replace(/\*\*/g, '').trim();

function detectarTipoTrampa(texto: string): TipoTrampa | null {
  const t = texto.toLowerCase();
  if (/trampa-l\b/.test(t)) return TipoTrampa.L;
  if (/trampa-k\b/.test(t)) return TipoTrampa.K;
  if (/trampa-f\b/.test(t)) return TipoTrampa.F;
  return null;
}

function detectarCrossRef(subnota: string, marco: string): string | null {
  const texto = subnota + ' | ' + marco;
  const m =
    texto.match(/receptor\s+cross\s+([^·|]+)/i) ||
    texto.match(/CROSS\s*↔\s*([^|]+)/i) ||
    texto.match(/cross\s+vs\s+([^|·]+)/i);
  return m ? limpio(m[1]).replace(/\s+/g, ' ').trim() : null;
}

const EJE_POR_NOMBRE: Record<string, number> = {
  'vínculos': 15,
  'adaptabilidad': 22,
  'adicciones': 6,
  'respeto a autoridad': 21,
};

/** Referencias tipo "45 e4", "75 sub 5 e9", "45/75 eje 3" → ["3:45", "3:75"]. */
function extraerRefs(texto: string): string[] {
  const out: string[] = [];
  const re = /(\d{1,3})(?:\/(\d{1,3}))?\s*(?:sub\s*\d+\s*)?e(?:je)?\s*(\d{1,2})/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(texto))) {
    out.push(`${m[3]}:${m[1]}`);
    if (m[2]) out.push(`${m[3]}:${m[2]}`);
  }
  return [...new Set(out)];
}

function normalizarCrossRefs(filas: Fila[]): string[] {
  const clave = (f: Fila) => `${f.eje}:${f.numeroEnEje}`;
  const esReceptor = (f: Fila) => /receptor\s+cross/i.test(f.subnota + ' ' + f.marco);

  const reclamadoPor = new Map<string, string[]>();
  for (const f of filas) {
    if (!f.crossRef || !esReceptor(f)) continue;
    for (const ref of extraerRefs(f.subnota + ' ' + f.marco)) {
      if (!reclamadoPor.has(ref)) reclamadoPor.set(ref, []);
      reclamadoPor.get(ref)!.push(clave(f));
    }
  }

  const sinResolver: string[] = [];
  for (const f of filas) {
    if (!f.crossRef) continue;

    if (esReceptor(f)) {
      f.crossRef = 'recibe:' + extraerRefs(f.subnota + ' ' + f.marco).join(',');
      continue;
    }

    const reclaman = reclamadoPor.get(clave(f));
    if (reclaman) {
      f.crossRef = 'emite:' + reclaman.join(',');
      continue;
    }

    const eje = EJE_POR_NOMBRE[f.crossRef.toLowerCase().replace(/\s+/g, ' ').trim()];
    if (eje) {
      f.crossRef = 'emite:' + eje;
      continue;
    }

    sinResolver.push(`e${f.eje}#${f.numeroEnEje} → ${f.crossRef}`);
    f.crossRef = 'pendiente:' + f.crossRef;
  }

  return sinResolver;
}

/**
 * Parser flexible para los dos formatos del banco v3.
 *
 * subLote: se toma de "## Sub-lote N" (rasgos); en los ejes de valores, que usan
 * secciones "### A ·", "### Trampas", etc., se cuenta incrementalmente.
 *
 * Cada fila se clasifica por su TERCERA columna:
 *   POS/NEG/TRAM/DESC → fila de banco (par en la 4ª, subnota 5ª, marco 6ª opcional).
 *   "trampa-X (V)"     → trampa de tabla aparte (pol=TRAMPA, tipo de la 3ª col, subnota 4ª).
 *   "CRÍTICO (V)"      → gatillo crítico de tabla aparte (pol=NEGATIVA — endorsar V = riesgo).
 */
function parsearArchivo(archivo: string): Fila[] {
  const eje = parseInt(archivo.slice(0, 2), 10);
  const tema = TEMA_POR_EJE[eje];
  if (!tema) throw new Error(`Eje ${eje} (${archivo}) no tiene tema asignado en TEMA_POR_EJE`);

  const filas: Fila[] = [];
  let subLote = 0;

  for (const linea of fs.readFileSync(path.join(DIR, archivo), 'utf8').split(/\r?\n/)) {
    const hSub = linea.match(/^##\s*Sub-lote\s*(\d+)/i);
    if (hSub) {
      subLote = parseInt(hSub[1], 10);
      continue;
    }
    // Sección de valores ("### A · …", "### Trampas …", "### Gatillos …").
    if (/^###\s+/.test(linea)) {
      subLote = subLote < 1 ? 1 : subLote + 1;
      continue;
    }

    if (!/^\|\s*\d{1,3}\s*\|/.test(linea)) continue;
    if (subLote === 0) continue;

    const cells = linea.replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map(limpio);
    if (cells.length < 3) continue;

    const num = parseInt(cells[0], 10);
    const enun = cells[1];
    const c3 = cells[2];
    const c3u = c3.toUpperCase();

    let polaridad: Polaridad | null;
    let parNumero: number | null = null;
    let subnota = '';
    let marco = '';
    let tipoTrampa: TipoTrampa | null = null;
    let esCritico = false;
    let noPuntua = false;

    if (['POS', 'NEG', 'TRAM', 'DESC'].includes(c3u)) {
      // Formato banco (rasgos + banco de valores).
      polaridad =
        c3u === 'POS' ? Polaridad.POSITIVA
        : c3u === 'NEG' ? Polaridad.NEGATIVA
        : c3u === 'TRAM' ? Polaridad.TRAMPA
        : null; // DESC no puntúa
      noPuntua = c3u === 'DESC';
      const parTxt = cells[3] ?? '';
      parNumero = /^\d+$/.test(parTxt) ? parseInt(parTxt, 10) : null;
      subnota = cells[4] ?? '';
      marco = cells[5] ?? '';
      tipoTrampa = detectarTipoTrampa(subnota + ' ' + marco);
      // Sensible a mayúsculas a propósito: el marcador real es "CRÍTICO"; una
      // subnota descriptiva como "patrón crítico" (minúsculas) NO es un gatillo.
      esCritico = /CRÍTICO/.test(subnota);
    } else if (/trampa-[lkf]/i.test(c3)) {
      // Tabla de trampas de valores: | # | enun | trampa-X (V) | sub |
      polaridad = Polaridad.TRAMPA;
      subnota = cells[3] ?? '';
      tipoTrampa = detectarTipoTrampa(c3 + ' ' + subnota);
    } else if (/CR[ÍI]TICO/.test(c3)) {
      // Tabla de gatillos crítico de valores: | # | enun | CRÍTICO (V) | sub |
      polaridad = Polaridad.NEGATIVA; // endorsar Verdadero = riesgo
      esCritico = true;
      subnota = cells[3] ?? '';
    } else {
      continue; // no es fila de reactivo (cabecera/separador)
    }

    filas.push({
      eje,
      subLote,
      numeroEnEje: num,
      enunciado: enun,
      polaridad,
      parNumero,
      tipoTrampa,
      esCritico,
      noPuntua,
      subnota,
      marco,
      crossRef: detectarCrossRef(subnota, marco),
      tema,
      archivo,
    });
  }
  return filas;
}

function validar(filas: Fila[]) {
  const problemas: string[] = [];
  const avisos: string[] = [];
  const porEje = new Map<number, Fila[]>();
  for (const f of filas) {
    if (!porEje.has(f.eje)) porEje.set(f.eje, []);
    porEje.get(f.eje)!.push(f);
  }

  // 1. numeración continua por eje
  for (const [eje, fs_] of porEje) {
    const nums = fs_.map((f) => f.numeroEnEje).sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        problemas.push(`eje ${eje}: numeración rota — se esperaba ${i + 1} y hay ${nums[i]}`);
        break;
      }
    }
  }

  // 2. parejas recíprocas
  for (const [eje, fs_] of porEje) {
    const porNum = new Map(fs_.map((f) => [f.numeroEnEje, f]));
    for (const f of fs_) {
      if (f.parNumero === null) continue;
      const pareja = porNum.get(f.parNumero);
      if (!pareja) {
        problemas.push(`eje ${eje} #${f.numeroEnEje}: apunta a la pareja ${f.parNumero} que no existe`);
      } else if (pareja.parNumero !== f.numeroEnEje) {
        problemas.push(`eje ${eje} #${f.numeroEnEje} ↔ ${f.parNumero}: la pareja no es recíproca`);
      } else if (pareja.polaridad === f.polaridad && f.polaridad !== null) {
        // Anclas clínicas: dos reactivos de la misma polaridad que miden un
        // criterio en ventana temporal (PHQ-9, inicio de consumo, etc.). No es error.
        if (f.numeroEnEje < f.parNumero) {
          avisos.push(`eje ${eje} #${f.numeroEnEje} ↔ ${f.parNumero}: ancla (ambos ${f.polaridad}), no par de coherencia`);
        }
      }
    }
  }

  // 3. trampas sin tipo
  for (const f of filas) {
    if (f.polaridad === Polaridad.TRAMPA && !f.tipoTrampa) {
      problemas.push(`eje ${f.eje} #${f.numeroEnEje}: es TRAMPA pero no se detectó tipo L/K/F`);
    }
  }

  // 4. enunciados duplicados
  const vistos = new Map<string, string>();
  for (const f of filas) {
    const k = f.enunciado.toLowerCase();
    if (vistos.has(k)) problemas.push(`enunciado duplicado: "${f.enunciado.slice(0, 60)}…" (${vistos.get(k)} y e${f.eje}#${f.numeroEnEje})`);
    else vistos.set(k, `e${f.eje}#${f.numeroEnEje}`);
  }

  // 5. enunciados vacíos o sospechosamente largos
  for (const f of filas) {
    if (!f.enunciado) problemas.push(`eje ${f.eje} #${f.numeroEnEje}: enunciado vacío`);
    else if (f.enunciado.split(/\s+/).length > 40) problemas.push(`eje ${f.eje} #${f.numeroEnEje}: enunciado de ${f.enunciado.split(/\s+/).length} palabras`);
  }

  return { problemas, avisos };
}

function generarEstado(
  filas: Fila[],
  porEje: Map<number, Fila[]>,
  problemas: string[],
  avisos: string[],
): string {
  const tot = (fn: (f: Fila) => boolean) => filas.filter(fn).length;
  const L: string[] = [];
  L.push('# Estado del banco de personalidad v3');
  L.push('');
  L.push('**Archivo generado — no lo edites a mano.** Lo escribe `apps/backend/scripts/importar-v3.ts`.');
  L.push('');
  L.push('## Por eje');
  L.push('');
  L.push('| eje | tema | total | POS | NEG | TRAM | DESC | crít | pares | 🎖? |');
  L.push('|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|');
  for (const eje of [...porEje.keys()].sort((a, b) => a - b)) {
    const f = porEje.get(eje)!;
    const c = (p: Polaridad | null) => f.filter((x) => x.polaridad === p).length;
    L.push(
      `| ${eje} | ${TEMA_POR_EJE[eje]} | ${f.length} | ${c(Polaridad.POSITIVA)} | ` +
        `${c(Polaridad.NEGATIVA)} | ${c(Polaridad.TRAMPA)} | ` +
        `${f.filter((x) => x.noPuntua).length} | ${f.filter((x) => x.esCritico).length} | ` +
        `${f.filter((x) => x.parNumero !== null).length / 2} | ` +
        `${f.some((x) => x.enunciado.includes('🎖')) ? 'sí' : '—'} |`,
    );
  }
  L.push(
    `| | **TOTAL** | **${filas.length}** | ${tot((f) => f.polaridad === Polaridad.POSITIVA)} | ` +
      `${tot((f) => f.polaridad === Polaridad.NEGATIVA)} | ${tot((f) => f.polaridad === Polaridad.TRAMPA)} | ` +
      `${tot((f) => f.noPuntua)} | ${tot((f) => f.esCritico)} | ` +
      `${tot((f) => f.parNumero !== null) / 2} | |`,
  );
  L.push('');
  L.push('## Trampas de validez');
  L.push('');
  L.push('| tipo | cantidad |');
  L.push('|---|---:|');
  L.push(`| L (Lie) | ${tot((f) => f.tipoTrampa === TipoTrampa.L)} |`);
  L.push(`| K (Defensiveness) | ${tot((f) => f.tipoTrampa === TipoTrampa.K)} |`);
  L.push(`| F (Infrequency) | ${tot((f) => f.tipoTrampa === TipoTrampa.F)} |`);
  L.push('');
  L.push('## Validaciones');
  L.push('');
  L.push(problemas.length === 0 ? 'Sin problemas.' : `**${problemas.length} problema(s):**`);
  if (problemas.length > 0) {
    L.push('');
    problemas.forEach((p) => L.push(`- ${p}`));
  }
  if (avisos.length > 0) {
    L.push('');
    L.push(`### Anclas detectadas (${avisos.length})`);
    L.push('');
    avisos.forEach((a) => L.push(`- ${a}`));
  }
  L.push('');
  return L.join('\n');
}

async function main() {
  console.log(ESCRIBIR ? '=== MODO ESCRITURA ===' : '=== MODO PRUEBA (no toca la base) ===');
  console.log('');

  const archivos = fs.readdirSync(DIR).filter((f) => /^\d{2}-.*\.md$/.test(f)).sort();
  const filas: Fila[] = [];
  for (const a of archivos) filas.push(...parsearArchivo(a));

  normalizarCrossRefs(filas);

  const porEje = new Map<number, Fila[]>();
  for (const f of filas) {
    if (!porEje.has(f.eje)) porEje.set(f.eje, []);
    porEje.get(f.eje)!.push(f);
  }

  console.log('eje  tema                     total   POS   NEG  TRAM  DESC  crít  pares');
  console.log('-'.repeat(76));
  for (const eje of [...porEje.keys()].sort((a, b) => a - b)) {
    const f = porEje.get(eje)!;
    const c = (p: Polaridad | null) => f.filter((x) => x.polaridad === p).length;
    console.log(
      String(eje).padStart(3) + '  ' +
      (TEMA_POR_EJE[eje] ?? '?').padEnd(24) +
      String(f.length).padStart(5) +
      String(c(Polaridad.POSITIVA)).padStart(6) +
      String(c(Polaridad.NEGATIVA)).padStart(6) +
      String(c(Polaridad.TRAMPA)).padStart(6) +
      String(f.filter((x) => x.noPuntua).length).padStart(6) +
      String(f.filter((x) => x.esCritico).length).padStart(6) +
      String(f.filter((x) => x.parNumero !== null).length / 2).padStart(7),
    );
  }
  console.log('-'.repeat(76));
  const tot = (fn: (f: Fila) => boolean) => filas.filter(fn).length;
  console.log(
    'TOTAL'.padEnd(29) +
    String(filas.length).padStart(5) +
    String(tot((f) => f.polaridad === Polaridad.POSITIVA)).padStart(6) +
    String(tot((f) => f.polaridad === Polaridad.NEGATIVA)).padStart(6) +
    String(tot((f) => f.polaridad === Polaridad.TRAMPA)).padStart(6) +
    String(tot((f) => f.noPuntua)).padStart(6) +
    String(tot((f) => f.esCritico)).padStart(6) +
    String(tot((f) => f.parNumero !== null) / 2).padStart(7),
  );
  console.log('');
  console.log('trampas por tipo:',
    'L=' + tot((f) => f.tipoTrampa === TipoTrampa.L),
    'K=' + tot((f) => f.tipoTrampa === TipoTrampa.K),
    'F=' + tot((f) => f.tipoTrampa === TipoTrampa.F));

  const { problemas, avisos } = validar(filas);
  console.log('');
  if (problemas.length === 0) {
    console.log('✓ Validaciones: sin problemas');
  } else {
    console.log(`✗ Validaciones: ${problemas.length} problema(s)`);
    problemas.slice(0, 40).forEach((p) => console.log('   - ' + p));
    if (problemas.length > 40) console.log(`   … y ${problemas.length - 40} más`);
  }
  if (avisos.length > 0) {
    console.log(`ℹ Avisos (no bloquean): ${avisos.length} ancla(s) detectada(s)`);
  }

  const estado = generarEstado(filas, porEje, problemas, avisos);
  const rutaEstado = path.join(DIR, 'ESTADO.md');
  const previo = fs.existsSync(rutaEstado) ? fs.readFileSync(rutaEstado, 'utf8') : null;
  if (previo !== estado) {
    fs.writeFileSync(rutaEstado, estado, 'utf8');
    console.log(previo === null ? '\nESTADO.md (v3) creado.' : '\nESTADO.md (v3) actualizado.');
  } else {
    console.log('\nESTADO.md (v3) sin cambios.');
  }

  const yaHay = await prisma.reactivo.count({ where: { banco: BANCO } });
  console.log('');
  console.log(`En la base ahora: ${yaHay} reactivos banco="${BANCO}"`);

  if (!ESCRIBIR) {
    console.log('\nModo prueba: la base no se tocó. Para escribir:');
    console.log('  npx ts-node scripts/importar-v3.ts --escribir');
    await prisma.$disconnect();
    return;
  }

  if (problemas.length > 0) {
    console.log('\n✗ Hay problemas de validación. No se escribe nada.');
    await prisma.$disconnect();
    process.exit(1);
  }

  console.log('');
  if (yaHay > 0) {
    console.log(`Borrando ${yaHay} reactivos banco="${BANCO}" previos...`);
    await prisma.reactivo.deleteMany({ where: { banco: BANCO } });
  }
  console.log(`Insertando ${filas.length} reactivos...`);
  await prisma.reactivo.createMany({
    data: filas.map((f) => ({
      bloqueId: BLOQUE_PERSONALIDAD,
      enunciado: f.enunciado,
      tipo: 'escala_vf',
      opciones: ['Verdadero', 'Falso'],
      respuestaCorrecta: null,
      tema: f.tema,
      polaridad: f.polaridad,
      banco: BANCO,
      eje: f.eje,
      subLote: f.subLote,
      numeroEnEje: f.numeroEnEje,
      parNumero: f.parNumero,
      tipoTrampa: f.tipoTrampa,
      esCritico: f.esCritico,
      noPuntua: f.noPuntua,
      subnota: f.subnota,
      marco: f.marco,
      crossRef: f.crossRef,
    })),
  });
  const final = await prisma.reactivo.count({ where: { banco: BANCO } });
  console.log(`✓ Listo: ${final} reactivos banco="${BANCO}" en la base.`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
