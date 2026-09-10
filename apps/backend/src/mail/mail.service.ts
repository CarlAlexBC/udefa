import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
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
export class MailService implements OnModuleInit {
  private readonly logger = new Logger(MailService.name);

  private readonly resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

  private readonly from =
    process.env.MAIL_FROM ?? 'El Monote te Guía <onboarding@resend.dev>';

  /**
   * Avisa AL ARRANCAR si el correo no va a salir.
   *
   * Antes esto sólo se sabía cuando alguien intentaba mandar un correo, o sea
   * cuando ya era tarde: el aviso quedaba enterrado entre los registros del día.
   * Y el modo consola falla en silencio del lado del cliente — el aspirante paga
   * y no le llega el recibo. Que se vea al levantar el servidor.
   */
  onModuleInit() {
    if (this.resend) {
      this.logger.log(`Correo ACTIVO. Remitente: ${this.from}`);
      return;
    }
    this.logger.warn(
      'Correo en MODO CONSOLA: falta RESEND_API_KEY, así que NO se enviará ' +
        'ningún correo (ni recibo de compra, ni recuperar contraseña).',
    );
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
   * Envuelve el fragmento en un documento HTML completo (doctype + head con
   * charset). Un <div> suelto sin documento alrededor lo sanitiza cada
   * cliente a su manera — así fue como Gmail se comió el ancho fijado en la
   * imagen de la cadete y la mostró a su resolución completa (440px) en vez
   * de los 110px puestos en el <img>.
   */
  private envolverDocumento(cuerpo: string): string {
    return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0; padding:0;">
${cuerpo}
</body>
</html>`;
  }

  /**
   * Encabezado tipo insignia para los correos de recordatorio: la cadete en
   * miniatura junto a una etiqueta en oliva (mismo lenguaje que las tarjetas
   * de fase del panel: "FASE 01/02/03") y el nombre de la marca. Se usa
   * `<table>` en vez de flex/grid porque es lo único que Outlook de
   * escritorio soporta de forma confiable en correo.
   *
   * Colores del sistema de diseño acordado (no inventar otros):
   * carbón #161513, crema #F7F3EA, latón #C99A3B, oliva militar #4B5121,
   * piedra #6B6659.
   */
  private encabezado(imagen: string, etiqueta: string): string {
    const sello = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/marca/sello.png`;
    return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td width="72" style="vertical-align:top;">
          <img src="${imagen}" alt="Cadete de El Monote te Guía" width="72" height="90" style="display:block; width:72px; height:90px; border-radius:8px;" />
        </td>
        <td style="vertical-align:top; padding-left:16px;">
          <p style="margin:0; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:#C99A3B; background:transparent; border:1px solid #C99A3B; display:inline-block; padding:5px 14px; border-radius:999px;">${etiqueta}</p>
          <h1 style="margin:10px 0 0; font-size:19px; font-weight:600; color:#F7F3EA;">El Monote te Guía</h1>
        </td>
        <td width="56" style="vertical-align:top; text-align:right;">
          <img src="${sello}" alt="Sello El Monote te Guía" width="56" height="56" style="display:block; width:56px; height:56px; margin-left:auto;" />
        </td>
      </tr>
    </table>`;
  }

  /**
   * Tarjeta de los correos de recordatorio. Se probaron 3 formas de ponerle
   * un sello institucional tenue de fondo (background-image en un <div>,
   * el atributo HTML `background` en una celda de tabla, y una <img> con
   * position:absolute) — las 3 se rompieron distinto en Gmail, así que se
   * descartó: esta tarjeta se queda sin decoración de fondo, solo el borde
   * superior en oliva.
   */
  private tarjeta(contenidoInterno: string): string {
    return `
    <div style="max-width:520px; margin:0 auto; font-family: Arial, Helvetica, sans-serif; background-color:#161513; border-radius:16px; border-top:4px solid #4B5121; overflow:hidden;">
      ${contenidoInterno}
    </div>`;
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
  }) {
    const entrar = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/login`;
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
          Entrar a mi cuenta
        </a>
      </p>
      <p style="font-size:13px; color:#9A9382; line-height:1.6; margin:0;">
        Inicia sesión con el correo y la contraseña que registraste al comprar.
      </p>
    </div>`;
    return this.enviar({
      to: opts.to,
      subject: `Compra confirmada: ${opts.paqueteTitulo} — El Monote te Guía`,
      html,
    });
  }

  /**
   * Recordatorio 1 (≈3 horas de compra sin completar). Tono bajo: solo un
   * enlace para retomar donde se quedó, sin presión.
   */
  async enviarRecordatorioCompra1(opts: {
    to: string;
    nombre: string;
    paqueteTitulo: string;
  }) {
    const retomar = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/precios`;
    const imagen = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/cadete/acompana-correo.png`;
    const html = this.tarjeta(`
      <div style="padding:28px 32px 4px;">
        ${this.encabezado(imagen, 'Recordatorio')}
      </div>
      <div style="padding:12px 32px 32px; color:#F7F3EA;">
        <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
          Hola ${opts.nombre}. Notamos que comenzaste tu proceso de preparación para <strong>${opts.paqueteTitulo}</strong>, y nos encantaría acompañarte a completarlo. Con tu acceso podrás avanzar con un simulador apegado al examen real y un panel que te muestra, paso a paso, en qué enfocar tu estudio.
        </p>
        <p style="margin:24px 0 16px;">
          <a href="${retomar}" style="background:#C99A3B; color:#161513; text-decoration:none; font-weight:bold; padding:12px 22px; border-radius:8px; display:inline-block;">
            Continuar mi preparación
          </a>
        </p>
        <p style="font-size:13px; color:#6B6659; line-height:1.6; margin:0;">
          Si tuviste alguna duda durante el proceso, responde este correo: con gusto te orientamos.
        </p>
      </div>
    `);
    return this.enviar({
      to: opts.to,
      subject: 'Tu proceso de preparación te espera — El Monote te Guía',
      html: this.envolverDocumento(html),
    });
  }

  /**
   * Recordatorio 2 (≈24 horas). Va acompañado de una cuenta de prueba de 60
   * minutos del módulo psicológico (la crea UsuariosService.crearCuentaPrueba
   * PorAbandono), así que aquí solo se entregan las credenciales que ese
   * método ya generó — este correo no crea nada por su cuenta.
   */
  async enviarRecordatorioCompraConPrueba(opts: {
    to: string;
    nombre: string;
    paqueteTitulo: string;
    passwordPrueba: string;
  }) {
    const entrar = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/login`;
    const retomar = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/precios`;
    const imagen = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/cadete/presenta-correo.png`;
    const html = this.tarjeta(`
      <div style="padding:28px 32px 4px;">
        ${this.encabezado(imagen, 'Acceso de prueba')}
      </div>
      <div style="padding:12px 32px 32px; color:#F7F3EA;">
        <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
          Hola ${opts.nombre}. El examen psicológico (Psicométrico, Personalidad y Axiológico) lo armamos con apoyo de psicólogos militares y con la experiencia de haber presentado el proceso real de admisión. Su panel de resultados no se queda en calificarte: identifica los patrones detrás de tus respuestas y te remite a la sección exacta de la Guía del Aspirante que conviene reforzar.
        </p>
        <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
          Para que lo conozcas antes de decidir, habilitamos especialmente para ti un acceso de prueba por 60 minutos a este módulo.
        </p>
        <div style="border:1px solid #4B5121; border-radius:8px; padding:16px; margin:20px 0;">
          <p style="font-size:12px; color:#C99A3B; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px; font-weight:600;">Tu acceso de prueba</p>
          <p style="font-size:15px; margin:0 0 4px;"><strong>Correo:</strong> ${opts.to}</p>
          <p style="font-size:15px; margin:0;"><strong>Contraseña:</strong> ${opts.passwordPrueba}</p>
        </div>
        <p style="margin:24px 0 16px;">
          <a href="${entrar}" style="background:#C99A3B; color:#161513; text-decoration:none; font-weight:bold; padding:12px 22px; border-radius:8px; display:inline-block;">
            Explorar el examen psicológico
          </a>
        </p>
        <p style="font-size:13px; color:#6B6659; line-height:1.6; margin:0;">
          Cuando decidas continuar, tu proceso de ${opts.paqueteTitulo} sigue disponible:
          <a href="${retomar}" style="color:#C99A3B;">continúa aquí</a>.
        </p>
      </div>
    `);
    return this.enviar({
      to: opts.to,
      subject: 'Conoce tu preparación por dentro, antes de decidir',
      html: this.envolverDocumento(html),
    });
  }

  /**
   * Recordatorio 3 (≈72 horas). A propósito sin fecha de corte ni tono de
   * ultimátum: es una invitación a retomar cuando decida, no una amenaza de
   * que se le va a dejar de escribir (el corte de 7 días es un límite
   * técnico interno, no algo que el aspirante necesite leer).
   */
  async enviarRecordatorioCompra3(opts: {
    to: string;
    nombre: string;
    paqueteTitulo: string;
  }) {
    const retomar = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/precios`;
    const imagen = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/cadete/confianza-correo.png`;
    const html = this.tarjeta(`
      <div style="padding:28px 32px 4px;">
        ${this.encabezado(imagen, 'Sin presión')}
      </div>
      <div style="padding:12px 32px 32px; color:#F7F3EA;">
        <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
          Hola ${opts.nombre}. Queremos que tomes esta decisión con calma y confianza, no bajo presión. Si tu interés en prepararte con <strong>${opts.paqueteTitulo}</strong> continúa, seguimos aquí para acompañarte en el momento en que decidas retomarlo.
        </p>
        <p style="font-size:15px; line-height:1.6; margin:0 0 16px;">
          Tu preparación incluye el simulacro cronometrado, tal como se vive el día del examen, y un panel de resultados que no solo califica: identifica tus patrones y te dice exactamente qué capítulo de la Guía del Aspirante conviene reforzar. Es el mismo método con el que nació este proyecto, construido con apoyo de psicólogos militares y la experiencia de haber presentado el proceso real de admisión.
        </p>
        <p style="margin:24px 0 0;">
          <a href="${retomar}" style="background:#C99A3B; color:#161513; text-decoration:none; font-weight:bold; padding:12px 22px; border-radius:8px; display:inline-block;">
            Continuar mi preparación
          </a>
        </p>
      </div>
    `);
    return this.enviar({
      to: opts.to,
      subject: `Tu preparación para ${opts.paqueteTitulo} sigue disponible`,
      html: this.envolverDocumento(html),
    });
  }
}
