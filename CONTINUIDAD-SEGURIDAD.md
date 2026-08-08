# Continuidad — Cerrar la SEGURIDAD · Plataforma UDEFA
_(Pégame como primer mensaje en un chat nuevo. Generado: 7 ago 2026.)_

Retomamos la **Plataforma UDEFA** (monorepo `C:\proyectos\udefa`). Antes de tocar
nada: lee tu memoria (`MEMORY.md` + los archivos que referencie, sobre todo
`project_seguridad_auditoria`) y `ESTADO.md`. Trabaja como pide `CLAUDE.md`: explica
el paso a paso ANTES de hacer, pide mi OK para commits/migraciones/instalaciones (el
push lo decido yo), vocabulario llano, y VERIFICA el dato real en el código antes de
afirmar.

## Frente: cerrar la seguridad antes del deploy

Estado VERIFICADO en código el 7 ago 2026:

**YA HECHO, COMMITEADO y PUSHEADO en `main`** (commits 454e253, faacd7f, 3c5c3fd,
f52c6d1) — no re-litigar:
- Rate limiting: throttler global 200/min + login 10/min (`@Throttle`).
- Helmet: `app.use(helmet())` en `main.ts`.
- Cookie de sesión httpOnly: la pone el backend en `/auth/login`, la borra en
  `/auth/logout`.
- CORS por entorno: `CORS_ORIGIN` en `main.ts` + `apps/backend/.env.example`.
- Endpoints sensibles/legacy con `@Roles('admin')` o JWT. El viejo
  `cultural/:plantel/armar` quedó solo-admin (tomaba el plantel de la URL sin
  verificar quién llama); el front no lo usa. Las rutas nuevas de práctica cultural
  resuelven el plantel del USUARIO (`@UsuarioActual`), no de la URL.

**LO QUE FALTA:**
1. **Verificación de correo (#5)** — es lo único real por construir en código. El
   campo `emailVerificado` existe en `schema.prisma` (default `false`) pero NO se usa:
   sólo se lee en la lista de admin; no se manda correo de confirmación ni se bloquea
   la cuenta sin verificar → cuentas basura / registro con correo ajeno.
   ⛔ **DECISIÓN PREVIA DE CARLO PENDIENTE: con qué servicio se mandan los correos**
   (Resend / SendGrid / SMTP). Sin eso no se arma el flujo. Pasos una vez elegido:
   endpoint que genera token de verificación → correo con link → endpoint que marca
   `emailVerificado=true` → decidir el "gate" (bloquear login, o sólo ciertas
   funciones, hasta verificar).
2. **Higiene de deploy** (config, NO código; el frente de despliegue está PAUSADO):
   `NODE_ENV=production` (para que la cookie sea `Secure`), fijar `CORS_ORIGIN` y
   `COOKIE_DOMAIN` al dominio real (front y back en subdominios distintos).

Opcional: correr `/security-review` por si algo nuevo se coló desde la auditoría del
26 jul.

## Estado del working tree (para no pisar a otros chats)
La interfaz de **práctica cultural (Fase 04)** quedó pulida y PUSHEADA esta sesión
(commits 05b0ce6, bb25b2c, aa768a2): escudos sin letras (`public/planteles/emblema/`
+ helper `emblemaDePlantel`), mini logo El Monote fijo en el encabezado, fondo
"Escudo" fijo (quitado el toggle demo), sin conteos de reactivos, y difuminado del
escudo de fondo (máscara radial CSS al 70%).

Siguen SIN commitear (otros frentes — NO tocar sin avisar): `app.module.ts` (throttle
por env/escalabilidad), `intentos.service.ts` y `resultados/[intentoId]/page.tsx`
(panel de resultados), scripts `_audit/_loadtest/_temas`, `CONTINUIDAD.md`,
`DEFINICION-DE-LISTO.md`, `docs/personalidad-remaster/v3/15-*.md`.

**Arranca preguntándome: ¿con qué servicio mandamos los correos de verificación?**
De esa decisión depende todo el flujo del punto 1.
