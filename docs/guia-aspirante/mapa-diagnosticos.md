# Mapa de vinculación — Diagnóstico del Panel ↔ Sección de la Guía

> Este documento cruza cada diagnóstico que el panel de resultados emite hoy
> contra la sección de la Guía del Aspirante que debe resolverlo. Es la fuente
> de verdad para el sistema de recomendaciones "Aprender a mejorar" que se
> implementará al digitalizar la Guía (Fase 4 del plan).
>
> Su otro uso: dirigir la escritura de las tandas 2 y 3 de sanación con
> conciencia de qué diagnóstico va a resolver cada sub-sección.

---

## 1. Convención

Cada entrada del mapa tiene:

- **Diagnóstico:** el título que emite hoy el panel (o el que emitirá).
- **Código técnico:** la función/campo donde vive en el código.
- **Severidad:** `atencion` (rojo), `revisar` (ámbar), `fortaleza` (verde).
- **Sección de destino:** identificador de la sección de la Guía a la que debe
  llevar el CTA. Formato: `§X.Y` o `§X.Y.Z`.
- **Anchor:** slug dentro del archivo `.md` de la sección — se generará a
  partir del h2/h3 correspondiente al digitalizar.
- **Estado:** ✅ escrita · ⏳ pendiente · ✳️ nueva (no existe en el docx).

Las cards de **fortaleza** no llevan CTA — no hay nada que mejorar. Solo las
severidades `atencion` y `revisar` reciben el botón "Aprender a mejorar".

---

## 2. Índice completo de la Guía (99 páginas, docx maestro)

