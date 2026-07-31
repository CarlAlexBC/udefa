'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { apiFetch } from '@/lib/api'

/**
 * Botón de compra de un paquete. Si `paquete` es null (plan gratis) manda a
 * registro. Si no, pide al backend la preferencia de Mercado Pago y redirige al
 * checkout. Sin sesión, el backend responde 401 → lo mandamos a iniciar sesión.
 */
export function BotonPaquete({
  paquete,
  label,
  color,
  onColor,
  filled,
}: {
  paquete: string | null
  label: string
  color: string
  onColor: string
  filled: boolean
}) {
  const router = useRouter()
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  async function comprar() {
    if (!paquete) {
      router.push('/registro')
      return
    }
    setError('')
    setCargando(true)
    try {
      const res = await apiFetch<{ initPoint?: string }>('/pagos/preferencia', {
        method: 'POST',
        body: { paquete },
      })
      if (res.initPoint) {
        window.location.href = res.initPoint
        return
      }
      throw new Error('sin-checkout')
    } catch (e) {
      const msg = (e as Error).message ?? ''
      // Sin sesión: a login, y de regreso a precios.
      if (/unauthorized|401/i.test(msg)) {
        router.push('/login?returnTo=/precios')
        return
      }
      setError('No se pudo iniciar el pago. Intenta de nuevo.')
      setCargando(false)
    }
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={comprar}
        disabled={cargando}
        className="w-full rounded-md border px-4 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
        style={
          filled
            ? { backgroundColor: color, color: onColor, borderColor: color }
            : { backgroundColor: 'transparent', color, borderColor: color }
        }
      >
        {cargando ? 'Redirigiendo…' : label}
      </button>
      {error && (
        <p className="mt-2 text-center text-xs text-destructive">{error}</p>
      )}
    </div>
  )
}
