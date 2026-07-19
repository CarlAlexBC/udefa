# Pendientes del banco remasterizado

Estado al 18 de julio de 2026. Este archivo existe para que nada de lo abierto
se pierda entre sesiones.

---

## Decisiones que le tocan a Carlo

### 1. Protocolo de los gatillos CRÍTICO — **urgente**

El banco tiene **88 reactivos marcados CRÍTICO**, incluidos los de ideación
suicida del eje 1 (por ejemplo: *"En algunos momentos he sentido que sería
mejor no existir"*).

**El examen de personalidad ya sirve el banco remasterizado**, así que un
aspirante puede encontrarse esos reactivos hoy. No hay nada definido sobre qué
pasa cuando alguien contesta que sí.

Hay que decidir, aunque sea en versión mínima:
- Qué ve el aspirante en el panel de resultados cuando hay críticos.
- Si se notifica a alguien, y a quién.
- A dónde se deriva (línea de apoyo, contacto institucional).

Detectar sin plan de respuesta está incompleto éticamente. Esta decisión no es
técnica y no la puede tomar el asistente.

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

### crossRef sin normalizar — bloquea la Fase 5

Los 126 valores de `crossRef` vienen en **tres notaciones distintas**, porque se
escribieron en momentos distintos del trabajo:

| Notación | Ejemplo | Cantidad |
|---|---|---|
| Numérica corta | `45 sub 3 e4` | 50 |
| Numérica larga | `45/75 eje 3 + 30 eje 2` | 4 |
| Por nombre de tema o número T | `Confianza (T32)`, `vínculos` | 72 |

La tercera existe porque en los ejes 1-7 el eje destino todavía no se había
escrito, así que se referenció por tema.

**Casi todas son resolubles** con una tabla `T-número → eje` y `nombre de tema →
eje`. Quedan sueltas seis:

- 1 apunta a `motivación` → el eje 8, **descartado por Carlo**. Hay que retirarla.
- 3 apuntan a `Autoconocimiento` → depende de la decisión 3 de arriba.
- 2 dicen `3 emisoras` → no son referencias, es texto que la extracción capturó
  mal al importar.

Antes de la Fase 5 hay que normalizar todo a un formato único (`eje:número`) y
resolver esas seis.

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
| 4 | Escalas de validez L, K, F | **siguiente** |
| 5 | Clusters, cruces cross-tema, banderas | pendiente — la más grande |
| 6 | Panel de resultados | pendiente |

---

## Bancos en la base

| Banco | Reactivos | Uso |
|---|---|---|
| `remaster` | 2,410 | diagnóstico — es lo que sirve el examen |
| `v1` | 3,216 | fuera del diagnóstico; destino acordado: set de práctica |

El banco v1 incluye también los reactivos de psicométrico y axiológico, que
viven en la misma tabla. El filtro por banco solo aplica a personalidad.
