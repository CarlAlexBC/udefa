# Plataforma de Preparación UDEFA

Monorepo de la plataforma de preparación integral para el proceso de admisión a
planteles militares de la Universidad del Ejército y Fuerza Aérea (UDEFA).

Marca: **El Monote te Guía** — Autor: Carlo Alexander — TikTok: `@elmonoteteguia`

## Estructura

```
udefa/
├── apps/
│   ├── backend/    NestJS + Prisma + PostgreSQL — API única para web y móvil
│   ├── web/        Next.js (por construir)
│   └── mobile/     React Native + Expo (por construir)
└── docs/           Documento del proyecto y material de referencia
```

El documento maestro del proyecto vive en [`docs/Proyecto_Plataforma_UDEFA.docx`](docs/Proyecto_Plataforma_UDEFA.docx)
y describe alcance, modelo de negocio, modelo de datos, stack, seguridad y hoja de ruta.

## Cómo empezar (backend)

```bash
npm install
npm run backend:dev
```

## Hoja de ruta

1. Backend con autenticación y modelo de datos — ✅
2. Examen completo psicológico (psicométrico, personalidad, axiológico) — 🚧
3. Pantalla de resultados con métricas e índice de consistencia temporal
4. Contenido teórico digital interactivo (Guía y Cuadernillos)
5. Módulo cultural para los planteles más solicitados
6. Reporte PDF personalizado
7. Panel de administración
8. Aplicación móvil (React Native)
9. Post-lanzamiento: entrenamiento por tema y detección de contradicciones internas
