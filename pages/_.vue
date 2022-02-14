<template>
  <Page404 />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: { Page404: () => import(/* webpackChunkName: "Page404" */ '~/components/Page404.vue') },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'KapKap - najładniejsze kubki w Polsce',
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
