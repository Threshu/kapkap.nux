<template>
  <Category />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    Category: () => import(/* webpackChunkName: "Category" */ '~/components/Category/Category.vue')
  },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Kubki klasy premium - Sklep KapKap.eu',
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
