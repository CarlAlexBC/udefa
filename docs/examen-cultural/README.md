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
| Álgebra de Baldor | 4ª, Patria 2019 | sí — coincide con el temario |
| Taller de Redacción (Zarzar) | 3ª ebook, Patria 2017 | sí — ver nota abajo |

**Verifica siempre la edición contra la página legal antes de usar un libro.**
Ya pasó una vez que el de Historia era la 2ª edición de 2008 en vez de la 3ª, y
el capítulo 6 trata de "acontecimientos de nuestros días" — un libro de 2008 no
puede contener lo que dice uno de 2016.

**Discrepancia del Taller de Redacción:** el temario cita "4ª edición 2017" y la
página legal del ejemplar dice "Tercera edición ebook: 2017". Coinciden autor,
título, editorial y año; solo difiere el número de edición, probablemente por la
numeración impresa contra la del ebook. No es el caso del Álgebra, donde el
ejemplar viejo era de otra editorial y con 16 años de diferencia — ése sí se
descartó.

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

Los dos scripts viven **en esta carpeta**, ya no en el scratchpad de la sesión.
Ambos necesitan `pymupdf`.

Leer la página como imagen es mejor que OCR: se ven bien la notación matemática
del Baldor y los mapas de Geografía, que el OCR destrozaría.

### Cuando dudes de una palabra, recórtala

`render.py` a 140 dpi sirve para leer y escribir reactivos, pero **no alcanza
para decidir si una rareza es errata del libro o suciedad del escaneo**. Para eso:

```
python crop.py "<ruta del pdf>" <hoja> <x0> <y0> <x1> <y1> [dpi]
```

Recorta una región de la hoja —las coordenadas van en fracción de página, de 0 a
1, para no adivinar puntos— y la renderiza a 500–600 dpi. A esa resolución la
duda se resuelve sola.

Así se confirmó que *Mississipi*, *Calleja* y *Duran Bayén* eran errores impresos
y no lecturas equivocadas. **Úsalo antes de acusar al libro de una errata**, y
úsalo también para verificar cifras largas antes de fijarlas en un reactivo.

## Verificar la paginación contra el Anexo H

Cuando la convocatoria cite el libro que estás trabajando, **usa sus ejemplos
para comprobar que tu ejemplar es el mismo**. Es la evidencia más fuerte que hay.

Funcionó con el Taller de Redacción: el Ejemplo 4 del Anexo H ubica la función
informativa en la pág. 15 y el Ejemplo 5 el conector discursivo en la pág. 80, y
ambas coinciden con el ejemplar. Y funcionó al revés con Geografía, donde el
Ejemplo 3 cita Revillagigedo en la pág. 91 y en la 15ª edición ese dato está en
la 98 y la 102 — ahí la que está corrida es la convocatoria. Esa diferencia queda
explicada dentro del reactivo 15 de `HCM/geografia-05-islas.md`, por si un
aspirante compara.

## Trampa de la numeración

**La hoja del PDF no coincide con la página impresa, y el desfase se corre.**
En Geografía va en 0 al inicio, sube a +9 en el cuerpo y baja a +7 después de la
hoja 78, porque al escaneo le faltan dos páginas.

**Las páginas de las referencias se leen de la hoja, nunca se calculan.**

Otros huecos conocidos de Geografía: faltan las páginas impresas 87 y 88 (caen
en Regiones geomorfológicas, fuera del temario), y el escaneo se corta cerca de
la impresa 260 de 486 (el temario termina en la 104, así que alcanza).

## Avance

| Materia | Reactivos | Pendiente |
|---|---|---|
| Geografía cap. 1 | 13 | — |
| Geografía cap. 3 | 43 | — |
| Geografía cap. 4 | 27 | — |
| Geografía cap. 5 | 42 | — |
| Historia cap. 6 | 414 | pp. 265–267, 268–279 |
| Español bloque 1 | 32 | — |
| Español bloque 3 | 77 | — |
| Álgebra Preliminares | 20 | pp. 9–39 |
| Álgebra caps. I–VI | 0 | pp. 40–111 |

**Total: 668 reactivos.**

- **Geografía cerrada**, todo el alcance del temario.
- **Español cerrado**, 109 reactivos entre los dos bloques.
- **Historia**: Guerra Fría y organizaciones internacionales completas. El
  apartado de acontecimientos de nuestros días va hasta la pág. 264: ya cerraron
  el Golfo Pérsico, el fin del bloque socialista europeo, América Central, las
  Antillas y la mayor parte de Sudamérica. Faltan 3 páginas de ese apartado y
  todo "La llegada del siglo XXI".
- **Álgebra**: apenas arrancada, es la que más falta.

### Alcance de Álgebra, decisión abierta

El temario dice "Capítulos I–VI", que estrictamente empiezan en la página 40.
Se está incluyendo además la sección **Preliminares** (pp. 5–39), donde viven
las definiciones de término, coeficiente, grado, monomio y polinomio — el
contenido de recuerdo literal más probable. Queda documentado por si se decide
separarlo.

### Reparto entre chats

Este bloque lo han trabajado dos sesiones en paralelo. Reparto vigente, decidido
por Carlo:

| Materia | Quién |
|---|---|
| Geografía | hecha — cerrada |
| Español | hecha — cerrada |
| **Historia** | **chat A** (el que hizo Geografía) |
| **Álgebra** | **chat A** |

Español y Álgebra los arrancó el chat B; Álgebra pasó al chat A a partir del
19 de julio de 2026, con los 20 reactivos de Preliminares ya escritos como base.

**Antes de empezar una materia, revisa qué archivos existen ya** — hubo un
momento en que ambos chats creían tener asignada Historia y solo la casualidad
evitó el trabajo duplicado.

Y **commitea al terminar cada tanda.** Los 129 reactivos de Español y Álgebra
estuvieron sin respaldo en git durante toda su elaboración.

## Lo que aún no existe

No hay importador ni esquema en la base para este bloque. Los `.md` son hoy el
único formato. Cuando toque importarlos, conviene mirar cómo se hizo el banco de
personalidad (`apps/backend/scripts/importar-remaster.ts`) y no repetir sus
errores: ahí la documentación escrita a mano llegó a mentir, y se resolvió
generando `ESTADO.md` desde el propio importador.
