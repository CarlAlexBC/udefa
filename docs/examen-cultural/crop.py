"""Recorta una region de una hoja del PDF y la renderiza en grande.

    python crop.py "<pdf>" <hoja> <x0> <y0> <x1> <y1> [dpi]

Las coordenadas van en fraccion de la pagina (0..1), asi no hay que
adivinar puntos. Sirve para mirar de cerca una palabra concreta y
distinguir una errata real del ruido del escaneo.
"""
import sys
import os

import fitz

pdf, hoja = sys.argv[1], int(sys.argv[2])
x0, y0, x1, y1 = (float(v) for v in sys.argv[3:7])
dpi = int(sys.argv[7]) if len(sys.argv) > 7 else 600

salida = os.path.dirname(os.path.abspath(__file__))
pagina = fitz.open(pdf)[hoja - 1]
r = pagina.rect
clip = fitz.Rect(r.x0 + x0 * r.width, r.y0 + y0 * r.height,
                 r.x0 + x1 * r.width, r.y0 + y1 * r.height)

destino = os.path.join(salida, f"crop_{hoja:03d}_{int(y0 * 100):02d}.png")
pagina.get_pixmap(dpi=dpi, clip=clip).save(destino)
print(f"{destino}  ({os.path.getsize(destino) // 1024} KB)")
