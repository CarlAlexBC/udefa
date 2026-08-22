/**
 * La frase del día de la tarjeta de racha.
 *
 * Filosofía (sobre todo estoicos), psicología del hábito y algunas de autores
 * que vienen al caso. Las pidió Carlo así, y con una regla que impuso él:
 * **todas van citadas**.
 *
 * ── LA REGLA DE LAS CITAS ──────────────────────────────────────────────────
 * Circulan muchísimas frases mal atribuidas. Aquí:
 *   · Si la frase está en una obra concreta, se nombra la obra.
 *   · Si es popular pero de origen discutido, el autor empieza con "atribuida a"
 *     y se explica en `nota`. No se hace pasar por textual lo que no lo es.
 *   · Si lo que se recoge es la IDEA de alguien y no sus palabras, se dice
 *     "idea de" — el aspirante merece saber la diferencia.
 * Las traducciones del latín, griego o inglés varían según la edición; se
 * eligieron versiones fieles y legibles, no literales de una edición concreta.
 *
 * ── CÓMO SE AGREGAN MÁS ────────────────────────────────────────────────────
 * Añádelas al final del arreglo. Con 30 hay para un mes sin repetir; entre más
 * haya, más tarda en dar la vuelta. Todos los aspirantes ven la MISMA frase el
 * mismo día: se elige por la fecha, no al azar, para que puedan comentarla
 * entre ellos.
 */

export type Frase = {
  texto: string
  autor: string
  obra?: string
  /** Sólo cuando la atribución tiene historia. Se muestra al pasar el ratón. */
  nota?: string
}

