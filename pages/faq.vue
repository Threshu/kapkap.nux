<template>
  <Faq />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: { Faq: () => import(/* webpackChunkName: "Faq" */ '~/components/Faq/Faq.vue') },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'O nas - Sklep KapKap.eu',
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
