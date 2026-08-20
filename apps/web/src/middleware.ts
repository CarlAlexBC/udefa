import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const TOKEN_COOKIE = 'token'

/**
 * Redirección de conveniencia para las rutas bajo /inicio.
 *
 * ⚠️ ESTO NO ES SEGURIDAD. Léelo antes de apoyarte en él.
 *
 * Lo único que comprueba es que EXISTA una cookie llamada `token`. No mira si
 * el token es válido, si caducó ni si la sesión sigue abierta: cualquiera puede
 * mandar `token=loquesea` y pasar de aquí. Su trabajo es que a alguien sin
 * sesión no le aparezca una pantalla vacía, y mandarlo al login con ?returnTo=.
 *
 * La seguridad de verdad vive en dos lugares, y ahí tiene que seguir:
 *   1. el BACKEND, que valida el JWT contra la base en cada petición
 *      (jwt.strategy.ts) y aplica RolesGuard / CandadoGuard;
 *   2. los candados de SERVIDOR de las páginas que renderizan contenido de pago
 *      sin pasar por el backend — hoy, lib/guia-acceso.ts.
 *
 * Esto no es teoría: la Guía del Aspirante se servía completa a quien mandara
 * una cookie inventada, precisamente porque se pre-generaba estática y se dio
 * por hecho que "el middleware ya protege /inicio". Si añades una página bajo
 * /inicio que lea datos de pago EN EL SERVIDOR (archivos, base, lo que sea),
 * ponle su propia comprobación como la de guia-acceso.ts. Este archivo no te
 * está cuidando.
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
