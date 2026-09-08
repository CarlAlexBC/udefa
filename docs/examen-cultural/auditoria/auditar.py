"""
Auditoría a fondo del banco cultural.

Dos rondas de detectores:

RONDA 1 — reactivos que probablemente NO debieron existir, en cuatro familias:

  VISUAL  — piden mirar algo (figura, esquema, gráfica, mapa) que la
            plataforma no muestra. Son literalmente incontestables.
  PERSONA — biografías y anécdotas históricas: quién nació dónde, quién
            inventó qué. Adorno del libro, no contenido del temario.
  LIBRO   — hablan del libro mismo: su prólogo, su bibliografía, lo que
            "se verá en este capítulo".
  MARCO   — se apoyan explícitamente en un recuadro, nota al pie o cita.

RONDA 2 — reactivos mal logrados aunque sí correspondan al tema (agosto→
septiembre 2026, a raíz de reportes de aspirantes reales sobre redacción
sin contexto):

  PLANTILLA        — el enunciado no arranca con ninguna de las aperturas
                      establecidas ("En relación con el libro de…", etc.).
  SIN_ANTECEDENTE   — el enunciado usa un pronombre (lo/la/le/los/las) antes
                      de nombrar a quién se refiere. Ilegible fuera de la
                      página del libro, donde el antecedente vive en el
                      párrafo anterior.

Lo que este script deliberadamente NO intenta: decidir qué tan importante es
un tema, o si un subtema es "relleno" (introducción, dato curioso, ejemplo
ilustrativo) frente a contenido central. Se probó una señal por cantidad de
reactivos por subtema y Carlo la descartó (3 sep 2026): cuántos reactivos
tiene un subtema no dice nada de si es relleno o no — un subtema con pocos
reactivos puede ser igual de importante que uno con muchos, y viceversa. Esa
clasificación es de lectura y criterio, no de patrón de texto — el propio
README de esta carpeta ya lo advertía para la familia PERSONA ("hay que
revisarla uno por uno") y para el relleno de en medio del capítulo ("no
tiene patrón lingüístico"). Se hace en la Fase C de revisión, leyendo, no
aquí.

Escribe dos archivos: un resumen y una lista completa con archivo y número
de cada reactivo señalado, para que el trabajo de limpieza no tenga que
volver a rastrear nada.
"""
import glob, re, collections, os, sys

SALIDA = sys.argv[1] if len(sys.argv) > 1 else '.'
# Carpetas a auditar: por defecto todas (glob '*'); se puede acotar con una
# lista separada por comas, ej. `python auditar.py auditoria HCM,algebra-baldor`
CARPETAS = sys.argv[2].split(',') if len(sys.argv) > 2 else None

DETECTORES = [
    # ── VISUAL: exige ver algo que no está ────────────────────────────
    ('VISUAL', 'esquema/figura/tabla',
     r'seg[uú]n (el|la) (esquema|figura|tabla|gr[aá]fica|diagrama|mapa|ilustraci[oó]n|imagen|dibujo)'
     r'|de acuerdo con (el|la) (esquema|figura|tabla|gr[aá]fica|diagrama|mapa)'
     r'|en (el|la) (siguiente )?(esquema|figura|diagrama|gr[aá]fica|ilustraci[oó]n)'
     r'|observa (el|la) (figura|esquema|gr[aá]fica|imagen|tabla)'
     r'|la figura \d|la tabla \d|el esquema resumen'),

    # ── MARCO: se apoya en material lateral del libro ─────────────────
    ('MARCO', 'recuadro o margen',
     r'seg[uú]n el recuadro|del recuadro|el recuadro (hist[oó]rico|de)|al margen'),
    ('MARCO', 'nota al pie',
     r'seg[uú]n la nota( hist[oó]rica)?|nota al pie'),
    ('MARCO', 'cita o epigrafe',
     r'seg[uú]n la cita|el ep[ií]grafe'),

    # ── PERSONA: biografia y anecdota ─────────────────────────────────
    ('PERSONA', 'nacimiento o muerte',
     r'\b(d[oó]nde|cu[aá]ndo|en qu[eé] a[nñ]o) (naci[oó]|muri[oó]|falleci[oó])'
     r'|\ba[nñ]o de (su )?nacimiento|lugar de nacimiento|\bnaci[oó] y .{0,10}muri[oó]'),
    ('PERSONA', 'autoria o merito',
     r'¿a qui[eé]n se (le )?(debe|atribuye)|fue (propuest|formulad|desarrollad|descubiert|invent)'
     r'|¿qui[eé]n (fue|invent[oó]|descubri[oó]|propuso|formul[oó]|acu[nñ][oó]|llam[oó])'),
    ('PERSONA', 'gentilicio de cientifico',
     r'\b(matem[aá]tico|cient[ií]fico|f[ií]sico|astr[oó]nomo|fil[oó]sofo|bi[oó]logo|qu[ií]mico)\s+'
     r'(griego|alem[aá]n|ingl[eé]s|franc[eé]s|italiano|sueco|dan[eé]s|ruso|suizo|polaco|holand[eé]s)'),

    # ── LIBRO: habla del libro, no del tema ───────────────────────────
    ('LIBRO', 'prologo o presentacion',
     r'seg[uú]n el pr[oó]logo|en la presentaci[oó]n del libro|el prefacio|la advertencia al lector'),
    ('LIBRO', 'introduccion del capitulo',
     r'seg[uú]n la introducci[oó]n|en la introducci[oó]n del cap|en este cap[ií]tulo se (ver[aá]|estudiar[aá]|analizar[aá])'
     r'|el (objetivo|prop[oó]sito) de este cap[ií]tulo'),
    ('LIBRO', 'bibliografia o fuentes',
     r'bibliograf[ií]a|fuentes consultadas|lecturas recomendadas|¿en qu[eé] editorial|¿de qu[eé] a[nñ]o es (el|la)'),
]

