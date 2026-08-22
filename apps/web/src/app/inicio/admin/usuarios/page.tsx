'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { ModalCuentaPrueba } from '@/components/admin/ModalCuentaPrueba'
import { ModalBorrarUsuario } from '@/components/admin/ModalBorrarUsuario'
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Clock,
  KeyRound,
  Loader2,
  Save,
  Search,
  Shield,
  Trash2,
  UserPlus,
  X,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════════
   Tipos
   ═══════════════════════════════════════════════════════════ */

type UsuarioAdmin = {
  id: number
  nombre: string
  email: string
  rol: string
  nivelAcceso: string
  emailVerificado: boolean
  createdAt: string
  plantel: { id: number; nombre: string } | null
  _count: { sesionesCompletas: number; intentos: number }
  /** Última huella suya en la plataforma. Null = ni rastro en las últimas 24 h. */
  ultimaSenal: string | null
}

/** Minutos sin escribir nada tras los cuales el punto se apaga. */
const MINUTOS_ACTIVO = 5

/** Verde si dejó huella hace menos de MINUTOS_ACTIVO; rojo si no. */
function estaActivo(ultimaSenal: string | null): boolean {
  if (!ultimaSenal) return false
  return Date.now() - new Date(ultimaSenal).getTime() < MINUTOS_ACTIVO * 60_000
}

/** "hace 3 min", "hace 2 h", "ayer". En corto, que va en una celda. */
function haceCuanto(ultimaSenal: string | null): string {
  if (!ultimaSenal) return 'sin actividad hoy'
  const minutos = Math.floor((Date.now() - new Date(ultimaSenal).getTime()) / 60_000)
  if (minutos < 1) return 'ahora mismo'
  if (minutos < 60) return `hace ${minutos} min`
  const horas = Math.floor(minutos / 60)
  if (horas < 24) return `hace ${horas} h`
  return 'hace más de un día'
}

type RespuestaUsuarios = {
  data: UsuarioAdmin[]
  meta: { total: number; take: number; skip: number; hasMore: boolean }
}

type Plantel = { id: number; nombre: string }
type EstadoGuardado = 'idle' | 'saving' | 'saved' | 'error'

/** Un acceso a un módulo de pago (fila de la tabla Acceso del backend). */
type Acceso = {
  id: number
  modulo: string
  ciclo: string
  expiraEn: string | null
  otorgadoEn: string
  origen: string
}

const PAGE_SIZE = 50
const SEARCH_DEBOUNCE_MS = 400

// Convocatoria vigente y hasta cuándo dura el acceso otorgado a mano — mismos
// valores que usa el backend al aprobarse un pago (PagosService).
const CICLO_ACTUAL = '2027'
const FIN_CONVOCATORIA = '2027-06-30T23:59:59'
const MODULOS_ACCESO: Array<{ key: string; label: string; desc: string }> = [
  { key: 'cultural', label: 'Cultural', desc: 'Simulador cultural del plantel' },
  {
    key: 'psicologico',
    label: 'Psicológica',
    desc: 'Psicométrico, Personalidad y Axiológico',
  },
]

/* ═══════════════════════════════════════════════════════════
   Página
   ═══════════════════════════════════════════════════════════ */

