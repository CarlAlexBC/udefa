# Física · Unidad 3 · Vectores

**Plantel:** Escuela Militar de Medicina (EMM) — UDEFA
**Materia:** `FG-03-2026` · Física General
**Unidad del temario:** Unidad 3. Vectores → **COMPLETO**

## Libro

Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria,
**6ª edición 2018** (1ª reimpresión, México 2020). ISBN 978-607-744-721-4
(sexta edición). Confirmado en la página legal del PDF (hoja 003) y la portada
(hoja 002).

**OJO — el libro es un ESCANEO sin capa de texto.** `extraer.py` devuelve 0
caracteres; no sirve para este libro.

**Desfase = hoja del PDF − página impresa = 12.** Se fijó *leyéndolo*, no
calculándolo: la hoja 054 del PDF muestra impreso "42" en su esquina y contiene
los temas 1 y 2, que el índice ubica en la página 42 (54 − 42 = 12). La Unidad 3
empieza en la página impresa 40 = hoja 52. El desfase se relee al cambiar de
unidad.

## Método

`render.py <pdf> <hoja_desde> <hoja_hasta> 150` para renderizar la hoja a PNG y
**leerla con los ojos** (NO `extraer.py`). Para cifras o detalles finos,
`crop.py` a 500 dpi. La teoría se transcribe verbatim de la imagen; la página de
cada referencia se **lee** de la esquina de la hoja, nunca se calcula.

## Cobertura actual

- **Sub-lote 1 · Características y escala de un vector (p. 42)** — temas 1 y 2.
- **Sub-lote 2 · Clasificación de vectores: coplanares, colineales,
  concurrentes (p. 43)** — temas 3, 4 y 5.
- **Sub-lote 3 · Resultante, equilibrante, propiedades y suma (p. 44–45)** —
  temas 6, 7 (a–f) y 8.

## Pendiente

Falta el resto de la Unidad 3 desde la p. 45: composición y descomposición
rectangular de vectores por métodos gráficos y analíticos (tema 9), vectores
unitarios (tema 10), suma de dos vectores concurrentes (tema 11), suma de más de
dos vectores concurrentes (tema 12), método del triángulo (tema 13), producto de
un vector por un escalar (tema 14), producto escalar (tema 15) y producto
vectorial (tema 16) — sólo las definiciones/conceptos, saltando todos los
ejercicios y problemas resueltos. Y quedan pendientes de la materia las demás
unidades del temario: Unidad 4 (Cinemática, sólo el tema 4), Unidad 5 (Dinámica,
temas 2, 8, 13 y 17), Unidad 6 (Materia y sus Propiedades, temas 1, 2 y 3),
Unidad 8 (Hidrostática, completa) y Unidad 11 (Termología, temas 1, 2, 3, 5, 7 y
12), cada una en su propio archivo.

## Cómo se escriben estos reactivos

Recuerdo literal: la opción correcta y la justificación son **cita textual** del
libro, sin parafrasear. Cuatro opciones del mismo tipo y magnitud; los mejores
distractores salen del mismo párrafo o de la misma sección. La correcta va
**siempre en A** (el importador baraja). Numeración corrida sin reiniciar. Sólo
teoría (definiciones, leyes, clasificaciones, unidades): se saltan todos los
"Ejercicios", "Problemas" y "Resolución de problemas" del libro.

---

## Sub-lote 1 · Características y escala de un vector (p. 42)

### 1

De acuerdo con el libro de Física, ¿cuáles son las características de un vector?

- A. Punto de aplicación u origen; magnitud, intensidad o módulo; dirección; y sentido.
- B. Punto de aplicación u origen; masa; trayectoria; y aceleración.
- C. Origen; velocidad; sentido; y línea de acción.
- D. Módulo; peso; dirección; y desplazamiento.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 42
**Subtema:** física · vectores

<Un vector cualquiera tiene las siguientes características: 1. Punto de aplicación u origen. 2. Magnitud, intensidad o módulo del vector. 3. Dirección. 4. Sentido.>

### 2

De acuerdo con el libro de Física, ¿a qué se refiere la magnitud, intensidad o módulo de un vector?

- A. Indica su valor y se representa por la longitud del vector de acuerdo con una escala convencional.
- B. Señala la línea sobre la cual actúa, puede ser horizontal, vertical u oblicua.
- C. Queda señalada por la punta de la flecha e indica hacia dónde actúa el vector.
- D. Es el punto de aplicación u origen desde donde parte el vector.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 42
**Subtema:** física · vectores

