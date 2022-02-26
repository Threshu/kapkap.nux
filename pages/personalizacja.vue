<template>
  <Personalization />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: { Personalization: () => import(/* webpackChunkName: "Personalization" */ '~/components/Personalization/Personalization.vue') },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Personalizowane kubki - Sklep KapKap.eu',
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
