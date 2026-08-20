import {
  ArrayMaxSize,
  IsArray,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

/** Dar acceso a mano desde el panel admin (ventas por fuera, cortesías, pruebas). */
export class OtorgarAccesoDto {
  @IsInt()
  @Min(1)
  usuarioId: number;

  // Hoy sólo existen dos módulos; el tope deja margen sin abrir la puerta a un
  // arreglo enorme. Los nombres se validan contra MODULOS en AccesoService.
  @IsArray()
  @ArrayMaxSize(10)
  @IsString({ each: true })
  @MaxLength(40, { each: true })
  modulos: string[];

  @IsString()
  @MaxLength(20)
  ciclo: string;

  // Fecha de caducidad. Opcional: sin ella, el acceso no caduca.
  @IsOptional()
  @IsDateString()
  expiraEn?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  origen?: string;
}
