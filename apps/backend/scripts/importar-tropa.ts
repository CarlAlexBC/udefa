/**
 * Importador de tropa — LADO DE LA OFERTA. Calcado de importar-cultural-oferta.ts,
 * pero para los 6 libros normativos de docs/examen-tropa/ (leyes y reglamentos,
 * no libros de texto): construye Libro (slug=carpeta) → Capítulo → Tema →
 * Reactivo, banco='tropa', bloqueId nulo. No toca ningún otro banco.
 *
 * Diferencias con el importador cultural, y por qué:
 *  - No hay "Autor (AÑO)" en cada referencia (son artículos de ley, no citas de
 *    libro de texto): materia/autor/edición/año del Libro salen de una tabla fija
 *    con los 6 libros (LIBROS, abajo), leída a mano de la sección "## Libro" de
 *    cada .md una sola vez — no vale la pena parsear seis redacciones distintas
 *    de texto libre para un dato que no cambia entre corridas.
 *  - El número de Capítulo NO intenta calzar con el Título/Capítulo legal —
 *    docs/examen-tropa/importador-tropa.md lo pide así a propósito, porque varios
 *    libros piden títulos salteados (p. ej. la Ley Orgánica pide I, II y IV, no
 *    el III). Es sólo el orden de aparición del archivo dentro de su carpeta.
 *  - No se valida "referencia canónica Autor (AAAA)": esa regla es específica del
 *    banco cultural, aquí la cita es "Artículo X, Pág. N".
 *
 * Uso:
 *   npx ts-node scripts/importar-tropa.ts             → MODO PRUEBA (no toca la base)
 *   npx ts-node scripts/importar-tropa.ts --escribir  → escribe a la base
 */

import { PrismaClient } from '@prisma/client';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

const RAIZ = path.resolve(__dirname, '../../../docs/examen-tropa');
const BANCO = 'tropa';
const LETRAS = ['A', 'B', 'C', 'D'] as const;

const ESCRIBIR = process.argv.includes('--escribir');

// Los 6 libros. slug = nombre de carpeta (ya es el slug natural, igual que en el
// cultural). Datos tomados a mano de la sección "## Libro" de cada .md.
const LIBROS: Record<string, { materia: string; autor: string; edicion: string | null; anio: number | null }> = {
  'ley-uso-de-la-fuerza': {
    materia: 'Derechos Humanos',
    autor: 'Cámara de Diputados del H. Congreso de la Unión',
    edicion: 'Texto vigente',
    anio: 2024, // última reforma DOF 24-01-2024
  },
  'derechos-humanos-dn-m-110': {
    materia: 'Derechos Humanos',
    autor: 'Estado Mayor de la Defensa Nacional (E.M.D.N.)',
    edicion: 'DN-M-110',
    anio: 2016,
  },
  'codigo-justicia-militar': {
    materia: 'Legislación Militar',
    autor: 'Cámara de Diputados del H. Congreso de la Unión',
    edicion: 'Sin Penas',
    anio: 2025, // última reforma DOF 16-07-2025
  },
  'ley-organica-ejercito': {
    materia: 'Legislación Militar',
    autor: 'Cámara de Diputados del H. Congreso de la Unión',
    edicion: 'Texto vigente',
    anio: 2025, // última reforma DOF 16-07-2025
  },
  'ley-disciplina': {
    materia: 'Legislación Militar',
    autor: 'Cámara de Diputados del H. Congreso de la Unión',
    edicion: 'Sin transitorios',
    anio: 2025, // última reforma DOF 16-07-2025
  },
  'reglamento-deberes-militares': {
    materia: 'Legislación Militar',
    autor: 'Secretaría de la Defensa Nacional',
    edicion: null,
    anio: 2024, // última reforma D.O.F. 13-06-2024
  },
};

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
  /** Motivo de retiro, o null si está vivo. Mismo campo/uso que en el cultural. */
  retirado: string | null;
}

