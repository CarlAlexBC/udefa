# Handoff · Examen cultural

**Léete solo este archivo y el README de esta carpeta.** No hace falta explorar
el resto del repo: el examen cultural es un bloque cerrado que vive
completo en `docs/examen-cultural/`. La plataforma (NestJS + Next) es otra cosa
y no la vas a tocar para esto.

---

## Con quién trabajas

Carlo Alexander, autor de "El Monote te Guía" (TikTok @elmonoteteguia),
ex-cadete del Heroico Colegio Militar. Vende preparación para el examen de
admisión a planteles militares mexicanos.

Cómo trabajar con él, en corto:

1. **Primero el trabajo, después la explicación.** No teoría por delante.
2. **Nunca ejecutes commits, migraciones o push sin explicar y pedir su OK.**
   En este bloque él ya dio OK permanente a commitear+pushear cada tanda de
   reactivos — pero avísale qué entró.
3. **Verifica antes de afirmar.** Ya pasó varias veces que un diagnóstico dado
   por seguro estaba mal. Comprueba el dato real antes de concluir.
4. **Vocabulario llano.** Si él no entiende una palabra, un aspirante de 18 años
   tampoco.

---

## Dónde está todo

| Qué | Ruta |
|---|---|
| Reactivos escritos | `docs/examen-cultural/HCM/*.md` |
| Herramientas | `docs/examen-cultural/render.py` y `crop.py` |
| Libros escaneados | `examen_cultural/libros_examen_cultural/HCM/` |
| Temarios oficiales | `examen_cultural/temarios_de_escuelas/HCM/` |

Los libros y la convocatoria **están en `.gitignore`** — son ~300 MB de PDF y
documentos con derechos. Si no los tienes en tu copia, pídeselos a Carlo.

Los PNG que generan `render.py` y `crop.py` también están ignorados, así que no
ensucian el árbol aunque se queden ahí.

---

## Qué es este bloque

Reactivos del **examen cultural** del Heroico Colegio Militar, escritos a partir
de los libros oficiales del temario. Un archivo `.md` por materia/capítulo en
`HCM/`.

El formato lo define el **Anexo "H"** de la convocatoria 2026. El examen evalúa
**recuerdo literal**: *"evocación de información concreta o de conocimientos
específicos de forma exacta y aislada"*. La respuesta correcta es **cita textual
del libro**, no una paráfrasis.

---

## Estado — dónde leerlo

**Este archivo ya no trae cifras.** Antes tenía una tabla de avance que se
desactualizaba en cuanto alguien escribía una tanda, y había otras dos copias a
mano —el README y los encabezados— que se desincronizaban entre sesiones.

Lee el estado aquí, en este orden:

| Para saber | Mira |
|---|---|
| Cuántos reactivos hay y qué falta | `ESTADO.md` en la raíz (**generado**) |
| Qué páginas exactas faltan de una materia | El encabezado de su `.md`, sección "Cobertura actual" |

```
node tools/estado-proyecto/generar-estado.js   # regenera ESTADO.md
grep -c "^### " docs/examen-cultural/HCM/*.md  # el conteo crudo
```

Lo estable: **Geografía, Historia y Español están cerradas. Álgebra es la única
materia abierta**, y le toca a quien tenga este handoff.

### Cómo arrancar en Álgebra

**El desfase es +8**: hoja del PDF 17 = página impresa 9. Suma 8 a la primera
página impresa que te falte y ésa es la hoja desde donde renderizas.

```
python docs/examen-cultural/render.py "examen_cultural/libros_examen_cultural/HCM/Álgebra de Baldor.pdf" <hoja> <hoja+9> 110
```

Tramos del temario, para ubicarte: Preliminares 5–39, I · Suma 40–45,
II · Resta 46–57, III · Signos de agrupación 58–62, IV · Multiplicación 63–78,
V · División 79–96, VI · Productos y cocientes notables 97–111.

