<template>
  <Contact />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    Contact: () => import(/* webpackChunkName: "Contact" */ '~/components/Contact/Contact.vue')
  },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Kontakt - Sklep KapKap.eu',
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
