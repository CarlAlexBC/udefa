'use client'

import { useSyncExternalStore } from 'react'

/* ═══════════════════════════════════════════════════════════
   Avance de lectura de la Guía del Aspirante.

   ESTE ES EL ÚNICO ARCHIVO QUE SABE DÓNDE SE GUARDA EL AVANCE.

   Hoy vive en el navegador del aspirante (localStorage). Es lo que
   permitió sacar el mosaico sin tocar el backend, pero tiene un costo
   que hay que decir claro: el avance vive en ESE equipo. Si el
   aspirante cambia de teléfono, limpia el navegador o entra desde la
   compu, la barra aparece en cero.

   Cuando toque moverlo a la base (tabla de secciones leídas por
   usuario), se cambia AQUÍ ADENTRO y nada más: las pantallas sólo
   conocen `useProgresoGuia()` y `marcarSeccionLeida()`.

   El hook se apoya en `useSyncExternalStore`, que es la API de React
   para leer algo que vive FUERA de React (aquí el almacenamiento del
   navegador). Sirve para dos cosas de un golpe: no hace falta copiar
   el dato a un estado dentro de un efecto, y React sabe que en el
   servidor ese dato no existe todavía.
   ═══════════════════════════════════════════════════════════ */

const LLAVE = 'udefa:guia:leidas'

/** Aviso interno para que todas las pantallas abiertas se enteren de un cambio. */
const EVENTO = 'udefa:guia:progreso'

/** El servidor no puede saber qué leyó nadie: siempre responde vacío.
    Es UNA sola instancia a propósito — si devolviera un Set nuevo cada
    vez, React lo vería como "cambió" y repintaría sin parar. */
const VACIO: ReadonlySet<string> = new Set<string>()

// Memoria del último valor leído. Misma razón que arriba: React compara
// por identidad, así que mientras el texto guardado no cambie hay que
// devolver exactamente el mismo Set.
let crudoEnCache: string | null = null
let setEnCache: ReadonlySet<string> = VACIO

function leerDelAlmacen(): string[] {
  try {
    const crudo = window.localStorage.getItem(LLAVE)
    if (!crudo) return []
    const datos: unknown = JSON.parse(crudo)
    return Array.isArray(datos)
      ? datos.filter((s): s is string => typeof s === 'string')
      : []
  } catch {
    // Almacenamiento bloqueado (modo privado) o JSON corrupto: se
    // arranca en cero en vez de tronar la pantalla.
    return []
  }
}

function escribirEnElAlmacen(slugs: string[]): void {
  try {
    window.localStorage.setItem(LLAVE, JSON.stringify(slugs))
  } catch {
    // Sin espacio o bloqueado: el avance no se guarda, pero la lectura
    // no se interrumpe.
  }
}

function avisar(): void {
  window.dispatchEvent(new CustomEvent(EVENTO))
}

/* ─── Las tres piezas que pide useSyncExternalStore ─── */

function suscribir(alCambiar: () => void): () => void {
  // `storage` cubre otras pestañas; el evento propio cubre esta misma.
  window.addEventListener(EVENTO, alCambiar)
  window.addEventListener('storage', alCambiar)
  return () => {
    window.removeEventListener(EVENTO, alCambiar)
    window.removeEventListener('storage', alCambiar)
  }
}

function instantanea(): ReadonlySet<string> {
  let crudo: string | null = null
  try {
    crudo = window.localStorage.getItem(LLAVE)
  } catch {
    crudo = null
  }
  if (crudo !== crudoEnCache) {
    crudoEnCache = crudo
    setEnCache = new Set(leerDelAlmacen())
  }
  return setEnCache
}

function instantaneaDelServidor(): ReadonlySet<string> {
  return VACIO
}

/** Store de una sola respuesta: false mientras pinta el servidor, true ya en el
    navegador. Sirve para no enseñar un "0 leídas" que parpadee al valor bueno. */
const noSuscribir = () => () => {}

/* ─── Lo que usan las pantallas ─── */

/**
 * Marca una sección como leída. Idempotente: llamarla dos veces no
 * duplica nada. Avisa a las pantallas abiertas para que repinten.
 */
export function marcarSeccionLeida(slug: string): void {
  if (typeof window === 'undefined') return
  const actuales = leerDelAlmacen()
  if (actuales.includes(slug)) return
  escribirEnElAlmacen([...actuales, slug])
  avisar()
}

/** Borra todo el avance. Se ofrece desde el hero del índice. */
export function reiniciarProgresoGuia(): void {
  if (typeof window === 'undefined') return
  escribirEnElAlmacen([])
  avisar()
}

/**
 * Devuelve las secciones leídas.
 *
 * `cargando` es true durante la pintura del servidor y la hidratación, y
 * pasa a false en cuanto manda el navegador. Las pantallas lo usan para
 * no dibujar la barra en cero un instante antes del valor real.
 */
export function useProgresoGuia(): {
  leidas: ReadonlySet<string>
  cargando: boolean
} {
  const leidas = useSyncExternalStore(
    suscribir,
    instantanea,
    instantaneaDelServidor,
  )
  const enElNavegador = useSyncExternalStore(
    noSuscribir,
    () => true,
    () => false,
  )

  return { leidas, cargando: !enElNavegador }
}