---

## Cómo se trabaja, paso a paso

### 1. Renderizar las páginas

Los libros son **escaneos sin capa de texto**: no se pueden leer por programa.
Hay que convertir la página a imagen y leerla con los ojos.

```
python docs/examen-cultural/render.py "<ruta del pdf>" <hoja_desde> <hoja_hasta> 110
```

Los PNG salen **junto al script**, dentro del repo. **Muévelos al scratchpad
inmediatamente** o ensucias el árbol de git:

```
mv docs/examen-cultural/hoja_*.png <scratchpad>/
```

Hay también `crop.py`, que recorta una región de la hoja y la renderiza a
500–600 dpi. Sirve para verificar cifras largas o decidir si una rareza es
errata del libro o suciedad del escaneo — a 110 dpi no siempre se distingue.

### 2. Leer y escribir

Lee la imagen, extrae la teoría, escribe los reactivos al final del `.md` de esa
materia. Actualiza la sección "Cobertura actual" del encabezado.

### 3. Commitear y pushear cada tanda

Ya pasó que **129 reactivos estuvieron sin respaldo en git durante toda su
elaboración**. No lo repitas: cada tanda se commitea y se pushea.

---

## Formato del reactivo

```markdown
### 96

De acuerdo con el libro de Álgebra, ¿qué es el valor numérico de una expresión algebraica?

- A. El resultado que se obtiene al sustituir las letras por valores numéricos dados
- B. La suma de los coeficientes de todos sus términos
- C. El grado absoluto de su término de mayor grado
- D. El número que representa la expresión prescindiendo de su signo

**Respuesta:** A
**Referencia:** Baldor, Aurelio (2019) *Álgebra*, Grupo Editorial Patria, Pág. 23
**Subtema:** Preliminares · valor numérico

Valor numérico de una expresión algebraica es el resultado que se obtiene al sustituir las letras por valores numéricos dados y efectuar después las operaciones indicadas.
```

Reglas:

1. El enunciado **nombra el libro**: *"De acuerdo con el libro de X…"*.
2. Cuatro opciones, A a D. **La correcta siempre es la A** en este banco. No es
   que el examen la ponga en A: es que **el importador baraja las opciones**
   (decidido el 21 jul 2026), así que en el `.md` se escribe siempre en A porque
   es lo cómodo para revisar.
3. Referencia con **página impresa**, no hoja del PDF.
4. La justificación es **cita textual** del libro.
5. Numeración corrida por archivo, sin reiniciar.

### Los distractores son lo que distingue un buen reactivo

Del mismo tipo y magnitud que la respuesta. Si la respuesta es una cifra, las
cuatro son cifras. **Lo que mejor funciona es tomarlos del mismo párrafo o del
mismo cuadro** — datos vecinos que el aspirante confunde si estudió por encima.

Ejemplos que salieron bien:

- **Pares contrapuestos que el propio libro define seguidos.** En positivas es
  mayor la de **mayor** valor absoluto; en negativas la de **menor**. Cada regla
  es el distractor de la otra.
- **Fuentes cruzadas.** Las tablillas cuneiformes son de los babilonios y el
  papiro de Rhind de los egipcios; el distractor usa la fuente del otro pueblo.
- **Cifras vecinas del mismo cuadro.** Las áreas de las islas Marías —144, 84 y
  25 km²— se usan unas como distractor de otras.

Cuando un par se preste a confusión, **déjalo advertido en una nota `>` bajo el
reactivo**. Ayuda a quien revise después.

---

## Reglas duras que ya costaron trabajo

### La página impresa no es la hoja del PDF

**El desfase se corre y cambia por libro.** En Geografía va de 0 a +9 y baja a
+7 donde al escaneo le faltan hojas. En Historia va **1 adelante**. En Álgebra,
**8 adelante** (hoja 17 = página impresa 9).

