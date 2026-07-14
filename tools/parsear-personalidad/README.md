# Parser del banco de reactivos de personalidad

Script Python que parsea el PDF de 114 páginas con los 2,850 reactivos de
personalidad de UDEFA y genera el JSON listo para cargar al backend via
`POST /reactivos/masivo`.

## Fuente

`REACTIVOS DE EXAMEN DE PERSONALIDAD PARA LA PLATAFORMA.pdf` — banco
profesional con 40 categorías de evaluación psicológica (temas 1-39 + bloque 40
de indicadores complementarios). Cada tema con su objetivo del constructo y sus
reactivos numerados. La ruta del PDF está hardcoded en el script.

## Cómo usarlo

```bash
cd tools/parsear-personalidad
py parsear.py
```

Genera `output/reactivos_bloque6_personalidad.json` con formato listo para
`POST /reactivos/masivo`.

## Estructura del reactivo generado

```json
{
  "bloqueId": 6,
  "enunciado": "Encuentro razones importantes para continuar esforzándome cada día.",
  "opciones": [
    "Totalmente en desacuerdo",
    "En desacuerdo",
    "De acuerdo",
    "Totalmente de acuerdo"
  ],
  "tipo": "escala_likert",
  "respuestaCorrecta": null,
  "tema": "suicidio_y_sentido_de_vida",
  "polaridad": null
}
```

- **`opciones`**: escala Likert de 4 puntos (fuerza al aspirante a inclinarse).
- **`respuestaCorrecta: null`**: personalidad no se califica.
- **`tema`**: constructo normalizado a snake_case ASCII.
- **`polaridad: null`**: por resolver en fase posterior (manual o vía LLM).

## Cobertura actual

- 2,829 reactivos parseados de 2,850 declarados (99.3%).
- 38 temas detectados de 40 (algunos saltos de numeración en el PDF).
- Los 21 reactivos no detectados son casos borde por saltos de página o
  formato irregular — auditoría manual pendiente.

## Pendiente

- Detección de polaridad (POSITIVA/NEGATIVA) por reactivo. La polaridad ES
  semántica del enunciado ("Encuentro razones..." vs "Pierdo motivación...").
  Opciones futuras:
  - Heurística por palabras clave (imprecisa pero rápida).
  - Revisión manual (lento pero preciso).
  - LLM local o API (equilibrio, pero costoso).
