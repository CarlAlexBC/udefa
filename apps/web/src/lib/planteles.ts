/**
 * Helpers para trabajar con los planteles militares.
 *
 * Los logos oficiales viven en apps/web/public/planteles/ y se mapean
 * por nombre exacto del plantel (tal como está en la BD).
 */

const LOGOS_POR_NOMBRE: Record<string, string> = {
  'Heroico Colegio Militar': '/planteles/HCM.png',
  'Escuela Militar de Medicina': '/planteles/EMM.png',
  'Escuela Militar de Ingeniería': '/planteles/EMI.png',
  'Escuela Militar de Odontología': '/planteles/EMO.png',
  'Escuela Militar de Enfermería': '/planteles/EME.png',
  'Escuela Militar de Transmisiones': '/planteles/EMT.png',
  'Escuela Militar de Oficiales de Sanidad': '/planteles/EMOS.png',
  'Escuela Militar de Materiales de Guerra': '/planteles/EMMG.png',
  'Escuela Militar de Aviación': '/planteles/CA.png',
  'Escuela Militar de Mantenimiento y Abastecimiento': '/planteles/EMMA.png',
  'Escuela Militar de Especialistas de Fuerza Aérea': '/planteles/EMEFA.png',
}

/**
 * Busca la ruta y avisa cuando un plantel se queda sin escudo.
 *
 * El mapa se cruza por nombre EXACTO contra `Plantel.nombre` de la base, así
 * que basta un acento o un espacio de más para que un plantel entero pierda su
 * escudo — y como todos los consumidores caen a un respaldo visual, nadie se
 * entera. El aviso sólo habla en desarrollo: en producción no le sirve de nada
 * al aspirante, pero al agregar un plantel nuevo salta en la consola.
 */
function rutaDeLogo(nombre: string): string | null {
  const logo = LOGOS_POR_NOMBRE[nombre]
  if (!logo && process.env.NODE_ENV !== 'production') {
    console.warn(
      `[planteles] No hay escudo para "${nombre}". ` +
        'Agrégalo a LOGOS_POR_NOMBRE en apps/web/src/lib/planteles.ts, ' +
        'con el nombre EXACTO como está en la base, y sube el archivo a ' +
        'public/planteles/ y public/planteles/emblema/.',
    )
  }
  return logo ?? null
}

/**
 * Devuelve la ruta del logo oficial del plantel dado su nombre.
 * Si no hay logo para ese nombre, devuelve null (el componente que lo
 * consume debe caer en un placeholder visual).
 */
export function logoDePlantel(nombre: string): string | null {
  return rutaDeLogo(nombre)
}

/**
 * Igual que logoDePlantel pero devuelve el **emblema sin letras**: el sello
 * recortado a su medallón central, sin el aro de texto con el nombre del
 * plantel. Viven en apps/web/public/planteles/emblema/ y se generan a partir
 * de los sellos oficiales. Úsalo cuando el escudo va de adorno (marca de agua
 * de fondo, insignia chica) y el nombre estorba; para identificar el plantel
 * con su nombre legible, usa logoDePlantel.
 */
export function emblemaDePlantel(nombre: string): string | null {
  const logo = rutaDeLogo(nombre)
  return logo ? logo.replace('/planteles/', '/planteles/emblema/') : null
}
