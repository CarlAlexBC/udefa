// Verifica que los reactivos de Razonamiento Abstracto tengan su respuesta
// correcta asignada, y saca un RESPALDO de las claves a un archivo versionable
// (NO en public/: las claves no se exponen al aspirante). Solo lectura de la BD.
// Temporal (prefijo _).

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const bloque = await prisma.bloque.findFirst({
    where: { nombre: { contains: 'bstracto', mode: 'insensitive' } },
  });
  if (!bloque) { console.log('No encontré el bloque de Abstracto.'); return; }

  const rs = await prisma.reactivo.findMany({
    where: { bloqueId: bloque.id, tema: 'razonamiento_abstracto' },
    orderBy: { id: 'asc' },
    select: { id: true, imagenUrl: true, opciones: true, respuestaCorrecta: true },
  });

  let conClave = 0;
  const faltan = [];
  const respaldo = [];
  for (const r of rs) {
    const archivo = (r.imagenUrl || '').split('/').pop();
    const nOpc = Array.isArray(r.opciones) ? r.opciones.length : 0;
    if (r.respuestaCorrecta) conClave++;
    else faltan.push(archivo);
    respaldo.push({ archivo, opciones: nOpc, respuesta: r.respuestaCorrecta || null });
  }

  console.log(`Bloque ${bloque.id} "${bloque.nombre}" — ${rs.length} reactivos`);
  console.log(`Con clave asignada: ${conClave} / ${rs.length}`);
  console.log(faltan.length ? `SIN clave todavía: ${faltan.join(', ')}` : 'Todas tienen clave. ✅');
  console.log('');
  console.log(respaldo.map((x) => `${x.archivo}  →  ${x.respuesta ?? '—'}   (${x.opciones} opc)`).join('\n'));

  // Respaldo versionable, fuera de public/.
  const outDir = path.join(__dirname, '..', '..', '..', 'docs', 'razonamiento-abstracto');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'claves-abstracto.json');
  fs.writeFileSync(outFile, JSON.stringify(respaldo, null, 2), 'utf8');
  console.log(`\nRespaldo escrito en: ${outFile}`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
