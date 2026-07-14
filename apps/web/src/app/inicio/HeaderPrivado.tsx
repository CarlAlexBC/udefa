'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { getToken, clearToken } from '@/lib/auth'

export function HeaderPrivado() {
  const router = useRouter()

  async function handleLogout() {
    const token = getToken()

    // Best-effort: avisar al backend para invalidar la sesión.
    // Si falla (backend caído), igual limpiamos el token local y salimos.
    if (token) {
      try {
        await fetch('http://localhost:3001/auth/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
        })
      } catch {
        // ignorar — la sesión local se cierra igual
      }
    }

    clearToken()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="El Monote te Guía"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="text-sm font-semibold text-foreground">El Monote te Guía</span>
        </Link>

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
    </header>
  )
}
