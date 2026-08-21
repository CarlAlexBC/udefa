# Despliegue — cómo quedó montada la plataforma

> **La plataforma salió a internet el 20 de agosto de 2026.** Este archivo dejó
> de ser un plan y pasó a ser el registro de cómo está armada: qué vive dónde,
> con qué valores, y qué falta todavía.
>
> Si algo aquí no cuadra con la realidad, gana la realidad: avísalo y corrige
> este archivo.

---

## 0. El mapa

| Pieza | Dirección | Dónde vive |
|---|---|---|
| Web (Next) | `elmonoteteguia.com` | Railway, servicio `web` |
| Backend (NestJS) | `api.elmonoteteguia.com` | Railway, servicio `backend` |
| Base (Postgres 18) | sin dirección pública | Neon, AWS **US East 2 (Ohio)** |
| Dominio y DNS | — | Cloudflare Registrar |
| Código | `github.com/CarlAlexBC/udefa` (privado) | GitHub |

**Cuentas:** todo cuelga de `elmonoteteguia@gmail.com` — Cloudflare, Neon y
Railway. Se hizo a propósito: el correo de la universidad se apaga al terminar la
carrera, y con él se iría el acceso a la infraestructura del negocio. Por la
misma razón el repositorio se movió desde la cuenta vieja de GitHub
(`CarlexBaznas05`, ligada a la universidad) a `CarlAlexBC`. La vieja quedó como
respaldo y sigue accesible en el remoto `viejo`.

**Railway:** proyecto `hospitable-presence`, plan Hobby ($5/mes, incluye $5 de
consumo). Tope duro de gasto **$20**, aviso por correo a los **$10**. Si algún
día llega ese aviso a media quincena no es una emergencia: es tráfico. Se sube el
tope, no se deja morir el sitio.

**Neon:** plan gratis. La base pesa 21 MB de los 512 MB disponibles. La
retención de historial del plan gratis es de **6 horas**, no de días: sirve para
deshacer un error reciente, no como respaldo de verdad. Cuando haya clientes
reales conviene sacar un `pg_dump` propio cada tanto.

---

## 1. La cookie de sesión: dos condiciones, no una

Aquí hay **dos** requisitos, y confundirlos costó el primer fallo real de
producción. Ver `opcionesCookie()` en
`apps/backend/src/auth/auth.controller.ts`.

### Condición 1 — mismo dominio raíz (`sameSite: 'lax'`)

> **El backend tiene que estar en un subdominio del mismo dominio que la web.**

Si se moviera a otro dominio —el que regala el hosting, por ejemplo— el navegador
dejaría de mandar la cookie en las peticiones y nadie podría iniciar sesión. La
alternativa sería `sameSite: 'none'` + `secure: true`, que es un cambio de
código, no una variable.

### Condición 2 — `COOKIE_DOMAIN` (el fallo del 20 ago 2026)

Cumplir la condición 1 **no basta**, y es lo que este archivo afirmaba mal en su
primera versión.

Sin atributo `domain`, la cookie queda a nombre de `api.elmonoteteguia.com`
**únicamente**. La web vive en `elmonoteteguia.com`, que para el navegador es
otro sitio: su middleware pregunta por la cookie `token` y no recibe nada.

El síntoma es el más cruel posible: **`/auth/login` responde `201`** —la sesión
se crea de verdad— y aun así `/inicio` devuelve al login una y otra vez. La llave
se crea bien; la puerta no la reconoce.

**Por qué no se ve en local:** ahí la web y el backend son los dos `localhost`
(puertos 3000 y 3001) y las cookies **ignoran el puerto**. Para el navegador es
el mismo sitio y la misma cookie sirve a ambos. Sólo podía aparecer el día que
cada pieza tuviera nombre propio.

**El arreglo:** `COOKIE_DOMAIN=.elmonoteteguia.com` (con el punto inicial, que la
hace válida para el dominio y todos sus subdominios). Si la variable no existe,
no se pone nada — por eso en local no cambia nada.

Se aplica al **crear** la cookie y también al **borrarla** en `/auth/logout`: el
navegador sólo borra la cookie que coincide exactamente, dominio incluido. Si
faltara ahí, "cerrar sesión" diría que funcionó y la sesión seguiría viva.

