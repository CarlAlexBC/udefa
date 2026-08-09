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
  title: 'Política de privacidad · El Monote te Guía',
}

export default function PrivacidadPage() {
  return (
    <>
      <DocTitulo>Política de privacidad</DocTitulo>
      <DocActualizado fecha={LEGAL.ultimaActualizacion} />

      <DocSeccion titulo="Responsable de tus datos">
        <DocParrafo>
          El responsable del tratamiento de tus datos personales es{' '}
          <DatoLegal valor={LEGAL.titular} />, titular de{' '}
          {LEGAL.nombreComercial}. Contacto para privacidad:{' '}
          <DatoLegal valor={LEGAL.correoContacto} />. Esta política se rige por la
          Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares (LFPDPPP) de México.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Qué datos recabamos">
        <DocLista>
          <li>
            <span className="font-medium text-foreground">De registro:</span>{' '}
            nombre, correo electrónico, contraseña (guardada cifrada) y el
            plantel que eliges.
          </li>
          <li>
            <span className="font-medium text-foreground">De uso:</span> tus
            intentos de examen, respuestas, tiempos y resultados, para generar tu
            panel de diagnóstico y tu repaso.
          </li>
          <li>
            <span className="font-medium text-foreground">De seguridad:</span>{' '}
            qué sesiones tienes abiertas y en cuántos dispositivos, y cuántos
            reactivos consultas y con qué frecuencia. Sirven para detectar usos
            abusivos o automatizados.
          </li>
          <li>
            <span className="font-medium text-foreground">De pago:</span> cuando
            compres acceso, el cobro lo procesa{' '}
            <DatoLegal valor={LEGAL.proveedorPagos} />. No almacenamos
            los datos completos de tu tarjeta en nuestros servidores.
          </li>
          <li>
            <span className="font-medium text-foreground">Técnicos:</span> una
            cookie de sesión necesaria para mantenerte identificado (ver la{' '}
            <a className="text-accent hover:underline" href="/legal/cookies">
              Política de cookies
            </a>
            ).
          </li>
        </DocLista>
      </DocSeccion>

      <DocSeccion titulo="Para qué los usamos">
        <DocLista>
          <li>Crear y administrar tu cuenta y tu acceso a los módulos.</li>
          <li>
            Generar tus resultados, diagnósticos y recomendaciones de estudio.
          </li>
          <li>Procesar pagos y dar soporte.</li>
          <li>
            Proteger la plataforma y el material de estudio: detectar usos
            abusivos o automatizados y desalentar la copia no autorizada.
          </li>
        </DocLista>
      </DocSeccion>

      <DocSeccion titulo="Marca de identificación y prevención de copia">
        <DocParrafo>
          Mientras estudias, las pantallas muestran de forma tenue tu nombre, tu
          correo y tu número de cuenta. No es un error: es una marca de
          identificación que desalienta la copia del material y permite rastrear
          el origen de una filtración. Aparece sólo en tu sesión y nadie más la
          ve.
        </DocParrafo>
        <DocParrafo>
          Por la misma razón llevamos un registro de cuántos reactivos consultas,
          con qué frecuencia y desde cuántos dispositivos abres sesión. Esos
          datos se usan únicamente para detectar usos abusivos o automatizados:{' '}
          <span className="font-medium text-foreground">
            no influyen en tus resultados ni forman parte de tu diagnóstico
          </span>
          .
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Datos sensibles y resultados psicológicos">
        <DocParrafo>
          Los resultados de los módulos psicológicos son privados y se usan
          únicamente para mostrarte tu propio panel de diagnóstico dentro de la
          plataforma. No se comparten con instituciones militares, con
          reclutamiento ni con terceros, y no se usan para ningún proceso de
          evaluación oficial.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Con quién se comparten">
        <DocParrafo>
          No vendemos tus datos. Sólo los comparten los proveedores necesarios
          para operar el servicio (por ejemplo, el proveedor de alojamiento de la
          base de datos y el procesador de pagos), que los tratan bajo sus
          propias obligaciones de confidencialidad, o cuando la ley lo exija.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Tus derechos (ARCO)">
        <DocParrafo>
          Puedes solicitar en cualquier momento el Acceso, Rectificación,
          Cancelación u Oposición al tratamiento de tus datos, así como revocar
          tu consentimiento, escribiendo a{' '}
          <DatoLegal valor={LEGAL.correoContacto} />. Atenderemos tu solicitud en
          los plazos que marca la ley.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Conservación y seguridad">
        <DocParrafo>
          Conservamos tus datos mientras tu cuenta esté activa o sea necesario
          para prestarte el servicio. Aplicamos medidas de seguridad razonables
          (contraseñas cifradas, control de acceso y transporte protegido) para
          resguardar tu información.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Menores de edad">
        <DocParrafo>
          Si eres menor de edad, debes contar con el consentimiento de tu padre,
          madre o tutor para registrarte y proporcionar tus datos.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Cambios a esta política">
        <DocParrafo>
          Podemos actualizar esta política. Publicaremos la versión vigente con
          su fecha de actualización.
        </DocParrafo>
      </DocSeccion>
    </>
  )
}
