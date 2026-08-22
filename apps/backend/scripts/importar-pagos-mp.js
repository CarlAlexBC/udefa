/**
 * Rescate del historial de ventas desde Mercado Pago  (Fase 3 del libro de caja)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * POR QUÉ EXISTE. Hasta el 21 de agosto de 2026 la plataforma no guardaba
 * ningún pago: el aviso de Mercado Pago llegaba, se creaba la cuenta, se
 * otorgaba el acceso y ahí terminaba. Desde esa fecha cada venta se anota sola
 * en la tabla `Pago`, pero lo cobrado ANTES vive únicamente en Mercado Pago.
 * Este script se lo pide y lo escribe, para que el panel de ingresos tenga la
 * historia completa desde el primer peso.
 *
 * QUÉ HACE, EXACTAMENTE. Recorre los pagos de tu cuenta de MP y, por cada uno
 * aprobado, escribe una fila en `Pago` con lo que MP reporta: monto, moneda,
 * comisión, neto, método, fecha de aprobación y a qué cuenta pertenece.
 *
 * QUÉ NO HACE. No otorga accesos, no crea cuentas, no manda correos y no toca
 * nada más que la tabla `Pago`. Si un pago ya estaba anotado, lo actualiza en
 * vez de duplicarlo (la clave es el número de operación de MP).
 *
 * ── CÓMO SE CORRE ──────────────────────────────────────────────────────────
 *   1) Ensayo, no escribe nada (así se corre la primera vez, siempre):
 *        node scripts/importar-pagos-mp.js
 *   2) De verdad:
 *        node scripts/importar-pagos-mp.js --aplicar
 *
 * Necesita dos variables en el entorno: MERCADOPAGO_ACCESS_TOKEN y DATABASE_URL.
 * Para correrlo contra PRODUCCIÓN se cargan desde .env.produccion.
 */

const { PrismaClient } = require('@prisma/client')

const APLICAR = process.argv.includes('--aplicar')
const TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN
const CICLO_POR_DEFECTO = '2027'

const prisma = new PrismaClient()

/** Una página de resultados de la búsqueda de pagos de Mercado Pago. */
async function pedirPagina(offset) {
  const url =
    'https://api.mercadopago.com/v1/payments/search' +
    `?sort=date_created&criteria=desc&limit=50&offset=${offset}`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
  if (!res.ok) {
    throw new Error(
      `Mercado Pago respondió ${res.status}. ` +
        (res.status === 401
          ? 'El token no sirve o es el de pruebas.'
          : await res.text()),
    )
  }
  return res.json()
}

/**
 * A qué cuenta pertenece un pago. Misma regla que el webhook
 * (pagos.service.ts): el external_reference trae usuarioId o compraId.
 */
async function dueñoDelPago(referencia) {
  let datos
  try {
    datos = JSON.parse(referencia ?? '')
  } catch {
    return { usuarioId: null, paquete: null, ciclo: null }
  }
  if (datos.usuarioId) {
    return {
      usuarioId: datos.usuarioId,
      paquete: datos.paquete ?? null,
      ciclo: datos.ciclo ?? CICLO_POR_DEFECTO,
    }
  }
  if (datos.compraId) {
    const compra = await prisma.compraPendiente.findUnique({
      where: { id: datos.compraId },
      select: { usuarioId: true, paquete: true, ciclo: true },
    })
    return {
      usuarioId: compra?.usuarioId ?? null,
      paquete: datos.paquete ?? compra?.paquete ?? null,
      ciclo: datos.ciclo ?? compra?.ciclo ?? CICLO_POR_DEFECTO,
    }
  }
  return { usuarioId: null, paquete: datos.paquete ?? null, ciclo: null }
}

async function main() {
  if (!TOKEN) {
    console.error(
      'Falta MERCADOPAGO_ACCESS_TOKEN. Cárgalo del .env.produccion antes de correr.',
    )
    process.exit(1)
  }

  console.log(
    APLICAR
      ? '── ESCRIBIENDO en la base ────────────────────────'
      : '── ENSAYO · no se escribe nada ───────────────────',
  )

  let offset = 0
  let total = null
  const resumen = { vistos: 0, aprobados: 0, nuevos: 0, actualizados: 0, huerfanos: [] }

  do {
    const pagina = await pedirPagina(offset)
    total = pagina.paging?.total ?? 0
    const resultados = pagina.results ?? []
    if (resultados.length === 0) break

    for (const pago of resultados) {
      resumen.vistos++
      if (pago.status !== 'approved') continue
      resumen.aprobados++

      const { usuarioId, paquete, ciclo } = await dueñoDelPago(
        pago.external_reference,
      )

      if (!usuarioId || !paquete) {
        resumen.huerfanos.push({
          id: pago.id,
          monto: pago.transaction_amount,
          fecha: pago.date_approved,
          motivo: !paquete ? 'sin paquete legible' : 'sin cuenta ligada',
        })
        continue
      }

      const comision = Array.isArray(pago.fee_details)
        ? pago.fee_details.reduce((suma, f) => suma + (f.amount ?? 0), 0)
        : null
      const dinero = {
        monto: pago.transaction_amount,
        moneda: pago.currency_id ?? 'MXN',
        comision,
        neto: pago.transaction_details?.net_received_amount ?? null,
        estado: pago.status,
        metodoPago: pago.payment_method_id ?? null,
        aprobadoEn: pago.date_approved ? new Date(pago.date_approved) : null,
      }

      const yaEstaba = await prisma.pago.findUnique({
        where: { mpPaymentId: String(pago.id) },
        select: { id: true },
      })

      if (yaEstaba) resumen.actualizados++
      else resumen.nuevos++

      console.log(
        `${yaEstaba ? 'actualiza' : 'NUEVO    '} · pago ${pago.id} · ${paquete} · ` +
          `$${dinero.monto} · comisión ${comision ?? '?'} · usuario ${usuarioId} · ` +
          `${pago.date_approved?.slice(0, 10) ?? 's/f'}`,
      )

      if (APLICAR) {
        await prisma.pago.upsert({
          where: { mpPaymentId: String(pago.id) },
          create: {
            mpPaymentId: String(pago.id),
            usuarioId,
            paquete,
            ciclo: ciclo ?? CICLO_POR_DEFECTO,
            ...dinero,
          },
          update: dinero,
        })
      }
    }
    offset += resultados.length
  } while (offset < total)

  console.log('\n── Resumen ───────────────────────────────────────')
  console.log(`Pagos mirados en Mercado Pago: ${resumen.vistos}`)
  console.log(`Aprobados:                     ${resumen.aprobados}`)
  console.log(`Se anotarían nuevos:           ${resumen.nuevos}`)
  console.log(`Ya estaban (se actualizan):    ${resumen.actualizados}`)

  if (resumen.huerfanos.length > 0) {
    console.log(
      `\n⚠ ${resumen.huerfanos.length} pago(s) aprobados que NO se pueden ligar a una cuenta:`,
    )
    resumen.huerfanos.forEach((h) =>
      console.log(`   pago ${h.id} · $${h.monto} · ${h.fecha ?? 's/f'} · ${h.motivo}`),
    )
    console.log(
      '   Son cobros reales; hay que revisarlos a mano en Mercado Pago antes de darlos por perdidos.',
    )
  }

  if (!APLICAR) {
    console.log('\nEsto fue un ENSAYO. Para escribirlo: node scripts/importar-pagos-mp.js --aplicar')
  }
}

main()
  .catch((e) => {
    console.error('\nSe detuvo:', e.message)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
