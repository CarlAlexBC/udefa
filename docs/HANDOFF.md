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
| Frontend — simulador multi-examen | ✅ | Ruta dinámica `/inicio/simulador/[examenId]`. Bloques con timer independiente, instrucciones + ejemplo antes de cada bloque, banda de reactivos sticky bottom (escala a 256+), navegación libre + auto-advance al responder (250ms), tema oculto al aspirante, finalizar en cualquier momento. UI adaptativa: A/B/C/D vertical (psicométrico), Sí/No en 2 botones grandes (personalidad), Likert 5 puntos horizontal (axiológico) |
| Frontend — panel de resultados calificable | ✅ | `PanelCalificable` en `/inicio/resultados/[intentoId]` con hero de %, diagnósticos accionables (fatiga, bloques débiles, fortalezas), desglose por bloque/tema, timeline temporal |
| Frontend — panel de resultados autoevaluación | ✅ | `PanelAutoevaluacion` para personalidad/axiológico. Hero card muestra score coincidencia ideal (axiológico) o reactivos respondidos (personalidad). Secciones: consistencia por tema (barras coloreadas por coherencia), estilo de respuesta (sesgo Sí/No + índice de deseabilidad social) con alertas de aquiescencia/negativismo/idealización |
| Frontend — sesión completa (3 fases) | ✅ | Ruta `/inicio/sesion` crea SesionExamenCompleto y redirige al primer examen con `?sesion=id`; simulador detecta el flag y arranca examen siguiente al finalizar cada uno; al terminar el 3ero cierra sesión y va a `/inicio/sesion-resultados/[sesionId]` con panel agregado + sección "Coherencia Personalidad ↔ Axiológico" (distancia cross-examen normalizada 0-100) |
| Modelo usuario ↔ plantel | ✅ | `plantelId` obligatorio en registro; endpoint `PATCH /usuarios/mi-plantel` para asignar plantel a legacy; `GET /auth/perfil` devuelve usuario completo con plantel |
| Análisis psicométrico avanzado | ✅ | `IntentosService.calcularAnalisisConsistencia` usa polaridad + tema. Para personalidad: `calcularSesgoRespuesta` (aquiescencia, negativismo, deseabilidad). Para axiológico: `calcularScoreCoincidenciaIdeal` (0-100 vs perfil militar). `SesionesCompletasService.calcularDistanciaCrossExamen` compara `valores_militares` entre ambos exámenes |
| Logos oficiales planteles | ✅ | HMC/EMM/EMI en `public/planteles/`. Helper `logoDePlantel` en `src/lib/planteles.ts`. Integrados en landing y dashboard privado |
| CORS backend | ✅ | `app.enableCors()` habilitado en `main.ts` para requests desde `http://localhost:3000` |
| Guía del Aspirante — Tanda 1 sanada | ✅ | Contenido source-of-truth en `docs/guia-aspirante/` con 4 secciones sanadas (§3.6, §4.6.2, §4.6.7, §5.7) usando marcos psicológicos clásicos. Ver README ahí para estado completo del proyecto de sanación |
| Bloque de Razonamiento Abstracto | ⏳ | Sin reactivos (necesita imágenes en Cloudinary). El simulador lo detecta y salta con nota |
| Guía del Aspirante — digitalización | ⏳ | Contenido sanado listo (Tanda 1) — falta convertir a lectura online (Fase 4: MDX en `/inicio/guia`) |
| Guía del Aspirante — Tandas 2 y 3 | ⏳ | Ampliar §3.4, §3.5, §5.3, §4.6.6; limpiar artefactos de proceso en docx original |
| Rediseño sección "Ejemplos" landing | ⏳ | Carlo la marcó como pendiente de rediseño; código existente sirve como base |
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
16. **Análisis polarizado por tema.** Cada respuesta se normaliza a un score direccional considerando polaridad del reactivo (POSITIVA/NEGATIVA). Personalidad → escala −1/+1. Axiológico → escala 1-5. El sistema detecta contradicciones (respuestas en direcciones opuestas dentro del mismo tema) y coherencia global.
17. **Sesión completa vs práctica.** Modo "sesión completa" corre las 3 fases secuencialmente y solo muestra resultados agregados al final (con distancia cross-examen). Modo "práctica" son intentos individuales con resultado inmediato. El simulador detecta cuál modo con el query param `?sesion=<id>`.
18. **Datos de reactivos en BD:** Personalidad tiene opciones `["Sí", "No"]` (no Likert). Axiológico tiene escala de 5 puntos ("Me parezco totalmente" → "No me parezco nada"). Tema común entre ambos: `valores_militares` (arreglado un typo `v_alores_militares` en 100 reactivos).
19. **Guía del Aspirante — proceso de sanación:** contenido source-of-truth en `docs/guia-aspirante/*.md`. Tanda 1 hecha (§3.6, §4.6.2, §4.6.7, §5.7). Pendientes Tandas 2 y 3 detalladas en `docs/guia-aspirante/README.md`.

