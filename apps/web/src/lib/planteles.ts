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
 * Devuelve la ruta del logo oficial del plantel dado su nombre.
 * Si no hay logo para ese nombre, devuelve null (el componente que lo
 * consume debe caer en un placeholder visual).
 */
export function logoDePlantel(nombre: string): string | null {
  return LOGOS_POR_NOMBRE[nombre] ?? null
}
