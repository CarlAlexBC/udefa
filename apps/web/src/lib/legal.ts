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
   * ⏳ PENDIENTE — HOY NO SE PUBLICA EN NINGUNA PÁGINA.
   *
   * Identidad fiscal. Escenario elegido: persona física con actividad
   * empresarial (RESICO). Se retiró del Aviso legal y de la Política de
   * privacidad (9 ago 2026) porque **todavía no hay alta ante el SAT**, y
   * afirmar una identidad fiscal que no existe sería decir algo que no es
   * cierto.
   *
   * Cuando te des de alta: sustituye el marcador por tu nombre completo + RFC,
   * p. ej. 'Carlo Alexander [Apellidos], persona física con actividad
   * empresarial (RESICO), RFC XXXX000000XX0', y vuelve a insertarlo en
   * `src/app/legal/aviso-legal/page.tsx` (sección "Identidad del responsable")
   * y en `src/app/legal/privacidad/page.tsx` (sección "Responsable de tus
   * datos"), que es de donde se quitó.
   */
  identidadFiscal: POR_COMPLETAR('persona física con actividad empresarial (RESICO): nombre completo + RFC'),

  /**
   * Correo de contacto que se publica en los documentos (soporte/privacidad).
   *
   * Decisión de Carlo (20 ago 2026): se publica su correo personal mientras no
   * haya dominio propio ni alta ante el SAT. Es el único dato de contacto que
   * puede dar hoy sin comprometerse de más, y dejarlo en blanco sería peor: un
   * documento legal sin forma de contactar al responsable no sirve para lo que
   * existe. Cuando haya dominio, cámbialo por contacto@tudominio.com.
   */
  correoContacto: 'elmonoteteguia@gmail.com',

  /** Dominio del sitio, cuando lo tengas. HOY NO SE PUBLICA en ninguna página. */
  sitioWeb: POR_COMPLETAR('dominio del sitio, p. ej. https://elmonoteteguia.com'),

  /** Redes públicas del proyecto. */
  tiktok: 'https://www.tiktok.com/@elmonoteteguia',

  /**
   * ⏳ PENDIENTE — HOY NO SE PUBLICA EN NINGUNA PÁGINA.
   *
   * Ciudad/Estado cuya jurisdicción aplica en Términos (cláusula de "tribunales
   * competentes"). Se retiró de la página el 20 ago 2026 por la misma razón que
   * `identidadFiscal`: señalar unos tribunales concretos equivale a declarar un
   * domicilio de operación, y eso va junto con el alta fiscal.
   *
   * Mientras tanto la cláusula 10 remite a los tribunales competentes conforme a
   * la ley mexicana, que es exactamente lo que aplica por defecto cuando no se
   * pacta un foro: no se pierde nada por no nombrarlo.
   *
   * Cuando lo fijes: pon aquí 'Ciudad, Estado' y vuelve a insertar
   * <DatoLegal valor={LEGAL.jurisdiccion} /> en la sección 10 de
   * `src/app/legal/terminos/page.tsx`.
   */
  jurisdiccion: POR_COMPLETAR('ciudad y estado para la cláusula de jurisdicción'),

  /**
   * Proveedor de pagos. Decidido: Mercado Pago (integración Checkout Pro).
   *
   * Nota: la Política de reembolsos se eliminó el 9 ago 2026 por decisión de
   * Carlo, y con ella su ventana de días. Si más adelante se define una postura
   * sobre cancelaciones y devoluciones, va como cláusula dentro de Términos
   * (sección 5, "Pagos, planes y acceso"), no como documento aparte.
   */
  proveedorPagos: 'Mercado Pago',

  /**
   * Fecha de última actualización que se muestra en cada documento.
   * Actualízala cuando cambies un texto legal.
   */
  ultimaActualizacion: '20 de agosto de 2026',
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
] as const
