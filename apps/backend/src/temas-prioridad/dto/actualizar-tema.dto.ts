import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

/**
 * Actualizar un tema del catálogo de prioridad. Los tres campos son opcionales:
 * la tabla del panel manda sólo lo que cambió.
 */
export class ActualizarTemaDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10)
  peso?: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  descripcion?: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  motivoContextual?: string | null;
}
