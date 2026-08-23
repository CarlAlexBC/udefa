'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, Loader2, Wallet } from 'lucide-react'
import { apiFetch } from '@/lib/api'

/* ═══════════════════════════════════════════════════════════
   Ingresos — el libro de caja del panel.

   Todo sale de la tabla `Pago`, que se escribe sola cuando Mercado Pago avisa
   de un pago aprobado. Lo de antes del 21 ago 2026 NO está: aquellas ventas
   sólo viven en Mercado Pago y hay que rescatarlas con un script (fase 3).
   ═══════════════════════════════════════════════════════════ */

type Cuadre = {
  aplicado: boolean
  revisadosEnMp: number
  aprobadosEnMp: number
  enLaBase: number
  faltantes: Array<{
    mpPaymentId: string
    monto: number
    fecha: string | null
    paquete: string | null
    usuarioId: number | null
    anotado: boolean
    motivo?: string
  }>
  desajustes: Array<{ mpPaymentId: string; montoEnBase: number; montoEnMp: number }>
  sobrantes: Array<{ mpPaymentId: string; monto: number }>
}

type Ingresos = {
  totales: {
    cobrado: number
    comision: number
    neto: number
    ventas: number
    promedio: number
    devoluciones: number
    montoDevuelto: number
  }
  porPaquete: Array<{ paquete: string; ventas: number; cobrado: number }>
  porDia: Array<{ dia: string; ventas: number; cobrado: number }>
  ultimas: Array<{
    id: number
    paquete: string
    estado: string
    monto: number
    neto: number | null
    metodoPago: string | null
    aprobadoEn: string
    usuario: { id: number; nombre: string; email: string } | null
  }>
  ciclos: string[]
}

/** Nombre de cara al usuario de cada paquete. */
const NOMBRE_PAQUETE: Record<string, string> = {
  cultural: 'Cultural',
  psicologico: 'Psicológico',
  completa: 'Completa',
}

function pesos(n: number): string {
  return n.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  })
}

