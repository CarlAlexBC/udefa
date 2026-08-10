import { IntentosService } from './intentos.service';

/**
 * Protocolo de señales críticas.
 *
 * Estas pruebas existen porque es la única parte del panel que puede tener que
 * poner un número de emergencia en pantalla. Una regresión silenciosa aquí
 * significa que alguien en crisis no vea nada, así que los casos se fijan.
 *
 * Las polaridades de los reactivos son las reales del banco remaster,
 * comprobadas contra la base: los 88 críticos son NEGATIVA salvo e10#88, y el
 * e1#73 es POSITIVA y no es crítico (es el factor protector).
 */
describe('IntentosService · detectarSenalesCriticas', () => {
  const svc = new IntentosService({} as any, {} as any, {} as any, {} as any);

  const detectar = (respuestas: any[], tipo = 'personalidad') =>
    (svc as any).detectarSenalesCriticas(respuestas, tipo);

  /** Construye una respuesta con el reactivo real que representa. */
  const resp = (
    eje: number,
    numeroEnEje: number,
    respuestaSeleccionada: string,
    opts: { polaridad?: string; esCritico?: boolean; tema?: string } = {},
  ) => ({
    respuestaSeleccionada,
    reactivo: {
      eje,
      numeroEnEje,
      polaridad: opts.polaridad ?? 'NEGATIVA',
      esCritico: opts.esCritico ?? true,
      tema: opts.tema ?? 'suicidio',
    },
  });

  /** e1#73 — pacto de crisis. POSITIVA y no crítico: el "No" es el riesgo. */
  const pactoDeCrisis = (r: string) =>
    resp(1, 73, r, { polaridad: 'POSITIVA', esCritico: false });

  it('devuelve null si el examen no es de personalidad', () => {
    expect(detectar([resp(1, 6, 'Sí')], 'axiologico')).toBeNull();
  });

  it('devuelve null si el examen no trajo ningún crítico', () => {
    expect(detectar([pactoDeCrisis('Sí')])).toBeNull();
  });

  it('no levanta nada cuando los críticos van en "No"', () => {
    const out = detectar([resp(1, 6, 'No'), resp(19, 89, 'No')]);
    expect(out.nivel).toBe('ninguna');
    expect(out.protocoloCrisis).toBe(false);
  });

  it('levanta alerta con un solo crítico del eje 1 en "Sí"', () => {
    const out = detectar([resp(1, 6, 'Sí')]);
    expect(out.nivel).toBe('alerta');
    expect(out.protocoloCrisis).toBe(true);
    expect(out.senalesCrisis).toBe(1);
  });

  it('levanta alerta con un crítico del eje 2 — decisión de Carlo', () => {
    const out = detectar([resp(2, 37, 'Sí', { tema: 'depresion' })]);
    expect(out.nivel).toBe('alerta');
    expect(out.senalesCrisis).toBe(1);
  });

  it('levanta alerta máxima con 71 Sí + 72 Sí + 73 No', () => {
    const out = detectar([
      resp(1, 71, 'Sí'),
      resp(1, 72, 'Sí'),
      pactoDeCrisis('No'),
    ]);
    expect(out.nivel).toBe('alerta_maxima');
    expect(out.combinacionEvaluable).toBe(true);
  });

  it('baja a alerta si el pacto de crisis está presente (73 en Sí)', () => {
    const out = detectar([
      resp(1, 71, 'Sí'),
      resp(1, 72, 'Sí'),
      pactoDeCrisis('Sí'),
    ]);
    expect(out.nivel).toBe('alerta');
    expect(out.combinacionEvaluable).toBe(true);
  });

  it('marca la combinación como no evaluable si el muestreo no trajo el 73', () => {
    const out = detectar([resp(1, 71, 'Sí'), resp(1, 72, 'Sí')]);
    expect(out.nivel).toBe('alerta');
    expect(out.combinacionEvaluable).toBe(false);
  });

  it('NO activa recursos de crisis por críticos de conducta', () => {
    const out = detectar([
      resp(19, 89, 'Sí', { tema: 'honestidad_integridad' }),
      resp(28, 83, 'Sí', { tema: 'valores_grupo' }),
    ]);
    expect(out.nivel).toBe('ninguna');
    expect(out.protocoloCrisis).toBe(false);
    expect(out.senalesCrisis).toBe(0);
    expect(out.hallazgosPorTema).toEqual({
      honestidad_integridad: 1,
      valores_grupo: 1,
    });
  });

  it('lee el riesgo por polaridad: en e10#88 (POSITIVA) el riesgo es el "No"', () => {
    const critico = { polaridad: 'POSITIVA', tema: 'disciplina' };
    expect(detectar([resp(10, 88, 'No', critico)]).hallazgosPorTema).toEqual({
      disciplina: 1,
    });
    expect(detectar([resp(10, 88, 'Sí', critico)]).hallazgosPorTema).toEqual(
      {},
    );
  });

  it('acepta "si" sin acento e ignora respuestas en blanco', () => {
    expect(detectar([resp(1, 6, 'si')]).nivel).toBe('alerta');
    expect(detectar([resp(1, 6, '')]).nivel).toBe('ninguna');
  });

  // --- Escala Verdadero/Falso (banco v3) — mismo scoring, otra escala ---

  it('v3: levanta alerta con un crítico del eje 1 en "Verdadero"', () => {
    const out = detectar([resp(1, 6, 'Verdadero')]);
    expect(out.nivel).toBe('alerta');
    expect(out.senalesCrisis).toBe(1);
  });

  it('v3: no levanta nada cuando el crítico va en "Falso"', () => {
    expect(detectar([resp(1, 6, 'Falso')]).nivel).toBe('ninguna');
  });

  it('v3: alerta máxima con 71 Verdadero + 72 Verdadero + 73 Falso', () => {
    const out = detectar([
      resp(1, 71, 'Verdadero'),
      resp(1, 72, 'Verdadero'),
      pactoDeCrisis('Falso'),
    ]);
    expect(out.nivel).toBe('alerta_maxima');
    expect(out.combinacionEvaluable).toBe(true);
  });

  it('v3: lee el riesgo por polaridad en V/F (e10#88 POSITIVA → riesgo = Falso)', () => {
    const critico = { polaridad: 'POSITIVA', tema: 'disciplina' };
    expect(detectar([resp(10, 88, 'Falso', critico)]).hallazgosPorTema).toEqual(
      {
        disciplina: 1,
      },
    );
    expect(
      detectar([resp(10, 88, 'Verdadero', critico)]).hallazgosPorTema,
    ).toEqual({});
  });

  // --- Máxima severidad del eje 1 (sub-lote 8) · eje 3 fuera del protocolo ---

  it('v3: el intento previo (106) fuerza alerta máxima por sí solo', () => {
    expect(detectar([resp(1, 106, 'Verdadero')]).nivel).toBe('alerta_maxima');
  });

  it('v3: la autolesión (119) fuerza alerta máxima por sí sola', () => {
    expect(detectar([resp(1, 119, 'Verdadero')]).nivel).toBe('alerta_maxima');
  });

  it('v3: un reactivo de máxima severidad en "Falso" no fuerza nada', () => {
    expect(detectar([resp(1, 106, 'Falso')]).nivel).toBe('ninguna');
  });

  it('v3: el eje 3 (ansiedad) queda FUERA del protocolo de crisis', () => {
    const out = detectar([resp(3, 104, 'Verdadero', { tema: 'ansiedad' })]);
    expect(out.protocoloCrisis).toBe(false);
    expect(out.senalesCrisis).toBe(0);
    expect(out.hallazgosPorTema).toEqual({ ansiedad: 1 });
  });
});
