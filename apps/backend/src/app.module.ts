import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { PlantelesModule } from './planteles/planteles.module';
import { ExamenesModule } from './examenes/examenes.module';
import { BloquesModule } from './bloques/bloques.module';
import { ReactivosModule } from './reactivos/reactivos.module';
import { IntentosModule } from './intentos/intentos.module';
import { RepasosModule } from './repasos/repasos.module';
import { SesionesCompletasModule } from './sesiones-completas/sesiones-completas.module';
import { TemasPrioridadModule } from './temas-prioridad/temas-prioridad.module';
import { AdminModule } from './admin/admin.module';
import { CulturalModule } from './cultural/cultural.module';
import { AccesoModule } from './acceso/acceso.module';
import { PagosModule } from './pagos/pagos.module';
import { TemariosModule } from './temarios/temarios.module';
import { MuestraModule } from './muestra/muestra.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    // Freno general contra abuso: 200 peticiones por minuto desde una misma
    // dirección IP. Es holgado a propósito — un aspirante contestando su examen
    // no se acerca a ese número. El login lleva su propio freno, mucho más
    // estricto, declarado en su controlador con @Throttle. (ttl va en ms.)
    ThrottlerModule.forRoot([{ ttl: 60000, limit: Number(process.env.THROTTLE_LIMIT ?? 200) }]),
    UsuariosModule, AuthModule, PlantelesModule, ExamenesModule, BloquesModule, ReactivosModule, IntentosModule, RepasosModule, SesionesCompletasModule, TemasPrioridadModule, AdminModule, CulturalModule, TemariosModule, AccesoModule, PagosModule, MuestraModule, MailModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    // Registra el freno como guardia GLOBAL: vigila todas las rutas sin tener
    // que anotarlas una por una.
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
