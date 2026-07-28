"""Lee una FÓRMULA matemática de una imagen y devuelve su LaTeX (pix2tex).

    python formula-ocr.py <imagen.png> [imagen2.png ...]

Es el cuarto lector del banco, y el ÚNICO que entiende fórmulas en 2D
(fracciones, raíces, subíndices, exponentes):

  - render.py   → foto de una hoja para leerla con los ojos.
  - extraer.py  → texto directo (si la capa de texto del PDF está sana).
  - ocr.py      → texto por OCR (si la capa está rota) — pero NO fórmulas 2D.
  - formula-ocr.py (este) → FÓRMULAS 2D. Usa pix2tex, un modelo de IA que "mira"
                   la imagen de una fórmula y la traduce a LaTeX.

Flujo típico: recorta SOLO la fórmula del libro con `crop.py` y pásala por aquí.
**Cuanto más limpio el recorte, mejor lee**: una línea de recuadro o el texto
vecino ensucian el resultado (aparecen \\longrightarrow, \\underbrace y demás).

    python crop.py "<pdf>" <hoja> <x0> <y0> <x1> <y1>   # -> crop_*.png
    python formula-ocr.py crop_187_79.png               # -> LaTeX

Requisitos: pix2tex instalado (`pip install pix2tex`). La PRIMERA vez que se use
descarga el modelo (~115 MB: weights.pth 97 MB + image_resizer.pth 18 MB) a la
carpeta del paquete; a partir de ahí arranca directo, sin volver a bajar nada.
"""
import sys


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)

    # Import tardío: cargar pix2tex/torch tarda unos segundos, así que solo se
    # hace cuando de verdad se va a leer algo (no al pedir la ayuda de arriba).
    from PIL import Image
    from pix2tex.cli import LatexOCR

    model = LatexOCR()          # la 1.ª vez baja el modelo (~115 MB)
    for ruta in args:
        latex = model(Image.open(ruta))
        print(latex)


if __name__ == '__main__':
    main()
