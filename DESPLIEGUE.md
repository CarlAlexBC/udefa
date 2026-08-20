# Despliegue — la lista del día que la plataforma sale a internet

> Esto no es documentación de arquitectura. Es la lista que se sigue **el día
> del despliegue**, cuando hay prisa y se olvidan cosas. Cada paso dice qué
> hacer y **por qué**, para poder decidir si aplica o no.
>
> Escrito el 20 de agosto de 2026. Si algo aquí no cuadra con el código, gana
> el código: avísalo y corrige este archivo.

---

## 0. Antes de tocar nada: lo que sólo puede hacer Carlo

**Queda una sola cosa: comprar el dominio** (`elmonoteteguia.com`). Destraba
cinco de golpe: el correo a los aspirantes, la dirección del sitio, CORS, el
webhook de Mercado Pago y el remitente de los correos.

### Lo legal ya no bloquea (20 ago 2026)

Las páginas legales **están completas y publicables**: no queda ni un
`[POR COMPLETAR]` a la vista. Se resolvió por decisión de Carlo dejando fuera
todo lo que dependa del alta ante el SAT:

- **Contacto**: `elmonoteteguia@gmail.com`. Es el dato que sí puede dar hoy.
- **Identidad fiscal (RFC)**: no se publica. Ya se había retirado el 9 ago.
- **Jurisdicción (ciudad/estado)**: no se publica. Nombrar unos tribunales
  concretos equivale a declarar un domicilio de operación, y eso va junto con el
  alta fiscal. La cláusula 10 de Términos remite ahora a los tribunales
  competentes conforme a la ley mexicana — que es justo lo que aplica por
  defecto cuando no se pacta un foro, así que no se pierde nada.

Los tres campos siguen existiendo en `apps/web/src/lib/legal.ts` con
instrucciones de dónde volver a insertarlos el día del alta. **Nada de esto
impide desplegar ni cobrar.**

---

## 1. Dónde vive cada cosa — y una trampa que cuesta horas

Son tres piezas: la web (Next), el backend (NestJS) y la base (Postgres).

### ⚠️ La trampa de la cookie

La sesión viaja en una cookie `httpOnly` con `sameSite: 'lax'` y **sin atributo
`domain`** (ver `opcionesCookie()` en `apps/backend/src/auth/auth.controller.ts`).
Eso obliga a algo:

> **El backend tiene que quedar en un subdominio del MISMO dominio que la web.**
> Por ejemplo web en `elmonoteteguia.com` y backend en `api.elmonoteteguia.com`.

Si el backend queda en otro dominio (el que regala el hosting, tipo
`algo.up.railway.app`), el navegador **no manda la cookie** en las peticiones y
nadie podrá iniciar sesión — aunque todo lo demás esté bien. El síntoma es
cruel: el login "funciona" y la siguiente pantalla dice que no hay sesión.

Si por lo que sea no se puede usar un subdominio propio, hay que **cambiar
código**: `sameSite: 'none'` + `secure: true`. No es difícil, pero es una
decisión, no un descuido que se arregle con una variable.

---

## 2. Variables de entorno

Éstas son las que el código lee **de verdad** (verificado con
`grep process.env` sobre `apps/backend/src`). Las que no estén aquí, no existen.

### Backend (`apps/backend/.env`)

