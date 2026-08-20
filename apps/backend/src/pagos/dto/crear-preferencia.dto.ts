import { IsString, MaxLength } from 'class-validator';

/** Iniciar el pago de un paquete estando ya con sesión abierta. */
export class CrearPreferenciaDto {
  // El nombre del paquete ('cultural' | 'psicologico' | 'completa'). Se valida
  // contra el catálogo real en PagosService, que es la fuente única.
  @IsString()
  @MaxLength(40)
  paquete: string;
}
