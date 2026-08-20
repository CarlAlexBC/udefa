'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { Lock, Loader2, ArrowRight, AlertCircle } from 'lucide-react'

type Estado = 'cargando' | 'ok' | 'bloqueado' | 'sin-confirmar'

/**
 * Muro de pago de la Guía del Aspirante, a nivel de INTERFAZ.
 *
 * Qué protege y qué no. Esto corre en el navegador: decide si se PINTA lo que
 * envuelve, no si el servidor lo manda. Por eso ya no lo usa la página de una
 * sección —ahí el candado es de servidor y el texto ni se lee del disco si no
 * hay acceso (ver lib/guia-acceso.ts)—. Aquí sólo queda envolviendo el índice y
 * las páginas de capítulo, que muestran TÍTULOS, no el manual.
 *
 * Antes, si la consulta fallaba, dejaba pasar ("default abierto"). Ese fue
 * exactamente el error que hizo posible leer la Guía completa con una cookie
 * inventada: bastaba que la comprobación no respondiera. Ahora una falla no
 * abre: muestra un aviso de que no se pudo confirmar, diciendo claro que el
 * problema es nuestro para que quien pagó no crea que perdió su acceso.
 */
export function GuardiaGuia({ children }: { children: React.ReactNode }) {
  const [estado, setEstado] = useState<Estado>('cargando')

  useEffect(() => {
    apiFetch<{ candadoActivo: boolean; modulos: string[] }>('/acceso/mios')
      .then((a) =>
        setEstado(
          a.candadoActivo && !a.modulos.includes('psicologico')
            ? 'bloqueado'
            : 'ok',
        ),
      )
      .catch(() => setEstado('sin-confirmar'))
  }, [])

  if (estado === 'cargando') {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p className="text-sm">Cargando…</p>
        </div>
      </div>
    )
  }

  if (estado === 'sin-confirmar') {
    return (
      <div className="mx-auto max-w-md px-6 py-16 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
          <AlertCircle className="h-6 w-6 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground">
          No pudimos confirmar tu acceso
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Es un problema nuestro, no tuyo. Si compraste el paquete Psicológico o
          el Completa, tu acceso sigue ahí: recarga en un momento.
        </p>
      </div>
    )
  }

  if (estado === 'bloqueado') {
    return (
      <div className="mx-auto max-w-md px-6 py-16 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
          <Lock className="h-6 w-6 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground">
          La Guía del Aspirante está bloqueada
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          El manual completo viene incluido en los paquetes{' '}
          <span className="font-medium text-foreground">Psicológico</span> y{' '}
          <span className="font-medium text-foreground">Completa</span>.
          Desbloquéalo para leerlo dentro de la plataforma.
        </p>
        <Link
          href="/precios"
          className="mt-6 inline-flex items-center gap-1 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Ver los paquetes
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return <>{children}</>
}
