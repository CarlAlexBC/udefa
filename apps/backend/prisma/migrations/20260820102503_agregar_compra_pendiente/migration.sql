-- CreateTable
CREATE TABLE "CompraPendiente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "paquete" TEXT NOT NULL,
    "ciclo" TEXT NOT NULL,
    "usuarioId" INTEGER,
    "usadaEn" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompraPendiente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CompraPendiente_email_idx" ON "CompraPendiente"("email");
