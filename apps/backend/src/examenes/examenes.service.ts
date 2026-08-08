import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { TemasPrioridadService } from '../temas-prioridad/temas-prioridad.service';
import * as fs from 'fs';
import * as path from 'path';

/** Banco de reactivos que alimenta el diagnóstico de personalidad. */
const BANCO_DIAGNOSTICO = 'remaster';

/**
 * Banco del que se sirve cada tipo de examen.
 *
 * Los tipos que no aparecen aquí se arman con todos los reactivos del bloque,
 * sin filtrar — que es como funcionaban antes de que existieran los bancos.
 */
const BANCO_POR_TIPO: Record<string, string> = {
  personalidad: BANCO_DIAGNOSTICO,
  // Un banco por plantel: hoy sólo existe el del HCM. Cuando entre otro
  // plantel habrá que elegir el banco por examen.plantelId y no por tipo.
  cultural: 'cultural-hcm',
};

/**
 * Unidad mínima de muestreo. No es el reactivo: es el grupo que tiene que
 * viajar junto al examen para que el análisis funcione.
 *
 * - par afirmativo/invertido → 2 reactivos (sin los dos no hay coherencia)
 * - ancla clínica            → 2 reactivos (misma polaridad, miden un criterio en ventana)
 * - trampa o reactivo suelto → 1 reactivo
 */
interface UnidadMuestreo {
  tema: string;
  ids: number[];
}

@Injectable()
export class ExamenesService {
  constructor(
    private prisma: PrismaService,
    private temasPrioridadService: TemasPrioridadService,
  ) {}

  async crear(tipo: string, nombre: string, duracionMin: number, calificable: boolean) {
    return this.prisma.examen.create({
      data: {
        tipo,
        nombre,
        duracionMin,
        calificable,
      },
    });
  }

  async obtenerTodos() {
    return this.prisma.examen.findMany();
  }

  async actualizar(id: number, tipo: string, nombre: string, duracionMin: number, calificable: boolean) {
    return this.prisma.examen.update({
      where: { id },
      data: {
        tipo,
        nombre,
        duracionMin,
        calificable,
      },
    });
  }

  async borrar(id: number) {
    return this.prisma.examen.delete({
      where: { id },
    });
  }

  /**
   * Cuántos reactivos POR BLOQUE presentamos al aspirante según el tipo de examen.
   *
   * - psicometrico: 25 por bloque × 4 bloques = 100 reactivos.
   * - personalidad: 256 por bloque × 1 bloque = 256 reactivos.
   * - axiologico: 39 por bloque × 1 bloque = 39 reactivos.
   * - cultural: 25 por bloque × 4 materias = 100 reactivos.
   *
   * Si el tipo no está mapeado, cae al default de 25 (comportamiento historico).
   *
   * OJO CON EL CULTURAL — el 25 de aquí es PROVISIONAL.
   *
   * Del examen cultural sabemos por Carlo que son **100 reactivos en 2 horas**,
   * pero **todavía no sabemos cómo se reparten esas 100 entre las cuatro
   * materias**. Mientras llega ese dato van 25 de cada una, que da el total
   * correcto aunque puede que no la mezcla correcta.
   *
   * Cuando Carlo confirme el reparto real, se cambia en REPARTO_CULTURAL de
   * abajo — no hay que tocar nada más.
   */
  private readonly REACTIVOS_POR_BLOQUE_POR_TIPO: Record<string, number> = {
    psicometrico: 25,
    personalidad: 256,
    axiologico: 39,
    cultural: 25,
  };

  /**
   * Reparto de las 100 preguntas del examen cultural entre las materias.
   *
   * Una materia que no aparezca aquí usa el número de
   * REACTIVOS_POR_BLOQUE_POR_TIPO. Hoy está vacío a propósito: sin el dato
   * real, repartir parejo es lo honesto. **Éste es el único lugar que hay que
   * tocar cuando llegue el reparto oficial**, por ejemplo:
   *
   *     { 'Español': 30, 'Álgebra': 30, 'Historia': 20, 'Geografía': 20 }
   */
  private readonly REPARTO_CULTURAL: Record<string, number> = {};

