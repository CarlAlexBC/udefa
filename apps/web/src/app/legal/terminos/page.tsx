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
  title: 'Términos y condiciones · El Monote te Guía',
}

export default function TerminosPage() {
  return (
    <>
      <DocTitulo>Términos y condiciones de uso</DocTitulo>
      <DocActualizado fecha={LEGAL.ultimaActualizacion} />

      <DocSeccion titulo="1. Aceptación">
        <DocParrafo>
          Al registrarte o usar {LEGAL.nombreComercial} (en adelante, «la
          plataforma») aceptas estos Términos y condiciones, el{' '}
          <a className="text-accent hover:underline" href="/legal/descargo">
            Descargo de responsabilidad
          </a>{' '}
          y la{' '}
          <a className="text-accent hover:underline" href="/legal/privacidad">
            Política de privacidad
          </a>
          . Si no estás de acuerdo, no uses la plataforma.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="2. Qué ofrece la plataforma">
        <DocParrafo>
          La plataforma ofrece material de práctica y preparación (simuladores,
          reactivos, guía de estudio y un panel de resultados) para aspirantes a
          procesos de admisión de escuelas militares en México. El material es de
          apoyo educativo y no garantiza la admisión ni sustituye la información
          oficial de las autoridades competentes.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="3. Cuenta de usuario">
        <DocLista>
          <li>
            Debes proporcionar datos veraces al registrarte y mantener tu
            contraseña en secreto.
          </li>
          <li>
            Eres responsable de la actividad realizada desde tu cuenta. Avísanos
            si detectas un uso no autorizado.
          </li>
          <li>
            El acceso es personal e intransferible. Por razones de seguridad, el
            número de dispositivos con sesión activa puede estar limitado.
          </li>
        </DocLista>
      </DocSeccion>

      <DocSeccion titulo="4. Uso permitido">
        <DocParrafo>
          Te comprometes a usar la plataforma de forma lícita y personal. Queda
          prohibido:
        </DocParrafo>
        <DocLista>
          <li>
            Copiar, distribuir, revender o publicar los reactivos y contenidos de
            la plataforma.
          </li>
          <li>
            Intentar vulnerar la seguridad, extraer datos de forma automatizada o
            interferir con el servicio.
          </li>
          <li>Compartir tu cuenta con terceros.</li>
        </DocLista>
      </DocSeccion>

      <DocSeccion titulo="5. Pagos, planes y acceso">
        <DocParrafo>
          Algunos contenidos requieren pago. Los módulos de pago se adquieren
          mediante un pago único y el acceso permanece activo hasta el cierre de
          la convocatoria vigente al momento de la compra; no son una suscripción
          con renovación automática. Su modalidad y alcance se indican al momento
          de la compra. El cobro se procesa a través de{' '}
          <DatoLegal valor={LEGAL.proveedorPagos} />.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="6. Propiedad intelectual">
        <DocParrafo>
          Los contenidos originales de la plataforma pertenecen a su titular y
          están protegidos por la ley. La compra otorga una licencia de uso
          personal, no la propiedad del contenido.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="7. Limitación de responsabilidad">
        <DocParrafo>
          La plataforma se ofrece «tal cual». En la medida que permita la ley, el
          titular no será responsable de la admisión o no admisión del aspirante,
          ni de daños derivados del uso o de interrupciones del servicio ajenas a
          su control razonable.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="8. Suspensión de cuentas">
        <DocParrafo>
          Podemos suspender o cancelar el acceso de cuentas que incumplan estos
          Términos, sin perjuicio de las acciones legales que correspondan.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="9. Cambios en los términos">
        <DocParrafo>
          Podemos actualizar estos Términos. Publicaremos la versión vigente con
          su fecha de actualización. El uso posterior de la plataforma implica la
          aceptación de los cambios.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="10. Ley aplicable y jurisdicción">
        <DocParrafo>
          Estos Términos se rigen por la legislación mexicana. Para cualquier
          controversia, las partes se someten a los tribunales competentes de{' '}
          <DatoLegal valor={LEGAL.jurisdiccion} />, salvo los derechos que la ley
          reconozca al consumidor.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="11. Contacto">
        <DocParrafo>
          Para dudas sobre estos Términos escribe a:{' '}
          <DatoLegal valor={LEGAL.correoContacto} />.
        </DocParrafo>
      </DocSeccion>
    </>
  )
}
