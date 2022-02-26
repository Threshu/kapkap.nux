<template>
  <div>
    <h3 v-if="products.length" class="last-visited-text">
      Ostatnio oglądane
    </h3>
    <div
      v-for="product in products"
      :key="product.productId"
      class="theme-card"
    >
      <div class="title-border" />
      <div class="offer-slider slide-1">
        <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active">
              <div>
                <NuxtLink :to="`/kubek/` + product.productId">
                  <div class="item">
                    <div>
                      <img :src="product.sampleImageURL" :alt="product.title">
                    </div>
                    <div class="item-content">
                      <RatingStars :active="4" />
                      <h6>{{ product.title }}</h6>
                      <h4>
                        {{ product.price | currency }}
                        <del>{{ product.price | currency }}</del>
                      </h4>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import RatingStars from '~/components/Common/RatingStars.vue'
import { Product } from '~/types/store/products/types'
@Component({
  components: { RatingStars }
})
export default class ThemeCard extends Vue {
  @Prop() readonly lastVisited!: Product[]

  get products (): Product[] {
    return this.lastVisited.slice(0, 4)
  }
}
</script>

<style scoped lang="scss">
.last-visited-text {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
}

.item {
  display: flex;

  .item-content{
    width: 60%;
  }
}
.swiper-wrapper {
  transform: translate3d(0px, 0px, 0px)
}

.item-content {
  padding-top: 20px;
}

.title-border {
  border-bottom: 1px solid $round-border;
}
</style>
