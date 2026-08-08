/**
 * Siembra un reactivo-canario (Capa 5 del blindaje anti-copia).
 *
 * Un canario es un reactivo INVENTADO pero creíble, con un dato único que solo
 * tú conoces, que vive en el banco cultural para que se sirva al azar en los
 * exámenes. NO cuenta para ningún aspirante (va con `noPuntua = true`, y el
 * scoring lo excluye). Si aparece en el material de un competidor, es prueba de
 * que copió tu banco.
 *
 * CÓMO USARLO:
 *   1. Llena el objeto CANARIO de abajo con tu contenido.
 *   2. Elige TEMA_ID: a qué tema del banco cultural pertenece. Para que se sirva,
 *      tiene que ser un tema que algún plantel pida en su temario (mira la tabla
 *      "Tema", o pídemelo y te ayudo a elegir uno).
 *   3. Corre desde la raíz del repo:
 *        node apps/backend/scripts/sembrar-canario.js
 *
 * Se puede correr varias veces (cambiando el contenido) para sembrar varios.
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// ─── LLENA ESTO ──────────────────────────────────────────────────────────────
const TEMA_ID = null; // ← id del Tema del banco cultural (OBLIGATORIO)

const CANARIO = {
  enunciado: 'ESCRIBE AQUÍ la pregunta inventada, creíble, con tu dato único.',
  // Cuatro opciones del mismo tipo y magnitud; la correcta la defines tú.
  opciones: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
  respuestaCorrecta: 'Opción A', // debe coincidir EXACTO con una de las opciones
  // Nota interna para recordar que es canario. NUNCA se le muestra al aspirante.
  notaRevisor: 'CANARIO anti-copia — dato inventado, no existe en ningún libro.',
};
// ──────────────────────────────────────────────────────────────────────────────

async function main() {
  if (!TEMA_ID) {
    throw new Error('Falta TEMA_ID: elige a qué tema del banco cultural pertenece.');
  }
  if (!CANARIO.opciones.includes(CANARIO.respuestaCorrecta)) {
    throw new Error('respuestaCorrecta debe ser EXACTAMENTE una de las opciones.');
  }
  const tema = await prisma.tema.findUnique({ where: { id: TEMA_ID } });
  if (!tema) {
    throw new Error(`No existe el Tema con id ${TEMA_ID}.`);
  }

  const creado = await prisma.reactivo.create({
    data: {
      temaId: TEMA_ID,
      banco: 'cultural',
      tipo: 'opcion_multiple',
      enunciado: CANARIO.enunciado,
      opciones: CANARIO.opciones,
      respuestaCorrecta: CANARIO.respuestaCorrecta,
      notaRevisor: CANARIO.notaRevisor,
      noPuntua: true, // ← lo que lo vuelve canario: se sirve pero NO cuenta
    },
    select: { id: true, temaId: true },
  });

  console.log(`[OK] Canario sembrado: reactivo id ${creado.id} en el tema ${creado.temaId}.`);
  console.log('     Se servirá al azar en el examen cultural de los planteles que pidan ese tema.');
  console.log('     Aparecerá en Admin > Analítica > "Reactivos-canario".');
}

main()
  .catch((e) => {
    console.error('[ERROR]', e.message);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
