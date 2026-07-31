/**
 * Datos y configuración de los documentos legales del sitio.
 *
 * ⚠️  ESTE ES EL ÚNICO ARCHIVO QUE DEBES EDITAR PARA COMPLETAR LOS DATOS REALES.
 *
 * Los textos legales de `src/app/legal/**` leen de aquí. Los valores marcados
 * con `POR_COMPLETAR` son datos que sólo tú (idealmente con un abogado) puedes
 * fijar: no los inventamos porque te comprometen legalmente.
 *
 * NOTA: esta plataforma NO ofrece asesoría legal. Estos documentos son una base
 * profesional para reducir riesgos y dar claridad; conviene que un abogado
 * mexicano los revise antes de publicar, sobre todo por la mención de
 * instituciones militares.
 */

/** Marcador visible para datos que faltan por rellenar. */
const POR_COMPLETAR = (que: string) => `[POR COMPLETAR: ${que}]`

export const LEGAL = {
  /** Nombre comercial del proyecto. */
  nombreComercial: 'El Monote te Guía',

  /** Responsable / titular del proyecto (quién responde legalmente). */
  titular: 'Carlo Alexander',

  /**
   * Identidad fiscal. Escenario elegido: persona física con actividad
   * empresarial (RESICO). Cuando te des de alta en el SAT, sustituye el
   * marcador por tu nombre completo + RFC, p. ej.:
   *   'Carlo Alexander [Apellidos], persona física con actividad empresarial (RESICO), RFC XXXX000000XX0'
   */
  identidadFiscal: POR_COMPLETAR('persona física con actividad empresarial (RESICO): nombre completo + RFC'),

  /** Correo de contacto que se publica en los documentos (soporte/privacidad). */
  correoContacto: POR_COMPLETAR('correo de contacto público, p. ej. contacto@tudominio.com'),

  /** Dominio del sitio, cuando lo tengas. */
  sitioWeb: POR_COMPLETAR('dominio del sitio, p. ej. https://elmonoteteguia.com'),

  /** Redes públicas del proyecto. */
  tiktok: 'https://www.tiktok.com/@elmonoteteguia',

  /**
   * Ciudad/Estado cuya jurisdicción aplica en Términos (cláusula de
   * "tribunales competentes"). En México suele ser tu ciudad de operación.
   */
  jurisdiccion: POR_COMPLETAR('ciudad y estado para la cláusula de jurisdicción'),

  /**
   * Política de reembolsos: por ser productos digitales de acceso inmediato,
   * define tu ventana y condiciones. Ejemplo de default razonable abajo, pero
   * confírmalo (Ley Federal de Protección al Consumidor / PROFECO).
   */
  reembolsos: {
    /** Días para solicitar reembolso tras la compra. '0' = sin reembolso. */
    ventanaDias: POR_COMPLETAR('días de ventana de reembolso, p. ej. 7, o 0 si no aplica'),
    /** Proveedor de pagos. Decidido: Mercado Pago (integración Checkout Pro). */
    proveedorPagos: 'Mercado Pago',
  },

  /**
   * Fecha de última actualización que se muestra en cada documento.
   * Actualízala cuando cambies un texto legal.
   */
  ultimaActualizacion: '28 de julio de 2026',
} as const

/**
 * Aviso de independencia para el PIE DE PÁGINA — el más importante. Se muestra
 * en todas las páginas que llevan el pie compartido.
 *
 * Nota de marca: se usa "El Monote te Guía" SIN el símbolo ®. El ® afirma que
 * la marca está registrada; usarlo sin registro ante el IMPI puede ser engañoso.
 * Si registras la marca y quieres el ®, agrégalo aquí.
 */
export const AVISO_INDEPENDENCIA_CORTO =
  'El Monote te Guía es una plataforma independiente de preparación para ' +
  'aspirantes. No está afiliada, autorizada ni respaldada por la Secretaría de ' +
  'la Defensa Nacional (DEFENSA), la Universidad del Ejército y Fuerza Aérea ' +
  '(U.D.E.F.A.) ni por cualquiera de sus escuelas militares.'

/** Aviso que se muestra en un recuadro dentro de cada simulador, antes de empezar. */
export const AVISO_SIMULADOR =
  'Este es un simulador de práctica elaborado con fines educativos. No ' +
  'corresponde a un examen oficial ni garantiza el ingreso a ninguna ' +
  'institución militar. La preparación constante y la consulta de las ' +
  'convocatorias oficiales de la DEFENSA son responsabilidad del aspirante.'

/**
 * AVISO IMPORTANTE — versión larga y completa. Se muestra como recuadro
 * destacado al principio del Descargo de responsabilidad. Cada elemento es un
 * párrafo.
 */
export const AVISO_IMPORTANTE: readonly string[] = [
  'El material de estudio, simuladores y reactivos disponibles en El Monote te ' +
    'Guía tienen fines exclusivamente educativos y de preparación.',
  'Su uso no garantiza el ingreso a la cuota anual de aspirantes seleccionados ' +
    'para las escuelas militares de la Universidad del Ejército y Fuerza Aérea ' +
    '(U.D.E.F.A.) ni para cualquier otro plantel de la Secretaría de la Defensa ' +
    'Nacional (DEFENSA).',
  'El desempeño en el proceso de admisión depende de diversos factores, entre ' +
    'ellos la preparación constante del aspirante, su desempeño durante las ' +
    'evaluaciones y el cumplimiento de los requisitos establecidos en la ' +
    'convocatoria oficial vigente.',
  'Se recomienda complementar la preparación con el estudio de las guías y la ' +
    'información oficial publicadas por la Secretaría de la Defensa Nacional (DEFENSA).',
  'El Monote te Guía es un proyecto independiente y no está afiliado, ' +
    'autorizado, patrocinado ni respaldado por la DEFENSA, la U.D.E.F.A. o ' +
    'cualquiera de sus planteles militares.',
]

/** Los documentos legales, para armar el menú del pie de página y el índice. */
export const DOCUMENTOS_LEGALES = [
  { slug: 'aviso-legal', titulo: 'Aviso legal' },
  { slug: 'descargo', titulo: 'Descargo de responsabilidad' },
  { slug: 'terminos', titulo: 'Términos y condiciones' },
  { slug: 'privacidad', titulo: 'Política de privacidad' },
  { slug: 'cookies', titulo: 'Política de cookies' },
  { slug: 'reembolsos', titulo: 'Política de reembolsos' },
] as const
