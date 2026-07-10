import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlantelesService {
  constructor(private prisma: PrismaService) {}

  async crear(nombre: string, descripcion?: string) {
    return this.prisma.plantel.create({
      data: {
        nombre,
        descripcion,
      },
    });
  }

  async obtenerTodos() {
    return this.prisma.plantel.findMany();
  }

  async borrar(id:number) {
    return this.prisma.plantel.delete({
      where: {id}
    });
  }

async actualizar(id: number, nombre: string, descripcion?: string) {
    return this.prisma.plantel.update({
      where: { id },
      data: {
        nombre,
        descripcion,
      },
    });
  }}