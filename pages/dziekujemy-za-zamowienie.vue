<template>
  <ThankYou />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import ThankYou from '~/components/Order/ThankYouPage.vue'

export default {
  components: { ThankYou },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Dziękujemy za zamówienie - Sklep KapKap.eu',
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
