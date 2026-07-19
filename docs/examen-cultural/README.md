# Examen cultural — cómo se trabaja este bloque

Punto de entrada para retomar en frío. Los reactivos viven en `HCM/`, un archivo
por capítulo, y **cada archivo dice en su encabezado qué páginas le faltan**.

## Qué es el examen cultural

Lo define el **Anexo "H"** de la convocatoria 2026, en las páginas 78–80 del PDF
`LICENCIATURAS_Y_TECNICO_SUP._UNIV._2025 (1).pdf`.

> Ese PDF **no está en el repo**: está en `.gitignore` porque es un documento
> público de la SEDENA que se vuelve a descargar. Si no lo tienes, bájalo de la
> convocatoria oficial y déjalo en la raíz del proyecto.

Evalúa **recuerdo literal**, no comprensión: *"evocación de información concreta
o de conocimientos específicos de forma exacta y aislada"*. La respuesta
correcta es una cita casi textual del libro.

Formato de cada reactivo:

1. El enunciado **nombra el libro**: *"De acuerdo con el libro de X…"*.
2. Cuatro opciones, A a D.
3. Referencia bibliográfica con **página impresa**.
4. Justificación tomada del libro, casi textual.
5. Los distractores van del mismo tipo y magnitud que la respuesta. Si es cifra,
   las cuatro son cifras; si es un accidente geográfico, las cuatro lo son. Un
   distractor absurdo regala el reactivo. Lo que mejor funciona es tomar los
   distractores del **mismo párrafo o del mismo cuadro**.

## Temario del HCM

Las dos licenciaturas del Heroico Colegio Militar —Administración Militar y
Seguridad Pública— comparten **el mismo temario**, así que es un solo banco.
Fuente: `examen_cultural/temarios_de_escuelas/HCM/`.

| Código | Materia | Libro | Alcance |
|---|---|---|---|
| `ESP-01-2026` | Español | Zarzar Charur, *Taller de Lectura y Redacción 1*, Patria, 4ª ed. 2017 | Bloque 1 (1.1, 1.2) y Bloque 3 (3.1, 3.2, 3.3) |
| `ALG-02-2026` | Álgebra | Baldor, Patria, 4ª ed. 2019 | Capítulos I–VI completos |
| `HIST-03-2026` | Historia | Rodríguez Arvizu, *Historia Universal*, Limusa, 3ª ed. 2017 | Solo capítulo 6, El Mundo Contemporáneo |
| `GEO-04-2026` | Geografía | Tamayo, *Geografía Moderna de México*, Trillas, 15ª ed. 2021 | Cap. 1, Cap. 3 (solo unidades orogénicas), Cap. 4 y Cap. 5 completos |

**No confundir con el Anexo H:** sus 10 ejemplos citan siete libros (Física,
Química, Biología, Cálculo…) porque son ejemplos generales de **todos los
planteles**. El HCM solo examina las cuatro materias de arriba.

## Estado de los libros

En `examen_cultural/libros_examen_cultural/HCM/`. Son **escaneos sin capa de
texto**: no se pueden leer por programa.

| Libro | Edición verificada | ¿Sirve? |
|---|---|---|
| Geografía Moderna de México | 15ª, Trillas 2021 (reimp. 2023) | sí — coincide con el temario |
| Historia Universal | 3ª, Limusa 2016 | sí — misma edición, reimpresión distinta al temario |
| Álgebra de Baldor | sin verificar | pendiente |
| Taller de Redacción | sin verificar | pendiente |

**Verifica siempre la edición contra la página legal antes de usar un libro.**
Ya pasó una vez que el de Historia era la 2ª edición de 2008 en vez de la 3ª, y
el capítulo 6 trata de "acontecimientos de nuestros días" — un libro de 2008 no
puede contener lo que dice uno de 2016.

**Y verifica que el PDF traiga contenido.** Dos veces llegaron archivos con las
páginas vacías: 291 hojas con un PNG de 473 bytes repetido, que es el icono de
"imagen rota". La pista es el peso: una página escaneada real pesa cientos de
kilobytes; una vacía, doce.

## Cómo leer los libros

No hay OCR instalado y no hace falta. El flujo es convertir la página a imagen y
leerla:

```
python render.py "<ruta del pdf>" <desde> <hasta> [dpi]
```

El script vive en el scratchpad de la sesión; si no está, son 20 líneas con
`pymupdf` (`fitz.open(ruta)`, `doc[n].get_pixmap(dpi=120).save(destino)`).

Leer la página como imagen es mejor que OCR: se ven bien la notación matemática
del Baldor y los mapas de Geografía, que el OCR destrozaría.

## Trampa de la numeración

**La hoja del PDF no coincide con la página impresa, y el desfase se corre.**
En Geografía va en 0 al inicio, sube a +9 en el cuerpo y baja a +7 después de la
hoja 78, porque al escaneo le faltan dos páginas.

**Las páginas de las referencias se leen de la hoja, nunca se calculan.**

Otros huecos conocidos de Geografía: faltan las páginas impresas 87 y 88 (caen
en Regiones geomorfológicas, fuera del temario), y el escaneo se corta cerca de
la impresa 260 de 486 (el temario termina en la 104, así que alcanza).

## Discrepancia con la convocatoria

El ejemplo 3 del Anexo H cita Revillagigedo en la *Pág. 91* de Tamayo 2021. En
esa edición, la 91 es el arranque del capítulo de Litorales; el dato está en el
**Cuadro 5.1 de la página 98**.

Nuestras referencias se leyeron del libro, una por una. Si un aspirante compara
y ve la diferencia, está explicada dentro del reactivo 15 de
`HCM/geografia-05-islas.md`.

## Avance

| Materia | Reactivos | Pendiente |
|---|---|---|
| Geografía cap. 1 | 13 | — |
| Geografía cap. 3 | 43 | — |
| Geografía cap. 4 | 27 | — |
| Geografía cap. 5 | 42 | — |
| Historia cap. 6 | 69 | pp. 221–226, 238–267, 268–279 |
| Álgebra | 0 | caps. I–VI |
| Español | 0 | bloques 1 y 3 |

**Total: 194 reactivos. Geografía queda cerrada**, cubriendo todo el alcance del
temario. Las siguientes materias arrancan de cero, y de Álgebra y Español falta
verificar la edición contra la página legal antes de usarlas.

## Lo que aún no existe

No hay importador ni esquema en la base para este bloque. Los `.md` son hoy el
único formato. Cuando toque importarlos, conviene mirar cómo se hizo el banco de
personalidad (`apps/backend/scripts/importar-remaster.ts`) y no repetir sus
errores: ahí la documentación escrita a mano llegó a mentir, y se resolvió
generando `ESTADO.md` desde el propio importador.
