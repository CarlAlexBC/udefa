import { ExamenesService } from './examenes.service';

/**
 * Muestreo por unidades (Fase 3).
 *
 * La razón de ser de esta lógica es una sola: el análisis de coherencia compara
 * un reactivo afirmativo con su invertido. Si el muestreo trae uno y deja al
 * otro fuera, ese par no mide nada y el diagnóstico queda cojo.
 *
 * Se validó una vez con 200 exámenes simulados y no volvió a correr nunca.
 * Estas pruebas fijan las invariantes para que una regresión avise.
 *
 * Ambos métodos son puros: no tocan la base ni el azar, así que el servicio se
 * puede instanciar sin dependencias reales.
 */
describe('ExamenesService · muestreo por unidades', () => {
  const svc = new ExamenesService({} as any, {} as any);

  const agrupar = (reactivos: any[]) =>
    (svc as any).agruparEnUnidades(reactivos);
  const tomar = (unidades: any[], tope: number) =>
    (svc as any).tomarUnidadesHasta(unidades, tope);

  /** Reactivo del banco remaster, con eje y pareja declarada. */
  const react = (
    id: number,
    eje: number | null,
    numeroEnEje: number | null,
    parNumero: number | null,
    tema = 'suicidio',
  ) => ({ id, eje, numeroEnEje, parNumero, tema });

  describe('agruparEnUnidades', () => {
    it('junta un par recíproco en una sola unidad', () => {
      const u = agrupar([react(10, 1, 1, 2), react(11, 1, 2, 1)]);
      expect(u).toHaveLength(1);
      expect(u[0].ids).toEqual([10, 11]);
      expect(u[0].tema).toBe('suicidio');
    });

    it('deja sola a la trampa, que no declara pareja', () => {
      const u = agrupar([react(20, 1, 57, null)]);
      expect(u).toEqual([{ tema: 'suicidio', ids: [20] }]);
    });

    it('deja solo al reactivo sin eje — banco v1 y los otros bloques', () => {
      const u = agrupar([react(30, null, null, null, 'psicometrico')]);
      expect(u).toEqual([{ tema: 'psicometrico', ids: [30] }]);
    });

    it('no inventa la pareja si no está en el lote', () => {
      // El 40 dice que su par es el 2, pero el 2 no vino en esta consulta.
      const u = agrupar([react(40, 1, 1, 2)]);
      expect(u).toEqual([{ tema: 'suicidio', ids: [40] }]);
    });

    it('agrupa también las anclas clínicas, que comparten polaridad', () => {
      // eje 1 #68 ↔ #69, ambos NEGATIVA: el importador las marca como ancla.
      const u = agrupar([react(68, 1, 68, 69), react(69, 1, 69, 68)]);
      expect(u).toHaveLength(1);
      expect(u[0].ids).toEqual([68, 69]);
    });

    it('no repite un reactivo en dos unidades', () => {
      const u = agrupar([
        react(1, 1, 1, 2),
        react(2, 1, 2, 1),
        react(3, 1, 3, 4),
        react(4, 1, 4, 3),
      ]);
      const todos = u.flatMap((x: any) => x.ids);
      expect(new Set(todos).size).toBe(todos.length);
    });

    it('cada reactivo de entrada sale exactamente una vez', () => {
      const entrada = [
        react(1, 1, 1, 2),
        react(2, 1, 2, 1),
        react(3, 1, 57, null),
        react(4, null, null, null),
        react(5, 2, 9, 40),
      ];
      const salida = agrupar(entrada).flatMap((x: any) => x.ids);
      expect(salida.sort()).toEqual([1, 2, 3, 4, 5]);
    });

    it('separa por tema aunque los reactivos vengan entremezclados', () => {
      const u = agrupar([
        react(1, 1, 1, 2, 'suicidio'),
        react(9, 6, 1, 2, 'adicciones'),
        react(2, 1, 2, 1, 'suicidio'),
        react(10, 6, 2, 1, 'adicciones'),
      ]);
      expect(u).toHaveLength(2);
      expect(u.find((x: any) => x.tema === 'suicidio').ids).toEqual([1, 2]);
      expect(u.find((x: any) => x.tema === 'adicciones').ids).toEqual([9, 10]);
    });
  });

  describe('tomarUnidadesHasta', () => {
    const par = (a: number, b: number) => ({ tema: 't', ids: [a, b] });
    const solo = (a: number) => ({ tema: 't', ids: [a] });

    it('nunca se pasa del tope', () => {
      const ids = tomar([par(1, 2), par(3, 4), par(5, 6)], 4);
      expect(ids).toHaveLength(4);
    });

    it('nunca parte un par por la mitad', () => {
      // Tope impar con puros pares: tiene que quedarse en 2, no cortar el segundo.
      const ids = tomar([par(1, 2), par(3, 4)], 3);
      expect(ids).toEqual([1, 2]);
    });

    it('salta la unidad que no cabe y sigue buscando una más chica', () => {
      const ids = tomar([par(1, 2), par(3, 4), solo(5)], 3);
      expect(ids).toEqual([1, 2, 5]);
    });

    it('devuelve vacío con tope 0', () => {
      expect(tomar([par(1, 2)], 0)).toEqual([]);
    });

    it('devuelve todo si el tope es mayor que lo disponible', () => {
      expect(tomar([par(1, 2), solo(3)], 99)).toEqual([1, 2, 3]);
    });
  });

  describe('la invariante que sostiene todo', () => {
    it('ningún reactivo llega huérfano al examen', () => {
      // Lote realista: 20 pares + 5 trampas sueltas.
      const reactivos: ReturnType<typeof react>[] = [];
      for (let i = 0; i < 20; i++) {
        const a = i * 2 + 1;
        const b = i * 2 + 2;
        reactivos.push(react(a, 1, a, b), react(b, 1, b, a));
      }
      for (let i = 0; i < 5; i++) {
        reactivos.push(react(100 + i, 1, 100 + i, null));
      }

      const parDe = new Map<number, number>();
      for (const r of reactivos) {
        if (r.parNumero !== null) parDe.set(r.id, r.parNumero);
      }

      // Se prueban muchos topes, incluidos los impares que son los que rompen.
      for (let tope = 1; tope <= reactivos.length; tope++) {
        const ids = tomar(agrupar(reactivos), tope);
        const elegidos = new Set(ids);
        expect(ids.length).toBeLessThanOrEqual(tope);
        for (const id of ids) {
          const pareja = parDe.get(id);
          if (pareja === undefined) continue;
          expect(elegidos.has(pareja)).toBe(true);
        }
      }
    });
  });
});
