import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

/**
 * Renderiza el markdown de una sección de la Guía con estilo consistente con
 * el sistema de diseño (paleta carbón/crema/latón/oliva militar, Manrope).
 *
 * Deliberadamente NO usa @tailwindcss/typography (`prose`) para mantener
 * control total sobre la tipografía. Cada elemento HTML tiene componentes
 * custom con las clases exactas del sistema.
 *
 * Server component — se renderiza en el servidor y llega ya como HTML al
 * cliente. No requiere 'use client'.
 */
export function MarkdownRenderer({ markdown }: { markdown: string }) {
  return (
    <div className="font-sans text-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'append',
              properties: {
                className: 'anchor-link',
                ariaLabel: 'Enlace a esta sección',
              },
            },
          ],
        ]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-2 mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {children}
            </h1>
          ),
          h2: ({ id, children }) => (
            <h2
              id={id}
              className="mt-10 mb-4 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
            >
              {children}
            </h2>
          ),
          h3: ({ id, children }) => (
            <h3
              id={id}
              className="mt-8 mb-3 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
            >
              {children}
            </h3>
          ),
          h4: ({ id, children }) => (
            <h4
              id={id}
              className="mt-6 mb-2 scroll-mt-24 text-lg font-semibold tracking-tight text-foreground"
            >
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="my-4 text-base leading-relaxed text-foreground md:text-lg">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="my-4 ml-6 list-disc space-y-2 text-base leading-relaxed text-foreground md:text-lg">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 ml-6 list-decimal space-y-2 text-base leading-relaxed text-foreground md:text-lg">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
          em: ({ children }) => <em className="italic text-foreground">{children}</em>,
          hr: () => <hr className="my-10 border-t border-border" />,
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="my-4 overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-sm text-foreground">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="border-b border-border bg-muted">{children}</thead>,
          th: ({ children }) => (
            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-t border-border px-4 py-2 text-sm text-foreground">{children}</td>
          ),
          blockquote: ({ children }) => (
            <BlockquoteDiagnosticos>{children}</BlockquoteDiagnosticos>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

/**
 * Blockquote con estilo especial para el bloque "Diagnósticos que esta
 * sección resuelve" que aparece al inicio de cada archivo .md.
 *
 * También sirve para cualquier otro blockquote general en la Guía — el estilo
 * funciona bien para citas destacadas.
 */
function BlockquoteDiagnosticos({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className={cn(
        'my-6 flex items-start gap-3 rounded-lg border-l-4 border-l-accent bg-accent/5 px-4 py-3',
      )}
    >
      <Sparkles className="mt-1 h-4 w-4 shrink-0 text-accent" />
      <div className="text-sm italic leading-relaxed text-muted-foreground [&>p]:my-1 [&>p]:text-sm [&>p]:italic">
        {children}
      </div>
    </blockquote>
  )
}
