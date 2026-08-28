-- CreateEnum
CREATE TYPE "TipoPlantel" AS ENUM ('ADMISION', 'TROPA');

-- AlterTable
ALTER TABLE "Plantel" ADD COLUMN     "tipo" "TipoPlantel" NOT NULL DEFAULT 'ADMISION';
