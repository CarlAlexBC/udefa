# Capa 6 · Legal — borradores para revisión de abogado

> **Este documento NO es asesoría legal ni texto final.** Son borradores preparados
> para que tu abogado los revise, corrija y apruebe. Nada de esto debe publicarse
> en el sitio antes de esa revisión.
>
> Escrito el 9 de agosto de 2026, después de implementar las cinco capas de código
> del blindaje anti-copia.

## Para qué sirve esto

Las cinco capas técnicas ya están construidas, pero por sí solas no detienen a un
competidor: lo que las vuelve **ejecutables** es que estén nombradas en los
Términos y que exista prueba de autoría con fecha. Eso es la Capa 6.

Este documento trae tres cosas:

1. Cláusulas propuestas para los **Términos y Condiciones**.
2. Finalidades que faltan en el **Aviso de Privacidad** (esto es obligación legal,
   no opcional).
3. El **expediente de evidencia**: qué trampas están sembradas y desde cuándo.

---

## 1. Términos y Condiciones — cláusulas propuestas

Las secciones citadas son las que ya existen en `apps/web/src/app/legal/terminos/page.tsx`.
Lo de abajo **se suma** a lo que ya está escrito; no lo reemplaza.

### Para la sección 3 (Cuenta de usuario) — añadir

> **Un solo usuario por cuenta.** Tu cuenta es personal e intransferible. La
> plataforma permite un número limitado de dispositivos con sesión abierta al
> mismo tiempo; al superarlo, la sesión más antigua se cierra automáticamente.

*Por qué:* es la Capa 2. Nombrarla evita reclamos ("me sacó de mi sesión") y deja
asentado que compartir la cuenta va contra el contrato.

### Para la sección 4 (Uso permitido) — sustituir la prohibición genérica

> Queda expresamente prohibido, además de lo anterior:
>
> - Reproducir, copiar, transcribir, fotografiar, grabar en video o capturar de
>   cualquier forma los reactivos, la Guía del Aspirante o los resultados, salvo
>   para tu propio estudio personal.
> - Difundir, compartir, vender, ceder o publicar ese material, total o
>   parcialmente, por cualquier medio.
> - Utilizar el material para impartir clases, asesorías o cursos, sean gratuitos
>   o de paga, propios o de terceros.
> - Emplear programas automatizados para descargar o recorrer masivamente los
>   reactivos.

*Por qué:* "uso personal" a secas es difícil de ejecutar. Nombrar la conducta
concreta —dar clases con tu material— es justo la amenaza que te preocupa.

### Para la sección 6 (Propiedad intelectual) — añadir

> **Identificación del contenido.** Para proteger la obra, las pantallas de la
> plataforma muestran de forma permanente una marca de identificación con el
> nombre, el correo electrónico y el número de cuenta del usuario que tiene la
> sesión abierta. Al contratar el servicio aceptas que tu contenido se muestre
> así y reconoces que cualquier reproducción conservará esa identificación.
>
> **Elementos de trazabilidad.** El banco de reactivos incluye elementos propios
> e identificables incorporados deliberadamente por el titular. Su aparición en
> material ajeno constituye evidencia de reproducción no autorizada.

*Por qué:* la primera es la Capa 1 y además **disuade** — quien sabe que va
marcado se lo piensa dos veces. La segunda es la Capa 5, redactada sin revelar
cuáles son los canarios ni cómo funcionan.

### Para la sección 8 (Suspensión de cuentas) — añadir

> El incumplimiento de las prohibiciones de la sección 4 da lugar a la
> cancelación inmediata del acceso **sin derecho a reembolso**, con independencia
> de las acciones civiles y penales que correspondan conforme a la Ley Federal
> del Derecho de Autor.

---

## 2. Aviso de Privacidad — finalidades que faltan

**Esto no es opcional.** La marca de agua **despliega datos personales** y la
detección de vaciado **registra actividad de uso**. La LFPDPPP exige declarar
para qué se tratan los datos. Hoy el aviso no lo dice.

