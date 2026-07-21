"""Extrae el texto de una hoja de un libro que SÍ trae capa de texto.

    python extraer.py "<ruta del pdf>" <hoja_desde> [hoja_hasta] [--desfase N]

Es la contraparte de `render.py`. Cuál usar depende del libro:

  - **Escaneos sin capa de texto** (los cuatro del HCM): `render.py`, que
    convierte la hoja a PNG para leerla con los ojos.
  - **PDF con capa de texto** (Biología de Curtis, EMM): este script, que
    saca el texto directo. Es más rápido y más fiel para citar literal,
    porque no depende de leer bien una imagen.

Para saber cuál es el caso, mira si la hoja trae texto:

    python -c "import fitz; d=fitz.open(RUTA); print(len(d[100].get_text()))"

Un escaneo devuelve ~0 caracteres; uno con capa de texto, miles.

## Por qué no basta con get_text()

Curtis pinta los títulos DOS VECES, con un desplazamiento de milímetros,
para que se vean gruesos. `get_text()` los devuelve duplicados:

    "ORIGEN DE ORIGEN DE LA VIDA LA VIDA: LA FORMACIÓN DE LAS…"

Copiar eso a un reactivo metería la duplicación en la cita. Este script
descarta los spans que caen encima de otro ya visto.

El desfase entre hoja del PDF y página impresa **se pasa como argumento y
se lee del libro**, nunca se adivina: es la trampa que más ha costado en
este banco.

## Lo que este script NO limpia

La deduplicación trabaja **dentro de cada línea**. Cuando el repintado cae
en líneas distintas del PDF —los títulos de capítulo y algún pie de figura—
la duplicación sigue apareciendo:

    ORIGEN DE
    ORIGEN DE LA VIDA
    LA VIDA: LA FORMACIÓN DE LAS

No se afinó más a propósito: el cuerpo del texto, que es de donde salen las
citas de los reactivos, sale íntegro, y apretar más el criterio empezaba a
comerse palabras. Un título duplicado se reconoce de un vistazo; una cita a
la que le falta media frase, no.
"""
import sys

import fitz


def texto_limpio(pagina) -> str:
    """Texto de la hoja, sin los spans repintados encima de otros.

    El repintado se reconoce por **decir lo mismo en casi el mismo sitio**, no
    por estar cerca a secas: en una línea normal los spans consecutivos también
    están a pocos puntos, y descartarlos por cercanía se come palabras entelas.
    """
    lineas = []
    for bloque in pagina.get_text("dict")["blocks"]:
        for linea in bloque.get("lines", []):
            emitidos = []
            partes = []
            for span in linea["spans"]:
                texto = span["text"]
                x, y = span["bbox"][0], span["bbox"][1]
                limpio = texto.strip()
                repintado = any(
                    limpio
                    and limpio == vt
                    and abs(x - vx) < 12
                    and abs(y - vy) < 12
                    for vt, vx, vy in emitidos
                )
                if repintado:
                    continue
                emitidos.append((limpio, x, y))
                partes.append(texto)
            if partes:
                lineas.append("".join(partes).rstrip())
    return "\n".join(lineas)


def main() -> None:
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    pdf = sys.argv[1]
    argumentos = [a for a in sys.argv[2:] if not a.startswith("--")]
    desde = int(argumentos[0])
    hasta = int(argumentos[1]) if len(argumentos) > 1 else desde

    desfase = 0
    for a in sys.argv:
        if a.startswith("--desfase"):
            desfase = int(a.split("=")[1]) if "=" in a else 0

    documento = fitz.open(pdf)
    for hoja in range(desde, hasta + 1):
        if not 1 <= hoja <= documento.page_count:
            continue
        cabecera = f"HOJA {hoja}"
        if desfase:
            cabecera += f"  =  PÁGINA IMPRESA {hoja - desfase}"
        print("=" * 72)
        print(cabecera)
        print("=" * 72)
        print(texto_limpio(documento[hoja - 1]))
        print()


if __name__ == "__main__":
    main()
