/**
 * Importa el banco remasterizado de personalidad (docs/personalidad-remaster/*.md)
 * a la tabla Reactivo con banco="remaster".
 *
 * Uso:
 *   npx ts-node scripts/importar-remaster.ts            → MODO PRUEBA (no toca la base)
 *   npx ts-node scripts/importar-remaster.ts --escribir → escribe a la base
 *
 * En modo prueba lee los 28 archivos, arma las filas, corre todas las validaciones
 * y reporta los números. No toca la base de datos.
 *
 * En los dos modos regenera `docs/personalidad-remaster/ESTADO.md`, que refleja
 * los `.md` del banco y no la base, así que no depende de --escribir.
 *
 * El banco viejo (banco="v1") no se toca en ningún caso.
 */

import { PrismaClient, Polaridad, TipoTrampa } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

const DIR = path.resolve(__dirname, '../../../docs/personalidad-remaster');
const BLOQUE_PERSONALIDAD = 6;
const BANCO = 'remaster';
const ESCRIBIR = process.argv.includes('--escribir');

/**
 * Eje → slug de tema. Los marcados con ⭐ en la conversación son los 6 que Carlo
 * priorizó con peso=3 en TemaPrioridad; usar estos slugs cortos hace que ese peso
 * sí aplique (con los slugs largos del banco viejo quedaban huérfanos).
 */