### La cola del arreglo: las cookies viejas no se van solas

El día que se cambie `COOKIE_DOMAIN` —o el dominio entero— **esto vuelve a
pasar**, así que conviene reconocerlo:

Cambiar el dominio de la cookie **no borra la anterior**. Quedan dos cookies con
el mismo nombre `token` y distinto `Domain`. El navegador manda las dos y el
servidor lee la primera, que suele ser la vieja — con una sesión ya muerta. Y
"cerrar sesión" tampoco puede limpiarla, porque sólo borra la que coincide
exactamente.

**El síntoma engaña:** `/auth/login` responde `201` y acto seguido `/auth/perfil`,
`/acceso/mios` y todo lo demás responden `401`. Parece que el servidor rechaza la
sesión que él mismo acaba de crear.

**Cómo distinguirlo de un fallo real en 10 segundos:** abrir una ventana privada
e iniciar sesión ahí. Si en privado funciona, el código está bien y lo que sobra
es basura del navegador. Se limpia borrando los datos del sitio.

Sólo afecta a quien haya entrado con la configuración vieja. Los visitantes
nuevos nunca tienen la cookie huérfana.

---

## 2. Variables de entorno

Sólo las que el código lee de verdad (verificado con `grep process.env` sobre
`apps/backend/src`). Las que no estén aquí, no existen.

### Backend — servicio `backend` en Railway

| Variable | Valor puesto | Qué pasa si falta |
|---|---|---|
| `DATABASE_URL` | Neon **con pooler** | el servicio arranca y se cae |
| `DIRECT_URL` | Neon **sin pooler** | las migraciones no corren |
| `JWT_SECRET` | 64 caracteres aleatorios, distinto al de local | — |
| `NODE_ENV` | `production` | la cookie viaja sin protección de HTTPS |
| `CORS_ORIGIN` | `https://elmonoteteguia.com` | el navegador bloquea **todo** |
| `FRONTEND_URL` | `https://elmonoteteguia.com` | los enlaces de los correos van a la nada |
| `CANDADO_ACCESO` | `on` | **todo abierto** a cualquiera con cuenta |
| `COOKIE_DOMAIN` | `.elmonoteteguia.com` | el login da 201 pero `/inicio` devuelve al login (ver punto 1) |
| `PORT` | **no se pone** | Railway la inyecta (hoy 8080) |
| `RESEND_API_KEY`, `MAIL_FROM` | pendientes | no sale ningún correo |
| `MERCADOPAGO_*` | pendientes | las compras no dan acceso solas |

Los valores reales están en `apps/backend/.env.produccion`, que **git ignora**
(regla `.env.*`). Ese archivo es la copia de trabajo; la fuente en vivo es
Railway.

### Web — servicio `web` en Railway

| Variable | Valor |
|---|---|
| `NEXT_PUBLIC_API_URL` | `https://api.elmonoteteguia.com` |

Se incrusta al CONSTRUIR, no al ejecutar. Ver la trampa nº 2 más abajo.

---

## 3. Configuración de los servicios en Railway

Railway detectó solo que el repo es un monorepo y propuso los dos servicios. Se
construye **desde la raíz** y se le dice cuál aplicación con `--workspace`; el
*Root Directory* se queda **vacío** a propósito, porque el `package-lock.json` y
la lista de workspaces viven en la raíz.

### Servicio `backend`

| Ajuste | Valor |
|---|---|
| Root Directory | *(vacío)* |
| Build Command | `npm run build --workspace=backend` |
| Start Command | `npm run start:prod --workspace=backend` |
| Pre-Deploy | `npx prisma migrate deploy --schema=apps/backend/prisma/schema.prisma` |
| Watch Patterns | `/apps/backend/**` |
| Puerto público | 8080 |

Railway proponía `npm run start`, que es `nest start` — el de **desarrollo**:
compila al vuelo, necesita las herramientas de desarrollo y gasta memoria de más.
El bueno es `start:prod`, que es `node dist/main`.

### Servicio `web`

