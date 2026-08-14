-- CreateEnum
CREATE TYPE "EstadoExplicacion" AS ENUM ('BORRADOR', 'PUBLICADO');

-- CreateTable
CREATE TABLE "ExplicacionCapitulo" (
    "id" SERIAL NOT NULL,
    "capituloId" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "estado" "EstadoExplicacion" NOT NULL DEFAULT 'BORRADOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExplicacionCapitulo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExplicacionCapitulo_capituloId_key" ON "ExplicacionCapitulo"("capituloId");

-- AddForeignKey
ALTER TABLE "ExplicacionCapitulo" ADD CONSTRAINT "ExplicacionCapitulo_capituloId_fkey" FOREIGN KEY ("capituloId") REFERENCES "Capitulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
