-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Pago" ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
