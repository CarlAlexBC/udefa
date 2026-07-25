/**
 * Seed que marca a un usuario como admin. El correo va por parámetro.
 *
 * Corre (cualquiera de las dos formas):
 *   npx ts-node scripts/seed-admin.ts tu-correo@gmail.com
 *   ADMIN_EMAIL=tu-correo@gmail.com npx ts-node scripts/seed-admin.ts
 *
 * Qué hace:
 *   Busca al usuario con ese email y setea rol='admin'.
 *   Idempotente: puedes correrlo varias veces sin efecto acumulado.
 *
 * Nota: si el usuario aún no está registrado, no lo crea (evitamos
 * meter passwords fake). El mensaje te dirá que primero te registres.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Correo por parámetro: primer argumento, o variable de entorno ADMIN_EMAIL.
const ADMIN_EMAIL = process.argv[2] ?? process.env.ADMIN_EMAIL ?? '';

if (!ADMIN_EMAIL.includes('@')) {
  console.error(
    '✖ Falta el correo. Uso:\n' +
      '    npx ts-node scripts/seed-admin.ts tu-correo@gmail.com',
  );
  process.exit(1);
}

async function main() {
  console.log(`▶ Seed Admin — marcando ${ADMIN_EMAIL} como admin`);

  // Cast defensivo: el cliente Prisma aún no refleja el campo `rol` hasta
  // que se corra `prisma generate` tras la migración. En runtime está OK.
  const resultado = await (prisma.usuario.updateMany as unknown as (args: {
    where: { email: string };
    data: { rol: string };
  }) => Promise<{ count: number }>)({
    where: { email: ADMIN_EMAIL },
    data: { rol: 'admin' },
  });

  if (resultado.count === 0) {
    console.log(
      `  ⚠ No hay usuario registrado con ${ADMIN_EMAIL}. Regístrate primero en /registro y luego vuelve a correr este seed.`,
    );
  } else {
    console.log(`  ✓ ${resultado.count} usuario(s) actualizado(s) → rol=admin`);
  }

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
