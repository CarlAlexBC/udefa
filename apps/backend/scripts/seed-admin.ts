/**
 * Seed que marca al usuario "raíz" del sistema como admin.
 *
 * Corre:
 *   npx ts-node scripts/seed-admin.ts
 *
 * Qué hace:
 *   Busca al usuario con email ADMIN_EMAIL y setea rol='admin'.
 *   Idempotente: puedes correrlo varias veces sin efecto acumulado.
 *
 * Nota: si el usuario aún no está registrado, no lo crea (evitamos
 * meter passwords fake). El mensaje te dirá que primero te registres.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ADMIN_EMAIL = 'alexbc1889@gmail.com';

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
