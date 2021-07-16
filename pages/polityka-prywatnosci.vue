<template>
  <Privacy />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import Privacy from '~/components/Privacy/Privacy.vue'

export default {
  components: { Privacy },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Polityka prywatności - Sklep KapKap.eu',
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
