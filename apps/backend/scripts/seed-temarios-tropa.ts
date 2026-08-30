/**
 * Seed de tropa: crea las 35 filas de Plantel (tipo TROPA, el catálogo completo
 * de docs/examen-tropa/README.md) y enlaza las materias ya verificadas para cada
 * curso — Física General y Álgebra-Baldor (Fase 1 de este seed, 28 ago 2026) y
 * ahora también Legislación Militar y Derechos Humanos (Fase 2, ver
 * docs/examen-tropa/importador-tropa.md).
 *
 * A diferencia de Física/Álgebra (donde cada curso pide capítulos distintos),
 * Legislación Militar y Derechos Humanos se verificaron SIN VARIANTE: los 19
 * cursos que piden LM piden exactamente los mismos 8 archivos completos, y los
 * 23 que piden DH, los mismos 2 libros completos (ver
 * docs/examen-tropa/legislacion-militar.md y derechos-humanos.md). Por eso no
 * hace falta un mapeo curso→capítulo para estas dos: es fijo, en LM_LIBROS y
 * DH_LIBROS. Y a diferencia del cultural, estas dos materias salen de VARIOS
 * libros a la vez (leyes distintas) — MateriaTemario sólo tiene un libroId
 * "representativo" (el primero de la lista); el alcance real que sirve un
 * examen sale de MateriaTemarioCapitulo, no de ese campo.
 *
 * numPreguntas se reparte 100 entre el total de materias que el curso pide
 * *según el catálogo* (README), no sólo entre las que ya están enlazadas — así
 * el reparto no cambia cuando se enlace la siguiente materia.
 *
 * Idempotente A NIVEL DE MATERIA, no de curso: si el Temario del curso ya
 * existe (de una corrida anterior), se reusa — no se vuelve a crear ni se
 * salta el curso entero. Cada materia (Álgebra, Física General, Legislación
 * Militar, Derechos Humanos) se enlaza sólo si ese Temario todavía no la
 * tiene. Así una segunda corrida puede sumar materias nuevas sin duplicar las
 * que ya estaban.
 *
 * Uso (desde apps/backend):
 *   npx ts-node scripts/seed-temarios-tropa.ts
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const ANIO = 2026;
const TOTAL_EXAMEN = 100;

interface FuenteLibro {
  slug: string;
  capitulos: number[]; // números de Capitulo dentro de ese libro
}

interface Curso {
  codigo: string; // = Plantel.nombre, idéntico al nombre del PDF de temario
  escuela: string;
  materias: string[]; // catálogo completo (README), en el orden del reparto
  // Sólo se llenan si el curso pide Física/Álgebra y ya se verificó el alcance:
  fisica?: number[]; // números de Capitulo (fisica-perez-montiel) a enlazar
  algebra?: number[]; // números de Capitulo (algebra-baldor) a enlazar
  // La EMMA pide Álgebra y Trigonometría del OTRO libro de tropa (Zill/Dewar,
  // slug `zill-atg`) — el mismo que ya sirve a la EMMA/EMI del cultural
  // (`ÁLGE-01-2026` y `TGA-02-2026`), ya escrito y cerrado. Ver
  // docs/examen-tropa/algebra-trigonometria-zill.md.
  algebraZill?: number[]; // números de Capitulo (zill-atg) para la materia "Álgebra"
  trigonometria?: number[]; // números de Capitulo (zill-atg) para "Trigonometría"
}

const FISICA_EMMA_COMPLETO = [4, 5, 6, 8, 11];
const FISICA_EMTEFA_2OS = [4, 5, 6];
const ALGEBRA_EMCS = [1, 2, 3, 4, 5, 8, 10, 18, 20];
const ALGEBRA_EMTEFA_2OS = [5, 6, 8, 10, 13, 20, 21, 24, 28]; // XXVIII ya está en el banco (29 ago 2026)
// EMMA (Zill/Dewar, zill-atg): mismos capítulos "Completo" que ÁLGE-01-2026 y
// TGA-02-2026 del cultural — verificado en los encabezados de zill-02/03/04 y
// zill-08/09/10/11 (los 4 cursos de tropa piden exactamente lo mismo).
const ALGEBRA_EMMA_ZILL = [2, 3, 4];
const TRIGONOMETRIA_EMMA_ZILL = [8, 9, 10, 11];

// Derechos Humanos (DH-03-2026): 2 libros completos, sin variante entre los 23
// cursos que la piden. Capítulos = orden de aparición en importar-tropa.ts.
const DH_LIBROS: FuenteLibro[] = [
  { slug: 'ley-uso-de-la-fuerza', capitulos: [1] },
  { slug: 'derechos-humanos-dn-m-110', capitulos: [1, 2, 3] }, // Cap. II, VIII, IX
];

// Legislación Militar (LM-02-2026): 4 fuentes completas, sin variante entre
// los 19 cursos que la piden.
const LM_LIBROS: FuenteLibro[] = [
  { slug: 'codigo-justicia-militar', capitulos: [1, 2] }, // Título Octavo, Noveno
  { slug: 'ley-organica-ejercito', capitulos: [1, 2, 3] }, // Título I, II, IV Cap. I-II
  { slug: 'ley-disciplina', capitulos: [1] },
  { slug: 'reglamento-deberes-militares', capitulos: [1, 2] }, // Título I, II Cap. I
];

// Los 35 cursos, catálogo completo de docs/examen-tropa/README.md.
// fisica/algebra sólo en los 16 verificados contra find_tables(); el resto
// queda como fila de identidad para las materias que aún no se enlazan.
const CURSOS: Curso[] = [
  { codigo: 'EMCS_Cso_F_S1_Snd_Es_2026', escuela: 'Escuela Militar de Clases de Sanidad', materias: ['Legislación Militar', 'Derechos Humanos', 'Álgebra', 'Biología'], algebra: ALGEBRA_EMCS },
  { codigo: 'EMCS_Cso_F_S2_Snd__Es_2026', escuela: 'Escuela Militar de Clases de Sanidad', materias: ['Legislación Militar', 'Derechos Humanos', 'Álgebra', 'Biología'], algebra: ALGEBRA_EMCS },
  { codigo: 'EMCT_F_S_1os_TRANS_2026', escuela: 'Escuela Militar de Clases de Transmisiones', materias: ['Legislación Militar', 'Derechos Humanos'] },
  { codigo: 'EMCT_F_S_2os_TRANS_2026', escuela: 'Escuela Militar de Clases de Transmisiones', materias: ['Legislación Militar', 'Derechos Humanos'] },
  { codigo: 'EME_C_I_F_O_E_M_2026', escuela: 'Escuela Militar de Enfermería (CIFOEM)', materias: ['Legislación Militar', 'Derechos Humanos', 'Enfermería'] },
  { codigo: 'EMMA_F_A_I_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Álgebra', 'Física General', 'Trigonometría', 'Aeronáutica'], fisica: FISICA_EMMA_COMPLETO, algebraZill: ALGEBRA_EMMA_ZILL, trigonometria: TRIGONOMETRIA_EMMA_ZILL },
  { codigo: 'EMMA_F_O_F_A_A_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Álgebra', 'Física General', 'Trigonometría', 'Aeronáutica'], fisica: FISICA_EMMA_COMPLETO, algebraZill: ALGEBRA_EMMA_ZILL, trigonometria: TRIGONOMETRIA_EMMA_ZILL },
  { codigo: 'EMMA_F_O_F_A_A_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Álgebra', 'Física General', 'Trigonometría', 'Aeronáutica'], fisica: FISICA_EMMA_COMPLETO, algebraZill: ALGEBRA_EMMA_ZILL, trigonometria: TRIGONOMETRIA_EMMA_ZILL },
  { codigo: 'EMMA_F_O_F_A_E_E_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Álgebra', 'Física General', 'Trigonometría', 'Electrónica'], fisica: FISICA_EMMA_COMPLETO, algebraZill: ALGEBRA_EMMA_ZILL, trigonometria: TRIGONOMETRIA_EMMA_ZILL },
  { codigo: 'EMMA_I_F_O_F_A_A_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Legislación Militar', 'Derechos Humanos', 'Física General'], fisica: FISICA_EMMA_COMPLETO },
  { codigo: 'EMMA_I_F_O_F_A_A_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Legislación Militar', 'Derechos Humanos', 'Administración Moderna'] },
  { codigo: 'EMMA_I_F_O_F_A_E_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Legislación Militar', 'Derechos Humanos', 'Física General'], fisica: FISICA_EMMA_COMPLETO },
  { codigo: 'EMMG_F_S_1os_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Derechos Humanos', 'Álgebra', 'Matemáticas'] },
  { codigo: 'EMMG_F_S_2os_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Legislación Militar', 'Derechos Humanos'] },
  { codigo: 'EMMG_MG_LIC_LOG_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Álgebra', 'Matemáticas', 'Español', 'Historia de México', 'Metodología de la Investigación'] },
  { codigo: 'EMMG_MG_TEC_MANTO_I_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Álgebra', 'Matemáticas', 'Física General', 'Química', 'Táctica'], fisica: [5, 12, 13, 14], algebra: [8, 24, 16, 23] },
  { codigo: 'EMMG_Sgto_1o_M_I_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Derechos Humanos'] },
  { codigo: 'EMMG_T_E_BALISTICA_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Derechos Humanos', 'Álgebra', 'Matemáticas', 'Física General'], fisica: [4, 5, 6], algebra: [24, 25, 33, 35] },
  { codigo: 'EMOS_C_I_F_O_S_T_U_M_2026', escuela: 'Escuela Militar de Oficiales de Sanidad (CIFOS)', materias: ['Álgebra', 'Física General', 'Biología', 'Química'], fisica: [4, 5, 8], algebra: [1, 2, 3, 4, 5, 8, 10, 18, 20, 24, 25] },
  { codigo: 'EMT_F_O_TRANS_2026', escuela: 'Escuela Militar de Transmisiones', materias: ['Derechos Humanos', 'Álgebra', 'Matemáticas', 'Electrónica'] },
  { codigo: 'EMT_TRANS_LIC_TICS_2026', escuela: 'Escuela Militar de Transmisiones', materias: ['Álgebra', 'Cálculo Diferencial', 'Español', 'Metodología de la Investigación'], algebra: [1, 2, 3, 4, 5, 8, 10, 18, 20, 24] },
  { codigo: 'HCM_CIFOA_A_B___2026', escuela: 'Heroico Colegio Militar (CIFO)', materias: ['Legislación Militar', 'Derechos Humanos', 'Táctica'] },
  { codigo: 'HCM_CIFOA_CAB___2026', escuela: 'Heroico Colegio Militar (CIFO)', materias: ['Legislación Militar', 'Derechos Humanos', 'Táctica'] },
  { codigo: 'HCM_CIFOA_ZPDR___2026', escuela: 'Heroico Colegio Militar (CIFO)', materias: ['Legislación Militar', 'Derechos Humanos', 'Táctica'] },
  { codigo: 'HCM_CIFOGN_2026', escuela: 'Heroico Colegio Militar (CIFO)', materias: ['Legislación Militar', 'Derechos Humanos', 'Seguridad Pública'] },
  { codigo: 'HCM_CIFOS_PM__2026', escuela: 'Heroico Colegio Militar (CIFO)', materias: ['Legislación Militar', 'Derechos Humanos', 'Táctica'] },
  { codigo: 'HCM_HCMART_2026', escuela: 'Heroico Colegio Militar (CIFO)', materias: ['Legislación Militar', 'Derechos Humanos', 'Táctica'] },
  { codigo: 'EMTEFA_F_S_1os_FAAA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', materias: ['Legislación Militar', 'Derechos Humanos', 'Física', 'Química', 'Electrónica'] },
  { codigo: 'EMTEFA_F_S_1os_FAAMA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', materias: ['Legislación Militar', 'Derechos Humanos', 'Administración Moderna', 'Logística Militar'] },
  { codigo: 'EMTEFA_F_S_1os_FAEEA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', materias: ['Legislación Militar', 'Derechos Humanos', 'Electrónica', 'Sistemas Digitales'] },
  { codigo: 'EMTEFA_F_S_1os_FAEMA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', materias: ['Legislación Militar', 'Derechos Humanos', 'Aeronáutica', 'Motores de Reacción'] },
  { codigo: 'EMTEFA_F_S_2os_FAAA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', materias: ['Álgebra', 'Física General', 'Cálculo Diferencial', 'Cálculo Integral'], fisica: FISICA_EMTEFA_2OS, algebra: ALGEBRA_EMTEFA_2OS },
  { codigo: 'EMTEFA_F_S_2os_FAAMA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', materias: ['Álgebra', 'Física General', 'Cálculo Diferencial', 'Cálculo Integral'], fisica: FISICA_EMTEFA_2OS, algebra: ALGEBRA_EMTEFA_2OS },
  { codigo: 'EMTEFA_F_S_2os_FAEEA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', materias: ['Álgebra', 'Física General', 'Cálculo Diferencial', 'Cálculo Integral'], fisica: FISICA_EMTEFA_2OS, algebra: ALGEBRA_EMTEFA_2OS },
  { codigo: 'EMTEFA_F_S_2os_FAEMA_2026', escuela: 'Escuela Militar de Tropas Especialistas de la F.A.', materias: ['Álgebra', 'Física General', 'Cálculo Diferencial', 'Cálculo Integral'], fisica: FISICA_EMTEFA_2OS, algebra: ALGEBRA_EMTEFA_2OS },

  // EMI: temario subido el 29 ago 2026, `materias` sin reconocer todavía
  // (fila de identidad nada más -- igual que el resto antes de vaciarles
  // Física/Álgebra).
  { codigo: 'EMI_ADM_EVLN_PROYEC_2026', escuela: 'Escuela Militar de Ingeniería', materias: [] },
  { codigo: 'EMI_ING_AUTOMOTRIZ_2026', escuela: 'Escuela Militar de Ingeniería', materias: [] },
  { codigo: 'EMI_ING_COSTOS_2026', escuela: 'Escuela Militar de Ingeniería', materias: [] },
  { codigo: 'EMI_SIST_CALIDAD_2026', escuela: 'Escuela Militar de Ingeniería', materias: [] },
  { codigo: 'EMI_ESP_TELEM__TICA_2026', escuela: 'Escuela Militar de Ingeniería', materias: [] },
  { codigo: 'EMI_T_I_2026', escuela: 'Escuela Militar de Ingeniería', materias: [] },
];

/**
 * Enlaza UNA materia (que puede salir de varios libros a la vez, p. ej.
 * Legislación Militar) a un Temario. Idempotente: si el Temario ya tiene una
 * MateriaTemario con ese nombre, no hace nada — así una corrida posterior
 * puede sumar materias nuevas sin duplicar las que ya estaban.
 *
 * `libroId` de MateriaTemario queda apuntando al PRIMER libro de `fuentes`:
 * es un campo "representativo" que hoy nada lee para servir el examen (eso
 * sale de MateriaTemarioCapitulo → Capitulo → Libro); con una sola materia
 * bastaría, pero el esquema no admite varios.
 */
