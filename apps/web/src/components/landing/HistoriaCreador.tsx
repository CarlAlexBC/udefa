'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * La historia de Carlo, en sus palabras.
 *
 * EL TEXTO ES SUYO, ESCRITO POR ÉL. No se reescribe ni se "mejora": es lo único
 * de la portada que no puede sonar a nadie más. Si hay que corregir algo, que
 * sea ortografía, y avisándole.
 *
 * SE PLIEGA SÓLO EN TELÉFONO, y por sitio, no por contenido: son casi
 * cuatrocientas palabras en una portada que ya carga bastante. Ahí se muestran
 * los cuatro párrafos del arco —los dos intentos fallidos y el tercero que sí—
 * que es donde el aspirante se reconoce, y el resto se abre para quien quiera
 * seguir. Quien se detuvo ahí, ya recibió lo importante.
 *
 * En pantalla ancha no se pliega nada: las dos columnas ya resuelven el alto.
 *
 * EL CIERRE SE VE SIEMPRE, esté abierta o cerrada. Es la promesa que le hace al
 * que está leyendo, y una sección que termina en un botón de "leer más" no
 * termina: se interrumpe.
 */

/** Lo que se lee de entrada: el arco de los tres intentos. */
const ARRANQUE = [
  'Soy el Monote, creador de El Monote te Guía.',
  'Antes de crear esta página, fui aspirante para ingresar al sistema educativo militar. Durante tres años intenté cumplir uno de mis principales objetivos: ingresar al Heroico Colegio Militar.',
  'Presenté el proceso de admisión en tres ocasiones. Las primeras dos veces no logré superar el filtro psicológico. En lugar de rendirme, decidí entender qué estaba haciendo mal, prepararme de una manera diferente y volver a intentarlo.',
  'En mi tercer intento conseguí superar el proceso psicológico y finalmente ingresé como cadete al Heroico Colegio Militar.',
]

/** Lo que se abre: por qué existe la plataforma. */
const RESTO = [
  'Ahí pude conocer de primera mano una parte del proceso que muchos aspirantes solamente conocen por rumores, experiencias de terceros o información incompleta. Aunque mi estancia como cadete terminó después de aproximadamente dos meses por una situación médica detectada posteriormente, esa experiencia cambió por completo mi perspectiva.',
  'Entendí que muchos jóvenes tienen la capacidad y la determinación para ingresar, pero llegan al proceso sin saber realmente qué esperar, cómo prepararse o cómo afrontar los diferentes exámenes de admisión.',
  'Por eso, desde 2023, comencé a desarrollar material de preparación para aspirantes.',
  'Lo que comenzó como unas cuantas guías terminó convirtiéndose en El Monote te Guía: un proyecto creado para reunir preparación, simuladores, ejercicios y orientación enfocada específicamente en quienes buscan ingresar a instituciones militares.',
  'Mi objetivo no es prometerte que una guía hará el examen por ti.',
  'Mi objetivo es que llegues al proceso mejor preparado, con mayor conocimiento de lo que vas a enfrentar y con una estrategia de estudio mucho más clara.',
]

/** El remate. Va aparte porque se ve siempre, abierta o cerrada. */
const CIERRE = [
  'Porque yo ya estuve del otro lado.',
  'Sé lo que se siente fallar.',
  'Sé lo que significa volver a intentarlo.',
  'Y también sé lo que se siente ver finalmente tu nombre entre los aspirantes que lo lograron.',
]

export function HistoriaCreador() {
  const [abierta, setAbierta] = useState(false)

  return (
    <div>
      {/* DOS COLUMNAS EN PANTALLA ANCHA, UNA EN TELÉFONO.
          En computadora la historia cabe en la mitad de alto, y por eso ahí no
          hace falta plegarla: se ve entera y el botón desaparece. En teléfono
          dos columnas darían renglones de veinte caracteres, ilegibles, así
          que se queda en una sola y con el «Seguir leyendo».
          La clase break-inside-avoid impide que un párrafo se parta a la mitad
          entre el pie de una columna y la cabeza de la otra. */}
      <div className="lg:columns-2 lg:gap-8">
        {ARRANQUE.map((p) => (
          <p
            key={p}
            className="mb-3 break-inside-avoid text-base leading-relaxed text-foreground"
          >
            {p}
          </p>
        ))}

        {RESTO.map((p) => (
          <p
            key={p}
            className={
              'mb-3 break-inside-avoid text-base leading-relaxed text-foreground' +
              (abierta ? '' : ' hidden lg:block')
            }
          >
            {p}
          </p>
        ))}
      </div>

      {/* El botón sólo existe donde hay algo escondido: en teléfono. */}
      {!abierta && (
        <button
          type="button"
          onClick={() => setAbierta(true)}
          className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline lg:hidden"
        >
          Seguir leyendo
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      )}

      {/* El remate: frases cortas y sueltas, con el ritmo con que él las
          escribió. Juntarlas en un párrafo les quitaría el golpe. */}
      <div className="mt-5 border-l-[3px] border-accent pl-4">
        {CIERRE.map((p) => (
          <p
            key={p}
            className="text-base font-medium leading-relaxed text-foreground"
          >
            {p}
          </p>
        ))}
      </div>

      <p className="mt-5 text-base leading-relaxed text-foreground">
        Si estás dispuesto a luchar por tu objetivo, yo te ayudo a prepararte
        para llegar hasta él.
      </p>
      <p className="mt-2 text-lg font-semibold text-foreground">
        Bienvenido a El Monote te Guía.
      </p>
    </div>
  )
}
