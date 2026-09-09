"""
Genera el HTML del artefacto "Retiros del banco cultural" a partir de
retirados.json. Utilidad de un solo uso, no forma parte del pipeline
normal de auditoria.

Uso: parado en docs/examen-cultural/
    python auditoria/construir_artefacto.py
"""
import json, re, html

CATEGORIAS_CONOCIDAS = {'PERSONA', 'VISUAL', 'MARCO', 'LIBRO', 'TEMA', 'PLANTILLA', 'SIN_ANTECEDENTE'}

def categoria(motivo):
    m = re.match(r'^([A-Z_]+)\s*·', motivo)
    if m and m.group(1) in CATEGORIAS_CONOCIDAS:
        return m.group(1)
    return 'RELLENO'

NOMBRE_LIBRO = {
    'algebra-baldor': 'Álgebra (Baldor)',
    'historia-mexico-menchaca': 'Historia de México (Menchaca)',
    'HCM': 'Historia Universal (HCM)',
    'geografia-lucio-victorio': 'Geografía (Lucio Victorio)',
    'EMM': 'Biología y Química (EMM)',
    'fisica-perez-montiel': 'Física (Pérez Montiel)',
    'zill-atg': 'Álgebra, Trig. y Geom. Analítica (Zill)',
    'larson-precalculo': 'Precálculo (Larson)',
    'espanol-zarzar': 'Taller de Lectura y Redacción (Zarzar)',
    'calculo-salazar': 'Cálculo (Salazar)',
}

data = json.load(open('auditoria/retirados.json', encoding='utf-8'))
for row in data:
    row['categoria'] = categoria(row['motivo'])
    row['libroNombre'] = NOMBRE_LIBRO.get(row['libro'], row['libro'])

data.sort(key=lambda r: (r['libroNombre'], r['archivo'], int(r['numero']) if r['numero'].isdigit() else 0))

data_json = json.dumps(data, ensure_ascii=False)

template = open('auditoria/retiros_template.html', encoding='utf-8').read()
out = template.replace('/*__DATA__*/', data_json)
with open('auditoria/retiros_banco_cultural.html', 'w', encoding='utf-8') as fh:
    fh.write(out)
print(f'{len(data)} filas -> auditoria/retiros_banco_cultural.html')
