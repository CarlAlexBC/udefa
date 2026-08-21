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

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: CABECERAS_SEGURIDAD }];
  },
};

export default nextConfig;
