# Álgebra y Trigonometría (Zill/Dewar, EMMA) — orden de trabajo

> **RESUELTO el 29 ago 2026 — no hacía falta escribir nada.** Antes de arrancar
> este orden de trabajo, se encontró que el banco **ya existía completo**: es
> el mismo libro (misma edición, mismo ISBN) que `docs/examen-cultural/zill-atg/`
> ya tenía escrito y cerrado para la EMMA/EMI del cultural (códigos
> `ÁLGE-01-2026` y `TGA-02-2026` — los mismos que piden estos 4 cursos de
> tropa). Se enlazó directo vía `seed-temarios-tropa.ts` (libro `zill-atg`,
> capítulos 2-3-4 para Álgebra y 8-9-10-11 para Trigonometría), verificado en
> producción. **Este documento queda como registro histórico del
> reconocimiento — no como orden de trabajo pendiente.**
>
> Reconocimiento hecho el 28 ago 2026. Sirve a **4 cursos, todos de la Escuela
> Militar de Mantenimiento y Abastecimiento**: `EMMA_F_A_I_M_A_2026`,
> `EMMA_F_O_F_A_A_A_2026`, `EMMA_F_O_F_A_A_M_A_2026`, `EMMA_F_O_F_A_E_E_A_2026`.
> Los 4 piden **exactamente lo mismo**: comprobado hoja por hoja en los 4
> temarios, sin una sola variante.
>
> Este libro no formaba parte del reconocimiento original de tropa (ver
> `docs/examen-tropa/enlace-fisica-algebra.md`): quedó marcado "fuera de
> alcance" porque el PDF no existía en la plataforma. Carlo confirmó el 28 ago
> 2026 que sí lo tiene, en
> `examenes_tropa/libros/academicos/algebra-trigonometria-zill.pdf`.

## El libro — verificado contra la página legal