| Ajuste | Valor |
|---|---|
| Build Command | `npm run build --workspace=web` |
| Start Command | `npm run start --workspace=web` |
| Watch Patterns | `/apps/web/**` |

Aquí `start` **sí** es el correcto: en Next, `start` significa `next start`, que
es el comando de producción. Misma palabra, caso distinto.

---

## 4. DNS en Cloudflare

| Nombre | Tipo | Contenido | Proxy |
|---|---|---|---|
| `api` | CNAME | `hpyjs3ng.up.railway.app` | **DNS only** (gris) |
| `@` | CNAME | `dowej25x.up.railway.app` | **DNS only** (gris) |
| `_railway-verify.api…` | TXT | verificación de Railway | DNS only |
| `_railway-verify.el…` | TXT | verificación de Railway | DNS only |

**Las dos nubes van GRISES.** Con la nube naranja, Cloudflare contesta por tu
dominio y pone su propio certificado, mientras Railway intenta emitir el suyo y
nunca recibe la petición de validación. Resultado: error de certificado, o el
bucle de "demasiadas redirecciones". Railway lo detecta y avisa —"Cloudflare
proxy detected"— pero es fácil pasarlo por alto.

Pendiente opcional: un registro para `www` que redirija al dominio pelado. Hoy
`www.elmonoteteguia.com` no lleva a ningún lado.

---

## 5. La base de datos: cómo se pobló

Se hizo el **camino A: copiar la base local**. Es el corto y el seguro, porque
llega todo — incluido el trabajo hecho a mano en el panel que no está en ningún
archivo: las 32 claves del razonamiento abstracto, sus títulos, los ajustes de
reparto de temarios.

```bash
pg_dump "postgresql://…/udefa" -Fc --no-owner --no-acl -f udefa.dump
pg_restore -d "<URL DIRECTA de Neon>" --no-owner --no-acl udefa.dump
```

Hay que quitar el `?schema=public` de la URL local antes de pasársela a
`pg_dump`: es un parámetro de Prisma y libpq no lo entiende — falla con
*"parámetro de URI no válido: schema"*.

**Resultado verificado** contando fila por fila las 24 tablas en las dos bases:
**cero diferencias**. Llegaron los 19,889 reactivos, los 11 planteles, los 14
exámenes, los 6 temarios y las 21 migraciones de Prisma (`prisma migrate status`
responde *"Database schema is up to date!"*, así que el Pre-Deploy no reintenta
nada).

Después se borraron de la nube 7 cuentas que no debían llegar a producción: las 6
`demo-*@analitica.local` y `manzoprueba@gmail.com`. Se conservaron
`elmonoteteguia@gmail.com` (admin) y dos cuentas con acceso `origen: 'manual'`,
que podrían ser personas reales que pagaron por fuera.

### Si algún día hay que reconstruir sin la base local

Existe el camino B (correr los seeds e importadores uno por uno), pero **tiene un
hueco**: el psicométrico y el axiológico **no tienen script**. Sus reactivos están
en `docs/reactivos-iniciales/*.json` y se cargaron subiéndolos a
`POST /reactivos/masivo`. Y las 32 claves del abstracto se asignaron a mano desde
el panel.

Moraleja: **antes de necesitarlo, saca un `pg_dump` de la base de producción.**

---

## 6. Qué está verificado y qué falta

### Verificado desde fuera el 20 ago 2026

- `https://api.elmonoteteguia.com` → HTTP 200, certificado válido.
- `POST /auth/login` con credenciales falsas → **401 "Correo o contraseña
  incorrectos"**. Eso prueba la cadena completa: DNS → certificado → NestJS →
  Prisma → Neon en Ohio.
- `https://elmonoteteguia.com` → HTTP 200, título correcto.
- `/inicio` sin sesión → **307**: el guardia redirige.
- El JavaScript servido apunta a `api.elmonoteteguia.com`, **cero** referencias a
  `localhost`.
- Preflight de CORS desde `https://elmonoteteguia.com` → **204** con
  `access-control-allow-origin` exacto y `access-control-allow-credentials: true`
  (lo que permite que viaje la cookie).

### Falta probarlo desde dentro, con una cuenta real

