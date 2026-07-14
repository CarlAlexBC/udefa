"""Parsea TODOS los simuladores axiológicos (DFPT, V1.0, V2.0, V3.0),
deduplica por enunciado, y genera el JSON consolidado.
"""
import re
import json
import os
import sys
import shutil
import zipfile

sys.stdout.reconfigure(encoding='utf-8')

BLOQUE_ID = 7
OPCIONES_LIKERT_5 = [
    "Me parezco totalmente",
    "Me parezco mucho",
    "Me parezco más o menos",
    "Me parezco poco",
    "No me parezco nada",
]

BASE = r"C:\Users\carlo\OneDrive\Escritorio\UDEFA 2026\ARCHIVOS DEFINITIVOS PARA EL PROCESO DE ADMISION\ESTRUCTURA DE EXAMEN PSICOLÓGICO (SIMULADORES EMTG)\AXIOLÓGICO"

SIMULADORES = [
    "SIMULADOR AXIOLÓGICO DFPT.docx",
    "SIMULADOR DEL EXAMEN AXIOLÓGICO V1.0.docx",
    "SIMULADOR DEL EXAMEN AXIOLÓGICO V2.0.docx",
    "SIMULADOR DEL EXAMEN AXIOLÓGICO V3.0.docx",
]

# Reactivo del ejemplo (aparece en las instrucciones de TODOS los simuladores)
EJEMPLO_A_EXCLUIR = 'lealtad hacia su país está por encima'


def extraer_texto_docx(docx_path: str, tmp_dir: str) -> list[str]:
    """Extrae las lineas de texto del docx via unzip + regex."""
    if os.path.exists(tmp_dir):
        shutil.rmtree(tmp_dir)
    os.makedirs(tmp_dir)
    with zipfile.ZipFile(docx_path, 'r') as z:
        z.extractall(tmp_dir)
    with open(os.path.join(tmp_dir, 'word', 'document.xml'), encoding='utf-8') as f:
        content = f.read()
    paras = re.findall(r'<w:p[ >].*?</w:p>', content, re.DOTALL)
    lineas = []
    for p in paras:
        ts = re.findall(r'<w:t[^>]*>(.*?)</w:t>', p, re.DOTALL)
        l = ''.join(ts).strip()
        if l:
            lineas.append(l)
    return lineas


def extraer_reactivos(lineas: list[str]) -> list[str]:
    """Extrae los enunciados 'Para esta persona ...' del texto."""
    RE = re.compile(r'^(?:\d+\s*\.\s*)?(Para esta persona\s+.+?)\s*$', re.IGNORECASE)
    enunciados = []
    for l in lineas:
        m = RE.match(l)
        if m:
            enunciado = m.group(1).strip()
            if EJEMPLO_A_EXCLUIR in enunciado.lower():
                continue
            enunciados.append(enunciado)
    return enunciados


def normalizar_para_deduplicar(enunciado: str) -> str:
    """Baja para comparar sin sensibilidad a puntuación menor."""
    return re.sub(r'\s+', ' ', enunciado.lower().strip().rstrip('.'))


if __name__ == '__main__':
    tmp_base = 'tmp_axio'
    todos = []  # (fuente, enunciado)

    for i, archivo in enumerate(SIMULADORES, 1):
        docx_path = os.path.join(BASE, archivo)
        tmp = os.path.join(tmp_base, f'sim{i}')
        print(f"\nProcesando: {archivo}")
        lineas = extraer_texto_docx(docx_path, tmp)
        reactivos = extraer_reactivos(lineas)
        print(f"  Reactivos extraidos: {len(reactivos)}")
        for r in reactivos:
            todos.append((archivo, r))

    # Deduplicar por enunciado normalizado
    vistos = {}
    duplicados = 0
    for fuente, enun in todos:
        clave = normalizar_para_deduplicar(enun)
        if clave in vistos:
            duplicados += 1
        else:
            vistos[clave] = enun

    unicos = list(vistos.values())
    print(f"\n═══ Total reactivos extraidos: {len(todos)} ═══")
    print(f"    Duplicados encontrados: {duplicados}")
    print(f"    Reactivos unicos: {len(unicos)}")

    salida = [{
        'bloqueId': BLOQUE_ID,
        'enunciado': enun,
        'opciones': OPCIONES_LIKERT_5,
        'tipo': 'escala_likert',
        'respuestaCorrecta': None,
        'tema': 'valores_militares',
        'polaridad': 'POSITIVA',
    } for enun in unicos]

    os.makedirs('output', exist_ok=True)
    out_path = 'output/reactivos_bloque7_axiologico.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(salida, f, ensure_ascii=False, indent=2)

    print(f"\nJSON generado: {out_path}")
    print(f"Listos para cargar: {len(salida)}")

    if os.path.exists(tmp_base):
        shutil.rmtree(tmp_base)
