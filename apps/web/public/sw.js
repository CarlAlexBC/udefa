/*
 * Service worker de El Monote te Guía.
 *
 * LO QUE HACE, Y SOBRE TODO LO QUE NO HACE.
 *
 * Un service worker se instala en el navegador de cada visitante y se queda
 * ahí. Ese es su poder y su peligro: si guarda copias de las páginas, puede
 * seguir sirviéndolas viejas durante días aunque el servidor ya tenga otra
 * versión, y para el aspirante no hay forma obvia de arreglarlo.
 *
 * Por eso este NO GUARDA NI UNA SOLA PÁGINA DE LA PLATAFORMA. Nada de la Guía,
 * nada de los exámenes, nada del panel. Lo único que precarga es `offline.html`,
 * un archivo suelto que no cambia. Todo lo demás va SIEMPRE a la red.
 *
 * Consecuencia buscada: si el service worker se quedara pegado en una versión
 * vieja, daría igual — no tiene contenido que servir de más. Lo peor que puede
 * pasar es que muestre la pantalla de "sin conexión" cuando no toca.
 *
 * PARA QUÉ SIRVE ENTONCES:
 *   1. Chrome sólo ofrece «Instalar aplicación» a sitios con service worker.
 *      Es lo que convierte la página en algo instalable en el teléfono.
 *   2. Si al aspirante se le cae la señal a medio estudiar, ve una pantalla de
 *      la casa en vez del dinosaurio del navegador.
 *
 * CÓMO APAGARLO SI ALGÚN DÍA ESTORBA. No basta con borrar este archivo: los
 * navegadores que ya lo tengan lo conservarían. Hay que reemplazar su contenido
 * por esto y desplegar:
 *
 *     self.addEventListener('install', () => self.skipWaiting());
 *     self.addEventListener('activate', (e) => e.waitUntil(
 *       self.registration.unregister().then(() => self.clients.claim())
 *     ));
 *
 * Eso hace que se desinstale solo en cuanto cada quien vuelva a entrar.
 */

/* Súbele el número al cambiar este archivo: fuerza a tirar el caché viejo. */
const VERSION = 'v1'
const CACHE = `monote-${VERSION}`
const SIN_CONEXION = '/offline.html'

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.add(SIN_CONEXION))
      // Sin esto, una versión nueva se queda esperando a que el aspirante
      // cierre TODAS sus pestañas. Como aquí no hay caché de contenido que
      // pueda quedar a medias, entrar de inmediato es seguro.
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    (async () => {
      // Fuera cachés de versiones anteriores.
      const nombres = await caches.keys()
      await Promise.all(
        nombres.filter((n) => n !== CACHE).map((n) => caches.delete(n)),
      )

      // La precarga de navegación deja que el navegador empiece a pedir la
      // página SIN esperar a que arranque este archivo. Sin ella, interceptar
      // las navegaciones le añade unos milisegundos a cada visita.
      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable()
      }

      await self.clients.claim()
    })(),
  )
})

self.addEventListener('fetch', (evento) => {
  const peticion = evento.request

  // Sólo se toca la navegación entre páginas. Todo lo demás —imágenes, datos
  // del backend, tipografías— pasa de largo sin que este archivo lo vea, que es
  // la garantía de que no puede servir nada rancio.
  if (peticion.method !== 'GET') return
  if (peticion.mode !== 'navigate') return
  if (new URL(peticion.url).origin !== self.location.origin) return

  evento.respondWith(
    (async () => {
      try {
        const precargada = await evento.preloadResponse
        if (precargada) return precargada
        return await fetch(peticion)
      } catch {
        // Aquí sólo se llega si de verdad no hay red: `fetch` no falla por un
        // error del servidor (un 500 es una respuesta válida y se deja pasar).
        //
        // ESTE SEGUNDO `try` NO SOBRA. `respondWith` exige que se le entregue
        // una respuesta pase lo que pase: si algo aquí dentro reventara —el
        // almacenamiento lleno, el usuario borrando datos del sitio a media
        // navegación— la promesa se rompería y el navegador daría error de red
        // en TODAS las páginas para quien tenga esto instalado. El precio de un
        // descuido aquí no es una pantalla fea; es la plataforma inaccesible.
        try {
          const cache = await caches.open(CACHE)
          const respuesta = await cache.match(SIN_CONEXION)
          if (respuesta) return respuesta
        } catch {
          // Se ignora y cae al texto pelón de abajo.
        }
        return new Response('Sin conexión.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        })
      }
    })(),
  )
})