  /**
   * Nombre del plantel (tal como se guarda en Plantel.nombre) → código del
   * temario/puente (HCM, EMM…).
   *
   * temarios.json y puente-oferta-demanda.json identifican al plantel por
   * CÓDIGO, pero un Examen guarda plantelId → Plantel.nombre (el nombre largo).
   * Este mapa cruza los dos. Los nombres son los mismos que usa el front para
   * los logos (apps/web/src/lib/planteles.ts) y el seed de planteles.
   *
   * Si un examen cultural apunta a un plantel que no está aquí, el armado falla
   * con un 404 claro en vez de servir un examen vacío en silencio.
   */
  private readonly CODIGO_POR_PLANTEL: Record<string, string> = {
    'Heroico Colegio Militar': 'HCM',
    'Escuela Militar de Medicina': 'EMM',
    'Escuela Militar de Enfermería': 'EME',
    'Escuela Militar de Odontología': 'EMO',
    'Escuela Militar de Oficiales de Sanidad': 'EMOS',
    'Escuela Militar de Aviación': 'EMA',
    'Escuela Militar de Ingeniería': 'EMI',
    'Escuela Militar de Materiales de Guerra': 'EMMG',
  };

  async armarExamen(examenId: number, usuarioId?: number) {
    const examen = await this.prisma.examen.findUnique({
      where: { id: examenId },
      include: {
        bloques: {
          orderBy: { orden: 'asc' },
        },
      },
    });

    if (!examen) {
      throw new NotFoundException('Examen no encontrado');
    }

    // Los exámenes atados a un plantel (hoy, el cultural) sólo puede
    // presentarlos quien va a ese plantel: el temario y el banco cambian por
    // escuela. Ocultar el botón en la web no basta — la URL es adivinable.
    //
    // Los psicológicos llevan plantelId nulo y los presenta cualquiera.
    if (examen.plantelId !== null && usuarioId !== undefined) {
      const usuario = await this.prisma.usuario.findUnique({
        where: { id: usuarioId },
        select: { plantelId: true },
      });
      if (usuario?.plantelId !== examen.plantelId) {
        throw new ForbiddenException(
          'Este examen es de otro plantel. El examen cultural cambia según la escuela a la que te presentas.',
        );
      }
    }

    // El examen CULTURAL se sirve del ÁRBOL DE OFERTA (por temaId), no del banco
    // plano: cualquier plantel usa el banco compartido y las opciones se barajan POR
    // INTENTO. Devuelve la MISMA forma que el flat de abajo, así el simulador y los
    // intentos no cambian. (El plano 'cultural-hcm' queda como respaldo, sin uso.)
    if (examen.tipo === 'cultural') {
      return this.armarCulturalParaSimulador(examen);
    }

    const reactivosPorBloque =
      this.REACTIVOS_POR_BLOQUE_POR_TIPO[examen.tipo] ?? 25;

    // El examen de personalidad se arma SOLO con el banco remasterizado, y el
    // cultural SOLO con el suyo. El banco viejo (v1) queda disponible en la
    // tabla pero fuera del diagnóstico; su destino es servir como set de
    // práctica separado.
    const banco = BANCO_POR_TIPO[examen.tipo];

    const bloquesConReactivos = await Promise.all(
      examen.bloques.map(async (bloque) => ({
        ...bloque,
        reactivos: await this.obtenerReactivosAleatoriosDeBloque(
          bloque.id,
          // El cultural puede pedir un número distinto por materia; los demás
          // tipos usan el mismo para todos sus bloques.
          (examen.tipo === 'cultural' ? this.REPARTO_CULTURAL[bloque.nombre] : undefined) ??
            reactivosPorBloque,
          banco,
        ),
      })),
    );

    return {
      ...examen,
      bloques: bloquesConReactivos,
    };
  }

