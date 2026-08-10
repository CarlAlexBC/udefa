/**
 * Sonda de solo lectura: reproduce EXACTAMENTE lo que devuelve GET /admin/bancos,
 * usando la misma fuente de verdad (BANCOS_EN_USO / BANCOS_ARCHIVADOS del dist
 * compilado) y la misma consulta. Verifica la tabla sin necesidad de sesión admin.
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { PrismaClient } = require('@prisma/client');
const {
  BANCOS_EN_USO,
  BANCOS_ARCHIVADOS,
} = require('../dist/examenes/examenes.service');

const p = new PrismaClient();

p.reactivo
  .groupBy({ by: ['banco'], _count: { _all: true } })
  .then((filas) => {
    const salida = filas
      .map((f) => ({
        banco: f.banco,
        reactivos: f._count._all,
        enUso: Boolean(BANCOS_EN_USO[f.banco]),
        archivado: Boolean(BANCOS_ARCHIVADOS[f.banco]),
        estado: BANCOS_EN_USO[f.banco]
          ? 'EN USO'
          : BANCOS_ARCHIVADOS[f.banco]
            ? 'archivado'
            : 'sin uso',
        detalle: BANCOS_EN_USO[f.banco] ?? BANCOS_ARCHIVADOS[f.banco] ?? '—',
      }))
      .sort(
        (a, b) =>
          Number(b.enUso) - Number(a.enUso) ||
          Number(a.archivado) - Number(b.archivado) ||
          b.reactivos - a.reactivos,
      );
    console.log('Lo que vera la tabla del panel:');
    console.table(salida.map(({ enUso, archivado, ...v }) => v));
    const total = salida.reduce((n, x) => n + x.reactivos, 0);
    const archivados = salida
      .filter((x) => x.archivado)
      .reduce((n, x) => n + x.reactivos, 0);
    console.log(
      `\nTotal en la base: ${total} reactivos. Archivados (intactos, solo retirados): ${archivados}.`,
    );
  })
  .catch((e) => {
    console.error('ERR', e.message);
    process.exitCode = 1;
  })
  .finally(() => p.$disconnect());
