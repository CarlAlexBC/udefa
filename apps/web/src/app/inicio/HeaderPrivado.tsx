'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut, Shield } from 'lucide-react'
import { clearToken } from '@/lib/auth'

/**
 * Header privado del área /inicio.
 * @param rol - Si es 'admin', renderiza un botón "Admin" que lleva al panel.
 *              El backend valida el rol con RolesGuard; este link es UX.
 */
export function HeaderPrivado({ rol }: { rol?: string } = {}) {
  const router = useRouter()

  async function handleLogout() {
    // Best-effort: avisar al backend para invalidar la sesión y borrar la
    // cookie httpOnly. credentials:'include' manda la cookie de sesión.
    // Si falla (backend caído), igual salimos.
    try {
      await fetch('http://localhost:3001/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
    } catch {
      // ignorar — la sesión se cierra igual
    }

    // Limpia cualquier cookie de token vieja (no-httpOnly) que hubiera quedado
    // de una sesión anterior; la httpOnly la borra el backend.
    clearToken()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/inicio" className="flex items-center gap-3">
          <Image
            src="/monote-logo.jpeg"
            alt="El Monote te Guía"
            width={36}
            height={36}
            className="rounded-full ring-1 ring-accent/30"
          />
          <span className="text-sm font-semibold text-foreground">El Monote te Guía</span>
        </Link>

        <div className="flex items-center gap-1">
          {rol === 'admin' && (
            <Link
              href="/inicio/admin"
              className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              <Shield className="h-3.5 w-3.5" />
              Admin
            </Link>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="mr-1 h-3.5 w-3.5" />
            Cerrar sesión
          </Button>
        </div>
      </div>
    </header>
  )
}
