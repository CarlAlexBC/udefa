-- CreateTable
CREATE TABLE "Acceso" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "modulo" TEXT NOT NULL,
    "ciclo" TEXT NOT NULL,
    "expiraEn" TIMESTAMP(3),
    "otorgadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "origen" TEXT NOT NULL DEFAULT 'manual',

    CONSTRAINT "Acceso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Acceso_usuarioId_idx" ON "Acceso"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Acceso_usuarioId_modulo_ciclo_key" ON "Acceso"("usuarioId", "modulo", "ciclo");

-- AddForeignKey
ALTER TABLE "Acceso" ADD CONSTRAINT "Acceso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
