import Link from 'next/link'
import { XCircle } from 'lucide-react'

export const metadata = { title: 'Pago no completado · El Monote te Guía' }

export default function PagoErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <XCircle className="mx-auto mb-4 h-12 w-12 text-destructive" />
        <h1 className="text-xl font-semibold text-foreground">
          El pago no se completó
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          No se realizó ningún cargo. Puedes intentarlo de nuevo cuando quieras.
        </p>
        <Link
          href="/precios"
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Volver a los paquetes
        </Link>
      </div>
    </main>
  )
}
