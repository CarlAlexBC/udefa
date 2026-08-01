import Link from 'next/link'

/**
 * Botón de un paquete en /precios. Si `paquete` es null (plan gratis) manda a
 * /registro; si es de pago, lleva a la pantalla "crea tu cuenta y paga"
 * (/comprar/<paquete>), donde el aspirante deja sus datos y sale al checkout de
 * Mercado Pago. Ya no pide sesión antes de comprar: la cuenta nace con la compra.
 */
export function BotonPaquete({
  paquete,
  label,
  color,
  onColor,
  filled,
}: {
  paquete: string | null
  label: string
  color: string
  onColor: string
  filled: boolean
}) {
  const destino = paquete ? `/comprar/${paquete}` : '/registro'
  return (
    <div className="mt-6">
      <Link
        href={destino}
        className="block w-full rounded-md border px-4 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90"
        style={
          filled
            ? { backgroundColor: color, color: onColor, borderColor: color }
            : { backgroundColor: 'transparent', color, borderColor: color }
        }
      >
        {label}
      </Link>
    </div>
  )
}