  /**
   * Arma el examen cultural de una carrera DESDE EL ÁRBOL DE OFERTA (por temaId),
   * sin materializar bloques planos ni duplicar reactivos. Es ADITIVO: no toca
   * armarExamen (que sirve el banco plano 'cultural-hcm').
   *
   * La DEMANDA se lee de docs/examen-cultural/: temarios.json (qué materias pide
   * cada carrera) + puente-oferta-demanda.json (código de materia → slug + capítulos).
   * Es la opción rápida y reversible; el destino es tablas Carrera/Temario.
   */
  async armarExamenCultural(plantel: string, carreraIdx = 0) {
    // Indexado por PLANTEL -> CODIGO: un mismo codigo pide capitulos distintos en
    // cada escuela, asi que la seleccion se toma del plantel, no solo del codigo.
    const puente: Record<string, Record<string, { slug: string; capitulos: number[] }>> = JSON.parse(
      fs.readFileSync(this.rutaCultural('puente-oferta-demanda.json'), 'utf8'),
    ).puente;
    const temarios = JSON.parse(fs.readFileSync(this.rutaCultural('temarios.json'), 'utf8'));

    const carreras = temarios.carreras.filter((c: any) => c.plantel === plantel);
    if (!carreras.length) {
      throw new NotFoundException(`No hay temario para el plantel "${plantel}".`);
    }
    const carrera = carreras[carreraIdx] ?? carreras[0];

    // Reparto de las 100 preguntas entre las materias que este plantel realmente
    // pide (las que tienen selección en el puente). Parejo; el sobrante del redondeo
    // —cuando 100 no divide exacto entre el número de materias— va a las primeras.
    // Así todos los planteles arman 100 sin importar cuántas materias tengan:
    // 4 materias → 25 c/u; 3 materias (EMA, EME) → 34/33/33.
    const TOTAL_EXAMEN = 100;
    const materias = carrera.materias ?? [];
    const nActivas = materias.filter(
      (m: any) => puente[plantel]?.[m.codigo_normalizado || m.codigo],
    ).length;
    const base = nActivas ? Math.floor(TOTAL_EXAMEN / nActivas) : 0;
    let resto = nActivas ? TOTAL_EXAMEN - base * nActivas : 0;

    const bloques: { nombre: string; codigo: string; reactivos: unknown[] }[] = [];
    for (const m of materias) {
      const codigo = m.codigo_normalizado || m.codigo;
      const puenteMateria = puente[plantel]?.[codigo];
      if (!puenteMateria) continue; // materia sin selección definida para este plantel
      // Cuota de esta materia: base, +1 mientras quede sobrante por repartir.
      const cuota = base + (resto > 0 ? 1 : 0);
      if (resto > 0) resto--;
      // Materia sin capítulos: bloque vacío (Prisma.join([]) daría un `IN ()` inválido).
      if (puenteMateria.capitulos.length === 0) {
        bloques.push({ nombre: m.nombre, codigo, reactivos: [] });
        continue;
      }
      // El SORTEO lo hace la BASE (ORDER BY random() LIMIT n), no Node — igual que el
      // camino por Temario. Aquí el filtro va por slug del libro + número de capítulo
      // (Reactivo→Tema→Capítulo→Libro). `${...}` son PARÁMETROS, a prueba de inyección.
      // OJO: sin respuestaCorrecta — la respuesta NO se filtra al cliente.
      const disponibles = await this.prisma.$queryRaw<
        Array<{ id: number; enunciado: string; opciones: unknown; tipo: string; tema: string | null }>
      >(Prisma.sql`
        SELECT r.id, r.enunciado, r.opciones, r.tipo, r.tema
        FROM "Reactivo" r
        JOIN "Tema" t ON t.id = r."temaId"
        JOIN "Capitulo" c ON c.id = t."capituloId"
        JOIN "Libro" l ON l.id = c."libroId"
        WHERE r.banco = 'cultural'
          AND l.slug = ${puenteMateria.slug}
          AND c.numero IN (${Prisma.join(puenteMateria.capitulos)})
        ORDER BY random()
        LIMIT ${cuota}
      `);
      // El barajado POR INTENTO de las OPCIONES se queda en Node: son pocas por reactivo,
      // y así la correcta cae en distinta posición para cada aspirante/intento — para que
      // aprenda, no memorice "es la B". No rompe la calificación: se compara el TEXTO de la
      // opción, no la letra (intentos.service.ts).
      const elegidos = disponibles.map((r) => ({
        ...r,
        opciones: this.mezclar(r.opciones as string[]),
      }));
      bloques.push({ nombre: m.nombre, codigo, reactivos: elegidos });
    }

    return { tipo: 'cultural', plantel, carrera: carrera.carrera, anio: carrera.anio, bloques };
  }

  /* ═══════════════════════════════════════════════════════════
     PRÁCTICA CULTURAL POR MATERIA (Fase 04)

     Practicar UNA materia del propio plantel, sin cronómetro, con
     corrección inmediata + cita del libro. Reusa el árbol de oferta
     (los MISMOS reactivos que el simulador) y la corrección del
     repaso, pero NO toca la cola de Leitner (v1: práctica separada).
     ═══════════════════════════════════════════════════════════ */

