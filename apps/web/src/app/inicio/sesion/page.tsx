'use client'

/**
 * Ruta entrada del "Examen simulador completo".
 * Crea la sesión con POST /sesiones-completas usando el plantelId del usuario,
 * y redirige al primer examen (Psicométrico) con ?sesion=<id> en la URL.
 * A partir de ahí el simulador maneja el flujo secuencial de las 3 fases.
 */

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

type Perfil = { id: number; plantelId: number | null }
type Sesion = { id: number }

// Secuencia de exámenes en la sesión completa (por examenId).
// Coincide con la BD: 1=psicométrico, 2=personalidad, 3=axiológico.
export const SECUENCIA_EXAMENES = [1, 2, 3] as const

export default function ArrancarSesionPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelado = false

    async function arrancar() {
      try {
        const perfil = await apiFetch<Perfil>('/auth/perfil')
        if (cancelado) return
        if (!perfil.plantelId) {
          setError('Necesitas elegir un plantel antes de iniciar el simulador completo.')
          return
        }
        // Candado de acceso: la sesión psicológica es de pago. Si el muro está
        // activo y no se ha comprado el módulo, a /precios ANTES de crear una
        // sesión vacía (el simulador vuelve a frenar por si acaso).
        const acceso = await apiFetch<{ candadoActivo: boolean; modulos: string[] }>(
          '/acceso/mios',
        )
        if (cancelado) return
        if (acceso.candadoActivo && !acceso.modulos.includes('psicologico')) {
          router.replace('/precios')
          return
        }
        const sesion = await apiFetch<Sesion>('/sesiones-completas', {
          method: 'POST',
          body: { plantelId: perfil.plantelId },
        })
        if (cancelado) return
        // Arrancamos con el primer examen de la secuencia
        router.replace(`/inicio/simulador/${SECUENCIA_EXAMENES[0]}?sesion=${sesion.id}`)
      } catch (err) {
        if (!cancelado) setError((err as Error).message)
      }
    }

    arrancar()
    return () => {
      cancelado = true
    }
  }, [router])

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="max-w-md rounded-xl border border-destructive/30 bg-destructive/10 p-6">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p className="font-semibold">No pudimos iniciar la sesión</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
          <Link
            href="/inicio"
            className={cn(buttonVariants({ variant: 'outline' }), 'mt-4')}
          >
            Volver a inicio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-3 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" />
        <p className="text-sm">Preparando tu sesión completa...</p>
      </div>
    </main>
  )
}
