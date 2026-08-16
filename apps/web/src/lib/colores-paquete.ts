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
/**
 * QUÉ COLOR LE TOCA A CADA MÓDULO. Este es el mapa semántico, y el único
 * lugar donde se decide.
 *
 * Antes esta correspondencia estaba repetida en /precios, /muestra, /comprar
 * y el tablero, así que cambiar de opinión sobre un color obligaba a editar
 * cuatro archivos y era fácil dejar uno atrás. Aquí se cambia una vez.
 *
 * Lo que el color significa para el aspirante: el que compró viendo rojo su
 * paquete Psicológico ve rojo también en sus fases y en su Guía. El color le
 * dice de qué examen es cada cosa, sin tener que leer la etiqueta.
 */
export const COLOR_DE_MODULO = {
  gratis: 'verde',
  cultural: 'azul',
  psicologico: 'rojo',
  completa: 'dorado',
} as const satisfies Record<string, FamiliaColor>

export const COLOR_PAQUETE_OSCURO: Record<FamiliaColor, TonoPaquete> = {
  verde: { c: '#8FBF7A', on: '#0F1A0C' },
  azul: { c: '#6FA8D6', on: '#0D1620' },
  morado: { c: '#A794D8', on: '#17102A' },
  dorado: { c: '#C99A3B', on: '#161513' },
  rojo: { c: '#E08585', on: '#2A0E0E' },
}

/**
 * ACABADO CLARO POR MÓDULO — la "hoja de plata" al derecho.
 *
 * El tablero (fondo carbón) viste sus tarjetas con `ACABADO_MODULO`: grafito
 * con un baño del color y un resplandor. Sobre crema eso no se puede copiar —
 * un resplandor necesita oscuridad para leerse—, así que aquí el mismo efecto
 * se logra al revés:
 *
 *   · una base de PLATA fría, no blanca, para que la tarjeta tenga cuerpo;
 *   · el color del módulo FUNDIDO en diagonal, que crece hacia la esquina;
 *   · una VETA clara cruzando, la misma idea que la hoja de plata del tablero;
 *   · un borde encendido y un halo apretado del color — ese es el "neón" que
 *     sí funciona en claro: no brilla, pero recorta la tarjeta del fondo.
 *
 * Los textos y detalles van en el tono PROFUNDO (`COLOR_PAQUETE_CLARO`), que
 * es el que se lee sobre fondo claro.
 */
export type AcabadoClaro = {
  /** Para `backgroundImage`: veta encima, fusión del módulo debajo. */
  fondo: string
  /** Para `borderColor`. */
  borde: string
  /** Para `boxShadow`: el halo teñido. */
  sombra: string
  /** Para textos, chip del icono y enlaces. */
  acento: string
}

export function acabadoClaroDeModulo(
  modulo: keyof typeof COLOR_DE_MODULO,
): AcabadoClaro {
  const c = COLOR_PAQUETE_CLARO[COLOR_DE_MODULO[modulo]].c
  return {
    fondo: [
      // La veta: una franja clara que cruza en diagonal.
      'linear-gradient(118deg, transparent 24%, rgba(255,255,255,0.92) 43%, rgba(255,255,255,0.38) 54%, transparent 72%)',
      // La fusión: plata que se tiñe del módulo hacia la esquina.
      `linear-gradient(118deg, #F3F2ED 0%, ${c}14 38%, ${c}24 72%, #EEEDE8 100%)`,
    ].join(', '),
    borde: `${c}B3`,
    // Halo apretado + una sombra baja para que la tarjeta se despegue del crema.
    sombra: `0 0 12px -2px ${c}73, 0 0 0 3px ${c}1A, 0 8px 20px -12px ${c}80`,
    acento: c,
  }
}

/**
 * La misma hoja de plata, pero SIN teñir de ningún módulo.
 *
 * Para superficies claras donde el color tiene que quedar libre para otra cosa.
 * El caso que la pidió: la muestra del landing ("Prueba el examen") es un mini
 * examen que corrige al momento —olivo si acertaste, rojo si no—, y sus cinco
 * reactivos son del psicológico, que también es rojo. Un marco teñido de rojo
 * le robaba fuerza justo al rojo del error, que es lo único que esa sección
 * tiene que dejar claro. Aquí el marco se calla y deja hablar a la corrección.
 */
export const HOJA_DE_PLATA_CLARA = {
  fondo: [
    'linear-gradient(118deg, transparent 24%, rgba(255,255,255,0.9) 43%, rgba(255,255,255,0.35) 54%, transparent 72%)',
    'linear-gradient(118deg, #F4F3EE 0%, #EDECE7 46%, #F7F6F2 68%, #EAE9E3 100%)',
  ].join(', '),
  borde: '#DDD9CF',
  sombra: '0 10px 24px -16px rgba(60,52,40,0.5), 0 0 0 1px rgba(22,21,19,0.02)',
} as const

/**
 * El latón de la marca, en el tono que SÍ se lee sobre crema.
 *
 * El latón de marca `#C99A3B` da **2.32:1** sobre `#F7F3EA` — reprueba el piso
 * de 3:1 que documenta este mismo archivo. En pantallas claras (la hoja de
 * examen) va este tono profundo; el `#C99A3B` se queda para fondo oscuro.
 */
export const LATON_SOBRE_CLARO = '#8A6420'

/**
 * A qué módulo pertenece cada TIPO de examen.
 *
 * Es el espejo de `MODULO_POR_TIPO` de `AccesoService` en el backend: allá
 * decide quién tiene acceso, aquí decide de qué color se pinta. Si algún día
 * nace un tipo de examen nuevo, hay que darlo de alta en los dos lados.
 */
const MODULO_POR_TIPO: Record<string, keyof typeof COLOR_DE_MODULO> = {
  cultural: 'cultural',
  psicometrico: 'psicologico',
  personalidad: 'psicologico',
  axiologico: 'psicologico',
}

/**
 * El color que le toca a un examen según su tipo, listo para pintar.
 *
 * Con esto la hoja de examen dice de qué examen es sin que el aspirante lea la
 * etiqueta: azul si es Cultural, rojo si es Psicológico. Un tipo desconocido
 * cae en el latón de la marca, que nunca desentona.
 */
export function colorDeExamen(
  tipo: string | undefined,
  fondo: 'claro' | 'oscuro' = 'claro',
): TonoPaquete {
  const modulo = tipo ? MODULO_POR_TIPO[tipo] : undefined
  const familia: FamiliaColor = modulo ? COLOR_DE_MODULO[modulo] : 'dorado'
  return (fondo === 'claro' ? COLOR_PAQUETE_CLARO : COLOR_PAQUETE_OSCURO)[familia]
}
