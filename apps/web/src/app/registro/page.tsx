'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle } from 'lucide-react'
import { setToken } from '@/lib/auth'

export default function RegistroPage() {
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
      // 1. Crear cuenta
      const registroRes = await fetch('http://localhost:3001/usuarios/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, password }),
      })

      if (!registroRes.ok) {
        if (registroRes.status === 409) {
          setError('Ese correo ya está registrado. Intenta iniciar sesión.')
        } else {
          setError('No pudimos crear tu cuenta. Verifica los datos e intenta de nuevo.')
        }
        setLoading(false)
        return
      }

      // 2. Auto-login inmediato con las credenciales recién creadas
      const loginRes = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!loginRes.ok) {
        // Registro OK pero login falló — mandamos a /login manual
        router.push('/login')
        return
      }

      const data = await loginRes.json()
      setToken(data.access_token)
      router.push('/inicio')
      router.refresh()
    } catch {
      setError('Error de conexión con el servidor.')
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12">
      <Link href="/" className="mb-8 flex items-center gap-3 opacity-90 transition-opacity hover:opacity-100">
        <Image
          src="/logo.png"
          alt="El Monote te Guía"
          width={48}
          height={48}
          className="rounded-lg"
        />
        <span className="text-sm font-semibold text-foreground">El Monote te Guía</span>
      </Link>

      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Crear cuenta</CardTitle>
          <CardDescription>Empieza tu preparación en menos de un minuto</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Carlo Alexander"
                required
                autoComplete="name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
              <p className="text-xs text-muted-foreground">Mínimo 8 caracteres.</p>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmar">Confirma tu contraseña</Label>
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

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 w-full"
            >
              {loading ? 'Creando cuenta...' : 'Crear cuenta'}
            </Button>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              ¿Ya tienes cuenta?{' '}
              <Link
                href="/login"
                className="font-semibold text-accent hover:underline"
              >
                Iniciar sesión
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>

      <Link
        href="/"
        className="mt-6 text-xs text-muted-foreground hover:text-foreground"
      >
        ← Volver a inicio
      </Link>
    </main>
  )
}
