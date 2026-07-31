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
  title: 'Política de reembolsos · El Monote te Guía',
}

export default function ReembolsosPage() {
  return (
    <>
      <DocTitulo>Política de reembolsos</DocTitulo>
      <DocActualizado fecha={LEGAL.ultimaActualizacion} />

      <DocSeccion titulo="Naturaleza del producto">
        <DocParrafo>
          {LEGAL.nombreComercial} ofrece productos digitales de acceso inmediato
          (simuladores, reactivos y guía de estudio). Por su naturaleza, el
          acceso al contenido se habilita en cuanto se confirma el pago.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Ventana de reembolso">
        <DocParrafo>
          Puedes solicitar el reembolso de tu compra dentro de{' '}
          <DatoLegal valor={LEGAL.reembolsos.ventanaDias} /> días naturales
          posteriores al pago, siempre que se cumplan las condiciones de la
          siguiente sección. Las solicitudes fuera de ese plazo no proceden,
          salvo lo que la ley disponga.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Condiciones">
        <DocLista>
          <li>
            Que la solicitud se haga dentro de la ventana indicada arriba.
          </li>
          <li>
            Que no exista un uso sustancial o descarga masiva del contenido que
            desvirtúe la solicitud (se evalúa caso por caso).
          </li>
          <li>
            Que la cuenta no haya incumplido los{' '}
            <a className="text-accent hover:underline" href="/legal/terminos">
              Términos y condiciones
            </a>
            .
          </li>
        </DocLista>
      </DocSeccion>

      <DocSeccion titulo="Cómo solicitarlo">
        <DocParrafo>
          La solicitud se hace directamente con nosotros escribiendo a{' '}
          <DatoLegal valor={LEGAL.correoContacto} />, indicando el correo de tu
          cuenta y el comprobante de compra. El reembolso, cuando proceda, se
          realiza por el mismo medio de pago a través de{' '}
          <DatoLegal valor={LEGAL.reembolsos.proveedorPagos} />, en los plazos que
          maneje el proveedor.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Excepciones">
        <DocParrafo>
          No se reembolsan compras con más de la ventana indicada de antigüedad ni
          el acceso ya consumido de una convocatoria en curso, salvo falla técnica
          atribuible a la plataforma que impida el acceso y que no podamos resolver.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Tus derechos como consumidor">
        <DocParrafo>
          Esta política no limita los derechos que la Ley Federal de Protección al
          Consumidor (PROFECO) te reconoce.
        </DocParrafo>
      </DocSeccion>
    </>
  )
}
