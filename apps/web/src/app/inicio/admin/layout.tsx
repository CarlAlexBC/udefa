'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { apiFetch } from '@/lib/api'
import { cn } from '@/lib/utils'
import { HeaderPrivado } from '../HeaderPrivado'
import {
  BarChart3,
  BookOpen,
  Building2,
  Flame,
  KeyRound,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  Loader2,
  SlidersHorizontal,
  Users,
  Wallet,
} from 'lucide-react'

/**
 * Layout del panel administrativo.
 *
 * Autoriza en dos pasos:
 *   1) apiFetch('/auth/perfil') — si falla (401), redirige a /login.
 *   2) Si el rol no es 'admin', redirige a /inicio (usuario logueado
 *      pero sin permiso).
 *
 * El backend también verifica con @Roles('admin') + RolesGuard, así
 * que este chequeo es UX (evita mostrar el panel a quien no puede usarlo)
 * pero no es la barrera de seguridad real.
 *
 * VA EN HOJA DE PLATA OSCURA, y va DISTINTO del tablero a propósito: los dos
 * son oscuros, pero el panel tira a verde y el tablero a café. Se nota al
 * entrar sin gastar ningún color de la paleta.
 *
 * Bastan dos clases AQUÍ, juntas: `dark` voltea los tokens del sistema y
 * `panel-admin` (en globals.css) enfría las superficies, las vuelve de vidrio y
 * aprieta los redondeos. Con eso las nueve pantallas del panel cambiaron de
 * piel sin tocar ninguna. Por eso importa que sigan usando tokens (`bg-card`,
 * `bg-muted`, `text-muted-foreground`) y no colores escritos a mano: lo que se
 * escribe a mano se queda fuera del cambio.
 *
 * SIN HALO NI SELLO, y esto no es que sobrara adorno: el sello se ancla en los
 * primeros 520 px de la derecha, que en el tablero es la tarjeta de saludo pero
 * aquí son los primeros renglones de las tablas. Era una marca de agua encima
 * de los datos. Una pantalla de trabajo se agradece callada.
 *
 * Las dos excepciones que ya existen son a propósito: los colores del gráfico
 * de Analítica (semáforo, sirven en los dos temas) y la portada de Temas
 * prioritarios, que necesita quedarse oscura pase lo que pase.
 */

/**
 * El ámbar neón del panel. Vive en dos lugares y nada más —el riel de arriba y
 * la barrita del apartado abierto—, con el mismo color en los dos para que se
 * entiendan como una sola señal de «estás aquí».
 *
 * Sólo MARCA, no escribe. Contraste le sobra para ser texto (8.9:1 sobre este
 * fondo), pero el acento del panel es el latón: si el neón también fuera letra,
 * habría dos dorados discutiendo cuál manda.
 */
const NEON = '#FFA200'

type Perfil = {
  id: number
  nombre: string
  email: string
  rol: string
}

/** Números que el menú muestra como badge. undefined = aún no llega (o falló). */
type Conteos = {
  psicologico?: number
  cultural?: number
  usuarios?: number
  planteles?: number
}

type NavItem = {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  // Si el apartado tiene un número que enseñar, de qué conteo sale.
  contador?: keyof Conteos
}

/**
 * El menú se agrupa en secciones para que no caigan los 7 apartados de
 * golpe. "Bancos de reactivos" junta las dos caras del mismo trabajo
 * —el banco psicológico y el cultural—, que antes vivían sueltas y con
 * nombres que no combinaban ("Reactivos" solo traía lo psicológico).
 */
