/**
 * Sube todas las imagenes de la carpeta input/ a Cloudinary y genera el JSON
 * del bloque 5 (razonamiento abstracto) listo para POST /reactivos/masivo.
 *
 * Uso:
 *   1. Pon las imagenes en tools/subir-imagenes-cloudinary/input/
 *      (ej: reactivo_01.png, reactivo_02.png, ...)
 *   2. Llena tools/subir-imagenes-cloudinary/answers.json con las respuestas
 *      correctas por reactivo (ej: {"reactivo_01.png": "C", ...})
 *   3. Corre desde el raiz del monorepo:
 *        node tools/subir-imagenes-cloudinary/subir.js
 *   4. Se genera output/reactivos_bloque5.json listo para cargar
 */

const path = require('path');
const fs = require('fs');

// Cargar variables de entorno desde apps/backend/.env
require('dotenv').config({
  path: path.resolve(__dirname, '../../apps/backend/.env'),
});

const cloudinary = require('cloudinary').v2;

// Configurar Cloudinary con credenciales del .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const BLOQUE_ID = 5;
const TEMA = 'razonamiento_abstracto';
const ENUNCIADO = '¿Qué figura completa la sucesión?';
const CARPETA_CLOUDINARY = 'udefa/abstracto';

const inputDir = path.join(__dirname, 'input');
const outputDir = path.join(__dirname, 'output');
const answersPath = path.join(__dirname, 'answers.json');
const outputPath = path.join(outputDir, 'reactivos_bloque5.json');

async function main() {
  // Validaciones basicas
  if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error(
      'Faltan CLOUDINARY_API_KEY o CLOUDINARY_API_SECRET en apps/backend/.env',
    );
    process.exit(1);
  }

  if (!fs.existsSync(answersPath)) {
    console.error(
      `No se encontró answers.json — copia answers.template.json y llenalo.`,
    );
    process.exit(1);
  }

  const answers = JSON.parse(fs.readFileSync(answersPath, 'utf-8'));
  const archivos = fs
    .readdirSync(inputDir)
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    .sort();

  if (archivos.length === 0) {
    console.error(`No hay imagenes en input/ — mete PNG/JPG y vuelve a correr.`);
    process.exit(1);
  }

  console.log(`Procesando ${archivos.length} imagenes...\n`);

  const reactivos = [];
  for (const archivo of archivos) {
    const localPath = path.join(inputDir, archivo);
    const respuesta = answers[archivo];

    if (!respuesta || !['A', 'B', 'C', 'D'].includes(respuesta)) {
      console.warn(
        `  ${archivo}: sin respuesta valida en answers.json (esperado A/B/C/D). Se omite.`,
      );
      continue;
    }

    try {
      const resultado = await cloudinary.uploader.upload(localPath, {
        folder: CARPETA_CLOUDINARY,
        public_id: path.basename(archivo, path.extname(archivo)),
        overwrite: true,
      });

      reactivos.push({
        bloqueId: BLOQUE_ID,
        enunciado: ENUNCIADO,
        imagenUrl: resultado.secure_url,
        opciones: ['A', 'B', 'C', 'D'],
        tipo: 'opcion_multiple',
        respuestaCorrecta: respuesta,
        tema: TEMA,
      });

      console.log(`  ${archivo} -> ${resultado.secure_url}`);
    } catch (err) {
      console.error(`  ${archivo}: error al subir - ${err.message}`);
    }
  }

  if (reactivos.length === 0) {
    console.error('\nNo se pudo procesar ningun reactivo.');
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(reactivos, null, 2), 'utf-8');

  console.log(`\n${reactivos.length} reactivos procesados`);
  console.log(`JSON generado en: output/reactivos_bloque5.json`);
  console.log(`\nSiguiente paso: POST http://localhost:3000/reactivos/masivo`);
  console.log(`con el contenido del JSON como body.`);
}

main().catch((err) => {
  console.error('Error inesperado:', err);
  process.exit(1);
});
