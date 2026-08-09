'use client'

import { useEffect } from 'react'
import { marcarSeccionLeida } from '@/lib/progreso-guia'

/**
 * Marca la sección como leída al abrirla. No pinta nada.
 *
 * Se marca al ENTRAR, no al llegar al final. Es una decisión, no un
 * atajo: el aspirante entra y sale de la Guía desde los diagnósticos
 * del panel de resultados, muchas veces a buscar un dato suelto sin
 * bajar hasta abajo. Marcar por llegar al final dejaría la barra
 * clavada en cero para el uso más común. Como el avance se puede
 * reiniciar desde el índice, equivocarse no cuesta nada.
 */
export function MarcarLeida({ slug }: { slug: string }) {
  useEffect(() => {
    marcarSeccionLeida(slug)
  }, [slug])

  return null
}
