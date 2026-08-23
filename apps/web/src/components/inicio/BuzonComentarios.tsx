'use client'

import { useState } from 'react'
import { apiFetch } from '@/lib/api'
import { MessageSquare, Check, Loader2, ChevronDown, X } from 'lucide-react'

/** Los mismos topes que valida el servidor. */
const MINIMO = 10
const MAXIMO = 1000

/**
 * Buzón de comentarios del aspirante.
 *
 * VA PLEGADO, y esto es lo importante del diseño. La primera versión abría el
 * formulario siempre: cuatro renglones de caja de texto, contador y botón,
 * ocupando pantalla a todo el que entra a estudiar. Decisión de Carlo: que no
 * le robe vista a la interfaz.
 *
 * Plegado es UN RENGLÓN. Se abre en el mismo sitio al tocarlo, sin cambiar de
 * página: mandar a otra pantalla a alguien que sólo quería decir una frase es
 * un viaje que nadie hace.
 *
 * Va al FINAL de la pantalla de inicio, después del material de estudio: quien
 * entra viene a estudiar, no a opinar.
 *
 * NO es soporte con respuesta, y se dice en pantalla para no prometer una
 * conversación que la plataforma no tiene. Las cuentas de prueba no pueden
 * escribir: lo corta el servidor.
 */
export function BuzonComentarios() {
  const [abierto, setAbierto] = useState(false)
  const [texto, setTexto] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const sobran = texto.trim().length > MAXIMO
  const faltan = MINIMO - texto.trim().length

  async function enviar() {
    setError('')
    setEnviando(true)
    try {
      await apiFetch('/comentarios', { method: 'POST', body: { texto } })
      setEnviado(true)
      setTexto('')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setEnviando(false)
    }
  }

  // Acuse de recibo. Ocupa lo mismo que el renglón plegado: se manda un
  // comentario y la pantalla no da un salto.
  if (enviado) {
    return (
      <section className="mt-8">
        <div className="flex items-center gap-3 rounded-xl border border-military/40 bg-card px-5 py-3.5 shadow-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-military/15">
            <Check className="h-4 w-4 text-military" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-foreground">
              Tu comentario llegó. Gracias.
            </p>
            <p className="text-xs text-muted-foreground">
              Se lee todo, aunque no siempre haya respuesta.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setEnviado(false)}
            className="shrink-0 text-xs font-semibold text-accent hover:underline"
          >
            Escribir otro
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-8">
      <div className="rounded-xl border border-border bg-card shadow-sm">
        {/* El renglón: es todo lo que se ve si el aspirante no lo abre. */}
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          className="flex w-full items-center gap-3 px-5 py-3.5 text-left"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-foreground">
              ¿Qué le falta a la plataforma?
            </p>
            <p className="truncate text-xs text-muted-foreground">
              Si algo no se entiende o se rompió, escríbemelo. Lo leo yo.
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-accent">
            {abierto ? (
              <>
                Cerrar
                <X className="h-3 w-3" />
              </>
            ) : (
              <>
                Escribir
                <ChevronDown className="h-3 w-3" />
              </>
            )}
          </span>
        </button>

        {abierto && (
          <div className="border-t border-border/60 px-5 pb-4 pt-4">
            <textarea
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              rows={4}
              autoFocus
              placeholder="Cuéntame con tus palabras…"
              className="w-full resize-y rounded-lg border border-input bg-transparent p-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none"
            />

            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                {sobran
                  ? `Te pasaste por ${texto.trim().length - MAXIMO} caracteres.`
                  : faltan > 0
                    ? `Escribe al menos ${faltan} caracteres más.`
                    : `${texto.trim().length} de ${MAXIMO} caracteres.`}
              </p>
              <button
                type="button"
                disabled={enviando || faltan > 0 || sobran}
                onClick={enviar}
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {enviando ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Enviando…
                  </span>
                ) : (
                  'Enviar comentario'
                )}
              </button>
            </div>

            {error && <p className="mt-2 text-xs text-destructive">{error}</p>}

            <p className="mt-3 text-[11px] text-muted-foreground">
              Llega con tu nombre y tu correo, para poder contestarte si hace
              falta. No es un chat de soporte.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