<Magnitud, intensidad o módulo del vector. Indica su valor y se representa por la longitud del vector de acuerdo con una escala convencional.>

### 3

De acuerdo con el libro de Física, ¿qué es la dirección de un vector?

- A. Señala la línea sobre la cual actúa, puede ser horizontal, vertical u oblicua.
- B. Indica su valor y se representa por la longitud del vector.
- C. Queda señalada por la punta de la flecha e indica hacia dónde actúa el vector.
- D. Es la escala convencional con la que se representa el vector.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 42
**Subtema:** física · vectores

<Dirección. Señala la línea sobre la cual actúa, puede ser horizontal, vertical u oblicua.>

### 4

De acuerdo con el libro de Física, ¿qué es el sentido de un vector?

- A. Queda señalado por la punta de la flecha e indica hacia dónde actúa el vector.
- B. Señala la línea sobre la cual actúa, puede ser horizontal, vertical u oblicua.
- C. Indica su valor y se representa por la longitud del vector.
- D. Es el punto de aplicación u origen del vector.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 42
**Subtema:** física · vectores

<Sentido. Queda señalado por la punta de la flecha e indica hacia dónde actúa el vector.>

> Se confunde con la dirección: el sentido lo da la punta de la flecha (+ o −); la dirección es la línea sobre la cual actúa (horizontal, vertical u oblicua).

### 5

De acuerdo con el libro de Física, el sentido de un vector se puede identificar de manera convencional con:

- A. Signos (+) o (−).
- B. Letras mayúsculas o minúsculas.
- C. Números pares o impares.
- D. Los puntos cardinales norte o sur únicamente.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 42
**Subtema:** física · vectores

<El sentido de éste se puede identificar de manera convencional con signos (+) o (−).>

### 6

De acuerdo con la nota del libro de Física, algunos autores sólo manejan tres características de un vector. ¿Cuáles son?

- A. Punto de aplicación, magnitud y dirección.
- B. Magnitud, dirección y sentido.
- C. Punto de aplicación, dirección y sentido.
- D. Origen, módulo y línea de acción.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 42
**Subtema:** física · vectores

<Con respecto a las características de un vector, algunos autores sólo manejan tres: punto de aplicación, magnitud y dirección.>

### 7

De acuerdo con la nota del libro de Física, cuando se manejan sólo tres características, ¿cómo se define la dirección?

- A. Como el ángulo que forma la línea de acción del vector con respecto al eje X positivo.
- B. Como la longitud del vector de acuerdo con una escala convencional.
- C. Como la punta de la flecha que indica hacia dónde actúa el vector.
- D. Como el punto de aplicación u origen del vector.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 42
**Subtema:** física · vectores

<La dirección se define como el ángulo que forma la línea de acción del vector con respecto al eje X positivo, por lo que el sentido es una consecuencia de la dirección.>

### 8

De acuerdo con el libro de Física, para representar un vector, ¿qué escalas es recomendable usar en general?

- A. Escalas de 1:1, 1:10, 1:100 y 1:1 000, siempre que sea posible.
- B. Escalas de 1:2, 1:4, 1:8 y 1:16, siempre que sea posible.
- C. Escalas de 1:5, 1:25, 1:50 y 1:500, siempre que sea posible.
- D. Escalas de 1:3, 1:30, 1:300 y 1:3 000, siempre que sea posible.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 42
**Subtema:** física · vectores

<En general, lo recomendable es usar escalas de 1:1, 1:10, 1:100 y 1:1 000, siempre que sea posible.>

## Sub-lote 2 · Clasificación de vectores: coplanares, colineales, concurrentes (p. 43)

### 9

De acuerdo con el libro de Física, ¿cuándo son coplanares los vectores?

- A. Si se encuentran en un mismo plano, de lo contrario son no coplanares.
- B. Si se encuentran en la misma dirección o línea de acción.
- C. Si su dirección o línea de acción se cruza en algún punto.
- D. Si no tienen un punto de aplicación en particular.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 43
**Subtema:** física · vectores

<Los vectores son coplanares si se encuentran en un mismo plano, de lo contrario son no coplanares.>

### 10

De acuerdo con el libro de Física, ¿qué son los vectores deslizantes?

- A. Son aquellos que se pueden desplazar o deslizar a lo largo de su línea de acción, es decir, en su misma dirección.
- B. Son aquellos que no tienen un punto de aplicación en particular.
- C. Son aquellos que se encuentran en un mismo plano.
- D. Son aquellos cuya línea de acción se cruza en algún punto.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 43
**Subtema:** física · vectores

