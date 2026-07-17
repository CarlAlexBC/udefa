/**
 * Mapeo Diagnóstico del Panel ↔ Sección de la Guía del Aspirante.
 *
 * Este archivo implementa la vinculación definida en:
 * docs/guia-aspirante/mapa-diagnosticos.md
 *
 * Cada diagnóstico del panel recibe un `GuiaLink` que apunta a la sección
 * de la Guía que enseña a resolverlo. El componente `DiagnosticoCard`
 * renderiza el botón "Aprender a mejorar" cuando el diagnóstico tiene link.
 *
 * IMPORTANTE — cuando cambie el título de un h2/h3 en un .md de la Guía,
 * el slug generado por rehype-slug cambia y el link se rompe. Los anchors
 * aquí deben mantenerse en sincronía con los títulos de los .md.
 */

export type GuiaLink = {
  /** Slug de la sección (nombre del archivo .md sin extensión). */
  seccion: string
  /** Anchor opcional dentro de la sección (slug del h2/h3 destino). */
  anchor?: string
}

/**
 * Construye la URL final navegable a partir de un GuiaLink.
 */
export function urlDeLink(link: GuiaLink): string {
  const base = `/inicio/guia/${link.seccion}`
  return link.anchor ? `${base}#${link.anchor}` : base
}

/**
 * Sub-mapeo tema-BD → sección de la Guía.
 *
 * Los temas vienen de la columna `tema` en Reactivo (backend). Cada tema
 * apunta a la sección §4.6.X o §5.3/§5.7 correspondiente. Un tema sin
 * mapeo devuelve null (el diagnóstico se muestra sin CTA).
 *
 * Fuente: docs/guia-aspirante/mapa-diagnosticos.md sección 4.2.
 */
const TEMA_A_SECCION: Record<string, GuiaLink> = {
  // §4.6.1 — Manejo emocional
  manejo_emocional: { seccion: '4.6.1-manejo-emocional' },
  control_impulsos: { seccion: '4.6.1-manejo-emocional' },
  autoestima: { seccion: '4.6.1-manejo-emocional' },
  autocontrol_general: { seccion: '4.6.1-manejo-emocional' },
  suicidio: { seccion: '4.6.1-manejo-emocional' },
  sentido_vida: { seccion: '4.6.1-manejo-emocional' },

  // §4.6.2 — Estrés
  estres: { seccion: '4.6.2-estres-toma-decisiones' },
  presion: { seccion: '4.6.2-estres-toma-decisiones' },
  tolerancia_frustracion: { seccion: '4.6.2-estres-toma-decisiones' },
  ansiedad: { seccion: '4.6.2-estres-toma-decisiones' },
  resiliencia: { seccion: '4.6.2-estres-toma-decisiones' },

  // §4.6.3 — Influenciabilidad
  influencia_social: { seccion: '4.6.3-influenciabilidad-critica' },
  manejo_critica: { seccion: '4.6.3-influenciabilidad-critica' },
  dependencia_grupo: { seccion: '4.6.3-influenciabilidad-critica' },

  // §4.6.4 — Liderazgo vs autoritarismo
  liderazgo: { seccion: '4.6.4-liderazgo-autoritarismo' },
  autoritarismo: { seccion: '4.6.4-liderazgo-autoritarismo' },
  manejo_autoridad: { seccion: '4.6.4-liderazgo-autoritarismo' },

  // §4.6.5 — Valores personales
  valores_personales: { seccion: '4.6.5-valores-personales-etica' },
  principios_eticos: { seccion: '4.6.5-valores-personales-etica' },
  honestidad: { seccion: '4.6.5-valores-personales-etica' },
  integridad: { seccion: '4.6.5-valores-personales-etica' },

  // §4.6.6 — Conductas de riesgo
  conductas_riesgo: { seccion: '4.6.6-conductas-riesgo' },
  impulsividad: { seccion: '4.6.6-conductas-riesgo' },
  adicciones: { seccion: '4.6.6-conductas-riesgo' },
  toma_riesgos: { seccion: '4.6.6-conductas-riesgo' },

  // §4.6.7 — Relaciones interpersonales
  relaciones_familiares: { seccion: '4.6.7-relaciones-interpersonales' },
  relaciones_interpersonales: { seccion: '4.6.7-relaciones-interpersonales' },
  cooperacion_trabajo_equipo: { seccion: '4.6.7-relaciones-interpersonales' },
  empatia: { seccion: '4.6.7-relaciones-interpersonales' },

  // §4.6.8 — Adaptabilidad y disciplina
  adaptabilidad: { seccion: '4.6.8-adaptabilidad-disciplina' },
  disciplina: { seccion: '4.6.8-adaptabilidad-disciplina' },
  tolerancia_al_cambio: { seccion: '4.6.8-adaptabilidad-disciplina' },
  seguimiento_ordenes: { seccion: '4.6.8-adaptabilidad-disciplina' },

  // §5.3 — Los 8 valores axiológicos (tema compartido con axiológico)
  valores_militares: { seccion: '5.3-ocho-valores-axiologicos' },
}