/**
 * Enlaza los capítulos de `fuentes` a un materiaTemario YA EXISTENTE que no
 * los tenga todavía. Reconcilia sólo por ADICIÓN (nunca quita un capítulo que
 * ya estuviera enlazado), para que correr el seed de nuevo tras ampliar el
 * alcance de una materia (p. ej. sumar capítulos nuevos del banco) sume lo que
 * falta sin duplicar lo que ya estaba.
 */
async function reconciliarCapitulos(
  tx: any,
  materiaTemarioId: number,
  nombre: string,
  fuentes: FuenteLibro[],
): Promise<void> {
  const existentes = await tx.materiaTemarioCapitulo.findMany({
    where: { materiaTemarioId },
    select: { capituloId: true },
  });
  const idsExistentes = new Set(existentes.map((e: { capituloId: number }) => e.capituloId));

  let sumados = 0;
  let total = 0;
  for (const fuente of fuentes) {
    const libro = await tx.libro.findUnique({ where: { slug: fuente.slug }, select: { id: true } });
    if (!libro) throw new Error(`libro "${fuente.slug}" no existe`);
    for (const numero of fuente.capitulos) {
      total++;
      const cap = await tx.capitulo.findUnique({
        where: { libroId_numero: { libroId: libro.id, numero } },
        select: { id: true },
      });
      if (!cap) {
        console.log(`      ⚠ ${nombre}: capítulo ${numero} no está en la oferta (${fuente.slug}) — se omite`);
        continue;
      }
      if (idsExistentes.has(cap.id)) continue; // ya estaba enlazado de una corrida anterior
      await tx.materiaTemarioCapitulo.create({ data: { materiaTemarioId, capituloId: cap.id } });
      sumados++;
    }
  }
  if (sumados > 0) {
    console.log(`      • ${nombre}: +${sumados} capítulo(s) nuevo(s) enlazado(s) (de ${total} pedidos en total)`);
  } else {
    console.log(`      • ${nombre}: ya estaba enlazada (materiaTemario id=${materiaTemarioId}), sin capítulos nuevos que sumar`);
  }
}

