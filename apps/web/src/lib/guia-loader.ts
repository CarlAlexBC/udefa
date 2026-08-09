import 'server-only'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import GithubSlugger from 'github-slugger'

/**
 * Directorio de las secciones .md fuente de la Guía del Aspirante.
 * Vive fuera de apps/web (a nivel del monorepo) para mantenerlas como source
 * of truth independiente de la app.
 *
 * process.cwd() en Next 16 apunta al directorio del proyecto (apps/web/),
 * así que subimos dos niveles para llegar al root del monorepo.
 */
const GUIA_DIR = path.resolve(process.cwd(), '..', '..', 'docs', 'guia-aspirante')

/**
 * Lee el contenido markdown de una sección por su slug.
 * Devuelve el markdown crudo — el renderizado se hace en el componente.
 * Lanza si el archivo no existe (el caller debe manejar 404).
 */
export async function cargarMarkdownDeSeccion(slug: string): Promise<string> {
  const filePath = path.join(GUIA_DIR, `${slug}.md`)
  return readFile(filePath, 'utf-8')
}

/**
 * Extrae los títulos h2 del markdown para construir el índice lateral.
 *
 * El `slug` TIENE que ser idéntico al id que rehype-slug le pone al
 * encabezado en la página; si no, el renglón del índice apunta a un
 * elemento que no existe: no salta al hacer clic y nunca se resalta.
 *
 * Aquí hubo un intento de reimplementar el algoritmo a mano y se despegaba
 * en dos puntos: quitaba los acentos (rehype-slug los CONSERVA — el id real
 * es `qué-señales-busca-el-sistema`) y colapsaba los guiones repetidos que
 * deja una raya larga entre palabras. En una sección de 8 subtítulos, 5
 * quedaban rotos. Por eso ahora usamos github-slugger, que es literalmente
 * la librería que rehype-slug trae por dentro: si el algoritmo cambia, los
 * dos cambian juntos.
 */
export function extraerTitulosH2(markdown: string): Array<{ texto: string; slug: string }> {
  // Un slugger nuevo por archivo, igual que rehype-slug: lleva la cuenta de
  // los repetidos para desempatarlos (título, título-1, título-2).
  const slugger = new GithubSlugger()
  const titulos: Array<{ texto: string; slug: string }> = []

  let dentroDeUnBloqueDeCodigo = false

  for (const linea of markdown.split('\n')) {
    // Un "# comentario" dentro de un bloque de código no es un encabezado.
    if (/^\s*```/.test(linea)) {
      dentroDeUnBloqueDeCodigo = !dentroDeUnBloqueDeCodigo
      continue
    }
    if (dentroDeUnBloqueDeCodigo) continue

    const match = /^(#{1,6}) +(.+?)\s*#*\s*$/.exec(linea)
    if (!match) continue

    const texto = match[2].trim()

    // Se pasan TODOS los niveles por el slugger, no sólo los h2: rehype-slug
    // recorre los encabezados en orden y el desempate de repetidos depende de
    // haberlos visto todos. Del resultado sólo devolvemos los h2.
    const slug = slugger.slug(texto)
    if (match[1].length === 2) titulos.push({ texto, slug })
  }

  return titulos
}
