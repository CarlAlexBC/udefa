-- CreateEnum
CREATE TYPE "EstadoCuenta" AS ENUM ('PENDIENTE', 'ACTIVA');

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "estado" "EstadoCuenta" NOT NULL DEFAULT 'ACTIVA';
