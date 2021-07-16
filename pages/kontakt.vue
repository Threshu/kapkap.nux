<template>
  <Contact />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import Contact from '~/components/Contact/Contact.vue'

export default {
  components: { Contact },
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