| Sección | Título | Estado |
|---|---|---|
| Introducción | Propósito, importancia, enfoque, uso del material | 🟢 En docx (Tanda 3: verificar) |
| **§1** | **Contexto general del proceso de selección** | 🟢 En docx |
| §1.1 | Naturaleza del proceso de admisión | 🟢 |
| §1.2 | Importancia del examen psicológico | 🟢 |
| §1.3 | Qué se evalúa realmente en un aspirante | 🟢 |
| §1.4 | Errores comunes al prepararse | 🟢 |
| **§2** | **Cómo funciona el sistema psicológico** | 🟢 En docx |
| §2.1 | Estructura general del examen psicológico | 🟢 |
| §2.2 | División por fases | 🟢 |
| §2.3 | Objetivo real de cada fase | 🟢 |
| §2.4 | Relación entre las tres evaluaciones | 🟢 |
| §2.5 | Qué busca detectar el sistema | 🟢 |
| **§3** | **Examen psicométrico** | Parcial |
| §3.1 | Estructura del examen psicométrico | 🟢 En docx |
| §3.2 | Administración del tiempo | 🟢 En docx |
| §3.3 | Bloque 1: Analogías | ✅ [`3.3-analogias.md`](./3.3-analogias.md) |
| §3.4 | Bloque 2: Sinónimos y antónimos | ✅ [`3.4-sinonimos-antonimos.md`](./3.4-sinonimos-antonimos.md) |
| §3.5 | Bloque 3: Razonamiento lógico-matemático | ✅ [`3.5-razonamiento-logico-matematico.md`](./3.5-razonamiento-logico-matematico.md) |
| §3.6 | Bloque 4: Razonamiento abstracto | ✅ [`3.6-razonamiento-abstracto.md`](./3.6-razonamiento-abstracto.md) |
| §3.7 | Estrategias reales de resolución bajo presión | 🟢 En docx |
| §3.8 | Errores comunes y cómo evitarlos | 🟢 En docx |
| **§4** | **Examen de personalidad** | Parcial |
| §4.1 | Naturaleza del examen de personalidad | 🟢 En docx |
| §4.2 | Qué evalúa realmente este examen | 🟢 |
| §4.3 | Cómo interpretar los reactivos correctamente | 🟢 |
| §4.4 | Funcionamiento del sistema de detección de inconsistencias | 🟢 |
| §4.5 | Importancia de la coherencia en respuestas prolongadas | 🟢 |
| §4.6.1 | Manejo emocional y control de impulsos | ✅ [`4.6.1-manejo-emocional.md`](./4.6.1-manejo-emocional.md) |
| §4.6.2 | Estrés, presión y toma de decisiones | ✅ [`4.6.2-estres-toma-decisiones.md`](./4.6.2-estres-toma-decisiones.md) |
| §4.6.3 | Influenciabilidad y manejo de la crítica | ✅ [`4.6.3-influenciabilidad-critica.md`](./4.6.3-influenciabilidad-critica.md) |
| §4.6.4 | Liderazgo vs autoritarismo | ✅ [`4.6.4-liderazgo-autoritarismo.md`](./4.6.4-liderazgo-autoritarismo.md) |
| §4.6.5 | Valores personales y principios éticos | ✅ [`4.6.5-valores-personales-etica.md`](./4.6.5-valores-personales-etica.md) |
| §4.6.6 | Conductas de riesgo (adicciones, impulsividad) | ✅ [`4.6.6-conductas-riesgo.md`](./4.6.6-conductas-riesgo.md) |
| §4.6.7 | Relaciones interpersonales y entorno familiar | ✅ [`4.6.7-relaciones-interpersonales.md`](./4.6.7-relaciones-interpersonales.md) |
| §4.6.8 | Adaptabilidad, disciplina y seguimiento de órdenes | ✅ [`4.6.8-adaptabilidad-disciplina.md`](./4.6.8-adaptabilidad-disciplina.md) |
| §4.7 | Perfil que se busca vs perfil de riesgo | 🟢 En docx |
| §4.8 | Cómo responder correctamente el examen | 🟢 En docx |
| §4.9 | Errores críticos que provocan eliminación | 🟢 En docx |
| **§5** | **Examen axiológico** | Parcial |
| §5.1 | Comprensión del perfil indirecto | 🟢 En docx |
| §5.2 | Finalidad real del examen axiológico | 🟢 En docx |
| §5.3 | Los 8 valores axiológicos (Patriotismo, Lealtad, Honor, Disciplina, Espíritu de cuerpo, Liderazgo, Manejo de recursos, Autocuidado) | ✅ [`5.3-ocho-valores-axiologicos.md`](./5.3-ocho-valores-axiologicos.md) |
| §5.4 | Perfil buscado vs perfil de riesgo | 🟢 En docx |
| §5.5 | Cómo responder correctamente | 🟢 En docx |
| §5.6 | Errores comunes | 🟢 En docx |
| §5.7 | Relación directa con personalidad | ✅ [`5.7-relacion-axiologico-personalidad.md`](./5.7-relacion-axiologico-personalidad.md) |
| **§6** | **Integración total del sistema psicológico** | 🟢 En docx |
| §6.1 | Comprender el sistema como un todo | 🟢 |
| §6.2 | Relación entre capacidad, conducta y valores | 🟢 |
| §6.3 | Cómo el sistema detecta incongruencias | 🟢 |
| §6.4 | Principio de coherencia total | 🟢 |
| §6.5 | Error crítico: fragmentar el perfil | 🟢 |
| §6.6 | Estrategia de preparación integral | 🟢 |
| §6.7 | Evaluación final del sistema | 🟢 |
| §6.8 | Interpretación global del perfil | 🟢 |
| **§7** | **Estrategia final del aspirante (día del examen)** | ✅ [`7-estrategia-final-ampliada.md`](./7-estrategia-final-ampliada.md) + 🟢 docx |
| §7.1 | Preparación mental previa | 🟢 |
| §7.2 | Inicio del examen | 🟢 |
| §7.3 | Estrategia durante el psicométrico | 🟢 |
| §7.4 | Transición al examen de personalidad | 🟢 |
| §7.5 | Manejo del examen de personalidad | 🟢 |
| §7.6 | Enfrentamiento del examen axiológico | 🟢 |
| §7.7 | Manejo del cansancio | 🟢 |
| §7.8 | Últimos reactivos y cierre | 🟢 |
| §7.9 | Mentalidad del aspirante preparado | 🟢 |
| §7.10 | Ejecución final | 🟢 |
| **§8** | **Conclusión y cierre del manual** | 🟢 En docx |

**Secciones ✳️ nuevas (escritas en Tanda 2 para cubrir huecos del panel):**

- ✅ [`8.6-estilo-respuesta-sesgos.md`](./8.6-estilo-respuesta-sesgos.md) — cubre Ps1/Ps2/Ps3 (aquiescencia, negativismo, deseabilidad).
- ✅ [`8.7-ritmo-autoevaluacion.md`](./8.7-ritmo-autoevaluacion.md) — cubre Ps6/Ps7/Ps8 (fatiga, ritmo variable, respuestas <3s).

---

## 3. Mapa de diagnósticos — Panel psicométrico (calificable)

