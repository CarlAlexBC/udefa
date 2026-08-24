import type { MetadataRoute } from 'next'

/**
 * Manifiesto de la app instalable.
 *
 * Es lo que convierte la página en algo que Android puede instalar, y la base
 * del camino elegido para la Play Store: TWA, o sea que la propia web ES la
 * app. Ventaja de fondo: al subir un cambio a la página, la app ya lo tiene —
 * no hay un segundo proyecto que mantener ni revisión de Google por cada
 * arreglo.
 *
 * EL NOMBRE LARGO LLEVA «UDEFA» y el corto no. El título es lo que más pesa
 * cuando alguien busca en la tienda, y quien todavía no conoce la marca no
 * teclea «Monote»: teclea la escuela a la que quiere entrar. El corto es el que
 * cabe debajo del icono en la pantalla del teléfono, donde no hay espacio para
 * nada más. Tope de la tienda: 30 caracteres.
 *
 * TRES ICONOS Y NO UNO, porque hacen trabajos distintos:
 *   - `any` (192 y 512): el logo tal cual, con su transparencia.
 *   - `maskable`: el mismo logo pero más chico dentro del cuadro. Android le
 *     recorta las orillas según el teléfono —círculo, cuadrado redondeado,
 *     gota— y a tamaño completo le cortaría el borde dorado.
 * Los tres van pasados a 256 colores: medio mega por un icono era absurdo.
 *
 * `display: 'standalone'` es lo que la hace abrir sin barra de navegador. Sin
 * eso, instalada se vería igual que una pestaña y no valdría la pena.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'El Monote te Guía · UDEFA',
    short_name: 'El Monote te Guía',
    description:
      'Simulador del examen de admisión a planteles militares: psicométrico, personalidad, axiológico y cultural, con panel de resultados que diagnostica.',
    start_url: '/inicio',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    lang: 'es-MX',
    dir: 'ltr',
    categories: ['education'],
    // El carbón de la marca. `background_color` es la pantalla de arranque y
    // `theme_color` la barra de estado: los dos oscuros para que el salto a la
    // app no dé un flashazo blanco.
    background_color: '#161513',
    theme_color: '#161513',
    icons: [
      { src: '/app/icono-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/app/icono-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      {
        src: '/app/icono-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
