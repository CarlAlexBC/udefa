import type { Metadata } from 'next'
import {
  DocTitulo,
  DocActualizado,
  DocSeccion,
  DocParrafo,
  DocLista,
  DatoLegal,
} from '@/components/legal/prose'
import { LEGAL } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Aviso legal · El Monote te Guía',
}

export default function AvisoLegalPage() {
  return (
    <>
      <DocTitulo>Aviso legal</DocTitulo>
      <DocActualizado fecha={LEGAL.ultimaActualizacion} />

      <DocSeccion titulo="Identidad del responsable">
        <DocParrafo>
          Este sitio web y la plataforma {LEGAL.nombreComercial} (en adelante, «la
          plataforma») son operados por <DatoLegal valor={LEGAL.titular} />, como
          proyecto independiente.
        </DocParrafo>
        <DocParrafo>
          Para cualquier consulta relacionada con este aviso legal puedes
          escribir a: <DatoLegal valor={LEGAL.correoContacto} />.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Objeto de la plataforma">
        <DocParrafo>
          {LEGAL.nombreComercial} es un proyecto independiente que ofrece
          material de práctica y preparación para aspirantes a procesos de
          admisión de escuelas militares en México, mediante simuladores,
          reactivos y una guía de estudio.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Carácter independiente">
        <DocParrafo>
          {LEGAL.nombreComercial} es un proyecto independiente y no está afiliado,
          autorizado, patrocinado ni respaldado por la Secretaría de la Defensa
          Nacional (DEFENSA), la Universidad del Ejército y Fuerza Aérea
          (U.D.E.F.A.) ni por ninguna institución militar o dependencia del
          Gobierno de México. El detalle está en el{' '}
          <a className="text-accent hover:underline" href="/legal/descargo">
            Descargo de responsabilidad
          </a>
          .
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Propiedad intelectual">
        <DocParrafo>
          Los contenidos originales de la plataforma —textos, reactivos,
          explicaciones, diseño y código— son propiedad de su titular y están
          protegidos por la legislación aplicable. Se permite su uso personal
          para la preparación del aspirante; queda prohibida su reproducción,
          distribución o explotación comercial sin autorización.
        </DocParrafo>
        <DocParrafo>
          Los nombres y denominaciones de instituciones se emplean únicamente con
          fines informativos e identificativos y pertenecen a sus respectivos
          titulares.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Limitación de responsabilidad">
        <DocLista>
          <li>
            La plataforma no garantiza la admisión ni ningún resultado en los
            procesos oficiales.
          </li>
          <li>
            El material es de apoyo y no sustituye la información oficial de las
            autoridades competentes.
          </li>
          <li>
            El titular no se hace responsable de decisiones tomadas con base
            exclusiva en el contenido de la plataforma, ni de interrupciones del
            servicio ajenas a su control razonable.
          </li>
        </DocLista>
      </DocSeccion>

      <DocSeccion titulo="Legislación aplicable">
        <DocParrafo>
          Este aviso legal se rige por la legislación mexicana. Para su
          interpretación aplican los términos descritos en los{' '}
          <a className="text-accent hover:underline" href="/legal/terminos">
            Términos y condiciones
          </a>
          .
        </DocParrafo>
      </DocSeccion>
    </>
  )
}
