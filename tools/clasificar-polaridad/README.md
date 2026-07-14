# Clasificador de polaridad de reactivos de personalidad

Script Node que asigna `polaridad` (POSITIVA | NEGATIVA) a los reactivos del
bloque 6 (personalidad) via heurística de patrones semánticos.

## Cómo usarlo

```bash
node tools/clasificar-polaridad/clasificar.js
```

Lee todos los reactivos del bloque 6, aplica la heurística, y actualiza la BD
en dos `updateMany` batch.

## Cómo funciona la heurística

Una lista de ~80 patrones regex que identifican **afirmaciones NEGATIVAS**:

- **Verbos de pérdida:** `pierdo`, `abandono`, `olvido`, `rendirme`, `fracaso`.
- **Dificultad:** `me cuesta`, `me resulta difícil`, `carecen`.
- **Reactivo/pasivo:** `me hace(n)`, `algunas situaciones`.
- **Impulsividad:** `actúo sin`, `prefiero actuar rápidamente`, `me dejo llevar`.
- **Cambio inestable:** `cambio frecuentemente`, `modifico fácilmente`, `cambio según`.
- **Externo-dirigido:** `dependiendo únicamente`, `según las personas`, `sigo la mayoría`.
- **Evasión:** `evito`, `considero que otros deben`, `culpo a otros`.
- **Deshonestidad:** `miento`, `engaño`, `manipular`, `oculto la verdad`.
- **Selfish:** `beneficios personales`, `para mi conveniencia`, `antepongo mis intereses`.
- **Emotion-driven:** `mis emociones determinan`, `impulsivo`, `rencor`, `venganza`.

Si el reactivo matchea al menos un patrón → `NEGATIVA`.
Si no matchea nada → `POSITIVA` (default optimista).

## Precisión y limitaciones honestas

**Resultado actual:** 77% POSITIVA, 23% NEGATIVA.

**Realidad:** en un test psicológico bien diseñado se espera ~50/50 de
polaridad. Nuestra heurística **sub-detecta negativas** porque hay muchos
reactivos donde la polaridad negativa está en el marco semántico completo, no
en keywords aisladas.

**Ejemplos sub-detectados:**
- "Presento una imagen completamente ideal ante los demás." → deseabilidad
  social (bad) pero mi heurística no lo caza.
- "Mi rendimiento depende únicamente del reconocimiento externo." → locus
  externo (bad) — sí lo caza por "únicamente" pero muchos similares no.

## Cuándo refinar

La polaridad realmente importa cuando se implemente la feature de **"detección
de contradicciones internas"** que menciona el documento del proyecto —
reactivos del mismo tema con polaridad opuesta que el aspirante respondió de
forma incoherente.

Recomendación: cuando esa feature se implemente, refinar la clasificación con
LLM (Claude API o similar) que puede analizar semántica completa, no solo
keywords. Precisión esperada: ~95%+.

## Casos residuales

Notado: hay ~1 reactivo espurio en el pool (`"Suicidio y sentido de vida 80/80"`)
que se coló del header del PDF fuente. Auditoría de contenido pendiente en
sesión futura.