**Las páginas de las referencias se leen de la hoja, nunca se calculan.**

### Verifica la edición antes de usar un libro

Contra la **página legal**, no contra el nombre del archivo. Ya pasó dos veces
que el ejemplar era la edición equivocada: Historia llegó en 2ª edición de 2008
cuando el temario pide la 3ª, y Álgebra en la edición Publicaciones Cultural
2003 cuando el temario pide Patria 2019.

Y si la convocatoria cita ese libro, **usa sus ejemplos para comprobar la
paginación**. Es la evidencia más fuerte que hay.

### Verifica que el PDF traiga contenido

Dos veces llegaron archivos con las páginas vacías: 291 hojas con un PNG de 473
bytes repetido, que es el icono de "imagen rota". La pista es el peso — una
página escaneada real pesa cientos de kilobytes; una vacía, doce.

### Erratas del libro: detectar y NO reproducir

El examen pide cita literal, pero **fijar una errata le enseñaría mal al
aspirante** y lo haría fallar si el examen real la corrige.

Cuando encuentres una: anótala en la tabla "Erratas del libro" del encabezado y
**no hagas reactivo de ese punto**. El archivo de Historia tiene ocho, incluidas
dos de dato (el libro fecha la muerte de Mao en 1975 y el asesinato de Indira
Gandhi en 1994, cuando fueron 1976 y 1984).

Criterio: **cuando el cuerpo del texto y un pie de figura discrepan, manda el
cuerpo.**

### Teoría sobre práctica — decisión de Carlo

**El examen cultural es teórico, no práctico.** Privilegia definiciones y reglas
sobre procedimientos de cálculo.

En Álgebra esto pesa mucho: Baldor alterna un artículo corto con páginas enteras
de ejercicios. **Los bloques de ejercicios no se convierten en reactivos**, y
cuando saltes páginas por eso, **documéntalo en la cobertura** para que nadie
crea que se te olvidaron.

Ojo: las **reglas sí son teoría** aunque hablen de operaciones. El reactivo
pregunta *"¿cuál es la regla?"*, no *"resuelve esto"*.

---

## Dos chats en paralelo

Este bloque lo han trabajado dos sesiones a la vez, y ya causó problemas: hubo un
momento en que **ambos chats creían tener asignada Historia**, y otro en que 129
reactivos de Español y Álgebra estuvieron sin respaldo en git durante toda su
elaboración.

**Antes de empezar, corre siempre esto** — el conteo del disco es la única
verdad, los documentos se desactualizan:

```
git fetch origin && git status --short
grep -c "^### " docs/examen-cultural/HCM/*.md
```

Si aparece trabajo sin commitear que tú no escribiste, **commitéalo antes de
tocar nada**. Es de la otra sesión y no tiene respaldo.

Reparto vigente: **Álgebra es lo único abierto**, y le toca a quien tenga este
handoff. Las otras tres materias están cerradas.

---

## Decisiones abiertas

- ~~**Clave de respuestas.**~~ **Decidido por Carlo el 21 jul 2026: el importador
  barajará las opciones.** Por tanto da igual que Historia, Español y Álgebra
  escriban siempre la correcta como A y que Geografía la reparta: el orden del
  `.md` deja de importar en cuanto entra a la base. **Se sigue escribiendo la
  correcta como A** — es lo cómodo para revisar. Detalle y consecuencias en
  `README.md`.
- **Alcance de Álgebra.** El temario dice "Capítulos I–VI", que empiezan en la
  página 40. Se está incluyendo además **Preliminares** (pp. 5–39), donde viven
  las definiciones. Documentado por si se decide separarlo.
- **No existe importador** de estos `.md` a la base. Cuando toque, mirar
  `apps/backend/scripts/importar-remaster.ts` como referencia — y no repetir su
  error: ahí la documentación escrita a mano llegó a mentir, y se resolvió
  generando el estado desde el propio importador.
