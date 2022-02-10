<template>
  <Summary />
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
        }
      ]
    }
  }
}
</script>
