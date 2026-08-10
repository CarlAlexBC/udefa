// TEMPORAL — ¿qué banco sirvió el último examen de personalidad? Borrar al terminar.
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

(async () => {
  const intento = await p.intentoExamen.findFirst({
    where: { examen: { tipo: 'personalidad' } },
    orderBy: { inicioAt: 'desc' },
    include: {
      usuario: { select: { id: true, email: true, rol: true } },
      examen: { select: { id: true, nombre: true } },
      respuestas: { include: { reactivo: { select: { banco: true, enunciado: true } } } },
    },
  });

  if (!intento) { console.log('No hay intentos de personalidad.'); await p.$disconnect(); return; }

  console.log(`Último intento personalidad: id=${intento.id}`);
  console.log(`  usuario: ${intento.usuario.email} (id ${intento.usuario.id}, rol ${intento.usuario.rol})`);
  console.log(`  inicio: ${intento.inicioAt.toISOString()}  estado: ${intento.estado}`);
  console.log(`  respuestas guardadas: ${intento.respuestas.length}`);

  const porBanco = {};
  for (const r of intento.respuestas) {
    const b = r.reactivo.banco || '(null)';
    porBanco[b] = (porBanco[b] || 0) + 1;
  }
  console.log('  reactivos por BANCO:', JSON.stringify(porBanco));

  console.log('\n  Primeros 10 enunciados que respondió (con su banco):');
  intento.respuestas.slice(0, 10).forEach((r) => {
    console.log(`   [${r.reactivo.banco}] ${r.reactivo.enunciado}`);
  });

  await p.$disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
