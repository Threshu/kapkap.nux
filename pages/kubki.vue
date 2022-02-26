<template>
  <Category />
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { useBrowserLocation } from '@vueuse/core'
import Category from '~/components/Category/Category.vue'

@Component({
  components: {
    Category
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

  async created (): Promise<void> {
    const categories = this.$store.dispatch('categories/loadCategories')
    const lastVisited = this.$store.dispatch('products/loadLastVisited')
    await Promise.all([categories, lastVisited])
    this.loadProducts()
  }

  @Watch('$route')
  handleRouterChange () {
    this.loadProducts()
  }

  loadProducts () {
    const { path } = this.$route
    this.$store.dispatch('products/loadProducts', path)
  }
}
</script>
