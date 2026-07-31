import { IsEmail, IsString, MinLength } from 'class-validator';

/**
 * Datos del flujo "datos y luego pagar": el aspirante llena esto ANTES de ir al
 * checkout. Con ellos se crea una cuenta en estado PENDIENTE (sin acceso) que se
 * activa sola cuando el pago se aprueba. No pide plantel: se elige al entrar, con
 * el flujo de "elige tu plantel" que ya existe.
 */
export class RegistrarYPagarDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  // El paquete ('cultural' | 'psicologico' | 'completa'). Se valida contra el
  // catálogo real en PagosService, que es la fuente única de los paquetes.
  @IsString()
  paquete: string;
}
