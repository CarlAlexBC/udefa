-- CreateEnum
CREATE TYPE "Polaridad" AS ENUM ('POSITIVA', 'NEGATIVA');

-- AlterTable
ALTER TABLE "Reactivo" ADD COLUMN     "polaridad" "Polaridad";
