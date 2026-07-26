/**
 * Seed del lado de la DEMANDA: crea el Temario de cada plantel (año 2026) con sus
 * materias y la selección de capítulos, leyendo los JSON curados a mano
 * (docs/examen-cultural/temarios.json + puente-oferta-demanda.json). Es el puente
 * entre el modelo viejo (archivos) y el nuevo (tablas Temario/MateriaTemario/
 * MateriaTemarioCapitulo), para que a partir de aquí el temario se edite en la base.
 *
 * Reparto: cada MateriaTemario.numPreguntas se calcula con la MISMA fórmula que
 * armarExamenCultural (100 repartido parejo entre las materias que el plantel pide,
 * el sobrante del redondeo a las primeras). Así la Fase 3 (armar desde la base)
 * reproduce exactamente el examen de hoy.
 *
 * Idempotente: si un plantel ya tiene un Temario PUBLICADO para el año, se salta.
 * Cada plantel se siembra en una transacción (todo o nada).
 *
 * Uso (desde apps/backend):
 *   npx ts-node scripts/seed-temarios.ts
 */
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();
const ANIO = 2026;
const TOTAL_EXAMEN = 100;

// Código de plantel (llave de los JSON) → nombre canónico (llave de Plantel.nombre).
// Es el inverso de CODIGO_POR_PLANTEL en examenes.service.ts; el id no es estable
// entre entornos, así que se resuelve por nombre.
const NOMBRE_POR_CODIGO: Record<string, string> = {
  HCM: 'Heroico Colegio Militar',
  EMM: 'Escuela Militar de Medicina',
  EME: 'Escuela Militar de Enfermería',
  EMO: 'Escuela Militar de Odontología',
  EMOS: 'Escuela Militar de Oficiales de Sanidad',
  EMA: 'Escuela Militar de Aviación',
};

function rutaCultural(archivo: string): string {
  return path.resolve(process.cwd(), '..', '..', 'docs', 'examen-cultural', archivo);
}

async function main() {
  console.log('▶ Seed Temarios (demanda) — arranca');

  const puente: Record<string, Record<string, { slug: string; capitulos: number[] }>> = JSON.parse(
    fs.readFileSync(rutaCultural('puente-oferta-demanda.json'), 'utf8'),
  ).puente;
  const temarios = JSON.parse(fs.readFileSync(rutaCultural('temarios.json'), 'utf8'));

  let creados = 0;
  let saltados = 0;
  let materiasCreadas = 0;
  let capsVinculados = 0;

  for (const codigo of Object.keys(puente)) {
    const nombre = NOMBRE_POR_CODIGO[codigo];
    if (!nombre) {
      console.log(`  ✗ código ${codigo} sin nombre de plantel conocido — se omite`);
      continue;
    }
    const plantel = await prisma.plantel.findFirst({ where: { nombre }, select: { id: true } });
    if (!plantel) {
      console.log(`  ✗ plantel "${nombre}" (${codigo}) no existe en la BD — se omite`);
      continue;
    }

    const ya = await prisma.temario.findFirst({
      where: { plantelId: plantel.id, anio: ANIO, estado: 'PUBLICADO' },
      select: { id: true },
    });
    if (ya) {
      console.log(`  • ${codigo} → ya tiene Temario ${ANIO} publicado (id=${ya.id}), skip`);
      saltados++;
      continue;
    }

    const carrera = temarios.carreras.find((c: any) => c.plantel === codigo);
    if (!carrera) {
      console.log(`  ✗ ${codigo} sin carrera en temarios.json — se omite`);
      continue;
    }
    const materias: any[] = carrera.materias ?? [];

    // Reparto: sólo las materias con selección en el puente cuentan para las 100.
    const nActivas = materias.filter((m) => puente[codigo]?.[m.codigo_normalizado || m.codigo]).length;
    const base = nActivas ? Math.floor(TOTAL_EXAMEN / nActivas) : 0;
    let resto = nActivas ? TOTAL_EXAMEN - base * nActivas : 0;

    await prisma.$transaction(async (tx) => {
      const temario = await tx.temario.create({
        data: { plantelId: plantel.id, anio: ANIO, estado: 'PUBLICADO' },
        select: { id: true },
      });
      creados++;
      console.log(`  ✓ ${codigo} (${nombre}) → Temario ${ANIO} creado (id=${temario.id})`);

      let orden = 1;
      for (const m of materias) {
        const cod = m.codigo_normalizado || m.codigo;
        const pm = puente[codigo]?.[cod];
        if (!pm) continue; // materia sin selección para este plantel

        // La cuota se consume aquí, igual que en armarExamenCultural.
        const cuota = base + (resto > 0 ? 1 : 0);
        if (resto > 0) resto--;

        const libro = await tx.libro.findUnique({ where: { slug: pm.slug }, select: { id: true } });
        if (!libro) {
          console.log(`      ✗ ${codigo}/${m.nombre}: libro "${pm.slug}" no existe en la oferta — materia omitida`);
          continue;
        }

        const mt = await tx.materiaTemario.create({
          data: {
            temarioId: temario.id,
            nombre: m.nombre,
            libroId: libro.id,
            numPreguntas: cuota,
            orden: orden++,
          },
          select: { id: true },
        });
        materiasCreadas++;

        let capsOk = 0;
        for (const numero of pm.capitulos) {
          const cap = await tx.capitulo.findUnique({
            where: { libroId_numero: { libroId: libro.id, numero } },
            select: { id: true },
          });
          if (!cap) {
            console.log(`      ⚠ ${codigo}/${m.nombre}: cap ${numero} de ${pm.slug} no está en la oferta — se omite`);
            continue;
          }
          await tx.materiaTemarioCapitulo.create({
            data: { materiaTemarioId: mt.id, capituloId: cap.id },
          });
          capsOk++;
          capsVinculados++;
        }
        console.log(`      • ${m.nombre}: ${cuota} preguntas · ${capsOk}/${pm.capitulos.length} caps (${pm.slug})`);
      }
    });
  }

  console.log('\n  Resumen:');
  console.log(`     Temarios creados: ${creados} · saltados (ya existían): ${saltados}`);
  console.log(`     Materias creadas: ${materiasCreadas} · capítulos vinculados: ${capsVinculados}`);
  console.log('✔ Seed completado');
}

main()
  .catch((e) => {
    console.error('✖ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
