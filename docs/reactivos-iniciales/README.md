# Reactivos iniciales del examen psicométrico

Estos archivos JSON son los reactivos que se cargaron en la BD al construir el
banco inicial del examen psicométrico. Se generaron a partir del material real
(docx en `OneDrive\...\PSICOMÉTRICO\`) y se subieron con
`POST /reactivos/masivo`.

## Contenido

| Archivo | Bloque | Reactivos | Fuente |
|---|---|---:|---|
| `reactivos_bloque1_analogias.json` | 1 · Analogías | 25 | `EXAMEN PSICOMÉTRICO 1.docx` |
| `reactivos_bloque3_sinonimos_antonimos.json` | 3 · Sinónimos y Antónimos | 175 | `Banco_Maestro_Sinonimos_y_Antonimos_V1.docx` |
| `reactivos_bloque4_razonamiento_logico.json` | 4 · Razonamiento Lógico | 50 | `EXAMEN PSICOMÉTRICO 1.docx` (25 numéricas + 25 alfanuméricas) |
| `reactivos_bloque6_personalidad.json` | 6 · Personalidad (Examen 2) | 2,829 | `REACTIVOS DE EXAMEN DE PERSONALIDAD PARA LA PLATAFORMA.pdf` — parseado con `tools/parsear-personalidad/` |

**Total:** 3,079 reactivos (250 psicométrico + 2,829 personalidad).

## Detalles importantes

- **Opciones revueltas con Fisher-Yates** antes de guardar. Evita el sesgo de
  respuestas correctas concentradas en una sola posición (A/B/C/D).
- **`respuestaCorrecta` guardado como texto**, no como letra. Esto hace que el
  shuffle sea transparente: la respuesta correcta es "Médico", no "B".
- **`tema` distingue subtemas** dentro de un bloque, útil para el panel de
  resultados (por ejemplo, "acertaste 8/10 en sinónimos pero 3/10 en antónimos").

## Pendientes

- **Bloque 5 · Razonamiento Abstracto** — sus reactivos son imágenes capturadas
  de material externo (videos y libros de preparación). Ver plantilla en
  `reactivos_bloque5_abstracto.template.json`. El diseño acordado:
  - **Una imagen composita por reactivo** que contiene la sucesión + las 4
    opciones visuales dentro. Se sube a Cloudinary.
  - Las **opciones** en el JSON son solo las letras `["A", "B", "C", "D"]` —
    el frontend renderiza 4 botones bajo la imagen; el aspirante hace click
    en la letra que corresponde a la figura que eligió.
  - **`respuestaCorrecta`** es la letra (`"A"` / `"B"` / `"C"` / `"D"`), no una
    URL. El shuffle de opciones **no aplica** en este bloque (las posiciones
    están fijas en la imagen). La variedad entre aspirantes viene del muestreo
    aleatorio de reactivos que hace `armarExamen`.
  - **Cloudinary** (cuenta gratis en cloudinary.com) sirve las imágenes con
    optimización automática — `w_800,q_auto,f_auto` en la URL basta para
    reducir de MB a decenas de KB por reactivo sin pérdida visible.

- **Auditoría de calidad** — algunos reactivos del material original tienen
  patrones ambiguos o respuestas correctas fuera de las opciones. Se aplicaron
  correcciones puntuales en el JSON pero no en los docx originales. Ver
  discusión en la memoria del proyecto.

## Cómo cargar de nuevo (si hace falta)

Si algún día se recrea la BD desde cero:

1. Aplicar las migraciones de Prisma para tener los bloques.
2. Para cada archivo aquí: `POST http://localhost:3000/reactivos/masivo` con el
   contenido del JSON como body.

O desde la terminal:

```bash
curl -X POST http://localhost:3000/reactivos/masivo \
  -H "Content-Type: application/json" \
  --data-binary @docs/reactivos-iniciales/reactivos_bloque1_analogias.json
```
