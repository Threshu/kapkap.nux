<template>
  <div class="row">
    <div v-for="product in products" :key="product.productId" class="col-grid-box col-lg-3">
      <NuxtLink
        :to="getUrl(product)"
        class="nuxt-link-exact-active nuxt-link-active"
      >
        <div class="product-box" @click="handleItemClick(product)">
          <div>
            <div class="img-wrapper">
              <div class="lable-block">
                <span class="lable3">new</span>
                <span class="lable4">nowość</span>
              </div>
              <div class="front">
                <img :src="product.sampleImageURL" :alt="product.title" class="img-fluid bg-img">
              </div>
            </div>
            <div class="product-detail">
              <!--              <RatingStars active="5" />-->
              <h6>{{ product.title }}</h6>
              <h4>
                {{ product.price | currency }}
                <del>{{ (product.price + 10) | currency }}</del>
              </h4>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import RatingStars from '~/components/Common/RatingStars.vue'
import { Product } from '~/types/store/products/types'
@Component({
  components: { RatingStars }
})
export default class ProductsList extends Vue {
  @Getter('products/products') products!: Product[]

  getUrl (product: Product): string {
    return `${product.path}/${product.productId}`
  }

  handleItemClick (product: Product) {
    this.$emit('addLastVisited', { addDate: new Date(), product })
  }
}
</script>
<style scoped>
.front img {
  min-height: 150px;
}
</style>
