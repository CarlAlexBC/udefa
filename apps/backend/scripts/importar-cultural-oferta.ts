/**
 * Importador del examen cultural — LADO DE LA OFERTA.
 *
 * Construye el árbol Libro (identidad = slug) → Capítulo → Tema desde los .md de
 * docs/examen-cultural/, y crea los reactivos colgando de su Tema (temaId), con
 * banco='cultural' y bloqueId NULO.
 *
 * NO toca el armado plano del examen (Examen → Bloque → bloqueId) ni el importador
 * de la otra sesión (importar-cultural.ts, banco='cultural-hcm'). Ese lado —qué
 * reactivos van al examen de cada plantel— es trabajo de la DEMANDA (temarios.json)
 * y se cablea aparte. Aquí solo se llena la oferta, de forma aditiva.
 *
 * Lee los dos formatos de header que conviven en el repo:
 *   - Carpetas por PLANTEL (HCM, EMM): un libro por prefijo de archivo; header con
 *     **Materia:** `COD`.  slug = "<materia>-<apellido>" (p. ej. "espanol-zarzar").
 *   - Carpetas por LIBRO (fisica-perez-montiel, algebra-baldor): un libro = la
 *     carpeta; Álgebra ya NO trae código (es de la demanda) y usa romanos en el H1.
 *     slug = nombre de la carpeta.
 *
 * Uso:
 *   npx ts-node scripts/importar-cultural-oferta.ts             → MODO PRUEBA (no toca la base)
 *   npx ts-node scripts/importar-cultural-oferta.ts --escribir  → escribe a la base
 *   npx ts-node scripts/importar-cultural-oferta.ts --carpeta HCM  → limita a una carpeta
 *
 * Dos reglas del banco que este script cumple (ver docs/examen-cultural/README.md):
 *   1. Las opciones se BARAJAN (determinista, semilla = enunciado). respuestaCorrecta
 *      guarda el TEXTO de la opción correcta, no la letra: el simulador califica por
 *      texto (intentos.service.ts).
 *   2. Las notas "> ..." NO son para el aspirante (nombran las opciones por letra,
 *      contra el orden del .md). Van a notaRevisor, campo interno.
 */

import { PrismaClient } from '@prisma/client';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

const RAIZ = path.resolve(__dirname, '../../../docs/examen-cultural');
const PLANTEL_FOLDERS = new Set(['HCM', 'EMM']);
const BANCO = 'cultural';
const LETRAS = ['A', 'B', 'C', 'D'] as const;

const ESCRIBIR = process.argv.includes('--escribir');
const argCarpeta = process.argv.indexOf('--carpeta');
const CARPETA_UNICA = argCarpeta >= 0 ? process.argv[argCarpeta + 1] : null;

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------
interface ReactivoParsed {
  numero: number;
  enunciado: string;
  opciones: string[]; // orden del .md (A-D)
  correctaTexto: string;
  referencia: string;
  subtema: string; // = Tema
  justificacion: string;
  notaRevisor: string | null;
  archivo: string;
}

interface LibroParsed {
  slug: string; // IDENTIDAD
  materia: string;
  autor: string;
  edicion: string | null;
  anio: number | null;
  codigoMateria: string | null; // solo informativo; NO es identidad
}

