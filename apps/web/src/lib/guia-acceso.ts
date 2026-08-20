import 'server-only'
import { cookies } from 'next/headers'
import { API_URL } from './api'

/**
 * Candado de la Guía del Aspirante, del lado del SERVIDOR.
 *
 * Por qué existe. El candado de la Guía vivía sólo en `GuardiaGuia`, que es un
 * componente de cliente: decide si PINTA el contenido, pero el contenido ya
 * viajó al navegador dentro de la respuesta. Y como las páginas se generaban
 * estáticas, nadie comprobaba nada por petición: bastaba mandar una cookie
 * llamada `token` con cualquier valor inventado —el middleware sólo mira que
 * exista— para recibir el manual completo sin cuenta y sin pagar. Comprobado.
 *
 * Con esto, la comprobación ocurre ANTES de leer el .md: si no hay acceso, el
 * texto ni siquiera se carga del disco, así que no hay nada que interceptar.
 *
 * Cierra en caso de duda. Si el backend no contesta, no sabemos si esta persona
 * pagó, y esto es contenido de pago: se bloquea con un aviso de que es un
 * problema nuestro, no suyo. (Al revés — abrir ante la duda — es justo el error
 * que tenía `GuardiaGuia`, que ante un fallo de red dejaba pasar.)
 */
export type ResultadoAccesoGuia =
  | { permitido: true }
  | { permitido: false; motivo: 'sin-modulo' | 'sin-sesion' | 'error' }

export async function verificarAccesoGuia(): Promise<ResultadoAccesoGuia> {
  const token = (await cookies()).get('token')?.value
  if (!token) return { permitido: false, motivo: 'sin-sesion' }

  try {
    const res = await fetch(`${API_URL}/acceso/mios`, {
      // Reenviamos la cookie de sesión del aspirante: el backend responde por
      // ÉL, no por el servidor de Next.
      headers: { Cookie: `token=${token}` },
      // Nunca cachear: la respuesta depende de quién pregunta. Una respuesta
      // cacheada podría darle a alguien el acceso de otro.
      cache: 'no-store',
    })

    // 401 = la cookie no sirve (inventada, caducada o sesión cerrada).
    if (res.status === 401) return { permitido: false, motivo: 'sin-sesion' }
    if (!res.ok) return { permitido: false, motivo: 'error' }

    const datos = (await res.json()) as {
      candadoActivo: boolean
      modulos: string[]
    }

    // Candado apagado = todo abierto, como el resto de la plataforma.
    if (!datos.candadoActivo) return { permitido: true }

    // La Guía va incluida en Psicológico y Completa (mismo criterio que el
    // backend usa para /guia/leidas con @Modulo('psicologico')).
    return datos.modulos?.includes('psicologico')
      ? { permitido: true }
      : { permitido: false, motivo: 'sin-modulo' }
  } catch {
    return { permitido: false, motivo: 'error' }
  }
}
