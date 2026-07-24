# Física · Unidad 3 · Vectores

**Materia:** `FG-03-2026` · Física General
**Unidad del libro:** Unidad 3. Vectores → **COMPLETA**

> **Los reactivos NO se etiquetan por plantel.** Este archivo pertenece al
> **libro**, no a una escuela. Quién lo pide es cosa del temario: hoy la Unidad 3
> la piden los temarios de la **EMO** y la **EMOS**, y si mañana otra carrera o
> plantel pide el mismo libro y la misma unidad, reutiliza estos mismos reactivos
> sin duplicarlos. La línea `**Referencia:**` (libro, edición, página) y
> `**Subtema:**` de cada reactivo son la llave con la que el temario los manda a
> llamar.

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

La Unidad 3 (Vectores) queda **COMPLETA** en este archivo: temas 1 a 16
(pp. 42–60), sólo teoría, saltando todos los ejercicios y problemas resueltos.

- **Sub-lote 1 · Características y escala de un vector (p. 42)** — temas 1 y 2.
- **Sub-lote 2 · Clasificación de vectores: coplanares, colineales,
  concurrentes (p. 43)** — temas 3, 4 y 5.
- **Sub-lote 3 · Resultante, equilibrante, propiedades y suma (p. 44–45)** —
  temas 6, 7 (a–f) y 8.
- **Sub-lote 4 · Composición, descomposición y vectores unitarios (p. 47, 51)**
  — temas 9 y 10.
- **Sub-lote 5 · Suma de vectores concurrentes: paralelogramo, polígono y
  triángulo (p. 52, 56, 58)** — temas 11, 12 y 13.
- **Sub-lote 6 · Producto por escalar, producto escalar y producto vectorial
  (p. 59, 60)** — temas 14, 15 y 16.

**Pendiente:** ninguno. La Unidad 3 está cerrada, y con la Unidad 11 quedó
cerrada toda la materia Física (`FG-03-2026`) en lo que piden los temarios de la
EMO y la EMOS: Unidades 3 Vectores, 4 Cinemática, 5 Dinámica, 6 Materia y sus
Propiedades, 8 Hidrostática y 11 Termología, siempre sólo definiciones y
conceptos, saltando ejercicios y problemas resueltos.

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

## Sub-lote 4 · Composición, descomposición y vectores unitarios (p. 47, 51)

### 26

De acuerdo con el libro de Física, cuando un sistema de vectores se sustituye por otro equivalente que tiene un número mayor de vectores, ¿cómo se llama ese procedimiento?

- A. Descomposición.
- B. Composición.
- C. Traslación.
- D. Equilibrante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 47
**Subtema:** física · vectores

<Si el sistema equivalente tiene un número mayor de vectores, el procedimiento se llama descomposición.>

### 27

De acuerdo con el libro de Física, cuando el sistema equivalente tiene un número menor de vectores, ¿cómo se llama ese procedimiento?

- A. Composición.
- B. Descomposición.
- C. Adición.
- D. Resultante.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 47
**Subtema:** física · vectores

<Si el sistema equivalente tiene un número menor de vectores, el procedimiento se denomina composición.>

> Se confunden: mayor número de vectores = descomposición; menor número = composición.

### 28

De acuerdo con el libro de Física, al trazar desde el extremo de un vector una línea perpendicular hacia el eje X y otra hacia el eje Y, ¿cómo se llaman los vectores así formados?

- A. Las componentes rectangulares del vector.
- B. Los vectores unitarios del vector.
- C. Las resultantes del vector.
- D. Las equilibrantes del vector.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 47
**Subtema:** física · vectores

<Los vectores ax y ay así formados reciben el nombre de las componentes rectangulares del vector a.>

### 29

De acuerdo con el libro de Física, ¿por qué a las componentes de un vector se les llama rectangulares?

