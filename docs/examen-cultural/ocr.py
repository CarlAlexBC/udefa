"""Lee una hoja de un PDF por OCR cuando su capa de texto está ROTA.

    python ocr.py "<ruta del pdf>" <hoja_desde> [hoja_hasta] [salida.txt] [dpi]

Es la tercera vía de lectura del banco, junto a `render.py` y `extraer.py`.
Cuál usar depende del PDF:

  - **render.py**  → convierte la hoja a PNG para leerla con los ojos.
  - **extraer.py** → saca el texto directo (rápido y fiel) SI la capa de texto
                     del PDF está bien mapeada (p. ej. el Thomas de Cálculo).
  - **ocr.py** (este) → cuando la capa de texto está ROTA. Algunos PDFs (el Zill
                     de Geometría Analítica de la EMI) usan fuentes con el mapa
                     glifo→texto dañado: el PDF se DIBUJA bien, pero al copiar el
                     texto los dígitos y símbolos salen cambiados —'(' → '1',
                     ')' → '2', '−' → '2', '=' → '5', '|x|' → '0 x 0', '√' → '!'—.
                     El OCR "lee" los glifos dibujados en la imagen, no la capa
                     rota, así que recupera bien la prosa, los números y los
                     signos en línea.

Cómo saber si la capa está rota: corre `extraer.py` sobre una hoja con números y
mira si salen como símbolos raros (5 por =, 1/2 por paréntesis, etcétera).

OJO — límite del OCR: lee bien PROSA, números y signos en línea, pero se
equivoca con las FÓRMULAS en 2D (fracciones, raíces, subíndices, exponentes).
Esas se leen de la IMAGEN (render.py) y se transcriben a mano. **Nunca se cita de
la extracción rota.**

Requisitos:
  - Tesseract instalado (por defecto en C:\\Program Files\\Tesseract-OCR).
    Se instaló con:  winget install --id UB-Mannheim.TesseractOCR
  - spa.traineddata (idioma español). Se busca en las rutas de TESSDATA_DIRS.
    Si no está, descárgalo del repo oficial de Tesseract:
      curl.exe -sL https://github.com/tesseract-ocr/tessdata/raw/main/spa.traineddata ^
        -o "C:\\Users\\carlo\\tessdata\\spa.traineddata"

Si pasas un archivo `salida.txt`, escribe ahí en UTF-8 (recomendado, para leerlo
sin líos de acentos en la consola). Si no, imprime a stdout en UTF-8.
"""
import io
import os
import sys

import fitz

# Carpetas donde buscar spa.traineddata (deben CONTENER spa.traineddata):
TESSDATA_DIRS = [
    r'C:\Users\carlo\tessdata',
    r'C:\Program Files\Tesseract-OCR\tessdata',
]
os.environ['PATH'] = r'C:\Program Files\Tesseract-OCR;' + os.environ.get('PATH', '')


def hallar_tessdata():
    for d in TESSDATA_DIRS:
        if os.path.exists(os.path.join(d, 'spa.traineddata')):
            return d
    raise SystemExit(
        'No encuentro spa.traineddata. Descárgalo con:\n'
        '  curl.exe -sL https://github.com/tesseract-ocr/tessdata/raw/main/'
        'spa.traineddata -o "C:\\Users\\carlo\\tessdata\\spa.traineddata"'
    )


def main():
    args = list(sys.argv[1:])
    if len(args) < 2:
        print(__doc__)
        sys.exit(1)

    salida = None
    if args and args[-1].lower().endswith('.txt'):
        salida = args.pop()

    pdf = args[0]
    desde = int(args[1])
    hasta = int(args[2]) if len(args) > 2 else desde
    dpi = int(args[3]) if len(args) > 3 else 300

    tessdata = hallar_tessdata()
    d = fitz.open(pdf)

    partes = []
    for h in range(desde, hasta + 1):
        if 1 <= h <= d.page_count:
            page = d[h - 1]
            tp = page.get_textpage_ocr(
                flags=0, language='spa', dpi=dpi, full=True, tessdata=tessdata)
            partes.append('=' * 60)
            partes.append('HOJA %d (OCR spa)' % h)
            partes.append('=' * 60)
            partes.append(page.get_text(textpage=tp))
            partes.append('')

    texto = '\n'.join(partes)
    if salida:
        with io.open(salida, 'w', encoding='utf-8') as f:
            f.write(texto)
        print('escrito:', salida, '| hojas', desde, 'a', hasta)
    else:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        print(texto)


if __name__ == '__main__':
    main()
