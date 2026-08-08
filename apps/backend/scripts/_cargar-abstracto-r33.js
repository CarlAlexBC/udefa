// Carga el reactivo ra-33 (union de R13 enunciado + R14 opciones) al bloque de
// Razonamiento Abstracto. Idempotente: no duplica si ya existe esa imagen.
// Temporal (prefijo _).

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const IMAGEN = '/reactivos/abstracto/ra-33.png';
const N_OPCIONES = 5; // R14 trae A-E

async function main() {
  const bloque = await prisma.bloque.findFirst({
    where: { nombre: { contains: 'bstracto', mode: 'insensitive' } },
  });
  if (!bloque) { console.log('No encontré el bloque de Abstracto.'); return; }

  const existe = await prisma.reactivo.findFirst({ where: { imagenUrl: IMAGEN } });
  if (existe) {
    console.log(`Ya existe (id ${existe.id}) para ${IMAGEN}. No duplico.`);
    return;
  }

  const letras = ['A', 'B', 'C', 'D', 'E'].slice(0, N_OPCIONES);
  const r = await prisma.reactivo.create({
    data: {
      bloqueId: bloque.id,
      enunciado: '',
      tipo: 'opcion_multiple',
      opciones: letras,
      respuestaCorrecta: null,
      tema: 'razonamiento_abstracto',
      imagenUrl: IMAGEN,
    },
  });

  const total = await prisma.reactivo.count({
    where: { bloqueId: bloque.id, tema: 'razonamiento_abstracto' },
  });
  console.log(`Creado reactivo id ${r.id} (${IMAGEN}, ${N_OPCIONES} opc). Total abstracto: ${total}.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
