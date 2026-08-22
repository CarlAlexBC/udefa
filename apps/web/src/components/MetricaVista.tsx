'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * El aviso de visita.
 *
 * Manda la ruta al backend cada vez que el aspirante abre o cambia de pantalla.
 * Es todo lo que hace: no lee cookies, no guarda identificadores y no llama a
 * ningún tercero — por eso no hubo que abrir la Content-Security-Policy ni
 * añadir nada al aviso de privacidad.
 *
 * Va montado en el layout raíz, así que cuenta también las pantallas públicas
 * (portada, precios, la probadita), que son las que dicen si la publicidad está
 * trayendo gente.
 *
 * `keepalive` es lo que hace que el aviso llegue aunque la persona cierre la
 * pestaña en el mismo instante. Y el `catch` vacío es a propósito: si el
 * contador falla, la página no se entera.
 */
export function MetricaVista() {
  const ruta = usePathname()

  useEffect(() => {
    if (!ruta) return
    const url = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'
    fetch(`${url}/metricas/vista`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ruta }),
      keepalive: true,
    }).catch(() => {})
  }, [ruta])

  return null
}
