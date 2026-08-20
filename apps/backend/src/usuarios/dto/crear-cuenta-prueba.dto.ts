import {
  ArrayMaxSize,
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

/**
 * Crear una cuenta de PRUEBA desde el panel: sirve unos minutos y se acabó.
 * El correo y la contraseña los genera el backend; aquí sólo se dice para qué
 * plantel, qué módulos y por cuánto tiempo.
 */
export class CrearCuentaPruebaDto {
  @IsInt()
  @Min(1)
  plantelId: number;

  // 'cultural' | 'psicologico'. Se validan contra MODULOS en AccesoService.
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMaxSize(10)
  @IsString({ each: true })
  @MaxLength(40, { each: true })
  modulos: string[];

  /**
   * Tope de un día. Más que eso ya no es una prueba: es una cortesía, y para eso
   * está "dar acceso" normal, que deja elegir la fecha.
   */
  @IsInt()
  @Min(1)
  @Max(1440)
  minutos: number;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  nombre?: string;
}
