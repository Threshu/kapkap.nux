<template>
  <Category
    :alias="alias"
  />
</template>

<script lang="ts">
import Category from '@/components/Category/Category'

type Params = {
  alias: string
}

export default {
  components: { Category },

  asyncData (params: Params) {
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
