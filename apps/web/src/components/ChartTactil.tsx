'use client'

/**
 * Envoltura para las gráficas de recharts en pantalla táctil.
 *
 * El problema: recharts esconde el globito de datos cuando el ratón SALE de la
 * gráfica (`mouseleave`). En un teléfono no existe "sacar el ratón": tocas una
 * barra, aparece el globito y se queda ahí clavado encima de la gráfica hasta
 * que toques otra. Se ve como una etiqueta pegada que tapa los datos.
 *
 * La solución: cuando el dedo se levanta, le avisamos a recharts lo mismo que le
 * avisaría el ratón al salir. Queda el gesto natural del teléfono: mantienes el
 * dedo y arrastras para ir leyendo barra por barra, lo sueltas y el globito se
 * va. En computadora no cambia nada — ahí no hay eventos de tacto.
 */
export function ChartTactil({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={className}
      style={style}
      onTouchEnd={(e) => {
        e.currentTarget
          .querySelectorAll('.recharts-wrapper')
          .forEach((w) =>
            w.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true })),
          )
      }}
    >
      {children}
    </div>
  )
}
