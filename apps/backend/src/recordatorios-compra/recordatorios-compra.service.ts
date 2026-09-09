import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { PAQUETES, Paquete } from '../pagos/pagos.service';

const HORA_MS = 60 * 60 * 1000;
const TRES_HORAS_MS = 3 * HORA_MS;
const VEINTICUATRO_HORAS_MS = 24 * HORA_MS;
const SETENTA_Y_DOS_HORAS_MS = 72 * HORA_MS;
const SIETE_DIAS_MS = 7 * 24 * HORA_MS;

type CompraParaRecordatorio = {
  id: number;
  nombre: string;
  email: string;
  paquete: string;
  createdAt: Date;
  recordatorio1EnviadoEn: Date | null;
  recordatorio2EnviadoEn: Date | null;
  recordatorio3EnviadoEn: Date | null;
};

/**
 * Recordatorios por correo a quien empezó una compra y no la terminó.
 *
 * Corre cada hora y revisa las `CompraPendiente` sin usar (`usadaEn: null`).
 * Por cada una, según cuántas horas lleva y qué correo ya se le mandó
 * (los campos `recordatorioNEnviadoEn`), dispara el que toca:
 *   - 3h  -> correo 1 (recordatorio simple)
 *   - 24h -> correo 2 (+ cuenta de prueba psicológica de 60 min)
 *   - 72h -> correo 3 (última llamada)
 *
 * Pasados 7 días se deja de insistir aunque falte alguno por mandar — así,
 * si el cron estuvo caído un rato, no manda de golpe los tres correos viejos
 * cuando vuelva a correr.
 */
@Injectable()
export class RecordatoriosCompraService {
  private readonly logger = new Logger(RecordatoriosCompraService.name);

  constructor(
    private prisma: PrismaService,
    private mail: MailService,
    private usuarios: UsuariosService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async revisarComprasSinCompletar() {
    const corteLimite = new Date(Date.now() - SIETE_DIAS_MS);

    const compras = await this.prisma.compraPendiente.findMany({
      where: {
        usadaEn: null,
        createdAt: { gte: corteLimite },
      },
      select: {
        id: true,
        nombre: true,
        email: true,
        paquete: true,
        createdAt: true,
        recordatorio1EnviadoEn: true,
        recordatorio2EnviadoEn: true,
        recordatorio3EnviadoEn: true,
      },
    });

    for (const compra of compras) {
      // Cada compra se procesa aislada: si UNA falla (correo caído, un
      // destinatario que Resend rechaza, etc.) no debe tumbar el lote entero
      // ni dejar sin su recordatorio a las demás compras de esta corrida.
      try {
        await this.procesarCompra(compra);
      } catch (err) {
        this.logger.error(
          `Compra ${compra.id}: falló al procesar su recordatorio.`,
          err instanceof Error ? err.stack : String(err),
        );
      }
    }
  }

  private async procesarCompra(compra: CompraParaRecordatorio) {
    const edadMs = Date.now() - compra.createdAt.getTime();
    if (edadMs >= TRES_HORAS_MS && !compra.recordatorio1EnviadoEn) {
      await this.enviarCorreo1(compra);
    }
    if (edadMs >= VEINTICUATRO_HORAS_MS && !compra.recordatorio2EnviadoEn) {
      await this.enviarCorreo2ConPrueba(compra);
    }
    if (edadMs >= SETENTA_Y_DOS_HORAS_MS && !compra.recordatorio3EnviadoEn) {
      await this.enviarCorreo3(compra);
    }
  }

  /**
   * Fuerza UNO de los 3 recordatorios para una compra puntual, sin importar
   * cuánto tiempo lleve ni si ya se le mandó antes. Es la forma de probar las
   * plantillas y la cuenta de prueba con un correo controlado (el tuyo, por
   * ejemplo: empieza una compra de verdad en el sitio con tu correo y no la
   * pagues) en vez de esperar 3/24/72 horas reales.
   */
  async forzarRecordatorio(compraId: number, numero: 1 | 2 | 3) {
    const compra = await this.prisma.compraPendiente.findUnique({
      where: { id: compraId },
      select: {
        id: true,
        nombre: true,
        email: true,
        paquete: true,
        createdAt: true,
        recordatorio1EnviadoEn: true,
        recordatorio2EnviadoEn: true,
        recordatorio3EnviadoEn: true,
      },
    });
    if (!compra) {
      throw new NotFoundException(`No existe la compra pendiente ${compraId}.`);
    }

    if (numero === 1) return this.enviarCorreo1(compra);
    if (numero === 2) return this.enviarCorreo2ConPrueba(compra);
    if (numero === 3) return this.enviarCorreo3(compra);
    throw new BadRequestException('numero debe ser 1, 2 o 3.');
  }

  private tituloDe(compra: CompraParaRecordatorio) {
    return PAQUETES[compra.paquete as Paquete]?.titulo ?? compra.paquete;
  }

  private async enviarCorreo1(compra: CompraParaRecordatorio) {
    await this.mail.enviarRecordatorioCompra1({
      to: compra.email,
      nombre: compra.nombre,
      paqueteTitulo: this.tituloDe(compra),
    });
    await this.prisma.compraPendiente.update({
      where: { id: compra.id },
      data: { recordatorio1EnviadoEn: new Date() },
    });
    return { enviado: 'correo 1', to: compra.email };
  }

  private async enviarCorreo2ConPrueba(compra: CompraParaRecordatorio) {
    const cuenta = await this.usuarios.crearCuentaPruebaPorAbandono(compra.id);
    if (cuenta.creada && cuenta.password) {
      await this.mail.enviarRecordatorioCompraConPrueba({
        to: compra.email,
        nombre: compra.nombre,
        paqueteTitulo: this.tituloDe(compra),
        passwordPrueba: cuenta.password,
      });
    } else {
      // El correo ya tiene cuenta (de un intento previo, o se registró por
      // otro lado) — no hay credenciales de prueba que darle. No se repite
      // el intento cada hora: igual se marca el campo abajo.
      this.logger.log(
        `Compra ${compra.id}: se omite la cuenta de prueba, ${compra.email} ya tiene una cuenta.`,
      );
    }
    await this.prisma.compraPendiente.update({
      where: { id: compra.id },
      data: { recordatorio2EnviadoEn: new Date() },
    });
    return {
      enviado: 'correo 2',
      to: compra.email,
      cuentaPruebaCreada: cuenta.creada,
    };
  }

  private async enviarCorreo3(compra: CompraParaRecordatorio) {
    await this.mail.enviarRecordatorioCompra3({
      to: compra.email,
      nombre: compra.nombre,
      paqueteTitulo: this.tituloDe(compra),
    });
    await this.prisma.compraPendiente.update({
      where: { id: compra.id },
      data: { recordatorio3EnviadoEn: new Date() },
    });
    return { enviado: 'correo 3', to: compra.email };
  }
}