  /**
   * Normaliza las materias del examen cultural de un plantel a
   * { nombre, capituloIds } — un solo camino para contar y sortear reactivos.
   * Prefiere las tablas Temario (editables desde el panel de Reparto); si el
   * plantel no tiene Temario PUBLICADO, cae al puente JSON, igual que el
   * simulador. Devuelve [] si el plantel no tiene demanda cultural resoluble
   * (p. ej. un plantel todavía no cableado).
   */
  private async resolverMateriasCultural(
    plantelId: number,
    plantelNombre: string,
    anio: number | null,
  ): Promise<{ nombre: string; capituloIds: number[] }[]> {
    // Fuente NUEVA: las tablas Temario.
    const temario = await this.prisma.temario.findFirst({
      where: { plantelId, estado: 'PUBLICADO', ...(anio != null ? { anio } : {}) },
      orderBy: { anio: 'desc' },
      include: {
        materias: {
          orderBy: { orden: 'asc' },
          include: { capitulos: { select: { capituloId: true } } },
        },
      },
    });
    if (temario) {
      return temario.materias.map((m) => ({
        nombre: m.nombre,
        capituloIds: m.capitulos.map((c) => c.capituloId),
      }));
    }

    // RESPALDO: puente JSON (planteles que aún no tienen Temario en tablas).
    const codigo = this.CODIGO_POR_PLANTEL[plantelNombre];
    if (!codigo) return [];
    const puente: Record<
      string,
      Record<string, { slug: string; capitulos: number[] }>
    > = JSON.parse(
      fs.readFileSync(this.rutaCultural('puente-oferta-demanda.json'), 'utf8'),
    ).puente;
    const seleccion = puente[codigo];
    if (!seleccion) return [];
    const temarios = JSON.parse(
      fs.readFileSync(this.rutaCultural('temarios.json'), 'utf8'),
    );
    const carrera = (temarios.carreras ?? []).find(
      (c: any) => c.plantel === codigo,
    );
    if (!carrera) return [];

    const materias: { nombre: string; capituloIds: number[] }[] = [];
    for (const m of carrera.materias ?? []) {
      const cod = m.codigo_normalizado || m.codigo;
      const sel = seleccion[cod];
      if (!sel || sel.capitulos.length === 0) continue;
      // slug + números de capítulo → ids de Capítulo, para unificar con el
      // camino de las tablas (todo termina en capituloIds).
      const caps = await this.prisma.capitulo.findMany({
        where: { libro: { slug: sel.slug }, numero: { in: sel.capitulos } },
        select: { id: true },
      });
      if (caps.length === 0) continue;
      materias.push({ nombre: m.nombre, capituloIds: caps.map((c) => c.id) });
    }
    return materias;
  }

