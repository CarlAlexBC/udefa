# Prompt de continuidad — Plataforma UDEFA
_(Pega esto como primer mensaje en un chat nuevo. Actualizado: 4 ago 2026.)_

Retomamos el trabajo en la **Plataforma UDEFA** (monorepo en `C:\proyectos\udefa`). **Antes de tocar nada: lee tu memoria (`MEMORY.md` + los archivos que referencie) y `ESTADO.md`.** Trabaja como pide `CLAUDE.md`: explica el paso a paso ANTES de hacer, pide mi OK para commits/migraciones/instalaciones (el push lo decido yo), vocabulario llano, y verifica el dato real antes de afirmar.

## Frente PRINCIPAL: remasterización COMPLETA del examen de personalidad

- **Decisión:** rehacer todo el banco de personalidad. Nace un banco nuevo **`v3`** en `docs/personalidad-remaster/v3/`; los viejos (`v1` ~2807 y `remaster` ~2410) quedan jubilados **sin borrar**.
- **Método (CONFIRMADO):** **re-redacción EN SITIO**, eje por eje. Se conserva número, polaridad, par, subnota, marco, **clusters, receptores/emisores cross y trampas cross-tema**; solo cambia el **texto del enunciado** (voz nueva) + escala **Verdadero/Falso** + 🎖 donde de verdad encaje. Claude redacta el eje completo; Carlo revisa en lotes (los 6 sub-lotes del archivo); se ajusta; siguiente eje.
- **OJO — el banco es una RED:** hay clusters por número y trampas/espejos cross-tema ENTRE ejes. Reescribir desde cero rompe la red; por eso se re-redacta en sitio conservando la numeración.

### Criterio de redacción v3 (con los refinamientos de HOY)

1. **Primera persona, frase corta, cruda** donde el tema lo pida (quitarse la vida, drogas, alcohol, encubrir). Nada de "algunas personas a veces…".
2. **Escala Verdadero/Falso** (V = me describe / F = no me describe). Las trampas se anotan "trampa-L/K/F (V=…)".
3. **Vínculo militar 🎖 = "HONESTO"** (calibración aprobada por Carlo hoy, opción "así como va"): 🎖 **SOLO donde el concepto castrense es distinto de una palabra neutra**. **NO forzar** — nunca cambiar una palabra neutra por una militar de adorno ("personas"→"compañeros", "apariencia"→"forma física"). Por defecto, **redacción UNIVERSAL**. Conteo real hasta ahora: 14/22/23 = **0 🎖**; 09/04 = **1**; 07 = **2** (rango); 10 Disciplina = **2** (cumplir procedimientos); 16 Lealtad = **6** (código de silencio, reportar-vs-traicionar); 17 Honor = **2** (el honor que impide señalar). El **florecimiento** militar se reserva para los ejes cuyo CONCEPTO es intrínsecamente castrense: **28 valores_grupo y 29 valores_aplicados (patria, abnegación, espíritu de cuerpo)** y los de **mando (11 liderazgo, 21 autoridad/obediencia)**. Regla completa en memoria `feedback_vinculo_militar_v3`.
4. **Enfoque UNIVERSAL confirmado (Carlo, hoy):** NO aterrizar reactivos a escenarios militares que el aspirante civil no ha vivido (una "guardia", una "formación") — no los puede contestar con verdad → respuesta inválida. La concreción viene de **escenarios cotidianos vívidos** ("si se burlan de mí frente al grupo") y la señal castrense del **CONTENIDO del dilema** (lealtad-vs-deber, honor-vs-imagen), no del decorado. Puerta abierta (opcional, con medida): aterrizar unos pocos al contexto REAL del aspirante = **su preparación para el proceso de admisión** ("me preparo para este proceso aunque nadie me empuje").
5. **Registro:** nunca **"los míos"** (vago). PERO **"los suyos" SÍ vale** (idiomático: "poner en duda a los suyos") — no confundir las dos. Sin pronombres de género. Nombrar: familia, amigos, compañeros, alguien.
6. **Bloque de protectores (sub-lote 5, react. 61-75):** viene de una plantilla y tiende a salir **ACARTONADO** ("referentes de personas que", "en materia de X…", "en mi entorno… significó"). **Remasterizarlo proactivamente** a voz hablada. Lección: **leer CADA bloque crítico**, no asumir que "ya viene en voz v3" — pasó en 23, 22, 10, 16, 17.
7. **Conservar la ingeniería** siempre: pares, polaridad, trampas L/K/F, marcos clínicos (PHQ-9, C-SSRS, AUDIT, Beck…), clusters, cross-tema y el protocolo de crisis del eje de suicidio.

