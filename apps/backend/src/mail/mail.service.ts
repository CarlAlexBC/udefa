import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

/**
 * Servicio de correo — envuelve Resend.
 *
 * MODO CONSOLA: si NO hay `RESEND_API_KEY` en el entorno, no manda nada:
 * escribe el correo (destinatario, asunto y cuerpo) en la consola del backend.
 * Así se puede construir y probar TODO el flujo sin la llave; cuando se
 * configure `RESEND_API_KEY`, empieza a enviar de verdad sin tocar código.
 *
 * `enviar()` es el ladrillo de bajo nivel. Cada correo concreto (recibo,
 * acceso listo, recuperar contraseña) vive en su propio método que arma el
 * HTML y llama a `enviar()`.
 */
@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  private readonly resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

  private readonly from =
    process.env.MAIL_FROM ?? 'El Monote te Guía <onboarding@resend.dev>';

  /**
   * ¿Este servidor puede mandar correo DE VERDAD, o está en modo consola?
   * Lo pregunta PagosService: si el correo no sale, no puede obligar al
   * comprador a definir su contraseña por correo — lo dejaría fuera de una
   * cuenta que acaba de pagar.
   */
  puedeEnviar(): boolean {
    return this.resend !== null;
  }

  async enviar(opts: { to: string; subject: string; html: string }) {
    // Sin llave → modo consola: no se manda, solo se registra para verlo en dev.
    if (!this.resend) {
      this.logger.warn(
        `📧 [MODO CONSOLA] Sin RESEND_API_KEY — no se envía, solo se registra:\n` +
          `   Para:   ${opts.to}\n` +
          `   Asunto: ${opts.subject}\n` +
          `   ----- cuerpo -----\n${opts.html}\n   ------------------`,
      );
      return { modo: 'consola' as const };
    }

    const { data, error } = await this.resend.emails.send({
      from: this.from,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
    });

    if (error) {
      this.logger.error(
        `Error al enviar a ${opts.to}: ${JSON.stringify(error)}`,
      );
      throw new Error('No se pudo enviar el correo');
    }

    this.logger.log(`Correo enviado a ${opts.to} (id ${data?.id ?? '—'})`);
    return { modo: 'resend' as const, id: data?.id };
  }

  /**
   * Correo para restablecer la contraseña. `link` es la URL con el token que
   * lleva a la pantalla de "elige tu nueva contraseña".
   */
  async enviarRecuperacion(to: string, link: string) {
    const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 520px; margin: 0 auto; background:#161513; color:#F7F3EA; padding:32px; border-radius:12px;">
      <h1 style="color:#C99A3B; font-size:20px; margin:0 0 12px;">El Monote te Guía</h1>
      <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
        Recibimos una solicitud para restablecer tu contraseña. Si fuiste tú, entra al
        siguiente botón. El enlace vence en 1 hora.
      </p>
      <p style="margin:24px 0;">
        <a href="${link}" style="background:#C99A3B; color:#161513; text-decoration:none; font-weight:bold; padding:12px 20px; border-radius:8px; display:inline-block;">
          Restablecer mi contraseña
        </a>
      </p>
      <p style="font-size:13px; color:#9A9382; line-height:1.6; margin:0;">
        Si no fuiste tú, ignora este correo: tu contraseña sigue igual.
      </p>
    </div>`;
    return this.enviar({
      to,
      subject: 'Restablece tu contraseña — El Monote te Guía',
      html,
    });
  }

  /**
   * Confirmación de compra: junta el recibo (qué compró, cuánto, vigencia) y el
   * aviso de que su acceso ya está listo, con un botón para entrar. Es UN solo
   * correo porque ambas cosas pasan en el mismo momento (pago aprobado → acceso
   * otorgado); dos correos a la vez serían spam.
   */
  async enviarCompraConfirmada(opts: {
    to: string;
    nombre: string;
    paqueteTitulo: string;
    precio: number;
    ciclo: string;
    /**
     * Sólo en el flujo "datos y luego pagar": enlace para DEFINIR la contraseña.
     * Cuando viene, la contraseña tecleada en el formulario de compra ya quedó
     * anulada y este enlace es la única forma de entrar — así la cuenta pagada
     * es de quien controla el correo, no de quien llenó el formulario.
     */
    definirPasswordLink?: string;
  }) {
    const entrar =
      opts.definirPasswordLink ??
      `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/login`;
    const precioTxt = `$${opts.precio.toLocaleString('es-MX')} MXN`;
    const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 520px; margin: 0 auto; background:#161513; color:#F7F3EA; padding:32px; border-radius:12px;">
      <h1 style="color:#C99A3B; font-size:20px; margin:0 0 12px;">El Monote te Guía</h1>
      <p style="font-size:15px; line-height:1.6; margin:0 0 8px;">
        ¡Gracias por tu compra, ${opts.nombre}! Tu acceso ya está listo.
      </p>
      <div style="border:1px solid #3D3A34; border-radius:8px; padding:16px; margin:20px 0;">
        <p style="font-size:12px; color:#9A9382; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px;">Recibo</p>
        <p style="font-size:15px; margin:0 0 4px;"><strong>${opts.paqueteTitulo}</strong></p>
        <p style="font-size:15px; margin:0 0 4px;">${precioTxt}</p>
        <p style="font-size:13px; color:#9A9382; margin:0;">Acceso para la convocatoria ${opts.ciclo}.</p>
      </div>
      <p style="margin:24px 0;">
        <a href="${entrar}" style="background:#C99A3B; color:#161513; text-decoration:none; font-weight:bold; padding:12px 20px; border-radius:8px; display:inline-block;">
          ${opts.definirPasswordLink ? 'Definir mi contraseña y entrar' : 'Entrar a mi cuenta'}
        </a>
      </p>
      <p style="font-size:13px; color:#9A9382; line-height:1.6; margin:0;">
        ${
          opts.definirPasswordLink
            ? 'Por seguridad, la contraseña de tu cuenta se define desde este botón, no desde el formulario de compra. El enlace es tuyo y vence en 7 días; si se te pasa, usa «Olvidé mi contraseña» con este mismo correo.'
            : 'Inicia sesión con el correo y la contraseña que registraste al comprar.'
        }
      </p>
    </div>`;
    return this.enviar({
      to: opts.to,
      subject: `Compra confirmada: ${opts.paqueteTitulo} — El Monote te Guía`,
      html,
    });
  }
}
