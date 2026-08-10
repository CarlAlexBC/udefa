import { ArrayMaxSize, IsArray, IsString, MaxLength } from 'class-validator';

/** Marcar UNA sección como leída. */
export class MarcarLeidaDto {
  @IsString()
  @MaxLength(200)
  slug: string;
}

/**
 * Marcar VARIAS de un golpe. Se usa una sola vez por aspirante: para subir el
 * avance que traía guardado en su navegador de cuando esto no vivía en la base.
 *
 * El tope de 200 no es capricho: la Guía tiene 57 secciones, así que cualquier
 * lote más grande que eso viene de un cliente descompuesto o de alguien
 * jugando con la API.
 */
export class MarcarVariasDto {
  @IsArray()
  @ArrayMaxSize(200)
  @IsString({ each: true })
  @MaxLength(200, { each: true })
  slugs: string[];
}