Propuesta para la sección "Qué datos recabamos" / finalidades:

> **Seguridad y protección de la obra.** Mostramos tu nombre, correo y número de
> cuenta como marca de identificación sobre las pantallas de estudio y de
> resultados, para desalentar la copia no autorizada y poder rastrear el origen
> de una filtración. Además registramos datos de uso de tu cuenta —cuántos
> reactivos consultas, con qué frecuencia y desde cuántos dispositivos— con la
> única finalidad de detectar usos abusivos o automatizados. Estos datos no se
> usan para evaluarte ni influyen en tus resultados.

La última frase importa: deja claro que vigilar el abuso **no** se mezcla con el
diagnóstico psicológico del aspirante.

---

## 3. INDAUTOR — qué se necesita

**Lo primero que hay que entender:** tus derechos de autor **ya existen** desde
que creaste el material. El registro no te los otorga — te da **fecha cierta**
para probar que la obra era tuya *antes* de que alguien la copiara. Eso es lo que
sirve en un pleito.

Para el trámite ante el Instituto Nacional del Derecho de Autor necesitas, a
grandes rasgos:

- Identificación oficial del autor y sus datos fiscales.
- Un **ejemplar de la obra** (se acepta en digital).
- El formato de solicitud de registro de obra.
- El pago de derechos correspondiente.

**Se registra por obra**, así que lo natural es separarlas:

| Obra a registrar | Qué incluye |
|---|---|
| Guía del Aspirante | El manual completo (59 secciones) |
| Banco de reactivos — examen cultural | Los reactivos por libro y plantel |
| Banco de reactivos — examen psicológico | Personalidad (v3), psicométrico, axiológico |

> **Confirma requisitos, formatos y tarifas en el sitio oficial del INDAUTOR.**
> Cambian con el tiempo y no conviene fiarse de una lista escrita de memoria.

---

## 4. Expediente de evidencia

Esto es lo que ya tienes para probar autoría, **sin gastar un peso**.

### 4.1 Fecha cierta gratuita: el historial de git

Cada commit lleva fecha y hora. El repositorio es, de hecho, una bitácora de
cuándo existió cada pieza:

| Fecha | Commit | Qué prueba |
|---|---|---|
| 7 ago 2026 | `bf49903` | Marca de agua por usuario en funcionamiento |
| 7 ago 2026 | `ffe2cd2` | Límite de dispositivos por cuenta |
| 7 ago 2026 | `03dc36a` | Freno anti-vaciado |
| 8 ago 2026 | `2ed97ec` | Vigilancia de cuentas por cobertura del banco |
| 8 ago 2026 | `f034ee9` | Los canarios quedan fuera de la calificación |
| **9 ago 2026, 00:17** | **`fa88ea6`** | **Las cinco frases-canario ya existían en el banco** |

El último renglón es el importante: si alguna de esas frases aparece en material
de un competidor, ese commit prueba que estaban en tu banco desde esa fecha.

### 4.2 Los cinco canarios sembrados

Frases **inventadas** colocadas como opción incorrecta dentro de reactivos
legítimos. No existen en ningún libro. Nadie las escribe por casualidad.

| Materia | Archivo | Frase sembrada |
|---|---|---|
| Geografía (Tamayo, p. 120) | `HCM/geografia-07-climatologia.md` | "ordena los climas según su recurrencia estacional en las cuencas hidrográficas" |
| Álgebra (Baldor, p. 143) | `algebra-baldor/algebra-10-descomposicion-factorial.md` | "por su linaje aristocrático alejandrino" |
| Biología (Curtis, p. 89) | `EMM/biologia-05-membrana-plasmatica.md` | "un mosaico de gránulos esféricos separados por espacios claros" |
| Física (Pérez Montiel, p. 70) | `fisica-perez-montiel/fisica-04-cinematica.md` | "resulta de sumar las trayectorias parciales recorridas en cada tramo" |
| Historia (Rodríguez Arvizu, p. 206) | `HCM/historia-06-mundo-contemporaneo.md` | "Acuerdo de Bratislava sobre las zonas de ocupación" |