<Vectores deslizantes. Son aquellos que se pueden desplazar o deslizar a lo largo de su línea de acción, es decir, en su misma dirección.>

### 11

De acuerdo con el libro de Física, ¿qué son los vectores libres?

- A. Son aquellos que no tienen un punto de aplicación en particular.
- B. Son aquellos que se pueden deslizar a lo largo de su línea de acción.
- C. Son aquellos que se encuentran en un mismo plano.
- D. Son aquellos que se encuentran en la misma línea de acción.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 43
**Subtema:** física · vectores

<Vectores libres. Son aquellos que no tienen un punto de aplicación en particular.>

> Se confunden: los deslizantes se mueven sobre su propia línea de acción; los libres no tienen un punto de aplicación en particular.

### 12

De acuerdo con el libro de Física, ¿cuándo se tiene un sistema de vectores colineales?

- A. Cuando dos o más vectores se encuentran en la misma dirección o línea de acción.
- B. Cuando dos o más vectores se encuentran en un mismo plano.
- C. Cuando la dirección de los vectores se cruza en algún punto.
- D. Cuando los vectores no tienen un punto de aplicación en particular.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 43
**Subtema:** física · vectores

<Se tiene un sistema de vectores colineales cuando dos o más vectores se encuentran en la misma dirección o línea de acción.>

### 13

De acuerdo con el libro de Física, ¿cuándo es concurrente un sistema de vectores?

- A. Cuando la dirección o línea de acción de los vectores se cruza en algún punto.
- B. Cuando los vectores se encuentran en la misma línea de acción.
- C. Cuando los vectores se encuentran en un mismo plano.
- D. Cuando los vectores tienen la misma magnitud y dirección.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 43
**Subtema:** física · vectores

<Un sistema de vectores es concurrente cuando la dirección o línea de acción de los vectores se cruza en algún punto; el punto de cruce constituye el punto de aplicación de los vectores.>

### 14

De acuerdo con el libro de Física, ¿por qué a los vectores concurrentes también se les llama angulares?

- A. Porque forman un ángulo entre ellos.
- B. Porque se encuentran en la misma línea de acción.
- C. Porque no tienen un punto de aplicación en particular.
- D. Porque se pueden deslizar a lo largo de su línea de acción.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 43
**Subtema:** física · vectores

<A estos vectores se les llama angulares o concurrentes porque forman un ángulo entre ellos.>

## Sub-lote 3 · Resultante, equilibrante, propiedades y suma (p. 44–45)

### 15

De acuerdo con el libro de Física, ¿qué es la resultante de un sistema de vectores?

- A. Es el vector que produce, él solo, el mismo efecto que los demás vectores del sistema.
- B. Es el vector que es capaz de cancelar el vector resultante de un sistema de vectores.
- C. Es el vector que tiene la misma magnitud y dirección, pero sentido contrario.
- D. Es el vector que no tiene un punto de aplicación en particular.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<La resultante de un sistema de vectores es el vector que produce, él solo, el mismo efecto que los demás vectores del sistema. Por ello, un vector resultante es aquel capaz de sustituir un sistema de vectores.>

### 16

De acuerdo con el libro de Física, ¿qué es la equilibrante de un sistema de vectores?

- A. Es el vector que es capaz de cancelar el vector resultante de un sistema de vectores.
- B. Es el vector que produce, él solo, el mismo efecto que los demás vectores del sistema.
- C. Es el vector capaz de sustituir un sistema de vectores.
- D. Es el vector que se encuentra en la misma línea de acción del sistema.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<La equilibrante de un sistema de vectores es el vector que es capaz de cancelar el vector resultante de un sistema de vectores.>

### 17

De acuerdo con el libro de Física, ¿qué relación tiene la equilibrante con la resultante?

- A. Tiene la misma magnitud y dirección que la resultante, pero con sentido contrario.
- B. Tiene la misma magnitud, dirección y sentido que la resultante.
- C. Tiene distinta magnitud pero la misma dirección y sentido que la resultante.
- D. Tiene el mismo sentido que la resultante, pero distinta dirección.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<Por tanto, tiene la misma magnitud y dirección que la resultante, pero con sentido contrario.>

> La equilibrante comparte magnitud y dirección con la resultante; lo único que cambia es el sentido (contrario).

