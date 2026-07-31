import { getToken } from './auth'

/**
 * Base URL del backend. Cuando pasemos a producción se convierte
 * en env var (NEXT_PUBLIC_API_URL) — por ahora hardcoded al puerto local.
 */
export const API_URL = 'http://localhost:3001'

/**
 * Error de una respuesta del backend. Conserva el `status` HTTP y el `code`
 * que manda NestJS en el cuerpo (p. ej. `code: 'SIN_ACCESO'` del candado), para
 * que quien llama pueda ramificar sin tener que adivinar por el texto del mensaje.
 * Extiende Error, así que el código viejo que lee `.message` sigue funcionando.
 */
export class ApiError extends Error {
  status: number
  code?: string
  constructor(message: string, status: number, code?: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
  }
}

type FetchOptions = Omit<RequestInit, 'body'> & {
  body?: unknown
}

/**
 * Wrapper de fetch que añade automáticamente:
 * - Authorization: Bearer <token> (si hay cookie de sesión)
 * - Content-Type: application/json cuando hay body
 * - Serialización del body a JSON
 *
 * Devuelve la respuesta ya parseada o lanza un Error con el mensaje del backend.
 * Uso: const data = await apiFetch('/planteles')
 *      const nuevo = await apiFetch('/intentos', { method: 'POST', body: { examenId: 1 } })
 */
export async function apiFetch<T = unknown>(
  path: string,
  options: FetchOptions = {},
): Promise<T> {
  const { body, headers, ...rest } = options
  const token = getToken()

  const finalHeaders: HeadersInit = {
    ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: finalHeaders,
    // Manda la cookie de sesión httpOnly al backend. El header Authorization de
    // arriba queda como respaldo para sesiones viejas que aún tengan token en JS.
    credentials: 'include',
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    // Intentamos leer el mensaje del backend (NestJS suele devolver { message, statusCode }).
    let message = `Error ${res.status}`
    let code: string | undefined
    try {
      const errBody = await res.json()
      if (errBody?.message) {
        message = Array.isArray(errBody.message)
          ? errBody.message.join(', ')
          : errBody.message
      }
      // El candado manda `code: 'SIN_ACCESO'`; lo conservamos para el frontend.
      if (typeof errBody?.code === 'string') code = errBody.code
    } catch {
      // silencioso — el backend no devolvió JSON
    }
    throw new ApiError(message, res.status, code)
  }

  // 204 No Content
  if (res.status === 204) return undefined as T

  return res.json()
}
