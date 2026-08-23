'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { Loader2, MessageSquare, Check, Mail } from 'lucide-react'

type Comentario = {
  id: number
  texto: string
  leido: boolean
  createdAt: string
  usuario: {
    id: number
    nombre: string
    email: string
    nivelAcceso: string
  }
}

type Respuesta = {
  total: number
  sinLeer: number
  comentarios: Comentario[]
}

/**
 * Buzón de comentarios, lado del panel.
 *
 * Las cuentas de prueba no salen aquí: las filtra el servidor. Son cuentas que
 * se borran solas al vencer, así que sus comentarios serían ruido con fecha de
 * caducidad.
 */
export default function ComentariosPage() {
  const [data, setData] = useState<Respuesta | null>(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [soloSinLeer, setSoloSinLeer] = useState(false)

  useEffect(() => {
    setCargando(true)
    apiFetch<Respuesta>(`/comentarios${soloSinLeer ? '?sinLeer=1' : ''}`)
      .then(setData)
      .catch((e) => setError((e as Error).message))
      .finally(() => setCargando(false))
  }, [soloSinLeer])

  async function alternarLeido(c: Comentario) {
    // Optimista: se pinta al momento y se manda al servidor detrás. Si falla,
    // se revierte — marcar leído no vale una pantalla de carga.
    const antes = data
    setData((d) =>
      d
        ? {
            ...d,
            sinLeer: d.sinLeer + (c.leido ? 1 : -1),
            comentarios: d.comentarios.map((x) =>
              x.id === c.id ? { ...x, leido: !x.leido } : x,
            ),
          }
        : d,
    )
    try {
      await apiFetch(`/comentarios/${c.id}/leido`, {
        method: 'PATCH',
        body: { leido: !c.leido },
      })
    } catch {
      setData(antes)
    }
  }

  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        Administración
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-foreground">Comentarios</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Lo que los aspirantes escriben desde su pantalla de inicio. Las cuentas de
        prueba no aparecen aquí.
      </p>

      <div className="mb-5 mt-5 flex flex-wrap items-center gap-2">
        {[
          { etiqueta: 'Todos', valor: false },
          { etiqueta: 'Sin leer', valor: true },
        ].map((o) => (
          <button
            key={o.etiqueta}
            type="button"
            onClick={() => setSoloSinLeer(o.valor)}
            className={
              soloSinLeer === o.valor
                ? 'rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent'
                : 'rounded-md bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground'
            }
          >
            {o.etiqueta}
          </button>
        ))}
        {data && (
          <span className="text-xs text-muted-foreground">
            {data.sinLeer > 0
              ? `${data.sinLeer} sin leer de ${data.total}`
              : `${data.total} en total, ninguno pendiente`}
          </span>
        )}
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {cargando ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Cargando comentarios…
        </div>
      ) : !data || data.comentarios.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card/60 p-8 text-center">
          <MessageSquare className="mx-auto h-6 w-6 text-muted-foreground" />
          <p className="mt-3 text-sm font-semibold text-foreground">
            {soloSinLeer ? 'Nada sin leer.' : 'Todavía no hay comentarios.'}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Aparecen aquí en cuanto un aspirante escriba desde su pantalla de
            inicio.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {data.comentarios.map((c) => (
            <div
              key={c.id}
              className={
                'rounded-xl border bg-card p-4 shadow-sm ' +
                (c.leido ? 'border-border opacity-70' : 'border-accent/40')
              }
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    {c.usuario.nombre}
                    {!c.leido && (
                      <span className="ml-2 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                        Nuevo
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {c.usuario.email} · {c.usuario.nivelAcceso}
                  </p>
                </div>
                <p className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {new Date(c.createdAt).toLocaleString('es-MX', {
                    day: '2-digit',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>

              <p className="mt-3 whitespace-pre-wrap text-sm text-foreground">
                {c.texto}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border/60 pt-3">
                <button
                  type="button"
                  onClick={() => alternarLeido(c)}
                  className="inline-flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Check className="h-3 w-3" />
                  {c.leido ? 'Marcar sin leer' : 'Marcar leído'}
                </button>
                <a
                  href={`mailto:${c.usuario.email}?subject=${encodeURIComponent(
                    'Sobre tu comentario · El Monote te Guía',
                  )}`}
                  className="inline-flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-3 w-3" />
                  Responder por correo
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