### Refinamientos NUEVOS de redacción (4 ago) — aprendidos revisando 17/21/11/28

8. **Registro sin slang:** voz hablada natural SÍ, pero **mexicanismos/coloquialismos que bajan el nivel NO** — "le entro"/"entrarle" VETADO → verbo neutro y digno ("aceptar", "empezar", "me pongo a ello"). Emoción vívida natural sí pasa ("aunque me quede el coraje"). Memoria `feedback_registro_v3`.
9. **"Ponerse digno" (cultura castrense):** NO redactar "replicar / expresar desacuerdo a la autoridad de frente" como polo POSITIVO — es mal visto en el medio. El polo bueno = **cumplir y, si acaso, plantear dudas por la vía correcta**; el déficit a cazar = murmurar a espaldas. Memoria `feedback_ponerse_digno`.
10. **El militar NO critica al gobierno (doctrina):** NO redactar "criticar/señalar lo que está mal en el país/gobierno" como polo positivo (subordinación al poder civil, apoliticismo). El patriotismo va por **servicio**, no por crítica. Por esto se OMITIERON en el eje 28 el par 44/45 y el 73. Memoria `feedback_militar_no_critica_gobierno`.
11. **Reactivo 62 (origen/crianza):** el TIPO se CONSERVA (es válido); solo se cambia la fórmula muletilla "De donde vengo" por aperturas naturales **variadas entre ejes** (Me enseñaron / Crecí creyendo / En mi casa / Aprendí desde chico / La autoridad que conocí de chico). Memoria `feedback_registro_v3`.

### PROGRESO (28 ejes en total — el 08 no existe)

- **12 ejes hechos en v3 (aprobados/escritos):** 04 Manejo emocional, 07 Autoestima, 09 Empatía, **10 Disciplina (90)**, **11 Don de mando (85, 7 🎖)**, 14 Autocuidado, 16 Lealtad, **17 Honor (85, cerrado 4 ago)**, **21 Autoridad/obediencia (85, 6 🎖)**, 22 Adaptabilidad, 23 Estrés/presión, **28 Valores de grupo (82, 18 🎖)**.
- **29 Valores aplicados:** PARQUEADO a medias (solo lote 1 presentado). Es meta-eje (congruencia), NO un valor — ver el pendiente del bloque de valores abajo.
- **Faltan 15 ejes sin tocar** (+ el 29 parqueado): 01, 02, 03, 05, 06, 12, 13, 15, 18, 19, 20, 24, 25, 26, 27.
- **Ejes de temas fuertes (01 suicidio, 06 adicciones, prob. 02/03/05):** YA son crudos → solo **ajuste + vínculo militar**, NO re-redacción total. Preguntar a Carlo cómo mostrárselos (señalar lo que cambia, no reescribir de cero).
- Varios ejes ya vienen en voz v3 → re-redacción **LIGERA**: sobre todo fijar V/F + arreglar el bloque de protectores acartonado (react. 61-75) + reescribir el 62.

### Pendientes técnicos del banco (NO tocar por cuenta propia)

