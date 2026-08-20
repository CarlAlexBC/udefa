import { IsString, MaxLength } from 'class-validator';

/**
 * Confirmar un pago al volver del checkout. El id lo trae la URL a la que
 * Mercado Pago devuelve al comprador, así que siempre llega como texto.
 */
export class ConfirmarPagoDto {
  @IsString()
  @MaxLength(64)
  paymentId: string;
}
