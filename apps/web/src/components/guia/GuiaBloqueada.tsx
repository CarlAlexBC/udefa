import Link from 'next/link'
import { Lock, ArrowRight, AlertCircle } from 'lucide-react'
import type { ResultadoAccesoGuia } from '@/lib/guia-acceso'

/**
 * Pantalla que se muestra en lugar de una sección de la Guía cuando el servidor
 * NO pudo confirmar que esta persona tiene acceso.
 *
 * Es un componente de SERVIDOR a propósito: es el reemplazo de `GuardiaGuia`
 * (que es de cliente y sólo escondía el contenido ya enviado). Aquí no hay nada
 * que esconder — cuando esto se pinta, el .md ni siquiera se leyó del disco.
 *
 * El texto de "sin módulo" es el mismo que ya usaba GuardiaGuia, para que quien
 * llegue por cualquiera de los dos caminos lea lo mismo.
 */
export function GuiaBloqueada({
  motivo,
}: {
  motivo: Extract<ResultadoAccesoGuia, { permitido: false }>['motivo']
}) {
  if (motivo === 'sin-modulo') {
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

  if (motivo === 'sin-sesion') {
    return (
      <div className="mx-auto max-w-md px-6 py-16 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
          <Lock className="h-6 w-6 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground">
          Tu sesión ya no está abierta
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Vuelve a entrar con tu correo y contraseña para seguir leyendo la Guía.
        </p>
        <Link
          href="/login?returnTo=/inicio/guia"
          className="mt-6 inline-flex items-center gap-1 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Iniciar sesión
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  // 'error' — no pudimos preguntarle al backend. Se cierra por si acaso, pero
  // dejando claro que la falla es nuestra: quien pagó no tiene por qué pensar
  // que perdió su acceso.
  return (
    <div className="mx-auto max-w-md px-6 py-16 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
        <AlertCircle className="h-6 w-6 text-muted-foreground" />
      </div>
      <h1 className="text-2xl font-semibold text-foreground">
        No pudimos confirmar tu acceso
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Es un problema nuestro, no tuyo. Si compraste el paquete Psicológico o el
        Completa, tu acceso sigue ahí: recarga en un momento.
      </p>
      <Link
        href="/inicio"
        className="mt-6 inline-flex items-center gap-1 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
      >
        Volver a inicio
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
