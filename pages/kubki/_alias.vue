<template>
  <ProductsList :products="products" @addLastVisited="handleAddLastVisited" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProductsList from '~/components/Category/ItemList.vue'
import { Product } from '~/types/products/types'

@Component({
  components: {
    ProductsList
  }
})
export default class Products extends Vue {
  products = []

  beforeRouteUpdate () {
  }

  mounted () {
  }

  handleAddLastVisited (product: Product) {
    this.$store.dispatch('products/addLastVisited', product)
  }
}

</script>
