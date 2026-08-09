import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';

/**
 * Módulo de correo. `@Global()` para que cualquier módulo (auth, pagos…)
 * pueda inyectar `MailService` sin tener que importar MailModule cada vez.
 */
@Global()
@Module({
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
