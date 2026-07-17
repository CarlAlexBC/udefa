/**
 * Seed inicial del catálogo TemaPrioridad.
 *
 * Corre:
 *   npx ts-node scripts/seed-temas-prioridad.ts
 *
 * Qué hace:
 * 1. Marca 6 temas prioritarios con peso=3 (los que Carlo eligió como críticos
 *    por casos recientes en fuerzas armadas): suicidio, manejo_emocional,
 *    adicciones, autoestima, autocuidado, corrupcion.
 * 2. Sincroniza el resto: descubre todos los `tema` distintos que aparecen en
 *    la tabla Reactivo y los inserta con peso=1 si no están ya en TemaPrioridad.
 *
 * Idempotente: puedes correrlo varias veces sin efecto acumulado. Si ya
 * modificaste un peso desde el admin panel, este script NO lo sobrescribe
 * (usa upsert que solo actualiza campos explícitos).
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Temas prioritarios que Carlo identificó como críticos (2026-07-17).
 * Motivo contextual: casos frecuentes documentados en fuerzas armadas
 * mexicanas en años recientes.
 */
const PRIORITARIOS: Array<{ tema: string; motivo: string }> = [
  {
    tema: 'suicidio',
    motivo:
      'Casos documentados de suicidio en fuerzas armadas en años recientes — screening prioritario.',
  },
  {
    tema: 'manejo_emocional',
    motivo:
      'Regulación emocional bajo estrés operativo — predictor central de compatibilidad militar.',
  },
  {
    tema: 'adicciones',
    motivo:
      'Consumo problemático de sustancias — factor de riesgo con impacto directo en desempeño operativo.',
  },
  {
    tema: 'autoestima',
    motivo:
      'Base emocional estable — precondición para sostener exigencia sostenida en formación.',
  },
  {
    tema: 'autocuidado',
    motivo:
      'Cuidado físico y mental sostenido — requisito para carrera militar prolongada.',
  },
  {
    tema: 'corrupcion',
    motivo:
      'Casos frecuentes de corrupción del personal militar — screening ético prioritario.',
  },
];

async function main() {
  console.log('▶ Seed TemaPrioridad — arranca');

  // Paso 1: marcar los 6 prioritarios con peso=3
  console.log('  1. Marcando 6 temas prioritarios con peso=3...');
  for (const p of PRIORITARIOS) {
    await prisma.temaPrioridad.upsert({
      where: { tema: p.tema },
      update: {
        // NO tocamos peso si ya existe con peso distinto — respetamos ajustes manuales.
        // Solo actualizamos el motivo si el actual es null.
        motivoContextual: p.motivo,
      },
      create: {
        tema: p.tema,
        peso: 3,
        descripcion: null,
        motivoContextual: p.motivo,
      },
    });
    console.log(`     • ${p.tema} → peso=3 (creado o sincronizado motivo)`);
  }

  // Paso 2: sincronizar con los temas reales de la BD
  console.log('  2. Sincronizando con temas existentes en Reactivo...');
  const temasEnBD = await prisma.reactivo.findMany({
    where: { tema: { not: null } },
    select: { tema: true },
    distinct: ['tema'],
  });

  const temasExistentesEnPrioridad = new Set(
    (await prisma.temaPrioridad.findMany({ select: { tema: true } })).map(
      (r) => r.tema,
    ),
  );

  let creados = 0;
  for (const r of temasEnBD) {
    if (r.tema && !temasExistentesEnPrioridad.has(r.tema)) {
      await prisma.temaPrioridad.create({
        data: { tema: r.tema, peso: 1 },
      });
      creados++;
    }
  }
  console.log(`     • ${creados} temas nuevos insertados con peso=1`);

  // Paso 3: resumen final
  const totalPrioridades = await prisma.temaPrioridad.count();
  const conPesoAlto = await prisma.temaPrioridad.count({
    where: { peso: { gt: 1 } },
  });
  console.log(`  3. Resumen final:`);
  console.log(`     • Total en TemaPrioridad: ${totalPrioridades}`);
  console.log(`     • Con peso > 1 (prioritarios): ${conPesoAlto}`);

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
