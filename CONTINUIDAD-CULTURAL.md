# Prompt maestro — cerrar el examen cultural

_(Pégalo como primer mensaje en un chat nuevo cuando toque seguir con el examen
cultural. Actualizado: 9 ago 2026.)_

Retomamos el **examen cultural** de la Plataforma UDEFA (monorepo en
`C:\proyectos\udefa`). **Antes de tocar nada: lee tu memoria (`MEMORY.md` + los
archivos que referencie), `ESTADO.md` y `CLAUDE.md`.** Si dudas del estado,
regenéralo antes: `node tools/estado-proyecto/generar-estado.js`.

Trabaja como pide `CLAUDE.md`: explica el paso a paso ANTES de hacer, vocabulario
llano, verifica el dato real antes de afirmar, y **deja que Carlo marque el ritmo**.

## El objetivo, en orden

1. **Cerrar Biología del todo.** Ya solo falta un capítulo:
   - **Cap 14 · Epigenética** (`docs/examen-cultural/EMM/biologia-14-epigenetica.md`).
     Lo pide **solo la EMOS**. **VA EN 220 reactivos** (9 ago), cubierto hasta la
     **p. 310**. **Retoma desde el ### 221, página impresa 311 (hoja 357).** Falta
     el resto del silenciamiento por ARN pequeños (ARNpi/PIWI si aparece), la
     **herencia epigenética transgeneracional**, los **gemelos**, los **ratones
     *agouti*** y el **cuidado maternal en ratas**, **hasta la p. 323**. El capítulo
     termina en la **hoja 369 (p. 323)**; la 370 está en blanco y la 371 ya es el
     cap 15. **Localiza dónde arranca el ensayo de cierre "Retomando la problemática
     inicial" (hacia el final) y PARA AHÍ** (ese ensayo y los ejercicios no llevan
     reactivos).
   - Con el cap 14, **Biología queda cerrada del todo** y con ella la **EMOS** (su
     única materia pendiente).
2. **Al cerrar el capítulo:** cambia su `**Pendiente:**` para que empiece con
   "ninguno…" y note que Biología queda cerrada del todo, regenera `ESTADO.md`, y
   commitea/pushea (ver reglas abajo).
3. **Después de Biología, los planteles que faltan** (detalle en el estado abajo):
   confirmar el hueco de **EMMA** (Física U11) y arrancar **EMEFA** de cero.

## Estado del cultural — verificado el 9 ago 2026

10 planteles con temario (fuente: `docs/examen-cultural/temarios.json`).

- ✅ **Cerrados del todo:** HCM, EMA, EMI, EMMG (Materiales de Guerra), y ahora
  **EME, EMM y EMO** (se cerraron el 9 ago al terminar **Biología cap 37 · La
  Digestión**, 143 reactivos; sus demás materias ya estaban completas).
- 🟡 **Solo le falta Biología a la EMOS:** el **cap 14 · Epigenética** (EN CURSO,
  220 reactivos, retoma p. 311). Es el único capítulo abierto de Biología.
- 🟠 **EMMA (Mantenimiento y Abastecimiento) — hueco por confirmar:** Álgebra y
  Trigonometría/Geometría (Zill) cerradas. En **Física (Pérez Montiel)** su temario
  pide la **Unidad 11 (Termología) "Completo"**, pero solo están escritos los temas
  1–7 y 12; faltarían **8, 9, 10, 11 y 13**. El encabezado de
  `fisica-perez-montiel/fisica-11-termologia.md` dice "la EMMA no pide esta unidad",
  lo que **contradice** al temario extraído del PDF. **Abrir el PDF de EMMA**
  (`examen_cultural/temarios_de_escuelas/…EMMA…`) para resolver cuál manda antes de
  escribir nada. (Las demás unidades de Física sí incluyen a EMMA en `ESTADO.md`.)
- 🔴 **EMEFA (Especialistas de Fuerza Aérea) — sin empezar:** 3 libros nuevos sin un
  solo reactivo, edición ya verificada (~1 ago): Geografía *Lucio Victorio* (Nueva
  Imagen, 4ª 2004 — su escaneo no trae página legal), Física *Serway/Jewett*
  (Cengage 2022), Matemáticas *Larson, Precálculo* (Cengage 2018).
- ⚠️ **EMT (Transmisiones) — no se puede aún:** no tiene temario cargado en
  `temarios.json`. Falta la convocatoria; sin ella no hay qué escribir.

## Método (Biología, libro de Curtis)

El PDF trae capa de texto: se extrae, no se transcribe a ojo. Pero en el cap 14 las
páginas van a **dos columnas con figuras**, y el extractor las entrevera; para cita
textual fiable conviene **renderizar la página y leerla con los ojos** (`render.py`).

```
PYTHONIOENCODING=utf-8 python docs/examen-cultural/extraer.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja_desde> <hoja_hasta> --desfase=46
python docs/examen-cultural/render.py "examen_cultural/libros_examen_cultural/EMM/1 BIOLOGIA DE CURTIS.pdf" <hoja_desde> <hoja_hasta> 150
```

- **Desfase +46:** hoja del PDF = página impresa + 46 (p. 311 → hoja 357). El
  `--desfase=46` solo rotula la cabecera; **la página se lee de la hoja, NUNCA se
  calcula** (es la trampa que más ha costado en este banco).
- **Figuras y recuadros con la capa de texto cifrada** (sale tipo `3iQFUHDV` o
  lorem ipsum): no se pueden citar del extractor; van con `render.py` o `crop.py`.
  Los `.png` que deja `render.py` en `docs/examen-cultural/` son temporales:
  **bórralos antes de commitear** (`rm docs/examen-cultural/hoja_*.png`).
