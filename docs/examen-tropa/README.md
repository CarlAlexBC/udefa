# Examen de tropa — cómo se trabaja este bloque

Producto **nuevo y separado** del examen de admisión a la UDEFA. Aquí van los
cursos de ascenso y formación para personal de tropa: Formación de Sargentos
1/os. y 2/os., Cursos de Formación de Oficiales (CIFO) y cursos técnicos.

Arrancado el 27 de agosto de 2026.

## Antes de escribir un solo reactivo

Aplican las MISMAS reglas del banco cultural. Lee
**[../examen-cultural/QUE-NO-ESCRIBIR.md](../examen-cultural/QUE-NO-ESCRIBIR.md)**:
nada de pedir figuras que no se ven, nada de nombrar el capítulo, nada de
adorno del libro, nada fuera del temario. Calidad antes que cantidad.

## Estructura del examen

**100 reactivos en 2 horas** — idéntica al examen cultural de la UDEFA
(confirmado por Carlo). Eso significa que el simulador, el panel de resultados
y el repaso espaciado se reaprovechan tal cual: no hay que construir motor.

## Dónde están los libros

En `examenes_tropa/libros/`, **fuera de git** (155 MB, en `.gitignore`), igual
que los escaneos del banco cultural:

| Carpeta | Qué hay |
|---|---|
| `normativa/` | Las 6 leyes y reglamentos + el Manual de Derechos Humanos |
| `manuales-emdn/` | Los 11 manuales del Estado Mayor |
| `academicos/` | Reyes Ponce, Fuenlabrada, Boylestad, Zill |

Y varios libros **ya vaciados en el banco cultural** se reaprovectan sin tocar
nada: Pérez Montiel (Física), Baldor (Álgebra), Chang (Química), Curtis
(Biología), Baena (Metodología), Salazar (Cálculo), Zarzar (Español).

## Material completo — no falta ningún libro (28 ago 2026)

Carlo subió el **Manual de Aspectos Técnicos del Servicio de Transmisiones**
(*Electricidad, Electrónica y Señales*, E.M.C.D.N.), que era el único que
faltaba. 431 páginas y **trae capa de texto**, así que no necesita OCR. Vive en
`libros/manuales-emdn/aspectos-tecnicos-transmisiones.pdf`.

Con eso, **los 35 cursos tienen todo su material**. No hay nada que conseguir.

> Errata del propio libro, por si aparece en una búsqueda: la página legal dice
> «MANU**N**AL DE ASPECTOS TÉCNICOS». La portada está bien.

## Son 35 cursos, no 36

El conteo anterior estaba inflado por un temario repetido de la EMMA
(`EMMA_I_F_O_F_A_E_M_A_2026 (1).pdf`), que el catálogo contó como curso aparte.
Se borró la copia y se corrigió `_cursos.json`. **35 cursos en 9 escuelas.**

## Por dónde empezar, y por qué

| Materia | Cursos que la piden | Material |
|---|---|---|
| **Derechos Humanos** | **23 de 35** | Completo |
| **Legislación Militar** | **19 de 35** | Completo |
| Álgebra | **14, no 17** — dos libros distintos, ver abajo | Baldor CERRADO, Zill falta |
| Física General | 13 | Ya vaciado (Pérez Montiel) |
| Táctica | 6 | Completo (5 manuales) |
| El resto | 5 o menos | — |

> **Corrección (28 ago):** la cifra de 17 cursos para Álgebra era errónea — el
> conteo real, verificado tabla por tabla con `find_tables()`, es **14**. Y no
> es un solo libro: **10 usan Baldor** (ya en la base — la primera pasada
> había contado sólo 8, se le escaparon `EMMG_MG_TEC_MANTO_I` y
> `EMMG_T_E_BALISTICA`) y **4 —los de la EMMA— piden Dennis G. Zill /
> Jacqueline M. Dewar, *Álgebra, Trigonometría y Geometría Analítica*,
> McGraw-Hill 3ª ed. 2012**, que no está ni en la base ni en los PDF subidos.
>
> **CERRADO (28 ago):** Física General y Álgebra-Baldor ya están enlazados en
> la base para los 16 cursos que les tocaba (13 de Física, 10 de Baldor, 7 se
> traslapan). Detalle completo, huecos de contenido y lo pendiente en
> `docs/examen-tropa/enlace-fisica-algebra.md`.
>
> **Ojo al vaciar:** los temarios escriben la misma materia de dos formas —
> «Física General» (13 cursos) y «Física» (1). Antes de crear un tema nuevo hay
> que comprobar si ya existe con otro nombre, o el reparto saldrá partido.
>
> **La tabla de cursos más abajo (líneas ~130+) es de una pasada más floja y
> puede no coincidir con los libros verificados aquí** — pendiente de una
> limpieza aparte, no bloquea este trabajo.

