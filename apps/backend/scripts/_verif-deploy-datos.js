/**
 * Verifica el arreglo de la Fase 2: que los datos del examen cultural viajen
 * dentro del build y que el backend los encuentre por la ruta de PRODUCCIÓN
 * (la que no depende de la carpeta docs/ del repo).
 */
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');

const ARCHIVOS = ['temarios.json', 'puente-oferta-demanda.json'];
// Exactamente la 3ª ruta candidata de rutaCultural(), calculada desde donde
// vivirá el servicio compilado: dist/examenes/ → ../datos-cultural/
const DIST_EXAMENES = path.resolve(__dirname, '..', 'dist', 'examenes');

let bien = true;
const ok = (c, si, no) => {
  console.log(`${c ? '  OK  ' : ' FALLA'} ${c ? si : no}`);
  if (!c) bien = false;
};

console.log('1) La ruta de produccion encuentra los datos\n');
for (const a of ARCHIVOS) {
  const ruta = path.resolve(DIST_EXAMENES, '..', 'datos-cultural', a);
  const existe = fs.existsSync(ruta);
  ok(existe, `${a} esta en el build`, `${a} NO esta donde el backend lo buscara`);
  if (existe) {
    try {
      JSON.parse(fs.readFileSync(ruta, 'utf8'));
      ok(true, `${a} se lee y es JSON valido`);
    } catch (e) {
      ok(false, '', `${a} no es JSON valido: ${e.message}`);
    }
  }
}

// Prueba funcional: la practica cultural (Fase 04) es justo lo que se caia sin
// estos archivos. Se llama al servicio COMPILADO, el mismo que corre en el server.
async function funcional() {
  console.log('\n2) La practica cultural sigue funcionando\n');
  const prisma = new PrismaClient();
  try {
    const { ExamenesService } = require('../dist/examenes/examenes.service');
    const {
      TemasPrioridadService,
    } = require('../dist/temas-prioridad/temas-prioridad.service');
    const svc = new ExamenesService(prisma, new TemasPrioridadService(prisma));

    const usuario = await prisma.usuario.findFirst({
      where: { rol: { not: 'admin' }, plantelId: { not: null } },
      select: { id: true, nombre: true, plantel: { select: { nombre: true } } },
    });
    if (!usuario) {
      console.log('  (sin aspirantes con plantel en la base; se omite)');
      return;
    }

    // Devuelve { plantel, materias: [{ materia, disponibles }] }.
    const res = await svc.materiasPracticaCultural(usuario.id);
    const materias = res?.materias ?? [];
    ok(
      materias.length > 0,
      `devuelve ${materias.length} materias para ${res?.plantel}`,
      'no devolvio materias',
    );
    if (materias.length) {
      console.log(
        '  Materias: ' +
          materias.map((m) => `${m.materia} (${m.disponibles} reactivos)`).join(', '),
      );
    }

    // Y los temas de una materia: es la otra llamada que lee los JSON.
    const temas = await svc.temasPracticaCultural(usuario.id, materias[0]?.materia);
    ok(
      Array.isArray(temas?.temas ?? temas) &&
        (temas?.temas ?? temas).length > 0,
      `devuelve los temas de ${materias[0]?.materia}`,
      `no devolvio temas de ${materias[0]?.materia}`,
    );
  } finally {
    await prisma.$disconnect();
  }
}

funcional()
  .catch((e) => {
    ok(false, '', `reviento: ${e.message}`);
  })
  .finally(() => {
    console.log(
      bien
        ? '\n=> TODO BIEN: el build es autosuficiente, docs/ ya no hace falta en produccion.\n'
        : '\n=> HAY FALLAS (ver arriba).\n',
    );
    if (!bien) process.exitCode = 1;
  });
