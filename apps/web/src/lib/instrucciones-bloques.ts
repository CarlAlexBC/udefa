/**
 * Instrucciones y ejemplos por bloque del examen psicométrico.
 *
 * Contenido extraído del PDF oficial "EXAMEN SIMULADOR PRUEBAS EIC-DN11 2026 4"
 * (bloques 1-3) y complementado desde "LA GUÍA DEL ASPIRANTE" sección 3.6
 * para el bloque 4 (Razonamiento Abstracto), que no aparece en el PDF simulador
 * porque requiere imágenes.
 *
 * Las claves de este mapa son el NOMBRE del bloque tal como aparece en la BD
 * — coincide 1-a-1 con `Bloque.nombre` del backend.
 */

export type EjemploReactivo = {
  enunciado: string
  opciones: string[]
  /**
   * Para exámenes calificables (psicométrico) — string de la opción correcta.
   * Para autoevaluación (personalidad/axiológico) — `null` porque no hay respuesta correcta;
   * el ejemplo se muestra sin marcar ninguna opción y la explicación cubre qué evalúa el reactivo.
   */
  respuestaCorrecta: string | null
  explicacion: string
}

export type InstruccionesBloque = {
  titulo: string
  instrucciones: string
  ejemplo: EjemploReactivo | null
  // Cuando el bloque no tenga reactivos aún, mostramos este mensaje en lugar del contenido.
  notaEspecial?: string
}

export const INSTRUCCIONES_POR_BLOQUE: Record<string, InstruccionesBloque> = {
  'Analogías Verbales y Cultura General': {
    titulo: 'Bloque 1 · Analogías Verbales y Cultura General',
    instrucciones:
      'Selecciona la opción que mantiene una relación lógica equivalente. Este bloque evalúa razonamiento verbal avanzado y capacidad de abstracción.',
    ejemplo: {
      enunciado: 'Causa es a Efecto como Problema es a:',
      opciones: ['Resultado', 'Solución', 'Conflicto', 'Proceso'],
      respuestaCorrecta: 'Solución',
      explicacion:
        'La causa genera un efecto. De manera equivalente, un problema requiere o conduce a una solución. La relación es origen → consecuencia o resolución.',
    },
  },

  'Sinónimos y Antónimos': {
    titulo: 'Bloque 2 · Sinónimos y Antónimos',
    instrucciones:
      'Selecciona el sinónimo o antónimo correcto según se indique entre paréntesis en cada reactivo.',
    ejemplo: {
      enunciado: '"Ambiguo" (ANTÓNIMO)',
      opciones: ['Confuso', 'Claro', 'Indefinido', 'Doble'],
      respuestaCorrecta: 'Claro',
      explicacion:
        '"Ambiguo" implica falta de claridad o múltiples interpretaciones. Su opuesto es "claro", que indica precisión y un único significado.',
    },
  },

  'Razonamiento Lógico-Matemático': {
    titulo: 'Bloque 3 · Razonamiento Lógico-Matemático',
    instrucciones:
      'Selecciona la opción que completa correctamente la secuencia. Detecta patrones aritméticos, geométricos o alfabéticos combinados.',
    ejemplo: {
      enunciado: '2, 3, 6, 7, 14, ?',
      opciones: ['20', '28', '30', '32'],
      respuestaCorrecta: '28',
      explicacion:
        'La secuencia alterna dos patrones: +1, ×2, +1, ×2… → 2→3 (+1), 3→6 (×2), 6→7 (+1), 7→14 (×2), por lo tanto 14→28 (×2).',
    },
  },

  'Razonamiento Abstracto': {
    titulo: 'Bloque 4 · Razonamiento Abstracto',
    instrucciones:
      'Este bloque evalúa análisis visual y detección de patrones espaciales. Cada reactivo presenta una serie de figuras y debes elegir la opción que completa la secuencia siguiendo la lógica de rotación, simetría o transformación.',
    ejemplo: null,
    notaEspecial:
      'Este bloque está en construcción — los reactivos con imágenes se están integrando. Por ahora te saltamos al panel de resultados cuando llegues aquí.',
  },

  'Reactivos de Personalidad': {
    titulo: 'Examen de Personalidad',
    instrucciones:
      'Cada reactivo es una afirmación breve sobre cómo eres o cómo reaccionas. Responde Sí o No según se ajuste a ti. No hay respuestas correctas o incorrectas — el sistema evalúa la coherencia entre tus respuestas a lo largo del examen. Responde con honestidad y consistencia.',
    ejemplo: {
      enunciado: 'Me interesa conocer cómo afectan mis acciones a otros.',
      opciones: ['Sí', 'No'],
      respuestaCorrecta: null,
      explicacion:
        'Este reactivo no tiene una respuesta correcta. Evalúa dimensiones como empatía y conciencia social. Cada reactivo pertenece a un tema y tiene una polaridad — algunos afirman rasgos positivos, otros los niegan. El sistema cruza tus respuestas del mismo tema: si dices "Sí" a "me interesa lo que sienten otros" y también "Sí" a "los sentimientos de los demás me dan igual", detecta una contradicción. Responde reflejando tu forma real de ser, no lo que crees que se espera.',
    },
    notaEspecial:
      'Este examen no se califica por aciertos. Se analiza tu perfil buscando contradicciones internas entre reactivos del mismo tema. Respuestas forzadas o poco naturales generan un perfil inconsistente.',
  },

  'Reactivos Axiológicos': {
    titulo: 'Examen Axiológico',
    instrucciones:
      'Cada reactivo describe a una persona ficticia con ciertos valores o conductas. Selecciona qué tanto TE PARECES a esa persona. Es una evaluación indirecta de tus valores personales. La institución busca alineación con lealtad, honor, disciplina y espíritu de cuerpo.',
    ejemplo: {
      enunciado:
        'Para esta persona la lealtad hacia sus compañeros está por encima de cualquier interés personal.',
      opciones: [
        'Me parezco totalmente',
        'Me parezco mucho',
        'Me parezco más o menos',
        'Me parezco poco',
        'No me parezco nada',
      ],
      respuestaCorrecta: null,
      explicacion:
        'La evaluación no busca que respondas siempre en el extremo positivo. Busca coherencia con el perfil que has venido construyendo en el examen de personalidad. Perfiles idealizados ("Me parezco totalmente" a todo lo positivo) resultan poco creíbles. Responde con base en cómo realmente actuarías en situaciones equivalentes.',
    },
    notaEspecial:
      'Este examen tampoco se califica por aciertos. Se analiza tu compatibilidad con el perfil axiológico militar. Responde honestamente — el sistema detecta perfiles idealizados poco creíbles.',
  },

}

