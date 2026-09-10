import type { ReactNode } from 'react'

/**
 * El banco de reactivos usa *cursiva* y **negrita** al estilo Markdown para
 * títulos de libro, siglas en inglés y variables (ej. "el eje de las *x*").
 * El importador guarda ese texto tal cual llega del `.md` — es al mostrarlo
 * donde había que interpretarlo, y hasta ahora ningún componente del examen
 * lo hacía, así que los asteriscos se veían literales en pantalla.
 *
 * Deliberadamente NO es un parser de Markdown completo (ya existe
 * `MarkdownRenderer` para eso, usado en la Guía): sólo reconoce pares de
 * asteriscos, para no interpretar por accidente un guion o una almohadilla
 * suelta dentro de un enunciado como lista o encabezado.
 */
export function renderizarEnfasis(texto: string): ReactNode {
  const partes = texto.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return partes.map((parte, i) => {
    if (parte.startsWith('**') && parte.endsWith('**') && parte.length >= 4) {
      return <strong key={i}>{parte.slice(2, -2)}</strong>
    }
    if (parte.startsWith('*') && parte.endsWith('*') && parte.length >= 2) {
      return <em key={i}>{parte.slice(1, -1)}</em>
    }
    return parte
  })
}