- **Umbral del cluster "MMPI-K global":** crece con cada eje (ya en ~24 "dominios" en Estrés); el ≥8 quedó proporcionalmente flojo. Decisión de Carlo al activar el scoring: subir a ≥9 o volverlo proporción (≥55% de dominios activos).
- **"Cambios al FINAL" para activar el banco v3** (cuando esté listo, no ahora): opciones V/F en el simulador, instrucciones del examen, enseñar al scoring de `intentos.service.ts` a leer "Verdadero/Falso" (hoy busca "sí/no"), y **dispersar los pares** (ver abajo).
- **Importador:** no existe todavía uno para v3. Mirar `apps/backend/scripts/importar-remaster.ts` como referencia (lee el directorio, regenera `ESTADO.md`).

### 📌 PARQUEADO: dispersar los pares POS/NEG en el simulador

Carlo notó, haciendo el examen, que los dos reactivos de un par (uno POS y su pareja NEG que dice lo contrario) salen **pegados**. Quiere que se **dispersen** — que entre los dos haya varios reactivos de otros temas — para que quien miente su perfil se contradiga. Es cambio del **SIMULADOR (orden de presentación)**, NO del contenido; **NO rompe el scoring** (coherencia y trampas se calculan por número/ID, no por posición); de hecho **fortalece** la detección. Falta verificar en código cómo se ordena hoy (probable: en orden de número → adyacentes). Detalle en memoria `project_simulador_dispersar_pares`.

