# Prompt de continuidad — Remaster de Personalidad v3

> Pega esto al iniciar un chat nuevo para retomar **con el mismo ritmo**.
> Solo hay que actualizar la sección **"Dónde vamos"** cada tanto (lo demás es estable).
> El "cómo trabajar" de abajo es lo que hace que este trabajo se sienta cómodo — no lo pierdas.

---

Retomamos la **remasterización del examen de personalidad** de la Plataforma UDEFA
(monorepo en `C:\proyectos\udefa`). El banco nuevo vive en `docs/personalidad-remaster/v3/`.

**Antes de tocar nada:** lee tu memoria (`MEMORY.md` + los archivos que referencie), `ESTADO.md`,
y `CLAUDE.md`. Verifica el estado real en disco antes de afirmar (cuenta los ejes v3):
`ls docs/personalidad-remaster/v3/`.

## Cómo trabajar conmigo — EL RITMO (esto es lo importante)

1. **Un eje a la vez. Nunca en avalancha.** El ciclo por eje es siempre el mismo:
   leer el eje viejo (`docs/personalidad-remaster/NN-*.md`) → **diagnosticar qué cambia**
   (no reescribir de cero) → escribir/ajustar el v3 en `docs/personalidad-remaster/v3/` →
   **verificar con un script** → reportar → **proponer el commit** → yo doy el OK → commit → siguiente.
2. **"Muéstrame lo que cambia."** Antes de tocar un eje, dime en tabla qué se **conserva**
   (numeración, pares, polaridad, subnotas, marcos, trampas, clusters, cross, protocolos) y
   qué **cambia** (voz, escala, 🎖). En los temas fuertes, señalar los cambios, no reescribir.
3. **Verifica antes de afirmar.** Corre un `node -e` que cuente reactivos, valide pares
   recíprocos/contiguos, cuente trampas/críticos/🎖 y busque residuos de la escala vieja.
   Si el encabezado original trae un conteo mal (pasa seguido), corrígelo y dilo.
4. **Pídeme OK en las decisiones de fondo**, y avanza solo en lo mecánico. Ejemplos de
   decisiones que decido yo: ¿lleva trampas o no?, el enfoque/ángulo de un eje, cuántos 🎖,
   cómo tratar escenarios que un civil no ha vivido, cuánto peso a un tema fuerte.
5. **Commit por eje, con mensaje claro, y SOLO tras mi OK.** El push lo decido yo aparte.
   (Excepción de `CLAUDE.md`: el examen cultural tiene OK permanente; personalidad NO.)
6. **Vocabulario llano. Explica antes de hacer.** Si no entiendo una palabra, un aspirante
   de 18 tampoco.
7. **El visor.** Cuando quiera revisar reactivos, arma/actualiza un artifact HTML navegable
   (buscador + filtros por polaridad/trampas/críticos/🎖) parseando los `.md` v3. Es la
   forma cómoda de revisar el contenido, porque el banco v3 **aún no vive en la app**.

## Reglas de redacción v3 (leer las memorias antes de redactar)

- **Voz hablada, primera persona, corta**, escala **Verdadero/Falso**. Conservar pares,
  polaridad, trampas L/K/F, marcos clínicos, clusters, cross-tema y protocolos.
- **Sin modismos que bajen el nivel** (`feedback-registro-v3`): vetado "le entro", "tranzar",
  "mordida", "ayudita", etc. → verbo neutro y digno. Reactivo de origen/crianza (62): apertura
  natural **variada entre ejes**, nunca "De donde vengo".
- **🎖 vínculo militar = minoría honesta** (`feedback-vinculo-militar-v3`): solo donde el
  concepto castrense SOSTIENE el reactivo. Florece en valores (28, 08…) y mando (11, 13, 21).
  En rasgos universales (confianza, resiliencia, sociabilidad, etc.) suele ser **0** — no forzar.
- **Doctrina:** el militar no critica al gobierno (`feedback-militar-no-critica-gobierno`);
  cultura castrense (`feedback-ponerse-digno`, `feedback-patriotismo-perfil-militar`).
- **Temas fuertes = crudos y directos** (`feedback-temas-fuertes-crudos`): suicidio, depresión,
  ansiedad, ira, adicciones NO se suavizan. Ajuste (V/F + 🎖), no reescritura; y si pido "más",
  ampliar con **ángulos clínicos distintos**. En suicidio, los reactivos de plan miden la
  **presencia**, nunca el método; todo lo de riesgo es CRÍTICO y activa el protocolo de crisis.

## Dónde vamos (ACTUALIZAR esta sección)

- **Progreso: 31 de 33 ejes v3** (el 08 llenó su hueco; hay 30, 31, 32, 33 nuevos).
- **Los 9 valores militares oficiales: CERRADOS** (08, 10, 16, 17, 28, 30, 31, 32, 33).
- **Eje 01 suicidio AMPLIADO** a 126 reactivos / 41 críticos (crudo, por el peso del examen real).
- **Eje 03 ansiedad AMPLIADO** a 105 reactivos / 7 críticos (8 ago). Cruda, 3 ángulos nuevos
  (#86–105): pánico/agorafobia, congelamiento operativo, crisis ansiosa actual + salud. 🎖=0.
- **Faltan 2 ejes:**
  - **06 adicciones** — tema fuerte; ajuste ligero (V/F + fondo intacto), salvo que yo pida
    ampliarlo crudo. OJO: arrastra el reactivo-filtro de no-consumidores y las trampas-L que
    no pueden asumir consumo.
  - **29 valores aplicados** — parqueado; decisión de diseño (¿meta-eje de cierre o se integra?).
- **Pendientes técnicos (no tocar por cuenta propia):** no existe importador para v3; activar el
  scoring V/F en `intentos.service.ts` (hoy lee "sí/no"); **dispersar los pares** POS/NEG en el
  simulador; recalibrar el umbral del cluster MMPI-K global; **el eje 08 Patriotismo tiene ~60 🎖
  (muy alto, del otro chat) — revisar**. La guía §5.3 del Axiológico hay que reescribirla a los 9.

**Arranca preguntándome por dónde seguimos.** Trabaja como pide `CLAUDE.md`.
