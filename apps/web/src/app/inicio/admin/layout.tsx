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
  LayoutDashboard,
  ListChecks,
  Loader2,
  Users,
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
 */

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
      <div className="flex min-h-screen items-center justify-center bg-background">
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
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderPrivado rol="admin" />

      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-6 px-6 py-8">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 md:block">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-4 w-1 rounded bg-military" />
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Panel admin
            </h2>
          </div>
          <nav className="flex flex-col gap-5">
            {NAV_GROUPS.map((grupo) => (
              <div key={grupo.titulo} className="flex flex-col gap-1">
                <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
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
        <nav className="mb-4 flex gap-2 overflow-x-auto md:hidden">
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
        <main className="flex-1">{children}</main>
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
        'relative flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
        active
          ? 'bg-accent/10 font-semibold text-accent'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
      )}
    >
      {active && (
        <span
          aria-hidden
          className="absolute inset-y-1.5 left-0 w-1 rounded-full bg-military"
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
