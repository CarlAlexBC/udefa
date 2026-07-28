import type { Metadata } from 'next'
import { AlertTriangle } from 'lucide-react'
import {
  DocTitulo,
  DocActualizado,
  DocSeccion,
  DocParrafo,
  DocLista,
} from '@/components/legal/prose'
import { LEGAL, AVISO_IMPORTANTE } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Descargo de responsabilidad · El Monote te Guía',
}

export default function DescargoPage() {
  return (
    <>
      <DocTitulo>Descargo de responsabilidad</DocTitulo>
      <DocActualizado fecha={LEGAL.ultimaActualizacion} />

      {/* Recuadro destacado — el AVISO IMPORTANTE, lo primero que se lee */}
      <div className="mt-6 rounded-xl border border-accent/40 bg-accent/5 p-5">
        <div className="mb-3 flex items-center gap-2 text-accent">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-semibold uppercase tracking-widest">
            Aviso importante
          </p>
        </div>
        <div className="space-y-3">
          {AVISO_IMPORTANTE.map((parrafo, i) => (
            <p key={i} className="text-sm leading-relaxed text-foreground">
              {parrafo}
            </p>
          ))}
        </div>
      </div>

      <DocSeccion titulo="Qué es esta plataforma">
        <DocParrafo>
          {LEGAL.nombreComercial} es una plataforma independiente de preparación
          académica y psicológica dirigida a aspirantes que desean presentar
          procesos de admisión a escuelas militares en México.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="No hay relación oficial con instituciones militares">
        <DocParrafo>
          Esta plataforma no pertenece, no está afiliada, no está autorizada, no
          está patrocinada ni representa oficialmente a la Secretaría de la
          Defensa Nacional (DEFENSA), la Fuerza Aérea Mexicana, la Universidad del
          Ejército y Fuerza Aérea (U.D.E.F.A.), el Heroico Colegio Militar, la
          Escuela Militar de Aviación ni a ninguna otra institución militar o
          dependencia del Gobierno de México.
        </DocParrafo>
        <DocParrafo>
          Todos los nombres de instituciones, escudos, planteles y
          denominaciones utilizados dentro de la plataforma tienen un propósito
          exclusivamente informativo e identificativo, con el fin de orientar a
          los aspirantes sobre el proceso de preparación.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="El material es de práctica, con fines educativos">
        <DocParrafo>
          Los simuladores, cuestionarios, reactivos, ejercicios y materiales
          disponibles en la plataforma son material de práctica elaborado con
          fines educativos y no corresponden a exámenes oficiales, ni garantizan
          resultados de admisión.
        </DocParrafo>
        <DocParrafo>
          La preparación ofrecida por {LEGAL.nombreComercial} constituye un apoyo
          complementario para el estudio y no sustituye la información oficial
          publicada por las autoridades competentes.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Consulta siempre las fuentes oficiales">
        <DocParrafo>
          Los usuarios deberán consultar siempre las convocatorias, requisitos y
          comunicados emitidos por la Secretaría de la Defensa Nacional y las
          instituciones correspondientes para obtener información oficial y
          actualizada. Ante cualquier diferencia entre lo publicado aquí y la
          información oficial, prevalece esta última.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Sobre los resultados psicológicos">
        <DocParrafo>
          Los diagnósticos, perfiles y señales que muestra el panel de resultados
          son una herramienta de autoconocimiento y preparación. No constituyen
          una evaluación clínica ni un dictamen profesional, no se comparten con
          ninguna institución y no determinan el resultado de ningún proceso de
          admisión oficial. Si alguno de tus resultados te genera preocupación
          sobre tu bienestar, busca el apoyo de un profesional de la salud.
        </DocParrafo>
      </DocSeccion>

      <DocSeccion titulo="Aviso complementario">
        <DocLista>
          <li>
            En cada simulador se muestra un recordatorio de que se trata de
            material de práctica y no de un examen oficial.
          </li>
          <li>
            Este descargo forma parte de los Términos y condiciones de uso de la
            plataforma; al usarla, aceptas su contenido.
          </li>
        </DocLista>
      </DocSeccion>
    </>
  )
}
