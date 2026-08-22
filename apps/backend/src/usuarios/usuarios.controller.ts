import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { CrearCuentaPruebaDto } from './dto/crear-cuenta-prueba.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UsuarioActual } from '../auth/decorators/usuario-actual.decorator';
// Importado como type porque es una interface (no una class) y TS con
// `isolatedModules` + `emitDecoratorMetadata` rechaza usarla en la firma
// de un parámetro decorado si no viene de un import type.
import type { UsuarioAutenticado } from '../auth/decorators/usuario-actual.decorator';

/** La convocatoria a la que se amarran los accesos que se dan desde aquí. */
const CICLO = '2027';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  // Crear cuenta: SOLO admin (cortesías / cuentas manuales). El registro público
  // gratuito se retiró — una cuenta nueva nace al comprar (registrar-y-pagar) o
  // la crea un admin aquí. Así la base no se llena de cuentas sin compra.
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('registro')
  registrar(@Body() datos: CrearUsuarioDto) {
    return this.usuariosService.registrar(datos);
  }

  /**
   * Asigna (o cambia) el plantel del usuario autenticado.
   * Útil para migrar usuarios legacy que se registraron antes de que el
   * campo `plantelId` fuera obligatorio.
   */
  @UseGuards(JwtAuthGuard)
  @Patch('mi-plantel')
  asignarMiPlantel(
    @Request() req: { user: { id: number } },
    @Body() datos: { plantelId: number },
  ) {
    return this.usuariosService.asignarPlantel(req.user.id, datos.plantelId);
  }

  /* ═══════════════════════════════════════════════════════════
     Endpoints admin
     ═══════════════════════════════════════════════════════════ */

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  listarParaAdmin(
    @Query('take') take?: string,
    @Query('skip') skip?: string,
    @Query('search') search?: string,
  ) {
    return this.usuariosService.listarParaAdmin({
      take: take ? Number(take) : undefined,
      skip: skip ? Number(skip) : undefined,
      search: search || undefined,
    });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id/rol')
  cambiarRol(
    @Param('id') id: string,
    @Body() datos: { rol: string },
    @UsuarioActual() admin: UsuarioAutenticado,
  ) {
    return this.usuariosService.cambiarRol(Number(id), datos.rol, admin);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id/plantel')
  cambiarPlantelDeUsuario(
    @Param('id') id: string,
    @Body() datos: { plantelId: number },
  ) {
    return this.usuariosService.cambiarPlantelDeUsuario(
      Number(id),
      datos.plantelId,
    );
  }

  /**
   * Alta de cuenta a mano desde el panel. Devuelve la contraseña generada UNA
   * vez; el panel la muestra y avisa de que no se vuelve a ver.
   *
   * OJO AL PONER DECORADORES AQUÍ: los `@UseGuards`/`@Roles` de arriba pertenecen
   * al método que les sigue INMEDIATAMENTE. Al añadir este endpoint se coló entre
   * ellos y el de "cuenta de prueba", y lo dejó sin protección — compilando igual.
   * Cada endpoint lleva los suyos, pegados a su propio @Post.
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  crearDesdePanel(
    @Body()
    body: { nombre: string; email: string; plantelId?: number; rol?: string },
  ) {
    return this.usuariosService.crearCuentaDesdePanel(body);
  }

  /**
   * Crea una CUENTA DE PRUEBA: sirve unos minutos y se acaba sola.
   *
   * Devuelve el correo y la contraseña EN CLARO una única vez — es la única
   * forma de podérselos pasar a quien va a probar. No se guardan así en ningún
   * lado; en la base la contraseña va cifrada como la de cualquiera.
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('prueba')
  crearCuentaDePrueba(@Body() datos: CrearCuentaPruebaDto) {
    return this.usuariosService.crearCuentaDePrueba({
      plantelId: datos.plantelId,
      modulos: datos.modulos,
      minutos: datos.minutos,
      ciclo: CICLO,
      nombre: datos.nombre,
    });
  }

  /**
   * Borra una cuenta y todo su historial. No tiene vuelta atrás.
   *
   * Recibe quién lo pide para impedir que un admin se borre a sí mismo y deje
   * el panel sin dueño (ver UsuariosService.eliminar).
   */
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  eliminar(
    @Param('id', ParseIntPipe) id: number,
    @UsuarioActual() admin: UsuarioAutenticado,
  ) {
    return this.usuariosService.eliminar(id, admin.id);
  }
}