export default function UsuariosAdminPage() {
  const [search, setSearch] = useState('')
  const [usuarios, setUsuarios] = useState<UsuarioAdmin[]>([])
  const [meta, setMeta] = useState<RespuestaUsuarios['meta']>({
    total: 0,
    take: PAGE_SIZE,
    skip: 0,
    hasMore: false,
  })
  const [cargando, setCargando] = useState(true)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [error, setError] = useState('')
  const [planteles, setPlanteles] = useState<Plantel[]>([])
  const [estados, setEstados] = useState<Record<number, EstadoGuardado>>({})
  const [confirmandoDegrado, setConfirmandoDegrado] = useState<{
    userId: number
    userNombre: string
  } | null>(null)
  // Usuario cuyo acceso se está gestionando en el modal (null = cerrado).
  const [creandoPrueba, setCreandoPrueba] = useState(false)
  const [alta, setAlta] = useState<{
    nombre: string
    email: string
    plantelId: string
    rol: string
  } | null>(null)
  const [altaEnviando, setAltaEnviando] = useState(false)
  const [altaError, setAltaError] = useState('')
  const [altaHecha, setAltaHecha] = useState<{
    nombre: string
    email: string
    password: string
  } | null>(null)
  const [borrando, setBorrando] = useState<UsuarioAdmin | null>(null)
  const [gestionandoAcceso, setGestionandoAcceso] = useState<UsuarioAdmin | null>(
    null,
  )

  const ultimoRequestId = useRef(0)
  const timers = useRef<Record<number, ReturnType<typeof setTimeout>>>({})

  const construirQuery = useCallback(
    (skip: number) => {
      const params = new URLSearchParams({
        take: String(PAGE_SIZE),
        skip: String(skip),
      })
      if (search.trim()) params.set('search', search.trim())
      return params.toString()
    },
    [search],
  )

  useEffect(() => {
    const requestId = ++ultimoRequestId.current
    setCargando(true)
    setError('')
    const timer = setTimeout(() => {
      apiFetch<RespuestaUsuarios>(`/usuarios?${construirQuery(0)}`)
        .then((res) => {
          if (requestId !== ultimoRequestId.current) return
          setUsuarios(res.data)
          setMeta(res.meta)
          setCargando(false)
        })
        .catch((err) => {
          if (requestId !== ultimoRequestId.current) return
          setError((err as Error).message)
          setCargando(false)
        })
    }, search ? SEARCH_DEBOUNCE_MS : 0)
    return () => clearTimeout(timer)
  }, [construirQuery, search])

  useEffect(() => {
    apiFetch<Plantel[]>('/planteles').then(setPlanteles).catch(() => {})
  }, [])

  /* El punto verde en vivo.
     Cada 15 s se vuelve a pedir la lista, pero de la respuesta SÓLO se toma la
     última huella de cada quien: si se reemplazara la lista entera, se perdería
     la paginación y se pisaría un cambio de plantel a medio guardar.
     Cuando la pestaña está en segundo plano no se pide nada — si no, el panel
     abierto toda la noche seguiría consultando la base cada 15 s. */
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (document.hidden) return
      apiFetch<RespuestaUsuarios>(`/usuarios?${construirQuery(0)}`)
        .then((res) => {
          const frescas = new Map(res.data.map((u) => [u.id, u.ultimaSenal]))
          setUsuarios((prev) =>
            prev.map((u) =>
              frescas.has(u.id)
                ? { ...u, ultimaSenal: frescas.get(u.id) ?? null }
                : u,
            ),
          )
        })
        .catch(() => {
          // Un fallo de red no debe ensuciar la pantalla: el punto se queda
          // como estaba y se reintenta en el siguiente giro.
        })
    }, 15_000)
    return () => clearInterval(intervalo)
  }, [construirQuery])

  async function cargarMas() {
    setCargandoMas(true)
    try {
      const res = await apiFetch<RespuestaUsuarios>(
        `/usuarios?${construirQuery(meta.skip + meta.take)}`,
      )
      setUsuarios((prev) => [...prev, ...res.data])
      setMeta(res.meta)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setCargandoMas(false)
    }
  }

  /* Actualiza rol o plantel de un usuario con debounce corto (300ms)
     para agrupar clics rápidos consecutivos y dar feedback inmediato. */
  const programarGuardado = useCallback(
    (
      userId: number,
      accion: 'rol' | 'plantel',
      valor: string | number,
    ) => {
      if (timers.current[userId]) clearTimeout(timers.current[userId])
      setEstados((prev) => ({ ...prev, [userId]: 'saving' }))
      timers.current[userId] = setTimeout(async () => {
        try {
          const body = accion === 'rol' ? { rol: valor } : { plantelId: valor }
          await apiFetch(`/usuarios/${userId}/${accion}`, {
            method: 'PATCH',
            body,
          })
          setEstados((prev) => ({ ...prev, [userId]: 'saved' }))
          setTimeout(() => {
            setEstados((prev) => ({ ...prev, [userId]: 'idle' }))
          }, 2000)
        } catch (err) {
          console.error(err)
          setEstados((prev) => ({ ...prev, [userId]: 'error' }))
          alert((err as Error).message)
          // Refresca la fila al estado del servidor para deshacer el cambio local
          apiFetch<RespuestaUsuarios>(`/usuarios?${construirQuery(0)}`).then(
            (res) => setUsuarios(res.data),
          )
        }
      }, 300)
    },
    [construirQuery],
  )

  const actualizarLocal = (userId: number, cambios: Partial<UsuarioAdmin>) => {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, ...cambios } : u)),
    )
  }

  function pedirCambioRol(usuario: UsuarioAdmin, nuevoRol: string) {
    // Si degrada un admin a aspirante, pedir confirmación explícita.
    if (usuario.rol === 'admin' && nuevoRol === 'aspirante') {
      setConfirmandoDegrado({ userId: usuario.id, userNombre: usuario.nombre })
      return
    }
    aplicarCambioRol(usuario.id, nuevoRol)
  }

  function aplicarCambioRol(userId: number, nuevoRol: string) {
    actualizarLocal(userId, { rol: nuevoRol })
    programarGuardado(userId, 'rol', nuevoRol)
  }

  function cambiarPlantel(userId: number, nuevoPlantelId: number) {
    const plantel = planteles.find((p) => p.id === nuevoPlantelId)
    actualizarLocal(userId, {
      plantel: plantel ? { id: plantel.id, nombre: plantel.nombre } : null,
    })
    programarGuardado(userId, 'plantel', nuevoPlantelId)
  }

  /* ═══════════════════════════════════════════════════════════
     Render
     ═══════════════════════════════════════════════════════════ */

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Usuarios
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Aspirantes registrados. Puedes cambiar el plantel al que se preparan y
          promover o degradar el rol. Los cambios se guardan automáticamente.
        </p>
        </div>
        {/* Crear una cuenta que sirva un rato — el gancho para que alguien
            conozca la plataforma por dentro antes de comprar. */}
        <button
          type="button"
          onClick={() => setCreandoPrueba(true)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Clock className="h-3.5 w-3.5" />
          Cuenta de prueba
        </button>
        <button
          type="button"
          onClick={() => {
            setAltaHecha(null)
            setAltaError('')
            setAlta({ nombre: '', email: '', plantelId: '', rol: 'aspirante' })
          }}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-accent/40 px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          <UserPlus className="h-3.5 w-3.5" />
          Añadir cuenta
        </button>
      </div>

      {/* Alta a mano. La contraseña la genera el servidor y se enseña UNA vez:
          ni Carlo ni nadie teclea la contraseña de otra persona. */}
      {alta && (
        <div className="mb-4 rounded-xl border border-accent/40 bg-card p-4 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
            Añadir cuenta
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Crea la cuenta y te muestra su contraseña una sola vez, para que se la
            pases. No otorga acceso a ningún módulo: eso se da después con
            &quot;Gestionar&quot;.
          </p>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs text-muted-foreground">
              Nombre
              <input
                value={alta.nombre}
                onChange={(e) => setAlta({ ...alta, nombre: e.target.value })}
                placeholder="Nombre y apellido"
                className="h-9 rounded-md border border-input bg-transparent px-2 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs text-muted-foreground">
              Correo
              <input
                value={alta.email}
                onChange={(e) => setAlta({ ...alta, email: e.target.value })}
                placeholder="correo@ejemplo.com"
                className="h-9 rounded-md border border-input bg-transparent px-2 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs text-muted-foreground">
              Plantel (opcional)
              <select
                value={alta.plantelId}
                onChange={(e) => setAlta({ ...alta, plantelId: e.target.value })}
                className="h-9 rounded-md border border-input bg-transparent px-2 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none"
              >
                <option value="">Sin plantel</option>
                {planteles.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs text-muted-foreground">
              Rol
              <select
                value={alta.rol}
                onChange={(e) => setAlta({ ...alta, rol: e.target.value })}
                className="h-9 rounded-md border border-input bg-transparent px-2 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none"
              >
                <option value="aspirante">Aspirante</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>

          {altaError && (
            <p className="mt-3 text-xs text-destructive">{altaError}</p>
          )}

          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              disabled={altaEnviando}
              onClick={async () => {
                setAltaEnviando(true)
                setAltaError('')
                try {
                  const creada = await apiFetch<{
                    nombre: string
                    email: string
                    password: string
                  }>('/usuarios', {
                    method: 'POST',
                    // Sin JSON.stringify: apiFetch serializa el cuerpo él mismo
                    // (y le pone el Content-Type). Pasárselo ya convertido lo
                    // manda como texto y el backend no ve ningún campo.
                    body: {
                      nombre: alta.nombre,
                      email: alta.email,
                      plantelId: alta.plantelId ? Number(alta.plantelId) : undefined,
                      rol: alta.rol,
                    },
                  })
                  setAltaHecha(creada)
                  setAlta(null)
                  // También el total: sin esto el pie decía "Mostrando 8 de 7".
                  apiFetch<RespuestaUsuarios>(`/usuarios?${construirQuery(0)}`)
                    .then((res) => {
                      setUsuarios(res.data)
                      setMeta(res.meta)
                    })
                    .catch(() => {})
                } catch (e) {
                  setAltaError((e as Error).message)
                } finally {
                  setAltaEnviando(false)
                }
              }}
              className="rounded-md bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {altaEnviando ? 'Creando…' : 'Crear cuenta'}
            </button>
            <button
              type="button"
              onClick={() => setAlta(null)}
              className="rounded-md px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* La contraseña, una sola vez. */}
      {altaHecha && (
        <div className="mb-4 rounded-xl border border-military/50 bg-military/10 p-4">
          <p className="text-sm font-semibold text-foreground">
            Cuenta creada: {altaHecha.nombre}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Pásale estos datos. <strong>La contraseña no se vuelve a mostrar</strong> —
            si se pierde, la persona la recupera desde &quot;¿Olvidaste tu
            contraseña?&quot;.
          </p>
          <div className="mt-3 flex flex-col gap-1 rounded-md border border-border bg-background p-3 font-mono text-sm text-foreground">
            <span>{altaHecha.email}</span>
            <span>{altaHecha.password}</span>
          </div>
          <button
            type="button"
            onClick={() => setAltaHecha(null)}
            className="mt-3 text-xs font-semibold text-accent hover:underline"
          >
            Ya la copié
          </button>
        </div>
      )}

      {/* Búsqueda */}
      <div className="mb-4 rounded-xl border border-border bg-card p-4 shadow-sm">
        <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Buscar
        </label>
        <div className="relative mt-1">
          <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Por email o nombre…"
            className="h-9 w-full rounded-md border border-input bg-transparent pl-7 pr-8 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:bg-muted"
              aria-label="Limpiar"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        {cargando ? (
          <span className="inline-flex items-center gap-1">
            <Loader2 className="h-3 w-3 animate-spin" />
            Cargando…
          </span>
        ) : (
          <span>
            Mostrando{' '}
            <span className="font-semibold text-foreground">{usuarios.length}</span>{' '}
            de <span className="font-semibold text-foreground">{meta.total}</span>{' '}
            usuarios
          </span>
        )}
      </div>

      {error && (
        <div className="mb-3 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {!cargando && usuarios.length === 0 && !error && (
        <div className="rounded-xl border border-dashed border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
          No hay usuarios que coincidan con la búsqueda.
        </div>
      )}

      {usuarios.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/40 text-[10px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-semibold">Usuario</th>
                  <th className="px-3 py-2 font-semibold">Plantel</th>
                  <th className="px-3 py-2 font-semibold">Rol</th>
                  <th className="px-3 py-2 font-semibold">Actividad</th>
                  <th className="px-3 py-2 font-semibold">Registro</th>
                  <th className="px-3 py-2 font-semibold">Acceso</th>
                  <th className="px-3 py-2 font-semibold text-right">Estado</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b border-border/40 last:border-b-0"
                  >
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        {/* El punto: verde mientras esté dejando huella, rojo si
                            no. El resplandor sólo lo lleva el verde — es lo que
                            hace que se encuentre de un vistazo en la lista. */}
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={
                            estaActivo(u.ultimaSenal)
                              ? {
                                  backgroundColor: 'var(--senal-baja)',
                                  boxShadow: '0 0 8px var(--senal-baja-brillo)',
                                }
                              : { backgroundColor: 'var(--senal-alta)', opacity: 0.55 }
                          }
                        />
                        <span className="sr-only">
                          {estaActivo(u.ultimaSenal) ? 'Activo' : 'Inactivo'}
                        </span>
                        {u.rol === 'admin' && (
                          <Shield className="h-3 w-3 text-accent" />
                        )}
                        <div>
                          <p className="font-semibold text-foreground">
                            {u.nombre}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {u.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <select
                        value={u.plantel?.id ?? ''}
                        onChange={(e) =>
                          cambiarPlantel(u.id, Number(e.target.value))
                        }
                        className="h-8 max-w-[200px] rounded-md border border-input bg-transparent px-2 text-xs text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                      >
                        <option value="" disabled>
                          Sin plantel
                        </option>
                        {planteles.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.nombre}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-3 py-3">
                      <select
                        value={u.rol}
                        onChange={(e) => pedirCambioRol(u, e.target.value)}
                        className={cn(
                          'h-8 rounded-md border border-input bg-transparent px-2 text-xs focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                          u.rol === 'admin'
                            ? 'font-semibold text-accent'
                            : 'text-foreground',
                        )}
                      >
                        <option value="aspirante">Aspirante</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-3 py-3 text-xs text-muted-foreground">
                      <span
                        className="font-semibold"
                        style={{
                          color: estaActivo(u.ultimaSenal)
                            ? 'var(--senal-baja)'
                            : 'var(--muted-foreground)',
                        }}
                      >
                        {haceCuanto(u.ultimaSenal)}
                      </span>
                      <br />
                      {u._count.sesionesCompletas} sesiones ·{' '}
                      {u._count.intentos} intentos
                    </td>
                    <td className="px-3 py-3 text-xs text-muted-foreground">
                      {new Date(u.createdAt).toLocaleDateString('es-MX', {
                        day: '2-digit',
                        month: 'short',
                        year: '2-digit',
                      })}
                    </td>
                    <td className="px-3 py-3">
                      <button
                        type="button"
                        onClick={() => setGestionandoAcceso(u)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        <KeyRound className="h-3 w-3" />
                        Gestionar
                      </button>
                      <button
                        type="button"
                        onClick={() => setBorrando(u)}
                        title={'Borrar ' + u.email}
                        aria-label={'Borrar ' + u.email}
                        className="ml-1.5 inline-flex items-center rounded-md border border-transparent p-1.5 text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <IndicadorGuardado
                        estado={estados[u.id] ?? 'idle'}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {meta.hasMore && (
            <div className="border-t border-border p-3 text-center">
              <button
                type="button"
                onClick={cargarMas}
                disabled={cargandoMas}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {cargandoMas ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
                Cargar {Math.min(PAGE_SIZE, meta.total - usuarios.length)} más
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modal de confirmación al degradar admin */}
      {confirmandoDegrado && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setConfirmandoDegrado(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <h3 className="text-lg font-semibold text-foreground">
                ¿Quitar rol admin?
              </h3>
            </div>
            <p className="mb-5 text-sm text-muted-foreground">
              Vas a degradar a{' '}
              <span className="font-semibold text-foreground">
                {confirmandoDegrado.userNombre}
              </span>{' '}
              de admin a aspirante. Perderá acceso al panel de administración.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirmandoDegrado(null)}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  aplicarCambioRol(confirmandoDegrado.userId, 'aspirante')
                  setConfirmandoDegrado(null)
                }}
                className="rounded-md bg-destructive px-3 py-1.5 text-sm font-semibold text-destructive-foreground hover:opacity-90"
              >
                Sí, degradar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para dar/quitar acceso a los módulos de pago a mano */}
      {creandoPrueba && (
        <ModalCuentaPrueba
          planteles={planteles}
          onClose={() => setCreandoPrueba(false)}
          onCreada={() =>
            apiFetch<RespuestaUsuarios>(`/usuarios?${construirQuery(0)}`)
              .then((res) => {
                setUsuarios(res.data)
                setMeta(res.meta)
              })
              .catch(() => {})
          }
        />
      )}

      {borrando && (
        <ModalBorrarUsuario
          usuario={{
            id: borrando.id,
            nombre: borrando.nombre,
            email: borrando.email,
            intentos: borrando._count.intentos,
          }}
          onClose={() => setBorrando(null)}
          onBorrado={(id) => {
            setUsuarios((prev) => prev.filter((x) => x.id !== id))
            setMeta((m) => ({ ...m, total: Math.max(0, m.total - 1) }))
          }}
        />
      )}

      {gestionandoAcceso && (
        <ModalAcceso
          usuario={gestionandoAcceso}
          onClose={() => setGestionandoAcceso(null)}
        />
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Modal: dar/quitar acceso a los módulos de pago (ventas por fuera,
   cortesías). Usa POST /acceso, GET /acceso/usuario/:id y DELETE /acceso/:id.
   ═══════════════════════════════════════════════════════════ */

function ModalAcceso({
  usuario,
  onClose,
}: {
  usuario: UsuarioAdmin
  onClose: () => void
}) {
  const [accesos, setAccesos] = useState<Acceso[] | null>(null)
  const [error, setError] = useState('')
  // Módulo en proceso (otorgando o quitando), para deshabilitar su botón.
  const [trabajando, setTrabajando] = useState<string | null>(null)

  const cargar = useCallback(() => {
    setError('')
    apiFetch<Acceso[]>(`/acceso/usuario/${usuario.id}`)
      .then(setAccesos)
      .catch((err) => setError((err as Error).message))
  }, [usuario.id])

  useEffect(() => {
    cargar()
  }, [cargar])

  // El acceso VIGENTE (no caducado) de un módulo, o undefined si no lo tiene.
  function accesoVigente(modulo: string): Acceso | undefined {
    const ahora = Date.now()
    return (accesos ?? []).find(
      (a) =>
        a.modulo === modulo &&
        (a.expiraEn === null || new Date(a.expiraEn).getTime() > ahora),
    )
  }

  async function otorgar(modulo: string) {
    setTrabajando(modulo)
    setError('')
    try {
      await apiFetch('/acceso', {
        method: 'POST',
        body: {
          usuarioId: usuario.id,
          modulos: [modulo],
          ciclo: CICLO_ACTUAL,
          expiraEn: FIN_CONVOCATORIA,
          origen: 'manual',
        },
      })
      cargar()
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setTrabajando(null)
    }
  }

  async function quitar(id: number, modulo: string) {
    setTrabajando(modulo)
    setError('')
    try {
      await apiFetch(`/acceso/${id}`, { method: 'DELETE' })
      cargar()
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setTrabajando(null)
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
          <KeyRound className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">
            Acceso a módulos
          </h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{usuario.nombre}</span> ·{' '}
          {usuario.email}
        </p>

        {error && (
          <div className="mb-3 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-2.5">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            <p className="text-xs text-destructive">{error}</p>
          </div>
        )}

        {accesos === null && !error ? (
          <div className="flex items-center gap-2 py-6 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Cargando acceso…
          </div>
        ) : (
          <div className="space-y-3">
            {MODULOS_ACCESO.map((m) => {
              const vig = accesoVigente(m.key)
              const enProceso = trabajando === m.key
              return (
                <div
                  key={m.key}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{m.label}</p>
                    {vig ? (
                      <p className="text-xs text-muted-foreground">
                        {vig.origen === 'mercadopago' ? 'Pagado' : 'Manual'} · vence{' '}
                        {vig.expiraEn
                          ? new Date(vig.expiraEn).toLocaleDateString('es-MX', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })
                          : 'sin caducidad'}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">{m.desc}</p>
                    )}
                  </div>
                  {vig ? (
                    <button
                      type="button"
                      disabled={enProceso}
                      onClick={() => quitar(vig.id, m.key)}
                      className="inline-flex shrink-0 items-center gap-1 rounded-md border border-destructive/40 px-2.5 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
                    >
                      {enProceso ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : (
                        <Trash2 className="h-3 w-3" />
                      )}
                      Quitar
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={enProceso}
                      onClick={() => otorgar(m.key)}
                      className="inline-flex shrink-0 items-center gap-1 rounded-md bg-accent px-2.5 py-1.5 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                    >
                      {enProceso ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : (
                        <Check className="h-3 w-3" />
                      )}
                      Dar acceso
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        )}

        <div className="mt-5 flex items-center justify-between">
          <p className="text-[11px] text-muted-foreground">
            Convocatoria {CICLO_ACTUAL}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

function IndicadorGuardado({ estado }: { estado: EstadoGuardado }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest transition-opacity',
        estado === 'idle' && 'opacity-0',
        estado === 'saving' && 'bg-muted text-muted-foreground',
        estado === 'saved' && 'bg-senal-baja/15 text-senal-baja',
        estado === 'error' && 'bg-destructive/10 text-destructive',
      )}
    >
      {estado === 'saving' && (
        <>
          <Save className="h-3 w-3 animate-pulse" />
          Guardando
        </>
      )}
      {estado === 'saved' && (
        <>
          <CheckCircle2 className="h-3 w-3" />
          Guardado
        </>
      )}
      {estado === 'error' && (
        <>
          <AlertCircle className="h-3 w-3" />
          Error
        </>
      )}
    </div>
  )
}
