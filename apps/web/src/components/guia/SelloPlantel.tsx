'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { emblemaDePlantel } from '@/lib/planteles'
import { cn } from '@/lib/utils'
import {
  CAPA_SELLO,
  CAPA_SELLO_FIJA,
  IMG_SELLO,
  MASCARA_SELLO,
  OPACIDAD_SELLO,
} from './sello-estilos'

/**
 * Escudo del plantel del aspirante, tenue, sangrando por la derecha.
 * Es el mismo tratamiento del selector de la Fase 04 (práctica cultural
 * por materia): el emblema SIN el aro de letras.
 *
 * Va en las secciones —el contenido en sí—, que es donde el aspirante
 * pasa el rato leyendo lo suyo. El índice lleva el sello de la Rectoría
 * y la página de capítulo la marca de El Monote; ahí no cambia por
 * persona.
 *
 * Si el aspirante todavía no eligió plantel, o si la consulta falla, cae
 * al sello de la Rectoría en vez de dejar el fondo pelón.
 *
 * Client component porque el plantel sale de /auth/perfil, que depende
 * de la sesión y no se puede resolver en build.
 */

const RESPALDO = '/udefa-sello.png'

type Perfil = { plantel: { nombre: string } | null }

/**
 * Une las peticiones que salen AL MISMO TIEMPO, y nada más.
 *
 * Antes esto guardaba la respuesta para toda la sesión, para ahorrarse
 * consultas al moverse de sección en sección. Estaba mal: al cambiar de
 * plantel desde el panel de admin, la Guía seguía pintando el escudo
 * anterior hasta recargar la página a mano. El plantel SÍ cambia mientras
 * la sesión está abierta, así que hay que volver a preguntarlo.
 *
 * Lo que queda es sólo el candado de simultaneidad: si dos cosas piden el
 * perfil en el mismo instante, sale una sola petición. En cuanto responde,
 * se suelta, y la siguiente pantalla pregunta de nuevo.
 */
let enVuelo: Promise<Perfil> | null = null

function obtenerPerfil(): Promise<Perfil> {
  if (!enVuelo) {
    const peticion = apiFetch<Perfil>('/auth/perfil')
    enVuelo = peticion
    // Se suelta al terminar, bien o mal. El catch vacío es sólo para no dejar
    // un rechazo sin atender en esta rama; quien llama recibe el error por su
    // propio catch.
    peticion
      .catch(() => {})
      .finally(() => {
        if (enVuelo === peticion) enVuelo = null
      })
  }
  return enVuelo
}

export function SelloPlantel() {
  const [src, setSrc] = useState<string | null>(null)
  const [cargada, setCargada] = useState(false)

  useEffect(() => {
    let vivo = true

    obtenerPerfil()
      .then((perfil) => {
        if (!vivo) return
        const emblema = perfil.plantel
          ? emblemaDePlantel(perfil.plantel.nombre)
          : null
        setSrc(emblema ?? RESPALDO)
      })
      .catch(() => {
        if (vivo) setSrc(RESPALDO)
      })

    return () => {
      vivo = false
    }
  }, [])

  return (
    <div aria-hidden className={cn(CAPA_SELLO, CAPA_SELLO_FIJA)}>
      {src && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt=""
          aria-hidden
          /* Entra con una transición corta: el escudo llega después que
             la página, y aparecer de golpe se siente como un parpadeo. */
          className={cn(
            IMG_SELLO,
            'transition-opacity duration-700',
            cargada ? OPACIDAD_SELLO : 'opacity-0',
          )}
          style={MASCARA_SELLO}
          onLoad={() => setCargada(true)}
        />
      )}
    </div>
  )
}
