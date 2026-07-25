/**
 * Borra TODAS las cuentas (usuarios) y la actividad que cuelga de ellas.
 *
 *   npx ts-node scripts/borrar-cuentas.ts             → MODO SECO (solo cuenta, NO borra)
 *   npx ts-node scripts/borrar-cuentas.ts --confirmar → borra de verdad
 *
 * Qué borra, en orden de dependencia (o la base lo rechaza):
 *   RespuestaReactivo → IntentoExamen → SesionExamenCompleto → Sesion → Usuario
 *
 * Qué NO toca: reactivos, exámenes, bloques, planteles, temas — todo el
 * contenido se queda. Esto borra CUENTAS y su actividad, no el banco.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const CONFIRMAR = process.argv.includes('--confirmar');

async function main() {
  console.log(CONFIRMAR ? '=== BORRADO REAL ===' : '=== MODO SECO (no borra nada) ===');
  console.log('');

  const conteos = {
    RespuestaReactivo: await prisma.respuestaReactivo.count(),
    IntentoExamen: await prisma.intentoExamen.count(),
    SesionExamenCompleto: await prisma.sesionExamenCompleto.count(),
    Sesion: await prisma.sesion.count(),
    Usuario: await prisma.usuario.count(),
  };

  console.log('Se va a borrar:');
  for (const [tabla, n] of Object.entries(conteos)) {
    console.log(`  ${tabla.padEnd(22)} ${String(n).padStart(5)}`);
  }

  // Lista de las cuentas, para verlas antes de disparar.
  const usuarios = await prisma.usuario.findMany({
    select: { id: true, email: true, rol: true },
    orderBy: { id: 'asc' },
  });
  console.log('');
  console.log('Cuentas:');
  for (const u of usuarios) {
    console.log(`  [${u.id}] ${u.email}  (${u.rol})`);
  }
  console.log('');

  if (!CONFIRMAR) {
    console.log('Modo seco: no se borró nada. Para borrar de verdad:');
    console.log('  npx ts-node scripts/borrar-cuentas.ts --confirmar');
    await prisma.$disconnect();
    return;
  }

  // Borrado en orden de dependencia.
  const r1 = await prisma.respuestaReactivo.deleteMany({});
  const r2 = await prisma.intentoExamen.deleteMany({});
  const r3 = await prisma.sesionExamenCompleto.deleteMany({});
  const r4 = await prisma.sesion.deleteMany({});
  const r5 = await prisma.usuario.deleteMany({});

  console.log('Borrado:');
  console.log(`  RespuestaReactivo     ${r1.count}`);
  console.log(`  IntentoExamen         ${r2.count}`);
  console.log(`  SesionExamenCompleto  ${r3.count}`);
  console.log(`  Sesion                ${r4.count}`);
  console.log(`  Usuario               ${r5.count}`);
  console.log('');
  console.log(`✓ Listo. Quedan ${await prisma.usuario.count()} cuentas.`);

  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
