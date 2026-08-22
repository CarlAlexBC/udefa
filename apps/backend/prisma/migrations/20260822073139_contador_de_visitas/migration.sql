-- CreateTable
CREATE TABLE "VistaDiaria" (
    "id" SERIAL NOT NULL,
    "fecha" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "conteo" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "VistaDiaria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VistaDiaria_fecha_idx" ON "VistaDiaria"("fecha");

-- CreateIndex
CREATE UNIQUE INDEX "VistaDiaria_fecha_ruta_key" ON "VistaDiaria"("fecha", "ruta");
