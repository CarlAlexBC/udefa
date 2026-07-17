import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TemasPrioridadService } from '../temas-prioridad/temas-prioridad.service';

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
   *
   * Si el tipo no está mapeado, cae al default de 25 (comportamiento historico).
   */
  private readonly REACTIVOS_POR_BLOQUE_POR_TIPO: Record<string, number> = {
    psicometrico: 25,
    personalidad: 256,
    axiologico: 39,
  };

  async armarExamen(examenId: number) {
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

    const reactivosPorBloque =
      this.REACTIVOS_POR_BLOQUE_POR_TIPO[examen.tipo] ?? 25;

    const bloquesConReactivos = await Promise.all(
      examen.bloques.map(async (bloque) => ({
        ...bloque,
        reactivos: await this.obtenerReactivosAleatoriosDeBloque(
          bloque.id,
          reactivosPorBloque,
        ),
      })),
    );

    return {
      ...examen,
      bloques: bloquesConReactivos,
    };
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
  ) {
    // 1. Trae todos los reactivos del bloque con su tema para poder agrupar.
    const todosLosReactivos = await this.prisma.reactivo.findMany({
      where: { bloqueId },
      select: { id: true, tema: true },
    });

    // 2. Agrupa por tema. Los sin tema van a grupo especial 'sin_tema'.
    const porTema = new Map<string, number[]>();
    for (const r of todosLosReactivos) {
      const tema = r.tema ?? 'sin_tema';
      const lista = porTema.get(tema) ?? [];
      lista.push(r.id);
      porTema.set(tema, lista);
    }

    // 3. Si solo hay un tema, no vale la pena estratificar — Fisher-Yates puro.
    let idsAleatorios: number[];
    if (porTema.size === 1) {
      idsAleatorios = this.mezclar(todosLosReactivos.map((r) => r.id)).slice(
        0,
        cantidad,
      );
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
  private async muestreoEstratificadoPorPeso(
    porTema: Map<string, number[]>,
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

    // Cuota por tema — redondeo simple.
    const cuotas = new Map<string, number>();
    let asignados = 0;
    for (const [tema, peso] of pesosPorTema.entries()) {
      const cuota = Math.floor((peso / sumaPesos) * cantidad);
      const disponibles = porTema.get(tema)!.length;
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
        const disponibles = porTema.get(tema)!.length;
        const puedeAgregar = Math.min(restantes, disponibles - actual);
        cuotas.set(tema, actual + puedeAgregar);
        restantes -= puedeAgregar;
      }
    }

    // Fisher-Yates por tema, tomando la cuota asignada.
    const seleccion: number[] = [];
    for (const [tema, ids] of porTema.entries()) {
      const cuota = cuotas.get(tema) ?? 0;
      if (cuota === 0) continue;
      const mezclados = this.mezclar(ids);
      seleccion.push(...mezclados.slice(0, cuota));
    }

    // Mezcla final para que no queden agrupados por tema al llegar al aspirante.
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
