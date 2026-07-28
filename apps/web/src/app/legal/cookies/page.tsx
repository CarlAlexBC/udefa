import type { Metadata } from 'next'
import {
  DocTitulo,
  DocActualizado,
  DocSeccion,
  DocParrafo,
  DocLista,
} from '@/components/legal/prose'
import { LEGAL } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Política de cookies · El Monote te Guía',
}

export default function CookiesPage() {
  return (
    <>
      <DocTitulo>Política de cookies</DocTitulo>
      <DocActualizado fecha={LEGAL.ultimaActualizacion} />

      <DocSeccion titulo="Qué son las cookies">
        <DocParrafo>
          Las cookies son pequeños archivos que un sitio guarda en tu navegador
          para que ciertas funciones trabajen. {LEGAL.nombreComercial} usa el
          mínimo indispensable.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Qué cookies usamos">
        <DocLista>
          <li>
            <span className="font-medium text-foreground">
              Cookie de sesión (necesaria):
            </span>{' '}
            se crea al iniciar sesión y sirve para mantenerte identificado
            mientras usas la plataforma. Sin ella no podrías entrar a tu cuenta.
            Es una cookie técnica y no se usa con fines publicitarios.
          </li>
        </DocLista>
        <DocParrafo>
          Hoy la plataforma no utiliza cookies de publicidad ni de seguimiento de
          terceros. Si en el futuro incorporamos herramientas de analítica o
          medición, actualizaremos esta política y, cuando corresponda, te
          pediremos tu consentimiento.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Cómo controlarlas">
        <DocParrafo>
          Puedes borrar o bloquear las cookies desde la configuración de tu
          navegador. Ten en cuenta que si bloqueas la cookie de sesión no podrás
          iniciar sesión ni usar tu cuenta.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Cambios">
        <DocParrafo>
          Publicaremos aquí cualquier cambio en el uso de cookies, con su fecha de
          actualización.
        </DocParrafo>
      </DocSeccion>
    </>
  )
}
