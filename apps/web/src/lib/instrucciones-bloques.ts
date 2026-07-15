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
  respuestaCorrecta: string
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
      'Cada reactivo describe una situación o característica. Selecciona qué tanto estás de acuerdo con la afirmación. No hay respuestas correctas o incorrectas — el sistema evalúa la coherencia entre tus respuestas a lo largo del examen. Responde con honestidad y consistencia.',
    ejemplo: null,
    notaEspecial:
      'Este examen no se califica por aciertos. Se analiza tu perfil buscando contradicciones internas. Respuestas forzadas o poco naturales generan un perfil inconsistente.',
  },

  'Reactivos Axiológicos': {
    titulo: 'Examen Axiológico',
    instrucciones:
      'Cada reactivo describe a una persona ficticia con ciertos valores o conductas. Selecciona qué tanto TE PARECES a esa persona. Es una evaluación indirecta de tus valores personales. La institución busca alineación con lealtad, honor, disciplina y espíritu de cuerpo.',
    ejemplo: null,
    notaEspecial:
      'Este examen tampoco se califica por aciertos. Se analiza tu compatibilidad con el perfil axiológico militar. Responde honestamente — el sistema detecta perfiles idealizados poco creíbles.',
  },
}
