# "Entiende el tema" — plan de diseño

> Estado: **diseño aprobado, sin implementar** (10 ago 2026). Es la capa
> pedagógica del examen cultural. Documento para que otra sesión lo construya
> tal cual. Mockup de referencia: la corrección de práctica con el apartado
> desplegable (visto en chat el 10 ago).

## La idea en una frase

Al lado de la cita textual —que se queda intacta— un apartado **opcional y
desplegable** que explica el tema con palabras simples: *para entender, no para
memorizar*.

## La línea roja (no negociable)

La **respuesta correcta y la justificación siguen siendo cita textual del
libro**, palabra por palabra, con su página. El examen real es de recuerdo
literal; bajarle eso engaña al aspirante. "Entiende el tema" es un **añadido**,
visualmente separado, para que nadie confunda la explicación llana con lo que
pide el examen. Encuadre: *entender hace que la cita se te pegue* → sirve para
aprobar, no lo estorba.

## Unidad: por capítulo, no por reactivo

Una explicación por **capítulo del libro** (`Capitulo`), no por reactivo. Como el
reactivo pertenece al libro y no al plantel, **una sola explicación sirve para
todos los planteles** que usan ese libro. (Son ~1,170 capítulos-tema solo en el
HCM; por eso jamás por reactivo.)

## Dónde se ve (aspirante)

- **v1:** en la **corrección de práctica cultural y de repaso**, debajo de la
  cita textual, un desplegable "Entiende el tema (opcional)". Cerrado por
  defecto; se abre solo si el aspirante quiere.
- **Después:** también en el detalle de materia de "Tu avance"
  (`/inicio/avance/[materia]`), por capítulo.

## Autoría (decidido con Carlo, 10 ago)

**Claude redacta un borrador por capítulo apoyándose en los reactivos y citas que
Carlo ya validó** (no inventa de la nada). **Carlo revisa, corrige y publica.**
El aspirante **solo ve lo PUBLICADO**. Regla dura del proyecto: **nada de IA a
ciegas** — todo pasa por revisión humana antes de publicarse.

## Por dónde empezar: los más fallados

El sistema ya sabe qué capítulos se fallan más (respuestas de práctica +
simulacro). El editor de admin **ordena por tasa de fallo**, así se escribe
primero donde más duele. No hay que llenar los 1,170 para arrancar.

## Alcance (guardia contra scope creep — ver `DEFINICION-DE-LISTO.md`)

**v1 (el corazón):**
- Tabla de explicación por capítulo.
- Editor de admin: escribir/editar por capítulo, estados **borrador/publicado**,
  lista **ordenada por más-fallado**.
- El desplegable en la corrección de práctica y repaso, mostrando la explicación
  **publicada** del capítulo del reactivo.
- Contenido de los **~10–15 capítulos más fallados** para arrancar.

**Después (no es v1):**
- El apartado en "Tu avance".
- Asistente de borradores más fino, imágenes, formato rico.
- Personalización por aspirante.

## Notas técnicas para quien lo implemente

Aterrizado sobre el código real (10 ago). **Respeta el verbatim:** no tocar
`respuestaCorrecta` / `explicacion` / `referencia` del reactivo.

- **Modelo nuevo** (migración chica), p. ej.:
  `ExplicacionCapitulo { id, capituloId @unique → Capitulo, contenido String,
  estado (BORRADOR|PUBLICADO) @default(BORRADOR), updatedAt }`.
- **Capítulo del reactivo:** `Reactivo.temaId → Tema.capituloId`. Con eso se sabe
  qué explicación mostrar en cada corrección.
- **Backend aspirante:** o se incluye el `capituloId` + la explicación publicada
  en la respuesta de corrección (`calificarPracticaCultural` en
  `apps/backend/src/examenes/examenes.service.ts`, y `responder` en
  `apps/backend/src/repasos/repasos.service.ts`), o un endpoint aparte
  `GET /examenes/practica/cultural/entiende?capitulo=<id>` que carga al desplegar
  (lazy). Preferible lazy: no pesa la corrección y solo trae lo publicado.
- **Ranking "más fallados":** query sobre `RespuestaPractica` + `RespuestaReactivo`
  (`esCorrecta`) agrupado por capítulo — reusa la lógica de `miAvanceCultural`.
- **Admin:** CRUD de `ExplicacionCapitulo` + pantalla de edición con la lista
  ordenada por tasa de fallo y el estado de cada capítulo (sin escribir /
  borrador / publicado).
- **Frontend aspirante:** el desplegable en la pantalla de práctica
  (`apps/web/src/app/inicio/practica-cultural/`) y en la de repaso
  (`apps/web/src/app/inicio/repaso/`). Estilo: claramente separado de la cita
  textual (sello "para entender, no para memorizar").
