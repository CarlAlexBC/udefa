import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const TOKEN_COOKIE = 'token'

/**
 * Guard de rutas protegidas.
 * Si el usuario entra a una ruta bajo /inicio sin cookie `token`,
 * lo mandamos a /login y guardamos la URL destino en ?returnTo=
 * para redirigirlo de vuelta después de autenticarse.
 */
export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_COOKIE)?.value

  if (!token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('returnTo', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

/**
 * Solo aplicar el middleware a rutas bajo /inicio.
 * El resto (landing, login, registro, assets) queda libre.
 */
export const config = {
  matcher: ['/inicio/:path*'],
}
