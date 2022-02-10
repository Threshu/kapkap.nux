<template>
  <Category />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { useBrowserLocation } from '@vueuse/core'

@Component({
  components: {
    Category: () => import(/* webpackChunkName: "Category" */ '~/components/Category/Category.vue')
  }
})
export default class Cups extends Vue {
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
