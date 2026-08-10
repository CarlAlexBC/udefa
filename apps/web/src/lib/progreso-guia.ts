'use client'

import { useSyncExternalStore } from 'react'
import { apiFetch } from './api'

/* ═══════════════════════════════════════════════════════════
   Avance de lectura de la Guía del Aspirante.

   ESTE ES EL ÚNICO ARCHIVO QUE SABE DÓNDE SE GUARDA EL AVANCE.
   Las pantallas sólo conocen `useProgresoGuia()`, `marcarSeccionLeida()`
   y `reiniciarProgresoGuia()`.

   Antes vivía en el navegador (localStorage) y se perdía al cambiar de
   equipo. Ahora vive en la base, detrás de /guia/leidas, y el navegador
   queda sólo como copia de trabajo para que la pantalla pinte al
   instante en vez de esperar al servidor.

   CÓMO FUNCIONA, EN CORTO
   Hay una copia en memoria que es la que pintan las pantallas. Al montar
   se pide la verdad al servidor y se sustituye. Al marcar una sección se
   apunta primero en la copia —la palomita aparece de inmediato— y luego
   se manda al servidor; si el envío falla, se deshace.

   Eso último se llama actualización optimista, y aquí es lo correcto:
   marcar una sección leída no es una operación delicada, y esperar medio
   segundo a que el servidor confirme antes de pintar la palomita se
   siente roto en un teléfono con mala señal.
   ═══════════════════════════════════════════════════════════ */

/** Copia de trabajo. Las pantallas leen de aquí. */
let leidas: ReadonlySet<string> = new Set<string>()
let yaSeConsulto = false

const suscriptores = new Set<() => void>()

function avisar() {
  for (const s of suscriptores) s()
}

function reemplazar(nuevas: Iterable<string>) {
  leidas = new Set(nuevas)
  avisar()
}

/* ─── Puente con el servidor ─── */

/**
 * Une las peticiones que salen al mismo tiempo. Varias pantallas montan a
 * la vez (el mosaico y el hero, por ejemplo) y sin esto cada una pediría
 * lo mismo.
 */
let enVuelo: Promise<void> | null = null

function traerDelServidor(): Promise<void> {
  if (!enVuelo) {
    const peticion = apiFetch<string[]>('/guia/leidas')
      .then((slugs) => {
        reemplazar(slugs)
        yaSeConsulto = true
      })
      .catch(() => {
        // Sin conexión o sesión vencida: se deja lo que haya en memoria y
        // se marca como consultado para no quedarse en "cargando" para
        // siempre. La barra dirá cero, que es honesto: no sabemos.
        yaSeConsulto = true
        avisar()
      })
      .finally(() => {
        if (enVuelo === peticion) enVuelo = null
      })
    enVuelo = peticion
  }
  return enVuelo
}

/* ─── Migración de lo que quedó en el navegador ─── */

const LLAVE_VIEJA = 'udefa:guia:leidas'

/**
 * Sube por única vez el avance que el aspirante tenía guardado en este
 * navegador de cuando esto no estaba en la base, y limpia la llave vieja.
 *
 * Se hace ANTES de la primera consulta para que lo subido ya venga en la
 * respuesta y no haya un parpadeo. Si falla, la llave NO se borra: se
 * vuelve a intentar la próxima vez en vez de perder lo que ya había leído.
 */
async function subirLoQueQuedoEnElNavegador(): Promise<void> {
  let slugs: string[] = []
  try {
    const crudo = window.localStorage.getItem(LLAVE_VIEJA)
    if (!crudo) return
    const datos: unknown = JSON.parse(crudo)
    slugs = Array.isArray(datos)
      ? datos.filter((s): s is string => typeof s === 'string')
      : []
  } catch {
    // Almacenamiento bloqueado o JSON corrupto: no hay nada que rescatar.
    return
  }

  if (slugs.length === 0) {
    try {
      window.localStorage.removeItem(LLAVE_VIEJA)
    } catch {
      /* da igual */
    }
    return
  }

  await apiFetch('/guia/leidas/lote', { method: 'POST', body: { slugs } })
  try {
    window.localStorage.removeItem(LLAVE_VIEJA)
  } catch {
    /* si no se pudo borrar, el lote se reenvía y el servidor lo ignora */
  }
}

let migracionIntentada = false

function arrancar(): void {
  if (migracionIntentada) {
    void traerDelServidor()
    return
  }
  migracionIntentada = true
  void subirLoQueQuedoEnElNavegador()
    .catch(() => {
      // Que falle la subida no debe impedir leer lo que ya hay en la base.
    })
    .then(() => traerDelServidor())
}

/* ─── Lo que usan las pantallas ─── */

/**
 * Marca una sección como leída. Pinta al instante y avisa al servidor
 * después; si el servidor rechaza, se deshace.
 */
export function marcarSeccionLeida(slug: string): void {
  if (typeof window === 'undefined') return
  if (leidas.has(slug)) return

  const antes = leidas
  reemplazar([...leidas, slug])

  void apiFetch('/guia/leidas', { method: 'POST', body: { slug } }).catch(() => {
    // Se revierte sólo si nadie más cambió la copia mientras tanto: si el
    // aspirante ya marcó otra sección, revertir borraría también aquella.
    if (leidas.size === antes.size + 1) reemplazar(antes)
  })
}

/** Borra todo el avance. Se ofrece desde el hero del índice. */
export function reiniciarProgresoGuia(): void {
  if (typeof window === 'undefined') return

  const antes = leidas
  reemplazar([])

  void apiFetch('/guia/leidas', { method: 'DELETE' }).catch(() => {
    reemplazar(antes)
  })
}

/* ─── El enganche con React ─── */

function suscribir(alCambiar: () => void): () => void {
  suscriptores.add(alCambiar)
  // La primera pantalla que se asoma dispara la carga.
  arrancar()
  return () => {
    suscriptores.delete(alCambiar)
  }
}

const VACIO: ReadonlySet<string> = new Set<string>()

/**
 * Devuelve las secciones leídas.
 *
 * `cargando` es true hasta que responde la primera consulta. Las pantallas
 * lo usan para no dibujar la barra en cero un instante antes del valor real.
 *
 * Se apoya en `useSyncExternalStore`, que es la API de React para leer algo
 * que vive FUERA de React. Sirve para dos cosas de un golpe: no hace falta
 * copiar el dato a un estado dentro de un efecto, y React sabe que en el
 * servidor ese dato todavía no existe.
 */
export function useProgresoGuia(): {
  leidas: ReadonlySet<string>
  cargando: boolean
} {
  const actuales = useSyncExternalStore(
    suscribir,
    () => leidas,
    () => VACIO,
  )
  const listo = useSyncExternalStore(
    suscribir,
    () => yaSeConsulto,
    () => false,
  )

  return { leidas: actuales, cargando: !listo }
}

/**
 * Olvida lo que hay en memoria y vuelve a preguntarle al servidor. No borra
 * nada en la base. Útil si algún día hace falta refrescar tras un cambio de
 * sesión.
 */
export function recargarProgresoGuia(): void {
  yaSeConsulto = false
  void traerDelServidor()
}