/**
 * Devuelve el link a la Guía para un tema de BD. Null si no hay mapeo.
 */
export function linkParaTema(tema: string): GuiaLink | null {
  return TEMA_A_SECCION[tema] ?? null
}

/**
 * Sub-mapeo bloque psicométrico → sección de la Guía.
 * Los bloques se identifican por su nombre (que viene del backend).
 * Los nombres exactos dependen de cómo están registrados en la tabla Bloque.
 */
const BLOQUE_A_SECCION: Array<{ patron: RegExp; link: GuiaLink }> = [
  {
    patron: /analog/i,
    link: { seccion: '3.3-analogias', anchor: 'estrategia-paso-a-paso' },
  },
  {
    patron: /sin[oó]nim|ant[oó]nim/i,
    link: { seccion: '3.4-sinonimos-antonimos', anchor: 'estrategia-paso-a-paso' },
  },
  {
    patron: /razonamiento.*l[oó]gic|l[oó]gic.*matem/i,
    link: {
      seccion: '3.5-razonamiento-logico-matematico',
      anchor: 'estrategia-paso-a-paso',
    },
  },
  {
    patron: /abstract/i,
    link: {
      seccion: '3.6-razonamiento-abstracto',
      anchor: 'estrategia-paso-a-paso',
    },
  },
]

/**
 * Devuelve el link a la Guía para un bloque del psicométrico por su nombre.
 * Null si no hay mapeo (bloque no reconocido).
 */
export function linkParaBloque(nombreBloque: string): GuiaLink | null {
  const match = BLOQUE_A_SECCION.find((b) => b.patron.test(nombreBloque))
  return match?.link ?? null
}

/**
 * Links fijos para diagnósticos no dependientes de tema o bloque.
 */
export const LINKS_FIJOS = {
  fatigaPsicometrico: {
    seccion: '7-estrategia-final-ampliada',
    anchor: 'manejo-del-punto-critico-de-fatiga-mitad-del-examen',
  },
  perfilIdealizado: {
    seccion: '8.6-estilo-respuesta-sesgos',
    anchor: '3-deseabilidad-social-perfil-idealizado',
  },
  aquiescencia: {
    seccion: '8.6-estilo-respuesta-sesgos',
    anchor: '1-sesgo-de-aquiescencia-aquiescencia',
  },
  negativismo: {
    seccion: '8.6-estilo-respuesta-sesgos',
    anchor: '2-sesgo-de-negativismo-contra-aquiescencia',
  },
  coincidenciaBajaAxiologico: {
    seccion: '5.3-ocho-valores-axiologicos',
  },
  contradiccionesInternas: {
    seccion: '5.7-relacion-axiologico-personalidad',
  },
  aceleracionAutoevaluacion: {
    seccion: '8.7-ritmo-autoevaluacion',
    anchor: '1-aceleracion-en-la-segunda-mitad-fatiga-o-apuro-final',
  },
  ritmoVariable: {
    seccion: '8.7-ritmo-autoevaluacion',
    anchor: '2-ritmo-muy-variable-bloqueo-en-temas-especificos',
  },
  ritmoDemasiadoRapido: {
    seccion: '8.7-ritmo-autoevaluacion',
    anchor: '3-ritmo-demasiado-rapido-menos-de-3-segundos-por-reactivo',
  },
} satisfies Record<string, GuiaLink>
