const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');
const { MailService } = require('../dist/mail/mail.service');

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['warn', 'error'],
  });
  const mail = app.get(MailService);
  const opts = {
    to: 'elmonoteteguia@gmail.com',
    nombre: 'Prueba recordatorios',
    paqueteTitulo: 'Preparación Completa',
  };
  await mail.enviarRecordatorioCompra1(opts);
  await mail.enviarRecordatorioCompraConPrueba({ ...opts, passwordPrueba: 'monote-4821' });
  await mail.enviarRecordatorioCompra3(opts);
  console.log('Los 3 correos de previsualización se enviaron.');
  await app.close();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('ERROR:', err);
    process.exit(1);
  });
