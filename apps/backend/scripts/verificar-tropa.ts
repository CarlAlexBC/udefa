import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  const porBanco = await prisma.reactivo.groupBy({ by: ['banco'], _count: true });
  console.log('=== Reactivos por banco ===');
  for (const b of porBanco) console.log(`  ${b.banco}: ${b._count}`);

  const slugs = [
    'ley-uso-de-la-fuerza',
    'derechos-humanos-dn-m-110',
    'codigo-justicia-militar',
    'ley-organica-ejercito',
    'ley-disciplina',
    'reglamento-deberes-militares',
  ];
  console.log('\n=== Libros de tropa en la base ===');
  for (const slug of slugs) {
    const libro = await prisma.libro.findUnique({ where: { slug }, include: { capitulos: true } });
    if (!libro) {
      console.log(`  ${slug}: NO ENCONTRADO`);
      continue;
    }
    const nReact = await prisma.reactivo.count({
      where: { banco: 'tropa', temaBanco: { capitulo: { libroId: libro.id } } },
    });
    console.log(`  ${slug}: ${libro.capitulos.length} capítulos, ${nReact} reactivos`);
  }
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
