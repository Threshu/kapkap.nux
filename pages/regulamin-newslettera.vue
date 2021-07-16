<template>
  <RegulationsNewsletter />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import RegulationsNewsletter from '~/components/Regulations/RegulationsNewsletter.vue'

export default {
  components: { RegulationsNewsletter },
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
