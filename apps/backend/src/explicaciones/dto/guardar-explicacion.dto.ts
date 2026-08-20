import { IsIn, IsString, MaxLength } from 'class-validator';

/** Guardar la explicación de un capítulo ("Entiende el tema"). */
export class GuardarExplicacionDto {
  // 200 mil caracteres es holgadísimo para una explicación de capítulo y a la
  // vez impide que alguien use este campo para engordar la base a voluntad.
  @IsString()
  @MaxLength(200_000)
  contenido: string;

  @IsIn(['BORRADOR', 'PUBLICADO'])
  estado: 'BORRADOR' | 'PUBLICADO';
}