export const FRASES: Frase[] = [
  // ── Estoicos ──────────────────────────────────────────────────────────
  {
    texto: 'Lo que se interpone en el camino se vuelve el camino.',
    autor: 'Marco Aurelio',
    obra: 'Meditaciones, V',
  },
  {
    texto: 'No es que tengamos poco tiempo: es que perdemos mucho.',
    autor: 'Séneca',
    obra: 'Sobre la brevedad de la vida',
  },
  {
    texto: 'Mientras se aplaza, la vida pasa.',
    autor: 'Séneca',
    obra: 'Cartas a Lucilio, I',
  },
  {
    texto: 'Sufrimos más en la imaginación que en la realidad.',
    autor: 'Séneca',
    obra: 'Cartas a Lucilio',
  },
  {
    texto:
      'No busques que las cosas ocurran como quieres; quiere que ocurran como ocurren, y estarás en paz.',
    autor: 'Epicteto',
    obra: 'Enquiridión, VIII',
  },
  {
    texto:
      'No son las cosas las que perturban a los hombres, sino la opinión que tienen de ellas.',
    autor: 'Epicteto',
    obra: 'Enquiridión, V',
  },
  {
    texto: 'Dite primero qué quieres ser; después, haz lo que tengas que hacer.',
    autor: 'Epicteto',
    obra: 'Discursos, III',
  },
  {
    texto:
      'Al amanecer, cuando te cueste levantarte, recuerda: despierto para hacer el trabajo de un ser humano.',
    autor: 'Marco Aurelio',
    obra: 'Meditaciones, V',
  },
  {
    texto:
      'No pierdas más tiempo discutiendo cómo debe ser un hombre bueno. Sé uno.',
    autor: 'Marco Aurelio',
    obra: 'Meditaciones, X',
  },
  {
    texto: 'Empieza de una vez a vivir.',
    autor: 'Séneca',
    obra: 'Cartas a Lucilio',
  },
  {
    texto: 'Ningún hombre es libre si no es dueño de sí mismo.',
    autor: 'atribuida a Epicteto',
    nota: 'Muy citada como suya; no aparece con estas palabras en el Enquiridión.',
  },
  {
    texto: 'La suerte ocurre cuando la preparación se encuentra con la oportunidad.',
    autor: 'atribuida a Séneca',
    nota: 'Se le atribuye desde hace siglos, pero no está en su obra conservada.',
  },

  // ── Psicología y ciencia del hábito ───────────────────────────────────
  {
    texto: 'Quien tiene un porqué para vivir puede soportar casi cualquier cómo.',
    autor: 'Nietzsche, citado por Viktor Frankl',
    obra: 'El hombre en busca de sentido',
  },
  {
    texto: 'Somos lo que hacemos repetidamente.',
    autor: 'Will Durant',
    obra: 'La historia de la filosofía',
    nota: 'Se atribuye a Aristóteles, pero la frase es de Durant resumiéndolo.',
  },
  {
    texto: 'El hábito es el enorme volante de la sociedad.',
    autor: 'William James',
    obra: 'Principios de psicología',
  },
  {
    texto: 'No hay nada tan fatigoso como una tarea eternamente pendiente.',
    autor: 'atribuida a William James',
    nota: 'Circula como suya desde hace décadas; no se ha localizado la fuente exacta.',
  },
  {
    texto:
      'La determinación es pasión y perseverancia sostenidas hacia metas de largo plazo.',
    autor: 'Angela Duckworth',
    obra: 'Grit',
  },
  {
    texto: 'Cambiar el “no puedo” por “todavía no” cambia lo que estás dispuesto a intentar.',
    autor: 'idea de Carol Dweck',
    obra: 'Mindset',
    nota: 'No es una cita textual: es su idea del “poder del todavía”.',
  },
  {
    texto:
      'Lo que separa a los expertos no es cuánto practican, sino cómo practican.',
    autor: 'idea de Anders Ericsson',
    obra: 'Número uno',
    nota: 'Resumen de su concepto de práctica deliberada, no una cita textual.',
  },
  {
    texto: 'No te elevas al nivel de tus metas: caes al nivel de tus sistemas.',
    autor: 'James Clear',
    obra: 'Hábitos atómicos',
  },
  {
    texto:
      'El talento es más barato que la sal de mesa. Lo que separa al talentoso del exitoso es mucho trabajo duro.',
    autor: 'Stephen King',
    obra: 'Mientras escribo',
  },
  {
    texto: 'La motivación te pone en marcha; el hábito te mantiene andando.',
    autor: 'atribuida a Jim Ryun',
    nota: 'Atribución habitual al atleta olímpico; sin fuente primaria localizada.',
  },

  // ── Otras que vienen al caso ──────────────────────────────────────────
  {
    texto: 'El que teme sufrir, ya sufre lo que teme.',
    autor: 'Michel de Montaigne',
    obra: 'Ensayos',
  },
  {
    texto: 'Ningún hombre se baña dos veces en el mismo río.',
    autor: 'Heráclito',
    nota: 'Formulación clásica de su idea, transmitida por Platón.',
  },
  {
    texto: 'Conócete a ti mismo.',
    autor: 'inscripción del templo de Delfos',
    nota: 'Máxima délfica; se ha atribuido a varios sabios griegos.',
  },
  {
    texto:
      'La perfección no es alcanzable, pero si la perseguimos podemos alcanzar la excelencia.',
    autor: 'Vince Lombardi',
    nota: 'Entrenador de futbol americano; atribución ampliamente aceptada.',
  },
  {
    texto: 'Ama tu destino: no desear que nada sea distinto de como es.',
    autor: 'Friedrich Nietzsche',
    obra: 'Ecce Homo',
    nota: 'Es su idea del amor fati, en versión breve.',
  },
  {
    texto: 'Sudar más en el entrenamiento es sangrar menos en la batalla.',
    autor: 'proverbio militar',
    nota: 'Se atribuye a Sun Tzu y a los marines; no está en El arte de la guerra.',
  },
  {
    texto:
      'La disciplina tarde o temprano vencerá a la inteligencia, si la inteligencia no se disciplina.',
    autor: 'atribuida a Yokoi Kenji',
    nota: 'Conferencista colombo-japonés; frase suya de conferencia, sin obra escrita.',
  },
  {
    texto: 'El que no sabe a dónde va, ningún viento le es favorable.',
    autor: 'atribuida a Séneca',
    nota: 'Versión popular de una idea que sí aparece en sus Cartas a Lucilio.',
  },
]

/**
 * La frase de hoy. Se elige por el día del año, no al azar: así todos los
 * aspirantes ven la misma el mismo día —se puede comentar entre ellos— y no
 * cambia al recargar la página, que sería inquietante.
 */
export function fraseDelDia(hoy: Date = new Date()): Frase {
  const inicio = new Date(hoy.getFullYear(), 0, 0)
  const diaDelAnio = Math.floor((hoy.getTime() - inicio.getTime()) / 86_400_000)
  return FRASES[diaDelAnio % FRASES.length]
}
