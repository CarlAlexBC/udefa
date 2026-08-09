# Pendientes — Plataforma UDEFA

> **Tablero único de pendientes, por frente.** Es una **foto con fecha**, no la fuente
> viva: el detalle real de cada frente vive en su `CONTINUIDAD-*.md`, el banco de
> reactivos en `ESTADO.md` (generado), y lo ya hecho en el `git log`. **Actualízalo
> cuando cierres algo** — si no, envejece (ya nos pasó).
>
> **Verificado contra el repo (git log + los `CONTINUIDAD-*.md`) el 9 ago 2026.**

## Recién cerrado (para no volver a listarlo como pendiente)

- **Personalidad v3** — banco **completo 33/33** y **activado en el simulador** (importador
  v3, scoring Verdadero/Falso, instrucciones del bloque). → `docs/personalidad-remaster/CONTINUIDAD-V3.md`
- **Verificación de correo** — **resuelta por diseño**: se retiró el registro libre (las
  cuentas nacen por compra o admin), así que no hay cuentas basura y se decidió NO construir
  el candado. → `CONTINUIDAD-SEGURIDAD.md`
- **Panel de resultados** — bug de móvil de la curva de ritmo (`878a2ef`) + cruce L/K/F del
  falso "perfil idealizado" (`e3e43a6`).
- **Razonamiento abstracto** — 32 reactivos con imagen + panel de claves + enlace/imagen en
  el simulador (`7ece89e`, `c583c83`, `5bb21ca`).

## En construcción ahora (sin commitear — otro frente)

- **Correo transaccional + recuperación de contraseña** (`apps/backend/src/mail/`, rutas
  `/olvide-password` y `/restablecer`).
- **Onboarding** "empieza por aquí" (`apps/web/src/components/onboarding/`).
- **Guía del Aspirante — digitalización** (páginas por capítulo + índice lateral).

## Examen cultural → detalle: `CONTINUIDAD-CULTURAL.md`

- **Cerrar Biología:** cap 37 digestión (en curso) cierra EME/EMM/EMO; cap 14 epigenética
  para EMOS.
- **EMMA:** confirmar el hueco de Física U11 (el temario y el encabezado se contradicen).
- **EMEFA:** sin empezar (3 libros nuevos). · **EMT:** bloqueado (sin convocatoria).

## Para abrir la tienda (v1)

- **Deploy en vivo** — PAUSADO: falta la config real (`NODE_ENV=production`, `CORS_ORIGIN`,
  `COOKIE_DOMAIN`) + montar Render/Neon. → `CONTINUIDAD-SEGURIDAD.md`
- **Razonamiento abstracto** — los 4 que faltan (R3 recaptura + enunciados de R24/R25/R30),
  la clave de `ra-33` (omitido por ahora) y los **títulos por reactivo** (Carlo).

## Afinaciones de personalidad v3 (menores) → detalle: `CONTINUIDAD-V3.md`

- Dispersar pares POS/NEG en el simulador · recalibrar el umbral del cluster MMPI-K · revisar
  los ~60 🎖 del eje 08 Patriotismo (muy alto) · reescribir la guía §5.3 del Axiológico a los
  9 valores oficiales.

## Blindaje anti-copia

- Capa 5 (canarios) hecha · Capa 6 (legal) en borrador · faltan las demás del plan de 6.

## Después (con la tienda abierta)

- Más planteles culturales (el cultural es anual) · llevar el Axiológico a los 9 valores.