## Cómo hablarme

- **Explícame antes de hacer.** Concepto nuevo → dime brevemente qué es, por qué lo estamos usando, y qué alternativas descarté antes de escribir código.
- **Yo controlo el ritmo.** Si algo no entiendo, freno. Si ya lo sé, digo "sáltate".
- **Analogías cortas y con valor didáctico** — las históricas o del mundo real me ayudan mucho, pero no las hagas de 3 párrafos.
- **No me hagas cosas mecánicas sin explicar el porqué.** Aunque el paso sea trivial (npm install, git commit), tiene un porqué que quiero entender.
- **Si dudo entre explicar o ejecutar, explica primero.** Si te aburro, yo digo "salta".

Ver `feedback_estilo_pedagogico.md` en memoria para más contexto.

## Trabajos recientes (últimos 10 commits)

```
50e1fc5 Logos oficiales de planteles + Guia del Aspirante Tanda 1 sanada
f11b743 Analisis avanzado: sesgo, deseabilidad, coincidencia ideal, cross-examen
ecec122 Sprint fixes UX + sesion completa + analisis polaridad
98279bf HANDOFF: reflejar simulador multi-examen, panel de resultados y modelo usuario-plantel
c9ff226 Simulador funcional multi-examen + modelo usuario-plantel + landing rica
db81603 HANDOFF: reflejar sprint de frontend + auth flow
4748d3d Frontend: sistema de diseno y auth flow completo
d288e22 Frontend: setup Next 16 en apps/web con landing publica de planteles
468eaee HANDOFF: renombrar rutas backend/ -> udefa/ tras rename del monorepo
17a5d5e Actualiza generar.py
```

## Pendientes propuestos (orden sugerido)

1. **🎯 Guía del Aspirante — Tanda 2 (ampliar breves).** Continuar sanando secciones: §3.4 Sinónimos y Antónimos, §3.5 Razonamiento Lógico-Matemático, §5.3 los 8 valores axiológicos (expandidos), §4.6.6 Conductas de riesgo. Después Tanda 3 (cleanup + pulir §7 y §4.6.1). Ver `docs/guia-aspirante/README.md`.
2. **Guía del Aspirante — digitalización.** Convertir el markdown de `docs/guia-aspirante/` en páginas navegables `/inicio/guia/[capitulo]/[seccion]` (Fase 4 del plan). Idealmente con Table of Contents lateral y navegación entre secciones. **Debe hacerse después de completar Tanda 3** para no repetir trabajo.
3. **Sistema de recomendaciones desde el panel de resultados.** Ya tenemos diagnósticos accionables auto-generados en el frontend. Falta enlazar cada diagnóstico a la sección específica de la Guía online (link "Aprender a mejorar" que abre §X.Y). Depende de que la digitalización esté hecha.
4. **Rediseño de la sección "Ejemplos resueltos" en la landing.** El código actual funciona pero Carlo lo marcó como "no me gustó, dejar pendiente para modificar después".
5. **Bloque 4 Razonamiento Abstracto** — imágenes de reactivos a Cloudinary. Requiere llenar `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET` en `.env`. El simulador ya detecta bloque vacío y salta.
6. **Página unitaria de plantel `/inicio/plantel/[id]`** — con más detalle del plantel (oferta educativa, requisitos, foto). Mockup C ya validado.
7. **Reset de passwords de usuarios legacy** — `carlo@prueba.com` (id=1) y `emtg@prueba.com` (id=2) tienen password olvidada. Un script de 20 líneas con bcrypt para actualizar.
8. **Panel de administración + RBAC** — separar admin de aspirante con campo `rol` a Usuario + decorador `@Roles('admin')`.
9. **Refinamiento de polaridad con LLM** — hoy la clasificación fue heurística (77% POS / 23% NEG). Refinar con LLM para casos ambiguos.
10. **Módulo cultural** — reactivos por plantel. Suscripción anual.
11. **Reporte PDF personalizado** con Puppeteer.
12. **App móvil** con React Native + Expo.
13. **Hardening auth** — migrar cookie de token a httpOnly seteada por backend (más seguro contra XSS).

## Al arrancar un chat nuevo

Después de pegar este documento, dime específicamente **por dónde quieres seguir**.
Ejemplos:
- "Sigamos con la Guía — Tanda 2 (§3.4 Sinónimos, §3.5 Razonamiento Lógico, §5.3 valores, §4.6.6 Conductas de riesgo)"
- "Vamos a digitalizar la Guía como lectura online en `/inicio/guia`"
- "Conecta los diagnósticos del panel de resultados con las secciones de la Guía"
- "Rediseñemos la sección de ejemplos de la landing"
- "Sigue con el bloque de razonamiento abstracto (necesita Cloudinary)"
- "Vamos con panel de admin + RBAC"
- "Reset password de mi usuario `carlo@prueba.com`"

Yo leo mi memoria (que tiene contexto complementario), este documento, y arranco
pedagógico + hands-on desde donde me digas.
