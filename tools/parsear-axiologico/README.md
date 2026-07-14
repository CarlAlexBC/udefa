# Parser del examen axiológico (todos los simuladores)

Script Python que procesa **los 4 simuladores** disponibles del examen
axiológico, deduplica y genera un JSON consolidado listo para cargar via
`POST /reactivos/masivo`.

## Fuentes procesadas

Los 4 docx en `AXIOLÓGICO/`:

- `SIMULADOR AXIOLÓGICO DFPT.docx`
- `SIMULADOR DEL EXAMEN AXIOLÓGICO V1.0.docx`
- `SIMULADOR DEL EXAMEN AXIOLÓGICO V2.0.docx`
- `SIMULADOR DEL EXAMEN AXIOLÓGICO V3.0.docx`

Cada uno tiene 39 reactivos únicos (variaciones del examen). Al combinarlos y
deduplicar por enunciado normalizado, sale un pool de **155 reactivos únicos**
(de 156 raw, 1 duplicado detectado).

## Cómo usarlo

```bash
cd tools/parsear-axiologico
py parsear.py
```

Genera `output/reactivos_bloque7_axiologico.json` con 155 reactivos.

## Estructura del reactivo

```json
{
  "bloqueId": 7,
  "enunciado": "Para esta persona el amor por su país influye en sus decisiones.",
  "opciones": [
    "Me parezco totalmente",
    "Me parezco mucho",
    "Me parezco más o menos",
    "Me parezco poco",
    "No me parezco nada"
  ],
  "tipo": "escala_likert",
  "respuestaCorrecta": null,
  "tema": "valores_militares",
  "polaridad": "POSITIVA"
}
```

- **Escala Likert 5 puntos** (a diferencia de personalidad que usa 4).
- **`respuestaCorrecta: null`**: no se califica binario.
- **`tema: "valores_militares"`**: uniforme, todos evalúan el mismo constructo.
- **`polaridad: "POSITIVA"` en los 155**: todas afirmaciones alineadas al perfil
  militar; ninguna invertida.

## Detalles del parser

- Detecta cualquier línea que empiece con `"Para esta persona"` (con o sin
  número prefijo). Los docx tienen bug donde algunos reactivos pierden su
  número — el parser los captura igual.
- Excluye el reactivo del ejemplo de las instrucciones (aparece en los 4 docs
  con texto "lealtad hacia su país está por encima").
- Deduplica normalizando: lowercase + trim + strip puntuación final.

## En producción

Al cargar los 155 reactivos, `armarExamen` para el examen axiológico
(`REACTIVOS_POR_BLOQUE_POR_TIPO['axiologico'] = 39`) selecciona 39 aleatorios
por intento. Cada aspirante ve un subset distinto — máxima variedad entre
intentos repetidos.
