-- DropForeignKey
ALTER TABLE "Reactivo" DROP CONSTRAINT "Reactivo_bloqueId_fkey";

-- AlterTable
ALTER TABLE "Reactivo" ADD COLUMN     "temaId" INTEGER,
ALTER COLUMN "bloqueId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Libro" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "edicion" TEXT,
    "anio" INTEGER,
    "isbn" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Capitulo" (
    "id" SERIAL NOT NULL,
    "libroId" INTEGER NOT NULL,
    "numero" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Capitulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tema" (
    "id" SERIAL NOT NULL,
    "capituloId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Libro_slug_key" ON "Libro"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Capitulo_libroId_numero_key" ON "Capitulo"("libroId", "numero");

-- CreateIndex
CREATE UNIQUE INDEX "Tema_capituloId_nombre_key" ON "Tema"("capituloId", "nombre");

-- AddForeignKey
ALTER TABLE "Reactivo" ADD CONSTRAINT "Reactivo_bloqueId_fkey" FOREIGN KEY ("bloqueId") REFERENCES "Bloque"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reactivo" ADD CONSTRAINT "Reactivo_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "Tema"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Capitulo" ADD CONSTRAINT "Capitulo_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tema" ADD CONSTRAINT "Tema_capituloId_fkey" FOREIGN KEY ("capituloId") REFERENCES "Capitulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