### 18

De acuerdo con el libro de Física, ¿cuándo son iguales dos vectores?

- A. Cuando su magnitud, dirección y sentido también son iguales.
- B. Cuando su magnitud y dirección son iguales, aunque el sentido sea distinto.
- C. Cuando tienen el mismo punto de aplicación u origen.
- D. Cuando se encuentran en la misma línea de acción.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<Dos vectores son iguales cuando su magnitud, dirección y sentido también son iguales.>

### 19

De acuerdo con la propiedad de adición del libro de Física, ¿bajo qué condición se pueden sumar dos o más vectores?

- A. Sólo si tienen las mismas unidades de medida.
- B. Sólo si tienen el mismo punto de aplicación.
- C. Sólo si se encuentran en un mismo plano.
- D. Sólo si tienen la misma magnitud.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<Sólo se pueden sumar dos o más vectores si tienen las mismas unidades de medida. Por ejemplo, no es posible sumar un vector fuerza con un vector desplazamiento.>

### 20

De acuerdo con el libro de Física, ¿cómo se define el negativo de un vector?

- A. Como aquel vector que sumado al vector, da un resultado igual a cero.
- B. Como aquel vector que tiene la misma magnitud, dirección y sentido que el vector.
- C. Como aquel vector que duplica la magnitud del vector.
- D. Como aquel vector perpendicular al vector.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<El negativo de un vector cualquiera, por ejemplo de un vector a, se define como aquel vector que sumado al vector a, da un resultado igual a cero. Por tanto, a + (−a) = 0.>

### 21

De acuerdo con el libro de Física, en conclusión, ¿qué características tiene el negativo de un vector?

- A. Tiene la misma magnitud y dirección de dicho vector, pero su sentido es contrario.
- B. Tiene la misma magnitud, dirección y sentido de dicho vector.
- C. Tiene distinta magnitud pero el mismo sentido de dicho vector.
- D. Tiene la misma magnitud y sentido, pero distinta dirección.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<El negativo de un vector tiene la misma magnitud y dirección de dicho vector, pero su sentido es contrario.>

### 22

De acuerdo con la ley conmutativa de la adición de vectores, ¿qué sucede cuando se suman dos vectores?

- A. La resultante de la adición es la misma, sin importar el orden en que se sumen los vectores.
- B. La resultante cambia según el orden en que se sumen los vectores.
- C. La resultante sólo es la misma si los vectores tienen igual magnitud.
- D. La resultante depende del punto de aplicación de cada vector.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<Cuando se suman dos vectores, la resultante de la adición es la misma, sin importar el orden en que se sumen los vectores.>

### 23

De acuerdo con la propiedad de transmisibilidad del punto de aplicación, ¿qué ocurre con el efecto externo de un vector deslizante?

- A. No se modifica si es trasladado en su misma dirección, es decir, sobre su propia línea de acción.
- B. Se modifica cada vez que se traslada sobre su línea de acción.
- C. No se modifica si se traslada paralelamente a sí mismo.
- D. Se anula si se traslada sobre su propia línea de acción.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 44
**Subtema:** física · vectores

<El efecto externo de un vector deslizante no se modifica si es trasladado en su misma dirección, es decir, sobre su propia línea de acción.>

### 24

De acuerdo con la propiedad de los vectores libres, ¿qué ocurre con los vectores al trasladarlos?

- A. No se modifican si se trasladan paralelamente a sí mismos.
- B. No se modifican si se trasladan sobre su propia línea de acción.
- C. Se modifican si se trasladan paralelamente a sí mismos.
- D. Sólo no se modifican si conservan su punto de aplicación.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 45
**Subtema:** física · vectores

<Los vectores no se modifican si se trasladan paralelamente a sí mismos.>

> No confundir con la transmisibilidad: ésta traslada el vector sobre su misma línea de acción; la de los vectores libres lo traslada paralelamente a sí mismo.

### 25

De acuerdo con el libro de Física, para sumar magnitudes vectoriales debemos utilizar métodos diferentes a una simple suma aritmética. ¿Cuáles pueden ser estos métodos?

- A. Gráficos o analíticos.
- B. Aritméticos o algebraicos.
- C. Experimentales o teóricos.
- D. Directos o indirectos.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 45
**Subtema:** física · vectores

<Estos métodos pueden ser gráficos o analíticos, pero en ambos casos se consideran, además de la magnitud del vector, su dirección y sentido.>

---

**Reactivos en este archivo:** 25
