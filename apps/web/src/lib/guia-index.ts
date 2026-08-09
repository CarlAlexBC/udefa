/**
 * Índice fuente-de-verdad de la Guía del Aspirante.
 *
 * Este archivo define el ORDEN CANÓNICO de las secciones y su estado:
 * - `online`: existe como .md en docs/guia-aspirante/ y se renderiza como página
 * - `pdf`: solo existe en el docx maestro, se ofrece como link al PDF
 *
 * Cambios al orden aquí se reflejan automáticamente en:
 * - El TOC del índice `/inicio/guia`
 * - La navegación anterior/siguiente entre secciones
 * - El sub-mapeo de secciones por capítulo
 *
 * Cuando una sección PDF se saneé como .md, cambiar `estado` a 'online' y
 * agregar `slug` con el nombre del archivo (sin extensión).
 */

export type EstadoSeccion = 'online' | 'pdf'

export type Seccion = {
  /** Número canónico de la sección tal como aparece en el docx (ej: "3.4", "4.6.7", "8.6"). */
  numero: string
  /** Título de la sección. */
  titulo: string
  /** Estado — determina si abre página online o link al PDF. */
  estado: EstadoSeccion
  /**
   * Slug (nombre del archivo .md sin extensión). Requerido si estado === 'online'.
   * Coincide con el nombre en docs/guia-aspirante/.
   */
  slug?: string
  /**
   * Marca visual opcional. 'nueva' → badge para secciones ✳️ (§8.6, §8.7) que no
   * existen en el docx original y se crearon para cubrir huecos del panel.
   */
  marca?: 'nueva'
}

export type Capitulo = {
  /** Número del capítulo raíz (ej: "3", "4", "5"). */
  numero: string
  /** Título del capítulo. */
  titulo: string
  /** Subtitulo breve para el índice. */
  subtitulo?: string
  /** Secciones que componen el capítulo, en orden. */
  secciones: Seccion[]
}

/**
 * Estructura completa de la Guía (8 capítulos + Introducción).
 * Fuente: LA GUÍA DEL ASPIRANTE - U.D.E.F.A. EMTG.pdf, índice general (páginas 3-6).
 */
