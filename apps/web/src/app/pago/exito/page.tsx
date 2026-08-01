'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import { CheckCircle2, Loader2, Clock, AlertCircle } from 'lucide-react'

export default function PagoExitoPage() {
  return (
    <Suspense fallback={null}>
      <Contenido />
    </Suspense>
  )
}

type Estado = 'confirmando' | 'listo' | 'pendiente' | 'error'

function Contenido() {
  const params = useSearchParams()
  const paymentId = params.get('payment_id') || params.get('collection_id')
  const [estado, setEstado] = useState<Estado>('confirmando')

  useEffect(() => {
    if (!paymentId) {
      setEstado('pendiente')
      return
    }
    apiFetch<{ otorgado: boolean }>('/pagos/confirmar', {
      method: 'POST',
      body: { paymentId },
    })
      .then((r) => setEstado(r.otorgado ? 'listo' : 'pendiente'))
      .catch(() => setEstado('error'))
  }, [paymentId])

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        {estado === 'confirmando' && (
          <>
            <Loader2 className="mx-auto mb-4 h-10 w-10 animate-spin text-accent" />
            <h1 className="text-xl font-semibold text-foreground">
              Confirmando tu pago…
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Un momento, estamos verificando con Mercado Pago.
            </p>
          </>
        )}

        {estado === 'listo' && (
          <>
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-military" />
            <h1 className="text-2xl font-semibold text-foreground">
              ¡Pago confirmado!
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Tu acceso ya está activo. Inicia sesión con el correo y la
              contraseña que registraste para entrar a tu preparación.
            </p>
            <Link
              href="/login?returnTo=/inicio"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Iniciar sesión
            </Link>
          </>
        )}

        {estado === 'pendiente' && (
          <>
            <Clock className="mx-auto mb-4 h-12 w-12 text-accent" />
            <h1 className="text-xl font-semibold text-foreground">
              Tu pago está en proceso
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              En cuanto se acredite, tu acceso se activa automáticamente. Inicia
              sesión con el correo que registraste para revisarlo.
            </p>
            <Link
              href="/login?returnTo=/inicio"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Iniciar sesión
            </Link>
          </>
        )}

        {estado === 'error' && (
          <>
            <AlertCircle className="mx-auto mb-4 h-12 w-12 text-destructive" />
            <h1 className="text-xl font-semibold text-foreground">
              No pudimos confirmar el pago
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Si el cargo se realizó, tu acceso se activará solo. Si no, intenta
              de nuevo desde los paquetes.
            </p>
            <Link
              href="/precios"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Volver a los paquetes
            </Link>
          </>
        )}
      </div>
    </main>
  )
}