interface ArchivoParsed {
  slug: string; // identidad del Libro = carpeta
  capNumero: number; // orden de aparición dentro del libro, NO el número legal
  capTitulo: string;
  reactivos: ReactivoParsed[];
  retirados: ReactivoParsed[];
  archivo: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const limpio = (s: string) => s.replace(/\*\*/g, '').trim();
const primerMatch = (t: string, re: RegExp): string | null => {
  const m = t.match(re);
  return m ? m[1].trim() : null;
};

// Barajado determinista (idéntico al del cultural). Semilla = enunciado.
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
// H1: "# <Libro> · <Título Sección>[, ...] · <Título capítulo>"  o  "# <Libro> — completa"
// El capTitulo es sólo descriptivo (no se valida contra el número legal).
// ---------------------------------------------------------------------------
function capTituloDeH1(h1: string): string {
  const partes = h1
    .replace(/^#\s*/, '')
    .trim()
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean);
  if (partes.length >= 3) return partes.slice(1).join(' · ');
  return 'Completa'; // libros de un solo archivo ("— completa"): ley-disciplina, ley-uso-de-la-fuerza
}

// ---------------------------------------------------------------------------
// Un bloque de reactivo — idéntico al parser del cultural (mismo formato de .md)
// ---------------------------------------------------------------------------
function parsearBloque(body: string, numero: number, archivo: string): ReactivoParsed {
  const lineas = body.split(/\r?\n/);

  const enun: string[] = [];
  let i = 0;
  for (; i < lineas.length; i++) {
    if (/^-\s*[A-D]\.\s/.test(lineas[i])) break;
    if (lineas[i].trim()) enun.push(lineas[i].trim());
  }
  const enunciado = enun.join(' ').trim();

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

  const idxSub = body.search(/^\*\*Subtema:\*\*.*$/m);
  const cola = idxSub >= 0 ? body.slice(body.indexOf('\n', idxSub) + 1) : '';

  const acumulado: string[] = [];
  for (const cruda of cola.split(/\r?\n/)) {
    const t = cruda.trim();
    if (t === '---' || /^#{1,6}(\s|$)/.test(t) || /^\*\*Reactivos en este archivo/i.test(t)) break;
    if (!t || t.startsWith('>')) continue;
    acumulado.push(t);
  }
  const justificacion = acumulado.join(' ').replace(/\s*#+\s*$/, '').trim();

  // Notas de revisor: líneas "> ..." (no se muestran al aspirante). Sí aparecen
  // en tropa (3 archivos), aunque el reconocimiento inicial decía que no.
  const notas = lineas.filter((l) => /^>\s/.test(l)).map((l) => l.replace(/^>\s?/, '').trim());
  const notaRevisor = notas.length ? notas.join(' ') : null;

  const retirado = limpio(primerMatch(body, /^\*\*Retirado:\*\*\s*(.+)$/m) ?? '') || null;

  return { numero, enunciado, opciones, correctaTexto, referencia, subtema, justificacion, notaRevisor, archivo, retirado };
}

// ---------------------------------------------------------------------------
// Un archivo → capítulo + reactivos (el libro ya se conoce por la carpeta)
// ---------------------------------------------------------------------------
function parsearArchivo(slug: string, rutaAbs: string, archivo: string, capNumero: number): ArchivoParsed {
  const texto = fs.readFileSync(rutaAbs, 'utf8').replace(/\r\n/g, '\n');
  const h1 = texto.match(/^#\s+.+$/m)?.[0] ?? '';
  const capTitulo = capTituloDeH1(h1);

  const partes = texto.split(/^###\s+(\d+)\s*$/m);
  const reactivos: ReactivoParsed[] = [];
  for (let k = 1; k < partes.length; k += 2) {
    reactivos.push(parsearBloque(partes[k + 1] ?? '', parseInt(partes[k], 10), archivo));
  }

  const vivos = reactivos.filter((r) => !r.retirado);
  const retirados = reactivos.filter((r) => r.retirado);

  return { slug, capNumero, capTitulo, reactivos: vivos, retirados, archivo };
}

// ---------------------------------------------------------------------------
// Validaciones (igual que el cultural, MENOS el chequeo de referencia canónica
// "Autor (AAAA)", que no aplica: aquí la cita es "Artículo X, Pág. N").
// ---------------------------------------------------------------------------
function validar(archivos: ArchivoParsed[]): string[] {
  const problemas: string[] = [];
  const vistos = new Map<string, string>();

  for (const a of archivos) {
    const nums = [...a.reactivos, ...a.retirados].map((r) => r.numero).sort((x, y) => x - y);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[0] + i) {
        problemas.push(`${a.archivo}: numeración rota — se esperaba ${nums[0] + i} y hay ${nums[i]}`);
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
      const clave = (r.enunciado + '||' + [...r.opciones].sort().join('|')).toLowerCase();
      if (vistos.has(clave)) problemas.push(`${d}: reactivo duplicado (enunciado+opciones) — también ${vistos.get(clave)}`);
      else vistos.set(clave, d);
    }
  }
  return problemas;
}

// ---------------------------------------------------------------------------
// Reporte (modo prueba)
// ---------------------------------------------------------------------------
function reporte(archivos: ArchivoParsed[]) {
  const porSlug = new Map<string, ArchivoParsed[]>();
  for (const a of archivos) {
    if (!porSlug.has(a.slug)) porSlug.set(a.slug, []);
    porSlug.get(a.slug)!.push(a);
  }

  let totalReactivos = 0;
  let totalNota = 0;
  const antes: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  const despues: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

  console.log('=== ÁRBOL: Libro (slug) → Capítulo → Tema ===\n');
  for (const [slug, arls] of [...porSlug].sort()) {
    const l = LIBROS[slug];
    const nTemas = new Set(arls.flatMap((a) => a.reactivos.map((r) => r.subtema))).size;
    console.log(
      `■ ${slug} — ${l.materia}  (${l.autor}${l.anio ? `, ${l.anio}` : ''}${l.edicion ? `, ${l.edicion}` : ''})` +
        `   [${arls.length} cap · ${nTemas} temas]`,
    );
    for (const a of [...arls].sort((x, y) => x.capNumero - y.capNumero)) {
      console.log(`  └─ Cap. ${a.capNumero} · ${a.capTitulo}  (${a.reactivos.length} reactivos)  [${a.archivo}]`);
      for (const r of a.reactivos) {
        antes[LETRAS[r.opciones.indexOf(r.correctaTexto)]]++;
        const baraj = barajarDeterminista(r.opciones, r.enunciado);
        despues[LETRAS[baraj.indexOf(r.correctaTexto)]]++;
      }
      totalReactivos += a.reactivos.length;
      totalNota += a.reactivos.filter((r) => r.notaRevisor).length;
    }
  }

  const retirados = archivos.flatMap((a) => a.retirados);

  console.log('');
  console.log('=== TOTALES ===');
  console.log(`Libros: ${porSlug.size}   Capítulos: ${archivos.length}   Reactivos: ${totalReactivos}`);
  console.log(`Retirados (NO se importan): ${retirados.length}`);
  console.log(`Con nota de revisor (>): ${totalNota}  → a notaRevisor, NO se muestran al aspirante`);
  console.log(`Posición correcta EN EL .MD:  A:${antes.A}  B:${antes.B}  C:${antes.C}  D:${antes.D}`);
  console.log(`Posición correcta BARAJADA:   A:${despues.A}  B:${despues.B}  C:${despues.C}  D:${despues.D}`);
  console.log('');
}

// ---------------------------------------------------------------------------
// Escritura a la base (--escribir) — misma estrategia de reconciliación no
// destructiva que importar-cultural-oferta.ts.
// ---------------------------------------------------------------------------
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
    const porSlug = new Map<string, ArchivoParsed[]>();
    for (const a of archivos) {
      if (!porSlug.has(a.slug)) porSlug.set(a.slug, []);
      porSlug.get(a.slug)!.push(a);
    }

    const vistos = new Set<number>();
    const existentesPorTema = new Map<number, Map<string, any>>();
    let nuevos = 0;
    let actualizados = 0;
    let sinCambio = 0;

    for (const [slug, arls] of porSlug) {
      const info = LIBROS[slug];
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
            respuestaCorrecta: r.correctaTexto,
            explicacion: r.justificacion,
            referencia: r.referencia,
            notaRevisor: r.notaRevisor,
            tema: r.subtema,
            banco: BANCO,
            numeroEnEje: r.numero,
            retirado: null as string | null,
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

    // Retirados: se marcan, no se borran (mismo motivo que el cultural).
    let marcados = 0;
    for (const a of archivos) {
      for (const r of a.retirados) {
        const res = await prisma.reactivo.updateMany({
          where: { banco: BANCO, enunciado: r.enunciado },
          data: { retirado: r.retirado },
        });
        marcados += res.count;
      }
    }
    if (marcados) console.log(`  Marcados como retirados: ${marcados}`);

    const yaRetirados = await prisma.reactivo.findMany({
      where: { banco: BANCO, retirado: { not: null } },
      select: { id: true },
    });
    for (const r of yaRetirados) vistos.add(r.id);

    // Poda: borra reactivos banco='tropa' que ya no están en los .md, sólo si
    // nadie los referencia (mismos 3 historiales que el cultural).
    let borrados = 0;
    let conservadosPorReferencia = 0;
    const restantes = await prisma.reactivo.findMany({
      where: { banco: BANCO },
      select: { id: true, _count: { select: { respuestas: true, repasos: true, respuestasPractica: true } } },
    });
    for (const r of restantes) {
      if (vistos.has(r.id)) continue;
      const tieneHistorial = r._count.respuestas > 0 || r._count.repasos > 0 || r._count.respuestasPractica > 0;
      if (tieneHistorial) {
        conservadosPorReferencia++;
      } else {
        await prisma.reactivo.delete({ where: { id: r.id } });
        borrados++;
      }
    }

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
        `  ⚠ ${conservadosPorReferencia} reactivo(s) ya no están en los .md pero tienen respuestas/repasos: se CONSERVARON.`,
      );
    }
    console.log(`  Total ahora: ${porSlug.size} libros · ${totalTemas} temas · ${totalReact} reactivos banco='${BANCO}'.`);
  } finally {
    await prisma.$disconnect();
  }
}

// ---------------------------------------------------------------------------
async function main() {
  console.log(`=== Importador de tropa (OFERTA) · ${ESCRIBIR ? 'ESCRIBIR' : 'MODO PRUEBA'} ===\n`);
  const archivos: ArchivoParsed[] = [];

  for (const slug of Object.keys(LIBROS).sort()) {
    const dir = path.join(RAIZ, slug);
    if (!fs.existsSync(dir)) {
      console.log(`✗ ${slug}: carpeta no encontrada en ${RAIZ}`);
      continue;
    }
    const mds = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
    mds.forEach((f, idx) => {
      try {
        archivos.push(parsearArchivo(slug, path.join(dir, f), `${slug}/${f}`, idx + 1));
      } catch (e) {
        console.log(`✗ ${slug}/${f}: ${(e as Error).message}`);
      }
    });
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
    console.log('  npx ts-node scripts/importar-tropa.ts --escribir');
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
