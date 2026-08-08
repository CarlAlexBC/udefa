import { MarcaDeAgua } from './MarcaDeAgua'

/**
 * Envoltura común de todas las pantallas privadas (bajo /inicio).
 *
 * Antes no existía este archivo, por eso cada pantalla metía su cabecera a mano.
 * Al crearlo, la marca de agua personalizada (Capa 1 del blindaje anti-copia)
 * cae de un solo golpe sobre el simulador, el panel de resultados, la práctica
 * cultural, el repaso, la guía y el tablero — y sobre cualquier pantalla privada
 * que agreguemos después, sin tener que acordarnos de ponérsela.
 *
 * Es un componente de servidor (no lleva 'use client'): sólo dibuja el contenido
 * y le monta encima <MarcaDeAgua>, que sí es de cliente porque necesita pedir el
 * perfil del usuario. El middleware ya garantiza que aquí siempre hay sesión.
 */
export default function InicioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <MarcaDeAgua />
    </>
  )
}