| Variable | Qué pasa si falta o está mal |
|---|---|
| `DATABASE_URL` | La base. En producción apunta al **pooler** del proveedor. |
| `DIRECT_URL` | Conexión directa, sin pooler. La usan las **migraciones** de Prisma. |
| `JWT_SECRET` | Firma las sesiones. Cadena larga y aleatoria, **distinta** a la de local. |
| `PORT` | El puerto del backend. |
| `NODE_ENV=production` | Es lo que activa `secure` en la cookie. Sin esto la sesión viaja sin protección de HTTPS. |
| `CORS_ORIGIN` | El dominio de la web. Si está mal, el navegador bloquea **todas** las peticiones. |
| `FRONTEND_URL` | **Los botones de TODOS los correos salen de aquí.** Si se queda en `localhost`, mandas a tus compradores a su propia computadora. No falla nada, no hay error en ningún log: simplemente no funciona para ellos. |
| `CANDADO_ACCESO=on` | El muro de pago. En `off` **todo está abierto para cualquiera con cuenta**. |
| `MERCADOPAGO_ACCESS_TOKEN` | El de PRODUCCIÓN va **sólo aquí**, nunca en la máquina de casa. |
| `MERCADOPAGO_WEBHOOK_URL` | La URL pública del webhook: `https://api.tudominio.com/pagos/webhook`. |
| `MERCADOPAGO_WEBHOOK_SECRET` | Firma de los avisos de pago. Se saca del panel de MP → Webhooks → "Clave secreta". Sin ella el webhook procesa igual **pero deja una advertencia en el log**. |
| `RESEND_API_KEY` | Sin ella **no sale ningún correo** (ni recibo, ni recuperar contraseña) y el backend avisa al arrancar: `Correo en MODO CONSOLA`. |
| `MAIL_FROM` | Remitente. Con dominio verificado: `El Monote te Guía <no-reply@tudominio.com>`. |
| `ARMADO_LIMITE`, `ARMADO_VENTANA_MS`, `THROTTLE_LIMIT` | Opcionales: frenos anti-abuso. Traen valores por defecto sensatos. |

### Web (Vercel o donde quede)

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_API_URL` | A qué backend le habla la web: `https://api.tudominio.com`. |

---

## 3. La base nueva NACE VACÍA

Éste es el paso que más fácil se olvida, y el que más duele: **una base recién
creada en la nube no tiene ni un reactivo**. Ni los 10,180 del cultural, ni los
8,538 del psicológico, ni los planteles, ni los temarios, ni las 32 claves del
abstracto que Carlo asignó a mano.

Hay dos caminos.

### Camino A — copiar la base local (recomendado)

Es el más corto y el más seguro: **llega todo**, incluido el trabajo que se hizo
a mano en el panel y que no está en ningún archivo (claves del abstracto,
títulos, ajustes de reparto de temarios).

```bash
# 1. Sacar copia de la base local
pg_dump "postgresql://postgres:CONTRASEÑA@localhost:5432/udefa" -Fc -f udefa.dump

# 2. Restaurarla en la base del servidor
pg_restore -d "LA_URL_DIRECTA_DEL_PROVEEDOR" --no-owner --no-acl udefa.dump
```

**Después de restaurar, limpiar lo que no debe llegar a producción:** las 6
cuentas `demo-*@analitica.local`, las de prueba viejas y cualquier
`@prueba.local`. Se borran desde el panel (Usuarios → papelera).

### Camino B — reconstruir desde los archivos

Más largo y con más margen de error, pero no depende de tener acceso a la base
local. En este orden:

```bash
cd apps/backend
npx prisma migrate deploy                              # crea las tablas
npx ts-node scripts/seed-planteles.ts                  # los 11 planteles
npx ts-node scripts/seed-temarios.ts                   # el temario de cada uno
npx ts-node scripts/seed-temas-prioridad.ts
npx ts-node scripts/seed-examenes-culturales.ts        # un Examen por plantel
npx ts-node scripts/importar-cultural-oferta.ts        # PRUEBA primero
npx ts-node scripts/importar-cultural-oferta.ts --escribir   # los 10,180 culturales
npx ts-node scripts/importar-v3.ts --escribir          # personalidad v3
node scripts/_cargar-abstracto.js                      # las 32 imágenes
node scripts/_titulos-abstracto.js --escribir          # sus títulos
npx ts-node scripts/seed-admin.ts elmonoteteguia@gmail.com
```

