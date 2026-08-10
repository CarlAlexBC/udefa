import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import * as bcrypt from 'bcrypt';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';

/**
 * Examen de personalidad, de punta a punta y por HTTP.
 *
 * Las fases 3, 4 y el protocolo de críticos se habían validado por piezas —
 * simulaciones sobre datos reales y pruebas unitarias— pero el camino completo
 * nunca se había recorrido, porque el endpoint pide sesión iniciada. Eso dejaba
 * sin comprobar justo lo que le pasa a un aspirante de verdad.
 *
 * Este test recorre: login → armar examen → crear intento → responder →
 * finalizar → resultados.
 *
 * **Escribe en la base real.** Crea su propio usuario con correo único y borra
 * todo lo que creó al terminar. No toca ningún dato que no haya creado él
 * mismo: los ids se guardan al crearlos y la limpieza va por id, nunca por
 * criterio amplio.
 */
describe('Examen de personalidad (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const PASSWORD = 'prueba-e2e-Segura123';
  const EMAIL = `e2e-personalidad-${Date.now()}@prueba.local`;

  let usuarioId: number;
  let examenId: number;
  let intentoId: number;
  let token: string;

  /** Reactivos que el muestreo mandó a este examen, con su metadata. */
  let reactivos: Array<{
    id: number;
    eje: number | null;
    numeroEnEje: number | null;
    parNumero: number | null;
    polaridad: string | null;
    esCritico: boolean;
    tipoTrampa: string | null;
  }>;

  /** El crítico de crisis al que vamos a contestar que sí, si el muestreo lo trajo. */
  let criticoDeCrisis: { id: number; polaridad: string | null } | null = null;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();

    prisma = app.get(PrismaService);

    const usuario = await prisma.usuario.create({
      data: {
        nombre: 'Prueba E2E',
        email: EMAIL,
        password: await bcrypt.hash(PASSWORD, 10),
      },
    });
    usuarioId = usuario.id;

    const examen = await prisma.examen.findFirst({
      where: { tipo: 'personalidad' },
    });
    if (!examen)
      throw new Error('No hay examen de tipo personalidad en la base');
    examenId = examen.id;
  }, 60_000);

  afterAll(async () => {
    // Limpieza por id, en orden inverso a la creación. Solo lo que creó el test.
    // Cada paso va protegido: si uno falla, los siguientes igual corren. Si no,
    // un error de limpieza deja datos de prueba tirados en la base real.
    const intentar = async (que: string, fn: () => Promise<unknown>) => {
      try {
        await fn();
      } catch (e) {
        console.error(
          `limpieza — falló ${que}:`,
          (e as Error).message.split('\n')[0],
        );
      }
    };

    if (intentoId) {
      await intentar('respuestas', () =>
        prisma.respuestaReactivo.deleteMany({
          where: { intentoExamenId: intentoId },
        }),
      );
      await intentar('intento', () =>
        prisma.intentoExamen.delete({ where: { id: intentoId } }),
      );
    }
    if (usuarioId) {
      await intentar('sesiones', () =>
        prisma.sesion.deleteMany({ where: { usuarioId } }),
      );
      await intentar('usuario', () =>
        prisma.usuario.delete({ where: { id: usuarioId } }),
      );
    }
    await app?.close();
  }, 60_000);

  it('inicia sesión y devuelve un token', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: EMAIL, password: PASSWORD })
      .expect(201);

    expect(res.body.access_token).toEqual(expect.any(String));
    expect(res.body.usuario.email).toBe(EMAIL);
    expect(res.body.usuario.password).toBeUndefined();
    token = res.body.access_token;
  });

  it('rechaza el examen sin token', async () => {
    await request(app.getHttpServer()).get('/intentos').expect(401);
  });

  it('arma el examen con reactivos del banco remaster', async () => {
    const res = await request(app.getHttpServer())
      .get(`/examenes/${examenId}/armar`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    const ids: number[] = res.body.bloques.flatMap((b: any) =>
      b.reactivos.map((r: any) => r.id),
    );
    expect(ids.length).toBeGreaterThan(0);

    reactivos = await prisma.reactivo.findMany({
      where: { id: { in: ids } },
      select: {
        id: true,
        eje: true,
        numeroEnEje: true,
        parNumero: true,
        polaridad: true,
        esCritico: true,
        tipoTrampa: true,
      },
    });

    // Todos vienen del banco remaster, no del v1.
    const bancos = await prisma.reactivo.findMany({
      where: { id: { in: ids } },
      select: { banco: true },
      distinct: ['banco'],
    });
    expect(bancos.map((b) => b.banco)).toEqual(['remaster']);
  }, 60_000);

  it('no manda ningún reactivo huérfano — la invariante de la Fase 3', () => {
    // Esta es la razón de ser del muestreo por unidades: si un afirmativo llega
    // sin su invertido, ese par no mide nada. Aquí se comprueba sobre el examen
    // que de verdad salió por HTTP, no sobre una simulación.
    const presentes = new Set(
      reactivos
        .filter((r) => r.eje !== null && r.numeroEnEje !== null)
        .map((r) => `${r.eje}:${r.numeroEnEje}`),
    );

    const huerfanos = reactivos.filter(
      (r) =>
        r.eje !== null &&
        r.parNumero !== null &&
        !presentes.has(`${r.eje}:${r.parNumero}`),
    );

    expect(huerfanos.map((r) => `e${r.eje}#${r.numeroEnEje}`)).toEqual([]);
  });

  it('crea el intento', async () => {
    const res = await request(app.getHttpServer())
      .post('/intentos')
      .set('Authorization', `Bearer ${token}`)
      .send({ examenId })
      .expect(201);

    expect(res.body.id).toEqual(expect.any(Number));
    expect(res.body.estado).toBe('EN_PROGRESO');
    intentoId = res.body.id;
  });

  it('responde todos los reactivos', async () => {
    // Se contesta en la dirección segura salvo un crítico de crisis, para que
    // el protocolo tenga algo que detectar y podamos comprobarlo de verdad.
    criticoDeCrisis =
      reactivos.find((r) => r.esCritico && (r.eje === 1 || r.eje === 2)) ??
      null;

    // El examen se arma al azar, así que hay que dejar dicho si el crítico
    // apareció. Sin esto, una corrida donde el muestreo no lo trajo se iría por
    // la rama trivial y pasaría en verde sin haber probado el protocolo.
    console.log(
      criticoDeCrisis
        ? `protocolo: se contesta "Sí" al crítico id=${criticoDeCrisis.id}`
        : 'protocolo: el muestreo no trajo ningún crítico de los ejes 1 o 2',
    );

    let ms = 1000;
    for (const r of reactivos) {
      const esElCritico = criticoDeCrisis && r.id === criticoDeCrisis.id;
      // Los críticos de los ejes 1 y 2 son NEGATIVA: el "Sí" es la señal.
      const respuesta = esElCritico ? 'Sí' : 'No';

      await request(app.getHttpServer())
        .post(`/intentos/${intentoId}/responder`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          reactivoId: r.id,
          respuestaSeleccionada: respuesta,
          respondidoEnMs: ms,
        })
        .expect(201);

      ms += 3000;
    }

    const guardadas = await prisma.respuestaReactivo.count({
      where: { intentoExamenId: intentoId },
    });
    expect(guardadas).toBe(reactivos.length);
  }, 300_000);

  it('finaliza el intento', async () => {
    const res = await request(app.getHttpServer())
      .patch(`/intentos/${intentoId}/finalizar`)
      .set('Authorization', `Bearer ${token}`)
      .send({ estado: 'COMPLETADA' })
      .expect(200);

    expect(res.body.estado).toBe('COMPLETADA');
    expect(res.body.finAt).not.toBeNull();
  });

  it('devuelve las escalas de validez — Fase 4', async () => {
    const res = await request(app.getHttpServer())
      .get(`/intentos/${intentoId}/resultados`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    const ev = res.body.escalasValidez;
    expect(ev).not.toBeNull();

    // L y K siempre caen: hay 114 y 156 trampas de esos tipos en el banco.
    for (const escala of ['L', 'K'] as const) {
      expect(ev[escala].presentadas).toBeGreaterThan(0);
      expect(ev[escala].porcentaje).toBeGreaterThanOrEqual(0);
    }

    // F no se puede exigir. Solo hay 27 trampas F en 2,410 reactivos, así que
    // un examen de 256 recibe unas 3 — y a veces ninguna. Es la limitación que
    // ya estaba documentada en PENDIENTES.md, y este test la topó en vivo:
    // exigir F.presentadas > 0 lo hacía fallar una de cada cuatro corridas.
    // Lo que sí debe cumplirse es que sea coherente consigo misma.
    if (ev.F.presentadas === 0) {
      expect(ev.F.porcentaje).toBeNull();
      expect(ev.F.banda).toBe('sin_datos');
    } else {
      expect(ev.F.porcentaje).toBeGreaterThanOrEqual(0);
      expect(['normal', 'elevada', 'alta']).toContain(ev.F.banda);
    }

    // Se contestó "No" a todas las trampas, así que ninguna quedó afirmada.
    expect(ev.L.afirmadas).toBe(0);
    expect(ev.K.afirmadas).toBe(0);
    expect(ev.F.afirmadas).toBe(0);
    expect(ev.veredicto).toBe('valido');
  }, 60_000);

  it('activa el protocolo de crisis con el crítico contestado que sí', async () => {
    const res = await request(app.getHttpServer())
      .get(`/intentos/${intentoId}/resultados`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    const sc = res.body.senalesCriticas;
    expect(sc).not.toBeNull();
    expect(sc.criticosPresentados).toBeGreaterThan(0);

    if (criticoDeCrisis) {
      expect(sc.protocoloCrisis).toBe(true);
      expect(sc.nivel).toBe('alerta');
      expect(sc.senalesCrisis).toBe(1);
    } else {
      // El muestreo no trajo ningún crítico de los ejes 1 o 2 — raro pero
      // posible. Sin señal contestada, el protocolo no debe dispararse.
      expect(sc.protocoloCrisis).toBe(false);
      expect(sc.nivel).toBe('ninguna');
    }
  }, 60_000);

  it('no deja ver el intento de otro usuario', async () => {
    const otro = await prisma.usuario.create({
      data: {
        nombre: 'Intruso E2E',
        email: `e2e-intruso-${Date.now()}@prueba.local`,
        password: await bcrypt.hash(PASSWORD, 10),
      },
    });

    try {
      const login = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: otro.email, password: PASSWORD })
        .expect(201);

      await request(app.getHttpServer())
        .get(`/intentos/${intentoId}/resultados`)
        .set('Authorization', `Bearer ${login.body.access_token}`)
        .expect((r) => {
          if (r.status === 200) {
            throw new Error('Un usuario ajeno pudo leer los resultados');
          }
        });
    } finally {
      await prisma.sesion.deleteMany({ where: { usuarioId: otro.id } });
      await prisma.usuario.delete({ where: { id: otro.id } }).catch(() => {});
    }
  }, 60_000);
});