**Derechos Humanos y Legislación Militar sirven a dos tercios del catálogo con
material que ya está completo.** Es el mejor retorno por hora de trabajo del
proyecto entero, y no depende de conseguir nada.

Ojo con el tamaño: son ~3,800 páginas de manuales militares además de los
libros académicos. Más material del que salió todo el banco cultural. El plan
tiene que ir por partes.

## Decisiones cerradas (27 ago 2026)

### Entra por su propia puerta: `/tropa`

Producto separado, no una pestaña ni un plantel más. Un sargento no es aspirante
a cadete: no le sirve la Guía del Aspirante ni el examen psicológico. Dos
productos, dos puertas, cero confusión.

Adentro se reaprovecha TODO el motor: simulacro con cronómetro, panel de
resultados, práctica por materia, avance con semáforo y repaso espaciado. La
estructura del examen es idéntica —100 reactivos, 2 horas— así que no hay motor
que construir.

### La primera pantalla: una sola pregunta

35 cursos no caben en una rejilla de escudos como la de planteles. Va un
buscador, agrupado por escuela y con el curso como segunda línea:

> **¿A qué curso vas a presentar?**
> *escribe tu escuela o tu especialidad*
>
> Heroico Colegio Militar · CIFO Artillería
> Materiales de Guerra · Formación de Sargentos 1/os.

Se elige una vez, se guarda y desaparece — igual que el selector de plantel.

### REGLA DURA: no se duplica ni un libro

El modelo ya separa oferta de demanda. `Libro.slug` es la identidad: **Baldor es
Baldor**, lo pida el HCM o lo pida la EMCS. El reactivo cuelga del libro, no del
plantel, y el temario dice qué capítulos pide cada quien.

**Nunca crear una carpeta para un libro que ya existe.** Si un curso de tropa
pide Baldor capítulos 1–6 y ya están escritos, se reaprovechan tal cual: se
piden desde el temario y punto. Sólo se crean carpetas nuevas para libros
nuevos — la normativa y los manuales del Estado Mayor.

Consecuencia: de las 23 materias del catálogo, **sólo la normativa y los
manuales son trabajo nuevo**. Álgebra, Física, Biología, Química, Español,
Metodología y Cálculo ya están vaciados.

### Lo que falta en el modelo, y no se hizo aquí

Hoy la demanda se llama **plantel**: `Temario` lleva `plantelId + anio + estado`.
Pero en tropa la unidad no es la escuela sino el **curso** — la EMMG sola tiene
seis. Falta un nivel: `Curso`, colgando de una escuela, y que el temario pueda
pertenecerle.

Es un cambio de esquema pequeño pero real. Se dejó para un chat nuevo a
propósito: merece empezar con la cabeza fresca.

## Los 35 cursos