async function enlazarMateria(
  tx: any,
  temarioId: number,
  nombre: string,
  fuentes: FuenteLibro[],
  cuota: number,
  orden: number,
): Promise<void> {
  for (const fuente of fuentes) {
    const unicos = new Set(fuente.capitulos);
    if (unicos.size !== fuente.capitulos.length) {
      throw new Error(`${nombre}/${fuente.slug}: números de capítulo repetidos en la fuente (${fuente.capitulos.join(',')})`);
    }
  }

  const yaExiste = await tx.materiaTemario.findFirst({
    where: { temarioId, nombre },
    select: { id: true },
  });
  if (yaExiste) {
    // La materia ya existe (de una corrida anterior): sólo se reconcilian los
    // capítulos por si `fuentes` trae números nuevos que antes no estaban en
    // el banco. La cuota y el orden no cambian una vez creada la materia.
    await reconciliarCapitulos(tx, yaExiste.id, nombre, fuentes);
    return;
  }

  const primerLibro = await tx.libro.findUnique({ where: { slug: fuentes[0].slug }, select: { id: true } });
  if (!primerLibro) throw new Error(`libro "${fuentes[0].slug}" no existe`);

  const mt = await tx.materiaTemario.create({
    data: { temarioId, nombre, libroId: primerLibro.id, numPreguntas: cuota, orden },
    select: { id: true },
  });

  await reconciliarCapitulos(tx, mt.id, nombre, fuentes);
}

