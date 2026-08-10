// Omite ra-33 del examen POR AHORA (no tiene clave todavia): lo desliga del
// bloque (bloqueId=null) para que el armado no lo sirva ni lo califique. NO lo
// borra: la imagen y el reactivo quedan. Para reactivarlo cuando tenga clave:
// poner bloqueId = <id del bloque Abstracto> y asignarle la respuesta.
// Temporal (prefijo _).

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const IMAGEN = '/reactivos/abstracto/ra-33.png';

async function main() {
  const r = await prisma.reactivo.findFirst({ where: { imagenUrl: IMAGEN } });
  if (!r) { console.log('No encuentro ra-33.'); return; }
  if (r.bloqueId === null) { console.log(`ra-33 (id ${r.id}) ya estaba omitido.`); return; }
  await prisma.reactivo.update({ where: { id: r.id }, data: { bloqueId: null } });
  console.log(`ra-33 (id ${r.id}) desligado del bloque: omitido del examen. Reversible (bloqueId=5).`);

  const bloque = await prisma.bloque.findFirst({ where: { nombre: { contains: 'bstracto', mode: 'insensitive' } } });
  const activos = await prisma.reactivo.count({ where: { bloqueId: bloque.id, tema: 'razonamiento_abstracto' } });
  console.log(`Reactivos de abstracto activos en el examen ahora: ${activos}.`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
