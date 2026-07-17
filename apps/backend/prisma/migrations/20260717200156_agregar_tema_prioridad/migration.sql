-- CreateTable
CREATE TABLE "TemaPrioridad" (
    "tema" TEXT NOT NULL,
    "peso" INTEGER NOT NULL DEFAULT 1,
    "descripcion" TEXT,
    "motivoContextual" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemaPrioridad_pkey" PRIMARY KEY ("tema")
);
