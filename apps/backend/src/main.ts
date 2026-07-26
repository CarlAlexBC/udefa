import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Cabeceras de seguridad estándar (anti-clickjacking, no-sniff, etc.).
  // Va lo más arriba posible para que cubra todas las respuestas.
  app.use(helmet());
  // Subir el limite de body para permitir cargas masivas de reactivos
  // (personalidad manda ~1 MB de una sola vez con 2,829 reactivos)
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // Qué páginas web pueden hablarle al backend. Se lee de CORS_ORIGIN (una o
  // varias direcciones separadas por coma) y cae a localhost:3000 en desarrollo.
  // Así, al subir a producción, sólo hay que poner el dominio real en el .env
  // del servidor — sin tocar código.
  const origins = (process.env.CORS_ORIGIN ?? 'http://localhost:3000')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  app.enableCors({
    origin: origins,
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();