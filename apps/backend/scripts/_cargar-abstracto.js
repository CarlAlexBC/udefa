// Carga los reactivos de Razonamiento Abstracto (bloque psicométrico) desde las
// imágenes ya copiadas a apps/web/public/reactivos/abstracto/ra-NN.png.
//
// Reglas pedidas por Carlo (7 ago 2026):
//   - SIN respuesta correcta (él la asigna a mano después).
//   - SIN enunciado de texto (la pregunta va en la imagen).
//   - En orden por fecha (ra-01..ra-32 ya están renombradas en ese orden).
//
// Es idempotente: si ya hay reactivos de 'razonamiento_abstracto' en el bloque,
// aborta para no duplicar. Temporal (prefijo _): borrar cuando ya no se use.

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Número de opciones (4 = A-D, 5 = A-E) por imagen, según lo que se vio en cada
// captura. Carlo lo confirma al asignar respuestas — si alguna no coincide con
// su imagen, se ajusta el largo de este arreglo para esa posición.
// ra-01..ra-32:
const OPCIONES = [4,4,4,4,4,4,4,5,5,4,5,5,5,5,5,5,5,4,5,5,5,4,5,5,5,5,5,5,5,5,5,5];
const TEMA = 'razonamiento_abstracto';

async function main() {
  // 1. Localiza el bloque de Razonamiento Abstracto por nombre (no hardcodeamos
  //    el id: lo buscamos para no cargar en el bloque equivocado).
  const bloque = await prisma.bloque.findFirst({
    where: { nombre: { contains: 'bstracto', mode: 'insensitive' } },
  });
  if (!bloque) {
    const bloques = await prisma.bloque.findMany({
      select: { id: true, nombre: true, examenId: true },
      orderBy: { id: 'asc' },
    });
    console.log('No encontré un bloque cuyo nombre contenga "bstracto". Bloques:');
    console.table(bloques);
    return;
  }
  console.log(`Bloque destino: id=${bloque.id} "${bloque.nombre}" (examen ${bloque.examenId})`);

  // 2. Guard idempotente: no duplicar.
  const ya = await prisma.reactivo.count({ where: { bloqueId: bloque.id, tema: TEMA } });
  if (ya > 0) {
    console.log(`Ya hay ${ya} reactivos de "${TEMA}" en ese bloque. Aborto para no duplicar.`);
    return;
  }

  // 3. Arma los 32 reactivos.
  const data = OPCIONES.map((n, i) => {
    const num = String(i + 1).padStart(2, '0');
    const letras = ['A', 'B', 'C', 'D', 'E'].slice(0, n);
    return {
      bloqueId: bloque.id,
      enunciado: '',                 // en blanco: la pregunta va en la imagen
      tipo: 'opcion_multiple',
      opciones: letras,              // Json: solo las letras; la figura está en la imagen
      respuestaCorrecta: null,       // sin asignar: Carlo la pone a mano
      tema: TEMA,
      imagenUrl: `/reactivos/abstracto/ra-${num}.png`,
    };
  });

  const res = await prisma.reactivo.createMany({ data });
  console.log(`Creados ${res.count} reactivos de razonamiento abstracto en el bloque ${bloque.id}.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
