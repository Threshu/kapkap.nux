<template>
  <Regulations />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import Regulations from '~/components/Regulations/Regulations.vue'

export default {
  components: { Regulations },
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