/* ═══════════════════════════════════════════════════════════════
   EXÁMENES QUE CORREN DE CORRIDO — el examen cultural

   El examen cultural NO se presenta por bloques: es una sola tanda de
   100 reactivos con una única instrucción al principio y un solo
   cronómetro de 2 horas (confirmado por Carlo el 21 jul 2026).

   Y cambia por PLANTEL: cada escuela tiene su propio temario, así que
   las materias y el ejemplo resuelto NO se escriben a mano (antes eran
   las del HCM para todos). Se arman a partir de las materias reales del
   examen —los bloques ya vienen por plantel desde el backend—.

   Las materias siguen existiendo por dentro —para armar el examen y
   para diagnosticar en el panel de resultados— pero el aspirante no ve
   una pantalla de instrucciones entre una y otra: sólo un aviso de que
   cambió de materia.
   ═══════════════════════════════════════════════════════════════ */

/**
 * Materias del examen cultural por plantel, tal como las pide su temario
 * (docs/examen-cultural/temarios.json → `materias_en_portada`). Sirve al
 * dashboard, que muestra las materias ANTES de armar el examen y por eso no
 * puede leerlas de los bloques.
 *
 * La clave es el nombre del plantel EXACTO como está en la BD (`Plantel.nombre`)
 * — el mismo que usa apps/web/src/lib/planteles.ts.
 */
export const MATERIAS_CULTURAL_POR_PLANTEL: Record<string, string[]> = {
  'Heroico Colegio Militar': ['Español', 'Álgebra', 'Historia', 'Geografía'],
  'Escuela Militar de Medicina': ['Biología', 'Química', 'Física General', 'Álgebra'],
  'Escuela Militar de Odontología': ['Biología', 'Química', 'Física', 'Álgebra'],
  'Escuela Militar de Enfermería': ['Biología', 'Química', 'Álgebra'],
  'Escuela Militar de Oficiales de Sanidad': ['Biología', 'Química', 'Física General', 'Álgebra'],
  // Materias tomadas del reparto real en docs/examen-cultural/temarios.json
  // (se corrigió el typo "Analitíca" → "Analítica" del archivo fuente).
  'Escuela Militar de Ingeniería': ['Álgebra', 'Cálculo Diferencial e Integral', 'Geometría Analítica'],
  'Escuela Militar de Aviación': ['Matemáticas', 'Física', 'Geografía'],
  'Escuela Militar de Mantenimiento y Abastecimiento': ['Álgebra', 'Física', 'Trigonometría y Geometría Analítica'],
  'Escuela Militar de Especialistas de Fuerza Aérea': ['Geografía', 'Física', 'Matemáticas'],
  'Escuela Militar de Materiales de Guerra': ['Matemáticas', 'Español', 'Historia de México', 'Metodología de la Investigación'],
  // Falta: 'Escuela Militar de Transmisiones' — todavía no tiene temario en ninguna fuente.
}

/**
 * Une una lista de materias en español: `["A","B","C"]` → `"A, B y C"`.
 * Con `conjuncion: 'o'` da `"A, B o C"` (para el "practica sólo X u Y").
 */
export function unirMaterias(materias: string[], conjuncion: 'y' | 'o' = 'y'): string {
  if (materias.length === 0) return 'las materias de tu temario'
  if (materias.length === 1) return materias[0]
  return `${materias.slice(0, -1).join(', ')} ${conjuncion} ${materias[materias.length - 1]}`
}

