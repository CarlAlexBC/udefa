"""Renderiza paginas de un PDF escaneado a PNG para leerlas como imagen.

    python render.py "<ruta del pdf>" <desde> <hasta> [dpi]

<desde> y <hasta> son HOJAS del PDF (1-indexado), no paginas impresas.
"""
import sys
import os

import fitz

pdf = sys.argv[1]
desde = int(sys.argv[2])
hasta = int(sys.argv[3])
dpi = int(sys.argv[4]) if len(sys.argv) > 4 else 140

salida = os.path.dirname(os.path.abspath(__file__))
doc = fitz.open(pdf)

for hoja in range(desde, hasta + 1):
    destino = os.path.join(salida, f"hoja_{hoja:03d}.png")
    doc[hoja - 1].get_pixmap(dpi=dpi).save(destino)
    print(f"{destino}  ({os.path.getsize(destino) // 1024} KB)")
