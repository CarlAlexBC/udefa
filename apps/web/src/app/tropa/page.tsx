'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { apiFetch } from '@/lib/api'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Search, Star } from 'lucide-react'

interface CursoTropa {
  id: number
  codigo: string
  escuela: string
  nombre: string
  logo: string | null
  escudoRespaldo: string | null
}

const CLAVE_LOCALSTORAGE = 'tropa_curso_seleccionado'

/** Quita acentos para que "balistica" encuentre "Balística". */
function normalizar(s: string): string {
  return s
    .toLowerCase()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/ñ/g, 'n')
}

/** Ruta del escudo de un curso: el propio si existe, si no el de su escuela. */
function escudoDe(curso: CursoTropa): string | null {
  if (curso.logo) return `/tropa/cursos/mini/${curso.logo}.webp`
  if (curso.escudoRespaldo) return `/planteles/mini/${curso.escudoRespaldo}.webp`
  return null
}

/* Header simple de marca — mismo bloque logo+nombre que HeaderPrivado, sin
   "Cerrar sesión" porque aquí todavía no hay cuenta. */
function HeaderTropa() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/monote-logo.jpeg"
            alt="El Monote te Guía"
            width={36}
            height={36}
            className="rounded-full ring-1 ring-accent/30"
          />
          <span className="text-sm font-semibold text-foreground">
            El Monote te Guía
          </span>
        </Link>
      </div>
    </header>
  )
}

export default function TropaPage() {
  const [cursos, setCursos] = useState<CursoTropa[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  const [seleccion, setSeleccion] = useState<CursoTropa | null>(null)

  useEffect(() => {
    apiFetch<CursoTropa[]>('/tropa/cursos')
      .then(setCursos)
      .catch(() => setError(true))
      .finally(() => setCargando(false))

    const guardado = localStorage.getItem(CLAVE_LOCALSTORAGE)
    if (guardado) {
      try {
        setSeleccion(JSON.parse(guardado))
      } catch {
        localStorage.removeItem(CLAVE_LOCALSTORAGE)
      }
    }
  }, [])

  const grupos = useMemo(() => {
    const q = normalizar(busqueda.trim())
    const filtrados = q
      ? cursos.filter(
          (c) =>
            normalizar(c.escuela).includes(q) ||
            normalizar(c.nombre).includes(q),
        )
      : cursos

    const mapa = new Map<string, CursoTropa[]>()
    for (const c of filtrados) {
      const lista = mapa.get(c.escuela) ?? []
      lista.push(c)
      mapa.set(c.escuela, lista)
    }
    return [...mapa.entries()].sort((a, b) => a[0].localeCompare(b[0], 'es'))
  }, [cursos, busqueda])

  function elegir(curso: CursoTropa) {
    localStorage.setItem(CLAVE_LOCALSTORAGE, JSON.stringify(curso))
    setSeleccion(curso)
  }

  function cambiarCurso() {
    localStorage.removeItem(CLAVE_LOCALSTORAGE)
    setSeleccion(null)
  }

  if (seleccion) {
    return (
      <div className="dark flex-1 bg-background">
        <HeaderTropa />
        <main className="mx-auto flex max-w-lg flex-col items-center px-6 py-16 text-center">
          <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-card ring-1 ring-accent/30">
            {escudoDe(seleccion) ? (
              <Image
                src={escudoDe(seleccion)!}
                alt={seleccion.escuela}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            ) : (
              <Star className="h-8 w-8 text-accent" />
            )}
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-accent">
            {seleccion.escuela}
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
            {seleccion.nombre}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Ya elegiste tu curso. El simulador para personal de tropa está en
            construcción — muy pronto vas a poder presentar tu examen aquí.
          </p>
          <Button variant="outline" className="mt-6" onClick={cambiarCurso}>
            Elegir otro curso
          </Button>
        </main>
      </div>
    )
  }

  return (
    <div className="dark flex-1 bg-background">
      <HeaderTropa />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mx-auto mb-8 max-w-lg text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            <Star className="h-3 w-3" />
            Elige tu curso
          </div>
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
            ¿A qué curso vas a presentar?
          </h1>
          <p className="text-sm text-muted-foreground">
            Escribe tu escuela o tu especialidad.
          </p>
        </div>

        <div className="relative mx-auto mb-8 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Ej. Materiales de Guerra, Sanidad, Ingeniería..."
            className="pl-9"
            autoFocus
          />
        </div>

        {cargando && (
          <p className="text-center text-sm text-muted-foreground">
            Cargando cursos…
          </p>
        )}

        {error && (
          <p className="text-center text-sm text-destructive">
            No se pudo cargar la lista de cursos. Intenta recargar la página.
          </p>
        )}

        {!cargando && !error && grupos.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">
            No encontramos ningún curso con &quot;{busqueda}&quot;.
          </p>
        )}

        <div className="space-y-8">
          {grupos.map(([escuela, items]) => (
            <div key={escuela}>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {escuela}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((curso) => {
                  const logoSrc = escudoDe(curso)
                  return (
                    <button
                      key={curso.id}
                      type="button"
                      onClick={() => elegir(curso)}
                      className={cn(
                        'group relative flex items-center gap-4 rounded-xl border p-4 text-left transition-all',
                        'border-border bg-card hover:border-accent/60 hover:bg-muted/40',
                      )}
                    >
                      <div className="relative shrink-0">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-accent/20 opacity-0 blur-md transition-opacity group-hover:opacity-100"
                        />
                        {logoSrc ? (
                          <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-card ring-1 ring-accent/30">
                            <Image
                              src={logoSrc}
                              alt={`Escudo de ${curso.escuela}`}
                              width={80}
                              height={80}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-military/15 ring-1 ring-accent/30">
                            <Star className="h-6 w-6 text-accent" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-semibold leading-snug text-foreground">
                          {curso.nombre}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