  /** El plantel del usuario (id + nombre), o 404 si no tiene uno asignado. */
  private async plantelDelUsuario(usuarioId: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: { plantelId: true },
    });
    if (!usuario?.plantelId) {
      throw new NotFoundException('No tienes un plantel asignado.');
    }
    const plantel = await this.prisma.plantel.findUnique({
      where: { id: usuario.plantelId },
      select: { nombre: true },
    });
    if (!plantel) {
      throw new NotFoundException('Tu plantel no existe.');
    }
    return { plantelId: usuario.plantelId, nombre: plantel.nombre };
  }

  /**
   * Materias del examen cultural del plantel del usuario, con cuántos reactivos
   * hay disponibles en cada una. Alimenta el selector de la Fase 04.
   */
  async materiasPracticaCultural(usuarioId: number) {
    const { plantelId, nombre } = await this.plantelDelUsuario(usuarioId);
    const materias = await this.resolverMateriasCultural(plantelId, nombre, null);

    const lista = await Promise.all(
      materias.map(async (m) => ({
        materia: m.nombre,
        disponibles:
          m.capituloIds.length === 0
            ? 0
            : await this.prisma.reactivo.count({
                where: {
                  banco: 'cultural',
                  temaBanco: { capituloId: { in: m.capituloIds } },
                },
              }),
      })),
    );
    // El nombre del plantel alimenta el encabezado del selector (Fase 04).
    return { plantel: nombre, materias: lista };
  }

  /**
   * Los temas (capítulos del temario) de UNA materia del plantel del usuario,
   * cada uno con cuántos reactivos tiene. Alimenta el desglose por tema del
   * selector de la Fase 04, para practicar un capítulo suelto. Sólo devuelve
   * los capítulos con reactivos (los vacíos no se pueden practicar).
   */
  async temasPracticaCultural(usuarioId: number, materia: string) {
    const { plantelId, nombre } = await this.plantelDelUsuario(usuarioId);
    const materias = await this.resolverMateriasCultural(plantelId, nombre, null);
    const elegida = materias.find((m) => m.nombre === materia);
    if (!elegida) {
      throw new NotFoundException(
        `La materia "${materia}" no está en tu examen cultural.`,
      );
    }
    if (elegida.capituloIds.length === 0) return [];

    // Un capítulo = un "tema del temario" (05 División, 06 Productos…). El
    // conteo sale de los reactivos culturales que cuelgan de sus Temas.
    const filas = await this.prisma.$queryRaw<
      Array<{ capituloId: number; numero: number; titulo: string; disponibles: bigint }>
    >(Prisma.sql`
      SELECT c.id AS "capituloId", c.numero, c.titulo, COUNT(r.id) AS disponibles
      FROM "Capitulo" c
      JOIN "Tema" t ON t."capituloId" = c.id
      LEFT JOIN "Reactivo" r ON r."temaId" = t.id AND r.banco = 'cultural'
      WHERE c.id IN (${Prisma.join(elegida.capituloIds)})
      GROUP BY c.id, c.numero, c.titulo
      HAVING COUNT(r.id) > 0
      ORDER BY c.numero ASC
    `);
    return filas.map((f) => ({
      capituloId: f.capituloId,
      numero: Number(f.numero),
      titulo: f.titulo,
      disponibles: Number(f.disponibles),
    }));
  }

  /**
   * N reactivos aleatorios de UNA materia del plantel del usuario, barajados y
   * SIN la respuesta correcta (se revela sólo al calificar). El sorteo lo hace
   * la base (ORDER BY random() LIMIT n), igual que el simulador.
   */
  async armarPracticaCultural(
    usuarioId: number,
    materia: string,
    n: number,
    capituloId?: number,
  ) {
    const cuantos = Math.min(Math.max(1, Math.floor(n) || 20), 50);
    const { plantelId, nombre } = await this.plantelDelUsuario(usuarioId);
    const materias = await this.resolverMateriasCultural(plantelId, nombre, null);
    const elegida = materias.find((m) => m.nombre === materia);
    if (!elegida) {
      throw new NotFoundException(
        `La materia "${materia}" no está en tu examen cultural.`,
      );
    }

    // Si el aspirante pidió UN solo capítulo (un tema del temario), lo acotamos —
    // pero sólo si ese capítulo pertenece a SU materia, no a una ajena.
    let capituloIds = elegida.capituloIds;
    if (capituloId != null) {
      if (!capituloIds.includes(capituloId)) {
        throw new NotFoundException(
          `Ese tema no pertenece a la materia "${materia}".`,
        );
      }
      capituloIds = [capituloId];
    }
    if (capituloIds.length === 0) {
      return { materia: elegida.nombre, reactivos: [] };
    }

    // OJO: sin respuestaCorrecta — la respuesta NO se filtra al cliente.
    const disponibles = await this.prisma.$queryRaw<
      Array<{ id: number; enunciado: string; opciones: unknown; tema: string | null }>
    >(Prisma.sql`
      SELECT r.id, r.enunciado, r.opciones, r.tema
      FROM "Reactivo" r
      JOIN "Tema" t ON t.id = r."temaId"
      WHERE r.banco = 'cultural'
        AND t."capituloId" IN (${Prisma.join(capituloIds)})
      ORDER BY random()
      LIMIT ${cuantos}
    `);
    // Baraja las opciones POR PETICIÓN para que fije el dato y no la posición.
    const reactivos = disponibles.map((r) => ({
      ...r,
      opciones: this.mezclar(r.opciones as string[]),
    }));
    return { materia: elegida.nombre, reactivos };
  }

  /**
   * Califica UNA respuesta de práctica cultural y devuelve la corrección con la
   * cita del libro (la misma forma que el repaso). NO toca la cola de Leitner.
   * Compara por TEXTO (las opciones se barajan), no por letra.
   */
  async calificarPracticaCultural(
    reactivoId: number,
    respuestaSeleccionada: string,
  ) {
    const reactivo = await this.prisma.reactivo.findFirst({
      where: { id: reactivoId, banco: 'cultural' },
      select: { respuestaCorrecta: true, explicacion: true, referencia: true },
    });
    if (!reactivo) {
      throw new NotFoundException('Reactivo cultural no encontrado.');
    }
    return {
      esCorrecta: reactivo.respuestaCorrecta === respuestaSeleccionada,
      respuestaCorrecta: reactivo.respuestaCorrecta,
      explicacion: reactivo.explicacion,
      referencia: reactivo.referencia,
    };
  }

  /**
   * Arma los bloques del examen cultural LEYENDO LAS TABLAS (Temario → MateriaTemario
   * → MateriaTemarioCapitulo), la fuente nueva editable desde el panel. El reparto
   * sale de MateriaTemario.numPreguntas y los capítulos de la selección guardada.
   *
   * Devuelve los bloques ya armados ({ nombre, reactivos }) o `null` si el plantel
   * aún no tiene un Temario PUBLICADO para el año — en cuyo caso el llamador cae al
   * respaldo por JSON (armarExamenCultural), para no dejar a nadie sin examen.
   */
  private async armarBloquesDesdeTemario(
    plantelId: number,
    anio: number | null,
  ): Promise<{ nombre: string; reactivos: unknown[] }[] | null> {
    const temario = await this.prisma.temario.findFirst({
      where: {
        plantelId,
        estado: 'PUBLICADO',
        ...(anio != null ? { anio } : {}),
      },
      orderBy: { anio: 'desc' }, // si no se pide año, el más reciente publicado
      include: {
        materias: {
          orderBy: { orden: 'asc' },
          include: { capitulos: { select: { capituloId: true } } },
        },
      },
    });
    if (!temario) return null;

    const bloques: { nombre: string; reactivos: unknown[] }[] = [];
    for (const m of temario.materias) {
      const capituloIds = m.capitulos.map((c) => c.capituloId);
      // Materia sin capítulos: bloque vacío. Prisma.join([]) generaría un `IN ()`
      // inválido que truena; este guard reproduce el resultado del findMany vacío.
      if (capituloIds.length === 0) {
        bloques.push({ nombre: m.nombre, reactivos: [] });
        continue;
      }
      // El SORTEO lo hace la BASE (ORDER BY random() LIMIT n), no Node. Antes se traían
      // TODOS los reactivos de los capítulos a memoria y se barajaban en el único hilo
      // (coste O(banco) por examen); ahora Postgres elige y devuelve sólo los n que entran.
      // `${...}` son PARÁMETROS ($1, $2…), no texto pegado → a prueba de inyección.
      // OJO: sin respuestaCorrecta — la respuesta NO se filtra al cliente.
      // Nombres de tabla/columna verificados contra schema.prisma: si se renombran
      // Reactivo/Tema o sus columnas, hay que actualizar este query crudo.
      const disponibles = await this.prisma.$queryRaw<
        Array<{ id: number; enunciado: string; opciones: unknown; tipo: string; tema: string | null }>
      >(Prisma.sql`
        SELECT r.id, r.enunciado, r.opciones, r.tipo, r.tema
        FROM "Reactivo" r
        JOIN "Tema" t ON t.id = r."temaId"
        WHERE r.banco = 'cultural'
          AND t."capituloId" IN (${Prisma.join(capituloIds)})
        ORDER BY random()
        LIMIT ${m.numPreguntas}
      `);
      // El barajado POR INTENTO de las OPCIONES se queda en Node: son pocas por reactivo
      // y `opciones` (Json) ya llega convertida en arreglo desde el driver.
      const elegidos = disponibles.map((r) => ({
        ...r,
        opciones: this.mezclar(r.opciones as string[]),
      }));
      bloques.push({ nombre: m.nombre, reactivos: elegidos });
    }
    return bloques;
  }

  /**
   * Arma el examen CULTURAL para el simulador.
   *
   * Intenta armar desde las TABLAS Temario (armarBloquesDesdeTemario, la fuente
   * nueva editable). Si el plantel aún no tiene Temario publicado, cae al RESPALDO
   * por JSON (armarExamenCultural, vía CODIGO_POR_PLANTEL). Devuelve la MISMA forma
   * que el camino plano de armarExamen ({...examen, bloques}), para que el simulador
   * y los intentos no cambien.
   *
   * Los bloques del cultural son SINTÉTICOS: sus reactivos cuelgan de un Tema, no de
   * un Bloque de la base, así que se les fabrica el id/orden/tiempoLimite que el
   * front espera. El reloj del cultural es global (examen.duracionMin), de modo que
   * tiempoLimite por bloque es sólo informativo.
   */
  private async armarCulturalParaSimulador(examen: {
    id: number;
    tipo: string;
    nombre: string;
    duracionMin: number;
    calificable: boolean;
    plantelId: number | null;
    anio: number | null;
    bloques: unknown;
  }) {
    if (examen.plantelId === null) {
      throw new NotFoundException(
        'El examen cultural no tiene plantel asignado; no se puede resolver su temario.',
      );
    }

    // Fuente NUEVA: las tablas Temario (editables desde el panel). Si el plantel aún
    // no tiene Temario publicado, se cae al RESPALDO por JSON para no dejar a nadie
    // sin examen durante la transición.
    let bloquesArmados = await this.armarBloquesDesdeTemario(
      examen.plantelId,
      examen.anio,
    );
    if (!bloquesArmados) {
      const plantel = await this.prisma.plantel.findUnique({
        where: { id: examen.plantelId },
        select: { nombre: true },
      });
      const codigo = plantel ? this.CODIGO_POR_PLANTEL[plantel.nombre] : undefined;
      if (!codigo) {
        throw new NotFoundException(
          `El plantel "${plantel?.nombre ?? examen.plantelId}" no tiene Temario en la base ni un código de temario conocido para el examen cultural.`,
        );
      }
      const armado = await this.armarExamenCultural(codigo);
      bloquesArmados = armado.bloques;
    }

    const bloques = bloquesArmados.map((b, i) => ({
      id: i + 1,
      examenId: examen.id,
      nombre: b.nombre,
      orden: i + 1,
      tiempoLimite: examen.duracionMin,
      reactivos: b.reactivos,
    }));

    return { ...examen, bloques };
  }

  /** Ruta a un archivo de docs/examen-cultural/, robusta a desde dónde se corra. */
  private rutaCultural(archivo: string): string {
    const candidatos = [
      path.resolve(process.cwd(), '..', '..', 'docs', 'examen-cultural', archivo),
      path.resolve(__dirname, '..', '..', '..', '..', 'docs', 'examen-cultural', archivo),
    ];
    for (const c of candidatos) if (fs.existsSync(c)) return c;
    throw new NotFoundException(`No encuentro ${archivo} del examen cultural.`);
  }

  /**
   * Selecciona reactivos aleatorios de un bloque respetando los pesos de
   * TemaPrioridad (muestreo estratificado). Cada tema recibe una cuota
   * proporcional a su peso — un tema con peso=5 aparece 5× más veces
   * que uno con peso=1.
   *
   * Cuando el bloque tiene un solo tema (o los reactivos no están
   * clasificados), degrada a muestreo uniforme puro Fisher-Yates.
   */
  private async obtenerReactivosAleatoriosDeBloque(
    bloqueId: number,
    cantidad: number,
    banco?: string,
  ) {
    // 1. Trae los reactivos del bloque (filtrando por banco si aplica).
    const todosLosReactivos = await this.prisma.reactivo.findMany({
      where: { bloqueId, ...(banco ? { banco } : {}) },
      select: {
        id: true,
        tema: true,
        eje: true,
        numeroEnEje: true,
        parNumero: true,
      },
    });

    // 2. Agrupa en unidades de muestreo: los pares y anclas viajan juntos.
    const unidades = this.agruparEnUnidades(todosLosReactivos);

    // 3. Agrupa las unidades por tema.
    const porTema = new Map<string, UnidadMuestreo[]>();
    for (const u of unidades) {
      const lista = porTema.get(u.tema) ?? [];
      lista.push(u);
      porTema.set(u.tema, lista);
    }

    // 4. Si solo hay un tema, no vale la pena estratificar — unidades al azar.
    let idsAleatorios: number[];
    if (porTema.size === 1) {
      idsAleatorios = this.tomarUnidadesHasta(this.mezclar(unidades), cantidad);
    } else {
      idsAleatorios = await this.muestreoEstratificadoPorPeso(porTema, cantidad);
    }

    // 4. Fetch de los reactivos seleccionados.
    const reactivos = await this.prisma.reactivo.findMany({
      where: { id: { in: idsAleatorios } },
      select: {
        id: true,
        enunciado: true,
        opciones: true,
        tipo: true,
        tema: true,
        polaridad: true,
        imagenUrl: true,
      },
    });

    // 5. Preserva el orden aleatorio del muestreo.
    const porId = new Map(reactivos.map((r) => [r.id, r]));
    return idsAleatorios.map((id) => porId.get(id)!);
  }

  /**
   * Muestreo estratificado con pesos.
   *
   * Algoritmo:
   * 1. Consulta el catálogo TemaPrioridad. Los temas no listados usan peso=1.
   * 2. Calcula cuota proporcional por tema = round(peso_tema / suma_pesos × cantidad).
   * 3. Para cada tema, mezcla Fisher-Yates y toma la cuota (o todo si hay menos disponibles).
   * 4. Combina todo y mezcla el orden final para que los temas queden entrelazados.
   * 5. Ajusta si por redondeo la cantidad total no cuadra.
   */
  private agruparEnUnidades(
    reactivos: Array<{
      id: number;
      tema: string | null;
      eje: number | null;
      numeroEnEje: number | null;
      parNumero: number | null;
    }>,
  ): UnidadMuestreo[] {
    // índice (eje:numeroEnEje) → id, para resolver la pareja
    const porClave = new Map<string, number>();
    for (const r of reactivos) {
      if (r.eje !== null && r.numeroEnEje !== null) {
        porClave.set(`${r.eje}:${r.numeroEnEje}`, r.id);
      }
    }

    const unidades: UnidadMuestreo[] = [];
    const yaUsados = new Set<number>();

    for (const r of reactivos) {
      if (yaUsados.has(r.id)) continue;
      const tema = r.tema ?? 'sin_tema';

      // Sin pareja declarada (trampas, sueltos, y todo el banco v1 y los otros
      // bloques) → unidad de un solo reactivo. Esto conserva el comportamiento
      // histórico para psicométrico y axiológico.
      if (r.eje === null || r.parNumero === null) {
        unidades.push({ tema, ids: [r.id] });
        yaUsados.add(r.id);
        continue;
      }

      const idPareja = porClave.get(`${r.eje}:${r.parNumero}`);
      if (idPareja === undefined || yaUsados.has(idPareja)) {
        // La pareja no está en este bloque/banco — no la inventamos.
        unidades.push({ tema, ids: [r.id] });
        yaUsados.add(r.id);
        continue;
      }

      unidades.push({ tema, ids: [r.id, idPareja] });
      yaUsados.add(r.id);
      yaUsados.add(idPareja);
    }

    return unidades;
  }

  /**
   * Toma unidades completas hasta acercarse al tope de reactivos sin pasarse.
   * Nunca parte una unidad: si la siguiente no cabe entera, la salta y sigue
   * buscando una más chica que sí quepa.
   */
  private tomarUnidadesHasta(
    unidades: UnidadMuestreo[],
    tope: number,
  ): number[] {
    const ids: number[] = [];
    for (const u of unidades) {
      if (ids.length >= tope) break;
      if (ids.length + u.ids.length <= tope) ids.push(...u.ids);
    }
    return ids;
  }

  private async muestreoEstratificadoPorPeso(
    porTema: Map<string, UnidadMuestreo[]>,
    cantidad: number,
  ): Promise<number[]> {
    const pesosMap = await this.temasPrioridadService.obtenerPesos();

    // Calcula pesos efectivos para los temas que sí tienen reactivos.
    const pesosPorTema = new Map<string, number>();
    let sumaPesos = 0;
    for (const tema of porTema.keys()) {
      const peso = pesosMap[tema] ?? 1;
      pesosPorTema.set(tema, peso);
      sumaPesos += peso;
    }

    // Reactivos disponibles por tema (suma del tamaño de sus unidades).
    const disponiblesPorTema = new Map<string, number>();
    for (const [tema, unidades] of porTema.entries()) {
      disponiblesPorTema.set(
        tema,
        unidades.reduce((n, u) => n + u.ids.length, 0),
      );
    }

    // Cuota por tema, medida en REACTIVOS — redondeo simple.
    const cuotas = new Map<string, number>();
    let asignados = 0;
    for (const [tema, peso] of pesosPorTema.entries()) {
      const cuota = Math.floor((peso / sumaPesos) * cantidad);
      const disponibles = disponiblesPorTema.get(tema)!;
      const asignar = Math.min(cuota, disponibles);
      cuotas.set(tema, asignar);
      asignados += asignar;
    }

    // Si por redondeo faltan reactivos, los rellenamos priorizando los temas con más peso
    // (y con reactivos disponibles).
    const faltantes = cantidad - asignados;
    if (faltantes > 0) {
      const ordenados = Array.from(pesosPorTema.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([tema]) => tema);
      let restantes = faltantes;
      for (const tema of ordenados) {
        if (restantes === 0) break;
        const actual = cuotas.get(tema) ?? 0;
        const disponibles = disponiblesPorTema.get(tema)!;
        const puedeAgregar = Math.min(restantes, disponibles - actual);
        cuotas.set(tema, actual + puedeAgregar);
        restantes -= puedeAgregar;
      }
    }

    // Fisher-Yates por tema, tomando unidades completas hasta la cuota.
    const seleccion: number[] = [];
    for (const [tema, unidades] of porTema.entries()) {
      const cuota = cuotas.get(tema) ?? 0;
      if (cuota === 0) continue;
      seleccion.push(...this.tomarUnidadesHasta(this.mezclar(unidades), cuota));
    }

    // El redondeo hacia abajo y las unidades de tamaño 2 dejan huecos. Se rellenan
    // con unidades que no se usaron y que quepan enteras en lo que falta.
    if (seleccion.length < cantidad) {
      const yaDentro = new Set(seleccion);
      const sobrantes = this.mezclar(
        Array.from(porTema.values())
          .flat()
          .filter((u) => !u.ids.some((id) => yaDentro.has(id))),
      );
      // primero las de un reactivo: ajustan mejor los últimos huecos
      sobrantes.sort((a, b) => a.ids.length - b.ids.length);
      for (const u of sobrantes) {
        if (seleccion.length + u.ids.length > cantidad) continue;
        seleccion.push(...u.ids);
        if (seleccion.length === cantidad) break;
      }
    }

    // Mezcla final: los temas quedan entrelazados y las parejas separadas,
    // para que el aspirante no vea un reactivo junto a su invertido.
    return this.mezclar(seleccion);
  }

  private mezclar<T>(arreglo: T[]): T[] {
    const copia = [...arreglo];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }
}
