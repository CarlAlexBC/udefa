/**
 * Clasifica la polaridad (POSITIVA | NEGATIVA) de los reactivos del bloque 6
 * (personalidad) via heurística de patrones semánticos.
 *
 * Uso: node tools/clasificar-polaridad/clasificar.js
 *
 * Estrategia:
 * - Lista de patrones regex que identifican afirmaciones NEGATIVAS
 *   (pérdida, dificultad, evasión, impulsividad, pesimismo).
 * - Si el reactivo matchea al menos un patrón → NEGATIVA.
 * - Si no → POSITIVA (default optimista).
 *
 * Precisión esperada: ~85% (revisión manual de casos borde queda pendiente).
 */

const path = require('path');
const fs = require('fs');
require('dotenv').config({
  path: path.resolve(__dirname, '../../apps/backend/.env'),
});

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Patrones que identifican polaridad NEGATIVA en el enunciado.
// El orden no importa — basta con que uno matchee.
const PATRONES_NEGATIVOS = [
  // Verbos de pérdida / decline
  /\bpier(do|da|den|de|dan)\b/i,
  /\babandon\w+/i,
  /\bolvid\w+/i,
  /\brindo\b/i,
  /\brend\w*(me|se)\b/i,
  /\brenunc\w+/i,
  /\bfracas\w+/i,
  /\bdesist\w+/i,

  // Dificultad y falta
  /\bme resulta dif[ií]cil\b/i,
  /\bme cuesta\b/i,
  /\bcarec\w+/i,
  /\bescas\w+/i,
  /\binsufic\w+/i,
  /\bdif[ií]cil\w*/i,

  // Reactivo / pasivo negativo
  /\bme hace(n)?\b/i,
  /\balgunas situaciones\b/i,
  /\bciertas situaciones\b/i,

  // Ausencia / negatividad
  /\bpoco alentador\b/i,
  /\bpoco realist\w+/i,
  /\bincier\w+/i,
  /\bpesimist\w*/i,
  /\bnegativ\w+/i,
  /\bsin considerar\b/i,
  /\bsin importar\b/i,
  /\bsin refleccion\w+/i,
  /\bsin pens\w+/i,
  /\bsin reflexion\w+/i,
  /\bsin medida\b/i,
  /\bno tengo\b/i,
  /\bno encuentro\b/i,
  /\bno puedo\b/i,
  /\bno logro\b/i,
  /\bnada de lo que\b/i,
  /\bnada me\b/i,

  // Cambio inestable / falta de compromiso
  /\bcambio frecuentemente\b/i,
  /\bmodifico f[áa]cilmente\b/i,
  /\bcambio mis valores\b/i,
  /\bcambio completamente\b/i,
  /\bcambio de opini[óo]n f[áa]cilmente\b/i,
  /\bmodifico mis (opiniones|decisiones|valores)\b/i,
  /\bact[úu]o de manera diferente\b/i,
  /\bcambio mi (comportamiento|forma|actitud|conducta) seg[úu]n\b/i,

  // Impulsividad / falta de control / prisa
  /\bact[úu]o sin\b/i,
  /\bact[úu]o antes de\b/i,
  /\bprefiero actuar r[áa]pidamente\b/i,
  /\bprefiero (actuar|decidir) r[áa]pido\b/i,
  /\bcontrolo con dificultad\b/i,
  /\bme dejo llevar\b/i,
  /\bexploto\b/i, /\bestall\w+/i,

  // Evasión / falta de responsabilidad
  /\bevito\b/i,
  /\bconsidero que otros deben\b/i,
  /\bprefiero no\b/i,
  /\bno me corresponde\b/i,
  /\bno es mi (problema|responsabilidad)\b/i,
  /\bculp\w+ a (otros|los dem[áa]s)\b/i,

  // Deshonestidad / trampa
  /\bmiento\b/i, /\bmentir\w*/i, /\bmentira\w*/i,
  /\btrampa\w*/i,
  /\benga[ñn]\w+/i,
  /\bmanipula\w+/i,
  /\bocult\w+ (la|información|hechos|verdad)/i,

  // Trato despectivo / sospecha
  /\bmenosprecio\b/i, /\bmenosprec\w+/i,
  /\bignoro\b/i,
  /\bdesconf[íi]\w+/i,
  /\brechaz\w+ (críticas|opiniones|ayuda)/i,

  // Externo-dirigido (bad — locus externo)
  /\bdepend(o|e|en) (de|solo|únicamente|exclusivamente)/i,
  /\bsigo (la|las|los) (mayor|dem[áa]s|otros|opiniones)/i,
  /\bseg[úu]n (las|los) (personas|dem[áa]s|opiniones)/i,
  /\búnicamente por\b/i,
  /\búnicamente de\b/i,
  /\búnicamente cuando\b/i,
  /\búnicamente si\b/i,

  // Selfish / manipulation of others
  /\bbeneficios? personal\w+/i,
  /\bpara mi (provecho|beneficio|conveniencia)\b/i,
  /\bconviene\b/i,

  // Emotion-driven / weakness (bad in military assessments)
  /\bmis emociones (determinan|dominan|controlan|dirigen)/i,
  /\bemociones? (determinan|dominan|controlan|dirigen) mis/i,
  /\bimpuls\w+/i,
  /\brencor\w+/i,
  /\bvengan\w+/i,

  // Selfishness / weak groupness
  /\bantepongo (mis|mi) (intereses|beneficios|deseos) a\b/i,
  /\bmis intereses (est[áa]n)? por encima\b/i,

  // Absolutos y rigidez negativa
  /\bsiempre (que|me|los)\b/i,
  /\bjam[áa]s\b/i,
  /\bnunca\b/i,
  /\btodos (deben|deber[íi]an)\b/i,

  // Refusal / rejection of ayuda
  /\brechazo (la|el) (ayuda|consejo|apoyo)\b/i,
  /\bprefiero solo\b/i,
  /\bnadie (me|puede|debe)\b/i,
];

