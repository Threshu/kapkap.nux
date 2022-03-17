import https from 'https'
import path from 'path'
import fs from 'fs'
import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
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
      { rel: 'preconnect', href: process.env.SITE_URL }
    ]
  },
  router: {
    prefetchLinks: false
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
    '~/plugins/axios',
    '~/plugins/filters',
    { src: '~plugins/zoom', ssr: false }
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
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module'
    '@nuxtjs/google-fonts',
    'nuxt-compress',
    '@nuxtjs/google-analytics'
  ],

  googleFonts: {
    families: {
      Lato: [300, 400, 700],
      Poppins: [200, 300, 400, 500, 700]
    },
    display: 'swap',
    prefetch: false,
    preconnect: true,
    preload: true
  },
  styleResources: {
    scss: ['./assets/scss/theme/_variables.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192
        },

        brotli: {
          threshold: 8192
        }
      }
    ]
  ],

  i18n: {
    locales: ['pl', 'en', 'cz'],
    defaultLocale: 'pl',
    ueI18n: {
      fallbackLocale: 'pl'
    },
    vueI18nLoader: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: false,
    baseURL: process.env.API_URL
  },

  env: {
    phone: process.env.PHONE,
    phoneFormatted: process.env.PHONE_FORMATTED,
    companyName: process.env.COMPANY_NAME,
    companyStreet: process.env.COMPANY_STREET,
    companyZip: process.env.COMPANY_ZIP,
    companyCity: process.env.COMPANY_CITY,
    companyMail: process.env.COMPANY_MAIL
  },

  server: {
    host: '0.0.0.0',
    port: process.env.PORT
    // https:
    //   process.env.ENV !== 'production'
    //     ? undefined
    //     : {
    //         key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
    //         cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
    //       }
  },

  googleAnalytics: {
    id: 'UA-194230785-1'
  },

  proxy: {
    '/v1/': {
      target: process.env.API_URL
    }
  },

  generate: {
    routes (callback) {
      const agent = new https.Agent({
        rejectUnauthorized: false
      })
      axios
        .get('https://api.kapkap.eu/v1/categories', { httpsAgent: agent })
        .then((res) => {
          const routes = res.data?.categories.map((category) => {
            return category.path
          })
          callback(null, routes)
        })
        .catch(callback)
    }
  }
}
