<template>
  <RegulationsInfographics />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    RegulationsInfographics: () => import(/* webpackChunkName: "RegulationsInfographics" */ '~/components/Regulations/RegulationsInfographics.vue')
  },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Regulamin - infografika - Sklep KapKap.eu',
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
