<template>
  <Basket />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import Basket from '~/components/Basket/Basket.vue'

export default {
  components: { Basket },
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