| Escuela | Curso | Materias |
|---|---|---|
| Escuela Militar de Clases de Sanidad | `EMCS_Cso_F_S1_Snd_Es_2026` | Legislación Militar, Derechos Humanos, Álgebra, Biología |
| Escuela Militar de Clases de Sanidad | `EMCS_Cso_F_S2_Snd__Es_2026` | Legislación Militar, Derechos Humanos, Álgebra, Biología |
| Escuela Militar de Clases de Transmisiones | `EMCT_F_S_1os_TRANS_2026` | Legislación Militar, Derechos Humanos |
| Escuela Militar de Clases de Transmisiones | `EMCT_F_S_2os_TRANS_2026` | Legislación Militar, Derechos Humanos |
| Escuela Militar de Enfermería (CIFOEM) | `EME_C_I_F_O_E_M_2026` | Legislación Militar, Derechos Humanos, Enfermería |
| Escuela Militar de Mantenimiento y Abastecimiento | `EMMA_F_A_I_M_A_2026` | Álgebra, Física General, Trigonometría, Aeronáutica |
| Escuela Militar de Mantenimiento y Abastecimiento | `EMMA_F_O_F_A_A_A_2026` | Álgebra, Física General, Trigonometría, Aeronáutica |
| Escuela Militar de Mantenimiento y Abastecimiento | `EMMA_F_O_F_A_A_M_A_2026` | Álgebra, Física General, Trigonometría, Aeronáutica |
| Escuela Militar de Mantenimiento y Abastecimiento | `EMMA_F_O_F_A_E_E_A_2026` | Álgebra, Física General, Trigonometría, Electrónica |
| Escuela Militar de Mantenimiento y Abastecimiento | `EMMA_I_F_O_F_A_A_A_2026` | Legislación Militar, Derechos Humanos, Física General |
| Escuela Militar de Mantenimiento y Abastecimiento | `EMMA_I_F_O_F_A_A_M_A_2026` | Legislación Militar, Derechos Humanos, Administración Moderna |
| Escuela Militar de Mantenimiento y Abastecimiento | `EMMA_I_F_O_F_A_E_M_A_2026` | Legislación Militar, Derechos Humanos, Física General |
| Escuela Militar de Materiales de Guerra | `EMMG_F_S_1os_M_G_2026` | Derechos Humanos, Álgebra, Matemáticas |
| Escuela Militar de Materiales de Guerra | `EMMG_F_S_2os_M_G_2026` | Legislación Militar, Derechos Humanos |
| Escuela Militar de Materiales de Guerra | `EMMG_MG_LIC_LOG_M_G_2026` | Álgebra, Matemáticas, Español, Historia de México, Metodología de la Investigación |
| Escuela Militar de Materiales de Guerra | `EMMG_MG_TEC_MANTO_I_2026` | Álgebra, Matemáticas, Física General, Química, Táctica |
| Escuela Militar de Materiales de Guerra | `EMMG_Sgto_1o_M_I_2026` | Derechos Humanos |
| Escuela Militar de Materiales de Guerra | `EMMG_T_E_BALISTICA_2026` | Derechos Humanos, Álgebra, Matemáticas, Física General |
| Escuela Militar de Oficiales de Sanidad (CIFOS) | `EMOS_C_I_F_O_S_T_U_M_2026` | Álgebra, Física General, Biología, Química |
| Escuela Militar de Transmisiones | `EMT_F_O_TRANS_2026` | Derechos Humanos, Álgebra, Matemáticas, Electrónica |
| Escuela Militar de Transmisiones | `EMT_TRANS_LIC_TICS_2026` | Álgebra, Cálculo Diferencial, Español, Metodología de la Investigación |
| Heroico Colegio Militar (CIFO) | `HCM_CIFOA_A_B___2026` | Legislación Militar, Derechos Humanos, Táctica |
| Heroico Colegio Militar (CIFO) | `HCM_CIFOA_CAB___2026` | Legislación Militar, Derechos Humanos, Táctica |
| Heroico Colegio Militar (CIFO) | `HCM_CIFOA_ZPDR___2026` | Legislación Militar, Derechos Humanos, Táctica |
| Heroico Colegio Militar (CIFO) | `HCM_CIFOGN_2026` | Legislación Militar, Derechos Humanos, Seguridad Pública |
| Heroico Colegio Militar (CIFO) | `HCM_CIFOS_PM__2026` | Legislación Militar, Derechos Humanos, Táctica |
| Heroico Colegio Militar (CIFO) | `HCM_HCMART_2026` | Legislación Militar, Derechos Humanos, Táctica |
| Escuela Militar de Tropas Especialistas de la F.A. | `EMTEFA_F_S_1os_FAAA_2026` | Legislación Militar, Derechos Humanos, Física, Química, Electrónica |
| Escuela Militar de Tropas Especialistas de la F.A. | `EMTEFA_F_S_1os_FAAMA_2026` | Legislación Militar, Derechos Humanos, Administración Moderna, Logística Militar |
| Escuela Militar de Tropas Especialistas de la F.A. | `EMTEFA_F_S_1os_FAEEA_2026` | Legislación Militar, Derechos Humanos, Electrónica, Sistemas Digitales |
| Escuela Militar de Tropas Especialistas de la F.A. | `EMTEFA_F_S_1os_FAEMA_2026` | Legislación Militar, Derechos Humanos, Aeronáutica, Motores de Reacción |
| Escuela Militar de Tropas Especialistas de la F.A. | `EMTEFA_F_S_2os_FAAA_2026` | Álgebra, Física General, Cálculo Diferencial, Cálculo Integral |
| Escuela Militar de Tropas Especialistas de la F.A. | `EMTEFA_F_S_2os_FAAMA_2026` | Álgebra, Física General, Cálculo Diferencial, Cálculo Integral |
| Escuela Militar de Tropas Especialistas de la F.A. | `EMTEFA_F_S_2os_FAEEA_2026` | Álgebra, Física General, Cálculo Diferencial, Cálculo Integral |
| Escuela Militar de Tropas Especialistas de la F.A. | `EMTEFA_F_S_2os_FAEMA_2026` | Álgebra, Física General, Cálculo Diferencial, Cálculo Integral |