const TEMA_POR_EJE: Record<number, string> = {
  1: 'suicidio',
  2: 'depresion',
  3: 'ansiedad',
  4: 'manejo_emocional',
  5: 'control_ira',
  6: 'adicciones',
  7: 'autoestima',
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
  28: 'valores_grupo',
  29: 'valores_aplicados',
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

function detectarTipoTrampa(subnota: string, marco: string): TipoTrampa | null {
  const t = (subnota + ' ' + marco).toLowerCase();
  if (/trampa-l\b/.test(t)) return TipoTrampa.L;
  if (/trampa-k\b/.test(t)) return TipoTrampa.K;
  if (/trampa-f\b/.test(t)) return TipoTrampa.F;
  return null;
}

/**
 * Extrae la referencia cruzada cruda, p. ej. "45 e17" o "44 e16 + 44 e20".
 *
 * `receptor cross` va PRIMERO a propósito: los receptores traen los números
 * exactos en la subnota, y en dos de ellos (e25#40 y e28#36) la columna marco
 * dice solo "CROSS ↔ 3 emisoras". Si el patrón de marco gana, se pierden los
 * números y queda un texto que no referencia nada.
 */
function detectarCrossRef(subnota: string, marco: string): string | null {
  const texto = subnota + ' | ' + marco;
  const m =
    texto.match(/receptor\s+cross\s+([^·|]+)/i) ||
    texto.match(/CROSS\s*↔\s*([^|]+)/i) ||
    texto.match(/cross\s+vs\s+([^|·]+)/i);
  return m ? limpio(m[1]).replace(/\s+/g, ' ').trim() : null;
}

/**
 * Nombres de tema que aparecen como destino de una trampa-cross y que ningún
 * receptor resuelve. Solo van aquí los que no admiten discusión: el resto se
 * queda en `pendiente:` esperando decisión de Carlo.
 */
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

/**
 * Deja `crossRef` en un formato único con la dirección explícita:
 *
 *   recibe:1:57,4:45   → este reactivo recibe de esas emisoras
 *   emite:15:75        → esta trampa apunta a ese reactivo
 *   emite:15           → apunta al eje 15, sin reactivo concreto
 *   pendiente:<texto>  → sin resolver, se conserva el original
 *
 * La dirección no se puede inferir de la polaridad: e5#40 y e5#43 son emisoras
 * y son NEG, no TRAM.
 *
 * El grueso del trabajo lo hace el paso 1: los receptores ya nombran a sus
 * emisoras con número y eje, así que invertir esos enlaces resuelve a la
 * mayoría sin necesidad de una tabla de nombres.
 */
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

function parsearArchivo(archivo: string): Fila[] {
  const eje = parseInt(archivo.slice(0, 2), 10);
  const tema = TEMA_POR_EJE[eje];
  if (!tema) throw new Error(`Eje ${eje} (${archivo}) no tiene tema asignado en TEMA_POR_EJE`);

  const filas: Fila[] = [];
  let subLote = 0;

  for (const linea of fs.readFileSync(path.join(DIR, archivo), 'utf8').split(/\r?\n/)) {
    const h = linea.match(/^##\s*Sub-lote\s*(\d+)/i);
    if (h) {
      subLote = parseInt(h[1], 10);
      continue;
    }

    // fila de reactivo: | 01 | enunciado | POS | 02 | subnota | marco |
    const m = linea.match(/^\|\s*(\d{1,3})\s*\|([^|]+)\|([^|]+)\|([^|]+)\|([^|]*)\|([^|]*)\|/);
    if (!m) continue;

    const [, numRaw, enunRaw, polRaw, parRaw, subRaw, marcoRaw] = m;
    const pol = limpio(polRaw).toUpperCase();
    // descarta cabeceras y tablas que no son de reactivos (p. ej. la de sub-lotes del eje 29)
    if (!['POS', 'NEG', 'TRAM', 'DESC'].includes(pol)) continue;
    if (subLote === 0) continue;

    const subnota = limpio(subRaw);
    const marco = limpio(marcoRaw);
    const parTxt = limpio(parRaw);

    filas.push({
      eje,
      subLote,
      numeroEnEje: parseInt(numRaw, 10),
      enunciado: limpio(enunRaw),
      polaridad:
        pol === 'POS' ? Polaridad.POSITIVA
        : pol === 'NEG' ? Polaridad.NEGATIVA
        : pol === 'TRAM' ? Polaridad.TRAMPA
        : null, // DESC no puntúa
      parNumero: /^\d+$/.test(parTxt) ? parseInt(parTxt, 10) : null,
      tipoTrampa: detectarTipoTrampa(subnota, marco),
      esCritico: /CRÍTICO/i.test(subRaw),
      noPuntua: pol === 'DESC',
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
        // No es error: en los ejes 1-7 la columna `par` también agrupa ANCLAS
        // clínicas — dos reactivos de la misma polaridad que miden el mismo
        // criterio en ventana temporal (p. ej. los dos ítems centrales del
        // PHQ-9, o inicio temprano de alcohol y de otras sustancias).
        // El analizador debe tratarlos como ancla, no como par de coherencia:
        // se distinguen en tiempo de lectura porque comparten polaridad.
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
    else if (f.enunciado.split(/\s+/).length > 30) problemas.push(`eje ${f.eje} #${f.numeroEnEje}: enunciado de ${f.enunciado.split(/\s+/).length} palabras`);
  }

  // 6. destinos cross que apuntan a un reactivo inexistente
  const existe = new Set(filas.map((f) => `${f.eje}:${f.numeroEnEje}`));
  for (const f of filas) {
    if (!f.crossRef || f.crossRef.startsWith('pendiente:')) continue;
    const lista = f.crossRef.slice(f.crossRef.indexOf(':') + 1);
    for (const destino of lista.split(',')) {
      if (!destino.includes(':')) continue; // "emite:15" apunta al eje, no a un reactivo
      if (!existe.has(destino)) {
        problemas.push(`eje ${f.eje} #${f.numeroEnEje}: cross apunta a ${destino} que no existe`);
      }
    }
  }

  return { problemas, avisos };
}

/**
 * Arma el contenido de ESTADO.md a partir de lo que el importador ya calculó.
 *
 * Existe porque PENDIENTES.md, escrito a mano, llegó a afirmar tres cosas
 * falsas sobre el banco y nos mandó por el camino equivocado. Un documento
 * generado no puede mentir: si el dato cambia, el archivo cambia.
 *
 * **Sin fecha de generación a propósito.** Un timestamp haría que el archivo
 * saliera modificado en cada corrida aunque el banco esté igual, y entonces el
 * diff dejaría de significar algo. Así, que ESTADO.md aparezca modificado ya es
 * la señal: cambió el banco.
 */
function generarEstado(
  filas: Fila[],
  porEje: Map<number, Fila[]>,
  problemas: string[],
  avisos: string[],
  crossSinResolver: string[],
): string {
  const tot = (fn: (f: Fila) => boolean) => filas.filter(fn).length;
  const L: string[] = [];

  L.push('# Estado del banco remasterizado');
  L.push('');
  L.push('**Archivo generado — no lo edites a mano.** Lo escribe');
  L.push('`apps/backend/scripts/importar-remaster.ts` en cada corrida, a partir de los');
  L.push('`.md` de este directorio. Para regenerarlo:');
  L.push('');
  L.push('```');
  L.push('npx ts-node scripts/importar-remaster.ts');
  L.push('```');
  L.push('');
  L.push('Las decisiones abiertas y la deuda técnica viven en `PENDIENTES.md`, que sí');
  L.push('se escribe a mano porque no se puede derivar del código.');
  L.push('');
  L.push('## Por eje');
  L.push('');
  L.push('| eje | tema | total | POS | NEG | TRAM | DESC | crít | pares | cross |');
  L.push('|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|');
  for (const eje of [...porEje.keys()].sort((a, b) => a - b)) {
    const f = porEje.get(eje)!;
    const c = (p: Polaridad | null) => f.filter((x) => x.polaridad === p).length;
    L.push(
      `| ${eje} | ${TEMA_POR_EJE[eje]} | ${f.length} | ${c(Polaridad.POSITIVA)} | ` +
        `${c(Polaridad.NEGATIVA)} | ${c(Polaridad.TRAMPA)} | ` +
        `${f.filter((x) => x.noPuntua).length} | ${f.filter((x) => x.esCritico).length} | ` +
        `${f.filter((x) => x.parNumero !== null).length / 2} | ` +
        `${f.filter((x) => x.crossRef).length} |`,
    );
  }
  L.push(
    `| | **TOTAL** | **${filas.length}** | ${tot((f) => f.polaridad === Polaridad.POSITIVA)} | ` +
      `${tot((f) => f.polaridad === Polaridad.NEGATIVA)} | ${tot((f) => f.polaridad === Polaridad.TRAMPA)} | ` +
      `${tot((f) => f.noPuntua)} | ${tot((f) => f.esCritico)} | ` +
      `${tot((f) => f.parNumero !== null) / 2} | ${tot((f) => !!f.crossRef)} |`,
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
  L.push('## Cruces cross-tema');
  L.push('');
  const pref = (p: string) => tot((f) => !!f.crossRef && f.crossRef.startsWith(p));
  L.push('| dirección | cantidad |');
  L.push('|---|---:|');
  L.push(`| \`recibe:\` | ${pref('recibe:')} |`);
  L.push(`| \`emite:\` | ${pref('emite:')} |`);
  L.push(`| \`pendiente:\` | ${pref('pendiente:')} |`);
  if (crossSinResolver.length > 0) {
    L.push('');
    L.push('Sin resolver:');
    L.push('');
    crossSinResolver.forEach((s) => L.push(`- \`${s}\``));
  }

  L.push('');
  L.push('## Validaciones');
  L.push('');
  if (problemas.length === 0) {
    L.push('Sin problemas.');
  } else {
    L.push(`**${problemas.length} problema(s):**`);
    L.push('');
    problemas.forEach((p) => L.push(`- ${p}`));
  }
  if (avisos.length > 0) {
    L.push('');
    L.push(`### Anclas detectadas (${avisos.length})`);
    L.push('');
    L.push('Pares de la misma polaridad. No son error: miden un criterio en ventana');
    L.push('temporal y el analizador debe tratarlos como ancla, no como par de coherencia.');
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

  const crossSinResolver = normalizarCrossRefs(filas);

  // ---- resumen por eje ----
  const porEje = new Map<number, Fila[]>();
  for (const f of filas) {
    if (!porEje.has(f.eje)) porEje.set(f.eje, []);
    porEje.get(f.eje)!.push(f);
  }

  console.log('eje  tema                     total   POS   NEG  TRAM  DESC  crít  pares  cross');
  console.log('-'.repeat(82));
  for (const eje of [...porEje.keys()].sort((a, b) => a - b)) {
    const f = porEje.get(eje)!;
    const c = (p: Polaridad | null) => f.filter((x) => x.polaridad === p).length;
    console.log(
      String(eje).padStart(3) + '  ' +
      TEMA_POR_EJE[eje].padEnd(24) +
      String(f.length).padStart(5) +
      String(c(Polaridad.POSITIVA)).padStart(6) +
      String(c(Polaridad.NEGATIVA)).padStart(6) +
      String(c(Polaridad.TRAMPA)).padStart(6) +
      String(f.filter((x) => x.noPuntua).length).padStart(6) +
      String(f.filter((x) => x.esCritico).length).padStart(6) +
      String(f.filter((x) => x.parNumero !== null).length / 2).padStart(7) +
      String(f.filter((x) => x.crossRef).length).padStart(7),
    );
  }
  console.log('-'.repeat(82));
  const tot = (fn: (f: Fila) => boolean) => filas.filter(fn).length;
  console.log(
    'TOTAL'.padEnd(29) +
    String(filas.length).padStart(5) +
    String(tot((f) => f.polaridad === Polaridad.POSITIVA)).padStart(6) +
    String(tot((f) => f.polaridad === Polaridad.NEGATIVA)).padStart(6) +
    String(tot((f) => f.polaridad === Polaridad.TRAMPA)).padStart(6) +
    String(tot((f) => f.noPuntua)).padStart(6) +
    String(tot((f) => f.esCritico)).padStart(6) +
    String(tot((f) => f.parNumero !== null) / 2).padStart(7) +
    String(tot((f) => !!f.crossRef)).padStart(7),
  );

  console.log('');
  console.log('trampas por tipo:',
    'L=' + tot((f) => f.tipoTrampa === TipoTrampa.L),
    'K=' + tot((f) => f.tipoTrampa === TipoTrampa.K),
    'F=' + tot((f) => f.tipoTrampa === TipoTrampa.F));

  // ---- cruces cross-tema ----
  const pref = (p: string) => tot((f) => !!f.crossRef && f.crossRef.startsWith(p));
  console.log('');
  console.log('cross-tema:',
    'recibe=' + pref('recibe:'),
    'emite=' + pref('emite:'),
    'pendiente=' + pref('pendiente:'));
  if (crossSinResolver.length > 0) {
    console.log(`   ${crossSinResolver.length} sin resolver (quedan como pendiente:):`);
    crossSinResolver.forEach((s) => console.log('   · ' + s));
  }

  // ---- validaciones ----
  const { problemas, avisos } = validar(filas);
  console.log('');
  if (problemas.length === 0) {
    console.log('✓ Validaciones: sin problemas');
  } else {
    console.log(`✗ Validaciones: ${problemas.length} problema(s)`);
    problemas.slice(0, 30).forEach((p) => console.log('   - ' + p));
    if (problemas.length > 30) console.log(`   … y ${problemas.length - 30} más`);
  }
  if (avisos.length > 0) {
    console.log(`ℹ Avisos (no bloquean): ${avisos.length} ancla(s) detectada(s)`);
    avisos.forEach((a) => console.log('   · ' + a));
  }

  // ---- ESTADO.md ----
  // Se escribe siempre, también en modo prueba: refleja los .md del banco, no
  // la base, así que no depende de --escribir. Si el contenido no cambió, no se
  // toca el archivo, para que git no lo reporte modificado sin motivo.
  const estado = generarEstado(filas, porEje, problemas, avisos, crossSinResolver);
  const rutaEstado = path.join(DIR, 'ESTADO.md');
  const previo = fs.existsSync(rutaEstado) ? fs.readFileSync(rutaEstado, 'utf8') : null;
  if (previo === estado) {
    console.log('');
    console.log('ESTADO.md sin cambios.');
  } else {
    fs.writeFileSync(rutaEstado, estado, 'utf8');
    console.log('');
    console.log(previo === null ? 'ESTADO.md creado.' : 'ESTADO.md actualizado.');
  }

  // ---- estado de la base ----
  const yaHay = await prisma.reactivo.count({ where: { banco: BANCO } });
  const viejos = await prisma.reactivo.count({ where: { banco: 'v1' } });
  console.log('');
  console.log(`En la base ahora: ${viejos} reactivos v1, ${yaHay} reactivos remaster`);

  if (!ESCRIBIR) {
    console.log('');
    console.log('Modo prueba: la base no se tocó. Para escribir:');
    console.log('  npx ts-node scripts/importar-remaster.ts --escribir');
    await prisma.$disconnect();
    return;
  }

  if (problemas.length > 0) {
    console.log('');
    console.log('✗ Hay problemas de validación. No se escribe nada. Corrígelos y vuelve a correr.');
    await prisma.$disconnect();
    process.exit(1);
  }

  // ---- escritura ----
  console.log('');
  if (yaHay > 0) {
    console.log(`Borrando ${yaHay} reactivos remaster previos (el banco v1 no se toca)...`);
    await prisma.reactivo.deleteMany({ where: { banco: BANCO } });
  }

  console.log(`Insertando ${filas.length} reactivos...`);
  await prisma.reactivo.createMany({
    data: filas.map((f) => ({
      bloqueId: BLOQUE_PERSONALIDAD,
      enunciado: f.enunciado,
      tipo: 'escala_likert', // etiqueta heredada del banco v1; las opciones reales son Sí/No
      opciones: ['Sí', 'No'],
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
  console.log(`✓ Listo: ${final} reactivos remaster en la base.`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
