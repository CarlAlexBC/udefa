// TEMPORAL — auditoría del psicológico (psicométrico/personalidad/axiológico).
// Cuenta reactivos por bloque, cuántos tienen respuestaCorrecta (calificación),
// imagen (bloque abstracto) y polaridad/trampa (personalidad). Borrar al terminar.
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

(async () => {
  const examenes = await p.examen.findMany({
    where: { tipo: { not: 'cultural' } },
    orderBy: { id: 'asc' },
    include: {
      bloques: {
        orderBy: { orden: 'asc' },
        include: {
          reactivos: {
            select: { respuestaCorrecta: true, imagenUrl: true, polaridad: true, tipoTrampa: true },
          },
        },
      },
    },
  });

  for (const e of examenes) {
    console.log(`\n=== Examen id=${e.id} [${e.tipo}] "${e.nombre}"  calificable=${e.calificable}  (${e.bloques.length} bloques) ===`);
    let total = 0;
    for (const b of e.bloques) {
      const rs = b.reactivos;
      total += rs.length;
      const conResp = rs.filter((r) => r.respuestaCorrecta != null && r.respuestaCorrecta !== '').length;
      const conImg = rs.filter((r) => r.imagenUrl).length;
      const trampas = rs.filter((r) => r.polaridad === 'TRAMPA').length;
      let extra = '';
      if (e.calificable) extra = ` | con respuestaCorrecta: ${conResp}/${rs.length}`;
      else extra = ` | trampas: ${trampas}`;
      if (conImg) extra += ` | con imagen: ${conImg}`;
      console.log(`  [orden ${b.orden}] "${b.nombre}": ${rs.length} reactivos${extra}`);
    }
    console.log(`  TOTAL examen: ${total} reactivos`);
  }

  await p.$disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
