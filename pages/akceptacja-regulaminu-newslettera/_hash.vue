<template>
  <NewsletterSuccessPage
    :hash="hash"
  />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: {
    NewsletterSuccessPage: () => import(/* webpackChunkName: "NewsletterSuccessPage" */ '~/components/NewsletterSuccessPage.vue')
  },

  asyncData ({ params }: any) {
    const hash = params.hash
    return { hash }
  },

  head () {
    const location = useBrowserLocation()

    return {
      title: 'Akceptacja regulaminu newslettera - Sklep KapKap.eu',
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
