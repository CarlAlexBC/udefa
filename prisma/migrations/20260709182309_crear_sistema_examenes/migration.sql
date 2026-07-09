-- CreateTable
CREATE TABLE "Examen" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "duracionMin" INTEGER NOT NULL,
    "calificable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Examen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bloque" (
    "id" SERIAL NOT NULL,
    "examenId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,
    "tiempoLimite" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bloque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reactivo" (
    "id" SERIAL NOT NULL,
    "bloqueId" INTEGER NOT NULL,
    "enunciado" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'opcion_multiple',
    "opciones" JSONB NOT NULL,
    "respuestaCorrecta" TEXT,
    "explicacion" TEXT,
    "tema" TEXT,
    "imagenUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reactivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bloque" ADD CONSTRAINT "Bloque_examenId_fkey" FOREIGN KEY ("examenId") REFERENCES "Examen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reactivo" ADD CONSTRAINT "Reactivo_bloqueId_fkey" FOREIGN KEY ("bloqueId") REFERENCES "Bloque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