# ── RONDA 2 ─────────────────────────────────────────────────────────────

APERTURAS_VALIDAS = re.compile(
    r'^(en relaci[oó]n con el|de acuerdo con el|de conformidad con el|seg[uú]n el|conforme al)'
    r'\s+libro de',
    re.I,
)

# Palabras que empiezan con mayúscula pero son parte del molde de la
# pregunta, no un antecedente real (nombre propio, sigla, institución).
PALABRAS_INTERROGATIVAS = {
    'qué', 'quién', 'quiénes', 'cuál', 'cuáles', 'cómo', 'cuándo', 'dónde',
    'cuánto', 'cuánta', 'cuántos', 'cuántas', 'por', 'para', 'en', 'de',
    'según', 'bajo', 'con', 'entre', 'sobre', 'desde', 'hasta', 'del', 'al',
}

# Sólo pretérito (-ó/-aron/-ieron): el imperfecto (-ía/-aba) choca demasiado
# con sustantivos femeninos comunes (teoría, energía, biología...) y disparaba
# falsos positivos por "la teoría", "la energía", etc.
PRONOMBRE_SIN_NOMBRAR = re.compile(
    r'\b(lo|la|le|los|las)\s+[a-záéíóúñ]+(?:ó|aron|ieron)\b', re.I,
)
CAPITALIZADO = re.compile(r'\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}\b')


def revisar_plantilla(e: str):
    if APERTURAS_VALIDAS.match(e.strip()):
        return None
    return 'apertura fuera de las establecidas'


ARTICULO_QUE_CONCUERDA = {'lo': 'el', 'la': 'la', 'los': 'los', 'las': 'las'}


def revisar_sin_antecedente(e: str):
    # Quita la cláusula fija ("En relación con el libro de X, ") para no
    # confundir el título del libro con el antecedente que se busca.
    pregunta = re.sub(
        r'^(en relaci[oó]n con el|de acuerdo con el|de conformidad con el|seg[uú]n el|conforme al)'
        r'\s+libro de [^,]+,\s*', '', e.strip(), flags=re.I,
    )
    m = PRONOMBRE_SIN_NOMBRAR.search(pregunta)
    if not m:
        return None
    pronombre = m.group(1).lower()
    # El antecedente puede ir antes ("Fulano... lo hizo") o después, en una
    # frase aclaratoria pospuesta muy común en español ("le faltaba A LA
    # TEORÍA DE OPARIN", "¿qué es la superconductividad y quién LA
    # descubrió?"). Se busca en los dos lados.
    antes = pregunta[:m.start()]
    despues = pregunta[m.end():]
    articulo = ARTICULO_QUE_CONCUERDA.get(pronombre)
    for lado in (antes, despues):
        if articulo:
            # "lo"/"la"/"los"/"las" sólo pueden referirse a un sustantivo con
            # el MISMO artículo (concuerda en género y número). "la
            # influencia" no sirve de antecedente para "lo" — son de género
            # distinto — pero "la superconductividad" sí sirve para "la".
            # Este cruce es lo que de verdad separa el caso de la CIA (sin
            # ningún sustantivo que concuerde) de una oración normal.
            if re.search(rf'\b{articulo}\s+[a-záéíóúñ]{{3,}}\b', lado, re.I):
                return None
        else:
            # "le" no marca género: se cae al criterio más débil (nombre
            # propio, o "el/la/los/las X de NOMBRE") a cualquier lado.
            for token in CAPITALIZADO.findall(lado):
                if token.lower() not in PALABRAS_INTERROGATIVAS:
                    return None
            if re.search(r'\b(el|la|los|las)\s+\w+\s+de\s+[A-ZÁÉÍÓÚÑ]', lado):
                return None
    return f'pronombre "{pronombre}" sin nombrar antes a quién se refiere'