- A. Porque las componentes forman entre sí un ángulo recto (90°).
- B. Porque las componentes tienen la misma magnitud.
- C. Porque las componentes son paralelas entre sí.
- D. Porque las componentes se trazan sobre una cartulina rectangular.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 47
**Subtema:** física · vectores

<Se les llama rectangulares porque las componentes forman entre sí un ángulo recto (90°). También se les denominan componentes perpendiculares.>

### 30

De acuerdo con el libro de Física, ¿qué es un vector unitario?

- A. Aquel que tiene una magnitud igual a uno y no tiene dimensiones.
- B. Aquel que tiene una magnitud mayor que uno y tiene dimensiones.
- C. Aquel que no tiene un punto de aplicación en particular.
- D. Aquel que forma un ángulo recto con otro vector.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 51
**Subtema:** física · vectores

<Un vector unitario es aquel que tiene una magnitud igual a uno y no tiene dimensiones.>

### 31

De acuerdo con el libro de Física, ¿con qué fin se utiliza un vector unitario?

- A. Con el único fin de especificar una dirección determinada, ya que no tiene ningún otro significado físico.
- B. Con el fin de aumentar la magnitud de otro vector.
- C. Con el fin de cancelar la resultante de un sistema de vectores.
- D. Con el fin de trasladar un vector a otro punto del plano.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 51
**Subtema:** física · vectores

<Se utiliza con el único fin de especificar una dirección determinada, ya que no tiene ningún otro significado físico.>

### 32

De acuerdo con el libro de Física, ¿qué símbolos especiales se utilizan para representar los vectores unitarios en las direcciones y sentidos positivos de los ejes X, Y y Z?

- A. Los símbolos î, ĵ y k̂.
- B. Los símbolos ax, ay y az.
- C. Los símbolos α, β y γ.
- D. Los símbolos F1, F2 y F3.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 51
**Subtema:** física · vectores

<Es común utilizar los símbolos especiales î, ĵ y k̂ para representar vectores unitarios en las direcciones y sentidos positivos de los ejes X, Y y Z, respectivamente.>

## Sub-lote 5 · Suma de vectores concurrentes: paralelogramo, polígono y triángulo (p. 52, 56, 58)

### 33

De acuerdo con el libro de Física, ¿qué método gráfico se utiliza cuando se desea sumar dos vectores concurrentes?

- A. El método del paralelogramo.
- B. El método del polígono.
- C. El método del triángulo.
- D. El teorema de Pitágoras.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 52
**Subtema:** física · vectores

<Cuando en forma gráfica se desea sumar dos vectores concurrentes se utiliza el método del paralelogramo.>

### 34

De acuerdo con el libro de Física, para encontrar la resultante de dos vectores por el método analítico, ¿cuándo se usa el teorema de Pitágoras?

- A. Si los dos vectores forman un ángulo de 90°.
- B. Si los dos vectores forman cualquier ángulo distinto de 90°.
- C. Si los dos vectores son colineales.
- D. Si los dos vectores tienen la misma magnitud.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 52
**Subtema:** física · vectores

<Para encontrar la resultante por el método analítico se usará el teorema de Pitágoras si los dos vectores forman un ángulo de 90°.>

### 35

De acuerdo con el libro de Física, si dos vectores forman cualquier ángulo distinto de 90°, ¿qué ley se usa para encontrar la resultante y cuál para calcular su ángulo?

- A. La Ley de los Cosenos para la resultante y la Ley de los Senos para el ángulo.
- B. La Ley de los Senos para la resultante y la Ley de los Cosenos para el ángulo.
- C. El teorema de Pitágoras para la resultante y la Ley de los Senos para el ángulo.
- D. La Ley de los Cosenos para la resultante y también para el ángulo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 52
**Subtema:** física · vectores

<Pero si originan cualquier otro ángulo se usará la Ley de los Cosenos y para calcular el ángulo de la resultante se aplicará la Ley de los Senos.>

### 36

De acuerdo con el libro de Física, ¿qué método gráfico se utiliza para sumar más de dos vectores angulares o concurrentes?

