<template>
  <RegulationsAccounts />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import RegulationsAccounts from '~/components/Regulations/RegulationsAccounts.vue'

export default {
  components: { RegulationsAccounts },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Regulamin kont - Sklep KapKap.eu',
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