*Álgebra, Trigonometría y Geometría Analítica*, Dennis G. Zill / Jacqueline M.
Dewar, McGraw-Hill/Interamericana Editores, **Tercera edición**, **DERECHOS
RESERVADOS © 2012**, ISBN 978-607-15-0714-3. Coincide letra por letra con lo
que citan los 4 temarios (*"Dennis G. Zill, Jacqueline M. Dewar, Edit.
McGraw-Hill, 3/a. Edición 2012"*).

`examenes_tropa/libros/academicos/algebra-trigonometria-zill.pdf` — 781 hojas,
con capa de texto. Se lee directo, sin renderizar.

**Hoja del PDF = página impresa + 17.** Constante, verificado en el arranque
de los 7 capítulos que pide el temario (no en uno solo).

## Alcance exacto — DOS materias del mismo libro

A diferencia de los demás libros de tropa, éste no cuelga de una sola materia:
el temario lo reparte en dos códigos distintos, cada uno con su propio
`numPreguntas` en el examen.

### Materia `ÁLGE-01-2026` — Álgebra

| Capítulo | Páginas impresas | Hojas del PDF | Hojas |
|---|---|---|---|
| **2 · Conceptos Fundamentales de Álgebra** | 48–111 | 65–128 | 64 |
| **3 · Ecuaciones y Desigualdades** | 112–167 | 129–184 | 56 |
| **4 · Sistema de Coordenadas Rectangulares y Gráficas** | 168–199 | 185–216 | 32 |

Los tres capítulos **completos**. El temario detalla el Cap. 4 por subtema
(4.1 El Sistema de Coordenadas Rectangulares, 4.2 Círculos y Gráficas, 4.3
Ecuaciones de Rectas, 4.4 Variación) — es el capítulo entero según el índice
del libro, no un recorte.

### Materia `TGA-02-2026` — Trigonometría y Geometría Analítica

| Capítulo | Páginas impresas | Hojas del PDF | Hojas |
|---|---|---|---|
| **8 · Trigonometría del Triángulo Rectángulo** | 356–389 | 373–406 | 34 |
| **9 · Trigonometría del Círculo Unitario** | 390–443 | 407–460 | 54 |
| **10 · Aplicaciones de Trigonometría** | 444–481 | 461–498 | 38 |
| **11 · Temas de Geometría Analítica** | 482–521 | 499–538 | 40 |

Los cuatro capítulos **completos**.

## El tamaño real del trabajo — el más grande de tropa, con diferencia

**~318 hojas en total** (152 de Álgebra + 166 de Trigonometría/Geometría).
Para comparar: Derechos Humanos (55 hojas, 23 cursos) y Legislación Militar
(~45 hojas, 19 cursos) juntas suman ~100 hojas y sirven a 42 cursos. Esto es
**más de 3 veces ese tamaño para sólo 4 cursos** — la relación
hojas-escritas/cursos-servidos es la peor de todo el banco de tropa hasta
ahora. No es un veto, es una cifra para priorizar con cabeza: si el tiempo
apremia, hay materias que sirven a más cursos por la misma hora de trabajo.

Los capítulos 1, 5, 6 y 7 (Lógica y conjuntos; Funciones y gráficas; Funciones
polinomiales y racionales; Funciones exponenciales y logarítmicas) **no
entran**: ningún curso los pide.

## Cómo se guarda — el reactivo cuelga del LIBRO

Mismo criterio que el resto de tropa: por libro y capítulo, no por escuela.
Carpeta nueva, slug `algebra-trigonometria-zill` (así queda el `Libro.slug`):

```
docs/examen-tropa/algebra-trigonometria-zill/cap-02-conceptos-fundamentales.md
docs/examen-tropa/algebra-trigonometria-zill/cap-03-ecuaciones-desigualdades.md
docs/examen-tropa/algebra-trigonometria-zill/cap-04-coordenadas-rectangulares.md
docs/examen-tropa/algebra-trigonometria-zill/cap-08-triangulo-rectangulo.md
docs/examen-tropa/algebra-trigonometria-zill/cap-09-circulo-unitario.md
docs/examen-tropa/algebra-trigonometria-zill/cap-10-aplicaciones-trigonometria.md
docs/examen-tropa/algebra-trigonometria-zill/cap-11-geometria-analitica.md
```

`importar-tropa.ts` necesita este slug agregado a su tabla `LIBROS` cuando se
empiece a importar (no antes: el importador es aditivo, correrlo antes de
tener contenido no rompe nada, pero no hace falta tocarlo hasta que haya algo
que importar).

`seed-temarios-tropa.ts` necesita DOS `enlazarMateria` nuevas para los 4
cursos EMMA — 'Álgebra' con capítulos [1,2,3] de este libro (numeración de
`Capitulo.numero`, no la del libro: cap. 2→1, 3→2, 4→3) y 'Trigonometría' con
[4,5,6,7] (cap. 8→4, 9→5, 10→6, 11→7) — mismo criterio de numeración por
orden de aparición que ya usa el resto de tropa.

## Reglas que se heredan enteras del banco cultural (y de Baldor, ya en tropa)

Este libro es de matemáticas, como Álgebra-Baldor y Física-Pérez Montiel, que
ya funcionan en la plataforma — mismo tipo de contenido, mismo método:

- **Recuerdo literal**, pero adaptado a matemáticas: la definición, la fórmula
  o el procedimiento **citado tal como lo da el libro**. Un problema resuelto
  puede servir de base para un reactivo (a diferencia del cultural puro, en
  matemáticas SÍ se pregunta por el procedimiento de un ejercicio trabajado),
  pero la respuesta correcta tiene que salir del texto, no inventarse.
- **Cuatro opciones del mismo tipo y magnitud.** En matemáticas eso casi
  siempre significa: los distractores son errores de cálculo plausibles
  (signo cambiado, término faltante, paso saltado), no números al azar.
- **`docs/examen-cultural/QUE-NO-ESCRIBIR.md` aplica igual.**
- **El dato olvidable, no el obvio.** Calidad sobre cantidad.
- Cada archivo cierra con una línea **`**Pendiente:**`** exacta.

## Antes de escribir el primer reactivo

**Verificar contra Baldor.** Baldor-Álgebra ya está en la plataforma y varios
cursos (EMCS, EMTEFA 2os, etc.) lo usan para temas parecidos (ecuaciones,
sistemas de coordenadas). Al escribir Zill, revisar que no se dupliquen
reactivos temáticamente idénticos entre los dos libros — no es el mismo
riesgo que Ley del Uso de la Fuerza/Cap. IX del Manual DH (ahí eran el mismo
libro citándose a sí mismo), pero conviene no preguntar "qué es una ecuación
cuadrática" dos veces con libros distintos sin que aporte nada nuevo.

**Pendiente:** ninguno. Ver la nota del encabezado (29 ago 2026): el banco ya
existía en `docs/examen-cultural/zill-atg/` y sólo hizo falta enlazarlo, no
escribirlo. Este archivo queda como registro del reconocimiento del 28 ago,
no como trabajo por hacer.
