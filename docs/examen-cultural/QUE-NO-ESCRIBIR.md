# Qué NO escribir en el banco cultural

Escrito el 27 de agosto de 2026, después de que aspirantes reales reportaran dos
cosas: reactivos que **no se podían contestar** y temas que **no recordaban
haber visto en el examen**.

Este documento existe para que no vuelva a pasar. Los ejemplos son reales, del
propio banco, y están todos corregidos o retirados.

---

## La regla de fondo

> **Calidad antes que cantidad.** Un reactivo de más que no cae en el examen no
> suma: le quita tiempo de estudio al aspirante y le enseña algo que no le van a
> preguntar.

El objetivo del simulador es **parecerse al examen real**, no ser el más grande.
Si un tema no está en el temario de la convocatoria, no importa qué tan bien
esté escrito el reactivo: sobra.

---

## 1 · No le pidas ver algo que no puede ver

**Ningún reactivo cultural tiene imagen adjunta.** Un enunciado que manda a mirar
una figura, un esquema o una tabla del libro le está pidiendo al aspirante algo
imposible, y lo deja sin saber qué contestar.

```
MAL:  ...de Biología, según la figura 32-7, ¿qué efecto tiene cada división
      sobre la vejiga?

BIEN: ...de Biología, ¿qué efecto tiene cada división sobre la vejiga?
```

**Cómo decidir:** si la respuesta está en palabras, borra la referencia y
conserva el reactivo. Si la respuesta **vive en el dibujo** —"¿qué representa la
letra A?", "¿qué muestra la figura 14-1?"— el reactivo no sirve: retíralo.

*Corregidos así el 27 ago 2026: 143.*

---

## 2 · No le digas en qué capítulo venía

Al aspirante no le sirve saber de qué parte del libro salió la pregunta. Es
ruido que alarga el enunciado y no aporta nada.

```
MAL:  ...de Biología, en el capítulo 11 sobre la reproducción sexual,
      ¿cuántos cromosomas tiene un ser humano en cada célula somática?

BIEN: ...de Biología, ¿cuántos cromosomas tiene un ser humano en cada célula
      somática?
```

*Corregidos así el 27 ago 2026: 98.*

---

## 3 · No preguntes por el adorno del libro

Los libros de texto traen material que **no es el tema**: recuadros biográficos
al margen, notas históricas al pie, citas de apertura, bibliografías. Nada de
eso cae en un examen de admisión.

```
MAL:  ...de Álgebra, según el recuadro, ¿dónde nació Hypatia?
MAL:  ...de Álgebra, según la nota histórica, ¿a quién se debe el papiro de Rhind?
```

**Cuidado con el matiz.** No todo nombre propio es adorno:

```
CONSERVAR: "¿Qué generalizó Rudolf Virchow en 1858?"
           La respuesta es que toda célula proviene de otra célula: eso es
           teoría celular, columna del tema. El nombre y el año son decoración,
           pero el concepto sí cae.

RETIRAR:   "¿Quién propuso en 1961 un modelo para estimar la probabilidad de
           existencia de civilizaciones extraterrestres?"
           Es la ecuación de Drake. Astrobiología, no medicina.
```

**La prueba:** quita el nombre propio y la fecha. Si lo que queda es un concepto
del temario, el reactivo sirve. Si no queda nada, era adorno.

---

## 4 · No metas temas fuera del temario

Ésta es la más importante, y la que se rompe sola cuando cambia la convocatoria.

**El temario manda.** La fuente autoritativa es `temarios.json`, generado desde
los PDF de la convocatoria. Un capítulo que no está ahí no debe tener reactivos
en el examen de ese plantel.

**Ojo, porque no es intuitivo:** un mismo capítulo puede ser basura para un
plantel y obligatorio para otro. Ejemplo real de este banco:

| Capítulo | Reactivos | EMM (Medicina) | Quién sí lo pide |
|---|---|---|---|
| 14 · Epigenética | 471 | **no** | EMOS |
| 15 · Bases moleculares | 119 | **no** | EMOS |
| 33 · Percepción sensorial | 186 | **no** | EMO (Odontología) |

Por eso **no se borran del banco**: se filtran al armar el examen. El reparto por
plantel vive en las tablas de Temario (panel de *Reparto cultural*) y, de
respaldo, en `puente-oferta-demanda.json`.

**Y otro que tampoco es intuitivo:** el temario de la EMM incluye la
*"Sección VI. Biología de los Animales"*. Parece raro en una escuela de
medicina, pero son los capítulos de tejidos, sistema nervioso, respiración,
circulación y digestión. **El filtro correcto es el capítulo, no "animal contra
persona"** — quien corte por ese criterio se lleva medio sistema nervioso.

---

## Qué se puede editar y qué no

| Parte del reactivo | ¿Se puede corregir? |
|---|---|
| Enunciado | **Sí.** Es redacción propia |
| Opción correcta | **No.** Es cita textual del libro |
| Justificación | **No.** Es cita textual del libro |
| Opciones incorrectas | Con cuidado: salen del mismo párrafo |

---

## Cómo retirar sin borrar

Un reactivo retirado **se queda en su archivo, con su número**. Se le agrega una
línea después de `**Subtema:**`:

```
**Retirado:** TEMA · ecuación de Drake: astrobiología, fuera del temario
```

Los dos importadores la reconocen: no lo mandan a la base, no lo cuentan en los
totales, pero sí lo cuentan para la numeración. Hay que bajar en uno el pie
`**Reactivos en este archivo:**`.

**No se borra nunca**, y es a propósito: los retirados son el registro de qué
tipo de reactivo no debe volver a escribirse. Al actualizar el banco por cambio
de convocatoria, se leen primero.

---

## Antes de dar por cerrada una tanda

```
cd docs/examen-cultural
python auditoria/auditar.py auditoria
```

Rastrea los 10,000+ reactivos y señala los que caen en las familias de arriba.
No decide por ti —tiene falsos positivos, sobre todo con nombres propios— pero
te dice dónde mirar.

Y si la tanda cambió enunciados que ya estaban en producción, antes de
reimportar hay que correr `_reenlazar-cultural.js`. Si no, el importador cree
que son reactivos nuevos y deja duplicados. Está explicado en su encabezado.

---

## Cuando cambie la convocatoria

1. Regenerar `temarios.json` desde los PDF nuevos.
2. Comparar capítulo por capítulo contra lo que hay en el banco.
3. Lo que salga del temario **no se borra**: se deja de pedir en el reparto.
4. Lo que entre al temario y no tenga reactivos, es la lista de trabajo nuevo.
5. Releer este documento antes de escribir el primer reactivo.
