# EMI — 6 cursos nuevos, reconocimiento (29-30 ago 2026)

> Los temarios de estos 6 cursos se subieron el 29 ago 2026. `seed-temarios-tropa.ts`
> ya les creó su fila de `Plantel` tipo `TROPA` (id 49-54) como identidad
> nada más — `materias: []`, sin enlazar. Este archivo es el reconocimiento,
> no trabajo de contenido todavía.

## Los 6 cursos comparten 3 materias, cada uno pide una 4ª distinta

| Curso | 4ª materia (única de ese curso) |
|---|---|
| `EMI_ADM_EVLN_PROYEC_2026` | Administración de Proyectos |
| `EMI_ESP_TELEM__TICA_2026` | Telecomunicaciones |
| `EMI_ING_AUTOMOTRIZ_2026` | Ingeniería de transporte |
| `EMI_ING_COSTOS_2026` | Costo y Tiempo en Edificación |
| `EMI_SIST_CALIDAD_2026` | Desarrollo de una Cultura de Calidad |
| `EMI_T_I_2026` | Ingeniería del Software |

Las 3 materias compartidas (idénticas en los 6 temarios):

- **Metodología de la Investigación** — *Métodos y Técnicas de Investigación*,
  Lourdes Münch, Edit. Trillas, 7ª ed. 2023. Completo.
  (Ojo: NO es el mismo libro que ya está en el banco cultural para esta
  materia — `metodologia-baena` es de Guillermina Baena Paz. Éste es otro
  autor, otro libro, aunque el nombre de la materia sea igual.)
- **Estadística** — *Probabilidad y Estadística para Ingenieros*, Richard A.
  Johnson, Edit. Pearson Educación, 8ª ed. 2012. Capítulos 2-7, completos.
- **Evaluación de Proyectos** — *Evaluación de Proyectos*, Gabriel Baca
  Urbina, Edit. McGraw-Hill, 9ª ed. 2022. Capítulos 1-4, completos.

## Las 6 materias únicas

| Materia | Libro | Autor | Editorial/edición | Alcance |
|---|---|---|---|---|
| Administración de Proyectos | *Administración de Proyectos. Guía para el Aprendizaje* | Francisco Rivera Martínez | Pearson, 2ª ed. 2015 | Completo (2 partes) |
| Telecomunicaciones | *Redes Telemáticas* | Carlos Valdivia Miranda | Paraninfo, 1ª ed. 2015 | Cap. 3 y 5, completos |
| Ingeniería de transporte | *Sistemas Mecánico y Eléctrico del Automóvil* | Tom Denton | Alfaomega, 1ª ed. 2015 | Cap. 1 (sólo 1.3) y Cap. 2 completo |
| Costo y Tiempo en Edificación | *Costo y Tiempo en Edificación* | Carlos Suárez Salazar | Limusa, 3ª ed. 2017 | Cap. 1-3, completos |
| Desarrollo de una Cultura de Calidad | *Desarrollo de una Cultura de Calidad* | Humberto Cantú Delgado | McGraw-Hill, 4ª ed. 2011 | Cap. 1-3, completos |
| Ingeniería del Software | *Ingeniería del Software. Un Enfoque Práctico* | Roger S. Pressman | McGraw-Hill, 7ª ed. 2010 | Partes 1 y 2, completas |

**Total: 9 libros distintos.** Ninguno se traslapa con el banco cultural
existente ni con lo ya escrito para tropa.

## Bloqueo — igual que pasó antes con Zill/Dewar

**Ninguno de los 9 PDFs existe en la plataforma.** Búsqueda hecha en
`examenes_tropa/libros/` completo (académicos, manuales-emdn, normativa): no
aparece ninguno de los 9 autores/títulos de arriba.

Sin el PDF no se puede verificar la edición contra la página legal (regla
dura del proyecto) ni escribir un solo reactivo.

## Pendiente — decisión de Carlo, no de escritura

- ¿Carlo tiene alguno de estos 9 libros? Si sí, ¿en qué edición y dónde los
  sube (mismo lugar que `algebra-trigonometria-zill.pdf`,
  `examenes_tropa/libros/academicos/`)?
- Si no los tiene todos: ¿prioridad? Las 3 materias compartidas (Münch,
  Johnson, Baca Urbina) desbloquean partes de los 6 cursos a la vez; cada
  materia única sólo sirve a un curso.
- Es la pieza de contenido más grande y menos avanzada de todo tropa: 9
  libros nuevos contra 0 reaprovechados, a diferencia de Física/Álgebra/Zill
  (banco ya escrito) y LM/DH (banco ya escrito).

## Verificación de lo descargado (30 ago 2026)

Carlo bajó 8 de los 9 a `C:\Users\carlo\Downloads\`. Se verificó cada uno
contra su página legal (regla dura del proyecto) — **no todos sirven**:

| # | Materia | Resultado | Detalle |
|---|---|---|---|
| 1 | Estadística (Johnson) | ✅ **Sirve** | `kupdf.net_probabilidad-y-estadiacutestica...johnson.pdf` — "Octava edición", confirmado |
| 2 | Cultura de Calidad (Cantú) | ✅ **Sirve** | `Desarrollo_de_una_cultura_de_calidad_Can.pdf` — Cuarta edición, McGraw-Hill © 2011, confirmado |
| 3 | Ingeniería del Software (Pressman) | ✅ **Sirve** | `Ingeniería del software.pdf` — Séptima edición, McGraw-Hill © 2010, confirmado |
| 4 | Telecomunicaciones (Valdivia) | ✅ **Sirve** | `pdfcoffee.com_...paraninfo-2...pdf` (el nombre engaña) — portada dice "1.ª edición, 2015, Ediciones Paraninfo", confirmado |
| 5 | Evaluación de Proyectos (Baca Urbina) | ❌ **Edición equivocada** | Descargado: **7ª ed. © 2013**. Se necesita: **9ª ed. 2022** |
| 6 | Administración de Proyectos (Rivera Martínez) | ❌ **Edición equivocada** | Descargado: **1ª ed. 2010**. Se necesita: **2ª ed. 2015** |
| 7 | Costo y Tiempo en Edificación (Suárez Salazar) | ⚠️ **Riesgo** | El escaneo es la "vigesimoctava reimpresión de la tercera edición", **fechada 2002**. El temario cita "3ª ed. **2017**" — mismo número de edición, año muy distinto. Reimpresiones de años tan separados suelen NO tener la misma paginación (ya pasó con otros libros del proyecto) — no usar sin confirmar que la paginación coincide, o conseguir la de 2017 |
| 8 | Metodología de la Investigación (Münch) | ❌ **Libro equivocado** | El archivo `metodologia de la investigacion.pdf` es **Guillermina Baena Paz**, no Münch — es el mismo libro que YA está en el banco cultural (`metodologia-baena`), no el que pide EMI |
| 9 | Ingeniería de transporte (Tom Denton) | ❌ **No descargado** | No aparece en Descargas |

**Pendiente:** conseguir la edición correcta de 3 libros (#5, #6, #8) y
verificar o reconseguir #7; #9 sigue sin ningún PDF. De las 3 materias
COMPARTIDAS (las que desbloquean a los 6 cursos a la vez) sólo Estadística
(#1) quedó confirmada — Metodología y Evaluación de Proyectos siguen
bloqueadas por edición/libro equivocado. De las materias únicas (1 curso
cada una), Cultura de Calidad, Ingeniería del Software y Telecomunicaciones
(#2, #3, #4) ya están listas para escribir banco.
