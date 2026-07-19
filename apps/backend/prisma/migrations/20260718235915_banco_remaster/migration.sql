-- CreateEnum
CREATE TYPE "TipoTrampa" AS ENUM ('L', 'K', 'F', 'CROSS');

-- AlterEnum
ALTER TYPE "Polaridad" ADD VALUE 'TRAMPA';

-- AlterTable
ALTER TABLE "Reactivo" ADD COLUMN     "banco" TEXT NOT NULL DEFAULT 'v1',
ADD COLUMN     "crossRef" TEXT,
ADD COLUMN     "eje" INTEGER,
ADD COLUMN     "esCritico" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "marco" TEXT,
ADD COLUMN     "noPuntua" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "numeroEnEje" INTEGER,
ADD COLUMN     "parNumero" INTEGER,
ADD COLUMN     "subLote" INTEGER,
ADD COLUMN     "subnota" TEXT,
ADD COLUMN     "tipoTrampa" "TipoTrampa";
