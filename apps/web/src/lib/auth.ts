/**
 * Manejo del token de autenticación.
 *
 * Desde el endurecimiento de seguridad, **el backend pone la cookie de sesión
 * como httpOnly** al hacer login (invisible al JavaScript). El frontend ya no
 * escribe el token: sólo manda las peticiones con `credentials: 'include'` para
 * que el navegador adjunte esa cookie automáticamente.
 *
 * El middleware de Next lee la cookie `token` en el edge server (donde SÍ tiene
 * acceso, aunque sea httpOnly) para proteger las rutas bajo /inicio.
 *
 * Quedan `getToken`/`clearToken` para el periodo de transición: sesiones abiertas
 * antes del cambio todavía tienen un token viejo legible por JS.
 */

export const TOKEN_COOKIE = 'token'

// Limpia un token viejo NO-httpOnly que hubiera quedado de una sesión anterior.
// La cookie httpOnly nueva la borra el backend en /auth/logout (el JS no puede).
export function clearToken() {
  if (typeof document === 'undefined') return
  document.cookie = `${TOKEN_COOKIE}=; path=/; max-age=0; SameSite=Lax`
}

// Lee un token viejo legible por JS, si lo hay. Respaldo para sesiones abiertas
// antes del cambio a httpOnly; las nuevas devuelven null (y usan la cookie).
export function getToken(): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(^|; )${TOKEN_COOKIE}=([^;]*)`))
  return match ? decodeURIComponent(match[2]) : null
}