⚠️ **El psicométrico y el axiológico no tienen script.** Sus reactivos están en
`docs/reactivos-iniciales/*.json` y se cargaron subiéndolos a
`POST /reactivos/masivo` (ver el README de esa carpeta). Con el camino B hay que
volver a subirlos a mano.

⚠️ **Las claves del razonamiento abstracto se asignaron a mano** desde el panel.
Con el camino B hay que volver a ponerlas una por una. Es la razón principal
para preferir el camino A.

---

## 4. El orden del día

1. **Comprar el dominio** y apuntarlo al proveedor de DNS.
2. **Crear la base** en la nube y anotar sus dos URLs (pooler y directa).
3. **Poblar la base** — camino A o B del punto 3.
4. **Desplegar el backend** en su subdominio (`api.tudominio.com`) con todas sus
   variables. Verificar en el log que dice `Correo ACTIVO` y no `MODO CONSOLA`.
5. **Desplegar la web** con `NEXT_PUBLIC_API_URL` apuntando al backend.
6. **Verificar el dominio en Resend** (panel → Domains) y pegar sus registros
   DNS. Comprobar con `node scripts/_probar-correo.js tu@correo.com`.
7. **Configurar el webhook en Mercado Pago** con la URL pública y guardar su
   clave secreta en `MERCADOPAGO_WEBHOOK_SECRET`.
8. **Actualizar el correo de contacto** en `apps/web/src/lib/legal.ts` si ya
   quieres usar `contacto@tudominio.com` en vez del gmail (opcional).
9. **Encender el candado** (`CANDADO_ACCESO=on`) y darse acceso a uno mismo desde
   el panel — ser admin **no** salta el muro, a propósito.

---

## 5. Verificación: no está listo hasta que estas ocho pasen

Hacerlas en el sitio real, no en local.

1. **Entrar** con una cuenta y que la sesión aguante al recargar. *(Si falla, es
   la trampa de la cookie del punto 1.)*
2. **Crear una cuenta de prueba** desde el panel, entrar con ella y practicar.
3. **Esperar a que caduque** y comprobar que deja de abrir contenido.
4. **Armar un simulacro completo** de un plantel: 100 reactivos, sin materias
   vacías.
5. **Recuperar contraseña**: que el correo llegue de verdad y que su enlace
   apunte al dominio real, **no a localhost**.
6. **Comprar** con el checkout de prueba de Mercado Pago y comprobar que el
   acceso se otorga solo, sin tocar nada a mano.
7. **Sin acceso, todo cerrado**: una cuenta sin comprar recibe 403 en práctica,
   repaso, Guía y simulacro.
8. **Las páginas legales** cargan y muestran el correo de contacto — sin ningún
   `[POR COMPLETAR]` en rojo. (Hoy ya es así; se comprueba por si un cambio
   futuro reinserta un campo vacío.)

---

## 6. Trampas conocidas

- **`FRONTEND_URL` en localhost** — falla en silencio. Es la más fácil de dejar
  mal y la que peor se ve: el comprador recibe un enlace que no lleva a ningún
  lado.
- **Resend sin dominio verificado** — sólo entrega al correo de la cuenta de
  Resend. Los recibos de tus aspirantes **no salen**. Hasta que el dominio esté
  verificado, no se puede cobrar de verdad.
- **Los frenos anti-abuso cuentan en memoria** — el tope de armados por cuenta y
  el de peticiones por minuto viven en la memoria del proceso. Con **una sola**
  instancia, perfecto. El día que se pongan dos, cada una lleva su propia cuenta
  y los topes se ablandan a la mitad. Está avisado en el código
  (`freno-armado-por-cuenta.guard.ts`). Para varias instancias hay que moverlos a
  un almacén compartido.
- **El importador cultural poda** — borra de la base los reactivos que ya no
  estén en los `.md`, salvo los que tengan historial. En una base recién
  restaurada eso está bien; sobre una base viva, mirar primero el modo prueba.
- **Migraciones**: en producción se corre `prisma migrate deploy`, nunca
  `migrate dev`.
