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

  async created () {
    const categories = this.$store.dispatch('categories/loadCategories')
    const lastVisited = this.$store.dispatch('products/loadLastVisited')
    await Promise.all([categories, lastVisited])
    await this.loadProducts()
  }

  beforeMount () {
    this.$store.commit('products/setPath', this.$route)
  }

  @Watch('$route')
  async handleRouterChange () {
    await this.loadProducts()
  }

  async loadProducts () {
    const { path } = this.$route
    await this.$store.dispatch('products/loadProducts', path)
  }
}
</script>