Código: `calcularDiagnosticos()` en [`apps/web/src/app/inicio/resultados/[intentoId]/page.tsx:495`](../../apps/web/src/app/inicio/resultados/[intentoId]/page.tsx)

| # | Diagnóstico | Trigger | Severidad | Sección(es) destino | Anchor sugerido | Estado |
|---|---|---|---|---|---|---|
| P1 | Bajaste el ritmo X% en la segunda mitad | `patronFatigaDetectado === true` | atencion | §3.2 Administración del tiempo · §7.7 Manejo del cansancio | `#patron-fatiga` | 🟢🟢 |
| P2 | Bloque Analogías: X% de aciertos (<50%) | `porBloque[Analogías].porcentaje < 50` | revisar | §3.3 Bloque 1: Analogías | `#estrategia-paso-a-paso` | ⏳ (Tanda 3 verificar) |
| P3 | Bloque Sinónimos y Antónimos: X% (<50%) | `porBloque[Sinónimos].porcentaje < 50` | revisar | §3.4 Sinónimos y antónimos | `#estrategia-paso-a-paso` · `#errores-comunes-especificos` | ✅ |
| P4 | Bloque Razonamiento Lógico: X% (<50%) | `porBloque[Lógico].porcentaje < 50` | revisar | §3.5 Razonamiento lógico-matemático | `#estrategia-paso-a-paso` · `#errores-comunes-especificos` | ✅ |
| P5 | Bloque Razonamiento Abstracto: X% (<50%) | `porBloque[Abstracto].porcentaje < 50` | revisar | §3.6 Razonamiento abstracto | `#estrategia-paso-a-paso` · `#errores-comunes-especificos` | ✅ |
| P6 | Excelente desempeño global (≥80%) | `porcentajeAciertos >= 80` | fortaleza | — (sin CTA) | — | — |

**Anchor global para todo el bloque psicométrico** cuando el panel muestra
tendencia acelerando/desacelerando pero no cruza umbral de fatiga:
`§3.2#administracion-del-tiempo`.

---

## 4. Mapa de diagnósticos — Panel de personalidad (no calificable)

Código: `calcularDiagnosticosAutoevaluacion()` en el mismo archivo, línea 820.

### 4.1 Sesgos de respuesta

| # | Diagnóstico | Trigger | Severidad | Sección(es) destino | Anchor | Estado |
|---|---|---|---|---|---|---|
| Ps1 | Perfil idealizado: X% de respuestas alineadas al lado positivo | `sesgo.perfilIdealizado` (índiceDeseabilidad > 90) | atencion | §8.6 Estilo de respuesta · §5.7 · §4.8 | `#deseabilidad-social-perfil-idealizado` | ✅ + ✅ + 🟢 |
| Ps2 | Sesgo de aquiescencia: X% Sí | `sesgo.tieneSesgoAquiescencia` (%Sí > 75) | revisar | §8.6 Estilo de respuesta · §4.8 | `#sesgo-de-aquiescencia-aquiescencia` | ✅ + 🟢 |
| Ps3 | Sesgo de negativismo: X% No | `sesgo.tieneSesgoNegativismo` (%No > 75) | revisar | §8.6 · §4.8 | `#sesgo-de-negativismo-contra-aquiescencia` | ✅ + 🟢 |

### 4.2 Contradicciones internas por tema

| # | Diagnóstico | Trigger | Severidad | Sección(es) destino | Anchor | Estado |
|---|---|---|---|---|---|---|
| Ps4 | Se detectaron N pares contradictorios | `totalContradicciones > 5` | atencion | §4.4 Detección de inconsistencias · §4.5 Coherencia prolongada | `#patron-contradicciones` | 🟢🟢 |
| Ps5 | N temas con inconsistencia detectada | `temasConInconsistencia.length > 0` | revisar | (según tema — ver tabla siguiente) | — | Depende |

**Sub-mapeo Ps5 — tema BD → §4.6.X** (los temas exactos de personalidad en la
BD son 38; los mapeos conocidos hasta hoy son los siguientes; los que falten
se documentan al toparlos):

