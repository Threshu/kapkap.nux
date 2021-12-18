export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KapKap',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { equiv: 'Content-Type', content: 'text/html' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/font-awesome.scss',
    '~/assets/scss/bootstrap.scss',
    '~/assets/scss/slick.scss',
    '~/assets/scss/slick-theme.scss',
    '~/assets/scss/animate.scss',
    '~/assets/scss/themify.scss',
    '~/assets/scss/color1.scss',
    '~/assets/scss/style.scss',
    '~/assets/scss/category.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/preview.client.js',
    '~/plugins/jsonld',
    '~/plugins/axios-accessor',
    {src: '~plugins/zoom', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  i18n: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl',
    ueI18n: {
      fallbackLocale: 'en'
    },
    vueI18nLoader: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { vendor:['vue-image-zoomer'] },

  env: {
    phone: process.env.PHONE,
    phoneFormatted: process.env.PHONE_FORMATTED,
    companyName: process.env.COMPANY_NAME,
    companyStreet: process.env.COMPANY_STREET,
    companyZip: process.env.COMPANY_ZIP,
    companyCity: process.env.COMPANY_CITY,
    companyMail: process.env.COMPANY_MAIL,
  }
}
