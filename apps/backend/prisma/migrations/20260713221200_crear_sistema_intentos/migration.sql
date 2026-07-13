-- CreateEnum
CREATE TYPE "EstadoSesion" AS ENUM ('EN_PROGRESO', 'COMPLETADA', 'ABANDONADA');

-- CreateEnum
CREATE TYPE "EstadoIntento" AS ENUM ('EN_PROGRESO', 'COMPLETADA', 'TIEMPO_AGOTADO', 'ABANDONADA');

-- CreateTable
CREATE TABLE "SesionExamenCompleto" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "plantelId" INTEGER NOT NULL,
    "inicioAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finAt" TIMESTAMP(3),
    "estado" "EstadoSesion" NOT NULL DEFAULT 'EN_PROGRESO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SesionExamenCompleto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntentoExamen" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "examenId" INTEGER NOT NULL,
    "sesionCompletoId" INTEGER,
    "inicioAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finAt" TIMESTAMP(3),
    "estado" "EstadoIntento" NOT NULL DEFAULT 'EN_PROGRESO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntentoExamen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RespuestaReactivo" (
    "id" SERIAL NOT NULL,
    "intentoExamenId" INTEGER NOT NULL,
    "reactivoId" INTEGER NOT NULL,
    "respuestaSeleccionada" TEXT NOT NULL,
    "esCorrecta" BOOLEAN,
    "respondidoEnMs" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RespuestaReactivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SesionExamenCompleto" ADD CONSTRAINT "SesionExamenCompleto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SesionExamenCompleto" ADD CONSTRAINT "SesionExamenCompleto_plantelId_fkey" FOREIGN KEY ("plantelId") REFERENCES "Plantel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntentoExamen" ADD CONSTRAINT "IntentoExamen_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntentoExamen" ADD CONSTRAINT "IntentoExamen_examenId_fkey" FOREIGN KEY ("examenId") REFERENCES "Examen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntentoExamen" ADD CONSTRAINT "IntentoExamen_sesionCompletoId_fkey" FOREIGN KEY ("sesionCompletoId") REFERENCES "SesionExamenCompleto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestaReactivo" ADD CONSTRAINT "RespuestaReactivo_intentoExamenId_fkey" FOREIGN KEY ("intentoExamenId") REFERENCES "IntentoExamen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestaReactivo" ADD CONSTRAINT "RespuestaReactivo_reactivoId_fkey" FOREIGN KEY ("reactivoId") REFERENCES "Reactivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
