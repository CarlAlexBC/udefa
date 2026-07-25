-- CreateTable
CREATE TABLE "RepasoReactivo" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "reactivoId" INTEGER NOT NULL,
    "caja" INTEGER NOT NULL DEFAULT 1,
    "rachaAciertos" INTEGER NOT NULL DEFAULT 0,
    "proximoRepaso" TIMESTAMP(3) NOT NULL,
    "ultimoVistoAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepasoReactivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RepasoReactivo_usuarioId_proximoRepaso_idx" ON "RepasoReactivo"("usuarioId", "proximoRepaso");

-- CreateIndex
CREATE UNIQUE INDEX "RepasoReactivo_usuarioId_reactivoId_key" ON "RepasoReactivo"("usuarioId", "reactivoId");

-- AddForeignKey
ALTER TABLE "RepasoReactivo" ADD CONSTRAINT "RepasoReactivo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepasoReactivo" ADD CONSTRAINT "RepasoReactivo_reactivoId_fkey" FOREIGN KEY ("reactivoId") REFERENCES "Reactivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