export default function IngresosPage() {
  const [data, setData] = useState<Ingresos | null>(null)
  const [ciclo, setCiclo] = useState<string | null>(null)
  const [cargando, setCargando] = useState(true)
  const [cuadre, setCuadre] = useState<Cuadre | null>(null)
  const [cuadrando, setCuadrando] = useState(false)
  const [errorCuadre, setErrorCuadre] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setCargando(true)
    apiFetch<Ingresos>(`/admin/ingresos${ciclo ? `?ciclo=${ciclo}` : ''}`)
      .then((res) => {
        setData(res)
        setCargando(false)
      })
      .catch((err) => {
        setError((err as Error).message)
        setCargando(false)
      })
  }, [ciclo])

  if (cargando && !data) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        Cargando…
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
        <AlertCircle className="h-4 w-4 shrink-0" />
        {error || 'Sin datos'}
      </div>
    )
  }

  const t = data.totales
  const maxDia = Math.max(1, ...data.porDia.map((d) => d.ventas))
  const maxPaquete = Math.max(1, ...data.porPaquete.map((p) => p.cobrado))

  return (
    <div>
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Ingresos
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Lo cobrado por la plataforma. Cada venta cuadra con un aviso de Mercado
          Pago, y la comisión es la que reportó él, no una estimación.
        </p>
      </div>

      {/* Cuadrar con Mercado Pago. La tabla se llena desde el aviso de MP; si un
          aviso se pierde, la venta cobrada no queda anotada y el panel miente
          hacia abajo. Esto va y pregunta. */}
      <div className="mb-5 rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">
              Cuadrar con Mercado Pago
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Compara lo cobrado en Mercado Pago contra lo registrado aquí. La
              revisión no modifica nada; registrar es un segundo paso.
            </p>
          </div>
          <button
            type="button"
            disabled={cuadrando}
            onClick={async () => {
              setCuadrando(true)
              setErrorCuadre('')
              try {
                setCuadre(await apiFetch<Cuadre>('/admin/ingresos/cuadrar', { method: 'POST' }))
              } catch (e) {
                setErrorCuadre((e as Error).message)
              } finally {
                setCuadrando(false)
              }
            }}
            className="shrink-0 rounded-md border border-accent/40 px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/10 disabled:opacity-50"
          >
            {cuadrando ? 'Preguntando a Mercado Pago…' : 'Revisar'}
          </button>
        </div>

        {errorCuadre && (
          <p className="mt-3 text-xs text-destructive">{errorCuadre}</p>
        )}

        {cuadre && (
          <div className="mt-4 border-t border-border/60 pt-3">
            <p className="text-xs text-muted-foreground">
              {cuadre.aprobadosEnMp} pagos aprobados en Mercado Pago ·{' '}
              {cuadre.enLaBase} anotados aquí
            </p>

            {cuadre.faltantes.length === 0 &&
            cuadre.desajustes.length === 0 &&
            cuadre.sobrantes.length === 0 ? (
              <p
                className="mt-2 text-sm font-semibold"
                style={{ color: 'var(--senal-baja)' }}
              >
                Todo coincide. No hay diferencias.
              </p>
            ) : (
              <div className="mt-3 flex flex-col gap-3">
                {cuadre.faltantes.length > 0 && (
                  <div>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: 'var(--senal-alta)' }}
                    >
                      {cuadre.faltantes.length} cobrados en Mercado Pago sin registrar aquí
                    </p>
                    <ul className="mt-1.5 flex flex-col gap-1">
                      {cuadre.faltantes.map((f) => (
                        <li key={f.mpPaymentId} className="text-xs text-muted-foreground">
                          Pago {f.mpPaymentId} · {pesos(f.monto)} ·{' '}
                          {f.paquete ?? 'paquete ilegible'} ·{' '}
                          {f.usuarioId ? `usuario ${f.usuarioId}` : 'sin cuenta ligada'}
                          {f.anotado && ' · anotado'}
                          {f.motivo && ` · ${f.motivo}`}
                        </li>
                      ))}
                    </ul>
                    {!cuadre.aplicado && (
                      <button
                        type="button"
                        disabled={cuadrando}
                        onClick={async () => {
                          setCuadrando(true)
                          try {
                            setCuadre(
                              await apiFetch<Cuadre>(
                                '/admin/ingresos/cuadrar?aplicar=true',
                                { method: 'POST' },
                              ),
                            )
                            // Recargar los totales: acaban de entrar ventas
                            // nuevas y las cifras de arriba se quedarían viejas.
                            apiFetch<Ingresos>(
                              `/admin/ingresos${ciclo ? `?ciclo=${ciclo}` : ''}`,
                            )
                              .then(setData)
                              .catch(() => {})
                          } catch (e) {
                            setErrorCuadre((e as Error).message)
                          } finally {
                            setCuadrando(false)
                          }
                        }}
                        className="mt-2 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                      >
                        Registrar los {cuadre.faltantes.length} faltantes
                      </button>
                    )}
                    <p className="mt-2 text-[11px] text-muted-foreground">
                      Registrarlos los añade al libro de caja, pero <strong>no otorga
                      accesos</strong>: si alguien pagó y no recibió su producto,
                      el acceso se concede desde Usuarios → Gestionar.
                    </p>
                  </div>
                )}

                {cuadre.desajustes.length > 0 && (
                  <div>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: 'var(--senal-media)' }}
                    >
                      {cuadre.desajustes.length} con monto distinto
                    </p>
                    <ul className="mt-1.5 flex flex-col gap-1">
                      {cuadre.desajustes.map((d) => (
                        <li key={d.mpPaymentId} className="text-xs text-muted-foreground">
                          Pago {d.mpPaymentId} · aquí {pesos(d.montoEnBase)} · en MP{' '}
                          {pesos(d.montoEnMp)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {cuadre.sobrantes.length > 0 && (
                  <div>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: 'var(--senal-media)' }}
                    >
                      {cuadre.sobrantes.length} registrados aquí que Mercado Pago ya no
                      da por aprobados
                    </p>
                    <ul className="mt-1.5 flex flex-col gap-1">
                      {cuadre.sobrantes.map((x) => (
                        <li key={x.mpPaymentId} className="text-xs text-muted-foreground">
                          Pago {x.mpPaymentId} · {pesos(x.monto)} · puede ser una
                          devolución o un contracargo
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Filtro por convocatoria */}
      {data.ciclos.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCiclo(null)}
            className={
              ciclo === null
                ? 'rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent'
                : 'rounded-md bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground'
            }
          >
            Todo
          </button>
          {data.ciclos.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCiclo(c)}
              className={
                ciclo === c
                  ? 'rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent'
                  : 'rounded-md bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground'
              }
            >
              Convocatoria {c}
            </button>
          ))}
        </div>
      )}

      {t.ventas === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center">
          <Wallet className="mx-auto mb-3 h-6 w-6 text-accent" />
          <p className="font-semibold text-foreground">
            Todavía no hay ninguna venta registrada.
          </p>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Desde el 21 de agosto de 2026, cada pago aprobado se anota solo y
            aparece aquí en cuanto Mercado Pago avisa. Lo cobrado <em>antes</em> de
            esa fecha no está en la base: vive en Mercado Pago y hay que traerlo
            con un script aparte.
          </p>
        </div>
      ) : (
        <>
          {/* Las cifras que mandan */}
          <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
            <Tarjeta
              rotulo="Cobrado"
              valor={pesos(t.cobrado)}
              pie={`${t.ventas} ${t.ventas === 1 ? 'venta' : 'ventas'}`}
              color="var(--accent)"
            />
            <Tarjeta
              rotulo="Comisión MP"
              valor={`−${pesos(t.comision)}`}
              pie={
                t.cobrado > 0
                  ? `${((t.comision / t.cobrado) * 100).toFixed(1)}% de lo cobrado`
                  : '—'
              }
              color="var(--senal-alta)"
            />
            <Tarjeta
              rotulo="Neto"
              valor={pesos(t.neto)}
              pie="después de comisión"
              color="var(--senal-baja)"
              destacada
            />
            <Tarjeta
              rotulo="Venta promedio"
              valor={pesos(t.promedio)}
              pie="por aspirante"
            />
            <Tarjeta
              rotulo="Devoluciones"
              valor={t.devoluciones === 0 ? '0' : pesos(t.montoDevuelto)}
              pie={t.devoluciones === 0 ? 'ninguna' : `${t.devoluciones} pagos`}
            />
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
            {/* Ventas por día */}
            <div className="min-w-0 rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4 flex items-baseline justify-between gap-3">
                <h2 className="text-sm font-semibold text-foreground">
                  Ventas por día
                </h2>
                <span className="text-[11px] text-muted-foreground">
                  últimos 14 días
                </span>
              </div>
              <div className="flex h-32 items-end gap-1.5">
                {data.porDia.map((d) => (
                  <div
                    key={d.dia}
                    className="flex min-w-0 flex-1 flex-col justify-end gap-1.5"
                    title={`${d.dia}: ${d.ventas} ventas · ${pesos(d.cobrado)}`}
                  >
                    <span
                      className="rounded-t"
                      style={{
                        height: `${Math.max(2, (d.ventas / maxDia) * 100)}%`,
                        backgroundColor:
                          d.ventas > 0 ? 'var(--accent)' : 'var(--muted)',
                      }}
                    />
                    <span className="text-center text-[9px] tabular-nums text-muted-foreground">
                      {d.dia.slice(8)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Por paquete */}
            <div className="min-w-0 rounded-xl border border-border bg-card p-4 shadow-sm">
              <h2 className="mb-4 text-sm font-semibold text-foreground">
                Por paquete
              </h2>
              <div className="flex flex-col gap-3">
                {data.porPaquete.map((p) => (
                  <div key={p.paquete} className="min-w-0">
                    <div className="flex items-baseline justify-between gap-2 text-xs">
                      <span className="truncate text-foreground">
                        {NOMBRE_PAQUETE[p.paquete] ?? p.paquete}
                      </span>
                      <span className="shrink-0 tabular-nums text-muted-foreground">
                        {pesos(p.cobrado)} · {p.ventas}
                      </span>
                    </div>
                    <span className="mt-1.5 block h-1.5 rounded-full bg-muted">
                      <span
                        className="block h-full rounded-full"
                        style={{
                          width: `${(p.cobrado / maxPaquete) * 100}%`,
                          backgroundColor: 'var(--accent)',
                        }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Últimas ventas */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border/60 px-4 py-3">
              <h2 className="text-sm font-semibold text-foreground">
                Últimas ventas
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="border-b border-border bg-muted/40 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Aspirante</th>
                    <th className="px-3 py-2 font-semibold">Paquete</th>
                    <th className="px-3 py-2 font-semibold">Estado</th>
                    <th className="px-3 py-2 text-right font-semibold">Monto</th>
                    <th className="px-3 py-2 text-right font-semibold">Neto</th>
                    <th className="px-3 py-2 font-semibold">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {data.ultimas.map((v) => (
                    <tr
                      key={v.id}
                      className="border-b border-border/40 last:border-b-0 hover:bg-muted/20"
                    >
                      <td className="px-3 py-2">
                        <p className="truncate text-xs font-semibold text-foreground">
                          {v.usuario?.nombre ?? 'Cuenta borrada'}
                        </p>
                        <p className="truncate text-[11px] text-muted-foreground">
                          {v.usuario?.email ?? '—'}
                        </p>
                      </td>
                      <td className="px-3 py-2 text-xs text-muted-foreground">
                        {NOMBRE_PAQUETE[v.paquete] ?? v.paquete}
                      </td>
                      <td className="px-3 py-2">
                        <span
                          className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold"
                          style={{
                            color:
                              v.estado === 'approved'
                                ? 'var(--senal-baja)'
                                : 'var(--senal-alta)',
                            backgroundColor:
                              v.estado === 'approved'
                                ? 'var(--senal-baja-brillo)'
                                : 'var(--senal-alta-brillo)',
                          }}
                        >
                          {v.estado === 'approved' ? 'Acreditado' : v.estado}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-right text-xs tabular-nums text-foreground">
                        {pesos(v.monto)}
                      </td>
                      <td className="px-3 py-2 text-right text-xs tabular-nums text-muted-foreground">
                        {v.neto !== null ? pesos(v.neto) : '—'}
                      </td>
                      <td className="px-3 py-2 text-xs tabular-nums text-muted-foreground">
                        {new Date(v.aprobadoEn).toLocaleDateString('es-MX', {
                          day: '2-digit',
                          month: 'short',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

/** Una cifra grande con su rótulo. La destacada lleva resplandor: es la única. */
function Tarjeta({
  rotulo,
  valor,
  pie,
  color,
  destacada = false,
}: {
  rotulo: string
  valor: string
  pie: string
  color?: string
  destacada?: boolean
}) {
  return (
    <div className="min-w-0 rounded-lg border border-border bg-card p-3 shadow-sm">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {rotulo}
      </p>
      <p
        className="mt-1 truncate text-xl font-semibold tabular-nums leading-none"
        style={{
          color: color ?? 'var(--foreground)',
          textShadow: destacada ? `0 0 20px ${color}` : 'none',
        }}
      >
        {valor}
      </p>
      <p className="mt-1 truncate text-[11px] text-muted-foreground">{pie}</p>
    </div>
  )
}
