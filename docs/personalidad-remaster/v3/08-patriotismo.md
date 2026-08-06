# Eje 08 · Patriotismo — banco **v3**

> **Eje nuevo, desdoblado del eje 28 (4 ago 2026).** El antiguo eje 28 **fusionaba**
> T27 (Espíritu de cuerpo) y T28 (Patriotismo). Por decisión de Carlo, los 9
> valores militares oficiales pasan a tener eje propio en Personalidad; el
> **patriotismo se separa aquí, al eje `08`** (llena el único hueco de la
> numeración). El espíritu de cuerpo se queda como eje 28 (`28-espiritu-cuerpo.md`).
>
> **Estado: EN DISEÑO (Paso 3).** Arrancó con los **10 reactivos de país heredados**
> del eje 28 (su ingeniería de patria: 5 pares + el cluster "patriotismo
> simbólico"). Faltan **~75 reactivos por diseñar** para llegar a 85 (Paso 3).
> Cantera: Axiológico (examen id=3, 155 react.) + guía §5.3 (apartado Patriotismo)
> + criterio de Carlo. **La numeración final 01–85 se fija al diseñar el eje
> completo**; abajo, los 10 heredados conservan su número del eje 28 para
> trazabilidad.
>
> **Escala:** Verdadero / Falso (V = me describe / F = no me describe).

## Objetivo del constructo

Mide **patriotismo** (T28 del banco original UDEFA): el amor al país entendido como
**pertenencia y servicio**, no como discurso ni símbolo. La distinción que organiza
el eje: patriotismo **practicado** (aporte sostenido, en lo chico del día a día, sin
necesidad de menospreciar a nadie) vs. patriotismo **simbólico** (de fechas, de
símbolos, de comparación con otros países).

## 🔴 Doctrina que manda el diseño (el militar no critica al gobierno)

El militar mexicano está **subordinado al poder civil** y es **apolítico**: no habla
de su gobierno ni se pone en su contra. Por eso, al diseñar este eje, **NO se
redacta como polo positivo la crítica al país o al gobierno.** El patriotismo se
mide por **servicio y pertenencia**, jamás por opinar sobre lo que el país "hace
mal".

Por esta razón, en el eje 28 original se **omitieron** el par **44/45**
("señalar/criticar lo que está mal en el país") y el reactivo **73** ("querer al
país y aun así ver lo que le falta"). Esos reactivos **no se recuperan** aquí.
Detalle en la memoria `feedback_militar_no_critica_gobierno`.

## 🎖 Vínculo militar — este eje SÍ florece

A diferencia del espíritu de cuerpo (donde el 🎖 va de acento), el **concepto de
este eje es intrínsecamente castrense**: la patria. Aquí el 🎖 marca con soltura los
reactivos anclados en el país, sin forzar. Regla en la memoria
`feedback_vinculo_militar_v3`.

## Diseño (semilla — provisional)

- **Heredados del eje 28:** 10 reactivos (5 pares) · **Por diseñar:** ~75 · **Meta:** 85
- **Escala:** Verdadero / Falso
- **Cluster heredado:** Patriotismo simbólico
- **Trampas / receptores cross:** **ninguno heredado** — los del eje 28 eran todos
  de grupo y se quedaron allá. Se diseñarán trampas L/K/F propias y, si procede,
  receptores/emisores cross en el Paso 3.

## Marcos base del eje

Patriotismo simbólico vs. practicado, pertenencia sin oposición, aporte sostenido
vs. aporte de calendario, aporte en escala real (lo chico cuenta), vocación de
servicio.

---

## Reactivos heredados del eje 28 (patria) — semilla

> Conservan su número del eje 28 para trazabilidad; la numeración final 01–85 se
> fija al diseñar el eje completo (Paso 3). Los 10 forman **5 pares** entre ellos.

| #(e28) | enunciado | pol | par | subnota | marco |
|----|-----------|-----|-----|---------|-------|
| 09 | Considero importante contribuir al bienestar de mi país. 🎖 | POS | 10 | le importa aportar al país | vocación de aporte |
| 10 | Lo que le ocurre al país no lo considero asunto mío. 🎖 | NEG | 09 | lo del país no lo siente suyo | desvinculación del asunto común |
| 11 | Considero que el amor al país se demuestra más con actos que con palabras. 🎖 | POS | 12 | lo demuestra en lo que hace | patriotismo en la conducta |
| 12 | Considero que respetar los símbolos ya es suficiente para demostrar amor al país. 🎖 | NEG | 11 | con los símbolos ya lo demuestra | patriotismo reducido a lo simbólico |
| 13 | Puedo valorar a mi país sin menospreciar a otras naciones. 🎖 | POS | 14 | quiere al suyo sin menospreciar | pertenencia sin oposición |
| 14 | Considero que querer a mi país implica creerlo mejor que los demás. 🎖 | NEG | 13 | quererlo implica que es mejor | pertenencia definida por comparación |
| 22 | Mi aporte al país no depende de fechas señaladas. 🎖 | POS | 23 | no depende de la fecha | aporte sostenido |
| 23 | Me identifico con el país sobre todo en las fechas importantes. 🎖 | NEG | 22 | se acuerda en las fechas | patriotismo de calendario |
| 58 | Contribuyo al país en las cosas pequeñas del día a día. 🎖 | POS | 59 | aporta en lo chico y cotidiano | aporte en escala real |
| 59 | Considero que lo que yo haga es demasiado pequeño para influir en el país. 🎖 | NEG | 58 | siente que lo suyo no cambia nada | desconexión por escala |

## Cluster heredado

- **Patriotismo simbólico:** {12, 23, 59}. ≥2 V → el valor existe en el discurso y
  en las fechas, no en la conducta. *(Se conserva del eje 28; los números se
  reasignan al fijar la numeración final.)*

## Nota de implementación heredada

- **El reactivo 12 no penaliza respetar los símbolos**, penaliza reducir el valor a
  eso. La palabra "ya" hace el trabajo; no alterarla.

## Cantera para el diseño (Paso 3)

- **Examen real, `bloque6` tema `patriotismo`** (`docs/reactivos-iniciales/reactivos_bloque6_personalidad.json`, 61 reactivos): **molde de registro y contenido a la vez.** Ya redacta por servicio/pertenencia, no por crítica: "Considero importante contribuir al bienestar de mi país", "Mantengo una actitud de servicio hacia la sociedad", "Respeto la historia y tradiciones que forman parte de mi país". Confirma la doctrina y da vocabulario (nación, comunidad, sociedad, símbolos nacionales, instituciones, servicio, responsabilidad ciudadana).
- **Axiológico** (examen id=3, 155 reactivos bajo `valores_militares`): su apartado
  de Patriotismo.
- **Guía §5.3** del Axiológico (apartado Patriotismo) — OJO: la §5.3 tiene la
  taxonomía de valores equivocada, pero su material de patriotismo sirve de cantera.
- **Reactivo 14 (chovinismo)** trae la semilla de un patrón "patriotismo por
  oposición" (mi país es mejor que los demás) que en el eje 28 vivía en el cluster
  "cohesión por oposición"; aquí puede crecer a un cluster propio.
- **Recordatorio permanente:** patriotismo por **servicio**, jamás por crítica al
  gobierno.

## Reactivos diseñados (Paso 3)

> **En curso.** Numeración provisional `nNN` (n = nuevo) hasta cerrar el eje; la
> final 01–85 integra estos con los 10 heredados de arriba. **🎖 honesto:** solo lo
> anclado a país / nación / símbolos / instituciones; lo cívico-genérico (entorno,
> sociedad) va **sin** 🎖. Escala **V/F**. Doctrina: **servicio, no crítica.**
>
> **Progreso:** Lotes 1–2 aprobados (28 react.). Meta ≈ 75 nuevos.

### Lote 1 — Servicio · Pertenencia · Simbólico · Representación (13) · aprobado 2026-08-06

| # | enunciado | pol | par | subnota | marco |
|----|-----------|-----|-----|---------|-------|
| n01 | Estoy dispuesto a servir a mi país aunque me toque la parte más difícil. 🎖 | POS | n02 | sirve aunque cueste | vocación de servicio |
| n02 | Serviría a mi país solo si a cambio recibo algún reconocimiento. 🎖 | NEG | n01 | servicio condicionado | servicio por reconocimiento |
| n03 | Cuando algo anda mal en mi entorno, hago mi parte sin esperar a que otro lo resuelva. | POS | n04 | hace su parte | responsabilidad activa |
| n04 | Los problemas de la sociedad que los resuelva quien tenga esa obligación. | NEG | n03 | se desentiende | desentendimiento |
| n05 | Me siento parte de mi país, y eso pesa en cómo me comporto. 🎖 | POS | n06 | pertenencia que guía la conducta | pertenencia practicada |
| n06 | El país al que pertenezco no cambia en nada lo que hago. 🎖 | NEG | n05 | desvinculación | desvinculación |
| n07 | Me importa conocer la historia y las tradiciones de mi país. 🎖 | POS | n08 | valora su origen | identidad nacional |
| n08 | La historia de mi país me da lo mismo. 🎖 | NEG | n07 | desarraigo | desarraigo |
| n09 | El respeto a mi país se ve en cómo actúo cada día, no en lo que digo de él. 🎖 | POS | n10 | lo demuestra en la conducta | patriotismo practicado |
| n10 | Presumir a mi país cuando toca ya demuestra que lo quiero. 🎖 | NEG | n09 | lo reduce al discurso | patriotismo simbólico (cluster) |
| n11 | Cuido cómo me porto cuando represento a mi país frente a otros. 🎖 | POS | n12 | cuida la imagen que proyecta | representación digna |
| n12 | Cómo me vean por fuera no tiene nada que ver con mi país. 🎖 | NEG | n11 | desliga su conducta del país | desentendimiento de la representación |
| n13 | Jamás he sentido flojera de cumplir con algo que le sirva a mi país. 🎖 | trampa-L (V) | — | "nunca/jamás" → V delata deseabilidad | trampa-L |

### Lote 2 — Servicio y Pertenencia (resto) (15) · aprobado 2026-08-06

| # | enunciado | pol | par | subnota | marco |
|----|-----------|-----|-----|---------|-------|
| n14 | Me preparo desde ahora para servir mejor a mi país el día de mañana. 🎖 | POS | n15 | se forma para servir | preparación para el servicio |
| n15 | Prepararme hoy para servir al país no vale el esfuerzo. 🎖 | NEG | n14 | desdeña prepararse | desdén por la preparación |
| n16 | Estoy dispuesto a responder cuando mi país lo necesite, aunque no me toque a mí. 🎖 | POS | n17 | disponible aunque no le toque | disponibilidad |
| n17 | Solo respondo cuando el problema me afecta a mí. | NEG | n16 | interés propio | interés propio |
| n18 | Cuando hace falta, pongo el bien de todos por encima de mi conveniencia. | POS | n19 | antepone el bien común | bien común |
| n19 | Primero mi conveniencia; lo demás que se acomode. | NEG | n18 | conveniencia propia | conveniencia propia |
| n20 | Mantengo una actitud de servicio en el día a día, no solo cuando me lo piden. | POS | n21 | servicio sostenido | servicio sostenido |
| n21 | Prefiero mantenerme al margen de cualquier actividad de servicio. | NEG | n20 | se aparta del servicio | evitación del servicio |
| n22 | Me llena de orgullo lo que mi país logra en conjunto. 🎖 | POS | n23 | orgullo por lo colectivo | pertenencia orgullosa |
| n23 | Los logros de mi país no me provocan nada. 🎖 | NEG | n22 | indiferente al logro común | desapego |
| n24 | Ser de mi país es algo que llevo con orgullo. 🎖 | POS | n25 | pertenencia con orgullo | identidad nacional |
| n25 | Me da lo mismo ser de un país que de otro. 🎖 | NEG | n24 | la pertenencia le es indiferente | identidad indiferente |
| n26 | Respeto los símbolos de mi país porque nos identifican a todos. 🎖 | POS | n27 | símbolo como identidad compartida | símbolo como identidad |
| n27 | Los símbolos de mi país me son indiferentes. 🎖 | NEG | n26 | indiferente al símbolo | desapego simbólico |
| n28 | No tengo nada que corregir en la forma en que sirvo a mi país. 🎖 | trampa-K (V) | — | se declara sin defecto | trampa-K (defensividad) |

## Historial de revisiones

- **v3-semilla** (2026-08-04) — Eje creado por desdoblamiento del eje 28 (fusión
  T27+T28). Hereda los 10 reactivos de país (09, 10, 11, 12, 13, 14, 22, 23, 58, 59
  del eje 28 = 5 pares) y el cluster "patriotismo simbólico". Pendiente: diseñar ~75
  reactivos para llegar a 85, con numeración final. Doctrina de omisión de crítica
  al país conservada (par 44/45 y reactivo 73 del eje 28 no se recuperan).
