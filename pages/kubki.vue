<template>
  <Category />
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
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

  async fetch () {
    // if (process.server) {
    const categories = this.$store.dispatch('categories/loadCategories')
    const lastVisited = this.$store.dispatch('products/loadLastVisited')
    const products = this.loadProducts()
    await Promise.all([categories, lastVisited, products])
  }

  @Watch('$route')
  async handleRouterChange () {
    await this.loadProducts()
  }

  loadProducts (): Promise<any> {
    const { path } = this.$route
    return this.$store.dispatch('products/loadProducts', path)
  }
}
</script>
