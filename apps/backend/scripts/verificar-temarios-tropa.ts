import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();

  const planteles = await prisma.plantel.count({ where: { tipo: 'TROPA' } });
  const temarios = await prisma.temario.count({
    where: { plantel: { tipo: 'TROPA' }, estado: 'PUBLICADO' },
  });
  console.log(`Planteles TROPA: ${planteles}   Temarios PUBLICADO: ${temarios}`);

  const materias = await prisma.materiaTemario.groupBy({
    by: ['nombre'],
    where: { temario: { plantel: { tipo: 'TROPA' } } },
    _count: true,
  });
  console.log('\n=== MateriaTemario por nombre (cursos de tropa) ===');
  for (const m of materias.sort((a, b) => b._count - a._count)) {
    console.log(`  ${m.nombre}: ${m._count} cursos`);
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
