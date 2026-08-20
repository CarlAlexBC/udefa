'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle } from 'lucide-react'
import { API_URL } from '@/lib/api'
import { FondoAuth } from '@/components/FondoAuth'

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  )
}

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnTo = searchParams.get('returnTo') || '/inicio'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // include: para que el navegador guarde la cookie httpOnly que
        // el backend manda en la respuesta.
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        // Por defecto, el mensaje neutro: el backend contesta lo MISMO si el
        // correo no existe o si la contraseña está mal, para no delatar quién
        // tiene cuenta. Ese mensaje se conserva tal cual.
        //
        // Pero hay dos casos en que decir "contraseña incorrecta" es mentira y
        // deja al aspirante dando vueltas, así que se muestran aparte:
        //   - CUENTA_PENDIENTE: compró, su pago aún no se acredita y la cuenta
        //     todavía no abre. Su contraseña no tiene nada de malo.
        //   - 429: se pasó del tope de intentos por minuto (freno anti-fuerza
        //     bruta). Lo único que necesita es esperar.
        let mensaje = 'Email o contraseña incorrectos'
        if (res.status === 429) {
          mensaje = 'Demasiados intentos seguidos. Espera un minuto y vuelve a intentar.'
        } else {
          try {
            const cuerpo = await res.json()
            if (cuerpo?.code === 'CUENTA_PENDIENTE' && typeof cuerpo.message === 'string') {
              mensaje = cuerpo.message
            }
          } catch {
            // El backend no devolvió JSON: nos quedamos con el mensaje neutro.
          }
        }
        setError(mensaje)
        setLoading(false)
        return
      }

      // El backend ya dejó la cookie de sesión httpOnly; no guardamos nada en JS.
      router.push(returnTo)
      router.refresh()
    } catch {
      setError('Error de conexión con el servidor')
      setLoading(false)
    }
  }

  return (
    <main className="dark relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-12">
      <FondoAuth />
      <div className="relative z-10 flex w-full flex-col items-center">
      {/* Logo + nombre de marca — arriba del card */}
      <Link href="/" className="mb-8 flex items-center gap-3 opacity-90 transition-opacity hover:opacity-100">
        <Image
          src="/monote-logo.jpeg"
          alt="El Monote te Guía"
          width={48}
          height={48}
          className="rounded-full ring-1 ring-accent/30"
        />
        <span className="text-sm font-semibold text-foreground">El Monote te Guía</span>
      </Link>

      {/* Semitransparente y en oliva a propósito: la constelación de escudos
          del fondo se ve a través del formulario. El desenfoque de 3px es
          apenas el necesario para que un escudo que quede justo detrás no le
          pelee legibilidad a las etiquetas. */}
      <Card className="w-full max-w-sm border-[#6B7530]/55 bg-[#2A2E16]/55 backdrop-blur-[3px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
          <CardDescription>Accede a tus simuladores y resultados</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                autoComplete="current-password"
              />
              <Link
                href="/olvide-password"
                className="self-end text-xs font-medium text-accent hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
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
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              ¿Aún no tienes acceso?{' '}
              <Link
                href="/precios"
                className="font-semibold text-accent hover:underline"
              >
                Ver los paquetes
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
      </div>
    </main>
  )
}