export const CAPITULOS_GUIA: Capitulo[] = [
  {
    numero: '0',
    titulo: 'Introducción',
    subtitulo: 'Propósito, importancia y enfoque real del sistema',
    secciones: [
      {
        numero: '0.1',
        titulo: 'Propósito del manual e importancia del examen psicológico',
        estado: 'online',
        slug: '0.1-introduccion-general',
      },
    ],
  },
  {
    numero: '1',
    titulo: 'Contexto general del proceso de selección',
    subtitulo: 'Naturaleza del proceso y errores comunes al prepararse',
    secciones: [
      {
        numero: '1.1',
        titulo: 'Naturaleza del proceso de admisión en la UDEFA',
        estado: 'online',
        slug: '1.1-naturaleza-proceso-admision',
      },
      {
        numero: '1.2',
        titulo: 'Importancia del examen psicológico dentro del proceso',
        estado: 'online',
        slug: '1.2-importancia-examen-psicologico',
      },
      {
        numero: '1.3',
        titulo: 'Qué se evalúa realmente en un aspirante',
        estado: 'online',
        slug: '1.3-que-se-evalua-realmente',
      },
      {
        numero: '1.4',
        titulo: 'Errores comunes al prepararse para el proceso',
        estado: 'online',
        slug: '1.4-errores-comunes-prepararse',
      },
    ],
  },
  {
    numero: '2',
    titulo: 'Cómo funciona el sistema psicológico',
    subtitulo: 'Estructura general, fases y qué busca detectar',
    secciones: [
      {
        numero: '2.1',
        titulo: 'Estructura general del examen psicológico',
        estado: 'online',
        slug: '2.1-estructura-general-examen',
      },
      {
        numero: '2.2',
        titulo: 'División por fases (psicométrico, personalidad, axiológico)',
        estado: 'online',
        slug: '2.2-division-por-fases',
      },
      {
        numero: '2.3',
        titulo: 'Objetivo real de cada fase',
        estado: 'online',
        slug: '2.3-objetivo-real-cada-fase',
      },
      {
        numero: '2.4',
        titulo: 'Relación entre las tres evaluaciones',
        estado: 'online',
        slug: '2.4-relacion-entre-tres-evaluaciones',
      },
      {
        numero: '2.5',
        titulo: 'Qué busca detectar el sistema (más allá de respuestas)',
        estado: 'online',
        slug: '2.5-que-busca-detectar-sistema',
      },
    ],
  },
  {
    numero: '3',
    titulo: 'Examen psicométrico',
    subtitulo: 'Capacidad mental bajo presión — 4 bloques, 40 minutos',
    secciones: [
      {
        numero: '3.1',
        titulo: 'Estructura del examen psicométrico',
        estado: 'online',
        slug: '3.1-estructura-examen-psicometrico',
      },
      {
        numero: '3.2',
        titulo: 'Administración del tiempo (clave del éxito)',
        estado: 'online',
        slug: '3.2-administracion-del-tiempo',
      },
      {
        numero: '3.3',
        titulo: 'Bloque 1: Analogías verbales',
        estado: 'online',
        slug: '3.3-analogias',
      },
      {
        numero: '3.4',
        titulo: 'Bloque 2: Sinónimos y antónimos',
        estado: 'online',
        slug: '3.4-sinonimos-antonimos',
      },
      {
        numero: '3.5',
        titulo: 'Bloque 3: Razonamiento lógico-matemático',
        estado: 'online',
        slug: '3.5-razonamiento-logico-matematico',
      },
      {
        numero: '3.6',
        titulo: 'Bloque 4: Razonamiento abstracto',
        estado: 'online',
        slug: '3.6-razonamiento-abstracto',
      },
      {
        numero: '3.7',
        titulo: 'Estrategias reales de resolución bajo presión',
        estado: 'online',
        slug: '3.7-estrategias-resolucion-bajo-presion',
      },
      {
        numero: '3.8',
        titulo: 'Errores comunes y cómo evitarlos',
        estado: 'online',
        slug: '3.8-errores-comunes-psicometrico',
      },
    ],
  },
  {
    numero: '4',
    titulo: 'Examen de personalidad',
    subtitulo: 'Análisis conductual y emocional — 256 reactivos, 45 minutos',
    secciones: [
      {
        numero: '4.1',
        titulo: 'Naturaleza del examen de personalidad',
        estado: 'online',
        slug: '4.1-naturaleza-examen-personalidad',
      },
      {
        numero: '4.2',
        titulo: 'Qué evalúa realmente este examen',
        estado: 'online',
        slug: '4.2-que-evalua-realmente',
      },
      {
        numero: '4.3',
        titulo: 'Cómo interpretar los reactivos correctamente',
        estado: 'online',
        slug: '4.3-como-interpretar-reactivos',
      },
      {
        numero: '4.4',
        titulo: 'Funcionamiento del sistema de detección de inconsistencias',
        estado: 'online',
        slug: '4.4-funcionamiento-sistema-deteccion',
      },
      {
        numero: '4.5',
        titulo: 'Importancia de la coherencia en respuestas prolongadas',
        estado: 'online',
        slug: '4.5-coherencia-respuestas-prolongadas',
      },
      {
        numero: '4.6.1',
        titulo: 'Manejo emocional y control de impulsos',
        estado: 'online',
        slug: '4.6.1-manejo-emocional',
      },
      {
        numero: '4.6.2',
        titulo: 'Estrés, presión y toma de decisiones',
        estado: 'online',
        slug: '4.6.2-estres-toma-decisiones',
      },
      {
        numero: '4.6.3',
        titulo: 'Influenciabilidad y manejo de la crítica',
        estado: 'online',
        slug: '4.6.3-influenciabilidad-critica',
      },
      {
        numero: '4.6.4',
        titulo: 'Liderazgo vs autoritarismo',
        estado: 'online',
        slug: '4.6.4-liderazgo-autoritarismo',
      },
      {
        numero: '4.6.5',
        titulo: 'Valores personales y principios éticos',
        estado: 'online',
        slug: '4.6.5-valores-personales-etica',
      },
      {
        numero: '4.6.6',
        titulo: 'Conductas de riesgo (adicciones, impulsividad)',
        estado: 'online',
        slug: '4.6.6-conductas-riesgo',
      },
      {
        numero: '4.6.7',
        titulo: 'Relaciones interpersonales y entorno familiar',
        estado: 'online',
        slug: '4.6.7-relaciones-interpersonales',
      },
      {
        numero: '4.6.8',
        titulo: 'Adaptabilidad, disciplina y seguimiento de órdenes',
        estado: 'online',
        slug: '4.6.8-adaptabilidad-disciplina',
      },
      {
        numero: '4.7',
        titulo: 'Perfil buscado vs perfil de riesgo',
        estado: 'online',
        slug: '4.7-perfil-buscado-vs-riesgo',
      },
      {
        numero: '4.8',
        titulo: 'Cómo responder correctamente el examen',
        estado: 'online',
        slug: '4.8-como-responder-correctamente',
      },
      {
        numero: '4.9',
        titulo: 'Errores críticos que provocan eliminación',
        estado: 'online',
        slug: '4.9-errores-criticos-eliminacion',
      },
    ],
  },
  {
    numero: '5',
    titulo: 'Examen axiológico',
    subtitulo: 'Validación de valores y principios — 39 reactivos, 10 minutos',
    secciones: [
      {
        numero: '5.1',
        titulo: 'Comprensión del perfil indirecto',
        estado: 'online',
        slug: '5.1-comprension-perfil-indirecto',
      },
      {
        numero: '5.2',
        titulo: 'Finalidad real del examen axiológico',
        estado: 'online',
        slug: '5.2-finalidad-examen-axiologico',
      },
      {
        numero: '5.3',
        titulo: 'Los 8 valores axiológicos',
        estado: 'online',
        slug: '5.3-ocho-valores-axiologicos',
      },
      {
        numero: '5.4',
        titulo: 'Perfil buscado vs perfil de riesgo',
        estado: 'online',
        slug: '5.4-perfil-buscado-riesgo-axiologico',
      },
      {
        numero: '5.5',
        titulo: 'Cómo responder correctamente el examen',
        estado: 'online',
        slug: '5.5-como-responder-axiologico',
      },
      {
        numero: '5.6',
        titulo: 'Errores comunes y cómo evitarlos',
        estado: 'online',
        slug: '5.6-errores-comunes-axiologico',
      },
      {
        numero: '5.7',
        titulo: 'Relación directa con el examen de personalidad',
        estado: 'online',
        slug: '5.7-relacion-axiologico-personalidad',
      },
    ],
  },
  {
    numero: '6',
    titulo: 'Integración total del sistema psicológico',
    subtitulo: 'Comprender el sistema como un todo integrado',
    secciones: [
      { numero: '6.1', titulo: 'Comprender el sistema como un todo', estado: 'online', slug: '6.1-sistema-como-todo' },
      { numero: '6.2', titulo: 'Relación entre capacidad, conducta y valores', estado: 'online', slug: '6.2-capacidad-conducta-valores' },
      { numero: '6.3', titulo: 'Cómo el sistema detecta incongruencias', estado: 'online', slug: '6.3-como-detecta-incongruencias' },
      { numero: '6.4', titulo: 'Principio de coherencia total', estado: 'online', slug: '6.4-principio-coherencia-total' },
      { numero: '6.5', titulo: 'Error crítico: fragmentar el perfil', estado: 'online', slug: '6.5-error-fragmentar-perfil' },
      { numero: '6.6', titulo: 'Estrategia de preparación integral', estado: 'online', slug: '6.6-estrategia-preparacion-integral' },
      { numero: '6.7', titulo: 'Evaluación final del sistema', estado: 'online', slug: '6.7-evaluacion-final-sistema' },
      { numero: '6.8', titulo: 'Interpretación global del perfil psicológico', estado: 'online', slug: '6.8-interpretacion-global-perfil' },
    ],
  },
  {
    numero: '7',
    titulo: 'Estrategia final del aspirante',
    subtitulo: 'Ejecución real el día del examen',
    secciones: [
      {
        numero: '7',
        titulo: 'Estrategia final (ampliada con recomendaciones prácticas)',
        estado: 'online',
        slug: '7-estrategia-final-ampliada',
      },
    ],
  },
  {
    numero: '8',
    titulo: 'Complementos y conclusión',
    subtitulo: 'Secciones nuevas para cubrir huecos del panel de resultados',
    secciones: [
      { numero: '8.1', titulo: 'Conclusión general del proceso', estado: 'online', slug: '8.1-conclusion-general-proceso' },
      { numero: '8.2', titulo: 'Reflexión final del aspirante', estado: 'online', slug: '8.2-reflexion-final-aspirante' },
      { numero: '8.3', titulo: 'Uso práctico del manual', estado: 'online', slug: '8.3-uso-practico-manual' },
      { numero: '8.4', titulo: 'Estructura para notas personales', estado: 'online', slug: '8.4-estructura-notas-personales' },
      { numero: '8.5', titulo: 'Compromiso final', estado: 'online', slug: '8.5-compromiso-final' },
      {
        numero: '8.6',
        titulo: 'Estilo de respuesta y sesgos',
        estado: 'online',
        slug: '8.6-estilo-respuesta-sesgos',
        marca: 'nueva',
      },
      {
        numero: '8.7',
        titulo: 'Ritmo y reflexión en autoevaluación',
        estado: 'online',
        slug: '8.7-ritmo-autoevaluacion',
        marca: 'nueva',
      },
    ],
  },
]