- A. El método del polígono.
- B. El método del paralelogramo.
- C. El método del triángulo.
- D. El teorema de Pitágoras.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 56
**Subtema:** física · vectores

<Para sumar más de dos vectores angulares o concurrentes en forma gráfica, se utiliza el llamado método del polígono.>

### 37

De acuerdo con el libro de Física, ¿en qué consiste el método del polígono?

- A. En trasladar paralelamente a sí mismo cada uno de los vectores sumados, colocándolos uno a continuación del otro, poniendo el origen de un vector en el extremo del otro.
- B. En dibujar la paralela de cada vector para formar un paralelogramo y medir la diagonal.
- C. En descomponer cada vector en sus componentes rectangulares.
- D. En multiplicar la magnitud de un vector por la componente perpendicular del otro.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 56
**Subtema:** física · vectores

<Dicho método consiste en trasladar paralelamente a sí mismo cada uno de los vectores sumados, de tal manera que al tomar uno de los vectores como base los otros se colocarán uno a continuación del otro, poniendo el origen de un vector en el extremo del otro y así sucesivamente hasta colocar el último vector.>

### 38

De acuerdo con el libro de Física, en el método del polígono, ¿cuál es la resultante?

- A. El vector que una el origen de los vectores con el extremo libre del último vector sumado.
- B. El vector que une los extremos de todos los vectores entre sí.
- C. El vector perpendicular al plano formado por los vectores.
- D. El vector opuesto al primer vector sumado.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 56
**Subtema:** física · vectores

<La resultante será el vector que una el origen de los vectores con el extremo libre del último vector sumado y su sentido estará dirigido hacia el extremo del último vector.>

### 39

De acuerdo con el libro de Física, ¿para qué se utiliza el método del triángulo?

- A. Para sumar o restar dos vectores no concurrentes, es decir, que no tienen ningún punto en común.
- B. Para sumar dos vectores concurrentes que se cruzan en un punto.
- C. Para sumar más de dos vectores concurrentes.
- D. Para descomponer un vector en sus componentes rectangulares.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 58
**Subtema:** física · vectores

<El método del triángulo se utiliza para sumar o restar dos vectores no concurrentes, es decir, que no tienen ningún punto en común.>

### 40

De acuerdo con el libro de Física, ¿en qué principio se basa el método del triángulo?

- A. En el principio de los vectores libres.
- B. En el principio de los vectores deslizantes.
- C. En el teorema de Pitágoras.
- D. En la Ley de los Cosenos.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 58
**Subtema:** física · vectores

<Este método se basa en el principio de los vectores libres, ya mencionado en la sección 3 de esta unidad.>

## Sub-lote 6 · Producto por escalar, producto escalar y producto vectorial (p. 59, 60)

### 41

De acuerdo con el libro de Física, ¿cómo se define el producto de un escalar k y de un vector?

- A. Como un nuevo vector cuya magnitud es k veces mayor que la magnitud del vector.
- B. Como un nuevo escalar cuya magnitud es k veces la del vector.
- C. Como un vector perpendicular al vector original.
- D. Como la componente rectangular del vector original.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 59
**Subtema:** física · vectores

<El producto de un escalar k y de un vector r se escribe: kr y se define como un nuevo vector cuya magnitud es k veces mayor que la magnitud de r.>

### 42

De acuerdo con el libro de Física, en el producto de un vector por un escalar, ¿qué ocurre con el sentido del nuevo vector según el signo de k?

- A. Tiene el mismo sentido que el vector si k es positivo; si k es negativo, cambiará su sentido.
- B. Tiene siempre el mismo sentido que el vector, sin importar el signo de k.
- C. Tiene siempre sentido contrario al vector, sin importar el signo de k.
- D. Pierde su sentido y se convierte en una magnitud escalar.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 59
**Subtema:** física · vectores

<El nuevo vector tiene el mismo sentido que r si k es positivo; sin embargo, si k es negativo, el vector resultante cambiará su sentido y magnitud, o sólo su sentido.>

