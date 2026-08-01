'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { apiFetch, ApiError } from '@/lib/api'
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
import {
  AlertCircle,
  ArrowLeft,
  Brain,
  Check,
  GraduationCap,
  Lock,
  ShieldCheck,
} from 'lucide-react'

// Ciclo vigente — mismo texto que /precios.
const CICLO = '2027'
const MODELO_ACCESO = `Pago único · Acceso hasta finalizar la convocatoria ${CICLO}`

// Catálogo de los paquetes DE PAGO para el resumen de esta pantalla. El gratis
// (Explora) no compra, así que no vive aquí. Los precios y textos coinciden con
// /precios; el backend es la fuente de la verdad del cobro.
const PAQUETES = {
  cultural: {
    nombre: 'Preparación Cultural',
    subtitulo: 'Domina el examen académico',
    precio: '$999',
    color: { c: '#2563A8', on: '#FFFFFF' },
    icono: GraduationCap,
    incluye: [
      '+5,000 preguntas reales clasificadas por tema',
      'Simulacros con cronómetro igual al examen',
      'Estrategia completa de estudio',
      'Repaso espaciado inteligente',
      'Se actualiza al temario oficial de la convocatoria vigente',
    ],
  },
  psicologico: {
    nombre: 'Preparación Psicológica',
    subtitulo: 'Domina las 3 fases del examen',
    precio: '$1,999',
    color: { c: '#6B46C1', on: '#FFFFFF' },
    icono: Brain,
    incluye: [
      'Guías completas de las 3 fases',
      'Panel de diagnóstico inteligente',
      'Simuladores por fase con cronómetro',
      'Estrategias y consejos psicológicos',
      'Repaso espaciado inteligente',
    ],
  },
  completa: {
    nombre: 'Preparación Completa',
    subtitulo: 'Todo lo que necesitas, en un solo lugar',
    precio: '$2,500',
    color: { c: '#C99A3B', on: '#161513' },
    icono: ShieldCheck,
    incluye: [
      'TODO lo del paquete Cultural',
      'TODO lo del paquete Psicológico',
      'Guía del Aspirante completa',
      'Simulacros integrales (Cultural + Psicológico)',
      'Repaso espaciado en todo',
    ],
  },
} as const

type ClavePaquete = keyof typeof PAQUETES

export default function ComprarPage({
  params,
}: {
  params: Promise<{ paquete: string }>
}) {
  const { paquete } = use(params)
  const info = PAQUETES[paquete as ClavePaquete]

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [error, setError] = useState('')
  // Cuando el correo ya tiene cuenta activa, además del mensaje ofrecemos el
  // atajo a iniciar sesión.
  const [ofrecerLogin, setOfrecerLogin] = useState(false)
  const [loading, setLoading] = useState(false)

  // Paquete inexistente en la URL: mensaje amable de vuelta a precios.
  if (!info) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
        <p className="text-lg font-semibold text-foreground">
          Ese paquete no existe.
        </p>
        <Link
          href="/precios"
          className="text-sm font-semibold text-accent hover:underline"
        >
          ← Ver los paquetes
        </Link>
      </main>
    )
  }

  const Icono = info.icono

  async function comprar(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setOfrecerLogin(false)

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
      const res = await apiFetch<{ initPoint?: string }>(
        '/pagos/registrar-y-pagar',
        { method: 'POST', body: { nombre, email, password, paquete } },
      )
      if (!res.initPoint) throw new Error('sin-checkout')
      // Nos vamos al checkout de Mercado Pago; no apagamos loading porque la
      // página se está reemplazando.
      window.location.href = res.initPoint
    } catch (err) {
      if (err instanceof ApiError && err.status === 409) {
        setError('Ese correo ya tiene una cuenta. Inicia sesión para comprar.')
        setOfrecerLogin(true)
      } else if (err instanceof ApiError) {
        setError(err.message)
      } else {
        setError('No se pudo iniciar el pago. Intenta de nuevo.')
      }
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Barra superior — igual que /precios */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/precios" className="flex items-center gap-3">
            <Image
              src="/monote-logo.jpeg"
              alt="El Monote te Guía"
              width={36}
              height={36}
              className="rounded-full ring-1 ring-accent/30"
            />
            <span className="text-sm font-semibold text-foreground">
              El Monote te Guía
            </span>
          </Link>
          <Link
            href="/precios"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Ver paquetes
          </Link>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-5xl flex-1 grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[1fr_1.05fr] md:items-start">
        {/* ─── Resumen del paquete ─── */}
        <section>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-5 bg-accent" />
            Estás comprando
          </div>

          <div className="mt-4 rounded-xl border border-border bg-card p-6">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: info.color.c + '1F', color: info.color.c }}
            >
              <Icono className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xl font-bold" style={{ color: info.color.c }}>
              {info.nombre}
            </p>
            <p className="text-sm text-muted-foreground">{info.subtitulo}</p>

            <div className="mt-4 flex items-baseline gap-2">
              <span
                className="text-4xl font-bold tracking-tight tabular-nums"
                style={{ color: info.color.c }}
              >
                {info.precio}
              </span>
              <span className="text-xs text-muted-foreground">MXN</span>
            </div>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">
              {MODELO_ACCESO}
            </p>

            <ul className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
              {info.incluye.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: info.color.c }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Pago seguro con Mercado Pago · tarjeta, transferencia, OXXO y meses
            sin intereses.
          </p>
        </section>

        {/* ─── Formulario: crea tu cuenta y paga ─── */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Crea tu cuenta y paga</CardTitle>
            <CardDescription>
              Con estos datos entras a tu preparación en cuanto se confirme el
              pago.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={comprar} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
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
                  <p className="text-sm text-destructive">
                    {error}
                    {ofrecerLogin && (
                      <>
                        {' '}
                        <Link
                          href="/login?returnTo=/precios"
                          className="font-semibold underline"
                        >
                          Iniciar sesión
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="mt-1 w-full"
                style={{
                  backgroundColor: info.color.c,
                  color: info.color.on,
                }}
              >
                <Lock className="mr-1 h-4 w-4" />
                {loading ? 'Redirigiendo…' : `Ir a pagar ${info.precio}`}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Eliges tu plantel al entrar. Puedes cambiarlo cuando quieras.
              </p>

              <p className="mt-1 text-center text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{' '}
                <Link
                  href="/login?returnTo=/precios"
                  className="font-semibold text-accent hover:underline"
                >
                  Inicia sesión
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
