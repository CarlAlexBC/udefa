import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async registrar(datos: CrearUsuarioDto) {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { email: datos.email },
    });

    if (usuarioExistente) {
      throw new ConflictException('Ese correo ya está registrado');
    }

    // Validar que el plantel existe antes de crear el usuario
    const plantel = await this.prisma.plantel.findUnique({
      where: { id: datos.plantelId },
    });
    if (!plantel) {
      throw new NotFoundException('Plantel no encontrado');
    }

    const passwordEncriptada = await bcrypt.hash(datos.password, 10);

    const nuevoUsuario = await this.prisma.usuario.create({
      data: {
        nombre: datos.nombre,
        email: datos.email,
        password: passwordEncriptada,
        plantelId: datos.plantelId,
      },
    });

    const { password: _password, ...usuarioSinPassword } = nuevoUsuario;
    return usuarioSinPassword;
  }

  /**
   * Cambia (o asigna por primera vez) el plantel del usuario dado.
   * Valida que el plantel existe. No requiere que el usuario tenga plantel previo.
   */
  async asignarPlantel(usuarioId: number, plantelId: number) {
    const plantel = await this.prisma.plantel.findUnique({
      where: { id: plantelId },
    });
    if (!plantel) {
      throw new NotFoundException('Plantel no encontrado');
    }
    const actualizado = await this.prisma.usuario.update({
      where: { id: usuarioId },
      data: { plantelId },
      include: { plantel: true },
    });
    const { password: _password, ...usuarioSinPassword } = actualizado;
    return usuarioSinPassword;
  }
}