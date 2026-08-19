/**
 * Seed de los Examen del examen CULTURAL, uno por plantel con material.
 *
 * Idempotente: por cada plantel, si ya existe un Examen tipo 'cultural' con ese
 * plantelId y año, no crea otro (findFirst + create, como seed-planteles.ts). El
 * del HCM ya existía (lo crea importar-cultural.ts).
 *
 * El examen cultural se arma AL VUELO desde el árbol de oferta (banco 'cultural'):
 * este Examen sólo necesita apuntar al plantel correcto; sus bloques y reactivos
 * los sintetiza armarExamenCultural leyendo el puente-oferta-demanda.json. Por eso
 * NO se crean Bloques ni se tocan reactivos.
 *
 * Uso:
 *   npx ts-node scripts/seed-examenes-culturales.ts
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const ANIO = 2026;

// Nombre del plantel (llave canónica, la misma de CODIGO_POR_PLANTEL en
// examenes.service.ts) → código de temario, sólo para el nombre del examen. Se
// resuelve por NOMBRE y no por plantelId hardcodeado, porque el id depende del
// orden de siembra y no es estable entre entornos. El HCM no está aquí: su Examen
// ya existe (lo crea importar-cultural.ts).
const PLANTELES: Array<{ nombre: string; codigo: string }> = [
  { nombre: 'Escuela Militar de Medicina', codigo: 'EMM' },
  { nombre: 'Escuela Militar de Odontología', codigo: 'EMO' },
  { nombre: 'Escuela Militar de Enfermería', codigo: 'EME' },
  { nombre: 'Escuela Militar de Oficiales de Sanidad', codigo: 'EMOS' },
  { nombre: 'Escuela Militar de Aviación', codigo: 'EMA' },
  { nombre: 'Escuela Militar de Ingeniería', codigo: 'EMI' },
  { nombre: 'Escuela Militar de Materiales de Guerra', codigo: 'EMMG' },
  { nombre: 'Escuela Militar de Mantenimiento y Abastecimiento', codigo: 'EMMA' },
  { nombre: 'Escuela Militar de Especialistas de Fuerza Aérea', codigo: 'EMEFA' },
];

async function main() {
  console.log('▶ Seed Examenes culturales — arranca');

  let creados = 0;
  let existentes = 0;

  for (const { nombre, codigo } of PLANTELES) {
    const plantel = await prisma.plantel.findFirst({
      where: { nombre },
      select: { id: true, nombre: true },
    });
    if (!plantel) {
      console.log(`     ✗ plantel "${nombre}" (${codigo}) no existe en la BD — se omite`);
      continue;
    }
    const plantelId = plantel.id;

    const ya = await prisma.examen.findFirst({
      where: { tipo: 'cultural', plantelId, anio: ANIO },
      select: { id: true },
    });
    if (ya) {
      console.log(`     • ${codigo} (${plantel.nombre}) → ya existe (id=${ya.id}), skip`);
      existentes++;
      continue;
    }

    const ex = await prisma.examen.create({
      data: {
        tipo: 'cultural',
        nombre: `Examen cultural ${codigo} ${ANIO}`,
        duracionMin: 120,
        calificable: true,
        plantelId,
        anio: ANIO,
      },
      select: { id: true, nombre: true },
    });
    console.log(`     • ${codigo} (${plantel.nombre}) → creado (id=${ex.id}) "${ex.nombre}"`);
    creados++;
  }

  const total = await prisma.examen.count({ where: { tipo: 'cultural' } });
  console.log('  Resumen:');
  console.log(`     • Creados en esta corrida: ${creados}`);
  console.log(`     • Ya existían: ${existentes}`);
  console.log(`     • Total de examenes culturales en BD: ${total}`);
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
