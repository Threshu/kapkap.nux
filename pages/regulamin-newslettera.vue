<template>
  <RegulationsNewsletter />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    RegulationsNewsletter: () => import(/* webpackChunkName: "RegulationsNewsletter" */ '~/components/Regulations/RegulationsNewsletter.vue')
  },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Regulamin newslettera - Sklep KapKap.eu',
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