| Tema en BD | Sección destino | Anchor | Estado |
|---|---|---|---|
| `manejo_emocional`, `control_impulsos`, `autoestima`, `autocontrol_general` | §4.6.1 Manejo emocional | `#perfiles-de-riesgo-tipicos` | ⏳ Tanda 3 |
| `estres`, `presion`, `tolerancia_frustracion`, `ansiedad`, `resiliencia` | §4.6.2 Estrés y toma de decisiones | `#estrategia-para-mejorar` | ✅ |
| `influencia_social`, `manejo_critica`, `dependencia_grupo` | §4.6.3 Influenciabilidad | `#perfiles-de-riesgo-tipicos` | 🟢 (docx — verificar) |
| `liderazgo`, `autoritarismo`, `manejo_autoridad` | §4.6.4 Liderazgo vs autoritarismo | — | 🟢 (docx — verificar) |
| `valores_personales`, `principios_eticos`, `honestidad`, `integridad` | §4.6.5 Valores personales | — | 🟢 (docx — verificar) |
| `conductas_riesgo`, `impulsividad`, `adicciones`, `toma_riesgos` | §4.6.6 Conductas de riesgo | `#perfiles-de-riesgo-tipicos` | ✅ |
| `relaciones_familiares`, `relaciones_interpersonales`, `cooperacion_trabajo_equipo`, `empatia` | §4.6.7 Relaciones interpersonales | `#perfiles-de-riesgo-tipicos` | ✅ |
| `adaptabilidad`, `disciplina`, `tolerancia_al_cambio`, `seguimiento_ordenes` | §4.6.8 Adaptabilidad y disciplina | `#estrategia-para-mejorar` | ⏳ Tanda 3 |
| `valores_militares` | §5.3 Los 8 valores + §5.7 Relación con personalidad | `#patriotismo`, `#lealtad`, etc. | ✅ + ✅ |
| `suicidio`, `sentido_vida` | §4.6.1 Manejo emocional (extendido) | `#alertas-criticas` | ⏳ Tanda 3 |

**Pendiente cuando arranque digitalización:** correr un query `SELECT DISTINCT tema FROM "Reactivo" WHERE examenId IN (2,3)` para verificar los 38 temas exactos y que ninguno quede sin mapeo.

### 4.3 Métricas temporales (personalidad)

| # | Diagnóstico | Trigger | Severidad | Sección destino | Anchor | Estado |
|---|---|---|---|---|---|---|
| Ps6 | Aceleraste tu ritmo X% en la segunda mitad | `patronFatigaDetectado === true` | atencion | §8.7 Ritmo autoevaluación · §7.5 | `#1-aceleracion-en-la-segunda-mitad-fatiga-o-apuro-final` | ✅ + 🟢 |
| Ps7 | Tu ritmo entre reactivos fue muy variable | `coeficienteVariacion >= 1` | revisar | §8.7 Ritmo autoevaluación · §7.5 | `#2-ritmo-muy-variable-bloqueo-en-temas-especificos` | ✅ + 🟢 |
| Ps8 | Tiempo promedio de <3s por reactivo | `promedio < 3000 && respondidos > 20` | atencion | §8.7 · §4.5 Coherencia prolongada · §7.5 | `#3-ritmo-demasiado-rapido-menos-de-3-segundos-por-reactivo` | ✅ + 🟢🟢 |

### 4.4 Fortalezas (sin CTA)

| # | Diagnóstico | Trigger | Severidad |
|---|---|---|---|
| Ps9 | Perfil coherente en todos los temas | `perfilCoherente === true` | fortaleza |
| Ps10 | Ritmo consistente | `tendencia === 'estable' && coefVar < 0.5` | fortaleza |

---

## 5. Mapa de diagnósticos — Panel axiológico (no calificable)

### 5.1 Coincidencia con perfil ideal (exclusivo del axiológico)

| # | Diagnóstico | Trigger | Severidad | Sección destino | Anchor | Estado |
|---|---|---|---|---|---|---|
| Ax1 | Coincidencia baja (X/100) con perfil militar ideal | `scoreCoincidenciaIdeal.etiqueta === 'baja'` | atencion | §5.3 Los 8 valores · §5.5 Cómo responder · §5.7 Relación con personalidad | `#patriotismo` (u otro valor específico) | ✅ + 🟢 + ✅ |
| Ax2 | Alta coincidencia con perfil militar (≥80) | `scoreCoincidenciaIdeal.etiqueta === 'alta'` | fortaleza | — (sin CTA) | — | — |
| Ax3 | Coincidencia media (60-79) | `etiqueta === 'media'` | revisar (nuevo — no emitido hoy) | §5.3 · §5.4 Perfil vs perfil de riesgo | `#como-responder-cuando-aparecen-reactivos-de-estos-temas` | ✅ + 🟢 |

