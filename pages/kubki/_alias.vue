<template>
  <Category
    :alias="alias"
  />
</template>

<script lang="ts">
import Category from '@/components/Category/Category.vue'
import { useBrowserLocation } from '@vueuse/core'

export default {
  components: { Category },

  asyncData ({ params }: any) {
    const alias = params.alias
    return { alias }
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
