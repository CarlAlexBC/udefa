const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');
const {
  RecordatoriosCompraService,
} = require('../dist/recordatorios-compra/recordatorios-compra.service');

const compraId = Number(process.argv[2]);
const numero = Number(process.argv[3]);

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['warn', 'error'],
  });
  const servicio = app.get(RecordatoriosCompraService);
  const resultado = await servicio.forzarRecordatorio(compraId, numero);
  console.log('RESULTADO:', JSON.stringify(resultado, null, 2));
  await app.close();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('ERROR:', err);
    process.exit(1);
  });
