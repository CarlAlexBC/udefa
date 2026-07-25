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

const NAV_ITEMS: Array<{
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}> = [
  { href: '/inicio/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/inicio/admin/analitica', label: 'Analítica', icon: BarChart3 },
  { href: '/inicio/admin/planteles', label: 'Planteles', icon: Building2 },
  { href: '/inicio/admin/reactivos', label: 'Reactivos', icon: ListChecks },
  { href: '/inicio/admin/banco-cultural', label: 'Banco cultural', icon: BookOpen },
  { href: '/inicio/admin/usuarios', label: 'Usuarios', icon: Users },
  { href: '/inicio/admin/temas-prioridad', label: 'Temas prioritarios', icon: Flame },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [estado, setEstado] = useState<'cargando' | 'autorizado' | 'denegado'>(
    'cargando',
  )

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
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === '/inicio/admin'
                  ? pathname === '/inicio/admin'
                  : pathname.startsWith(item.href)
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                    active
                      ? 'bg-accent/10 font-semibold text-accent'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Barra superior mobile con links horizontales scrollables */}
        <nav className="mb-4 flex gap-2 overflow-x-auto md:hidden">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === '/inicio/admin'
                ? pathname === '/inicio/admin'
                : pathname.startsWith(item.href)
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
