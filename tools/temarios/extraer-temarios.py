#!/usr/bin/env python3
"""
Extrae los temarios oficiales de los PDF de la convocatoria a un JSON.

Por qué existe
--------------
Los 16 temarios son la única fuente de verdad de qué pide cada carrera. Hasta
ahora esa información se leía a ojo y se tecleaba en los encabezados de los
`.md`, que es justo como se cuelan los errores: el alcance del capítulo 7 de
Biología estuvo mal apuntado durante días porque nadie volvió al PDF.

Este script no interpreta ni resume. Copia lo que dice el PDF.

Qué descubre
------------
Que 17 de las 25 materias del sistema las comparten dos o más carreras. El
temario de Biología `BIO-01-2026`, por ejemplo, lo piden cuatro: Enfermería
Militar, Médico Cirujano, Oficiales de Sanidad y Cirujano Dentista. Por eso el
banco de reactivos no puede colgar de un plantel.

Formato de los PDF
------------------
Página 1 es la portada: escuela, carrera y lista de materias. Cada página
siguiente lleva, en este orden:

    CÓDIGO-NN-2026
    <código de la carrera>
    Materia: <nombre>
    <líneas de temas: "Capítulo N.", "Unidad N.", "I.", "1.", "Completo."…>
    <nombre de la materia, repetido>
    <un número suelto: el número de libro>
    <cita del libro, en una o varias líneas>
    Títulos, Capítulos, Temas y Subtemas.   ← encabezados de la tabla
    …
    Página N de M

Una materia puede ocupar varias páginas; se acumulan por código.

Uso
---
    python tools/temarios/extraer-temarios.py            # escribe el JSON
    python tools/temarios/extraer-temarios.py --resumen  # sólo reporta
"""

import glob
import json
import os
import re
import sys
from collections import OrderedDict, defaultdict
from datetime import date

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PATRON = os.path.join(RAIZ, 'examen_cultural', 'temarios_de_escuelas', '**', '*.pdf')
SALIDA = os.path.join(RAIZ, 'docs', 'examen-cultural', 'temarios.json')

RE_CODIGO = re.compile(r'^[A-ZÁÉÍÓÚÑ]{2,7}-\d{2}-\d{4}$')

# Encabezados de la tabla y pie de página. No son contenido: son el marco del
# PDF, y aparecen al final de cada página porque el texto viene rotado.
MARCO = (
    'Títulos, Capítulos, Temas y Subtemas.',
    'No.',
    'Libros o Manuales.',
    'Referencias',
    'Bibliográficas.',
    'Temario.',
)
RE_PAGINA = re.compile(r'^Página \d+ de \d+$')


def normalizar_codigo(codigo):
    """
    Quita acentos del código de materia.

    La convocatoria escribe la misma materia de tres formas —`FÍS-02`, `FIS-02`
    y `FÍSICA-02`—, así que comparar los códigos crudos haría parecer distintas
    a carreras que comparten materia. Se conserva el crudo y se añade éste.
    """
    tabla = str.maketrans('ÁÉÍÓÚÑ', 'AEIOUN')
    return codigo.translate(tabla)


def lineas_de(pagina):
    return [l.strip() for l in pagina.get_text().split('\n') if l.strip()]


def parsear_portada(lineas):
    """
    Devuelve (nombre de la carrera, materias declaradas).

    La portada trae encabezados institucionales, luego una línea larga con la
    escuela y la carrera, luego el nombre del apéndice, y al final las materias.
    La línea de la carrera es la que lleva coma y nombra una escuela.
    """
    carrera = ''
    for l in lineas:
        if l.startswith('Escuela') or l.startswith('Heroico') or l.startswith('Colegio'):
            carrera = l
            break
    materias = []
    if carrera:
        i = lineas.index(carrera)
        for l in lineas[i + 1:]:
            if l.startswith('Apéndice') or RE_PAGINA.match(l):
                continue
            materias.append(l)
    return carrera, materias


def parsear_materia(lineas, carrera_cod=''):
    """
    Devuelve dict con codigo, nombre, temas y libro, o None si la página no es
    de materia (la portada, por ejemplo).

    Dos cosas que NO se pueden dar por sentadas, y que costaron dos temarios
    enteros al escribir esto:

    1. **El código no siempre va en la primera línea.** El PDF viene rotado y el
       orden del texto cambia de página a página: en `EMOS_OFLS_SND` el código
       de Biología aparece en la línea 31. Se busca en toda la página.
    2. **La línea "Materia:" no siempre existe.** `HCM__LIC__SGD_PUB` no la trae
       en ninguna de sus cuatro materias. Cuando falta, el nombre se toma de la
       línea que precede al número de libro, donde el PDF lo repite.
    """
    codigo = next((l for l in lineas if RE_CODIGO.match(l)), None)
    if not codigo:
        return None

    # Se quita el marco: el código, el código de la carrera —que se repite en
    # todas las páginas—, los encabezados de la tabla y el pie.
    cuerpo = [
        l for l in lineas
        if l != codigo and l != carrera_cod and l not in MARCO and not RE_PAGINA.match(l)
    ]

    nombre = ''
    resto = []
    for l in cuerpo:
        if not nombre and l.startswith('Materia:'):
            nombre = l.split(':', 1)[1].strip()
            continue
        resto.append(l)

    # La cita del libro empieza después de un número suelto (el "No." de la
    # columna de bibliografía). Antes de ese número van los temas, y justo
    # encima el nombre de la materia repetido.
    corte = next((i for i, l in enumerate(resto) if re.fullmatch(r'\d+', l)), None)

    if corte is None:
        temas, libro = resto, ''
    else:
        temas = resto[:corte]
        libro = ' '.join(resto[corte + 1:]).strip()

    def igual(a, b):
        return a.rstrip('.').strip().lower() == b.rstrip('.').strip().lower()

    if temas:
        if nombre and igual(temas[-1], nombre):
            temas = temas[:-1]
        elif not nombre:
            # Sin línea "Materia:", el nombre es esa repetición.
            nombre = temas[-1].rstrip('.').strip()
            temas = temas[:-1]

    return {'codigo': codigo, 'nombre': nombre, 'temas': temas, 'libro': libro}


