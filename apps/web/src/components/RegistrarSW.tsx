'use client'

import { useEffect } from 'react'

/**
 * Registra el service worker (`public/sw.js`).
 *
 * Va montado en el layout raíz, así que corre en todas las pantallas. No pinta
 * nada: sólo le dice al navegador que instale el archivo.
 *
 * ESPERA A QUE LA PÁGINA TERMINE DE CARGAR. Registrarlo de inmediato le
 * pelearía ancho de banda a lo que el aspirante vino a ver, y no hay ninguna
 * prisa: el service worker no sirve para nada en esta visita, sino en la
 * siguiente.
 *
 * Si el registro falla —navegador viejo, modo incógnito, el usuario bloqueó el
 * almacenamiento— no pasa nada y la plataforma funciona igual. Por eso el
 * `catch` vacío: es un extra, no un requisito.
 */
export function RegistrarSW() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    const registrar = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Silencio a propósito: ver el comentario de arriba.
      })
    }

    if (document.readyState === 'complete') {
      registrar()
      return
    }
    window.addEventListener('load', registrar)
    return () => window.removeEventListener('load', registrar)
  }, [])

  return null
}
