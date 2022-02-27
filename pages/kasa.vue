<template>
  <Summary :key="$route.fullPath" />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    Summary: () => import(/* webpackChunkName: "Summary" */ '~/components/Order/Summary.vue')
  },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Podsumowanie zamówienia - Sklep KapKap.eu',
      meta: [],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: location.value.href
        },
        {
          hid: 'shortcut icon',
          rel: 'shortcut icon',
          href: '/favicon.ico',
          type: 'image/x-icon'
        },
        {
          rel: 'stylesheet',
          href: 'https://geowidget.easypack24.net/css/easypack.css'
        }

      ],
      script: [
        {
          src: 'https://geowidget.easypack24.net/js/sdk-for-javascript.js'
        }
      ]
    }
  }
}
</script>
