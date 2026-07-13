# Subir imágenes a Cloudinary (bloque 5)

Script que sube todas las imágenes de `input/` a Cloudinary y genera el JSON
listo para cargar reactivos del bloque 5 (razonamiento abstracto).

## Setup previo (una sola vez)

1. Cuenta gratuita en [cloudinary.com](https://cloudinary.com).
2. Llenar en `apps/backend/.env`:
   ```
   CLOUDINARY_CLOUD_NAME=fujqb0w6
   CLOUDINARY_API_KEY=<tu-api-key>
   CLOUDINARY_API_SECRET=<tu-api-secret>
   ```
3. Dependencias ya instaladas en el workspace (`cloudinary`, `dotenv`).

## Cómo usarlo

1. **Pon las imágenes en `input/`.** Nombra cada archivo de forma que identifiques
   fácil el reactivo: `reactivo_01.png`, `reactivo_02.png`, etc. Formatos
   soportados: PNG, JPG, WEBP.

2. **Copia `answers.template.json` a `answers.json`** (mismo directorio) y edítalo
   con las respuestas correctas de cada archivo:
   ```json
   {
     "reactivo_01.png": "C",
     "reactivo_02.png": "A"
   }
   ```
   La letra debe ser `A`, `B`, `C` o `D` (mayúscula).

3. **Ejecuta desde el raíz del monorepo:**
   ```bash
   node tools/subir-imagenes-cloudinary/subir.js
   ```

4. **El script hace todo:**
   - Sube cada imagen a Cloudinary en la carpeta `udefa/abstracto/`.
   - Recibe las URLs seguras (`https://res.cloudinary.com/...`).
   - Combina con las respuestas correctas de `answers.json`.
   - Guarda `output/reactivos_bloque5.json` listo para cargar.

5. **Cargar al backend:** copia el contenido del JSON generado y haz
   `POST http://localhost:3000/reactivos/masivo` en Thunder Client.

6. **Verificar:** `GET http://localhost:3000/examenes/1/armar` — el bloque 5
   ahora debe traer reactivos con `imagenUrl` apuntando a Cloudinary.

## Optimización automática

Las URLs generadas apuntan a la imagen original. Cuando el frontend las use,
puede agregar parámetros de transformación a la URL para servir versiones
optimizadas:

```
https://res.cloudinary.com/fujqb0w6/image/upload/w_800,q_auto,f_auto/udefa/abstracto/reactivo_01.png
```

- `w_800` — ancho de 800 píxeles.
- `q_auto` — compresión automática de calidad.
- `f_auto` — formato automático (WebP en navegadores modernos, JPG en viejos).

Esto reduce el peso de MB a decenas de KB sin pérdida visible.

## Ignorados por git

- `input/` — imágenes locales (originales tuyos, no tocar en el repo).
- `output/` — JSONs generados (regenerables).
- `answers.json` — mapeo de respuestas (regenerable, no confidencial pero
  específico de tu ejecución).