function clasificar(enunciado) {
  for (const patron of PATRONES_NEGATIVOS) {
    if (patron.test(enunciado)) return 'NEGATIVA';
  }
  return 'POSITIVA';
}

async function main() {
  console.log('Cargando reactivos del bloque 6 (personalidad)...');
  const reactivos = await prisma.reactivo.findMany({
    where: { bloqueId: 6 },
    select: { id: true, enunciado: true, polaridad: true },
  });
  console.log(`Total reactivos: ${reactivos.length}`);

  const positivas = [];
  const negativas = [];
  for (const r of reactivos) {
    if (clasificar(r.enunciado) === 'NEGATIVA') negativas.push(r.id);
    else positivas.push(r.id);
  }

  console.log(`\nClasificación por heurística:`);
  console.log(`  POSITIVA: ${positivas.length} (${Math.round(positivas.length * 100 / reactivos.length)}%)`);
  console.log(`  NEGATIVA: ${negativas.length} (${Math.round(negativas.length * 100 / reactivos.length)}%)`);

  // Bulk updates (mucho mas rapido que 2829 updates individuales)
  console.log('\nActualizando en BD...');
  await prisma.reactivo.updateMany({
    where: { id: { in: positivas } },
    data: { polaridad: 'POSITIVA' },
  });
  await prisma.reactivo.updateMany({
    where: { id: { in: negativas } },
    data: { polaridad: 'NEGATIVA' },
  });
  console.log('Listo.');

  // Guardar tambien el archivo de asignacion para el JSON
  const asignaciones = reactivos.map((r) => ({
    id: r.id,
    enunciado: r.enunciado,
    polaridad: clasificar(r.enunciado),
  }));
  const outPath = path.resolve(__dirname, 'output', 'asignaciones.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(asignaciones, null, 2), 'utf-8');
  console.log(`Asignaciones guardadas en: ${outPath}`);

  // Muestra de 5 negativas y 5 positivas para inspeccion
  console.log(`\nMuestra de 5 NEGATIVAS clasificadas:`);
  reactivos
    .filter((r) => clasificar(r.enunciado) === 'NEGATIVA')
    .slice(0, 5)
    .forEach((r) => console.log(`  - ${r.enunciado.substring(0, 90)}`));

  console.log(`\nMuestra de 5 POSITIVAS clasificadas:`);
  reactivos
    .filter((r) => clasificar(r.enunciado) === 'POSITIVA')
    .slice(0, 5)
    .forEach((r) => console.log(`  - ${r.enunciado.substring(0, 90)}`));

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
