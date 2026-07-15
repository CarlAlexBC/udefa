import { getToken } from './auth'

/**
 * Base URL del backend. Cuando pasemos a producción se convierte
 * en env var (NEXT_PUBLIC_API_URL) — por ahora hardcoded al puerto local.
 */
export const API_URL = 'http://localhost:3001'

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
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    // Intentamos leer el mensaje del backend (NestJS suele devolver { message, statusCode }).
    let message = `Error ${res.status}`
    try {
      const errBody = await res.json()
      if (errBody?.message) {
        message = Array.isArray(errBody.message)
          ? errBody.message.join(', ')
          : errBody.message
      }
    } catch {
      // silencioso — el backend no devolvió JSON
    }
    throw new Error(message)
  }

  // 204 No Content
  if (res.status === 204) return undefined as T

  return res.json()
}
