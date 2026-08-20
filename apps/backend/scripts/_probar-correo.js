/**
 * Prueba que el correo SALE de verdad.
 *
 * Se corre después de pegar RESEND_API_KEY en el .env, para no descubrir en
 * plena venta que los correos no salían. Manda un correo real usando el mismo
 * remitente que usará la plataforma.
 *
 *   node scripts/_probar-correo.js tucorreo@ejemplo.com
 *
 * OJO con la cuenta nueva de Resend: mientras NO tengas un dominio propio
 * verificado, Resend sólo deja mandar desde onboarding@resend.dev y sólo
 * ENTREGA al correo con el que abriste la cuenta. Si pruebas con otra dirección
 * te va a rebotar, y no es culpa del código.
 */
require('dotenv').config();
const { Resend } = require('resend');

const destino = process.argv[2];
const llave = process.env.RESEND_API_KEY;
const remitente =
  process.env.MAIL_FROM || 'El Monote te Guía <onboarding@resend.dev>';

if (!destino) {
  console.error('Falta a quién mandárselo:\n  node scripts/_probar-correo.js tucorreo@ejemplo.com');
  process.exit(1);
}
if (!llave) {
  console.error(
    'No hay RESEND_API_KEY en el .env — el backend está en MODO CONSOLA y no manda nada.\n' +
      'Pega la llave (empieza con "re_") en apps/backend/.env y vuelve a correr esto.',
  );
  process.exit(1);
}

(async () => {
  console.log('Remitente :', remitente);
  console.log('Destino   :', destino);
  const { data, error } = await new Resend(llave).emails.send({
    from: remitente,
    to: destino,
    subject: 'Prueba de correo — El Monote te Guía',
    html:
      '<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;background:#161513;color:#F7F3EA;padding:32px;border-radius:12px">' +
      '<h1 style="color:#C99A3B;font-size:20px;margin:0 0 12px">El Monote te Guía</h1>' +
      '<p style="font-size:15px;line-height:1.6;margin:0">Si estás leyendo esto, el correo de la plataforma ya funciona. ' +
      'Los recibos de compra y los enlaces para definir contraseña van a llegar.</p></div>',
  });

  if (error) {
    console.error('\n❌ NO se pudo enviar:', JSON.stringify(error, null, 2));
    console.error('\nLo más común: el dominio del remitente no está verificado, o el destino');
    console.error('no es el correo de tu cuenta de Resend (limitación de las cuentas sin dominio).');
    process.exit(1);
  }
  console.log('\n✅ Enviado. Id:', data && data.id);
  console.log('Revisa la bandeja (y la carpeta de spam la primera vez).');
})();
