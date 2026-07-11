# Generador de reactivos abstractos (pausado)

Herramienta en Python para generar reactivos de razonamiento abstracto de forma
procedural con Pillow (PIL). **Está pausada** — se decidió que el bloque 5 se
poblará con imágenes reales capturadas de material externo en lugar de con
reactivos generados por código.

Se conserva el código como semilla por si en algún momento conviene retomarla.

## Estado

- ✅ Setup inicial: Pillow instalado, carpeta `output/` gitignored.
- ✅ Primer paso: `generar.py` dibuja un círculo y un cuadrado sobre un lienzo.
- ⏸️ Pausado antes de: agregar triángulo, componer una matriz 3×3,
  introducir variaciones (rotación, color), armar el reactivo completo con
  opciones + respuesta correcta.

## Cómo correr lo que hay

```bash
cd tools/generar-reactivos-abstracto
py generar.py
```

Genera `output/hola.png` con las dos figuras.

## Por qué se pausó

- El generador procedural es útil para reactivos estilo Raven's Progressive
  Matrices con patrones simples (rotación, cantidad, color).
- Cubriría el ~70-80% de los reactivos de un examen tipo UDEFA.
- El 20-30% restante — reactivos "bonitos" con estética compleja o 3D
  auténtico — es difícil de generar programáticamente.
- Para lanzar antes, se optó por capturar reactivos de material externo (videos,
  libros de preparación) y subirlos como imágenes a Cloudinary.

## Si se retoma

Los siguientes pasos serían:

1. Extraer las figuras primitivas (círculo, cuadrado, triángulo) a funciones
   reutilizables en `figuras.py`.
2. Implementar composición en grilla en `composicion.py`.
3. Definir un modelo de "patrón" (variaciones sistemáticas por eje).
4. Generar las 3 opciones distractoras además de la correcta.
5. Componer todo en una imagen final estilo tests estándar.

Los conceptos base están en el `generar.py` actual — es cuestión de expandirlo.
