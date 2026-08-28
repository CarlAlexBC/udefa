/**
 * Bancos de reactivos "de libro" (Reactivo cuelga de Tema → Capítulo → Libro),
 * a diferencia de los bancos de personalidad (v1/v3/remaster), que cuelgan de
 * Bloque y usan un motor de examen totalmente distinto.
 *
 * El cultural (planteles civiles) y el de tropa (cursos de ascenso) comparten
 * el mismo árbol y el mismo motor de examen/práctica/progreso — sólo cambia de
 * qué libro sale cada reactivo. Cuando se dé de alta un banco de libro nuevo,
 * agregarlo aquí es lo único que hace falta para que se sirva en examen,
 * práctica, avance y el panel admin.
 */
export const BANCOS_LIBRO: string[] = ['cultural', 'tropa'];