/**
 * Ejemplos resueltos del examen cultural. Son reactivos REALES y TEXTUALES del
 * banco —no inventados— para que el aspirante vea el estilo exacto de su examen:
 * cuatro opciones muy parecidas y una sola correcta al pie de la letra.
 *
 * HCM → Álgebra de Baldor. Las escuelas de sanidad (EMM, EMO, EME, EMOS) →
 * Biología de Curtis, la materia que comparten las cuatro.
 */
const EJEMPLO_CULTURAL_ALGEBRA: EjemploReactivo = {
  enunciado: 'De acuerdo con el libro de Álgebra de Baldor, ¿qué es el Álgebra?',
  opciones: [
    'La rama de la Matemática que estudia la cantidad con valores determinados',
    'La parte de la Geometría que estudia las figuras y sus medidas',
    'La rama de la Matemática que estudia la cantidad considerada del modo más general posible',
    'La ciencia que estudia únicamente los números y sus operaciones',
  ],
  respuestaCorrecta:
    'La rama de la Matemática que estudia la cantidad considerada del modo más general posible',
  explicacion:
    'La primera opción describe la Aritmética, no el Álgebra, y es la confusión más común. Fíjate en que las cuatro opciones se parecen mucho: así es todo el examen. Léelas completas antes de contestar.',
}

const EJEMPLO_CULTURAL_BIOLOGIA: EjemploReactivo = {
  enunciado:
    'De acuerdo con el libro de Biología, ¿cuál es la principal restricción en cuanto al tamaño de la célula?',
  opciones: [
    'La que impone la relación entre su volumen y su superficie',
    'La que impone la resistencia de la membrana celular',
    'La que impone la cantidad de material genético que contiene',
    'La que impone la presión de las células vecinas',
  ],
  respuestaCorrecta: 'La que impone la relación entre su volumen y su superficie',
  explicacion:
    'Las cuatro opciones empiezan igual ("La que impone…") y todas suenan razonables, pero sólo una es la que dice el libro: la relación entre el volumen y la superficie de la célula. Así es todo el examen cultural — es de recuerdo literal, no de deducir. Léelas completas antes de contestar.',
}

/**
 * Elige el ejemplo según las materias del examen: si hay Biología es una escuela
 * de sanidad (EMM, EMO, EME, EMOS); si no, es el HCM.
 */
function ejemploCulturalPara(materias: string[]): EjemploReactivo {
  const hayBiologia = materias.some((m) => m.toLowerCase().startsWith('biolog'))
  return hayBiologia ? EJEMPLO_CULTURAL_BIOLOGIA : EJEMPLO_CULTURAL_ALGEBRA
}

/**
 * Arma la pantalla de instrucciones del examen cultural a partir de las materias
 * REALES del examen (`bloques.map(b => b.nombre)`). Así cada plantel ve su propia
 * lista y un ejemplo de una materia suya, sin escribir a mano las del HCM.
 */
export function construirInstruccionesCultural(materias: string[]): InstruccionesBloque {
  const lista = unirMaterias(materias)
  const hayAlgebra = materias.some((m) => m.toLowerCase().startsWith('álgebra') || m.toLowerCase().startsWith('algebra'))
  return {
    titulo: 'Examen cultural',
    instrucciones:
      `Son 100 reactivos de ${lista}, uno tras otro y sin pausa entre materias. ` +
      'Tienes 2 horas para todo el examen: puedes repartirlas como quieras, pero cuando el reloj llegue a cero el examen se cierra estés donde estés. ' +
      'Cada reactivo sale de los libros oficiales del temario y se evalúa que RECUERDES lo que dice el libro, no que lo deduzcas.' +
      (hayAlgebra ? ' En Álgebra no vas a resolver operaciones: se te pregunta por definiciones y reglas.' : ''),
    ejemplo: ejemploCulturalPara(materias),
    notaEspecial:
      'Un solo cronómetro para todas las materias. Si te atoras en una pregunta, márcala mentalmente y sigue — es preferible perder una que quedarte sin tiempo para las últimas veinte.',
  }
}

/** Aviso breve al entrar a cada materia. No corta el examen: sólo avisa. */
export const AVISO_CAMBIO_MATERIA: Record<string, string> = {
  // HCM
  Español: 'Reactivos del Taller de Lectura y Redacción 1.',
  'Álgebra': 'Álgebra de Baldor. Definiciones y reglas, no operaciones.',
  Historia: 'Historia Universal, el mundo contemporáneo.',
  'Geografía': 'Geografía Moderna de México. Fíjate en las cifras.',
  // Escuelas de sanidad (EMM, EMO, EME, EMOS)
  'Biología': 'Biología de Curtis. Lo que dice el libro, al pie de la letra.',
  'Química': 'Química de Chang. Definiciones, nomenclatura y conceptos.',
  'Física': 'Física de Pérez Montiel. Conceptos y definiciones, no problemas.',
  'Física General': 'Física de Pérez Montiel. Conceptos y definiciones, no problemas.',
}
