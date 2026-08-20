import { IsInt, Max, Min } from 'class-validator';

/** Cambiar cuántos reactivos aporta una materia del temario. */
export class ActualizarMateriaDto {
  // El examen completo son 100 reactivos; 200 deja margen de sobra para
  // cualquier reparto razonable y corta cualquier disparate.
  @IsInt()
  @Min(0)
  @Max(200)
  numPreguntas: number;
}
