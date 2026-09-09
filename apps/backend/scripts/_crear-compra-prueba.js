const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');
const { PrismaService } = require('../dist/prisma/prisma.service');
const bcrypt = require('bcrypt');

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['warn', 'error'],
  });
  const prisma = app.get(PrismaService);
  const compra = await prisma.compraPendiente.create({
    data: {
      nombre: 'Prueba recordatorios',
      email: 'elmonoteteguia@gmail.com',
      password: await bcrypt.hash('prueba-temporal-1234', 10),
      paquete: 'completa',
      ciclo: '2027',
    },
  });
  console.log('COMPRA CREADA:', JSON.stringify({ id: compra.id, email: compra.email }, null, 2));
  await app.close();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('ERROR:', err);
    process.exit(1);
  });
