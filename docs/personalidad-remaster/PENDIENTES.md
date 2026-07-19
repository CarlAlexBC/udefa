# Pendientes del banco remasterizado

Estado al 18 de julio de 2026. Este archivo existe para que nada de lo abierto
se pierda entre sesiones.

---

## Decisiones que le tocan a Carlo

### 1. Protocolo de los gatillos CRÍTICO — decidido, a medio implementar

**Carlo confirmó el 18 de julio de 2026** que el protocolo válido es el que ya
estaba escrito en `01-suicidio-sentido-vida.md`: card de severidad `alerta`,
mensaje empático no patologizante, SAPTEL 55 5259-8121, Línea de la Vida
800-290-0024, 911 opción salud mental, y CTA al §4.6.1. Sin notificar a nadie
y sin invalidar el examen.

Antes de esto, `esCritico` se escribía en la base pero **no lo leía nadie**: un
aspirante que contestaba que sí a los gatillos no recibía absolutamente nada.

**Hecho —** `detectarSenalesCriticas()` en `intentos.service.ts`, con 11 tests
en `intentos.service.spec.ts`. Devuelve `nivel` (`alerta_maxima` / `alerta` /
`ninguna`), `senalesCrisis`, `combinacionEvaluable` y `hallazgosPorTema`.

**Hecho —** `components/resultados/AlertaCriticaCard.tsx`, montada arriba de
todo en el panel. No es una `DiagnosticoCard`: aquélla califica y ofrece
estudiar, ésta acompaña. Va en latón y no en el rojo de `destructive`, con los
tres teléfonos antes que el texto.

**Falta —** dos cosas, ninguna bloqueante:

1. El anchor `#alertas-criticas` no existe en `4.6.1-manejo-emocional.md`. La
   card linkea a la sección a secas. Cuando se escriba esa ampliación (Tanda 3:
   marco Columbia SSRS, "cuándo pedir ayuda", desestigmatización), se le añade.
2. **Nunca se probó de punta a punta.** La card se verificó aislada y el
   backend con tests, pero el camino completo —examen real, respuesta que
   dispara, panel que la pinta— no se ha recorrido nunca, porque el endpoint
   pide sesión iniciada. Es la misma deuda que ya estaba anotada abajo.

#### Los 88 críticos no son la misma cosa

Al implementarlo salió que la etiqueta cubre dos cosas distintas:

| Ejes | Qué significa un "sí" | Recursos de crisis |
|---|---|---|
| 1 y 2 | riesgo sobre la propia vida | sí |
| los demás | hallazgo fuerte de conducta | no |

En el eje 19 un crítico es *"En este momento estoy sosteniendo una mentira que
me conviene"*. Si el protocolo se disparara con `esCritico` a secas, a esa
persona le saldría el número de SAPTEL. Además de absurdo, desgasta la alerta
para quien sí la necesita.

**El eje 2 lo decidió Carlo**: sus cinco críticos son percepción de ser una
carga (*"si desaparezco un tiempo, casi nadie lo notaría"*), que en el modelo
Joiner pesa igual que los del eje 1. Vive en la constante
`EJES_PROTOCOLO_CRISIS` — cambiarlo es una línea.

Queda abierto si el **eje 5** debería entrar: su `#25` es autolesión
(*"me insulto mentalmente o me golpeo"*) y hoy cuenta como hallazgo de
conducta, no como crisis.

### 2. Umbral del cluster MMPI-K global

El cluster llegó a **30 dominios** (un reactivo 74 por eje). El umbral vigente
es ≥8 Sí, que se fijó cuando eran 10-11 dominios y hoy quedó laxo.

Opciones: subirlo a ≥12, o convertirlo en proporción (≥40% de los dominios
presentes en el examen). Lo segundo es más robusto porque el examen no
necesariamente incluye los 30.

### 3. Autoconocimiento como eje 30

Cuatro trampas quedaron sin receptor porque apuntan a un eje que nunca se
escribió: **75 e12, 75 e13, 75 e14 y 75 e16**. Es una propuesta del asistente,
no de la taxonomía original de Carlo.

- Si se escribe el eje, esas cuatro cierran.
- Si no, hay que reasignarlas a otro eje o retirarlas.

### 4. Los 6 reactivos `DESC` de extroversión

Recomendación del asistente: que **no puntúen**. Ya están marcados con
`noPuntua: true` en la base. Si se suman al puntaje, el examen empieza a premiar
la extroversión y descalifica perfiles reservados que en contexto castrense
funcionan bien.

### 5. El bug de temas prioritarios en el banco v1

Los slugs `suicidio`, `adicciones` y `corrupcion` tienen peso 3 en
`TemaPrioridad` pero ningún reactivo del banco viejo los usa (usa
`suicidio_y_sentido_de_vida`, `consumo_de_sustancias`,
`corrupcion_y_encubrimiento`).

Quedó **resuelto para el banco remaster**, que usa los slugs cortos. Para v1
sigue roto. Si v1 va a servir solo como práctica, quizá no vale la pena
arreglarlo.

---

## Deuda técnica conocida

### crossRef normalizado — resuelto el 18 de julio de 2026

**Este apartado decía tres cosas equivocadas. Quedan corregidas abajo.**

El diagnóstico anterior era que había tres notaciones escritas en momentos
distintos. No era eso. La columna mezcla **dos direcciones**:

- **56 receptores** — dicen `receptor cross 45 e4` en la subnota. Apuntan hacia
  atrás, con número y eje exactos.
