/**
 * Piezas tipográficas compartidas por los documentos legales.
 *
 * Mantienen el mismo look en las seis páginas sin repetir clases de Tailwind
 * en cada archivo. Usan la paleta del sitio (foreground / muted-foreground).
 */

export function DocTitulo({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
      {children}
    </h1>
  )
}

export function DocActualizado({ fecha }: { fecha: string }) {
  return (
    <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
      Última actualización: {fecha}
    </p>
  )
}

export function DocSeccion({
  titulo,
  children,
}: {
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-lg font-semibold text-foreground">{titulo}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

export function DocParrafo({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
  )
}

export function DocLista({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-5 list-disc space-y-2 text-sm leading-relaxed text-muted-foreground marker:text-accent">
      {children}
    </ul>
  )
}

/**
 * Resalta un dato que aún falta rellenar en src/lib/legal.ts. Si el valor no
 * empieza con "[POR COMPLETAR", se muestra normal; si sí, se pinta en rojo
 * suave para que salte a la vista en la página.
 */
export function DatoLegal({ valor }: { valor: string }) {
  const pendiente = valor.startsWith('[POR COMPLETAR')
  if (!pendiente) return <span className="text-foreground">{valor}</span>
  return (
    <span className="rounded bg-destructive/10 px-1 font-medium text-destructive">
      {valor}
    </span>
  )
}
