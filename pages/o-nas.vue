<template>
  <AboutUs />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import AboutUs from '~/components/AboutUs/AboutUs.vue'

export default {
  components: { AboutUs },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'O nas - Sklep KapKap.eu',
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
