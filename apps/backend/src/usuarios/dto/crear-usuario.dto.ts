import { IsEmail, IsString, MinLength } from 'class-validator';

export class CrearUsuarioDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}