1. Entrar y que la sesión **aguante al recargar**.
2. Armar un **simulacro completo**: 100 reactivos, sin materias vacías.
3. Ver el **panel de resultados**.
4. Crear una **cuenta de prueba** desde el panel, usarla y ver que caduca.
5. Que una cuenta **sin acceso** reciba 403 en práctica, repaso, Guía y simulacro.

### Falta montar

- **Región US East** en los dos servicios (hoy `web` y `backend` están en US West
  y la base en Ohio). Sin disco propio, el cambio no causa caída.
- **Resend**: verificar el dominio y poner `RESEND_API_KEY` y `MAIL_FROM`.
  Comprobar con `node apps/backend/scripts/_probar-correo.js <correo>`.
- **Webhook de Mercado Pago**: URL pública + `MERCADOPAGO_WEBHOOK_SECRET`, y
  cambiar el token de prueba por el de producción.
- **Borrar los proyectos viejos de Railway**: `intuitive-contentment` (duplicado
  creado por error), `appealing-enchantment`, `innovative-vision`.
- Confirmar el **correo de la cuenta de Railway**: se revirtió al de la
  universidad porque el enlace de confirmación caduca en 20 minutos.

**Hasta que Resend y Mercado Pago estén montados no se le puede cobrar a nadie**:
sin dominio verificado no salen los recibos, y sin webhook las compras no otorgan
acceso solas.

---

## 7. Trampas que ya costaron tiempo

**1. Railway no aplica los cambios al guardarlos.** Los junta y muestra una barra
de *"Apply N changes"* arriba. Hasta que no le das a **Deploy**, la variable está
guardada pero **no está en vigor**. Costó una hora: la web seguía apuntando a
`localhost` con la variable "puesta". Si algo no surte efecto, mira primero si hay
cambios en espera.

**2. `NEXT_PUBLIC_*` se incrusta al construir, no al ejecutar.** Poner la variable
después de que la web se haya construido no sirve de nada: hay que **reconstruir**
(Deploy o Redeploy, nunca Restart). El fallo es silencioso — el sitio carga bien y
el navegador de cada visitante intenta hablarle a su propia computadora. Para
comprobarlo de verdad hay que buscar la dirección **dentro del JavaScript
servido**, no en el HTML.

**3. La traducción automática del navegador corrompe los valores.** Edge tradujo
los paneles de Railway y Cloudflare y reescribió hasta los nombres técnicos:
`railway.app` salió como `railwappay.`, `tattoondra` como `Tatowndra`. Un valor
así, pegado en un DNS, no funciona y no es evidente por qué. **Apagar la
traducción en los paneles de infraestructura.**

**4. `FRONTEND_URL` en localhost** falla en silencio: el comprador recibe un
enlace que no lleva a ningún lado y no hay error en ningún log.

**5. Resend sin dominio verificado** sólo entrega al correo de la cuenta de
Resend. Los recibos de los aspirantes **no salen**.

**6. Los frenos anti-abuso cuentan en memoria.** El tope de armados por cuenta y
el de peticiones por minuto viven en la memoria del proceso. Con **una sola**
instancia, perfecto; con dos, cada una lleva su cuenta y los topes se ablandan a
la mitad. Avisado en `freno-armado-por-cuenta.guard.ts`.

**7. El importador cultural poda**: borra de la base los reactivos que ya no estén
en los `.md`, salvo los que tengan historial. Sobre una base viva, mirar primero
el modo prueba.

**8. Migraciones**: en producción se corre `prisma migrate deploy`, nunca
`migrate dev`.

---

## 8. Lo legal (cerrado el 20 ago 2026)

Las páginas legales están completas y publicables. Se resolvió dejando fuera todo
lo que dependa del alta ante el SAT:

- **Contacto**: `elmonoteteguia@gmail.com`.
- **RFC / identidad fiscal**: no se publica.
- **Jurisdicción (ciudad y estado)**: no se publica. La cláusula 10 de Términos
  remite a los tribunales competentes conforme a la ley mexicana, que es lo que
  aplica por defecto cuando no se pacta un foro.

Los tres campos siguen en `apps/web/src/lib/legal.ts` con instrucciones de dónde
reinsertarlos el día del alta.
