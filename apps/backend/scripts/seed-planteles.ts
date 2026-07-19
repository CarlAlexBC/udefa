/**
 * Seed de planteles del Sistema Educativo Militar.
 *
 * Corre:
 *   npx ts-node scripts/seed-planteles.ts
 *
 * Qué hace:
 *   Inserta los planteles del catálogo NUEVOS_PLANTELES si no existen ya
 *   (comparación por nombre exacto). No toca los planteles ya insertados
 *   ni sobrescribe descripciones — es 100% idempotente.
 *
 * Nota: el modelo Plantel no tiene @unique en `nombre`, por eso usamos
 * findFirst + create en vez de upsert. Si alguna vez se agrega el índice
 * único, se puede migrar a upsert.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Planteles nuevos a agregar al catálogo (2026-07-18).
 * Se mantiene el nombre exacto como debe aparecer en el dropdown de registro.
 * Las 3 últimas son escuelas del Colegio del Aire — se registran por separado
 * porque el cadete elige una carrera específica dentro de la Fuerza Aérea.
 */
const NUEVOS_PLANTELES: Array<{ nombre: string; descripcion: string }> = [
  {
    nombre: 'Escuela Militar de Odontología',
    descripcion: 'Forma cirujanos dentistas militares al servicio del Ejército y Fuerza Aérea.',
  },
  {
    nombre: 'Escuela Militar de Enfermería',
    descripcion: 'Forma personal de enfermería militar para el servicio de sanidad.',
  },
  {
    nombre: 'Escuela Militar de Transmisiones',
    descripcion: 'Forma oficiales en el arma de transmisiones — comunicaciones y guerra electrónica.',
  },
  {
    nombre: 'Escuela Militar de Oficiales de Sanidad',
    descripcion: 'Forma oficiales del servicio de sanidad militar en distintas especialidades.',
  },
  {
    nombre: 'Escuela Militar de Materiales de Guerra',
    descripcion: 'Forma oficiales especialistas en armamento, munición y logística de material bélico.',
  },
  {
    nombre: 'Escuela Militar de Aviación',
    descripcion: 'Colegio del Aire — forma pilotos aviadores de la Fuerza Aérea Mexicana.',
  },
  {
    nombre: 'Escuela Militar de Mantenimiento y Abastecimiento',
    descripcion: 'Colegio del Aire — forma oficiales en mantenimiento aeronáutico y abastecimiento.',
  },
  {
    nombre: 'Escuela Militar de Especialistas de Fuerza Aérea',
    descripcion: 'Colegio del Aire — forma especialistas técnicos de la Fuerza Aérea Mexicana.',
  },
];

async function main() {
  console.log('▶ Seed Planteles — arranca');

  let creados = 0;
  let existentes = 0;

  for (const p of NUEVOS_PLANTELES) {
    const yaExiste = await prisma.plantel.findFirst({
      where: { nombre: p.nombre },
      select: { id: true },
    });

    if (yaExiste) {
      console.log(`     • ${p.nombre} → ya existe (id=${yaExiste.id}), skip`);
      existentes++;
      continue;
    }

    const creado = await prisma.plantel.create({
      data: { nombre: p.nombre, descripcion: p.descripcion },
      select: { id: true, nombre: true },
    });
    console.log(`     • ${creado.nombre} → creado (id=${creado.id})`);
    creados++;
  }

  const total = await prisma.plantel.count();
  console.log(`  Resumen:`);
  console.log(`     • Creados en esta corrida: ${creados}`);
  console.log(`     • Ya existían: ${existentes}`);
  console.log(`     • Total de planteles en BD: ${total}`);

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
