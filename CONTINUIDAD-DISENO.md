# Continuidad — Rediseño visual: LOGIN y EXÁMENES · Plataforma UDEFA
_(Pégame como primer mensaje en un chat nuevo. Generado: 11 ago 2026.)_

Retomamos la **Plataforma UDEFA** (monorepo `C:\proyectos\udefa`). Antes de tocar nada:
lee tu memoria (`MEMORY.md` y lo que referencie) y `ESTADO.md`. Trabaja como pide
`CLAUDE.md`: explicar antes de hacer, pedir OK para commits/migraciones/instalaciones
(el push lo decide Carlo), vocabulario llano, y **verificar el dato real en el código
antes de afirmar**.

## MÉTODO QUE PIDIÓ CARLO (respetar siempre)

1. **Primero el boceto EN EL CHAT (imagen), y hasta que lo apruebe, el código.**
   Nada de "lo hago y luego lo ves". Las imágenes se generan con Python/PIL y se le
   mandan con SendUserFile.
2. **Orden acordado: primero el LOGIN, después los EXÁMENES.**
3. Ojo con los **dos chats sobre `main`**: antes de editar, `git status` y ver si esos
   archivos están sin commitear en otro frente. Ya hubo un choque en este mismo tema.

## EL SISTEMA VISUAL QUE YA EXISTE (no reinventarlo)

La app ya migró a un lenguaje oscuro propio. Ya está commiteado y funcionando:

- **Paleta base**: la clase `.dark` de `apps/web/src/app/globals.css` (carbón `#161513`,
  crema `#F7F3EA`, latón `#C99A3B`, oliva `#6B7530`, tarjeta `#242220`, borde `#3D3A34`).
  Envolver una pantalla en `.dark` adapta tarjetas/inputs/botones solos.
- **"Hoja de plata"**: acabado metálico = degradado + una **veta** de plata que cruza en
  diagonal. Vive en el tablero (`apps/web/src/app/inicio/page.tsx`) y en el panel de
  admin. Commits `d118373`, `95e5caa`, `62ff62a`, `9b635fc`, `61b0e89`.
- **Color por módulo, fuente ÚNICA**: `apps/web/src/lib/colores-paquete.ts` →
  `COLOR_DE_MODULO` (gratis=verde, **cultural=azul**, **psicologico=rojo**,
  completa=dorado) + dos tablas de tono (`COLOR_PAQUETE_CLARO` para fondo crema,
  `COLOR_PAQUETE_OSCURO` para fondo carbón). Commit `699931c`.
  **Regla heredada: todo color nuevo se comprueba a ≥3:1 contra `#F7F3EA` y `#161513`.**
- **Acentos "plata" por módulo en el tablero**: rojo plata `#FF8A8A` (Psicológico),
  azul plata `#A8C6DE` (Cultural), verde plata `#C6D2A8`/`#D5DEBB` (Guía).
- **Un escudo por pantalla, encendido** (aro de latón + resplandor detrás). Carlo ya
  descartó juntar los 11 escudos: le pareció **"demasiado exagerado"**.

## DIAGNÓSTICO (verificado en código el 11 ago 2026)

Lo único que quedó fuera del lenguaje nuevo:

1. **Los EXÁMENES tienen doble personalidad.** La *portada* del simulador ya es oscura
   y épica (`simulador/[examenId]/page.tsx`, ~línea 904: `bg-[#161513]`, cronómetro en
   latón, escudo). Pero **la pantalla donde SE CONTESTA sigue clara** (~línea 476:
   `bg-background` + `bg-card`). Conteo de tokens claros: simulador **45**, repaso
   **21**, práctica cultural **19**, sesión **4**.
   → Archivos: `inicio/simulador/[examenId]/page.tsx`, `inicio/practica-cultural/page.tsx`,
   `inicio/repaso/page.tsx`, `inicio/sesion/page.tsx`.
