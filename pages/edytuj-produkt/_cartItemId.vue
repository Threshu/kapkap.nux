<template>
  <Cup
    :cart-item-id="cartItemId"
    :edit-mode="true"
  />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: { Cup: () => import(/* webpackChunkName: "Cup" */ '@/components/Cup/Cup.vue') },

  asyncData ({ params }: any) {
    return { cartItemId: params.cartItemId }
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
