import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { PlantelesModule } from './planteles/planteles.module';
import { ExamenesModule } from './examenes/examenes.module';
import { BloquesModule } from './bloques/bloques.module';
import { ReactivosModule } from './reactivos/reactivos.module';

@Module({
  imports: [UsuariosModule, AuthModule, PlantelesModule, ExamenesModule, BloquesModule, ReactivosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
