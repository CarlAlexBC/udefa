"""Parsea el PDF de reactivos de personalidad y genera un JSON listo
para cargar via POST /reactivos/masivo.

- Detecta headers TEMA N — NOMBRE (y su continuación si desborda a la siguiente linea).
- Detecta subtemas 'Subtema X — nombre'.
- Extrae reactivos numerados '1. Texto...' (incluyendo lineas continuadas).
- Normaliza el nombre del tema a snake_case ASCII.
- Deja polaridad = null (se determinara despues manual o con revision LLM).

Output: output/reactivos_bloque6_personalidad.json
"""
import re
import json
import unicodedata
import os
import sys
from pypdf import PdfReader

sys.stdout.reconfigure(encoding='utf-8')

PDF_PATH = r"C:\Users\carlo\OneDrive\Escritorio\UDEFA 2026\ARCHIVOS DEFINITIVOS PARA EL PROCESO DE ADMISION\ESTRUCTURA DE EXAMEN PSICOLÓGICO (SIMULADORES EMTG)\PERSONALIDAD\REACTIVOS DE EXAMEN DE PERSONALIDAD PARA LA PLATAFORMA.pdf"
BLOQUE_ID = 6
OPCIONES_LIKERT = [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "De acuerdo",
    "Totalmente de acuerdo",
]


def normalizar_tema(nombre: str) -> str:
    """'SUICIDIO Y SENTIDO DE VIDA' -> 'suicidio_y_sentido_de_vida'."""
    # Quitar acentos
    nfkd = unicodedata.normalize('NFKD', nombre)
    sin_acentos = ''.join(c for c in nfkd if not unicodedata.combining(c))
    # Lowercase + snake_case
    limpio = re.sub(r'[^a-zA-Z0-9\s]', '', sin_acentos).lower().strip()
    return re.sub(r'\s+', '_', limpio)


def leer_pdf(path: str) -> list[str]:
    """Devuelve todas las lineas del PDF."""
    reader = PdfReader(path)
    lineas = []
    for page in reader.pages:
        text = page.extract_text()
        for linea in text.split('\n'):
            l = linea.strip()
            if l:
                lineas.append(l)
    return lineas


def parsear(lineas: list[str]) -> list[dict]:
    """Recorre las lineas armando la lista de reactivos con su tema/subtema."""
    reactivos = []
    tema_id = None
    tema_actual = None
    subtema_actual = None
    i = 0

    RE_TEMA = re.compile(r'^(?:TEMA|BLOQUE) (\d+)\s*—\s*(.+?)\s*$')
    RE_SUBTEMA = re.compile(r'^Subtema ([A-Z])\s*—\s*(.+?)\s*$')
    RE_REACTIVO = re.compile(r'^(\d+)\.\s+(.+?)\s*$')
    # Linea que solo tiene letras mayusculas (continuacion del nombre del tema)
    RE_MAYUSCULAS = re.compile(r'^[A-ZÁÉÍÓÚÑ\s]+$')

    while i < len(lineas):
        linea = lineas[i]

        # ¿Es un TEMA nuevo?
        m = RE_TEMA.match(linea)
        if m:
            tema_id = int(m.group(1))
            nombre = m.group(2).strip()
            # Continuacion (ej: "TEMA 1 — SUICIDIO Y SENTIDO DE" + siguiente "VIDA")
            j = i + 1
            while j < len(lineas) and RE_MAYUSCULAS.match(lineas[j]) and len(lineas[j]) < 30:
                nombre += ' ' + lineas[j].strip()
                j += 1
            tema_actual = nombre
            subtema_actual = None
            i = j
            continue

        # ¿Es un Subtema?
        m = RE_SUBTEMA.match(linea)
        if m:
            subtema_actual = m.group(2).strip()
            i += 1
            continue

        # ¿Es un reactivo numerado?
        m = RE_REACTIVO.match(linea)
        if m and tema_actual:
            num = int(m.group(1))
            enunciado = m.group(2).strip()
            # ¿Se continua en la siguiente linea? (No empieza con TEMA/Subtema/numero)
            j = i + 1
            while j < len(lineas):
                sig = lineas[j]
                if RE_TEMA.match(sig) or RE_SUBTEMA.match(sig) or RE_REACTIVO.match(sig):
                    break
                if RE_MAYUSCULAS.match(sig) and len(sig) < 30:
                    break
                # Si es continuacion, la agregamos
                enunciado += ' ' + sig
                j += 1
            reactivos.append({
                'numero_original': num,
                'tema_id': tema_id,
                'tema_nombre_original': tema_actual,
                'tema': normalizar_tema(tema_actual),
                'subtema': subtema_actual,
                'enunciado': enunciado.strip(),
            })
            i = j
            continue

        i += 1

    return reactivos


def a_formato_backend(reactivos_parseados: list[dict]) -> list[dict]:
    """Convierte al formato JSON del endpoint POST /reactivos/masivo."""
    salida = []
    for r in reactivos_parseados:
        salida.append({
            'bloqueId': BLOQUE_ID,
            'enunciado': r['enunciado'],
            'opciones': OPCIONES_LIKERT,
            'tipo': 'escala_likert',
            'respuestaCorrecta': None,
            'tema': r['tema'],
            'polaridad': None,  # se resolvera despues
        })
    return salida


if __name__ == '__main__':
    print(f"Leyendo: {os.path.basename(PDF_PATH)}")
    lineas = leer_pdf(PDF_PATH)
    print(f"Total lineas extraidas: {len(lineas)}\n")

    reactivos = parsear(lineas)
    print(f"Total reactivos parseados: {len(reactivos)}\n")

    # Estadisticas por tema
    de_temas = {}
    for r in reactivos:
        de_temas.setdefault(r['tema'], 0)
        de_temas[r['tema']] += 1
    print(f"Total temas distintos: {len(de_temas)}")
    print(f"\nDistribucion de reactivos por tema (top 10 por cantidad):")
    for tema, count in sorted(de_temas.items(), key=lambda x: -x[1])[:10]:
        print(f"  {count:4d}  {tema}")

    print(f"\nMuestra de 3 reactivos:")
    for r in reactivos[:3]:
        print(f"  [{r['tema']}] {r['enunciado'][:100]}")

    salida = a_formato_backend(reactivos)
    os.makedirs('output', exist_ok=True)
    out_path = 'output/reactivos_bloque6_personalidad.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(salida, f, ensure_ascii=False, indent=2)
    print(f"\nJSON generado: {out_path}")
    print(f"Reactivos listos para cargar: {len(salida)}")
