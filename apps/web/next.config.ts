import type { NextConfig } from "next";

/**
 * Cabeceras de seguridad de la WEB.
 *
 * El backend ya las tenía por `helmet()` desde la auditoría de julio, pero eso
 * sólo protege `api.elmonoteteguia.com`. La web es otro servidor y salió a
 * internet sin ninguna: el escáner de Mozilla la calificó con **D (30/100)** el
 * 20 ago 2026.
 *
 * Falta a propósito la Content-Security-Policy, que es la que más puntúa (−25).
 * En Next hay que trabajarla con *nonces* porque el framework inyecta scripts en
 * línea; hecha de prisa rompe el sitio de formas difíciles de diagnosticar.
 * Merece su propia sesión. Con estas cuatro se pasa de 30 a ~75.
 */
const CABECERAS_SEGURIDAD = [
  {
    // Impide que alguien meta tu sitio dentro de un marco invisible en el suyo
    // para que el aspirante crea que hace clic en una cosa y haga clic en otra.
    // No tienes ningún uso legítimo para ser embebido.
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Prohíbe que el navegador "adivine" el tipo de un archivo cuando la
    // cabecera no le cuadra. Sin esto, algo servido como texto puede acabar
    // ejecutándose como script.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Al salir de tu sitio no se filtra la dirección completa donde estaba el
    // aspirante, sólo el dominio. Importa porque hay direcciones con su
    // identificador de intento dentro (/inicio/resultados/234).
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // "Este dominio es HTTPS siempre, por un año." Cierra la ventana en que un
    // atacante en una red pública podría forzar una conexión sin cifrar.
    //
    // SIN `preload` A PROPÓSITO: eso mete el dominio en una lista que traen los
    // navegadores de fábrica y salir de ella es un trámite lento con Google. Lo
    // de aquí caduca solo y se puede revertir; el preload, no.
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

/**
 * Content-Security-Policy — ACTIVA Y BLOQUEANDO (22 ago 2026).
 *
 * `Report-Only` significa que el navegador COMPRUEBA la política y avisa en su
 * consola de lo que la violaría, pero **no bloquea nada**. El sitio funciona
 * exactamente igual. Es la forma de estrenar una CSP sin arriesgarse a dejar la
 * página en blanco y sin pista de por qué.
 *
 * CÓMO SE LEE: abrir el sitio con F12 → Console. Cada aviso que empiece con
 * "[Report Only] Refused to..." es algo que la política bloquearía si estuviera
 * activa. Mientras haya avisos, NO se activa.
 *
 * SE ACTIVÓ el 22 ago 2026, después de recorrer el sitio entero con la política
 * en Report-Only sin encontrar una sola violación: portada, probadita, precios,
 * tablero, Guía, panel de resultados, práctica cultural y analítica del panel.
 * También se comprobó que el pago NO se rompe: el botón manda a Mercado Pago con
 * `window.location.href`, que es navegación y no envío de formulario, así que
 * `form-action 'self'` no le aplica.
 *
 * CÓMO SE REVIERTE si algo apareciera: devolverle el `-Report-Only` al nombre de
 * la cabecera de abajo. Vuelve a avisar sin bloquear y el sitio funciona igual.
 *
 * POR QUÉ script-src LLEVA 'unsafe-inline': Next inyecta scripts en línea para
 * hidratar la página. Quitarlo exige *nonces*, y según la documentación de esta
 * versión eso **obliga a renderizado dinámico en todas las páginas** — hoy la
 * portada y /precios son estáticas y dejarían de serlo. Es una decisión de
 * arquitectura, no una cabecera: se evalúa aparte.
 *
 * Los orígenes salieron de MEDIR el sitio desplegado, no de suponer: no usa
 * Google Fonts (van con next/font), no carga nada de terceros, y lo único
 * externo es el enlace a TikTok del pie, que es navegación y no carga.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  // El backend vive en otro subdominio: sin esto, la web no podría hablarle.
  "connect-src 'self' https://api.elmonoteteguia.com",
  "object-src 'none'",
  "base-uri 'self'",
  // Checkout Pro se abre navegando, no enviando un formulario a Mercado Pago;
  // si algún día apareciera un aviso por esto, aquí se añade su origen.
  "form-action 'self'",
  // El equivalente moderno de X-Frame-Options. Se mantienen los dos: los
  // navegadores viejos sólo entienden el otro.
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...CABECERAS_SEGURIDAD,
          { key: "Content-Security-Policy", value: CSP },
        ],
      },
    ];
  },
};

export default nextConfig;