/**
 * Lista plana de secciones online (con slug garantizado).
 * Usada para navegación anterior/siguiente y para generateStaticParams.
 */
export const SECCIONES_ONLINE: Array<Seccion & { slug: string; capitulo: string }> = CAPITULOS_GUIA.flatMap(
  (cap) =>
    cap.secciones
      .filter((s): s is Seccion & { slug: string } => s.estado === 'online' && !!s.slug)
      .map((s) => ({ ...s, capitulo: cap.titulo })),
)

/**
 * Busca un capítulo por su número ('0', '1', ... '8').
 * Lo usa la página de capítulo del mosaico, /inicio/guia/capitulo/[numero].
 */
export function buscarCapituloPorNumero(numero: string): Capitulo | null {
  return CAPITULOS_GUIA.find((c) => c.numero === numero) ?? null
}

/**
 * Devuelve el capítulo al que pertenece una sección, dado su slug.
 * Sirve para armar la miga de pan de la pantalla de lectura, que ahora
 * regresa al capítulo y no directo al índice.
 */
export function capituloDeSeccion(slug: string): Capitulo | null {
  return CAPITULOS_GUIA.find((c) => c.secciones.some((s) => s.slug === slug)) ?? null
}

/**
 * Busca una sección online por slug.
 * Devuelve la sección + su capítulo padre + índice global para navegación.
 */
export function buscarSeccionPorSlug(slug: string) {
  const idx = SECCIONES_ONLINE.findIndex((s) => s.slug === slug)
  if (idx === -1) return null
  const seccion = SECCIONES_ONLINE[idx]
  const anterior = idx > 0 ? SECCIONES_ONLINE[idx - 1] : null
  const siguiente = idx < SECCIONES_ONLINE.length - 1 ? SECCIONES_ONLINE[idx + 1] : null
  return { seccion, anterior, siguiente, indice: idx, total: SECCIONES_ONLINE.length }
}

/**
 * Devuelve la URL pública del PDF de la Guía del Aspirante.
 * Hoy es un placeholder — cuando se suba a Cloudinary o al backend, se cambia aquí.
 * Se usa para las secciones con estado 'pdf'.
 */
export const URL_PDF_GUIA_ASPIRANTE = '/pdfs/guia-aspirante.pdf'
