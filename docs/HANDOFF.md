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
| Frontend — landing pública `/` | ✅ | Hero dark + fases + CTA final con transiciones dark/light. Logo real integrado |
| Frontend — auth flow | ✅ | `/login` + `/registro` (con auto-login), token en cookie, middleware guard en `src/middleware.ts` protege `/inicio/*` |
| Frontend — `/inicio` (privado) | ✅ | Lista de planteles con HeaderPrivado (logout funcional que llama `POST /auth/logout`) |
| CORS backend | ✅ | `app.enableCors()` habilitado en `main.ts` para requests desde `http://localhost:3000` |
| Frontend — panel de resultados | ⏳ | Diseñado en mockup (Mockup B validado); implementación pendiente |
| Frontend — simulador de examen | ⏳ | Diseñado en mockup; implementación pendiente |
| Módulo cultural | ⏳ | Nada aún |
| Reporte PDF | ⏳ | Nada aún |
| Panel de admin | ⏳ | Nada aún |

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
- `http://localhost:3000/registro` — crear cuenta (auto-login incluido)
- `http://localhost:3000/login` — iniciar sesión (redirige a `/inicio`)
- `http://localhost:3000/inicio` — área privada (redirige a `/login` si no hay cookie)

**Vía Thunder Client** en VS Code (para endpoints sin UI todavía). Los protegidos requieren header
`Authorization: Bearer <token>` — el token sale de `POST /auth/login`.

Endpoints principales:
- `POST /auth/login` — devuelve `access_token`
- `POST /usuarios/registro`
- `GET /planteles` — público (para form de registro)
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

## Cómo hablarme

- **Explícame antes de hacer.** Concepto nuevo → dime brevemente qué es, por qué lo estamos usando, y qué alternativas descarté antes de escribir código.
- **Yo controlo el ritmo.** Si algo no entiendo, freno. Si ya lo sé, digo "sáltate".
- **Analogías cortas y con valor didáctico** — las históricas o del mundo real me ayudan mucho, pero no las hagas de 3 párrafos.
- **No me hagas cosas mecánicas sin explicar el porqué.** Aunque el paso sea trivial (npm install, git commit), tiene un porqué que quiero entender.
- **Si dudo entre explicar o ejecutar, explica primero.** Si te aburro, yo digo "salta".

Ver `feedback_estilo_pedagogico.md` en memoria para más contexto.

## Trabajos recientes (últimos 10 commits)

```
4748d3d Frontend: sistema de diseno y auth flow completo
d288e22 Frontend: setup Next 16 en apps/web con landing publica de planteles
468eaee HANDOFF: renombrar rutas backend/ -> udefa/ tras rename del monorepo
17a5d5e Actualiza generar.py
68bb2b9 HANDOFF: reflejar paginacion de reactivos y ultimos commits
e0de84c Paginacion en GET /reactivos con filtro por bloque
bcc537f Handoff doc: contexto completo para retomar el proyecto
dcaf799 Limpieza de artefactos en el banco de personalidad
6ca2a90 Clasificacion inicial de polaridad para reactivos de personalidad
f52c6d1 Auditoria de seguridad: proteger endpoints legacy con JWT
```

## Pendientes propuestos (orden sugerido)

1. **🎯 Implementar el simulador de examen en frontend.** Ya tenemos el mockup validado (screenshot dentro del landing). Toca la pantalla `/inicio/plantel/[id]/examen/[tipo]` con la lógica de reactivos + timer + `.map()` de opciones + auto-guardar con `POST /intentos/:id/responder`. **Es el core del producto — sin esto no hay producto.**
2. **Implementar el panel de resultados** — mockup B ya está validado. La pantalla `/inicio/resultados/[sesionId]` consume `GET /sesiones-completas/:id/resultados` y renderiza los cards + diagnósticos + gráficas + timeline.
3. **Fotos reales de planteles + página unitaria `/inicio/plantel/[id]`** — mockup C validado. Falta conseguir fotos oficiales de EMM (Medicina) e EMI (Ingeniería); la del HCM ya está en `OneDrive\FOTOS H.C.M\`.
4. **Bloque 5 razonamiento abstracto** — imágenes de reactivos a Cloudinary. Requiere llenar `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET` en `.env`.
5. **Panel de administración + RBAC** — separar admin de aspirante con campo `rol` a Usuario + decorador `@Roles('admin')`.
6. **Refinamiento de polaridad con LLM** — para la feature "detección de contradicciones internas".
7. **Módulo cultural** — reactivos por plantel. Suscripción anual.
8. **Reporte PDF personalizado** con Puppeteer.
9. **App móvil** con React Native + Expo.
10. **Hardening auth** — migrar cookie de token a httpOnly seteada por backend (más seguro contra XSS).

## Al arrancar un chat nuevo

Después de pegar este documento, dime específicamente **por dónde quieres seguir**.
Ejemplos:
- "Vamos por el frontend, arranca por el setup de Next.js"
- "Sigamos con el bloque 5 razonamiento abstracto"
- "Quiero refinar la polaridad con LLM"
- "Vamos con panel de admin + RBAC"

Yo leo mi memoria (que tiene contexto complementario), este documento, y arranco
pedagógico + hands-on desde donde me digas.
