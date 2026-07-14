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

- **Ruta local:** `C:\proyectos\backend\` (todavía se llama "backend" por bug de
  Windows que no me dejó renombrar; en algún momento lo cambio a `udefa/`)
- **Repo GitHub:** https://github.com/CarlexBaznas05/backend-udefa
- **Estructura:** monorepo con npm workspaces
  ```
  backend/                    (raíz del monorepo)
  ├── apps/
  │   ├── backend/            NestJS + Prisma + PostgreSQL
  │   ├── web/                Next.js (por construir)
  │   └── mobile/             React Native + Expo (por construir)
  ├── tools/                  Scripts one-off (parsers, uploaders, clasificadores)
  ├── docs/                   Docs del proyecto + JSONs de reactivos
  └── .claude/                Config de Claude Code
  ```

## Stack

- **Backend:** NestJS 11 (TypeScript) + Prisma ORM + PostgreSQL local en :5432
- **Auth:** JWT con Passport, sesiones rastreadas en tabla `Sesion`
- **Payments (futuro):** MercadoPago
- **Files (futuro):** Cloudinary
- **Frontend web (futuro):** Next.js
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
| Frontend | ⏳ | Nada aún |
| Módulo cultural | ⏳ | Nada aún |
| Reporte PDF | ⏳ | Nada aún |
| Panel de admin | ⏳ | Nada aún |

## Datos actuales en la BD

- **1 usuario:** Carlo Alexander (`carlo@prueba.com`, id=1)
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
cd C:\proyectos\backend
npm install

# Levantar backend en modo watch
npm run backend:dev

# Migraciones de Prisma (desde apps/backend)
cd apps\backend
npx prisma migrate dev --name <descripcion>
npx prisma generate     # regenera cliente TypeScript

# Ver la BD visualmente
npx prisma studio       # abre navegador con GUI
```

Env vars están en `apps/backend/.env` (gitignored). Incluyen:
`DATABASE_URL`, `JWT_SECRET`, `CLOUDINARY_CLOUD_NAME` (+ KEY/SECRET pendientes de llenar).

## Cómo probar los endpoints

Uso **Thunder Client** en VS Code. Los endpoints protegidos requieren header
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

## Cómo hablarme

- **Explícame antes de hacer.** Concepto nuevo → dime brevemente qué es, por qué lo estamos usando, y qué alternativas descarté antes de escribir código.
- **Yo controlo el ritmo.** Si algo no entiendo, freno. Si ya lo sé, digo "sáltate".
- **Analogías cortas y con valor didáctico** — las históricas o del mundo real me ayudan mucho, pero no las hagas de 3 párrafos.
- **No me hagas cosas mecánicas sin explicar el porqué.** Aunque el paso sea trivial (npm install, git commit), tiene un porqué que quiero entender.
- **Si dudo entre explicar o ejecutar, explica primero.** Si te aburro, yo digo "salta".

Ver `feedback_estilo_pedagogico.md` en memoria para más contexto.

## Trabajos recientes (últimos 10 commits)

```
dcaf799 Limpieza de artefactos en el banco de personalidad
6ca2a90 Clasificacion inicial de polaridad para reactivos de personalidad
f52c6d1 Auditoria de seguridad: proteger endpoints legacy con JWT
b6d207e Modulo Axiologico: 155 reactivos de 4 simuladores consolidados
67cef31 Modulo de Personalidad: banco de 2829 reactivos con escala Likert
759e12e Metricas temporales avanzadas en resultados de intento
8ae24f7 Endpoints de consulta y checks de propiedad por recurso
a9552ea Proteger endpoints de intentos y sesiones con JWT
013db48 Sesion completa: crear, finalizar y resultados agregados
3e63071 Endpoint de resultados: metricas globales, por bloque y por tema
```

## Pendientes propuestos (orden sugerido)

1. **🎯 Empezar el frontend con Next.js.** El backend está esencialmente listo para consumirse. Este es el paso donde vuelvo a ver algo real y donde entra el mayor valor para mi producto.
2. **Bloque 5 razonamiento abstracto** — capturar imágenes de ejercicios de fuentes externas, subirlas a Cloudinary, cargar. Requiere: llenar `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET` en `.env`.
3. **Panel de administración + RBAC** — cuando aparezcan más usuarios, urge separar admin de aspirante. Se resuelve agregando campo `rol` a Usuario + decorador `@Roles('admin')`.
4. **Refinamiento de polaridad con LLM** — cuando toque la feature "detección de contradicciones internas" (reactivos del mismo tema con polaridad opuesta que el aspirante respondió incoherentemente).
5. **Módulo cultural** — reactivos por plantel. Suscripción anual.
6. **Reporte PDF personalizado** con Puppeteer.
7. **App móvil** con React Native + Expo.

## Al arrancar un chat nuevo

Después de pegar este documento, dime específicamente **por dónde quieres seguir**.
Ejemplos:
- "Vamos por el frontend, arranca por el setup de Next.js"
- "Sigamos con el bloque 5 razonamiento abstracto"
- "Quiero refinar la polaridad con LLM"
- "Vamos con panel de admin + RBAC"

Yo leo mi memoria (que tiene contexto complementario), este documento, y arranco
pedagógico + hands-on desde donde me digas.
