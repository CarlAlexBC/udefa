# Handoff — Plataforma UDEFA (backend)

> Este documento es lo que necesitas para (a) recordar dónde vas si vuelves después
> de un tiempo, o (b) iniciar un chat nuevo con Claude Code y no perder contexto.
> **Cómo usarlo en un chat nuevo:** copia todo el contenido y pégalo como primer
> mensaje. Después dile "sigamos".

---

## Quién soy

Soy Carlo Alexander. Autor de **"El Monote te Guía"** (@elmonoteteguia en TikTok),
donde vendo material de preparación en PDF para el proceso de admisión a planteles
militares mexicanos (Universidad del Ejército y Fuerza Aérea, UDEFA).

Presenté 3 veces el examen psicológico, fui cadete del Heroico Colegio Militar, y
armé el material con apoyo de psicólogos militares. Eso es mi diferenciador — no es
contenido genérico de internet.

Estoy aprendiendo a programar mientras construyo el backend de mi plataforma. **Mi
estilo de trabajo es pedagógico + hands-on**: quiero entender qué estamos haciendo
y por qué, no solo que me lo hagas. Detalles en la memoria de Claude Code
(`feedback_estilo_pedagogico.md`).

## Qué es este proyecto

Backend para **Plataforma de Preparación UDEFA** — una app web+móvil que reemplaza
los PDFs actuales por un simulador interactivo del examen de admisión militar. El
material tiene dos módulos grandes:

- **Módulo psicológico** (pago único, no caduca): 3 fases — Psicométrico, Personalidad,
  Axiológico.
- **Módulo cultural** (suscripción anual, cambia cada año): reactivos por plantel.

**El corazón del producto es el panel de resultados** — no solo dice "acertaste
tantos", diagnóstica patrones ("bajaste el ritmo en la segunda mitad") y remite a
secciones específicas de la Guía del Aspirante.

Documento maestro del proyecto:
`C:\Users\carlo\OneDrive\Escritorio\UDEFA 2026\ARCHIVOS DEFINITIVOS PARA EL PROCESO DE ADMISION\Archivo de proyecto\Proyecto_Plataforma_UDEFA.docx`

## Dónde vive el código