const NAV_GROUPS: Array<{ titulo: string; items: NavItem[] }> = [
  {
    titulo: 'General',
    items: [
      { href: '/inicio/admin', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/inicio/admin/analitica', label: 'Analítica', icon: BarChart3 },
      { href: '/inicio/admin/ingresos', label: 'Ingresos', icon: Wallet },
    ],
  },
  {
    titulo: 'Bancos de reactivos',
    items: [
      {
        href: '/inicio/admin/reactivos',
        label: 'Banco psicológico',
        icon: ListChecks,
        contador: 'psicologico',
      },
      {
        href: '/inicio/admin/banco-cultural',
        label: 'Banco cultural',
        icon: BookOpen,
        contador: 'cultural',
      },
      {
        href: '/inicio/admin/abstracto',
        label: 'Claves · Abstracto',
        icon: KeyRound,
      },
      {
        href: '/inicio/admin/entiende-tema',
        label: 'Entiende el tema',
        icon: Lightbulb,
      },
    ],
  },
  {
    titulo: 'Gestión',
    items: [
      {
        href: '/inicio/admin/planteles',
        label: 'Planteles',
        icon: Building2,
        contador: 'planteles',
      },
      {
        href: '/inicio/admin/usuarios',
        label: 'Usuarios',
        icon: Users,
        contador: 'usuarios',
      },
      { href: '/inicio/admin/temas-prioridad', label: 'Temas prioritarios', icon: Flame },
      { href: '/inicio/admin/temarios', label: 'Reparto cultural', icon: SlidersHorizontal },
    ],
  },
]

// Lista plana para la barra móvil, que no lleva encabezados de sección.
const NAV_ITEMS: NavItem[] = NAV_GROUPS.flatMap((g) => g.items)

/** Un apartado está activo si la ruta coincide (Dashboard exacto; el resto por prefijo). */
function esActivo(href: string, pathname: string): boolean {
  return href === '/inicio/admin'
    ? pathname === '/inicio/admin'
    : pathname.startsWith(href)
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [estado, setEstado] = useState<'cargando' | 'autorizado' | 'denegado'>(
    'cargando',
  )
  const [conteos, setConteos] = useState<Conteos>({})

  useEffect(() => {
    apiFetch<Perfil>('/auth/perfil')
      .then((perfil) => {
        if (perfil.rol === 'admin') {
          setEstado('autorizado')
        } else {
          setEstado('denegado')
          router.replace('/inicio')
        }
      })
      .catch(() => {
        // No autenticado → login
        router.replace('/login')
      })
  }, [router])

  // Números para los badges del menú. Se piden una sola vez, ya autorizados.
  // No bloquean el panel: allSettled deja que cada apartado muestre su número
  // en cuanto llega, y si una llamada falla, ese badge simplemente no aparece.
  useEffect(() => {
    if (estado !== 'autorizado') return
    let vivo = true

    Promise.allSettled([
      apiFetch<{
        usuarios: { total: number }
        reactivos: { porFase: Array<{ total: number }> }
      }>('/admin/stats'),
      apiFetch<Array<{ reactivos: number }>>('/cultural/libros'),
      apiFetch<unknown[]>('/planteles'),
    ]).then(([stats, cultural, planteles]) => {
      if (!vivo) return
      const nuevos: Conteos = {}
      if (stats.status === 'fulfilled') {
        nuevos.usuarios = stats.value.usuarios.total
        // Banco psicológico = suma de las 3 fases (no `reactivos.total`, que
        // incluye lo cultural).
        nuevos.psicologico = stats.value.reactivos.porFase.reduce(
          (acc, f) => acc + f.total,
          0,
        )
      }
      if (cultural.status === 'fulfilled') {
        nuevos.cultural = cultural.value.reduce((acc, l) => acc + l.reactivos, 0)
      }
      if (planteles.status === 'fulfilled') {
        nuevos.planteles = planteles.value.length
      }
      setConteos(nuevos)
    })

    return () => {
      vivo = false
    }
  }, [estado])

  if (estado === 'cargando' || estado === 'denegado') {
    return (
      <div className="dark panel-admin flex min-h-screen items-center justify-center bg-background">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p className="text-sm">
            {estado === 'denegado'
              ? 'No tienes permiso para acceder al panel admin.'
              : 'Verificando permisos...'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="dark panel-admin relative flex min-h-screen flex-col bg-background">
      {/* LA HOJA. Dos capas fijas a la ventana, no a la página: la lámina no se
          arruga al hacer scroll, se queda quieta y el contenido corre encima.

          Abajo el degradado, que le quita lo plano al fondo. Encima la veta de
          plata: una franja clara que cruza en diagonal, y es lo único que hace
          que se lea METAL en vez de gris. Va al 5% —mucho más tenue que la de
          la Guía— porque aquí le cruza por encima a tablas llenas de texto.

          Esto funciona porque las tarjetas del panel son de VIDRIO (`--card`
          con transparencia, en globals.css). Si fueran opacas, cada una taparía
          la hoja y no se vería nada de esto. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            // Carbón cálido, la familia del #161513 de la marca. Antes este
            // degradado tiraba a verde (#1C2320 → #0F1310): se veía como un
            // panel de otro producto y peleaba con el latón.
            'linear-gradient(135deg, #201E1A 0%, #171613 52%, #100F0D 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            // El barrido, en el mismo crema de las hojas de plata (antes era
            // verdoso: rgba(228,240,231)).
            'linear-gradient(118deg, transparent 26%, rgba(228,233,216,0.05) 45%, rgba(228,233,216,0.015) 55%, transparent 72%)',
        }}
      />

      {/* Tira de NEÓN pegada al borde de la VENTANA: es el recordatorio de que
          estás en el panel. Va fija porque el encabezado se va con el scroll, y
          a 300 renglones dentro del banco cultural el letrero «Panel admin» de
          la barra lateral ya quedó lejísimos.

          Ahora que el panel es oscuro, el neón puede BRILLAR: ámbar saturado
          más un halo que lo desborda. Cuando el panel se probó en claro, este
          mismo halo no se veía —el brillo se pierde contra un fondo claro— y
          el neón tenía que vivir sólo de la saturación. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]"
        style={{
          backgroundColor: NEON,
          boxShadow: `0 0 10px ${NEON}, 0 3px 22px rgba(255,162,0,0.55)`,
        }}
      />

      {/* El encabezado también va en z-10. Sin eso se lo tragan las capas de la
          hoja: son `fixed`, y un elemento posicionado se pinta por encima de
          uno que va en el flujo normal aunque lleve z-index 0. */}
      <div className="relative z-10">
        <HeaderPrivado rol="admin" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 px-5 py-6 md:flex-row">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 md:block">
          <div className="mb-2.5 flex items-center gap-2">
            <div className="h-4 w-1 rounded bg-military" />
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Panel admin
            </h2>
          </div>
          <nav className="flex flex-col gap-4">
            {NAV_GROUPS.map((grupo) => (
              <div key={grupo.titulo} className="flex flex-col gap-0.5">
                <p className="mb-1 px-2.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                  {grupo.titulo}
                </p>
                {grupo.items.map((item) => (
                  <ItemMenu
                    key={item.href}
                    item={item}
                    active={esActivo(item.href, pathname)}
                    conteos={conteos}
                  />
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Barra superior mobile con links horizontales scrollables */}
        <nav className="flex gap-2 overflow-x-auto md:hidden">
          {NAV_ITEMS.map((item) => {
            const active = esActivo(item.href, pathname)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'inline-flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors',
                  active
                    ? 'bg-accent/10 font-semibold text-accent'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Contenido */}
        {/* min-w-0: sin esto <main> es un item flex con min-width:auto y NO puede
            encogerse por debajo de su contenido — una tabla o una gráfica ancha lo
            estiraba y arrastraba TODA la página de lado en el teléfono. */}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  )
}

/**
 * Un apartado del menú lateral. Marca el activo con una barrita olivo a la
 * izquierda (el mismo detalle que los títulos de sección) y, si el apartado
 * lleva contador, muestra el número como badge a la derecha.
 */
function ItemMenu({
  item,
  active,
  conteos,
}: {
  item: NavItem
  active: boolean
  conteos: Conteos
}) {
  const Icon = item.icon
  const n = item.contador ? conteos[item.contador] : undefined
  return (
    <Link
      href={item.href}
      className={cn(
        'relative flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors',
        active
          ? 'bg-accent/10 font-semibold text-accent'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
      )}
    >
      {active && (
        <span
          aria-hidden
          className="absolute inset-y-1 left-0 w-1 rounded-full"
          style={{ backgroundColor: NEON, boxShadow: `0 0 8px ${NEON}` }}
        />
      )}
      <Icon className="h-4 w-4 shrink-0" />
      <span className="flex-1 truncate">{item.label}</span>
      {n !== undefined && (
        <span
          className={cn(
            'shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums',
            active ? 'bg-accent/15 text-accent' : 'bg-muted text-muted-foreground',
          )}
        >
          {n.toLocaleString('es-MX')}
        </span>
      )}
    </Link>
  )
}
