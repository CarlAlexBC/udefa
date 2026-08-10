-- CreateTable
CREATE TABLE "SeccionLeida" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeccionLeida_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SeccionLeida_usuarioId_idx" ON "SeccionLeida"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "SeccionLeida_usuarioId_slug_key" ON "SeccionLeida"("usuarioId", "slug");

-- AddForeignKey
ALTER TABLE "SeccionLeida" ADD CONSTRAINT "SeccionLeida_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
