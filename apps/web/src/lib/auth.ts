/**
 * Manejo del token de autenticación via cookie.
 *
 * Usamos cookie (no localStorage) para que el middleware de Next
 * — que corre en el edge server, sin acceso al navegador — pueda
 * verificarla antes de renderizar rutas protegidas.
 *
 * Cookie NO httpOnly porque la seteamos desde el navegador tras login.
 * Migrar a httpOnly (seteada por el backend) es tarea de la iteración
 * de hardening cuando toque deploy real.
 */

export const TOKEN_COOKIE = 'token'
const TOKEN_MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 días

export function setToken(token: string) {
  if (typeof document === 'undefined') return
  document.cookie = `${TOKEN_COOKIE}=${encodeURIComponent(token)}; path=/; max-age=${TOKEN_MAX_AGE_SECONDS}; SameSite=Lax`
}

export function clearToken() {
  if (typeof document === 'undefined') return
  document.cookie = `${TOKEN_COOKIE}=; path=/; max-age=0; SameSite=Lax`
}

export function getToken(): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(^|; )${TOKEN_COOKIE}=([^;]*)`))
  return match ? decodeURIComponent(match[2]) : null
}
