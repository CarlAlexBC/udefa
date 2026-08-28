"""
Auditoría a fondo del banco cultural.

Busca reactivos que probablemente NO debieron existir, en cuatro familias:

  VISUAL  — piden mirar algo (figura, esquema, gráfica, mapa) que la
            plataforma no muestra. Son literalmente incontestables.
  PERSONA — biografías y anécdotas históricas: quién nació dónde, quién
            inventó qué. Adorno del libro, no contenido del temario.
  LIBRO   — hablan del libro mismo: su prólogo, su bibliografía, lo que
            "se verá en este capítulo".
  MARCO   — se apoyan explícitamente en un recuadro, nota al pie o cita.

Escribe dos archivos: un resumen y una lista completa con archivo y número
de cada reactivo señalado, para que el trabajo de limpieza no tenga que
volver a rastrear nada.
"""
import glob, re, collections, os, sys

SALIDA = sys.argv[1] if len(sys.argv) > 1 else '.'

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

for f in sorted(glob.glob('*/*.md')):
    ruta = f.replace(os.sep, '/')
    libro = ruta.split('/')[0]
    for b in re.split(r'^### ', open(f, encoding='utf-8').read(), flags=re.M)[1:]:
        # Los retirados conservan su texto en el archivo, así que seguirían
        # apareciendo aquí para siempre. La auditoría mide el banco VIVO: lo que
        # de verdad le puede tocar a un aspirante.
        if re.search(r'^\*\*Retirado:\*\*', b, re.M):
            continue
        total += 1
        e = enunciado(b)
        for familia, etiqueta, patron in DETECTORES:
            if re.search(patron, e, re.I):
                por_familia[familia] += 1
                por_detector[f'{familia} · {etiqueta}'] += 1
                por_libro[familia][libro] += 1
                filas.append((ruta, numero(b), familia, etiqueta, e[:160]))
                if len(ejemplos[f'{familia} · {etiqueta}']) < 2:
                    ejemplos[f'{familia} · {etiqueta}'].append((libro, e[:130]))
                break

señalados = len(filas)
lineas = []
lineas.append(f'Reactivos totales en los .md: {total}')
lineas.append(f'Señalados: {señalados}  ({señalados*100/total:.1f}%)')
lineas.append('')
lineas.append('POR FAMILIA')
for fam, n in por_familia.most_common():
    det = ', '.join(f'{l} {c}' for l, c in por_libro[fam].most_common(6))
    lineas.append(f'  {fam:9} {n:5}   {det}')
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
