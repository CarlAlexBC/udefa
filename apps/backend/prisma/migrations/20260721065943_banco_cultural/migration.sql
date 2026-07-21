-- AlterTable
ALTER TABLE "Examen" ADD COLUMN     "anio" INTEGER,
ADD COLUMN     "plantelId" INTEGER;

-- AlterTable
ALTER TABLE "Reactivo" ADD COLUMN     "notaRevisor" TEXT,
ADD COLUMN     "referencia" TEXT;

-- AddForeignKey
ALTER TABLE "Examen" ADD CONSTRAINT "Examen_plantelId_fkey" FOREIGN KEY ("plantelId") REFERENCES "Plantel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
