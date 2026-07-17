import 'server-only'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

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
 * Extrae los títulos h2 del markdown para construir el TOC lateral.
 * Devuelve pares { texto, slug } donde el slug coincide con el ID que
 * rehype-slug genera del mismo texto (mismo algoritmo determinístico).
 *
 * Regex intencionalmente simple — busca "## Título" al inicio de línea,
 * ignorando el blockquote inicial de "> Diagnósticos que resuelve".
 */
export function extraerTitulosH2(markdown: string): Array<{ texto: string; slug: string }> {
  const lineas = markdown.split('\n')
  const titulos: Array<{ texto: string; slug: string }> = []
  for (const linea of lineas) {
    const match = /^## (.+)$/.exec(linea)
    if (match) {
      const texto = match[1].trim()
      titulos.push({ texto, slug: generarSlugTitulo(texto) })
    }
  }
  return titulos
}

/**
 * Genera un slug tipo "estrategia-paso-a-paso" a partir de un título.
 * Debe coincidir EXACTAMENTE con el algoritmo de github-slugger (usado por
 * rehype-slug internamente) para que los anchors coincidan.
 *
 * Reglas base (subset suficiente para nuestros títulos):
 * - lowercase
 * - remover diacríticos (á → a)
 * - reemplazar espacios y guiones bajos por guión
 * - remover caracteres que no sean [a-z0-9-]
 */
export function generarSlugTitulo(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}
