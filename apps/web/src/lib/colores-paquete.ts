/**
 * Colores de los paquetes — fuente única para /precios, /muestra y /comprar.
 *
 * POR QUÉ HAY DOS TABLAS Y NO UNA
 *
 * Estos colores viven fuera de los tokens del sistema (globals.css) porque no
 * son roles de interfaz, son identidad de producto: cada paquete tiene el suyo
 * y el aspirante lo sigue de la página de precios hasta la de pago.
 *
 * Pero las pantallas donde aparecen NO comparten fondo: /precios y /muestra
 * son claras (crema), y /comprar es oscura (carbón). Un solo valor no puede
 * servir a los dos. Con la tabla anterior, que sí era una sola, pasaba esto:
 *
 *                        sobre crema     sobre carbón
 *     azul   #2563A8        5.53:1          2.98:1   ← reprobaba en /comprar
 *     morado #6B46C1        5.80:1          2.84:1   ← reprobaba en /comprar
 *     latón  #C99A3B        2.32:1          7.10:1   ← reprobaba en /precios
 *
 * El mínimo legible para texto grande es 3:1. Tres de los cuatro colores
 * estaban por debajo en alguna de las dos pantallas — el mismo error, en
 * direcciones contrarias.
 *
 * Ahora cada familia guarda su tono profundo (para fondo claro) y su tinte
 * claro (para fondo oscuro). Los ocho valores pasan holgados.
 *
 * SI AGREGAS UN PAQUETE: dale sus dos tonos, y comprueba el contraste contra
 * #F7F3EA y contra #161513 antes de darlo por bueno. No lo estimes a ojo — un
 * color puede verse bien y estar por debajo del piso para quien tiene poca
 * vista o trae el sol en la pantalla del teléfono.
 */

export type TonoPaquete = {
  /** El color en sí: sirve como texto, como borde y como fondo. */
  c: string
  /** Qué color de letra va ENCIMA cuando `c` se usa de fondo. */
  on: string
}

export type FamiliaColor = 'verde' | 'azul' | 'morado' | 'dorado' | 'rojo'

/**
 * Para pantallas de fondo CLARO (/precios, /muestra).
 * Tonos profundos; encima de ellos va letra blanca.
 * Contrastes sobre crema #F7F3EA: verde 5.64 · azul 7.82 · morado 7.81 ·
 * dorado 4.83 · rojo 6.42. Con letra blanca encima: de 5.35 a 8.66.
 */
export const COLOR_PAQUETE_CLARO: Record<FamiliaColor, TonoPaquete> = {
  verde: { c: '#3B6B3F', on: '#FFFFFF' },
  azul: { c: '#1F4E79', on: '#FFFFFF' },
  morado: { c: '#5B3A8C', on: '#FFFFFF' },
  dorado: { c: '#8A6420', on: '#FFFFFF' },
  rojo: { c: '#A62828', on: '#FFFFFF' },
}

/**
 * Para pantallas de fondo OSCURO (/comprar).
 * Tintes claros de las mismas familias; encima de ellos va letra oscura.
 * Contrastes sobre carbón #161513: verde 8.60 · azul 7.17 · morado 6.84 ·
 * dorado 7.10 · rojo 6.83. Con letra oscura encima: de 6.73 a 8.44.
 */
export const COLOR_PAQUETE_OSCURO: Record<FamiliaColor, TonoPaquete> = {
  verde: { c: '#8FBF7A', on: '#0F1A0C' },
  azul: { c: '#6FA8D6', on: '#0D1620' },
  morado: { c: '#A794D8', on: '#17102A' },
  dorado: { c: '#C99A3B', on: '#161513' },
  rojo: { c: '#E08585', on: '#2A0E0E' },
}
