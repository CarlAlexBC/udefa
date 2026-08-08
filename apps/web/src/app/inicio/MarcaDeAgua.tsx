'use client'

import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'

/**
 * Marca de agua personalizada — Capa 1 del blindaje anti-copia.
 *
 * Estampa, en diagonal y en mosaico sobre TODA la pantalla, el nombre, el correo
 * y el ID de cuenta del usuario que tiene la sesión abierta. No pretende impedir
 * la copia (eso es el "hueco analógico": si un ojo lo ve, una cámara lo copia).
 * Su trabajo es otro y más modesto:
 *
 *   1. Frenar la captura casual (screenshot, grabar pantalla, foto con el móvil):
 *      la marca queda estampada en la imagen y no se puede borrar de una foto.
 *   2. Volver la copia RASTREABLE: si el material aparece en otro lado con estos
 *      datos encima, señala al comprador que lo filtró → base para la vía legal.
 *
 * Lo que este MVP NO hace (y se dijo honesto): no vence a alguien con
 * conocimientos que, en SU propio navegador, borre este overlay desde las
 * herramientas de desarrollador. Endurecer eso (un "vigilante" que lo reinyecte,
 * y renderizarlo desde el servidor) es una segunda vuelta, no este MVP.
 *
 * Vive en el layout de /inicio, así que cae sobre todas las pantallas privadas
 * —simulador, panel de resultados, práctica, repaso, guía— de un solo golpe.
 *
 * Es SÓLO para usuarios (rol "aspirante"). Al admin no se le estampa nada, en
 * ninguna pantalla: es personal de confianza, no un comprador a rastrear.
 */

/* ── Perillas para afinar el aspecto (las ajustamos en vivo en el navegador) ──
   OPACIDAD: qué tan tenue. 0.06 se lee todo y casi no estorba; súbela para que
   se note más. FONT_PX y ROTACION_DEG cambian el tamaño y la inclinación.
   FILAS y REPETICIONES sólo aseguran que el mosaico cubra pantallas grandes;
   si vieras huecos en un monitor enorme, súbelas. */
const OPACIDAD = 0.06
const FONT_PX = 13
const ROTACION_DEG = -24
const FILAS = 100
const REPETICIONES = 13

/** Lo que necesitamos del perfil: los tres datos a estampar + el rol para saber
 *  si es admin (a quien NO se le pinta marca). */
type PerfilMarca = {
  id: number
  nombre: string
  email: string
  rol: string
}

export function MarcaDeAgua() {
  const [perfil, setPerfil] = useState<PerfilMarca | null>(null)

  // Pedimos el perfil al backend en vez de leer la cookie: la cookie de sesión
  // es httpOnly (el JavaScript no la puede leer), pero el backend sí sabe quién
  // eres por ella. Es la misma llamada que ya usa el tablero para saludarte.
  // El layout no se desmonta al navegar entre pantallas de /inicio, así que esto
  // corre una sola vez por sesión, no en cada página.
  useEffect(() => {
    apiFetch<PerfilMarca>('/auth/perfil')
      .then(setPerfil)
      .catch(() => {
        // Si falla (backend caído, sesión expirada), no pintamos marca. El
        // contenido se ve sin ella: preferimos no bloquearte por un tropiezo de
        // red. Endurecer esto (marca obligatoria) va en la segunda vuelta.
      })
  }, [])

  // Todavía sin datos → no pintamos nada. Dura lo que tarda la llamada.
  if (!perfil) return null

  // La marca es sólo para usuarios. Al admin no se le estampa nada, en ninguna
  // pantalla. Los únicos roles son "aspirante" y "admin" (prisma/schema.prisma),
  // así que basta con saltarnos al admin; cualquier otro rol futuro llevaría marca.
  if (perfil.rol === 'admin') return null

  // El texto de cada baldosa: nombre · correo · ID de cuenta.
  const etiqueta = `${perfil.nombre} · ${perfil.email} · ID ${perfil.id}`
  // Una fila es la etiqueta repetida varias veces, separada por espacios anchos,
  // para que el renglón cruce toda la pantalla sin cortarse.
  const fila = Array(REPETICIONES).fill(etiqueta).join('   ')

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        // Deja pasar clics y tecleo: sólo se ve, no se toca.
        pointerEvents: 'none',
        // No se puede seleccionar/copiar el texto de la marca.
        userSelect: 'none',
        overflow: 'hidden',
        // Usa el color de texto del tema → tinta en claro, crema en oscuro.
        color: 'var(--foreground)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          // Bloque sobredimensionado para que, al girarlo, no se vean los bordes.
          width: '200vmax',
          height: '200vmax',
          transform: `translate(-50%, -50%) rotate(${ROTACION_DEG}deg)`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2.5rem',
          opacity: OPACIDAD,
        }}
      >
        {Array.from({ length: FILAS }).map((_, i) => (
          <span
            key={i}
            style={{
              whiteSpace: 'nowrap',
              textAlign: 'center',
              fontSize: `${FONT_PX}px`,
              fontWeight: 600,
              letterSpacing: '0.18em',
              lineHeight: 1,
            }}
          >
            {fila}
          </span>
        ))}
      </div>
    </div>
  )
}
