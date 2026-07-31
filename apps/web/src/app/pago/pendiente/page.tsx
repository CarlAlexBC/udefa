import Link from 'next/link'
import { Clock } from 'lucide-react'

export const metadata = { title: 'Pago en proceso · El Monote te Guía' }

export default function PagoPendientePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <Clock className="mx-auto mb-4 h-12 w-12 text-accent" />
        <h1 className="text-xl font-semibold text-foreground">
          Tu pago está en proceso
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algunos medios (como el pago en efectivo) tardan en acreditarse. En
          cuanto se confirme, tu acceso se activa automáticamente.
        </p>
        <Link
          href="/inicio"
          className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Ir a mi cuenta
        </Link>
      </div>
    </main>
  )
}
