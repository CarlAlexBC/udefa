-- CreateTable
CREATE TABLE "RespuestaPractica" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "reactivoId" INTEGER NOT NULL,
    "esCorrecta" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RespuestaPractica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RespuestaPractica_usuarioId_idx" ON "RespuestaPractica"("usuarioId");

-- CreateIndex
CREATE INDEX "RespuestaPractica_usuarioId_createdAt_idx" ON "RespuestaPractica"("usuarioId", "createdAt");

-- AddForeignKey
ALTER TABLE "RespuestaPractica" ADD CONSTRAINT "RespuestaPractica_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestaPractica" ADD CONSTRAINT "RespuestaPractica_reactivoId_fkey" FOREIGN KEY ("reactivoId") REFERENCES "Reactivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
