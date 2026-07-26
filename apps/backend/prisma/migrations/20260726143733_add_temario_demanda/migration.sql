-- CreateEnum
CREATE TYPE "EstadoTemario" AS ENUM ('BORRADOR', 'PUBLICADO');

-- CreateTable
CREATE TABLE "Temario" (
    "id" SERIAL NOT NULL,
    "plantelId" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "estado" "EstadoTemario" NOT NULL DEFAULT 'BORRADOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Temario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MateriaTemario" (
    "id" SERIAL NOT NULL,
    "temarioId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "libroId" INTEGER NOT NULL,
    "numPreguntas" INTEGER NOT NULL,
    "orden" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MateriaTemario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MateriaTemarioCapitulo" (
    "id" SERIAL NOT NULL,
    "materiaTemarioId" INTEGER NOT NULL,
    "capituloId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MateriaTemarioCapitulo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Temario_plantelId_anio_estado_key" ON "Temario"("plantelId", "anio", "estado");

-- CreateIndex
CREATE UNIQUE INDEX "MateriaTemarioCapitulo_materiaTemarioId_capituloId_key" ON "MateriaTemarioCapitulo"("materiaTemarioId", "capituloId");

-- AddForeignKey
ALTER TABLE "Temario" ADD CONSTRAINT "Temario_plantelId_fkey" FOREIGN KEY ("plantelId") REFERENCES "Plantel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateriaTemario" ADD CONSTRAINT "MateriaTemario_temarioId_fkey" FOREIGN KEY ("temarioId") REFERENCES "Temario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateriaTemario" ADD CONSTRAINT "MateriaTemario_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateriaTemarioCapitulo" ADD CONSTRAINT "MateriaTemarioCapitulo_materiaTemarioId_fkey" FOREIGN KEY ("materiaTemarioId") REFERENCES "MateriaTemario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateriaTemarioCapitulo" ADD CONSTRAINT "MateriaTemarioCapitulo_capituloId_fkey" FOREIGN KEY ("capituloId") REFERENCES "Capitulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
