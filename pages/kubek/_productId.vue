<template>
  <Cup
    :product-id="productId"
    :edit-mode="false"
  />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: { Cup: () => import(/* webpackChunkName: "Cup" */ '@/components/Cup/Cup.vue') },

  asyncData ({ params }: any) {
    return { productId: params.productId }
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
  },

  mounted () {
    if (process.client) {
      console.log(window.innerWidth)
      document.getElementsByTagName('html')[0].classList.add('no-scroll')
    }
  }
}
</script>
