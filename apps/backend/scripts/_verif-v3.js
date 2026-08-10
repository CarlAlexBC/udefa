/**
 * Verificación de punta a punta del examen de personalidad con el banco v3.
 *
 * No simula nada: instancia el ExamenesService COMPILADO (el mismo que corre en
 * el servidor) y le pide armar el examen 2, como se lo pediría un aspirante.
 * Sirve para comprobar el encendido de v3 sin necesidad de iniciar sesión.
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const { ExamenesService } = require('../dist/examenes/examenes.service');
const {
  TemasPrioridadService,
} = require('../dist/temas-prioridad/temas-prioridad.service');

const EXAMEN_PERSONALIDAD = 2;
const prisma = new PrismaClient();

function ok(cond, bien, mal) {
  console.log(`${cond ? '  OK  ' : ' FALLA'} ${cond ? bien : mal}`);
  return cond;
}

async function main() {
  const svc = new ExamenesService(prisma, new TemasPrioridadService(prisma));
  const armado = await svc.armarExamen(EXAMEN_PERSONALIDAD, undefined);

  const reactivos = armado.bloques.flatMap((b) => b.reactivos);
  console.log(`Examen: "${armado.nombre}" (tipo ${armado.tipo})`);
  console.log(`Bloques: ${armado.bloques.length} · reactivos servidos: ${reactivos.length}\n`);

  let todoBien = true;

  todoBien &= ok(
    reactivos.length === 256,
    `sirve 256 reactivos (los del examen real)`,
    `sirve ${reactivos.length}, se esperaban 256`,
  );

  // ¿De qué banco salieron de verdad? Se pregunta a la base por sus ids.
  const ids = reactivos.map((r) => r.id);
  const porBanco = await prisma.reactivo.groupBy({
    by: ['banco'],
    where: { id: { in: ids } },
    _count: { _all: true },
  });
  const bancos = porBanco.map((b) => `${b.banco}:${b._count._all}`).join(', ');
  todoBien &= ok(
    porBanco.length === 1 && porBanco[0].banco === 'v3',
    `todos salieron del banco v3`,
    `salieron de varios bancos -> ${bancos}`,
  );

  // Escala: v3 es Verdadero/Falso.
  const escalas = new Set(reactivos.map((r) => JSON.stringify(r.opciones)));
  todoBien &= ok(
    escalas.size === 1 &&
      [...escalas][0] === JSON.stringify(['Verdadero', 'Falso']),
    `todos con escala Verdadero/Falso`,
    `escalas mezcladas -> ${[...escalas].join(' | ')}`,
  );

  // Sin repetidos: un aspirante no debe ver dos veces el mismo reactivo.
  todoBien &= ok(
    new Set(ids).size === ids.length,
    `sin reactivos repetidos`,
    `hay ${ids.length - new Set(ids).size} repetido(s)`,
  );

  // Los canarios (noPuntua) nunca deberían llegar mezclados sin marcar.
  const canarios = await prisma.reactivo.count({
    where: { id: { in: ids }, noPuntua: true },
  });
  todoBien &= ok(canarios === 0, `sin canarios sembrados todavia`, `hay ${canarios}`);

  // Cobertura: v3 tiene 33 ejes; el muestreo debería tocar muchos, no dos.
  const meta = await prisma.reactivo.findMany({
    where: { id: { in: ids } },
    select: { eje: true, polaridad: true, tipoTrampa: true },
  });
  const ejes = new Set(meta.map((m) => m.eje).filter((e) => e !== null));
  todoBien &= ok(
    ejes.size >= 25,
    `toca ${ejes.size} ejes distintos de los 33`,
    `solo toca ${ejes.size} ejes (muestreo pobre)`,
  );

  // Trampas de validez: sin ellas, el panel no puede calcular L/K/F.
  const trampas = meta.filter((m) => m.polaridad === 'TRAMPA').length;
  todoBien &= ok(
    trampas > 0,
    `incluye ${trampas} reactivos-trampa (alimentan las escalas L/K/F)`,
    `no incluye trampas: el panel no podria calcular L/K/F`,
  );

  const pos = meta.filter((m) => m.polaridad === 'POSITIVA').length;
  const neg = meta.filter((m) => m.polaridad === 'NEGATIVA').length;
  console.log(`\n  Reparto: ${pos} positivos · ${neg} negativos · ${trampas} trampas`);
  console.log(`  Ejes tocados: ${[...ejes].sort((a, b) => a - b).join(', ')}`);
  console.log(`\n  Ejemplo servido: "${reactivos[0].enunciado}"`);
  console.log(`  Opciones: ${JSON.stringify(reactivos[0].opciones)}`);

  console.log(
    todoBien
      ? '\n=> TODO BIEN: el examen de personalidad se arma correctamente con v3.\n'
      : '\n=> HAY FALLAS (ver arriba).\n',
  );
  if (!todoBien) process.exitCode = 1;
}

main()
  .catch((e) => {
    console.error('ERROR:', e.message);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
