/**
 * Paso de build: mete los datos del examen cultural DENTRO del build del backend.
 *
 * Por qué existe: en tiempo de ejecución el backend lee dos archivos de
 * `docs/examen-cultural/` —`temarios.json` (qué materias pide cada carrera) y
 * `puente-oferta-demanda.json` (código de materia → libro y capítulos)—. Eso
 * funciona en tu máquina, donde el repo completo está a la mano, pero al
 * desplegar sólo viaja `apps/backend`: la carpeta `docs/` se queda atrás y se
 * cae la práctica cultural (Fase 04) con un 404, ya en producción y con
 * aspirantes dentro.
 *
 * La solución es copiarlos a `dist/datos-cultural/` al compilar, para que el
 * build sea autosuficiente. Los `.md` del banco NO se copian: esos ya viven en
 * la base de datos, importados. Sólo estos dos JSON se leen en caliente.
 *
 * Corre DESPUÉS de `nest build` porque `deleteOutDir` borra `dist/` entero.
 *
 * La fuente de verdad sigue siendo `docs/`: aquí sólo se copia, nunca se edita.
 */
const fs = require('fs');
const path = require('path');

const ARCHIVOS = ['temarios.json', 'puente-oferta-demanda.json'];

// scripts/ → apps/backend → apps → raíz del repo
const RAIZ = path.resolve(__dirname, '..', '..', '..');
const ORIGEN = path.join(RAIZ, 'docs', 'examen-cultural');
const DESTINO = path.resolve(__dirname, '..', 'dist', 'datos-cultural');

function main() {
  if (!fs.existsSync(DESTINO)) fs.mkdirSync(DESTINO, { recursive: true });

  for (const archivo of ARCHIVOS) {
    const desde = path.join(ORIGEN, archivo);
    if (!fs.existsSync(desde)) {
      // Falla ruidosamente a propósito: un build sin estos archivos se
      // desplegaría "bien" y reventaría en producción al primer aspirante que
      // entre a la práctica cultural.
      throw new Error(
        `No encuentro ${desde}. El build del backend necesita los datos del ` +
          `examen cultural; revisa que el repo completo esté disponible al compilar.`,
      );
    }
    // Se valida que sea JSON legible: más vale enterarse aquí que en vivo.
    JSON.parse(fs.readFileSync(desde, 'utf8'));
    fs.copyFileSync(desde, path.join(DESTINO, archivo));
    console.log(`  ✓ ${archivo} → dist/datos-cultural/`);
  }
  console.log(`Datos del examen cultural incluidos en el build (${ARCHIVOS.length} archivos).`);
}

main();
