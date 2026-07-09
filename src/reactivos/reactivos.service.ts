import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReactivosService {
  constructor(private prisma: PrismaService) {}

  async crear(
    bloqueId: number,
    enunciado: string,
    opciones: any,
    tipo: string,
    respuestaCorrecta?: string,
    explicacion?: string,
    tema?: string,
    imagenUrl?: string,
  ) {
    return this.prisma.reactivo.create({
      data: {
        bloqueId,
        enunciado,
        opciones,
        tipo,
        respuestaCorrecta,
        explicacion,
        tema,
        imagenUrl,
      },
    });
  }

  async obtenerTodos() {
    return this.prisma.reactivo.findMany();
  }

  async borrar(id: number) {
    return this.prisma.reactivo.delete({
      where: { id },
    });
  }
}