**Fuentes:** ejes viejos en `docs/personalidad-remaster/`; material fuente de Carlo en OneDrive `...\PERSONALIDAD\`; taxonomía y requisitos en memoria `project_examen_personalidad_pendiente` (el veto ya está LEVANTADO).

## 🔴 PENDIENTE NUEVO (4 ago): remasterizar el BLOQUE DE VALORES por los 9 oficiales

**El problema (detectado por Carlo, 4 ago):** el "apartado de Valores" se armó como *valores en general*, cuando el examen real evalúa **9 valores militares oficiales**: **Patriotismo, Lealtad, Honor, Espíritu de cuerpo, Igualdad, Abnegación, Honradez, Valor, Disciplina**.

**Auditoría hecha (4 ago) — dónde vive hoy cada valor:**
- **3 con eje propio v3:** Lealtad (16), Honor (17), Disciplina (10).
- **2 fusionados en el eje 28:** Patriotismo + Espíritu de cuerpo.
- **4 SIN eje propio:** Igualdad, Abnegación, Honradez (repartida entre 12 corrupción y 19 honestidad), Valor.
- **Axiológico (examen id=3, 155 react.):** su guía §5.3 tiene la taxonomía EQUIVOCADA — lista **8 "valores" que NO son los 9**: fusiona Honor+Honradez, mete Liderazgo/Manejo-de-recursos/Autocuidado (rasgos, no valores), y OMITE Igualdad/Abnegación/Valor. Los 155 reactivos están todos bajo un solo `tema: "valores_militares"` sin sub-clasificar, aunque el contenido sí toca los 9.

**Decisión de Carlo (4 ago):** crear los **9 valores como ejes propios en PERSONALIDAD** (eligió "Crear los 9 en Personalidad"; la recomendación de Claude era arreglar el Axiológico, pero Carlo prefirió esto).

**Plan de ejecución:**
1. **Ya listos (3):** 16 Lealtad, 17 Honor, 10 Disciplina. ✓
2. **Desdoblar el eje 28** — OJO, NO es 50/50: el 28 v3 es **~85% espíritu de cuerpo, ~15% patriotismo** (reparto ya hecho 4 ago):
   - **Espíritu de cuerpo (rápido):** hereda casi todo el 28 — los ~72 reactivos que NO son del país. Se queda como el 28, se completa a 85 y se renombra.
   - **Patriotismo (casi eje NUEVO):** en el 28 solo hay **10 reactivos base del país** — `09, 10, 11, 12, 13, 14, 22, 23, 58, 59` (los 44/45/73 se omitieron por doctrina). Hay que diseñar ~75 más. Cantera: Axiológico + guía §5.3 (apartado Patriotismo). RECORDAR: patriotismo por **servicio**, NO por crítica al gobierno (memoria `feedback_militar_no_critica_gobierno`).
3. **Crear 4 nuevos DESDE CERO** (diseño): **Igualdad, Abnegación, Honradez, Valor**. Sin fuente en el remaster. Cantera: Axiológico (155 react.) + criterio de Carlo. Colaborativo por lotes (Claude propone 40-60, Carlo revisa).
   → En total son **5 ejes de diseño desde cero** (Patriotismo + esos 4) y **1 rápido** (Espíritu de cuerpo hereda el 28).

**Numeración DECIDIDA (4 ago):** Espíritu de cuerpo = **28** (hereda el eje) · Patriotismo = **08** (llena el único hueco de la numeración) · Igualdad = **30** · Abnegación = **31** · Honradez = **32** · Valor = **33**.

**Aún por decidir:**
- **Eje 29 (valores aplicados):** si se queda como meta-eje de cierre o se integra.
- **Guía §5.3 del Axiológico:** reescribirla a los 9 oficiales (pendiente aparte).

**Dónde quedó:** listos para arrancar. Claude recomendó empezar por el **desdoblamiento del 28** (material fresco), luego los 4 nuevos. Falta el OK de Carlo a por-dónde-empezar y a la numeración.

## Otros frentes abiertos (no perderlos)

- **Panel de resultados — arreglo "perfil idealizado": HECHO** (3 ago). Cruza el >90% de deseabilidad con las escalas L/K/F, en `apps/web/src/app/inicio/resultados/[intentoId]/page.tsx` (solo frontend). **Sin commitear. Falta verlo en vivo** con el intento 171 de Carlo.
- **Psicométrico (examen id=1): incompleto** — "Razonamiento Abstracto" VACÍO (0 reactivos; imágenes por Cloudinary, pendientes). Los otros 3 bloques OK.
- **Axiológico (examen id=3):** 155 reactivos, **0 trampas**, todos bajo un solo `tema: "valores_militares"` (sin sub-clasificar por valor). La guía §5.3 lista 8 "valores" equivocados → **reescribir a los 9 oficiales** (ver 🔴 pendiente del bloque de valores arriba). El cuidado ambiental SÍ va. Reactivos-trampa a marcar: **22, 27, 29, 30, 65, 143**; dudosos: 26, 28, 122.
- **Escalabilidad / despliegue (PASO 3): PAUSADO** (Carlo priorizó contenido). Hecho: Neon creado + cadenas copiadas; Render elegido. Falta: crear servicio en Render, cablear env, `prisma migrate deploy`, copiar datos a Neon, re-medir. Memoria `project_escalabilidad`.

## Entorno y operación

- **Servers:** `.claude/launch.json` → `udefa-web` (:3000) y `udefa-backend` (:3001). Postgres local en :5432. `preview_start` por nombre (no Bash). **Login:** lo hace Carlo en el Browser pane (Claude no teclea contraseñas). Admin de Carlo: `elmonoteteguia@gmail.com` (id 50), Heroico Colegio Militar.
- **Scripts temporales** en `apps/backend/scripts/`: `_audit-psico.js`, `_audit-intento.js`, `_loadtest-seed.js` — borrar cuando ya no se usen.
- **Memorias de redacción v3 (leer ANTES de redactar):** `feedback_vinculo_militar_v3`, `feedback_registro_v3`, `feedback_ponerse_digno`, `feedback_militar_no_critica_gobierno`, `project_simulador_dispersar_pares`.

**Arranca preguntándome en cuál frente seguimos.** Lo más urgente es el **🔴 PENDIENTE del bloque de valores** (arriba): arrancar por el **desdoblamiento del eje 28** en Patriotismo + Espíritu de cuerpo, y luego crear los 4 ejes nuevos (Igualdad, Abnegación, Honradez, Valor). En paralelo siguen los 15 ejes de personalidad sin tocar.
