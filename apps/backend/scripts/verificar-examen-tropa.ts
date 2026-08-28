import { PrismaClient, Prisma } from '@prisma/client';

const BANCOS_LIBRO = ['cultural', 'tropa'];

// Cursos representativos: uno con LM+DH puros (sin Física/Álgebra), uno mixto
// (LM+DH+Física ya enlazada), uno sólo DH.
const CURSOS_PRUEBA = [
  'EMCT_F_S_1os_TRANS_2026',
  'EMMA_I_F_O_F_A_A_A_2026',
  'EMMG_Sgto_1o_M_I_2026',
];

async function main() {
  const prisma = new PrismaClient();

  for (const nombre of CURSOS_PRUEBA) {
    const plantel = await prisma.plantel.findFirst({ where: { nombre }, select: { id: true } });
    if (!plantel) {
      console.log(`✗ ${nombre}: plantel no encontrado`);
      continue;
    }
    const temario = await prisma.temario.findFirst({
      where: { plantelId: plantel.id, estado: 'PUBLICADO' },
      orderBy: { anio: 'desc' },
      include: { materias: { orderBy: { orden: 'asc' }, include: { capitulos: { select: { capituloId: true } } } } },
    });
    if (!temario) {
      console.log(`✗ ${nombre}: sin Temario publicado`);
      continue;
    }

    console.log(`\n=== ${nombre} (Temario id=${temario.id}) ===`);
    for (const m of temario.materias) {
      const capituloIds = m.capitulos.map((c) => c.capituloId);
      if (capituloIds.length === 0) {
        console.log(`  ${m.nombre}: sin capítulos enlazados (0 disponibles)`);
        continue;
      }
      // Misma consulta que armarBloquesDesdeTemario en examenes.service.ts.
      const disponibles = await prisma.$queryRaw<Array<{ n: bigint }>>(Prisma.sql`
        SELECT COUNT(*) AS n
        FROM "Reactivo" r
        JOIN "Tema" t ON t.id = r."temaId"
        WHERE r.banco IN (${Prisma.join(BANCOS_LIBRO)})
          AND t."capituloId" IN (${Prisma.join(capituloIds)})
      `);
      const n = Number(disponibles[0].n);
      const estado = n >= m.numPreguntas ? '✓' : '⚠ INSUFICIENTE';
      console.log(`  ${estado} ${m.nombre}: pide ${m.numPreguntas}, hay ${n} disponibles`);
    }
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
