<template>
  <RegulationsAccounts />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    RegulationsAccounts: () => import(/* webpackChunkName: "RegulationsAccounts" */ '~/components/Regulations/RegulationsAccounts.vue')
  },
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
