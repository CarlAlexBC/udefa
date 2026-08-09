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
}
