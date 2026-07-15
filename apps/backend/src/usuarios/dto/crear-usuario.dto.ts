import { IsEmail, IsInt, IsString, MinLength, Min } from 'class-validator';

export class CrearUsuarioDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsInt()
  @Min(1)
  plantelId: number;
}