-- CreateTable
CREATE TABLE "Pago" (
    "id" SERIAL NOT NULL,
    "mpPaymentId" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "paquete" TEXT NOT NULL,
    "ciclo" TEXT NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "moneda" TEXT NOT NULL DEFAULT 'MXN',
    "comision" DECIMAL(10,2),
    "neto" DECIMAL(10,2),
    "estado" TEXT NOT NULL,
    "metodoPago" TEXT,
    "aprobadoEn" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pago_mpPaymentId_key" ON "Pago"("mpPaymentId");

-- CreateIndex
CREATE INDEX "Pago_ciclo_idx" ON "Pago"("ciclo");

-- CreateIndex
CREATE INDEX "Pago_usuarioId_idx" ON "Pago"("usuarioId");

-- CreateIndex
CREATE INDEX "Pago_aprobadoEn_idx" ON "Pago"("aprobadoEn");

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