interface ArchivoParsed {
  libro: LibroParsed;
  capNumero: number;
  capTitulo: string;
  reactivos: ReactivoParsed[];
  archivo: string;
  carpeta: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const limpio = (s: string) => s.replace(/\*\*/g, '').trim();
const primerMatch = (t: string, re: RegExp): string | null => {
  const m = t.match(re);
  return m ? m[1].trim() : null;
};

/** Quita acentos y deja un slug a-z0-9 con guiones. */
function slugify(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // quita marcas de acento combinantes
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Número romano → entero. Devuelve null si no es romano válido. */
function romanoAInt(s: string): number | null {
  const val: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const v = val[s[i].toUpperCase()];
    if (!v) return null;
    if (v < prev) total -= v;
    else {
      total += v;
      prev = v;
    }
  }
  return total;
}

/** "3" → 3 (arábigo) o "IV" → 4 (romano). */
function parseNumero(s: string): number {
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  const r = romanoAInt(s);
  if (r === null) throw new Error(`número de capítulo no reconocido: "${s}"`);
  return r;
}

/** "Tamayo, Jorge L. (2021) *Título*, Editorial, Pág. 17" → autor + año. */
function parseReferencia(ref: string): { autor: string; anio: number | null } {
  const m = ref.match(/^(.+?)\s*\((\d{4})\)/);
  if (m) return { autor: m[1].trim(), anio: parseInt(m[2], 10) };
  return { autor: '', anio: null };
}

/** Apellido para el slug: lo de antes de la coma, primera palabra. */
function apellidoDe(autor: string): string {
  const antesComa = autor.split(',')[0].trim(); // "Zarzar Charur, Carlos" → "Zarzar Charur"
  const primero = antesComa.split(/\s+/)[0] ?? ''; // → "Zarzar"
  return slugify(primero);
}

function extraerEdicion(cabecera: string): string | null {
  const m = cabecera.match(/(\d+)\s*[ªa]\.?\s*(?:ed\.?|edici[oó]n)/i);
  return m ? `${m[1]}ª ed.` : null;
}

// ---------------------------------------------------------------------------
// Barajado determinista (idéntico al de importar-cultural.ts). Semilla = enunciado.
// ---------------------------------------------------------------------------
function barajarDeterminista<T>(items: T[], semilla: string): T[] {
  const h = crypto.createHash('sha256').update(semilla).digest();
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const off = (i * 4) % (h.length - 3);
    const j = h.readUInt32BE(off) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------------------------------------------------------------------------
// H1: "# Materia · <Unidad|Bloque|Capítulo> N · Título"  o  "# Materia · Título"
// ---------------------------------------------------------------------------
function parseH1(h1: string): { materia: string; capNumero: number; capTitulo: string } {
  const partes = h1
    .replace(/^#\s*/, '')
    .trim()
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean);
  const materia = partes[0] ?? '';

  if (partes.length >= 3) {
    const m = partes[1].match(/^(?:Unidad|Bloque|Cap[ií]tulo)\s+([0-9IVXLCDM]+)$/i);
    if (m) {
      return { materia, capNumero: parseNumero(m[1]), capTitulo: partes.slice(2).join(' · ') };
    }
  }
  if (partes.length === 2) {
    // Caso "Álgebra · Preliminares": sección sin número → 0.
    return { materia, capNumero: 0, capTitulo: partes[1] };
  }
  throw new Error(`H1 no reconocido: "${h1}"`);
}

// ---------------------------------------------------------------------------
// Un bloque de reactivo (bilingüe en la justificación)
// ---------------------------------------------------------------------------
function parsearBloque(body: string, numero: number, archivo: string): ReactivoParsed {
  const lineas = body.split(/\r?\n/);

  // Enunciado: líneas con texto hasta la primera opción "- A.".
  const enun: string[] = [];
  let i = 0;
  for (; i < lineas.length; i++) {
    if (/^-\s*[A-D]\.\s/.test(lineas[i])) break;
    if (lineas[i].trim()) enun.push(lineas[i].trim());
  }
  const enunciado = enun.join(' ').trim();

  // Opciones A-D.
  const op = new Map<string, string>();
  for (; i < lineas.length; i++) {
    const m = lineas[i].match(/^-\s*([A-D])\.\s*(.+)$/);
    if (m) op.set(m[1], m[2].trim());
    else if (op.size >= 4) break;
  }
  const faltan = LETRAS.filter((l) => !op.has(l));
  if (faltan.length) throw new Error(`${archivo} #${numero}: faltan opciones ${faltan.join(', ')}`);
  const opciones = LETRAS.map((l) => op.get(l)!);

  const letra = primerMatch(body, /^\*\*Respuesta:\*\*\s*([A-D])/m);
  if (!letra) throw new Error(`${archivo} #${numero}: sin **Respuesta:**`);
  const correctaTexto = op.get(letra)!;

  const referencia = limpio(primerMatch(body, /^\*\*Referencia:\*\*\s*(.+)$/m) ?? '').replace(/\*/g, '');
  const subtema = limpio(primerMatch(body, /^\*\*Subtema:\*\*\s*(.+)$/m) ?? '');

  // Justificación: lo que va DESPUÉS de la línea **Subtema:**, hasta el primer
  // terminador (separador, encabezado o el pie "Reactivos en este archivo").
  const idxSub = body.search(/^\*\*Subtema:\*\*.*$/m);
  const cola = idxSub >= 0 ? body.slice(body.indexOf('\n', idxSub) + 1) : '';

  let justificacion = '';
  const mAng = cola.match(/<([\s\S]+?)>/); // Física: justificación entre < >
  if (mAng) {
    justificacion = mAng[1].trim();
  } else {
    // HCM/EMM/Álgebra: texto pelón. Se corta en el primer terminador para que no
    // se cuele el pie del archivo ni un "#" suelto.
    const acumulado: string[] = [];
    for (const cruda of cola.split(/\r?\n/)) {
      const t = cruda.trim();
      if (t === '---' || /^#{1,6}(\s|$)/.test(t) || /^\*\*Reactivos en este archivo/i.test(t)) break;
      if (!t || t.startsWith('>')) continue;
      acumulado.push(t);
    }
    justificacion = acumulado.join(' ').replace(/\s*#+\s*$/, '').trim();
  }

  // Notas de revisor: líneas "> ..." (no se muestran al aspirante).
  const notas = lineas.filter((l) => /^>\s/.test(l)).map((l) => l.replace(/^>\s?/, '').trim());
  const notaRevisor = notas.length ? notas.join(' ') : null;

  return { numero, enunciado, opciones, correctaTexto, referencia, subtema, justificacion, notaRevisor, archivo };
}

// ---------------------------------------------------------------------------
// Un archivo → libro + capítulo + reactivos
// ---------------------------------------------------------------------------
function parsearArchivo(carpeta: string, rutaAbs: string, archivo: string): ArchivoParsed {
  const texto = fs.readFileSync(rutaAbs, 'utf8').replace(/\r\n/g, '\n');
  const h1 = texto.match(/^#\s+.+$/m)?.[0] ?? '';
  const { materia, capNumero, capTitulo } = parseH1(h1);

  // Partir en bloques por "### N" (split con grupo: [cabecera, num, body, num, body…]).
  const partes = texto.split(/^###\s+(\d+)\s*$/m);
  const cabecera = partes[0];

  const reactivos: ReactivoParsed[] = [];
  for (let k = 1; k < partes.length; k += 2) {
    reactivos.push(parsearBloque(partes[k + 1] ?? '', parseInt(partes[k], 10), archivo));
  }

  // Autor y año: de la PRIMERA Referencia (no de la cabecera, que no la trae).
  const primeraRef = reactivos.find((r) => r.referencia)?.referencia ?? '';
  const { autor, anio } = parseReferencia(primeraRef);

  // Slug = identidad del libro.
  let slug: string;
  if (PLANTEL_FOLDERS.has(carpeta)) {
    const prefijo = archivo.split('/').pop()!.split('-')[0]; // "espanol", "geografia", "biologia"…
    slug = `${prefijo}-${apellidoDe(autor)}`;
  } else {
    slug = carpeta; // carpeta-por-libro: la carpeta ES el slug
  }

  const codigoMateria = primerMatch(cabecera, /\*\*Materia:\*\*[^`]*`([^`]+)`/);
  const edicion = extraerEdicion(cabecera);

  return {
    libro: { slug, materia, autor, edicion, anio, codigoMateria },
    capNumero,
    capTitulo,
    reactivos,
    archivo,
    carpeta,
  };
}

// ---------------------------------------------------------------------------
// Validaciones
// ---------------------------------------------------------------------------
function validar(archivos: ArchivoParsed[]): string[] {
  const problemas: string[] = [];
  const vistos = new Map<string, string>();

  for (const a of archivos) {
    const nums = a.reactivos.map((r) => r.numero).sort((x, y) => x - y);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        problemas.push(`${a.archivo}: numeración rota — se esperaba ${i + 1} y hay ${nums[i]}`);
        break;
      }
    }
    for (const r of a.reactivos) {
      const d = `${a.archivo} #${r.numero}`;
      if (!r.enunciado) problemas.push(`${d}: enunciado vacío`);
      if (new Set(r.opciones).size !== 4) problemas.push(`${d}: opciones duplicadas`);
      if (!r.opciones.includes(r.correctaTexto)) problemas.push(`${d}: la correcta no está entre las opciones`);
      if (!r.justificacion) problemas.push(`${d}: sin justificación`);
      if (r.justificacion.includes('#')) problemas.push(`${d}: "#" colado en la justificación → "${r.justificacion.slice(-40)}"`);
      if (!r.referencia) problemas.push(`${d}: sin referencia`);
      if (r.referencia && !/Pág\.\s*\d+/i.test(r.referencia)) problemas.push(`${d}: referencia sin página → "${r.referencia}"`);
      if (!r.subtema) problemas.push(`${d}: sin subtema`);
      // Duplicado REAL = mismo enunciado Y mismas opciones. En este banco hay
      // enunciados cortos que dependen del reactivo anterior ("¿cómo se llama esa
      // ley?") y se repiten legítimamente con opciones distintas.
      const clave = (r.enunciado + '||' + [...r.opciones].sort().join('|')).toLowerCase();
      if (vistos.has(clave)) problemas.push(`${d}: reactivo duplicado (enunciado+opciones) — también ${vistos.get(clave)}`);
      else vistos.set(clave, d);
    }
    // Formato de referencia: el banco es canónico "Autor (AAAA) ...".
    const noCanon = a.reactivos.filter((r) => !/\(\d{4}\)/.test(r.referencia)).length;
    if (noCanon > 0) problemas.push(`${a.archivo}: ${noCanon}/${a.reactivos.length} referencias NO canónicas (falta "Autor (AAAA)")`);
  }
  return problemas;
}

// ---------------------------------------------------------------------------
// Reporte (modo prueba)
// ---------------------------------------------------------------------------
function reporte(archivos: ArchivoParsed[]) {
  const porLibro = new Map<string, ArchivoParsed[]>();
  for (const a of archivos) {
    if (!porLibro.has(a.libro.slug)) porLibro.set(a.libro.slug, []);
    porLibro.get(a.libro.slug)!.push(a);
  }

  let totalReactivos = 0;
  let totalNota = 0;
  const antes: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  const despues: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

  console.log('=== ÁRBOL: Libro (slug) → Capítulo → Tema ===\n');
  for (const [slug, arls] of [...porLibro].sort()) {
    const l = arls.find((a) => a.libro.autor)?.libro ?? arls[0].libro;
    const codigos = [...new Set(arls.map((a) => a.libro.codigoMateria).filter(Boolean))];
    const cod = codigos.length ? `  ·  código(s): ${codigos.join(', ')}` : '  ·  (sin código en header)';
    const nTemas = new Set(arls.flatMap((a) => a.reactivos.map((r) => r.subtema))).size;
    console.log(
      `■ ${slug} — ${l.materia}  (${l.autor}${l.anio ? `, ${l.anio}` : ''}${l.edicion ? `, ${l.edicion}` : ''})${cod}` +
        `   [${arls.length} cap · ${nTemas} temas]`,
    );
    for (const a of [...arls].sort((x, y) => x.capNumero - y.capNumero)) {
      console.log(`  └─ Cap. ${a.capNumero} · ${a.capTitulo}  (${a.reactivos.length} reactivos)`);
      for (const r of a.reactivos) {
        antes[LETRAS[r.opciones.indexOf(r.correctaTexto)]]++;
        const baraj = barajarDeterminista(r.opciones, r.enunciado);
        despues[LETRAS[baraj.indexOf(r.correctaTexto)]]++;
      }
      totalReactivos += a.reactivos.length;
      totalNota += a.reactivos.filter((r) => r.notaRevisor).length;
    }
  }
  console.log('');
  console.log('=== TOTALES ===');
  console.log(`Libros: ${porLibro.size}   Capítulos: ${archivos.length}   Reactivos: ${totalReactivos}`);
  console.log(`Con nota de revisor (>): ${totalNota}  → a notaRevisor, NO se muestran al aspirante`);
  console.log(`Posición correcta EN EL .MD:  A:${antes.A}  B:${antes.B}  C:${antes.C}  D:${antes.D}`);
  console.log(`Posición correcta BARAJADA:   A:${despues.A}  B:${despues.B}  C:${despues.C}  D:${despues.D}`);
  console.log('');
}

// ---------------------------------------------------------------------------
// Escritura a la base (--escribir)
// ---------------------------------------------------------------------------
/** ¿El reactivo existente en la BD ya coincide con lo que trae el .md? Compara
 *  sólo los campos que este importador escribe, para poder saltar los que no
 *  cambiaron y no reescribir toda la base en cada corrida. */
function reactivoIgual(ex: any, data: any): boolean {
  return (
    JSON.stringify(ex.opciones) === JSON.stringify(data.opciones) &&
    (ex.respuestaCorrecta ?? null) === (data.respuestaCorrecta ?? null) &&
    (ex.explicacion ?? null) === (data.explicacion ?? null) &&
    (ex.referencia ?? null) === (data.referencia ?? null) &&
    (ex.notaRevisor ?? null) === (data.notaRevisor ?? null) &&
    (ex.tema ?? null) === (data.tema ?? null) &&
    (ex.numeroEnEje ?? null) === (data.numeroEnEje ?? null) &&
    (ex.tipo ?? null) === (data.tipo ?? null)
  );
}

async function escribir(archivos: ArchivoParsed[]) {
  const prisma = new PrismaClient();
  try {
    // Escritura NO DESTRUCTIVA e idempotente. Antes esto borraba TODO el árbol
    // (libro/capítulo/tema/reactivo) y lo reinsertaba, lo que rompía la llave
    // foránea en cuanto un reactivo ya tenía respuestas (RespuestaReactivo) o
    // repasos (RepasoReactivo). Ahora se RECONCILIA:
    //   - Libro/Capítulo/Tema: UPSERT por su llave natural (slug; libroId+numero;
    //     capituloId+nombre).
    //   - Cada reactivo se empareja por (temaId, enunciado, banco). Si existe y no
    //     cambió, se deja intacto (su id se preserva → las respuestas/repasos siguen
    //     válidos). Si cambió, se ACTUALIZA en su lugar. Si es nuevo, se CREA.
    //   - Los reactivos que ya no están en los .md se BORRAN sólo si NADIE los
    //     referencia; si tienen respuestas/repasos, se conservan y se avisa.
    // El barajado de opciones es determinista (sha256 del enunciado), así que un
    // reactivo sin cambios produce exactamente las mismas opciones cada corrida.
    // NO toca otros bancos (cultural-hcm, remaster, v1).

    // Agrupar los archivos por slug (cada slug = un Libro).
    const porSlug = new Map<string, ArchivoParsed[]>();
    for (const a of archivos) {
      if (!porSlug.has(a.libro.slug)) porSlug.set(a.libro.slug, []);
      porSlug.get(a.libro.slug)!.push(a);
    }

    const vistos = new Set<number>(); // ids de reactivos presentes en los .md de esta corrida
    // Cache de los reactivos ya existentes por tema, indexados por enunciado, para
    // no consultar la BD reactivo por reactivo.
    const existentesPorTema = new Map<number, Map<string, any>>();
    let nuevos = 0;
    let actualizados = 0;
    let sinCambio = 0;

    for (const [slug, arls] of porSlug) {
      const info = arls.find((a) => a.libro.autor)?.libro ?? arls[0].libro;
      const libro = await prisma.libro.upsert({
        where: { slug },
        create: { slug, materia: info.materia, autor: info.autor, edicion: info.edicion, anio: info.anio },
        update: { materia: info.materia, autor: info.autor, edicion: info.edicion, anio: info.anio },
      });

      for (const a of arls) {
        const capitulo = await prisma.capitulo.upsert({
          where: { libroId_numero: { libroId: libro.id, numero: a.capNumero } },
          create: { libroId: libro.id, numero: a.capNumero, titulo: a.capTitulo },
          update: { titulo: a.capTitulo },
        });

        // Un Tema por subtema distinto dentro del capítulo (@@unique capituloId+nombre).
        const temaIdCache = new Map<string, number>();
        for (const r of a.reactivos) {
          let temaId = temaIdCache.get(r.subtema);
          if (temaId === undefined) {
            const tema = await prisma.tema.upsert({
              where: { capituloId_nombre: { capituloId: capitulo.id, nombre: r.subtema } },
              create: { capituloId: capitulo.id, nombre: r.subtema },
              update: {},
            });
            temaId = tema.id;
            temaIdCache.set(r.subtema, temaId);
            if (!existentesPorTema.has(temaId)) {
              const filas = await prisma.reactivo.findMany({ where: { temaId, banco: BANCO } });
              existentesPorTema.set(temaId, new Map(filas.map((f) => [f.enunciado, f])));
            }
          }
          const mapEnun = existentesPorTema.get(temaId)!;

          const baraj = barajarDeterminista(r.opciones, r.enunciado);
          const data = {
            temaId,
            bloqueId: null as number | null,
            enunciado: r.enunciado,
            tipo: 'opcion_multiple',
            opciones: baraj,
            respuestaCorrecta: r.correctaTexto, // el TEXTO, no la letra
            explicacion: r.justificacion,
            referencia: r.referencia,
            notaRevisor: r.notaRevisor,
            tema: r.subtema,
            banco: BANCO,
            numeroEnEje: r.numero,
          };

          const existente = mapEnun.get(r.enunciado);
          if (!existente) {
            const creado = await prisma.reactivo.create({ data });
            mapEnun.set(r.enunciado, creado);
            vistos.add(creado.id);
            nuevos++;
          } else {
            vistos.add(existente.id);
            if (reactivoIgual(existente, data)) {
              sinCambio++;
            } else {
              await prisma.reactivo.update({ where: { id: existente.id }, data });
              actualizados++;
            }
          }
        }
      }
    }

    // Podar reactivos culturales que ya no están en los .md: se borran sólo si
    // nadie los referencia; los que tienen historial se conservan y se avisa.
    const restantes = await prisma.reactivo.findMany({
      where: { banco: BANCO },
      select: { id: true, _count: { select: { respuestas: true, repasos: true } } },
    });
    let borrados = 0;
    let conservadosPorReferencia = 0;
    for (const r of restantes) {
      if (vistos.has(r.id)) continue;
      if (r._count.respuestas > 0 || r._count.repasos > 0) {
        conservadosPorReferencia++;
      } else {
        await prisma.reactivo.delete({ where: { id: r.id } });
        borrados++;
      }
    }

    // Podar temas/capítulos/libros que quedaron vacíos. Nadie referencia estas
    // tablas directamente (sólo Reactivo), así que borrar los vacíos es seguro.
    await prisma.tema.deleteMany({ where: { reactivos: { none: {} } } });
    await prisma.capitulo.deleteMany({ where: { temas: { none: {} } } });
    await prisma.libro.deleteMany({ where: { capitulos: { none: {} } } });

    const totalTemas = await prisma.tema.count();
    const totalReact = await prisma.reactivo.count({ where: { banco: BANCO } });
    console.log(
      `✓ Reconciliado (banco='${BANCO}'): ${nuevos} nuevos · ${actualizados} actualizados · ${sinCambio} sin cambio · ${borrados} borrados.`,
    );
    if (conservadosPorReferencia > 0) {
      console.log(
        `  ⚠ ${conservadosPorReferencia} reactivo(s) ya no están en los .md pero tienen respuestas/repasos: se CONSERVARON para no romper el historial.`,
      );
    }
    console.log(`  Total ahora: ${porSlug.size} libros · ${totalTemas} temas · ${totalReact} reactivos banco='${BANCO}'.`);
  } finally {
    await prisma.$disconnect();
  }
}

// ---------------------------------------------------------------------------
function carpetasAProcesar(): string[] {
  if (CARPETA_UNICA) return [CARPETA_UNICA];
  return fs
    .readdirSync(RAIZ, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((nombre) => fs.readdirSync(path.join(RAIZ, nombre)).some((f) => f.endsWith('.md')))
    .sort();
}

async function main() {
  console.log(`=== Importador cultural (OFERTA) · ${ESCRIBIR ? 'ESCRIBIR' : 'MODO PRUEBA'} ===\n`);
  const archivos: ArchivoParsed[] = [];

  for (const carpeta of carpetasAProcesar()) {
    const dir = path.join(RAIZ, carpeta);
    const mds = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
    for (const f of mds) {
      try {
        archivos.push(parsearArchivo(carpeta, path.join(dir, f), `${carpeta}/${f}`));
      } catch (e) {
        console.log(`✗ ${carpeta}/${f}: ${(e as Error).message}`);
      }
    }
  }

  reporte(archivos);

  const problemas = validar(archivos);
  if (problemas.length === 0) {
    console.log('✓ Validaciones: sin problemas');
  } else {
    console.log(`✗ Validaciones: ${problemas.length} problema(s)`);
    problemas.slice(0, 50).forEach((p) => console.log('   - ' + p));
    if (problemas.length > 50) console.log(`   … y ${problemas.length - 50} más`);
  }

  if (!ESCRIBIR) {
    console.log('\nModo prueba: la base no se tocó. Para escribir:');
    console.log('  npx ts-node scripts/importar-cultural-oferta.ts --escribir');
    return;
  }

  if (problemas.length > 0) {
    console.log('\n✗ Hay problemas de validación. No se escribe nada. Corrígelos y vuelve a correr.');
    process.exit(1);
  }

  console.log('');
  await escribir(archivos);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