### 5.2 Contradicciones internas del axiológico

Reutiliza el mecanismo Ps4 y Ps5 anteriores. El único tema del axiológico es
`valores_militares`, así que un `temasConInconsistencia` que lo incluya apunta
directo a §5.3 + §5.7 (mismo mapeo que Ps5 → valores_militares).

### 5.3 Métricas temporales (axiológico)

Idénticas a las de personalidad — reutiliza Ps6/Ps7/Ps8 con destino §7.6
(Enfrentamiento del examen axiológico) en lugar de §7.5.

---

## 6. Mapa de diagnósticos — Panel de sesión completa (agregado 3 fases)

Código: [`apps/web/src/app/inicio/sesion-resultados/[sesionId]/page.tsx`](../../apps/web/src/app/inicio/sesion-resultados/[sesionId]/page.tsx)

### 6.1 Distancia cross-examen (Personalidad ↔ Axiológico)

| # | Diagnóstico | Trigger | Severidad | Sección destino | Anchor | Estado |
|---|---|---|---|---|---|---|
| SC1 | Perfil divergente (distancia >30) | `distanciaCrossExamen.interpretacion === 'divergente'` | atencion (implícito) | §5.7 Relación axiológico-personalidad · §6.5 Error crítico: fragmentar el perfil | `#perfiles-de-riesgo-tipicos` · `#perfil-dual` | ✅ + 🟢 |
| SC2 | Perfil aceptable (distancia 15-30) | `interpretacion === 'aceptable'` | revisar (implícito) | §5.7 · §6.4 Principio de coherencia total | `#como-responder-correctamente` | ✅ + 🟢 |
| SC3 | Perfil coherente (distancia ≤15) | `interpretacion === 'coherente'` | fortaleza | — (sin CTA, felicitación) | — | — |

### 6.2 Agregados de sesión

| # | Diagnóstico | Trigger | Severidad | Sección destino | Anchor | Estado |
|---|---|---|---|---|---|---|
| SC4 | Contradicciones totales altas (>5 en resumen ejecutivo) | `sum(intentos.totalContradicciones) > 5` | atencion | §6.4 Principio de coherencia total · §6.5 Fragmentar el perfil | `#patron-contradicciones` | 🟢🟢 |
| SC5 | Coherencia global "Requiere revisión" | `!perfilGlobalCoherente` | atencion (implícito) | §6.1 Sistema como un todo · §6.4 | `#coherencia-global` | 🟢🟢 |

---

## 7. Huecos detectados y sobrantes

### Huecos (diagnóstico sin sección que lo resuelva bien)

1. **Sesgos de respuesta (Ps1, Ps2, Ps3).** §4.8 los toca lateralmente pero
   nada en la Guía enseña *técnicas específicas* para evitar aquiescencia,
   negativismo o deseabilidad social. Propuesta: **✳️ §8.6 Estilo de respuesta y
   sesgos** con sub-secciones para cada uno. Refleja marco Crowne-Marlowe (1960).
2. **Ritmo en autoevaluación (Ps6, Ps7, Ps8).** §7.5/§7.6 lo tocan como parte del
   día del examen, pero no hay un tratamiento dedicado al *problema de responder
   demasiado rápido en personalidad/axiológico* (que es distinto al problema de
   fatiga en un examen calificable). Propuesta: **✳️ §8.7 Ritmo y reflexión en
   autoevaluación**.
3. **Verificación de cobertura de temas de personalidad.** Los 38 temas de la
   BD deben coincidir con los 8 sub-temas de §4.6. Muchos temas de la BD son
   más granulares (`ansiedad`, `resiliencia`, `tolerancia_frustracion` todos
   viven bajo §4.6.2, y `manejo_emocional` es un paraguas de §4.6.1). Trabajo
   pendiente: al escribir cada §4.6.X, incluir un párrafo con los "sub-temas
   BD que cubre esta sección" para que el mapeo sea inequívoco.

### Sobrantes (secciones sin diagnóstico que las invoque)

Ninguna sección de la Guía es "sobrante" en sentido estricto — todas cubren
áreas del examen que tienen valor educativo. Pero algunas están sub-utilizadas
por el panel actual y podrían generar diagnósticos futuros:

