<template>
  <RegulationsInfographics />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import RegulationsInfographics from '~/components/Regulations/RegulationsInfographics.vue'

export default {
  components: { RegulationsInfographics },
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