- **70 emisores** — trampas que dicen `CROSS ↔ Confianza (T32)`. Apuntan hacia
  adelante, por nombre de tema.

Los nombres no hubo que mapearlos a mano: **58 de los 70 emisores ya estaban
nombrados por su receptor**, así que invertir esos enlaces los resolvió solos.
`Confianza (T32) → eje 20` y `Bloque 40 → eje 29` salieron por ahí, sin tabla.

Formato único ya escrito en la base:

| Valor | Significa |
|---|---|
| `recibe:17:75,21:75,24:44` | recibe de esas tres emisoras |
| `emite:20:36` | apunta a ese reactivo |
| `emite:15` | apunta al eje, sin reactivo concreto |
| `pendiente:<texto>` | sin resolver, conserva el original |

La dirección **no** se puede inferir de la polaridad: `e5#40` y `e5#43` son
emisores y son NEG, no TRAM.

Los tres errores que tenía este documento:

1. **`3 emisoras` no era basura.** Son `e25#40` y `e28#36`, y son receptores: su
   subnota traía `receptor cross 75 e17 + 75 e21 + 44 e24`. Era un bug del
   importador — el patrón `CROSS ↔` corría antes que `receptor cross` y se
   quedaba con el texto del marco. Corregido.
2. **La de `motivación` no había que retirarla.** Es `e1#57`, y aunque declara el
   eje 8 descartado, `e10#38` la reclama. Resuelve a `emite:10:38`.
3. **Faltaban 4 renglones descriptivos** que usan "cross" como adjetivo y no son
   referencias: `e9#11`, `e9#22`, `e10#89`, `e12#70`. El importador ya los ignora.

**Quedan 8 en `pendiente:`, no 6:**

| Reactivo | Destino declarado | Por qué sigue abierto |
|---|---|---|
| `e5#75` | valores | ¿eje 28 o 29? |
| `e6#45` | valores/responsabilidad | ¿28, 29 o 18? |
| `e6#75` | igualdad/autocuidado | autocuidado es el 14; "igualdad" no tiene eje |
| `e14#44` | Tolerancia al estrés / Resiliencia | son dos ejes, 23 y 24 — ¿ambos? |
| `e12#75` `e13#75` `e14#75` `e16#75` | Autoconocimiento | depende de la decisión 3 |

La Fase 5 puede saltarlos sin romperse: van con prefijo `pendiente:`.

### Cuarta regla de muestreo, pendiente

Hoy el muestreo garantiza que los **pares y anclas** viajen completos al examen.
No garantiza que la **emisora de una trampa cross y su receptor** caigan juntos:
eso solo pasa cuando el azar los junta.

Se dejó fuera a propósito de la Fase 3 porque encarece el muestreo y solo afecta
a 126 reactivos. Corresponde a la Fase 5, cuando el analizador ya sepa qué hacer
con los cruces.

### Verificación de punta a punta pendiente

El muestreo por unidades se validó con 200 exámenes simulados sobre datos
reales, y el código está en el servidor. Falta probar el endpoint por HTTP con
una sesión iniciada.

---

## Estado de las fases

| Fase | Qué es | Estado |
|---|---|---|
| 1 | Esquema y migración | hecha |
| 2 | Importador | hecha — 2,410 reactivos en la base |
| 3 | Muestreo por unidades | hecha — 0 huérfanos, 85.7 pares por examen |
| 4 | Escalas de validez L, K, F | hecha — con veredicto y bandera de idealización |
| 5 | Clusters, cruces cross-tema, banderas | **siguiente** — la más grande; ya desbloqueada, crossRef normalizado |
| 6 | Panel de resultados | parcial — la card de crisis ya está; las escalas L/K/F siguen sin mostrarse |

De la Fase 6 se adelantó solo la card de crisis, porque el backend ya detectaba
señales que el aspirante no veía. El resto del panel sigue pendiente: las
escalas de validez se devuelven desde la Fase 4 y el front ni siquiera las
tipa.

### Deuda latente de modo oscuro

`globals.css` define el bloque `.dark`, pero **nada en la app pone esa clase**:
no hay toggle ni provider, así que hoy es solo modo claro. Al forzarla a mano,
`bg-card` se queda en blanco y el texto crema encima resulta ilegible. Afecta a
las 10 pantallas que usan `bg-card`, no a una sola. Cuando se meta el toggle,
hay que revisar cómo resuelve `--color-card` en Tailwind 4.

### Limitación conocida de la escala F

El banco tiene solo **27 trampas F** de 2,410 reactivos. Un examen de 256 recibe
alrededor de **3**, así que el porcentaje de F queda muy grueso: los valores
posibles son prácticamente 0%, 33%, 66% o 100%.

Dos salidas, ninguna urgente:
- Garantizar un mínimo de trampas F en el muestreo (toca `examenes.service.ts`).
- Escribir más trampas F repartidas por los ejes.

Mientras tanto, F sirve para detectar el caso extremo — contestó sin leer — pero
no para graduar.

---

## Bancos en la base

| Banco | Reactivos | Uso |
|---|---|---|
| `remaster` | 2,410 | diagnóstico — es lo que sirve el examen |
| `v1` | 3,216 | fuera del diagnóstico; destino acordado: set de práctica |

El banco v1 incluye también los reactivos de psicométrico y axiológico, que
viven en la misma tabla. El filtro por banco solo aplica a personalidad.
