import { TablaPrioridades } from './TablaPrioridades'
import { Sparkles } from 'lucide-react'

/**
 * Panel admin para el catálogo de prioridades de temas.
 *
 * ESTA PANTALLA VIVE DENTRO DEL LAYOUT DEL PANEL (`admin/layout.tsx`), que ya
 * pone el encabezado, la barra lateral y el ancho de la caja. Antes dibujaba
 * además su propio <HeaderPrivado> y su propio <main>, así que se veían **dos
 * encabezados apilados** y la caja quedaba de otro ancho que el resto del panel.
 * Aquí sólo va el contenido (23 ago 2026).
 *
 * El RBAC también lo pone el layout: comprueba el rol y bloquea a quien no sea
 * admin. Y el endpoint de atrás va guardado con `@Roles('admin')`. El comentario
 * viejo decía "sin RBAC aún, admin-de-facto" y llevaba tiempo siendo falso.
 */
export default function AdminTemasPrioridadPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-military">
          Administración
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          Prioridad de temas
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Ajusta el peso de cada tema del examen de personalidad. Un peso más alto
          hace que los reactivos de ese tema aparezcan con mayor frecuencia en el
          muestreo. Rango: 1 (base) a 10 (dominante).
        </p>
      </div>

      {/* Nota contextual */}
      <div className="mb-6 flex items-start gap-3 rounded-lg border border-military/30 bg-military/5 p-4">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-military" />
        <div className="text-xs leading-relaxed text-muted-foreground">
          <p className="mb-1 font-semibold text-foreground">Cómo funciona</p>
          <p>
            El muestreo estratificado sólo tiene efecto real en el examen de{' '}
            <span className="font-semibold">personalidad</span> (256 reactivos, más
            de 38 temas en un solo bloque). El psicométrico y el axiológico
            distribuyen sus reactivos por otros criterios. Los cambios se aplican al
            próximo examen armado; los intentos ya iniciados no se ven afectados.
          </p>
        </div>
      </div>

      <TablaPrioridades />
    </div>
  )
}

export const metadata = {
  title: 'Admin · Prioridad de temas',
}