async function main() {
  console.log('▶ Seed Temarios TROPA — arranca');

  let plantelesCreados = 0;
  let plantelesExistentes = 0;
  let temariosCreados = 0;
  let temariosExistentes = 0;

  for (const curso of CURSOS) {
    let plantel = await prisma.plantel.findFirst({ where: { nombre: curso.codigo }, select: { id: true } });
    if (!plantel) {
      plantel = await prisma.plantel.create({
        data: { nombre: curso.codigo, descripcion: `${curso.escuela} — ${curso.materias.join(', ')}`, tipo: 'TROPA' },
        select: { id: true },
      });
      plantelesCreados++;
      console.log(`✓ Plantel TROPA creado: ${curso.codigo} (id=${plantel.id})`);
    } else {
      plantelesExistentes++;
    }

    const tieneLM = curso.materias.includes('Legislación Militar');
    const tieneDH = curso.materias.includes('Derechos Humanos');
    if (!curso.fisica && !curso.algebra && !curso.algebraZill && !curso.trigonometria && !tieneLM && !tieneDH) continue; // fila de identidad nada más, por ahora

    // cuota y orden por posición en curso.materias (catálogo README), no sólo
    // entre las materias que se enlazan hoy — así no hay que recalcular nada
    // cuando se enlace la siguiente materia en una corrida futura.
    const nActivas = curso.materias.length;
    const base = Math.floor(TOTAL_EXAMEN / nActivas);
    const resto = TOTAL_EXAMEN - base * nActivas;
    const cuotaDe = (nombreMateria: string) => {
      const idx = curso.materias.indexOf(nombreMateria);
      return base + (idx < resto ? 1 : 0);
    };
    const ordenDe = (nombreMateria: string) => curso.materias.indexOf(nombreMateria) + 1;

    await prisma.$transaction(async (tx) => {
      let temario = await tx.temario.findFirst({
        where: { plantelId: plantel!.id, anio: ANIO, estado: 'PUBLICADO' },
        select: { id: true },
      });
      if (!temario) {
        temario = await tx.temario.create({
          data: { plantelId: plantel!.id, anio: ANIO, estado: 'PUBLICADO' },
          select: { id: true },
        });
        temariosCreados++;
        console.log(`  ✓ ${curso.codigo} → Temario ${ANIO} creado (id=${temario.id})`);
      } else {
        temariosExistentes++;
        console.log(`  • ${curso.codigo} → Temario ${ANIO} ya existía (id=${temario.id})`);
      }

      if (curso.algebra) {
        await enlazarMateria(tx, temario.id, 'Álgebra', [{ slug: 'algebra-baldor', capitulos: curso.algebra }], cuotaDe('Álgebra'), ordenDe('Álgebra'));
      }
      if (curso.algebraZill) {
        await enlazarMateria(tx, temario.id, 'Álgebra', [{ slug: 'zill-atg', capitulos: curso.algebraZill }], cuotaDe('Álgebra'), ordenDe('Álgebra'));
      }
      if (curso.trigonometria) {
        await enlazarMateria(tx, temario.id, 'Trigonometría', [{ slug: 'zill-atg', capitulos: curso.trigonometria }], cuotaDe('Trigonometría'), ordenDe('Trigonometría'));
      }
      if (curso.fisica) {
        await enlazarMateria(tx, temario.id, 'Física General', [{ slug: 'fisica-perez-montiel', capitulos: curso.fisica }], cuotaDe('Física General'), ordenDe('Física General'));
      }
      if (tieneLM) {
        await enlazarMateria(tx, temario.id, 'Legislación Militar', LM_LIBROS, cuotaDe('Legislación Militar'), ordenDe('Legislación Militar'));
      }
      if (tieneDH) {
        await enlazarMateria(tx, temario.id, 'Derechos Humanos', DH_LIBROS, cuotaDe('Derechos Humanos'), ordenDe('Derechos Humanos'));
      }
    }, { timeout: 60000, maxWait: 10000 });
    // timeout generoso (default de Prisma: 5 s): contra Neon en producción, la
    // latencia de red por las varias consultas de un curso con varias materias
    // agota el default y la transacción se cierra a medio curso (P2028).
  }

  console.log('\n  Resumen:');
  console.log(`     Planteles TROPA creados: ${plantelesCreados} · ya existían: ${plantelesExistentes}`);
  console.log(`     Temarios creados: ${temariosCreados} · ya existían: ${temariosExistentes}`);
  console.log('✔ Seed completado');
}

main()
  .catch((e) => {
    console.error('✖ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
