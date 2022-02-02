<template>
  <div class="row">
    <div v-for="product in products" :key="product.productId" class="col-grid-box col-lg-3">
      <div class="product-box">
        <div>
          <div class="img-wrapper">
            <div class="lable-block">
              <span class="lable3">new</span>
              <span class="lable4">on sale</span>
            </div>
            <div class="front">
              <img :src="product.sampleImageURL" :alt="product.title" class="img-fluid bg-img">
            </div>
          </div>
          <div class="product-detail">
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
            </div>

            <NuxtLink
              :to="`/kubek/` + product.productId"
              class="nuxt-link-exact-active nuxt-link-active"
            >
              <h6>{{ product.title }}</h6>
            </NuxtLink>

            <h4>{{ product.price }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Product } from '~/types/categories/types'

@Component
export default class ProductsList extends Vue {
  @Prop() readonly products!: Product[]
}
</script>

<style scoped>

</style>