def enunciado(bloque: str) -> str:
    txt = re.split(r'^- [A-D]\.', bloque, flags=re.M)[0]
    return re.sub(r'^\s*\d+\s*', '', txt).strip().replace('\n', ' ')


def numero(bloque: str) -> str:
    m = re.match(r'\s*(\S+)', bloque)
    return m.group(1) if m else '?'


total = 0
por_familia = collections.Counter()
por_detector = collections.Counter()
por_libro = collections.defaultdict(collections.Counter)
filas = []
ejemplos = collections.defaultdict(list)

patron_archivos = [f'{c}/*.md' for c in CARPETAS] if CARPETAS else ['*/*.md']
rutas = sorted({
    p for pat in patron_archivos for p in glob.glob(pat)
    if not p.replace(os.sep, '/').startswith('auditoria/')
})

for f in rutas:
    ruta = f.replace(os.sep, '/')
    libro = ruta.split('/')[0]
    texto_completo = open(f, encoding='utf-8').read()

    for b in re.split(r'^### ', texto_completo, flags=re.M)[1:]:
        # Los retirados conservan su texto en el archivo, así que seguirían
        # apareciendo aquí para siempre. La auditoría mide el banco VIVO: lo que
        # de verdad le puede tocar a un aspirante.
        if re.search(r'^\*\*Retirado:\*\*', b, re.M):
            continue
        total += 1
        e = enunciado(b)

        flagged = False
        for familia, etiqueta, patron in DETECTORES:
            if re.search(patron, e, re.I):
                por_familia[familia] += 1
                por_detector[f'{familia} · {etiqueta}'] += 1
                por_libro[familia][libro] += 1
                filas.append((ruta, numero(b), familia, etiqueta, e[:160]))
                if len(ejemplos[f'{familia} · {etiqueta}']) < 2:
                    ejemplos[f'{familia} · {etiqueta}'].append((libro, e[:130]))
                flagged = True
                break
        if flagged:
            continue

        motivo = revisar_plantilla(e)
        if motivo:
            por_familia['PLANTILLA'] += 1
            por_detector[f'PLANTILLA · {motivo}'] += 1
            por_libro['PLANTILLA'][libro] += 1
            filas.append((ruta, numero(b), 'PLANTILLA', motivo, e[:160]))
            continue

        motivo = revisar_sin_antecedente(e)
        if motivo:
            por_familia['SIN_ANTECEDENTE'] += 1
            por_detector['SIN_ANTECEDENTE · pronombre sin nombrar'] += 1
            por_libro['SIN_ANTECEDENTE'][libro] += 1
            filas.append((ruta, numero(b), 'SIN_ANTECEDENTE', motivo, e[:160]))
            continue

señalados = len(filas)
lineas = []
lineas.append(f'Reactivos totales en los .md: {total}')
lineas.append(f'Señalados: {señalados}  ({señalados*100/total:.1f}%)' if total else 'Señalados: 0')
lineas.append('')
lineas.append('POR FAMILIA')
for fam, n in por_familia.most_common():
    det = ', '.join(f'{l} {c}' for l, c in por_libro[fam].most_common(6))
    lineas.append(f'  {fam:16} {n:5}   {det}')
lineas.append('')
lineas.append('POR DETECTOR')
for k, n in por_detector.most_common():
    lineas.append(f'  {n:5}  {k}')
    for lib, t in ejemplos[k]:
        lineas.append(f'         [{lib}] "{t}"')

reporte = '\n'.join(lineas)
print(reporte)

with open(os.path.join(SALIDA, 'auditoria-resumen.txt'), 'w', encoding='utf-8') as fh:
    fh.write(reporte + '\n')

with open(os.path.join(SALIDA, 'auditoria-reactivos.tsv'), 'w', encoding='utf-8') as fh:
    fh.write('archivo\tnumero\tfamilia\tdetector\tenunciado\n')
    for r in filas:
        fh.write('\t'.join(r) + '\n')

print(f'\n-> auditoria-resumen.txt y auditoria-reactivos.tsv ({señalados} filas)')
