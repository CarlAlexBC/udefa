/**
 * Verificación de la racha de días — SIN navegador ni login.
 *
 * Instancia el ActividadService COMPILADO (el mismo que corre en el servidor),
 * crea un usuario de prueba temporal, le siembra patrones de días controlados
 * (en hora de México) y comprueba que `obtenerRacha` calcula bien la racha
 * actual, el récord, "hoy activo" y la tira de la semana. Al terminar borra
 * TODO lo que creó: no deja rastro en la base.
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const { ActividadService } = require('../dist/actividad/actividad.service');

const prisma = new PrismaClient();

// Mismas cuentas de calendario que el servicio, para saber qué esperar.
function fechaMexico(d = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Mexico_City',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}
function sumarDias(fecha, n) {
  const [a, m, dd] = fecha.split('-').map(Number);
  const dt = new Date(Date.UTC(a, m - 1, dd));
  dt.setUTCDate(dt.getUTCDate() + n);
  return dt.toISOString().slice(0, 10);
}

const HOY = fechaMexico();

function ok(cond, bien, mal) {
  console.log(`${cond ? '  OK  ' : ' FALLA'} ${cond ? bien : mal}`);
  return cond;
}

async function sembrar(usuarioId, offsets) {
  await prisma.actividadDiaria.deleteMany({ where: { usuarioId } });
  await prisma.actividadDiaria.createMany({
    data: offsets.map((o) => ({ usuarioId, fecha: sumarDias(HOY, -o) })),
  });
}

async function main() {
  const svc = new ActividadService(prisma);
  let todoBien = true;

  // Usuario de prueba temporal (se borra al final).
  const usuario = await prisma.usuario.create({
    data: {
      nombre: 'Racha Prueba',
      email: `racha-verif-${Date.now()}@ejemplo.local`,
      password: 'x',
    },
  });
  const uid = usuario.id;
  console.log(`Hoy (México) = ${HOY} · usuario de prueba id=${uid}\n`);

  try {
    // ── Caso 1: racha de 3 con hoy incluido; récord viejo de 4 ──────────────
    // Activos: hoy, ayer, antier (3 seguidos). Hueco en -3. Corrida vieja -14..-11 (4).
    await sembrar(uid, [0, 1, 2, 11, 12, 13, 14]);
    let r = await svc.obtenerRacha(uid);
    console.log('Caso 1 — 3 días seguidos (incluye hoy) + récord viejo de 4:');
    todoBien &= ok(r.rachaActual === 3, `rachaActual = 3`, `rachaActual = ${r.rachaActual}, esperaba 3`);
    todoBien &= ok(r.hoyActivo === true, `hoyActivo = true`, `hoyActivo = ${r.hoyActivo}`);
    todoBien &= ok(r.rachaMaxima === 4, `rachaMaxima = 4`, `rachaMaxima = ${r.rachaMaxima}, esperaba 4`);
    todoBien &= ok(r.semana.length === 7, `semana con 7 días`, `semana con ${r.semana.length}`);
    todoBien &= ok(
      r.semana.filter((d) => d.esHoy).length === 1,
      `exactamente un día marcado como hoy`,
      `${r.semana.filter((d) => d.esHoy).length} días marcados como hoy`,
    );
    console.log(
      '   tira:',
      r.semana.map((d) => `${d.fecha.slice(5)}${d.esHoy ? '*' : ''}${d.activo ? '✓' : '·'}`).join(' '),
      '\n',
    );

    // ── Caso 2: racha viva pero hoy AÚN no estudia (contó hasta ayer) ────────
    await sembrar(uid, [1, 2, 3]);
    r = await svc.obtenerRacha(uid);
    console.log('Caso 2 — estudió ayer/antier/-3 pero HOY no:');
    todoBien &= ok(r.rachaActual === 3, `rachaActual = 3 (cuenta hasta ayer)`, `rachaActual = ${r.rachaActual}, esperaba 3`);
    todoBien &= ok(r.hoyActivo === false, `hoyActivo = false`, `hoyActivo = ${r.hoyActivo}`);
    console.log('');

    // ── Caso 3: racha rota (último día activo fue hace 3 días) ───────────────
    await sembrar(uid, [3, 4, 5]);
    r = await svc.obtenerRacha(uid);
    console.log('Caso 3 — el último día activo fue hace 3 días (racha rota):');
    todoBien &= ok(r.rachaActual === 0, `rachaActual = 0`, `rachaActual = ${r.rachaActual}, esperaba 0`);
    todoBien &= ok(r.rachaMaxima === 3, `rachaMaxima = 3 (el récord se conserva)`, `rachaMaxima = ${r.rachaMaxima}, esperaba 3`);
    console.log('');

    // ── Caso 4: marcarHoy es idempotente (dos llamadas = un solo día) ────────
    await prisma.actividadDiaria.deleteMany({ where: { usuarioId: uid } });
    await svc.marcarHoy(uid);
    await svc.marcarHoy(uid);
    const cuenta = await prisma.actividadDiaria.count({ where: { usuarioId: uid } });
    r = await svc.obtenerRacha(uid);
    console.log('Caso 4 — marcarHoy() dos veces:');
    todoBien &= ok(cuenta === 1, `una sola fila para hoy (idempotente)`, `${cuenta} filas, esperaba 1`);
    todoBien &= ok(r.rachaActual === 1 && r.hoyActivo === true, `racha = 1 y hoy activo`, `racha = ${r.rachaActual}, hoy = ${r.hoyActivo}`);
    console.log('');
  } finally {
    // Limpieza total: no dejar rastro.
    await prisma.actividadDiaria.deleteMany({ where: { usuarioId: uid } });
    await prisma.usuario.delete({ where: { id: uid } });
    console.log('(usuario de prueba y su actividad borrados)\n');
  }

  console.log(
    todoBien
      ? '=> TODO BIEN: la racha se calcula correctamente.\n'
      : '=> HAY FALLAS (ver arriba).\n',
  );
  if (!todoBien) process.exitCode = 1;
}

main()
  .catch((e) => {
    console.error('ERROR:', e.message);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