2. **El LOGIN habla otro dialecto.** Es oscuro, pero con verde oliva y una
   **constelación de 13 escudos** (`apps/web/src/components/FondoAuth.tsx`), mientras el
   resto de la app usa plata + neón por módulo y **un** escudo por pantalla.
   → Archivos: `app/login/page.tsx`, `app/olvide-password/page.tsx`,
   `app/restablecer/page.tsx` (los tres comparten `FondoAuth`), y `app/comprar/[paquete]/page.tsx`.

## RECOMENDACIÓN APROBADA — 1 · LOGIN (empezar por aquí)

- **Quitar la constelación**; dejar **un** escudo (El Monote) **encendido**: aro de latón
  + resplandor detrás, como el escudo del tablero.
- **Tarjeta de hoja de plata** (grafito + veta diagonal), igual que el tablero/admin.
- **En latón, NO en rojo ni azul**: el login no pertenece a ningún módulo, es la puerta
  de la marca. Rojo y azul quedan reservados a Psicológico y Cultural.
- Aplicar el mismo tratamiento a `/olvide-password` y `/restablecer` (comparten fondo).

## DECISIÓN DE CARLO (14 ago) — LOS EXÁMENES SE QUEDAN CLAROS

Se exploró oscurecer las pantallas de examen y **Carlo decidió CONSERVAR EL CLARO**,
sobre todo ahí. No es capricho: el examen real se contesta en hoja clara, el banco
cultural es cita textual de libros (se siente página), y en gama baja con sol se lee
mejor. **No volver a proponer oscurecerlas sin que él lo pida.**

Entonces la app es MIXTA a propósito, y la regla que la ordena es:

> **Claro = la hoja de examen** (donde se contesta: simulador, práctica cultural,
> repaso, sesión). **Oscuro = todo lo demás** (marca, tablero, Guía, login, compra).
> El brinco de la portada oscura del simulador a la hoja clara **es una virtud**: se
> lee como "te sientas al pupitre".

Para que la mezcla se vea diseñada y no por descuido, la pantalla clara del examen debe
llevar el mismo sistema, sólo que con la tabla clara:

1. **El acento es el color del módulo, con `COLOR_PAQUETE_CLARO`** (azul profundo
   `#1F4E79` Cultural, rojo profundo `#A62828` Psicológico): va en la etiqueta de
   arriba, la barra de avance, la opción elegida y el botón "Siguiente".
2. **El latón, en su tono profundo `#8A6420`.** El latón de marca `#C99A3B` da **2.32:1**
   sobre crema — reprueba el piso de 3:1 que el propio proyecto documenta en
   `colores-paquete.ts`. Sobre claro SIEMPRE va el tono profundo.
3. **Verde y rojo se reservan para acierto y error** en las pantallas que corrigen al
   momento (práctica cultural y repaso). En el simulador no hay corrección hasta el
   final, así que ahí no hay choque.
4. **La marca de agua anti-copia se queda como está** (`MarcaDeAgua.tsx` usa
   `var(--foreground)` y `OPACIDAD = 0.06`, calibrada para claro). Si algún día una
   pantalla con marca de agua se volviera oscura, hay que bajarla a ~0.04: la crema
   sobre carbón se nota más que la tinta sobre crema.

## ESTADO AL GENERAR ESTE ARCHIVO

- Working tree **limpio**, `main` al día con `origin`. Último commit: `61b0e89`.
- Ya hecho y pusheado de este hilo: recuperar contraseña (flujo completo), correos
  transaccionales con `MailService` en **modo consola** (falta la `RESEND_API_KEY` de
  Carlo para enviar de verdad), y las pantallas de acceso en oscuro (`b507371`).
- Pendiente de producto, no de diseño: ver `CONTINUIDAD-SEGURIDAD.md`.

**Arranca así: enséñale a Carlo el BOCETO del login (imagen en el chat) con 2–3
variantes de la hoja de plata, deja que elija, y sólo entonces toca el código.**
