export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.css",
    "~/assets/css/animate.css",
    "~/assets/css/animate.min.css",
    "~/assets/css/magnific-popup.css",
    "~/assets/css/responsive.css",
    "~/assets/css/font-awesome.min.css",
    "~/assets/css/font-awesome.css",
    "~/assets/css/fonts.css",
    "~/assets/css/shortcode.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',

  ],
  axios: {
    // extra config e.g
    BaseURL: process.env.API_URL,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
