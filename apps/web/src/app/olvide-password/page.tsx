'use client'

import { useState } from 'react'
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
import { AlertCircle, MailCheck } from 'lucide-react'
import { API_URL } from '@/lib/api'
import { FondoAuth } from '@/components/FondoAuth'

/**
 * "Olvidé mi contraseña" — paso 1: pide el correo.
 * El backend responde SIEMPRE igual (exista o no el correo), así que
 * mostramos el mismo mensaje de éxito pase lo que pase: no delatamos cuentas.
 */
export default function OlvidePasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/auth/olvide-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        // Sobre todo 429 (demasiadas solicitudes por el freno de 5/min).
        setError('No pudimos procesar la solicitud. Espera un momento e intenta de nuevo.')
        setLoading(false)
        return
      }
      setEnviado(true)
    } catch {
      setError('Error de conexión con el servidor')
    } finally {
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
        {enviado ? (
          <>
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                <MailCheck className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-2xl">Revisa tu correo</CardTitle>
              <CardDescription>
                Si el correo está registrado, te enviamos un enlace para restablecer tu
                contraseña. Revisa tu bandeja (y la carpeta de spam). El enlace vence en 1 hora.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login">
                <Button variant="outline" className="w-full">
                  Volver a iniciar sesión
                </Button>
              </Link>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">¿Olvidaste tu contraseña?</CardTitle>
              <CardDescription>
                Escribe tu correo y te mandamos un enlace para crear una nueva.
              </CardDescription>
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

                {error && (
                  <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                <Button type="submit" disabled={loading} className="mt-2 w-full">
                  {loading ? 'Enviando...' : 'Enviar enlace'}
                </Button>

                <p className="mt-2 text-center text-sm text-muted-foreground">
                  ¿Ya la recordaste?{' '}
                  <Link href="/login" className="font-semibold text-accent hover:underline">
                    Iniciar sesión
                  </Link>
                </p>
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