- **Ruta local:** `C:\proyectos\udefa\`
- **Repo GitHub:** https://github.com/CarlexBaznas05/udefa
- **Estructura:** monorepo con npm workspaces
  ```
  udefa/                      (raíz del monorepo)
  ├── apps/
  │   ├── backend/            NestJS + Prisma + PostgreSQL
  │   ├── web/                Next.js (por construir)
  │   └── mobile/             React Native + Expo (por construir)
  ├── tools/                  Scripts one-off (parsers, uploaders, clasificadores)
  ├── docs/                   Docs del proyecto + JSONs de reactivos
  └── .claude/                Config de Claude Code
  ```

## Stack

- **Backend:** NestJS 11 (TypeScript) + Prisma ORM + PostgreSQL local en :5432 (puerto backend :3001)
- **Frontend web:** Next.js 16 (App Router) + Tailwind 4 + shadcn/ui + Manrope (puerto :3000)
- **Auth:** JWT con Passport (backend), token en cookie (frontend) para compatibilidad con middleware edge. Sesiones rastreadas en tabla `Sesion` (límite 2 dispositivos)
- **Payments (futuro):** MercadoPago
- **Files (futuro):** Cloudinary
- **Móvil (futuro):** React Native + Expo

## Estado actual

| Área | Estado | Detalle |
|---|---|---|
| Auth (JWT + guards + ownership) | ✅ | Login, registro, sesiones, protección de endpoints |
| Modelo de datos | ✅ | 9 tablas + 3 enums en Postgres |
| Contenido — Psicométrico | 🟡 | 3/4 bloques cargados (250 reactivos). Falta razonamiento abstracto (necesita imágenes en Cloudinary) |
| Contenido — Personalidad | ✅ | 2,807 reactivos, escala Likert 4 puntos, polaridad clasificada (heurística — 77% POS / 23% NEG) |
| Contenido — Axiológico | ✅ | 155 reactivos únicos consolidados de 4 simuladores, Likert 5 puntos |
| Sistema de intentos + respuestas | ✅ | Crear/responder/finalizar con business rules |
| Sistema de sesiones completas | ✅ | Agrupa 3 intentos, resultados agregados |
| Endpoints de resultados | ✅ | Métricas por bloque, tema, temporales (consistencia, fatiga) |
| Endpoints de consulta | ✅ | GET intentos, respuestas, sesiones del usuario |
| Auditoría de seguridad JWT | ✅ | Reactivos, examenes, bloques, planteles protegidos |
| RBAC (admin vs usuario) | ⏳ | **No hay** — todos los users autenticados son admins de facto |
| Paginación en GET /reactivos | ✅ | `?take=N&skip=N&bloqueId=N`, default 50, tope 200 |
| Sistema de diseño frontend | ✅ | shadcn/ui + paleta acordada (carbón, crema, latón, oliva militar), Manrope única. Ver `project_sistema_diseno.md` en memoria |
| Frontend — landing pública `/` | ✅ | Hero dark + fases + ejemplos resueltos + planteles + sobre creador + CTA final |
| Frontend — auth flow | ✅ | `/login` + `/registro` con selector de plantel obligatorio, auto-login, token en cookie, middleware guard en `src/middleware.ts` protege `/inicio/*` |
| Frontend — dashboard `/inicio` | ✅ | Perfil-aware: sin plantel → selector; con plantel → card + 3 CTAs de examenes + placeholder Guia |
| Frontend — simulador multi-examen | ✅ | Ruta dinámica `/inicio/simulador/[examenId]`. Bloques con timer independiente, instrucciones + ejemplo antes de cada bloque, mapa sticky, navegación libre, finalizar en cualquier momento. UI adaptativa A/B/C/D (psicométrico) vs Likert (personalidad/axiológico) |
| Frontend — panel de resultados | ✅ | `/inicio/resultados/[intentoId]` con hero de puntaje, desglose por bloque/tema, timeline temporal, diagnósticos accionables auto-generados |
| Modelo usuario ↔ plantel | ✅ | `plantelId` obligatorio en registro; endpoint `PATCH /usuarios/mi-plantel` para asignar plantel a legacy; `GET /auth/perfil` devuelve usuario completo con plantel |
| CORS backend | ✅ | `app.enableCors()` habilitado en `main.ts` para requests desde `http://localhost:3000` |
| Bloque de Razonamiento Abstracto | ⏳ | Sin reactivos (necesita imágenes en Cloudinary). El simulador lo detecta y salta con nota |
| Guía del Aspirante online | ⏳ | Pendiente remasterizar como lectura online (se decidió no seguir con PDF descargable) |
| Rediseño sección "Ejemplos" landing | ⏳ | Carlo la marcó como pendiente de rediseño; código existente sirve como base |
| Integración logos planteles | ⏳ | Assets en `public/planteles/{HMC,EMM,EMI}.png`; falta integrar en cards de landing y dashboard |
| Módulo cultural | ⏳ | Nada aún |
| Reporte PDF | ⏳ | Nada aún |
| Panel de admin + RBAC | ⏳ | Nada aún |

## Datos actuales en la BD

- **3 usuarios:**
  - Carlo Alexander (`carlo@prueba.com`, id=1) — password original olvidada
  - Carlo (`emtg@prueba.com`, id=2) — password olvidada también, existe en BD
  - Yolanda Maleny (`YMMD@prueba.com`, id=3) — creado vía frontend `/registro`, funcional
- **3 planteles:** Heroico Colegio Militar, Escuela Militar de Medicina, Escuela Militar de Ingeniería
- **3 exámenes:**
  - id=1: Psicométrico EIC DN-11 (calificable, 40 min, 4 bloques)
  - id=2: Personalidad (no calificable, 45 min, 1 bloque)
  - id=3: Axiológico (no calificable, 10 min, 1 bloque)
- **Bloques 1, 3, 4** con reactivos reales; **bloque 5** vacío (razonamiento abstracto pendiente); **bloques 6 y 7** con contenido cargado.
- **~3,190 reactivos** totales en el banco.

## Cómo levantar el proyecto (comandos)

```bash
# Instalar dependencias (desde el raíz)
cd C:\proyectos\udefa
npm install

# Backend NestJS en :3001 (terminal 1)
npm run backend:dev

# Frontend Next.js en :3000 (terminal 2, separada)
npm run web:dev

# Migraciones de Prisma (desde apps/backend)
cd apps\backend
npx prisma migrate dev --name <descripcion>
npx prisma generate     # regenera cliente TypeScript

# Ver la BD visualmente
npx prisma studio       # abre navegador con GUI en :5555
```

Env vars están en `apps/backend/.env` (gitignored). Incluyen:
`DATABASE_URL`, `JWT_SECRET`, `PORT=3001`, `CLOUDINARY_CLOUD_NAME` (+ KEY/SECRET pendientes de llenar).

## Cómo probar la plataforma

**Vía frontend** (recomendado ahora que existe UI):
- `http://localhost:3000` — landing pública
- `http://localhost:3000/registro` — crear cuenta con selector de plantel
- `http://localhost:3000/login` — iniciar sesión (redirige a `/inicio`)
- `http://localhost:3000/inicio` — dashboard privado (redirige a `/login` si no hay cookie)
- `http://localhost:3000/inicio/simulador/1` — simulador psicométrico (4 bloques, A/B/C/D)
- `http://localhost:3000/inicio/simulador/2` — simulador personalidad (Likert 4 puntos)
- `http://localhost:3000/inicio/simulador/3` — simulador axiológico (Likert 5 puntos)
- `http://localhost:3000/inicio/resultados/[intentoId]` — panel de resultados

**Vía Thunder Client** en VS Code (para endpoints sin UI todavía). Los protegidos requieren header
`Authorization: Bearer <token>` — el token sale de `POST /auth/login`.

Endpoints principales:
- `POST /auth/login` — devuelve `access_token`
- `GET /auth/perfil` — usuario autenticado completo con plantel incluido
- `POST /usuarios/registro` — requiere `{ nombre, email, password, plantelId }`
- `PATCH /usuarios/mi-plantel` — asigna/cambia plantel del usuario autenticado
- `GET /planteles` — público (para form de registro y landing)
- `GET /examenes/:id/armar` — devuelve el examen listo para presentar
- `POST /intentos` — crea un intento (usuarioId sale del JWT)
- `POST /intentos/:id/responder`
- `PATCH /intentos/:id/finalizar` (body: `{"estado": "COMPLETADA"}`)
- `GET /intentos/:id/resultados` — todas las métricas
- `POST /sesiones-completas` — crea envoltorio de examen completo
- `GET /sesiones-completas/:id/resultados` — resultados agregados

## Patrones y decisiones de diseño clave

Guarda estos para mantener consistencia:

1. **Guardar vs. calcular:** no se guarda lo que se puede calcular. Excepción: `esCorrecta` se guarda como snapshot para preservar historia si algún día se edita la `respuestaCorrecta` de un reactivo.
2. **Ownership check por recurso:** helper `validarPropiedad<T>` en cada service. Si intento acceder a un recurso que no me pertenece → HTTP 403.
3. **JWT a nivel de clase por default** en controllers. Excepción granular solo cuando hay razón (ej: `GET /planteles` público para formulario de registro).
4. **`REACTIVOS_POR_BLOQUE_POR_TIPO`** en `ExamenesService` decide cuántos reactivos servir según tipo (`psicometrico:25, personalidad:256, axiologico:39`).
5. **Fisher-Yates shuffle** para muestreo aleatorio real (no `sort() => Math.random() - 0.5` que da distribución sesgada).
6. **Umbrales como constantes con nombre**, no números mágicos (ej: `UMBRAL_FATIGA_PCT = -20`).
7. **DTOs inline en controllers** (excepto Auth que usa clases DTO). Consistente con el estilo existente — si algún día refactorizamos a class-validator, se hace todo junto.
8. **Arquitectura de rutas frontend:** `/` = landing pública (marketing), `/inicio` = área privada (dashboard). Middleware guard en `src/middleware.ts` fuerza cookie de auth en `/inicio/*`.
9. **Token en cookie, no localStorage.** El middleware corre en el edge server y no puede leer localStorage. Helper `src/lib/auth.ts` centraliza `setToken/getToken/clearToken`. Cookie NO httpOnly por ahora (migrar a httpOnly setada por backend cuando toque hardening).
10. **Paleta y tipografía como sistema, no ad-hoc:** todos los colores vienen de `globals.css` (`--primary`, `--accent`, `--military`, etc.). Cero hex hardcodeado en componentes. Ver `project_sistema_diseno.md` en memoria para las reglas de uso.
11. **shadcn/ui v4 usa Base UI** (sucesor de Radix UI). El Button NO acepta `asChild`. Para links con estilo de botón: `<Link className={cn(buttonVariants({...}))}>`.
12. **Simulador multi-examen via ruta dinámica.** `/inicio/simulador/[examenId]` maneja los 3 tipos con la misma lógica. UI adaptativa: `examen.calificable === true` → opciones verticales A/B/C/D; `false` → grid Likert horizontal. Timer por bloque usa `bloque.tiempoLimite * 60` (no hardcoded).
13. **Instrucciones/ejemplos por bloque centralizados** en `src/lib/instrucciones-bloques.ts`. Contenido oficial extraído del PDF "EXAMEN SIMULADOR PRUEBAS EIC-DN11 2026 4" (bloques 1-3) y Guía del Aspirante (bloque 4 y examenes de personalidad/axiológico). Consumido tanto por el simulador como por la sección de ejemplos en la landing → cero duplicación.
14. **Helper `apiFetch` en `src/lib/api.ts`.** Wrapper de fetch que agrega Bearer token de cookie automáticamente, serializa body, y parsea mensajes de error de NestJS. Uso: `apiFetch<T>(path, { method, body })`.
15. **Diagnósticos accionables auto-generados** en panel de resultados. La función `calcularDiagnosticos` lee las métricas temporales y por-bloque para emitir cards con severidad (atencion/revisar/fortaleza). No hay tabla de diagnósticos preescritos — se derivan de los datos.

## Cómo hablarme

- **Explícame antes de hacer.** Concepto nuevo → dime brevemente qué es, por qué lo estamos usando, y qué alternativas descarté antes de escribir código.
- **Yo controlo el ritmo.** Si algo no entiendo, freno. Si ya lo sé, digo "sáltate".
- **Analogías cortas y con valor didáctico** — las históricas o del mundo real me ayudan mucho, pero no las hagas de 3 párrafos.
- **No me hagas cosas mecánicas sin explicar el porqué.** Aunque el paso sea trivial (npm install, git commit), tiene un porqué que quiero entender.
- **Si dudo entre explicar o ejecutar, explica primero.** Si te aburro, yo digo "salta".

Ver `feedback_estilo_pedagogico.md` en memoria para más contexto.

## Trabajos recientes (últimos 10 commits)

```
c9ff226 Simulador funcional multi-examen + modelo usuario-plantel + landing rica
db81603 HANDOFF: reflejar sprint de frontend + auth flow
4748d3d Frontend: sistema de diseno y auth flow completo
d288e22 Frontend: setup Next 16 en apps/web con landing publica de planteles
468eaee HANDOFF: renombrar rutas backend/ -> udefa/ tras rename del monorepo
17a5d5e Actualiza generar.py
68bb2b9 HANDOFF: reflejar paginacion de reactivos y ultimos commits
e0de84c Paginacion en GET /reactivos con filtro por bloque
6ca2a90 Clasificacion inicial de polaridad para reactivos de personalidad
f52c6d1 Auditoria de seguridad: proteger endpoints legacy con JWT
```

## Pendientes propuestos (orden sugerido)

1. **🎯 Guía del Aspirante como lectura online.** Se descartó el PDF descargable. Toca crear `/inicio/guia` como página con capítulos navegables (probablemente con Table of Contents lateral). **Además la queremos remasterizar juntos** — mejorar el contenido/tono/estructura antes de publicarla. El .docx está en `OneDrive\...\LA GUIA DEL ASPIRANTE (U.D.E.F.A.)\`.
2. **Rediseño de la sección "Ejemplos resueltos" en la landing.** El código actual funciona pero Carlo lo marcó como "no me gustó, dejar pendiente para modificar después".
3. **Integrar logos oficiales de planteles.** Los archivos ya están en `apps/web/public/planteles/{HMC,EMM,EMI}.png`. Falta usarlos con `<Image>` en las cards de la landing (`PlantelCardMarketing`) y en la card del plantel del usuario en el dashboard.
4. **Bloque 4 Razonamiento Abstracto** — imágenes de reactivos a Cloudinary. Requiere llenar `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET` en `.env`. El simulador ya detecta bloque vacío y salta.
5. **Página unitaria de plantel `/inicio/plantel/[id]`** — con más detalle del plantel (oferta educativa, requisitos, foto). Mockup C ya validado.
6. **Reset de passwords de usuarios legacy** — `carlo@prueba.com` (id=1) y `emtg@prueba.com` (id=2) tienen password olvidada. Un script de 20 líneas con bcrypt para actualizar.
7. **Sesión completa (los 3 exámenes agrupados).** El backend ya tiene `SesionExamenCompleto`. Falta implementar el flujo en el frontend: crear sesión, presentar los 3 exámenes secuencialmente, panel de resultados agregado.
8. **Panel de administración + RBAC** — separar admin de aspirante con campo `rol` a Usuario + decorador `@Roles('admin')`.
9. **Refinamiento de polaridad con LLM** — para la feature "detección de contradicciones internas".
10. **Módulo cultural** — reactivos por plantel. Suscripción anual.
11. **Reporte PDF personalizado** con Puppeteer.
12. **App móvil** con React Native + Expo.
13. **Hardening auth** — migrar cookie de token a httpOnly seteada por backend (más seguro contra XSS).

## Al arrancar un chat nuevo

Después de pegar este documento, dime específicamente **por dónde quieres seguir**.
Ejemplos:
- "Vamos por la Guía online, arranca leyendo el .docx para remasterizar"
- "Rediseñemos la sección de ejemplos de la landing"
- "Integra los logos de planteles en las cards"
- "Reset password de mi usuario `carlo@prueba.com`"
- "Sigue con el bloque de razonamiento abstracto"
- "Vamos con panel de admin + RBAC"

Yo leo mi memoria (que tiene contexto complementario), este documento, y arranco
pedagógico + hands-on desde donde me digas.
