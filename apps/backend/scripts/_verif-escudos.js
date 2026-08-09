/**
 * Verifica que TODOS los planteles de la base tengan su escudo.
 *
 * Sólo lee, no escribe nada. Cruza tres cosas:
 *   1. los planteles que existen en la base (Plantel.nombre),
 *   2. las llaves del mapa de escudos (apps/web/src/lib/planteles.ts),
 *   3. los archivos en apps/web/public/planteles/ y .../emblema/.
 *
 * Por qué hace falta: el escudo se busca por nombre EXACTO, así que basta un
 * acento o un espacio de más para que un plantel pierda el suyo. Y como todos
 * los consumidores caen a un respaldo visual, el fallo es silencioso — se ve
 * "bien", nada más que con el escudo equivocado.
 *
 * Córrelo cada vez que agregues un plantel:
 *   node apps/backend/scripts/_verif-escudos.js
 */
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');

const RAIZ = path.join(__dirname, '..', '..', '..');
const WEB = path.join(RAIZ, 'apps', 'web');

const prisma = new PrismaClient();

/** Lee el mapa del frontend tal cual está escrito, sin compilarlo. */
function leerMapaDeEscudos() {
  const fuente = fs.readFileSync(
    path.join(WEB, 'src', 'lib', 'planteles.ts'),
    'utf8',
  );
  const mapa = new Map();
  for (const m of fuente.matchAll(/'([^']+)':\s*'\/planteles\/([^']+)'/g)) {
    mapa.set(m[1], m[2]);
  }
  return mapa;
}

function existe(carpeta, archivo) {
  return fs.existsSync(path.join(WEB, 'public', 'planteles', carpeta, archivo));
}

async function main() {
  const mapa = leerMapaDeEscudos();
  const planteles = await prisma.plantel.findMany({
    select: { id: true, nombre: true },
    orderBy: { id: 'asc' },
  });

  let fallas = 0;

  console.log('');
  console.log('  id  plantel'.padEnd(58) + 'escudo       sello  emblema');
  console.log('  ' + '-'.repeat(88));

  for (const p of planteles) {
    const archivo = mapa.get(p.nombre);
    if (!archivo) {
      fallas++;
      console.log(
        ' FALLA ' + p.nombre.padEnd(50) + '(sin entrada en LOGOS_POR_NOMBRE)',
      );
      continue;
    }

    // El sello completo (con el aro de letras) y el emblema recortado son dos
    // archivos distintos; los dos tienen que estar.
    const sello = existe('', archivo);
    const emblema = existe('emblema', archivo);
    if (!sello || !emblema) fallas++;

    console.log(
      (sello && emblema ? '  OK  ' : ' FALLA') +
        String(p.id).padEnd(4) +
        p.nombre.padEnd(52) +
        archivo.padEnd(13) +
        (sello ? 'sí' : 'NO').padEnd(7) +
        (emblema ? 'sí' : 'NO'),
    );
  }

  const sobrantes = [...mapa.keys()].filter(
    (n) => !planteles.some((p) => p.nombre === n),
  );

  console.log('');
  console.log(`  Planteles en la base: ${planteles.length}`);
  console.log(`  Llaves en el mapa:    ${mapa.size}`);
  if (sobrantes.length) {
    // No es error: puede ser un plantel que todavía no se da de alta.
    console.log(`  Llaves sin plantel en la base: ${sobrantes.join(', ')}`);
  }
  console.log('');
  console.log(
    fallas === 0
      ? `  RESULTADO: los ${planteles.length} resuelven su escudo.`
      : `  RESULTADO: ${fallas} con problema — revisa las líneas marcadas FALLA.`,
  );
  console.log('');

  process.exitCode = fallas === 0 ? 0 : 1;
}

main()
  .catch((e) => {
    console.error('FALLO:', e.message);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
