import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { OtorgarAccesoDto } from './otorgar-acceso.dto';
import { ActualizarMateriaDto } from '../../temarios/dto/actualizar-materia.dto';
import { ActualizarTemaDto } from '../../temas-prioridad/dto/actualizar-tema.dto';
import { GuardarExplicacionDto } from '../../explicaciones/dto/guardar-explicacion.dto';
import { ConfirmarPagoDto } from '../../pagos/dto/confirmar-pago.dto';
import { CrearPreferenciaDto } from '../../pagos/dto/crear-preferencia.dto';

/**
 * Estos DTO son la puerta de entrada de las pantallas del panel admin y del
 * flujo de pago. Si uno se pone más estricto de la cuenta, la pantalla deja de
 * guardar y no se nota hasta que alguien lo usa.
 *
 * Por eso aquí se prueba con los cuerpos EXACTOS que manda hoy el frontend,
 * copiados de sus llamadas. Si alguien endurece un DTO de más, esta prueba
 * truena antes que la pantalla.
 */
async function errores(cls: any, cuerpo: unknown): Promise<string[]> {
  const dto = plainToInstance(cls, cuerpo);
  const fallas = await validate(dto as object);
  return fallas.map((f) => f.property);
}

describe('DTOs contra lo que manda el frontend de verdad', () => {
  it('acepta el cuerpo de "dar acceso" del panel de usuarios', async () => {
    // app/inicio/admin/usuarios/page.tsx
    expect(
      await errores(OtorgarAccesoDto, {
        usuarioId: 77,
        modulos: ['cultural'],
        ciclo: '2027',
        expiraEn: '2027-06-30T23:59:59',
        origen: 'manual',
      }),
    ).toEqual([]);
  });

  it('acepta un acceso sin caducidad ni origen', async () => {
    expect(
      await errores(OtorgarAccesoDto, {
        usuarioId: 1,
        modulos: ['psicologico'],
        ciclo: '2027',
        expiraEn: null,
      }),
    ).toEqual([]);
  });

  it('acepta el auto-save del reparto de temarios', async () => {
    // app/inicio/admin/temarios/page.tsx
    expect(await errores(ActualizarMateriaDto, { numPreguntas: 34 })).toEqual([]);
  });

  it('acepta los cambios parciales de temas prioritarios', async () => {
    // app/inicio/admin/temas-prioridad/TablaPrioridades.tsx manda sólo lo que cambió
    expect(await errores(ActualizarTemaDto, { peso: 7 })).toEqual([]);
    expect(await errores(ActualizarTemaDto, { descripcion: 'algo' })).toEqual([]);
    expect(await errores(ActualizarTemaDto, {})).toEqual([]);
  });

  it('acepta el guardado de "Entiende el tema"', async () => {
    expect(
      await errores(GuardarExplicacionDto, {
        contenido: '# Título\n\nExplicación del capítulo.',
        estado: 'PUBLICADO',
      }),
    ).toEqual([]);
  });

  it('acepta el cuerpo de la pantalla de pago exitoso', async () => {
    expect(await errores(ConfirmarPagoDto, { paymentId: '1234567890' })).toEqual([]);
    expect(await errores(CrearPreferenciaDto, { paquete: 'completa' })).toEqual([]);
  });
});

describe('DTOs rechazando lo que no debe pasar', () => {
  it('rechaza un peso fuera de 1..10', async () => {
    expect(await errores(ActualizarTemaDto, { peso: 99 })).toEqual(['peso']);
  });

  it('rechaza un numPreguntas negativo o que no es entero', async () => {
    expect(await errores(ActualizarMateriaDto, { numPreguntas: -5 })).toEqual(['numPreguntas']);
    expect(await errores(ActualizarMateriaDto, { numPreguntas: 3.5 })).toEqual(['numPreguntas']);
  });

  it('rechaza un estado de explicación inventado', async () => {
    expect(
      await errores(GuardarExplicacionDto, { contenido: 'x', estado: 'PUBLICADISIMO' }),
    ).toEqual(['estado']);
  });

  it('rechaza dar acceso sin usuarioId', async () => {
    expect(
      await errores(OtorgarAccesoDto, { modulos: ['cultural'], ciclo: '2027' }),
    ).toEqual(['usuarioId']);
  });
});
