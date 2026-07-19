# Estado del banco remasterizado

**Archivo generado — no lo edites a mano.** Lo escribe
`apps/backend/scripts/importar-remaster.ts` en cada corrida, a partir de los
`.md` de este directorio. Para regenerarlo:

```
npx ts-node scripts/importar-remaster.ts
```

Las decisiones abiertas y la deuda técnica viven en `PENDIENTES.md`, que sí
se escribe a mano porque no se puede derivar del código.

## Por eje

| eje | tema | total | POS | NEG | TRAM | DESC | crít | pares | cross |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | suicidio | 100 | 42 | 46 | 12 | 0 | 15 | 31 | 1 |
| 2 | depresion | 85 | 37 | 38 | 10 | 0 | 5 | 27 | 3 |
| 3 | ansiedad | 85 | 39 | 36 | 10 | 0 | 2 | 29 | 2 |
| 4 | manejo_emocional | 85 | 42 | 33 | 10 | 0 | 2 | 30 | 4 |
| 5 | control_ira | 85 | 38 | 37 | 10 | 0 | 8 | 26 | 4 |
| 6 | adicciones | 85 | 38 | 37 | 10 | 0 | 6 | 31 | 4 |
| 7 | autoestima | 85 | 39 | 36 | 10 | 0 | 4 | 27 | 2 |
| 9 | empatia | 85 | 43 | 31 | 11 | 0 | 1 | 29 | 2 |
| 10 | disciplina | 90 | 46 | 33 | 11 | 0 | 2 | 33 | 3 |
| 11 | liderazgo | 85 | 44 | 30 | 11 | 0 | 1 | 30 | 6 |
| 12 | corrupcion | 85 | 41 | 33 | 11 | 0 | 1 | 30 | 3 |
| 13 | liderazgo_autoritario | 85 | 42 | 32 | 11 | 0 | 4 | 32 | 5 |
| 14 | autocuidado | 85 | 42 | 32 | 11 | 0 | 3 | 32 | 7 |
| 15 | vinculos | 85 | 42 | 32 | 11 | 0 | 3 | 32 | 6 |
| 16 | lealtad | 85 | 42 | 32 | 11 | 0 | 3 | 32 | 6 |
| 17 | honor | 85 | 42 | 32 | 11 | 0 | 4 | 32 | 5 |
| 18 | responsabilidad | 85 | 42 | 32 | 11 | 0 | 2 | 32 | 4 |
| 19 | honestidad_integridad | 90 | 41 | 38 | 11 | 0 | 3 | 38 | 3 |
| 20 | confianza | 85 | 42 | 32 | 11 | 0 | 1 | 32 | 6 |
| 21 | autoridad_obediencia | 85 | 42 | 32 | 11 | 0 | 3 | 32 | 6 |
| 22 | adaptabilidad | 85 | 42 | 32 | 11 | 0 | 1 | 32 | 6 |
| 23 | estres_presion | 85 | 42 | 32 | 11 | 0 | 2 | 32 | 5 |
| 24 | resiliencia | 85 | 42 | 32 | 11 | 0 | 2 | 32 | 6 |
| 25 | influenciabilidad | 85 | 42 | 32 | 11 | 0 | 2 | 32 | 6 |
| 26 | sociabilidad | 85 | 38 | 32 | 9 | 6 | 1 | 35 | 5 |
| 27 | control_conductual | 85 | 42 | 32 | 11 | 0 | 2 | 32 | 5 |
| 28 | valores_grupo | 85 | 43 | 33 | 9 | 0 | 3 | 33 | 6 |
| 29 | valores_aplicados | 90 | 45 | 36 | 9 | 0 | 2 | 36 | 5 |
| | **TOTAL** | **2410** | 1162 | 945 | 297 | 6 | 88 | 881 | 126 |

## Trampas de validez

| tipo | cantidad |
|---|---:|
| L (Lie) | 114 |
| K (Defensiveness) | 156 |
| F (Infrequency) | 27 |

## Cruces cross-tema

| dirección | cantidad |
|---|---:|
| `recibe:` | 56 |
| `emite:` | 62 |
| `pendiente:` | 8 |

Sin resolver:

- `e5#75 → valores`
- `e6#45 → valores/responsabilidad`
- `e6#75 → igualdad/autocuidado`
- `e12#75 → Autoconocimiento`
- `e13#75 → autoconocimiento`
- `e14#44 → Tolerancia al estrés / Resiliencia`
- `e14#75 → Autoconocimiento`
- `e16#75 → Autoconocimiento`

## Validaciones

Sin problemas.

### Anclas detectadas (7)

Pares de la misma polaridad. No son error: miden un criterio en ventana
temporal y el analizador debe tratarlos como ancla, no como par de coherencia.

- eje 1 #68 ↔ 69: ancla (ambos NEGATIVA), no par de coherencia
- eje 2 #34 ↔ 35: ancla (ambos NEGATIVA), no par de coherencia
- eje 3 #34 ↔ 35: ancla (ambos NEGATIVA), no par de coherencia
- eje 3 #43 ↔ 44: ancla (ambos NEGATIVA), no par de coherencia
- eje 6 #38 ↔ 39: ancla (ambos NEGATIVA), no par de coherencia
- eje 6 #40 ↔ 41: ancla (ambos NEGATIVA), no par de coherencia
- eje 6 #43 ↔ 44: ancla (ambos NEGATIVA), no par de coherencia