- **§4.6.4 Liderazgo vs autoritarismo** — hoy la BD no distingue el tema
  explícitamente. Al refinar polaridad con LLM (pendiente #9 del roadmap),
  vale la pena tag reactivos de liderazgo para poder emitir diagnósticos.
- **§7.7 Manejo del cansancio** — solo se invoca desde P1 (fatiga en
  psicométrico). Podría también engancharse a diagnósticos futuros de
  duración total excesiva o intento abandonado.

---

## 8. CTA técnico — "Aprender a mejorar"

Decisión (2026-07-15): **botón dentro de cada `DiagnosticoCard`** con severidad
`atencion` o `revisar`. Las de `fortaleza` NO llevan CTA.

### Ubicación en el componente

En [`apps/web/src/app/inicio/resultados/[intentoId]/page.tsx`](../../apps/web/src/app/inicio/resultados/[intentoId]/page.tsx),
la función `DiagnosticoCard` recibirá un nuevo prop `guiaLink?: { seccion: string; anchor?: string }`
y renderizará un botón secundario debajo de la descripción cuando el prop esté presente.

### Formato del link

`/inicio/guia/{slug-de-seccion}#{anchor}`

Donde `{slug-de-seccion}` es el nombre del archivo `.md` sin extensión (por
ejemplo `3.4-sinonimos-antonimos`), y `{anchor}` es el slug del h2/h3 destino
generado automáticamente al digitalizar.

### Convención para asignar el link en el frontend

Cada diagnóstico deberá enriquecerse con su `guiaLink` correspondiente a esta
tabla al momento de emitirse. Ejemplo mínimo del cambio a `calcularDiagnosticos`:

```ts
if (data.metricasTemporales.patronFatigaDetectado) {
  out.push({
    severidad: 'atencion',
    titulo: `Bajaste el ritmo un ${pct}% en la segunda mitad.`,
    descripcion: '...',
    guiaLink: { seccion: '7-estrategia-final', anchor: 'manejo-del-cansancio' },
  })
}
```

Los slugs de sección definitivos se acuerdan al arrancar la Fase 4 de
digitalización, junto con el shape del router `/inicio/guia/[capitulo]/[seccion]`.

### Multi-target (una card, dos secciones)

Cuando un diagnóstico tenga dos o más secciones útiles (ej: Ps1 apunta a §4.8
+ §5.7 + ✳️ §8.6), el CTA principal apunta al **primer destino** y las
adicionales se listan como "También útil: [link]" debajo. El primer destino
siempre es el que trata el problema con mayor especificidad.

---

## 9. Cómo mantener este mapa vivo

- **Cuando se agregue un diagnóstico nuevo** al panel: registrarlo aquí
  antes de mergear el frontend. Sin entrada en el mapa, sin CTA.
- **Cuando se sanera una nueva sección** de la Guía: actualizar la columna
  "Estado" y los anchors si cambian.
- **Cuando se detecten temas nuevos en la BD**: agregarlos al sub-mapeo de
  Ps5.
- **Cuando llegue Fase 4 (digitalización)**: convertir los slugs propuestos
  aquí en las rutas reales del router y actualizar los CTAs del panel.

---

## 10. Resumen ejecutivo

- **20 diagnósticos únicos** identificados hoy en el panel (6 psicométrico + 10 personalidad + 2 axiológico + 5 sesión completa, con solapamientos).
- **13 diagnósticos requieren CTA** (severidad `atencion` o `revisar`); los otros 7 son fortalezas sin acción.
- **Cobertura por sección de la Guía (tras Tanda 3):**
  - ✅ **18 secciones sanadas en .md** cubren todos los diagnósticos con CTA con destino primario propio.
  - 🟢 Secciones del docx (Introducción, §1, §2, §3.1, §3.2, §3.7, §3.8, §4.1-§4.5, §4.7-§4.9, §5.1, §5.2, §5.4-§5.6, §6, §8) sirven como refuerzo secundario y como contenido no relacionado a diagnósticos específicos.
- **Todos los diagnósticos con CTA tienen ahora al menos un destino sanado en .md** — 0 diagnósticos huérfanos.
- **Trabajo restante para CTA operativo (Fase 4):** (a) digitalizar los .md como rutas navegables `/inicio/guia/[slug]`, (b) generar slugs anchor automáticamente desde h2/h3, (c) enriquecer `calcularDiagnosticos` con el campo `guiaLink`, (d) renderizar el botón "Aprender a mejorar" en `DiagnosticoCard`.
