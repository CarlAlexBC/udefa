/**
 * Verificación de la consulta "más fallado" de Entiende el tema, directo contra
 * la base (no necesita el backend corriendo). Solo lee.
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const filas = await prisma.$queryRawUnsafe(`
    SELECT c.id AS "capituloId", c.numero, c.titulo, l.materia,
           COUNT(resp."reactivoId") AS total,
           COUNT(*) FILTER (WHERE resp."esCorrecta" = false) AS incorrectas
    FROM "Capitulo" c
    JOIN "Libro" l ON l.id = c."libroId"
    JOIN "Tema" t ON t."capituloId" = c.id
    JOIN "Reactivo" rx ON rx."temaId" = t.id AND rx.banco = 'cultural'
    LEFT JOIN (
      SELECT "reactivoId", "esCorrecta" FROM "RespuestaPractica"
      UNION ALL
      SELECT "reactivoId", "esCorrecta" FROM "RespuestaReactivo" WHERE "esCorrecta" IS NOT NULL
    ) resp ON resp."reactivoId" = rx.id
    GROUP BY c.id, c.numero, c.titulo, l.materia
  `);

  const conPct = filas
    .map((f) => {
      const total = Number(f.total);
      const inc = Number(f.incorrectas);
      return { ...f, total, inc, pct: total > 0 ? Math.round((inc / total) * 100) : null };
    })
    .sort((a, b) => (b.pct ?? -1) - (a.pct ?? -1));

  console.log(`Capítulos culturales con reactivos: ${filas.length}`);
  console.log('\nTop por más-fallado (con datos):');
  conPct
    .filter((f) => f.pct !== null)
    .slice(0, 8)
    .forEach((f) =>
      console.log(
        `  ${String(f.pct).padStart(3)}%  ${f.materia} · Cap ${f.numero} · ${f.titulo}  (${f.inc}/${f.total})`,
      ),
    );
  console.log(`\nCapítulos sin respuestas todavía (van al final): ${conPct.filter((f) => f.pct === null).length}`);
}

main()
  .catch((e) => console.error('ERROR:', e.message))
  .finally(() => prisma.$disconnect());
