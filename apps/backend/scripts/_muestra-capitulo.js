/**
 * Vuelca los reactivos de un capítulo cultural (materia + número) para tener la
 * fuente al redactar "Entiende el tema". Solo lee. Uso:
 *   node scripts/_muestra-capitulo.js "Álgebra" 2
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const materia = process.argv[2] || 'Álgebra';
  const numero = Number(process.argv[3] || 2);

  const capitulo = await prisma.capitulo.findFirst({
    where: { numero, libro: { materia } },
    include: { libro: { select: { materia: true, autor: true } } },
  });
  if (!capitulo) {
    console.log(`No encontré ${materia} · cap ${numero}`);
    return;
  }

  const reactivos = await prisma.reactivo.findMany({
    where: { banco: 'cultural', temaBanco: { capituloId: capitulo.id } },
    select: {
      enunciado: true,
      respuestaCorrecta: true,
      explicacion: true,
      referencia: true,
    },
    take: 14,
  });

  console.log(`${capitulo.libro.materia} · Cap ${capitulo.numero} · ${capitulo.titulo}`);
  console.log(`Autor: ${capitulo.libro.autor} · reactivos totales en muestra: ${reactivos.length}\n`);
  reactivos.forEach((r, i) => {
    console.log(`--- ${i + 1} ---`);
    console.log(`P: ${r.enunciado}`);
    console.log(`R: ${r.respuestaCorrecta}`);
    if (r.explicacion) console.log(`Justif (cita): ${r.explicacion}`);
    if (r.referencia) console.log(`Ref: ${r.referencia}`);
    console.log('');
  });
}

main()
  .catch((e) => console.error('ERROR:', e.message))
  .finally(() => prisma.$disconnect());
