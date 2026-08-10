'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { API_URL } from '@/lib/api'
import { FondoAuth } from '@/components/FondoAuth'

/**
 * "Restablecer contraseña" — paso 2: llega desde el enlace del correo con
 * ?token=… y pide la nueva contraseña. useSearchParams exige Suspense (Next 16).
 */
export default function RestablecerPage() {
  return (
    <Suspense fallback={null}>
      <RestablecerForm />
    </Suspense>
  )
}

function RestablecerForm() {
  const token = useSearchParams().get('token') || ''
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [loading, setLoading] = useState(false)
  const [listo, setListo] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.')
      return
    }
    if (password !== confirmar) {
      setError('Las contraseñas no coinciden.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/auth/restablecer-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, nuevaPassword: password }),
      })
      if (!res.ok) {
        setError('El enlace no es válido o ya venció. Pide uno nuevo.')
        setLoading(false)
        return
      }
      setListo(true)
    } catch {
      setError('Error de conexión con el servidor')
      setLoading(false)
    }
  }

  return (
    <main className="dark relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-12">
      <FondoAuth />
      <div className="relative z-10 flex w-full flex-col items-center">
      <Link
        href="/"
        className="mb-8 flex items-center gap-3 opacity-90 transition-opacity hover:opacity-100"
      >
        <Image
          src="/monote-logo.jpeg"
          alt="El Monote te Guía"
          width={48}
          height={48}
          className="rounded-full ring-1 ring-accent/30"
        />
        <span className="text-sm font-semibold text-foreground">El Monote te Guía</span>
      </Link>

      <Card className="w-full max-w-sm border-[#6B7530]/55 bg-[#2A2E16]/55 backdrop-blur-[3px]">
        {!token ? (
          // Llegó sin token (link mal copiado o entró directo).
          <>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Enlace inválido</CardTitle>
              <CardDescription>
                Este enlace no trae la información necesaria. Pide uno nuevo desde
                &quot;¿Olvidaste tu contraseña?&quot;.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/olvide-password">
                <Button className="w-full">Pedir un enlace nuevo</Button>
              </Link>
            </CardContent>
          </>
        ) : listo ? (
          // Contraseña cambiada.
          <>
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-2xl">¡Contraseña actualizada!</CardTitle>
              <CardDescription>
                Tu contraseña se cambió y se cerraron tus sesiones abiertas. Ya puedes
                iniciar sesión con la nueva.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login">
                <Button className="w-full">Iniciar sesión</Button>
              </Link>
            </CardContent>
          </>
        ) : (
          // Formulario de nueva contraseña.
          <>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Nueva contraseña</CardTitle>
              <CardDescription>Elige una contraseña de al menos 8 caracteres.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Nueva contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="confirmar">Confirmar contraseña</Label>
                  <Input
                    id="confirmar"
                    type="password"
                    value={confirmar}
                    onChange={(e) => setConfirmar(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                <Button type="submit" disabled={loading} className="mt-2 w-full">
                  {loading ? 'Guardando...' : 'Cambiar contraseña'}
                </Button>
              </form>
            </CardContent>
          </>
        )}
      </Card>

      <Link href="/" className="mt-6 text-xs text-muted-foreground hover:text-foreground">
        ← Volver a inicio
      </Link>
      </div>
    </main>
  )
}
