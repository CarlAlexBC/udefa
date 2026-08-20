'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { AlertCircle, Check, Clock, Copy, Loader2 } from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Cuenta de PRUEBA — el gancho: unos minutos por dentro.

   Crea una cuenta que sirve un rato para que alguien conozca la plataforma
   antes de comprar. El backend inventa el correo y la contraseña y los devuelve
   UNA sola vez (POST /usuarios/prueba); aquí se muestran para poder pasárselos.

   El acceso se apaga solo: el candado comprueba la caducidad en cada petición,
   así que no hay nada que recordar apagar después.
   ═══════════════════════════════════════════════════════════ */

type Plantel = { id: number; nombre: string }

/** Los módulos que se venden. Mismo vocabulario que el modal de acceso. */
const MODULOS = [
  { key: 'cultural', titulo: 'Cultural' },
  { key: 'psicologico', titulo: 'Psicológica' },
] as const

const DURACIONES = [
  { minutos: 10, texto: '10 min' },
  { minutos: 30, texto: '30 min' },
  { minutos: 60, texto: '1 hora' },
  { minutos: 1440, texto: '1 día' },
] as const

type CuentaCreada = {
  nombre: string
  email: string
  password: string
  expiraEn: string
  minutos: number
  modulos: string[]
}

function duracionEnPalabras(minutos: number): string {
  if (minutos === 1440) return 'un día'
  if (minutos >= 60) return `${minutos / 60} hora${minutos > 60 ? 's' : ''}`
  return `${minutos} minutos`
}

export function ModalCuentaPrueba({
  planteles,
  onClose,
  onCreada,
}: {
  planteles: Plantel[]
  onClose: () => void
  /** Para que la lista de usuarios se refresque y aparezca la cuenta nueva. */
  onCreada: () => void
}) {
  const [plantelId, setPlantelId] = useState<number | null>(null)
  const [modulos, setModulos] = useState<string[]>(['cultural'])
  const [minutos, setMinutos] = useState<number>(30)
  const [creando, setCreando] = useState(false)
  const [error, setError] = useState('')
  const [creada, setCreada] = useState<CuentaCreada | null>(null)
  const [copiado, setCopiado] = useState(false)

  // Deja lista la primera escuela: en el caso común no hay nada que elegir.
  useEffect(() => {
    if (plantelId === null && planteles.length) setPlantelId(planteles[0].id)
  }, [planteles, plantelId])

  function alternarModulo(key: string) {
    setModulos((prev) =>
      prev.includes(key) ? prev.filter((m) => m !== key) : [...prev, key],
    )
  }

  async function crear() {
    if (!plantelId || !modulos.length || creando) return
    setCreando(true)
    setError('')
    try {
      const res = await apiFetch<CuentaCreada>('/usuarios/prueba', {
        method: 'POST',
        body: { plantelId, modulos, minutos },
      })
      setCreada(res)
      onCreada()
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setCreando(false)
    }
  }

  async function copiar() {
    if (!creada) return
    const texto = [
      'Entra a El Monote te Guía:',
      `Correo: ${creada.email}`,
      `Contraseña: ${creada.password}`,
    ].join('\n')
    try {
      await navigator.clipboard.writeText(texto)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      setError('No se pudo copiar. Selecciona el texto a mano.')
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-1 flex items-center gap-2">
          <Clock className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">
            Cuenta de prueba
          </h3>
        </div>

        {creada ? (
          /* ── Ya creada: los datos, una sola vez ── */
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              Pásale estos datos a quien va a probar.{' '}
              <span className="font-semibold text-foreground">
                No se vuelven a mostrar.
              </span>
            </p>

            <div className="rounded-lg border border-accent/40 bg-accent/5 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Correo
              </p>
              <p className="font-mono text-sm break-all text-foreground">
                {creada.email}
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-accent">
                Contraseña
              </p>
              <p className="font-mono text-sm text-foreground">
                {creada.password}
              </p>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Le sirve {duracionEnPalabras(creada.minutos)} desde ahora. Cuando se
              acabe deja de abrir contenido, pero no lo saca de la app a media
              pregunta.
            </p>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={copiar}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {copiado ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-military" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copiar los datos
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground"
              >
                Listo
              </button>
            </div>
          </>
        ) : (
          /* ── Formulario ── */
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              Una cuenta que sirve un rato, para que alguien conozca la
              plataforma por dentro antes de comprar.
            </p>

            {error && (
              <div className="mb-3 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-2.5">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <p className="text-xs text-destructive">{error}</p>
              </div>
            )}

            <label
              htmlFor="prueba-plantel"
              className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Escuela que va a ver
            </label>
            <select
              id="prueba-plantel"
              value={plantelId ?? ''}
              onChange={(e) => setPlantelId(Number(e.target.value))}
              className="mt-1 mb-4 h-9 w-full rounded-md border border-input bg-transparent px-2 text-sm text-foreground"
            >
              {planteles.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nombre}
                </option>
              ))}
            </select>

            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Qué puede abrir
            </p>
            <div className="mt-1 mb-4 flex gap-2">
              {MODULOS.map((m) => {
                const activo = modulos.includes(m.key)
                return (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => alternarModulo(m.key)}
                    className={cn(
                      'flex-1 rounded-md border px-3 py-2 text-xs font-medium transition-colors',
                      activo
                        ? 'border-accent bg-accent/10 text-foreground'
                        : 'border-border text-muted-foreground hover:bg-muted',
                    )}
                  >
                    {m.titulo}
                  </button>
                )
              })}
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Cuánto le dura
            </p>
            <div className="mt-1 mb-5 grid grid-cols-4 gap-2">
              {DURACIONES.map((d) => (
                <button
                  key={d.minutos}
                  type="button"
                  onClick={() => setMinutos(d.minutos)}
                  className={cn(
                    'rounded-md border px-2 py-2 text-xs font-medium transition-colors',
                    minutos === d.minutos
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-border text-muted-foreground hover:bg-muted',
                  )}
                >
                  {d.texto}
                </button>
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={crear}
                disabled={creando || !modulos.length}
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground disabled:opacity-50"
              >
                {creando && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                Crear cuenta
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