- **No llevan reactivos:** los apartados de apertura "Biología en contexto social"
  (salvo en el cap 14, donde SÍ se tomaron los datos de biología del apartado de
  apertura del glifosato), el ensayo de cierre "Retomando la problemática inicial"
  ni los ejercicios ("Cuestionario", "Situaciones problemáticas"). **Los recuadros
  con biología real SÍ llevan reactivos** (en el cap 14 ya los tienen el 14-1 y el
  14-2).
- **Erratas del cap 14 ya documentadas** en su encabezado (Driesch p.296, "de del"
  p.295, "genotipó" p.299, Descartes "sueco"→francés p.301): **no se escriben
  reactivos sobre ellas** (todas caen antes de la p. 311, pero por si acaso).

## Estructura EXACTA del reactivo — respétala al pie de la letra

No la "maquilles" (nada de negritas en la pregunta, palomitas, ni justificación en
cursiva o `>`). El reactivo es siempre así, igual en el archivo que cuando se lo
enseñas a Carlo:

```
### N

De acuerdo con el libro de Biología, ¿…?

- A. [opción correcta]
- B. [distractor]
- C. [distractor]
- D. [distractor]

**Respuesta:** A
**Referencia:** Curtis, Barnes, Schnek, Massarini (2022) *Biología*, Editorial Médica Panamericana, Pág. XXX
**Subtema:** epigenética · subtema

[justificación en texto plano — cita textual del libro; usa [...] para recortar]

---
```

- **Recuerdo literal** (formato Anexo "H"): la opción correcta y la justificación
  son **cita textual del libro**. Cuatro opciones del **mismo tipo y magnitud**; los
  mejores distractores salen del mismo párrafo. Caza el **dato olvidable**, no el
  obvio (calidad, no cantidad).
- **La correcta se escribe siempre en A** porque el importador baraja las opciones.

### Convenciones PROPIAS del cap 14 — IGUÁLALAS (no impongas el molde del cap 37)

El cap 14 lo escribió el otro chat con su propia forma. **Cálcala, no la cambies:**

- **Lista PLANA:** `### N` corrido (vas por el 220 → sigue en el **### 221**), **SIN
  encabezados `## Sub-lote`**. El rastreo por página vive en `## Cobertura actual`,
  no en sub-lotes.
- **ALTERNA los tres conectores** del Anexo "H": *"De acuerdo con el libro de
  Biología, …"*, *"De conformidad con el libro de Biología, …"*, *"En relación con
  el libro de Biología, …"*. (Repártelos parejo; hoy van ~74/73/73.)
- **Subtema:** `epigenética · <subtema>`.
- **NO tiene línea `**Reactivos en este archivo:** N`** — no la agregues (aquí el
  conteo de `ESTADO.md` sale de contar los `### `).
- **Mantén la sección `## Cobertura actual`:** agrega **una línea por página impresa**
  que cubras (mira las que ya están, del estilo "Cubierta la página impresa **N**: …").
- El `**Pendiente:**` se mantiene **"EN CURSO"** y le subes el "sigue desde la página
  impresa **N**" **cada tanda**. Al cerrar, cámbialo para que **empiece con
  "ninguno"** y note que Biología queda cerrada del todo (y con ella la EMOS).
- Puedes usar notas `>` de revisor bajo un reactivo (el importador no las importa),
  como ya hace algún reactivo del archivo. Opcional.

## Reglas de trabajo

- **Commits del cultural: OK permanente de Carlo.** Se puede commitear y pushear
  **cada tanda** sin preguntar; **solo hay que avisarle qué entró**. (Fuera del
  cultural —por ejemplo este mismo archivo o `ESTADO.md` cuando lo toca otra cosa—
  el push lo decide él.)
- **Antes de cada push:** `git fetch` y revisa que no estás detrás de `origin/main`
  (dos chats trabajan en paralelo sobre `main`; nunca uses `--force`). Añade **solo**
  el `.md` del capítulo con `git add <ruta>` — nunca `git add -A` (hay trabajo de
  otro chat sin commitear en el working tree).
- **`ESTADO.md`:** durante el cap 14 **no se regeneró por tanda** (solo se subió el
  `Pendiente` del archivo), así que `ESTADO.md` todavía reporta cap 14 = 156.
  **Regénralo al cerrar el capítulo** (o cuando quieras refrescar el conteo) con
  `node tools/estado-proyecto/generar-estado.js` y revisa la fila del cap 14.
- **Verifica cada tanda** antes de commitear: numeración `### ` corrida sin huecos ni
  duplicados, todas las respuestas en **A**, y el `Pendiente` sigue "EN CURSO".

## Rastro de commits (para verificar el punto de partida)

- Cap 37 **CERRADO:** `742591b` (143 reactivos; cerró EME/EMM/EMO).
- Cap 14 (esta tanda de avance, 156 → 220): `3af50eb` (p.306), `a58c727` (p.307),
  `36b59fc` (p.308), `15fc4b4` (p.309), `a21fbf8` (p.310).

## Decisión abierta (por si Carlo la retoma)

En el **cierre del cap 37** quedó **fuera por norma** la biología nutricional del
apartado "Por falta y por exceso / Algunos requerimientos nutricionales" (p. 868–876:
aminoácidos esenciales, vitaminas A/D/K, grasas trans). Si Carlo la quiere dentro,
es una tanda extra sobre `biologia-37-digestion.md` (reabrir su `Pendiente`).

**Arranca confirmando con Carlo: ¿sigo de corrido cerrando el cap 14 desde el
### 221 (p. 311), o por dónde quiere retomar?**
