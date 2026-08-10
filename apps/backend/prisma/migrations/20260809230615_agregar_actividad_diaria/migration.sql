-- CreateTable
CREATE TABLE "ActividadDiaria" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActividadDiaria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ActividadDiaria_usuarioId_idx" ON "ActividadDiaria"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "ActividadDiaria_usuarioId_fecha_key" ON "ActividadDiaria"("usuarioId", "fecha");

-- AddForeignKey
ALTER TABLE "ActividadDiaria" ADD CONSTRAINT "ActividadDiaria_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
