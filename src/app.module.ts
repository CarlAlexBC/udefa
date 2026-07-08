import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { PlantelesModule } from './planteles/planteles.module';

@Module({
  imports: [UsuariosModule, AuthModule, PlantelesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