### 43

De acuerdo con el libro de Física, ¿cómo se define la resta de dos vectores?

- A. Como la suma al vector minuendo del vector opuesto del sustraendo.
- B. Como la suma de las magnitudes de ambos vectores.
- C. Como el producto de un vector por la componente perpendicular del otro.
- D. Como la diferencia entre sus componentes rectangulares únicamente.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 59
**Subtema:** física · vectores

<Podemos definir la resta de dos vectores como la suma al vector minuendo del vector opuesto del sustraendo: a − b = a + (−b).>

### 44

De acuerdo con el libro de Física, el producto escalar de dos vectores, llamado también producto punto, ¿qué da como resultado?

- A. Una magnitud escalar, pues carece de dirección y sentido.
- B. Otro vector perpendicular al plano formado por los dos vectores.
- C. Un vector con la misma dirección que el primero.
- D. Un vector unitario en la dirección del segundo.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 60
**Subtema:** física · vectores

<El producto escalar de dos vectores, llamado también producto punto, da como resultado una magnitud escalar, pues carece de dirección y sentido.>

### 45

De acuerdo con el libro de Física, ¿cuáles son algunas magnitudes físicas que resultan del producto escalar de dos vectores?

- A. El trabajo mecánico, la potencia eléctrica y la densidad de energía electromagnética.
- B. El momento de una fuerza, la fuerza sobre una carga en movimiento y la cantidad de movimiento angular.
- C. La velocidad, la aceleración y el desplazamiento.
- D. La masa, el volumen y la densidad.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 60
**Subtema:** física · vectores

<Algunas magnitudes físicas que resultan del producto escalar de dos vectores son: el trabajo mecánico, la potencia eléctrica y la densidad de energía electromagnética.>

### 46

De acuerdo con el libro de Física, el producto vectorial de dos vectores, llamado también producto cruz, ¿qué da como resultado?

- A. Otro vector, el cual siempre es perpendicular al plano formado por los dos vectores que se multiplican.
- B. Una magnitud escalar que carece de dirección y sentido.
- C. Un vector paralelo al plano formado por los dos vectores.
- D. Un vector unitario de magnitud igual a uno.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 60
**Subtema:** física · vectores

<El producto vectorial de dos vectores, llamado también producto cruz, da como resultado otro vector, el cual siempre es perpendicular al plano formado por los dos vectores que se multiplican.>

> Se confunden: el producto escalar (punto) da una magnitud escalar; el producto vectorial (cruz) da otro vector perpendicular al plano.

### 47

De acuerdo con el libro de Física, en el producto vectorial, ¿por qué debe tomarse en cuenta el orden de los factores?

- A. Porque no es lo mismo a × b que b × a.
- B. Porque no es lo mismo a · b que b · a.
- C. Porque el resultado siempre es una magnitud escalar.
- D. Porque las magnitudes deben tener las mismas unidades.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 60
**Subtema:** física · vectores

<En el producto vectorial el orden de los factores debe tomarse en cuenta, pues no es lo mismo a × b que b × a.>

### 48

De acuerdo con el libro de Física, ¿cuáles son algunas magnitudes físicas que resultan del producto vectorial?

- A. El momento de una fuerza, la fuerza que recibe una carga en movimiento al penetrar a un campo magnético y la cantidad de movimiento angular.
- B. El trabajo mecánico, la potencia eléctrica y la densidad de energía electromagnética.
- C. La distancia, la rapidez y el tiempo.
- D. La temperatura, el calor y la presión.

**Respuesta:** A
**Referencia:** Pérez Montiel, Héctor (2018) *Física General*, Grupo Editorial Patria, Pág. 60
**Subtema:** física · vectores

<Algunas magnitudes físicas que resultan del producto vectorial son: el momento de una fuerza, la fuerza que recibe una carga en movimiento al penetrar a un campo magnético y la cantidad de movimiento angular.>

---

**Reactivos en este archivo:** 48
