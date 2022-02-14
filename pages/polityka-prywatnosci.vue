<template>
  <Privacy />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    Privacy: () => import(/* webpackChunkName: "Privacy" */ '~/components/Privacy/Privacy.vue')
  },
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
