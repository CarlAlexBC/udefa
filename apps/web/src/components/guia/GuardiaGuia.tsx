'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { Lock, Loader2, ArrowRight } from 'lucide-react'

type Estado = 'cargando' | 'ok' | 'bloqueado'

/**
 * Muro de pago de la Guía del Aspirante. Sólo muestra el contenido si el usuario
 * tiene el módulo psicológico (la Guía va incluida en Psicológico y Completa).
 * Con el candado apagado —o si la consulta falla— deja pasar (default abierto),
 * igual que el resto del muro.
 *
 * Nota: la Guía es contenido estático del frontend, así que este candado es a
 * nivel de interfaz. Para blindaje real habría que servirla desde un endpoint
 * del backend que verifique el acceso.
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
      .catch(() => setEstado('ok'))
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
