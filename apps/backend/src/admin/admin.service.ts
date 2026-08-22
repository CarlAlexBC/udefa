import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { BANCOS_ARCHIVADOS, BANCOS_EN_USO } from '../examenes/examenes.service';

/**
 * Métricas agregadas para el dashboard del admin panel.
 *
 * Regla de diseño: un único endpoint que devuelve todas las stats en una
 * sola llamada. Prisma corre los counts en paralelo con Promise.all para
 * minimizar el round-trip a la BD. El frontend recibe un payload compacto
 * y lo pinta directo sin más queries.
 */
@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async obtenerStats() {
    const hace30Dias = new Date();
    hace30Dias.setDate(hace30Dias.getDate() - 30);

    const [
      usuariosTotal,
      usuariosActivos30d,
      sesionesTotal,
      sesionesCompletadas,
      sesionesAbandonadas,
      intentosTotal,
      reactivosTotal,
      reactivosCulturalTotal,
      distribucionPorPlantelRaw,
      reactivosPorExamenRaw,
      intentosPorExamenRaw,
      recientes,
    ] = await Promise.all([
      this.prisma.usuario.count(),
      // Activos = usuarios con al menos una sesión creada en los últimos 30 días.
      this.prisma.usuario.count({
        where: {
          sesionesCompletas: { some: { createdAt: { gte: hace30Dias } } },
        },
      }),
      this.prisma.sesionExamenCompleto.count(),
      this.prisma.sesionExamenCompleto.count({
        where: { estado: 'COMPLETADA' },
      }),
      this.prisma.sesionExamenCompleto.count({
        where: { estado: 'ABANDONADA' },
      }),
      this.prisma.intentoExamen.count(),
      this.prisma.reactivo.count(),
      // Solo los reactivos culturales: cuelgan de un Tema del banco (temaId),
      // no de un Bloque. `reactivosTotal` los incluye; este count los aísla
      // para que el Dashboard pueda separar el banco psicológico del cultural.
      this.prisma.reactivo.count({ where: { temaId: { not: null } } }),
      // groupBy usuarios por plantelId + join a nombre del plantel
      this.prisma.usuario.groupBy({
        by: ['plantelId'],
        _count: { _all: true },
        orderBy: { _count: { plantelId: 'desc' } },
      }),
      // Reactivos por examen: no puedo `groupBy` de reactivo filtrando por
      // relación, así que hago 3 counts en paralelo filtrando por
      // `bloque.examenId`. La forma [{examenId, _count:number}] la uso
      // más abajo para armar reactivosPorFase.
      Promise.all(
        [1, 2, 3].map(async (examenId) => ({
          examenId,
          _count: await this.prisma.reactivo.count({
            where: { bloque: { examenId } },
          }),
        })),
      ),
      // Intentos agrupados por examenId directamente.
      this.prisma.intentoExamen.groupBy({
        by: ['examenId'],
        _count: { _all: true },
      }),
      // Últimas 10 sesiones completadas para el feed de actividad reciente.
      this.prisma.sesionExamenCompleto.findMany({
        where: { estado: 'COMPLETADA' },
        take: 10,
        orderBy: { updatedAt: 'desc' },
        select: {
          id: true,
          estado: true,
          createdAt: true,
          updatedAt: true,
          usuario: { select: { nombre: true, email: true } },
          plantel: { select: { nombre: true } },
        },
      }),
    ]);

    // Enriquecer distribucionPorPlantel con el nombre del plantel
    const plantelIds = distribucionPorPlantelRaw
      .map((d) => d.plantelId)
      .filter((id): id is number => id !== null);
    const planteles = await this.prisma.plantel.findMany({
      where: { id: { in: plantelIds } },
      select: { id: true, nombre: true },
    });
    const nombrePorId = new Map(planteles.map((p) => [p.id, p.nombre]));
    const distribucionPorPlantel = distribucionPorPlantelRaw.map((d) => ({
      plantelId: d.plantelId,
      plantelNombre:
        d.plantelId !== null
          ? (nombrePorId.get(d.plantelId) ?? `Plantel ${d.plantelId}`)
          : 'Sin plantel',
      usuarios: d._count._all,
    }));

    // Nombres legibles de los 3 exámenes (id fijo por convención del seed).
    const NOMBRE_EXAMEN: Record<number, string> = {
      1: 'Psicométrico',
      2: 'Personalidad',
      3: 'Axiológico',
    };
    const reactivosPorFase = reactivosPorExamenRaw.map((r) => ({
      examenId: r.examenId,
      nombre: NOMBRE_EXAMEN[r.examenId] ?? `Examen ${r.examenId}`,
      total: r._count,
    }));
    const intentosPorFase = intentosPorExamenRaw.map((r) => ({
      examenId: r.examenId,
      nombre: NOMBRE_EXAMEN[r.examenId] ?? `Examen ${r.examenId}`,
      total: r._count._all,
    }));

    return {
      usuarios: { total: usuariosTotal, activos30d: usuariosActivos30d },
      sesiones: {
        total: sesionesTotal,
        completadas: sesionesCompletadas,
        abandonadas: sesionesAbandonadas,
      },
      intentos: { total: intentosTotal, porFase: intentosPorFase },
      reactivos: {
        total: reactivosTotal,
        cultural: reactivosCulturalTotal,
        porFase: reactivosPorFase,
      },
      distribucionPorPlantel,
      recientes,
    };
  }

  /**
   * Analítica de errores del banco.
   *
   * Clave de diseño: filtramos por `esCorrecta not null`. Ese campo es un
   * snapshot que solo se llena en exámenes calificables (psicométrico); en
   * personalidad/axiológico queda null porque no hay acierto/error. Así que
   * `esCorrecta not null` ⟺ respuesta de un examen calificable — sin
   * necesidad de joinear a examen.calificable.
   *
   * Estrategia de eficiencia:
   *   1. Dos groupBy por reactivoId (total + incorrectas) — agregación en la BD.
   *   2. Un findMany de los reactivos referenciados (para nombre/tema/bloque).
   *   3. Rollup en memoria a nivel bloque y tema sobre los conteos ya agregados
   *      (no sobre las respuestas crudas — el set es chico).
   */
  async obtenerAnalitica() {
    const TOP_N = 20;
    // Umbral mínimo de respuestas para que un reactivo/tema sea "confiable".
    // Un reactivo con 1 sola respuesta y 100% error no dice nada estadístico.
    const MIN_RESPUESTAS = 1;

    const [totalPorReactivo, incorrectasPorReactivo] = await Promise.all([
      this.prisma.respuestaReactivo.groupBy({
        by: ['reactivoId'],
        where: { esCorrecta: { not: null } },
        _count: { _all: true },
      }),
      this.prisma.respuestaReactivo.groupBy({
        by: ['reactivoId'],
        where: { esCorrecta: false },
        _count: { _all: true },
      }),
    ]);

    // Mapa reactivoId → incorrectas para cruzar rápido.
    const incorrectasMap = new Map(
      incorrectasPorReactivo.map((r) => [r.reactivoId, r._count._all]),
    );

    // Estadística por reactivo (total, incorrectas, tasa).
    const statsPorReactivo = totalPorReactivo.map((r) => {
      const total = r._count._all;
      const incorrectas = incorrectasMap.get(r.reactivoId) ?? 0;
      return {
        reactivoId: r.reactivoId,
        total,
        incorrectas,
        tasaError: total > 0 ? incorrectas / total : 0,
      };
    });

    // Traemos metadata (enunciado, tema, bloque) de los reactivos respondidos.
    const reactivoIds = statsPorReactivo.map((s) => s.reactivoId);
    const reactivos = await this.prisma.reactivo.findMany({
      where: { id: { in: reactivoIds } },
      select: {
        id: true,
        enunciado: true,
        tema: true,
        bloque: { select: { id: true, nombre: true } },
      },
    });
    const metaPorReactivo = new Map(reactivos.map((r) => [r.id, r]));

    // Reactivos más fallados (con metadata), ordenados por tasa de error desc.
    const reactivosMasFallados = statsPorReactivo
      .filter((s) => s.total >= MIN_RESPUESTAS)
      .map((s) => {
        const meta = metaPorReactivo.get(s.reactivoId);
        return {
          reactivoId: s.reactivoId,
          enunciado: meta?.enunciado ?? '(reactivo eliminado)',
          tema: meta?.tema ?? null,
          bloqueNombre: meta?.bloque?.nombre ?? null,
          total: s.total,
          incorrectas: s.incorrectas,
          tasaError: Number((s.tasaError * 100).toFixed(1)),
        };
      })
      .sort((a, b) => b.tasaError - a.tasaError || b.total - a.total)
      .slice(0, TOP_N);

    // Rollup a bloque y tema sumando los conteos ya agregados por reactivo.
    const bloqueAcc = new Map<
      number,
      { nombre: string; total: number; incorrectas: number }
    >();
    const temaAcc = new Map<string, { total: number; incorrectas: number }>();

    for (const s of statsPorReactivo) {
      const meta = metaPorReactivo.get(s.reactivoId);
      if (!meta) continue;

      if (meta.bloque) {
        const prev = bloqueAcc.get(meta.bloque.id) ?? {
          nombre: meta.bloque.nombre,
          total: 0,
          incorrectas: 0,
        };
        prev.total += s.total;
        prev.incorrectas += s.incorrectas;
        bloqueAcc.set(meta.bloque.id, prev);
      }

      if (meta.tema) {
        const prev = temaAcc.get(meta.tema) ?? { total: 0, incorrectas: 0 };
        prev.total += s.total;
        prev.incorrectas += s.incorrectas;
        temaAcc.set(meta.tema, prev);
      }
    }

    const erroresPorBloque = Array.from(bloqueAcc.entries())
      .map(([bloqueId, v]) => ({
        bloqueId,
        nombre: v.nombre,
        total: v.total,
        incorrectas: v.incorrectas,
        tasaError:
          v.total > 0
            ? Number(((v.incorrectas / v.total) * 100).toFixed(1))
            : 0,
      }))
      .sort((a, b) => b.tasaError - a.tasaError);

    const erroresPorTema = Array.from(temaAcc.entries())
      .map(([tema, v]) => ({
        tema,
        total: v.total,
        incorrectas: v.incorrectas,
        tasaError:
          v.total > 0
            ? Number(((v.incorrectas / v.total) * 100).toFixed(1))
            : 0,
      }))
      .sort((a, b) => b.tasaError - a.tasaError);

    const totalRespuestasCalificadas = statsPorReactivo.reduce(
      (acc, s) => acc + s.total,
      0,
    );

    return {
      totalRespuestasCalificadas,
      reactivosMasFallados,
      erroresPorBloque,
      erroresPorTema,
    };
  }

  /**
   * Distribución de respuestas para exámenes NO calificables (Personalidad=2,
   * Axiológico=3). No hay acierto/error, así que el análogo de "reactivos más
   * fallados" es: por cada reactivo, cómo se reparten las respuestas. Un reparto
   * muy disparejo (casi todos contestan lo mismo) = reactivo que no discrimina
   * entre aspirantes, candidato a revisión.
   *
   * Estrategia: un groupBy por (reactivo, respuesta) agrega todo en la BD; el
   * resto es rollup en memoria sobre ese set ya reducido.
   */
  async obtenerDistribucion(examenId: number) {
    const grupos = await this.prisma.respuestaReactivo.groupBy({
      by: ['reactivoId', 'respuestaSeleccionada'],
      where: { reactivo: { bloque: { examenId } } },
      _count: { _all: true },
    });

    // reactivoId → (respuesta → conteo)
    const porReactivo = new Map<number, Map<string, number>>();
    for (const g of grupos) {
      const m = porReactivo.get(g.reactivoId) ?? new Map<string, number>();
      m.set(g.respuestaSeleccionada, g._count._all);
      porReactivo.set(g.reactivoId, m);
    }

    // Metadata (enunciado, tema, polaridad) de los reactivos con respuestas.
    const reactivoIds = [...porReactivo.keys()];
    const reactivos = await this.prisma.reactivo.findMany({
      where: { id: { in: reactivoIds } },
      select: { id: true, enunciado: true, tema: true, polaridad: true },
    });
    const meta = new Map(reactivos.map((r) => [r.id, r]));

    const items = reactivoIds
      .map((id) => {
        const dist = porReactivo.get(id)!;
        const total = [...dist.values()].reduce((a, b) => a + b, 0);
        const distribucion = [...dist.entries()]
          .map(([respuesta, n]) => ({
            respuesta,
            n,
            pct: total > 0 ? Math.round((n / total) * 100) : 0,
          }))
          .sort((a, b) => b.n - a.n);
        const m = meta.get(id);
        return {
          reactivoId: id,
          enunciado: m?.enunciado ?? '(reactivo eliminado)',
          tema: m?.tema ?? null,
          polaridad: m?.polaridad ?? null,
          total,
          // % de la respuesta dominante: alto = poco discrimina.
          mayoritaria: distribucion[0]?.pct ?? 0,
          distribucion,
        };
      })
      // Los menos discriminantes (reparto más disparejo) primero.
      .sort((a, b) => b.mayoritaria - a.mayoritaria || b.total - a.total);

    const totalRespuestas = items.reduce((a, it) => a + it.total, 0);
    return { examenId, totalRespuestas, items };
  }

  /**
   * Cuentas a vigilar — Capa 3 · Movimiento 2 ("Vigilar") del blindaje anti-copia.
   *
   * Señal de "vaciado": cuánta cobertura del banco ha juntado una cuenta y a qué
   * ritmo. Se mide desde lo que YA se guarda (RespuestaReactivo + IntentoExamen),
   * sin tablas nuevas: reactivos ÚNICOS contestados por cuenta (total y en los
   * últimos 7 días), respuestas e intentos totales, y última actividad. Rankeadas
   * por cobertura total desc — el bulto raro sube solo y lo revisa el admin.
   *
   * OJO: un harvester que solo ARMA y captura sin contestar no deja rastro aquí;
   * a ese lo frena el Movimiento 1. Los umbrales se afinan con datos reales.
   *
   * COUNT(DISTINCT ...) sobre una relación no lo hace el groupBy de Prisma, así
   * que va en SQL crudo (mismo patrón que examenes.service). Sin parámetros de
   * usuario → nada que inyectar. Los ::int evitan que el COUNT (bigint) llegue
   * como BigInt no serializable.
   */
  async cuentasAVigilar() {
    return this.prisma.$queryRaw<
      Array<{
        id: number;
        nombre: string;
        email: string;
        plantel: string | null;
        reactivosUnicos: number;
        unicos7d: number;
        respuestasTotales: number;
        intentos: number;
        ultimaActividad: Date;
      }>
    >(Prisma.sql`
      SELECT
        u.id,
        u.nombre,
        u.email,
        p.nombre AS plantel,
        COUNT(DISTINCT rr."reactivoId")::int AS "reactivosUnicos",
        (COUNT(DISTINCT rr."reactivoId")
          FILTER (WHERE rr."createdAt" > NOW() - INTERVAL '7 days'))::int AS "unicos7d",
        COUNT(rr.id)::int AS "respuestasTotales",
        COUNT(DISTINCT ie.id)::int AS "intentos",
        MAX(rr."createdAt") AS "ultimaActividad"
      FROM "Usuario" u
      JOIN "IntentoExamen" ie ON ie."usuarioId" = u.id
      JOIN "RespuestaReactivo" rr ON rr."intentoExamenId" = ie.id
      LEFT JOIN "Plantel" p ON p.id = u."plantelId"
      WHERE u.rol <> 'admin'
      GROUP BY u.id, u.nombre, u.email, p.nombre
      ORDER BY "reactivosUnicos" DESC
      LIMIT 50
    `);
  }

  /**
   * Bancos del sistema: cuáles se están sirviendo de verdad y cuáles siguen
   * guardados sin usarse.
   *
   * Existe porque conviven varias generaciones del banco (v1 → remaster → v3) y
   * desde el panel no había forma de saber cuál ve el aspirante. El estado NO se
   * escribe a mano en la pantalla: sale de `BANCOS_EN_USO` (examenes.service),
   * que es lo que de verdad decide el armado, así que la tabla no puede quedar
   * desfasada si mañana se cambia de banco.
   *
   * Los vivos van primero y, dentro de cada grupo, de más a menos reactivos.
   */
  async bancos() {
    const filas = await this.prisma.reactivo.groupBy({
      by: ['banco'],
      _count: { _all: true },
    });

    return (
      filas
        .map((f) => ({
          banco: f.banco,
          reactivos: f._count._all,
          enUso: Boolean(BANCOS_EN_USO[f.banco]),
          // A qué examen alimenta, o null si no se está usando.
          sirve: BANCOS_EN_USO[f.banco] ?? null,
          // Retirado a propósito: sigue guardado entero, pero ya no vuelve.
          archivado: Boolean(BANCOS_ARCHIVADOS[f.banco]),
          // Por qué se retiró (o null si no está archivado).
          nota: BANCOS_ARCHIVADOS[f.banco] ?? null,
        }))
        // Primero los vivos; los archivados hasta el final. Dentro de cada grupo,
        // de más a menos reactivos.
        .sort(
          (a, b) =>
            Number(b.enUso) - Number(a.enUso) ||
            Number(a.archivado) - Number(b.archivado) ||
            b.reactivos - a.reactivos,
        )
    );
  }

  /**
   * Reactivos-canario — Capa 5 del blindaje anti-copia. Son los reactivos
   * marcados `noPuntua` que sembramos como trampa: se sirven en los exámenes pero
   * no cuentan para ningún aspirante. Esta lista es para que el admin recuerde
   * cuáles son sus canarios y vea cuántas veces se han servido (a más exposición,
   * más probable que un ladrón que copió el banco los tenga). Si un canario
   * aparece en material ajeno, es prueba de robo.
   */
  async canarios() {
    const canarios = await this.prisma.reactivo.findMany({
      // Hay dos formas de canario y las dos se listan aquí:
      //  · `noPuntua` — el reactivo ENTERO es inventado y no cuenta para nadie.
      //  · nota del revisor con "CANARIO" — el reactivo es legítimo y sí se
      //    califica; lo inventado es UNO DE SUS DISTRACTORES. Es la forma
      //    preferida: no le enseña nada falso al aspirante (una opción
      //    incorrecta está para ser incorrecta) y prueba igual el robo.
      where: {
        OR: [{ noPuntua: true }, { notaRevisor: { contains: 'CANARIO' } }],
      },
      select: {
        id: true,
        enunciado: true,
        tema: true,
        banco: true,
        noPuntua: true,
        notaRevisor: true,
        // Cuántas veces se ha contestado = qué tan expuesto está el canario.
        _count: { select: { respuestas: true } },
      },
      orderBy: { id: 'asc' },
    });
    return canarios.map((c) => ({
      id: c.id,
      enunciado: c.enunciado,
      tema: c.tema,
      banco: c.banco,
      vecesRespondido: c._count.respuestas,
      // 'reactivo' = el reactivo entero es inventado (no puntúa).
      // 'distractor' = el reactivo es legítimo; lo inventado es una opción falsa.
      tipo: c.noPuntua ? ('reactivo' as const) : ('distractor' as const),
      // La nota interna dice cuál es la frase sembrada. Nunca se le muestra al
      // aspirante (el armado ni siquiera la manda al navegador).
      nota: c.notaRevisor,
    }));
  }

  /**
   * Ingresos: el libro de caja resumido para el panel.
   *
   * Todo sale de la tabla `Pago`, que se escribe sola cuando Mercado Pago avisa
   * de un pago aprobado. Se devuelven los importes ya en número (Prisma entrega
   * los Decimal como objeto, y el frontend sólo quiere sumar y pintar).
   *
   * `ciclo` acota a una convocatoria; sin él, todo lo cobrado desde siempre.
   */
  async obtenerIngresos(ciclo?: string) {
    const where = ciclo ? { ciclo } : {};
    const pagos = await this.prisma.pago.findMany({
      where,
      orderBy: { aprobadoEn: 'desc' },
      include: { usuario: { select: { id: true, nombre: true, email: true } } },
    });

    const num = (v: unknown) => (v === null || v === undefined ? 0 : Number(v));

    const aprobados = pagos.filter((p) => p.estado === 'approved');
    const cobrado = aprobados.reduce((t, p) => t + num(p.monto), 0);
    const comision = aprobados.reduce((t, p) => t + num(p.comision), 0);
    // Si Mercado Pago no reportó el neto, no se inventa: se cae al monto menos
    // la comisión conocida, que con comisión 0 es el propio monto.
    const neto = aprobados.reduce(
      (t, p) => t + (p.neto !== null ? num(p.neto) : num(p.monto) - num(p.comision)),
      0,
    );
    const devueltos = pagos.filter((p) => p.estado !== 'approved');

    // Por paquete
    const porPaqueteMapa = new Map<string, { ventas: number; cobrado: number }>();
    aprobados.forEach((p) => {
      const actual = porPaqueteMapa.get(p.paquete) ?? { ventas: 0, cobrado: 0 };
      actual.ventas += 1;
      actual.cobrado += num(p.monto);
      porPaqueteMapa.set(p.paquete, actual);
    });

    // Ventas por día, los últimos 14 (incluidos los días en cero: un hueco en la
    // gráfica también es información).
    const dias: Array<{ dia: string; ventas: number; cobrado: number }> = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const siguiente = new Date(d);
      siguiente.setDate(siguiente.getDate() + 1);
      const delDia = aprobados.filter((p) => {
        const cuando = p.aprobadoEn ?? p.createdAt;
        return cuando >= d && cuando < siguiente;
      });
      dias.push({
        dia: d.toISOString().slice(0, 10),
        ventas: delDia.length,
        cobrado: delDia.reduce((t, p) => t + num(p.monto), 0),
      });
    }

    return {
      totales: {
        cobrado,
        comision,
        neto,
        ventas: aprobados.length,
        promedio: aprobados.length > 0 ? cobrado / aprobados.length : 0,
        devoluciones: devueltos.length,
        montoDevuelto: devueltos.reduce((t, p) => t + num(p.monto), 0),
      },
      porPaquete: [...porPaqueteMapa.entries()]
        .map(([paquete, v]) => ({ paquete, ...v }))
        .sort((a, b) => b.cobrado - a.cobrado),
      porDia: dias,
      ultimas: pagos.slice(0, 12).map((p) => ({
        id: p.id,
        paquete: p.paquete,
        estado: p.estado,
        monto: num(p.monto),
        neto: p.neto !== null ? num(p.neto) : null,
        metodoPago: p.metodoPago,
        aprobadoEn: p.aprobadoEn ?? p.createdAt,
        usuario: p.usuario,
      })),
      ciclos: [...new Set(pagos.map((p) => p.ciclo))].sort().reverse(),
    };
  }

}
