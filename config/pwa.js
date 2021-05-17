// PWA module configuration: https://go.nuxtjs.dev/pwa
export default {
  manifest: {
    lang: 'en',
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://cdn.andrewbilenduke.com/.*',
        strategyOptions: {
          cacheName: 'ab-cache',
        },
        strategyPlugins: [
          {
            use: 'Expiration',
            config: {
              maxEntries: 10,
              maxAgeSeconds: 300,
            },
          },
        ],
      },
    ],
  },
}
