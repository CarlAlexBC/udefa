'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { Lightbulb } from 'lucide-react'

/**
 * "Entiende el tema" — la explicación en palabras simples del capítulo al que
 * pertenece el reactivo que el aspirante ACABA de contestar.
 *
 * Va SIEMPRE debajo de la cita del libro, nunca en su lugar: la cita es textual
 * y es la que vale para el examen; esto es la ayuda para entenderla. Son dos
 * cosas distintas y se ven distintas a propósito.
 *
 * Aparece sola cuando existe. Si ese capítulo todavía no tiene explicación
 * escrita —hoy casi ninguno— no se pinta nada, y si la consulta falla, tampoco.
 * Callar aquí es lo correcto: es una capa que suma, no un candado; un error
 * rojo por una ayuda que no llegó estorbaría más de lo que ayuda. (Donde callar
 * SÍ sería un error es en los candados de acceso — ahí se avisa siempre.)
 *
 * El backend sólo la entrega si este aspirante contestó ESE reactivo (freno
 * anti-cosecha, ver ExplicacionesService). Por eso se pide justo después de
 * contestar y no antes: pedirla en cualquier otro momento devuelve 403.
 */
export function EntiendeElTema({ reactivoId }: { reactivoId: number }) {
  const [texto, setTexto] = useState<string | null>(null)

  useEffect(() => {
    // `vivo` evita pintar la explicación de un reactivo sobre el siguiente:
    // el aspirante puede avanzar antes de que llegue la respuesta.
    let vivo = true
    setTexto(null)

    apiFetch<{ explicacion: string | null }>(
      `/explicaciones/por-reactivo?reactivoId=${reactivoId}`,
    )
      .then((r) => {
        if (vivo) setTexto(r.explicacion)
      })
      .catch(() => {
        if (vivo) setTexto(null)
      })

    return () => {
      vivo = false
    }
  }, [reactivoId])

  if (!texto) return null

  return (
    <div className="mt-4 rounded-xl border border-military/30 bg-military/5 p-5">
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-military">
        <Lightbulb className="h-3.5 w-3.5 shrink-0" />
        Entiende el tema
      </p>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-foreground">
        {texto}
      </p>
    </div>
  )
}
