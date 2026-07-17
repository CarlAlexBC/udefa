# Guía del Aspirante — proceso de sanación

Este directorio contiene las **secciones sanadas** de la Guía del Aspirante, el
documento maestro del producto. Sirve como source of truth para cuando
digitalicemos la guía como lectura online en la plataforma (Fase 4 del plan).

## Contexto

La Guía del Aspirante original vive como docx en:
`C:\Users\carlo\OneDrive\Escritorio\UDEFA 2026\ARCHIVOS DEFINITIVOS PARA EL PROCESO DE ADMISION\ESTRUCTURA DE EXAMEN PSICOLÓGICO (SIMULADORES EMTG)\LA GUIA DEL ASPIRANTE (U.D.E.F.A.)\`

99 páginas de contenido curado por Carlo Alexander (ex-cadete HCM + apoyo de
psicólogos militares). El índice oficial del docx se extrajo en Tanda 2 y se
documenta completo en [`mapa-diagnosticos.md`](./mapa-diagnosticos.md).

Al hacer la auditoría (Fase 1) identificamos gaps en varias secciones — algunas
solo aparecen mencionadas en el índice, otras están a medias. Este directorio
contiene las secciones que hemos completado (Fase 2).

## Estado del sanamiento

**Tanda 1 — Gaps rojos (completada)**

- ✅ [`3.6-razonamiento-abstracto.md`](./3.6-razonamiento-abstracto.md)
- ✅ [`4.6.2-estres-toma-decisiones.md`](./4.6.2-estres-toma-decisiones.md)
- ✅ [`4.6.7-relaciones-interpersonales.md`](./4.6.7-relaciones-interpersonales.md)
- ✅ [`5.7-relacion-axiologico-personalidad.md`](./5.7-relacion-axiologico-personalidad.md)

**Tanda 2 — Ampliar breves + secciones nuevas del mapa (completada)**

- ✅ [`3.4-sinonimos-antonimos.md`](./3.4-sinonimos-antonimos.md)
- ✅ [`3.5-razonamiento-logico-matematico.md`](./3.5-razonamiento-logico-matematico.md)
- ✅ [`5.3-ocho-valores-axiologicos.md`](./5.3-ocho-valores-axiologicos.md)
- ✅ [`4.6.6-conductas-riesgo.md`](./4.6.6-conductas-riesgo.md)
- ✅ [`8.6-estilo-respuesta-sesgos.md`](./8.6-estilo-respuesta-sesgos.md) *(nueva — cubre huecos Ps1/Ps2/Ps3 del panel)*
- ✅ [`8.7-ritmo-autoevaluacion.md`](./8.7-ritmo-autoevaluacion.md) *(nueva — cubre huecos Ps6/Ps7/Ps8 del panel)*
- ✅ [`mapa-diagnosticos.md`](./mapa-diagnosticos.md) *(vinculación Diagnóstico ↔ Sección)*

**Tanda 3 — Cleanup + secciones intermedias (completada)**

- ✅ [`3.3-analogias.md`](./3.3-analogias.md)
- ✅ [`4.6.1-manejo-emocional.md`](./4.6.1-manejo-emocional.md)
- ✅ [`4.6.3-influenciabilidad-critica.md`](./4.6.3-influenciabilidad-critica.md)
- ✅ [`4.6.4-liderazgo-autoritarismo.md`](./4.6.4-liderazgo-autoritarismo.md)
- ✅ [`4.6.5-valores-personales-etica.md`](./4.6.5-valores-personales-etica.md)
- ✅ [`4.6.8-adaptabilidad-disciplina.md`](./4.6.8-adaptabilidad-disciplina.md)
- ✅ [`7-estrategia-final-ampliada.md`](./7-estrategia-final-ampliada.md)
- ⏳ Cleanup de artefactos de proceso en el docx maestro (opcional — el contenido source-of-truth vive ya en los .md)

**Tanda 4 — Digitalización total (completada)**

Toda la Guía es ahora 100% digital dentro de la plataforma — cero redirección
a PDF. 57 secciones navegables bajo `/inicio/guia/[slug]` con TOC lateral,
navegación siguiente/anterior, y anchors reales. CTA "Aprender a mejorar" en
`DiagnosticoCard` según [`mapa-diagnosticos.md`](./mapa-diagnosticos.md).

Se digitalizaron 40 secciones nuevas que originalmente vivían solo en el docx:

- ✅ [`0.1-introduccion-general.md`](./0.1-introduccion-general.md) — Introducción general.
- ✅ §1 completo: [`1.1`](./1.1-naturaleza-proceso-admision.md), [`1.2`](./1.2-importancia-examen-psicologico.md), [`1.3`](./1.3-que-se-evalua-realmente.md), [`1.4`](./1.4-errores-comunes-prepararse.md).
- ✅ §2 completo: [`2.1`](./2.1-estructura-general-examen.md), [`2.2`](./2.2-division-por-fases.md), [`2.3`](./2.3-objetivo-real-cada-fase.md), [`2.4`](./2.4-relacion-entre-tres-evaluaciones.md), [`2.5`](./2.5-que-busca-detectar-sistema.md).
- ✅ §3.1, §3.2, §3.7, §3.8 — marcos del psicométrico: [`3.1`](./3.1-estructura-examen-psicometrico.md), [`3.2`](./3.2-administracion-del-tiempo.md), [`3.7`](./3.7-estrategias-resolucion-bajo-presion.md), [`3.8`](./3.8-errores-comunes-psicometrico.md).
- ✅ §4.1-§4.5, §4.7-§4.9 — marcos y aplicación del examen de personalidad (8 secciones).
- ✅ §5.1, §5.2, §5.4-§5.6 — marcos y aplicación del axiológico (5 secciones).
- ✅ §6 completo: los 8 sub-capítulos de integración total.
- ✅ §7 ya estaba online (`7-estrategia-final-ampliada.md`).
- ✅ §8.1-§8.5 — conclusión y cierre del manual (5 secciones).

## Convenciones de estilo

Las secciones sanadas siguen el mismo formato consistente:

0. **Blockquote inicial: "Diagnósticos del panel que esta sección resuelve"** —
   ancla explícita al [`mapa-diagnosticos.md`](./mapa-diagnosticos.md) para el
   sistema de vinculación "Aprender a mejorar" (Fase 4).
1. **Por qué este tema es central** — introducción que justifica su importancia.
2. **Marco psicológico / qué evalúa realmente** — referencias a psicología clásica cuando aplique (Cattell, Kagan, Kahneman, Bowlby, Rogers, Rokeach, Crowne-Marlowe, etc.).
3. **Cómo funciona en el examen** — cómo se materializa en reactivos concretos.
4. **Perfiles de riesgo típicos** — patrones que el sistema identifica como funcionalmente disfuncionales.
5. **Cómo responder correctamente** — guía práctica.
6. **Idea clave** — síntesis final con "Idea central para retener" en bold.

Tono: humanizado, didáctico, sin sesgo militar excesivo. Voz en segunda persona.

## Digitalización pendiente

Cuando esté completa la sanación (Tandas 1-3), estos archivos se convertirán en
páginas navegables bajo `/inicio/guia/[capitulo]/[seccion]` en la plataforma
(usando MDX en Next.js). El mapa de vinculación
[`mapa-diagnosticos.md`](./mapa-diagnosticos.md) define exactamente qué
diagnóstico del panel enlaza a qué sección/anchor. Ver Fase 4 del plan.