def detectar_codigo_carrera(paginas):
    """
    El código de la carrera ("EMM. CSO.FORM.M. C.") se repite en todas las
    páginas de materia. Se detecta como la línea corta que aparece en todas
    menos la portada, para poder descontarla del contenido.
    """
    conjuntos = []
    for lineas in paginas[1:]:
        if any(RE_CODIGO.match(l) for l in lineas):
            conjuntos.append({l for l in lineas if len(l) <= 40})
    if not conjuntos:
        return ''
    comunes = set.intersection(*conjuntos) - set(MARCO)
    comunes = {c for c in comunes if not RE_CODIGO.match(c) and not RE_PAGINA.match(c)}
    return max(comunes, key=len) if comunes else ''


def extraer(ruta):
    import fitz

    doc = fitz.open(ruta)
    paginas = [lineas_de(p) for p in doc]

    carrera, materias_portada = parsear_portada(paginas[0]) if paginas else ('', [])
    carrera_cod = detectar_codigo_carrera(paginas)

    # Una materia puede ocupar varias páginas: se acumulan por código,
    # respetando el orden de aparición.
    acumulado = OrderedDict()
    for lineas in paginas[1:]:
        m = parsear_materia(lineas, carrera_cod)
        if not m:
            continue
        if m['codigo'] in acumulado:
            prev = acumulado[m['codigo']]
            prev['temas'].extend(m['temas'])
            if m['libro'] and not prev['libro']:
                prev['libro'] = m['libro']
        else:
            m['codigo_normalizado'] = normalizar_codigo(m['codigo'])
            acumulado[m['codigo']] = m

    nombre_archivo = os.path.basename(ruta)
    plantel = os.path.basename(os.path.dirname(ruta))
    anio = int(re.search(r'(\d{4})\.pdf$', nombre_archivo).group(1))

    return {
        'archivo': nombre_archivo,
        'plantel': plantel,
        'carrera': carrera,
        'anio': anio,
        'materias_en_portada': materias_portada,
        'materias': list(acumulado.values()),
    }


def main():
    solo_resumen = '--resumen' in sys.argv

    rutas = sorted(glob.glob(PATRON, recursive=True))
    if not rutas:
        print(f'No encontré temarios en {PATRON}')
        return 1

    carreras = [extraer(r) for r in rutas]

    # Índice inverso: qué carreras piden cada materia. Es el dato que justifica
    # todo el rediseño del banco, así que se guarda calculado, no de palabra.
    por_materia = defaultdict(list)
    for c in carreras:
        for m in c['materias']:
            por_materia[m['codigo_normalizado']].append(c['archivo'].replace('_2026.pdf', ''))

    compartidas = {k: v for k, v in por_materia.items() if len(v) > 1}

    print(f'{len(carreras)} temarios · {len(por_materia)} materias distintas')
    print(f'  compartidas por 2 o más carreras: {len(compartidas)}')
    print(f'  exclusivas de una carrera:        {len(por_materia) - len(compartidas)}')
    print()
    for k, v in sorted(compartidas.items(), key=lambda x: -len(x[1])):
        print(f'  {k:16} x{len(v)}  {", ".join(v)}')

    sin_libro = [(c['archivo'], m['codigo']) for c in carreras for m in c['materias'] if not m['libro']]
    sin_temas = [(c['archivo'], m['codigo']) for c in carreras for m in c['materias'] if not m['temas']]
    if sin_libro or sin_temas:
        print()
        if sin_libro:
            print(f'  AVISO · {len(sin_libro)} materias sin libro detectado: {sin_libro[:5]}')
        if sin_temas:
            print(f'  AVISO · {len(sin_temas)} materias sin temas detectados: {sin_temas[:5]}')

    if solo_resumen:
        return 0

    salida = {
        'generado': date.today().isoformat(),
        'fuente': 'examen_cultural/temarios_de_escuelas/**/*.pdf',
        'nota': (
            'Archivo generado por tools/temarios/extraer-temarios.py. '
            'No lo edites a mano: se regenera desde los PDF de la convocatoria.'
        ),
        'materias_compartidas': {k: sorted(v) for k, v in sorted(compartidas.items())},
        'carreras': carreras,
    }
    os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
    with open(SALIDA, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(salida, f, ensure_ascii=False, indent=2)
    print(f'\nEscrito: {os.path.relpath(SALIDA, RAIZ)}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
