'use client'

import { useState } from 'react'
import { apiFetch } from '@/lib/api'
import { AlertCircle, Loader2, Trash2 } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Borrar una cuenta — sin vuelta atrás.

   Pide escribir el correo antes de borrar, y no es burocracia: al borrar se van
   también sus intentos, sus respuestas, su cola de repaso y su racha. Este panel
   se usa con prisa y las filas se parecen entre sí; obligar a leer el correo es
   lo que evita borrar al de la fila de arriba.
   ═══════════════════════════════════════════════════════════ */

export function ModalBorrarUsuario({
  usuario,
  onClose,
  onBorrado,
}: {
  usuario: { id: number; nombre: string; email: string; intentos: number }
  onClose: () => void
  onBorrado: (id: number) => void
}) {
  const [texto, setTexto] = useState('')
  const [borrando, setBorrando] = useState(false)
  const [error, setError] = useState('')

  const confirmado = texto.trim().toLowerCase() === usuario.email.toLowerCase()

  async function borrar() {
    if (!confirmado || borrando) return
    setBorrando(true)
    setError('')
    try {
      await apiFetch(`/usuarios/${usuario.id}`, { method: 'DELETE' })
      onBorrado(usuario.id)
      onClose()
    } catch (e) {
      setError((e as Error).message)
      setBorrando(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl border border-destructive/40 bg-card p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-1 flex items-center gap-2">
          <Trash2 className="h-5 w-5 text-destructive" />
          <h3 className="text-lg font-semibold text-foreground">
            Borrar esta cuenta
          </h3>
        </div>
        <p className="mb-3 text-sm break-all text-muted-foreground">
          <span className="font-semibold text-foreground">{usuario.nombre}</span>{' '}
          · {usuario.email}
        </p>

        <div className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3">
          <p className="text-xs leading-relaxed text-foreground">
            Se borra la cuenta y <strong>todo su historial</strong>: sus{' '}
            {usuario.intentos} intentos de examen, sus respuestas, su cola de
            repaso y su racha. No se puede deshacer.
          </p>
        </div>

        {error && (
          <div className="mb-3 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-2.5">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            <p className="text-xs text-destructive">{error}</p>
          </div>
        )}

        <label
          htmlFor="confirmar-borrado"
          className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Escribe su correo para confirmar
        </label>
        <input
          id="confirmar-borrado"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder={usuario.email}
          autoComplete="off"
          className="mt-1 h-9 w-full rounded-md border border-input bg-transparent px-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-destructive"
        />

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={borrar}
            disabled={!confirmado || borrando}
            className="inline-flex items-center gap-1.5 rounded-md bg-destructive px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40"
          >
            {borrando && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
            Borrar definitivamente
          </button>
        </div>
      </div>
    </div>
  )
}
