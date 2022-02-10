<template>
  <Basket />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    Basket: () => import(/* webpackChunkName: "Contact" */ '~/components/Basket/Basket.vue')
  },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Koszyk - Sklep KapKap.eu',
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
        }
      ]
    }
  }
}
</script>
