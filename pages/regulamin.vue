<template>
  <Regulations />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    Regulations: () => import(/* webpackChunkName: "Regulations" */ '~/components/Regulations/Regulations.vue')
  },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Regulamin - Sklep KapKap.eu',
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