Cada uno lleva su nota `> CANARIO` en el archivo, que va a un campo interno y
**nunca llega al navegador del aspirante**.

> **Estado:** sembrados en los archivos fuente y respaldados en git, pero
> **todavía no importados a la base**, así que aún no aparecen en los exámenes.
> Se importan corriendo, desde `apps/backend`:
> `npx ts-node scripts/importar-cultural-oferta.ts --escribir`

### 4.3 Si algún día encuentras material copiado

Antes de hablar con nadie, guarda la prueba:

1. **Captura todo** con fecha visible: pantallas, videos, enlaces, nombre de la
   cuenta o el negocio.
2. Busca **los canarios** en ese material. Si aparece aunque sea uno, es la prueba
   más fuerte que tienes.
3. Busca **la marca de agua**: si la captura conserva un nombre y correo, ya sabes
   cuál de tus cuentas filtró el material.
4. **No borres nada** de tu lado: ni la cuenta sospechosa, ni sus registros de
   actividad, ni el historial de git.
5. Con eso en la mano, consulta al abogado.

---

## 5. Trámites pendientes ante instituciones

Al 9 de agosto de 2026 **la plataforma no está registrada ante ninguna
institución de gobierno.** Por eso se retiró del sitio toda afirmación que diera
por hecho un registro (ver abajo). Esto **no impide operar**, pero conviene
resolverlo antes de vender de forma sostenida.

| Trámite | Para qué | Estado |
|---|---|---|
| Alta ante el **SAT** (persona física con actividad empresarial, RESICO) | Facturar y declarar ingresos; es lo que permite publicar una identidad fiscal | Pendiente |
| Registro de obra ante el **INDAUTOR** | Fecha cierta de autoría (ver sección 3) | Pendiente |
| Registro de marca ante el **IMPI** | Poder usar ® en "El Monote te Guía" y defender el nombre | Pendiente — opcional |

**Lo que se retiró del sitio el 9 ago 2026** (para no afirmar algo que aún no es
cierto):

- La **identidad fiscal** en el Aviso legal ("Identidad del responsable") y en la
  Política de privacidad ("Responsable de tus datos"). El dato sigue guardado en
  `src/lib/legal.ts` con instrucciones para volver a insertarlo cuando exista el
  alta ante el SAT.
- La **Política de reembolsos** completa, por decisión de Carlo.

El símbolo ® nunca se usó, justamente por no haber registro ante el IMPI.

---

## Resumen de lo que falta

- [ ] Que un abogado revise y corrija las cláusulas de las secciones 1 y 2.
- [ ] Publicar las cláusulas ya aprobadas en las páginas legales.
- [ ] Definir qué dicen los Términos sobre cancelaciones (ver nota al final).
- [ ] Alta ante el SAT → reinsertar la identidad fiscal en las dos páginas.
- [ ] Registrar las obras ante el INDAUTOR.
- [ ] Importar los canarios a la base (`--escribir`).

---

## Nota sobre las cancelaciones (para hablarlo con el abogado)

La Política de reembolsos se eliminó el 9 de agosto de 2026 por decisión de
Carlo. Vale la pena que se lo plantees al abogado por dos razones:

1. La **Ley Federal de Protección al Consumidor** pide que las condiciones de
   compra sean claras antes de pagar. Al no haber ningún texto sobre
   cancelaciones, hoy los Términos no dicen nada al respecto.
2. **Mercado Pago** resuelve las contracargos con sus propias reglas. Sin una
   postura escrita de tu parte, esas disputas se deciden sin tu política.

No hace falta un documento aparte: bastaría **una o dos frases dentro de
Términos**, sección 5, diciendo lo que tú decidas — por ejemplo, que por tratarse
de contenido digital de acceso inmediato no hay devolución, o la ventana que
prefieras. Cuando lo decidas se agrega ahí.
