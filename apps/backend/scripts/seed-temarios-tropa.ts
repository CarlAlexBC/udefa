/**
 * Seed de tropa: crea las 35 filas de Plantel (tipo TROPA, el catálogo completo
 * de docs/examen-tropa/README.md) y enlaza Física General + Álgebra-Baldor para
 * los cursos verificados en docs/examen-tropa/enlace-fisica-algebra.md.
 *
 * El mapeo curso→capítulo se sacó leyendo la tabla real de cada temario PDF con
 * find_tables() (PyMuPDF), no de texto corrido, y se cruzó contra los capítulos
 * que de verdad existen en `fisica-perez-montiel` (libroId 28) y `algebra-baldor`
 * (libroId 27). Los capítulos que un curso pide pero el banco cultural nunca
 * vació (Física 12/13/14, Baldor XVI/XXIII/XXVIII/XXXV) se dejan fuera a
 * propósito — no es un hueco de este script, es que esos capítulos no tienen
 * reactivos escritos todavía.
 *
 * numPreguntas se reparte 100 entre el total de materias que el curso pide
 * *según el catálogo* (README), no sólo entre las que se enlazan hoy — así el
 * reparto no hay que recalcularlo cuando se enlacen Legislación Militar y
 * Derechos Humanos más adelante.
 *
 * Idempotente: si un Plantel TROPA con ese nombre ya existe, no se duplica. Si
 * ya tiene Temario 2026 PUBLICADO, se salta.
 *
 * Uso (desde apps/backend):
 *   npx ts-node scripts/seed-temarios-tropa.ts
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const ANIO = 2026;
const TOTAL_EXAMEN = 100;

interface Curso {
  codigo: string; // = Plantel.nombre, idéntico al nombre del PDF de temario
  escuela: string;
  materias: string[]; // catálogo completo (README), en el orden del reparto
  // Sólo se llena si el curso pide Física/Álgebra y ya se verificó el alcance:
  fisica?: number[]; // números de Capitulo (fisica-perez-montiel) a enlazar
  algebra?: number[]; // números de Capitulo (algebra-baldor) a enlazar
}

const FISICA_EMMA_COMPLETO = [4, 5, 6, 8, 11];
const FISICA_EMTEFA_2OS = [4, 5, 6];
const ALGEBRA_EMCS = [1, 2, 3, 4, 5, 8, 10, 18, 20];
const ALGEBRA_EMTEFA_2OS = [5, 6, 8, 10, 13, 20, 21, 24]; // XXVIII(28) fuera: no está en el banco

// Los 35 cursos, catálogo completo de docs/examen-tropa/README.md.
// fisica/algebra sólo en los 16 verificados contra find_tables(); el resto
// queda como fila de identidad para cuando se enlacen sus materias.
const CURSOS: Curso[] = [
  { codigo: 'EMCS_Cso_F_S1_Snd_Es_2026', escuela: 'Escuela Militar de Clases de Sanidad', materias: ['Legislación Militar', 'Derechos Humanos', 'Álgebra', 'Biología'], algebra: ALGEBRA_EMCS },
  { codigo: 'EMCS_Cso_F_S2_Snd__Es_2026', escuela: 'Escuela Militar de Clases de Sanidad', materias: ['Legislación Militar', 'Derechos Humanos', 'Álgebra', 'Biología'], algebra: ALGEBRA_EMCS },
  { codigo: 'EMCT_F_S_1os_TRANS_2026', escuela: 'Escuela Militar de Clases de Transmisiones', materias: ['Legislación Militar', 'Derechos Humanos'] },
  { codigo: 'EMCT_F_S_2os_TRANS_2026', escuela: 'Escuela Militar de Clases de Transmisiones', materias: ['Legislación Militar', 'Derechos Humanos'] },
  { codigo: 'EME_C_I_F_O_E_M_2026', escuela: 'Escuela Militar de Enfermería (CIFOEM)', materias: ['Legislación Militar', 'Derechos Humanos', 'Enfermería'] },
  { codigo: 'EMMA_F_A_I_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Álgebra', 'Física General', 'Trigonometría', 'Aeronáutica'], fisica: FISICA_EMMA_COMPLETO },
  { codigo: 'EMMA_F_O_F_A_A_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Álgebra', 'Física General', 'Trigonometría', 'Aeronáutica'], fisica: FISICA_EMMA_COMPLETO },
  { codigo: 'EMMA_F_O_F_A_A_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Álgebra', 'Física General', 'Trigonometría', 'Aeronáutica'], fisica: FISICA_EMMA_COMPLETO },
  { codigo: 'EMMA_F_O_F_A_E_E_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Álgebra', 'Física General', 'Trigonometría', 'Electrónica'], fisica: FISICA_EMMA_COMPLETO },
  { codigo: 'EMMA_I_F_O_F_A_A_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Legislación Militar', 'Derechos Humanos', 'Física General'], fisica: FISICA_EMMA_COMPLETO },
  { codigo: 'EMMA_I_F_O_F_A_A_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Legislación Militar', 'Derechos Humanos', 'Administración Moderna'] },
  { codigo: 'EMMA_I_F_O_F_A_E_M_A_2026', escuela: 'Escuela Militar de Mantenimiento y Abastecimiento', materias: ['Legislación Militar', 'Derechos Humanos', 'Física General'], fisica: FISICA_EMMA_COMPLETO },
  { codigo: 'EMMG_F_S_1os_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Derechos Humanos', 'Álgebra', 'Matemáticas'] },
  { codigo: 'EMMG_F_S_2os_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Legislación Militar', 'Derechos Humanos'] },
  { codigo: 'EMMG_MG_LIC_LOG_M_G_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Álgebra', 'Matemáticas', 'Español', 'Historia de México', 'Metodología de la Investigación'] },
  { codigo: 'EMMG_MG_TEC_MANTO_I_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Álgebra', 'Matemáticas', 'Física General', 'Química', 'Táctica'], fisica: [5], algebra: [8, 24] },
  { codigo: 'EMMG_Sgto_1o_M_I_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Derechos Humanos'] },
  { codigo: 'EMMG_T_E_BALISTICA_2026', escuela: 'Escuela Militar de Materiales de Guerra', materias: ['Derechos Humanos', 'Álgebra', 'Matemáticas', 'Física General'], fisica: [4, 5, 6], algebra: [24, 25, 33] },
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
];

async function enlazarMateria(
  tx: any,
  temarioId: number,
  nombre: string,
  slug: string,
  numeros: number[],
  cuota: number,
  orden: number,
): Promise<number> {
  // Verificación anti-duplicado: el propio caller pasa un array ya en Set,
  // pero se re-verifica aquí para no confiar ciegamente en el dato de arriba.
  const unicos = [...new Set(numeros)];
  if (unicos.length !== numeros.length) {
    throw new Error(`${nombre}: números de capítulo repetidos en la fuente (${numeros.join(',')})`);
  }

  const libro = await tx.libro.findUnique({ where: { slug }, select: { id: true } });
  if (!libro) throw new Error(`libro "${slug}" no existe`);

  const mt = await tx.materiaTemario.create({
    data: { temarioId, nombre, libroId: libro.id, numPreguntas: cuota, orden },
    select: { id: true },
  });

  let ok = 0;
  for (const numero of unicos) {
    const cap = await tx.capitulo.findUnique({
      where: { libroId_numero: { libroId: libro.id, numero } },
      select: { id: true },
    });
    if (!cap) {
      console.log(`      ⚠ ${nombre}: capítulo ${numero} no está en la oferta (${slug}) — se omite`);
      continue;
    }
    // @@unique([materiaTemarioId, capituloId]) revienta si se repite: es la
    // segunda barrera anti-duplicado, a nivel de base de datos.
    await tx.materiaTemarioCapitulo.create({ data: { materiaTemarioId: mt.id, capituloId: cap.id } });
    ok++;
  }
  console.log(`      • ${nombre}: ${cuota} preguntas · ${ok}/${unicos.length} caps enlazados (${slug})`);
  return ok;
}

async function main() {
  console.log('▶ Seed Temarios TROPA — arranca');

  let plantelesCreados = 0;
  let plantelesExistentes = 0;
  let temariosCreados = 0;
  let temariosSaltados = 0;

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

    if (!curso.fisica && !curso.algebra) continue; // fila de identidad nada más, por ahora

    const ya = await prisma.temario.findFirst({
      where: { plantelId: plantel.id, anio: ANIO, estado: 'PUBLICADO' },
      select: { id: true },
    });
    if (ya) {
      console.log(`  • ${curso.codigo} → ya tiene Temario ${ANIO} publicado (id=${ya.id}), skip`);
      temariosSaltados++;
      continue;
    }

    const nActivas = curso.materias.length;
    const base = Math.floor(TOTAL_EXAMEN / nActivas);
    let resto = TOTAL_EXAMEN - base * nActivas;
    // cuota por posición en curso.materias, igual que el reparto del cultural.
    const cuotaDe = (nombreMateria: string) => {
      const idx = curso.materias.indexOf(nombreMateria);
      // El resto se lo llevan las primeras materias del listado (orden README).
      return base + (idx < resto ? 1 : 0);
    };

    await prisma.$transaction(async (tx) => {
      const temario = await tx.temario.create({
        data: { plantelId: plantel!.id, anio: ANIO, estado: 'PUBLICADO' },
        select: { id: true },
      });
      temariosCreados++;
      console.log(`  ✓ ${curso.codigo} → Temario ${ANIO} creado (id=${temario.id})`);

      let orden = 1;
      if (curso.algebra) {
        await enlazarMateria(tx, temario.id, 'Álgebra', 'algebra-baldor', curso.algebra, cuotaDe('Álgebra'), orden++);
      }
      if (curso.fisica) {
        await enlazarMateria(tx, temario.id, 'Física General', 'fisica-perez-montiel', curso.fisica, cuotaDe('Física General'), orden++);
      }
    });
  }

  console.log('\n  Resumen:');
  console.log(`     Planteles TROPA creados: ${plantelesCreados} · ya existían: ${plantelesExistentes}`);
  console.log(`     Temarios creados: ${temariosCreados} · saltados: ${temariosSaltados}`);
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
