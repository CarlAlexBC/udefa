"""
Extrae todos los reactivos marcados **Retirado:** del banco cultural,
con su enunciado y motivo, para revision humana (no forma parte del
pipeline de auditoria normal - es una utilidad de un solo uso para
mostrarle a Carlo la lista completa).

Uso: parado en docs/examen-cultural/
    python auditoria/extraer_retirados.py > auditoria/retirados.json
"""
import glob, re, os, json

def enunciado(bloque):
    txt = re.split(r'^- [A-D]\.', bloque, flags=re.M)[0]
    return re.sub(r'^\s*\d+\s*', '', txt).strip().replace('\n', ' ')

def numero(bloque):
    m = re.match(r'\s*(\S+)', bloque)
    return m.group(1) if m else '?'

filas = []
for f in sorted(glob.glob('*/*.md')):
    ruta = f.replace(os.sep, '/')
    if ruta.startswith('auditoria/'):
        continue
    libro = ruta.split('/')[0]
    texto = open(f, encoding='utf-8').read()
    for b in re.split(r'^### ', texto, flags=re.M)[1:]:
        m = re.search(r'^\*\*Retirado:\*\*\s*(.+)$', b, re.M)
        if not m:
            continue
        filas.append({
            'archivo': ruta,
            'libro': libro,
            'numero': numero(b),
            'motivo': m.group(1).strip(),
            'enunciado': enunciado(b),
        })

with open('auditoria/retirados.json', 'w', encoding='utf-8') as fh:
    json.dump(filas, fh, ensure_ascii=False, indent=2)
print(f'{len(filas)} retirados -> auditoria/retirados.json')
