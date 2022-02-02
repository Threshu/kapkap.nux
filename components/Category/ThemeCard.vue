<template>
  <div class="theme-card">
    <h5 class="title-border">
      new products
    </h5>
    <div class="offer-slider slide-1">
      <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide-active" style="width: 320px;">
            <div>
              <div class="media">
                <NuxtLink
                  to="/multikart/product/sidebar/1"
                >
                  <img
                    src="/images/multicart/1.jpg"
                    alt=""
                    class="img-fluid"
                  >
                </NuxtLink>
                <div class="media-body align-self-center">
                  <div class="rating">
                    <i class="fa fa-star" />
                    <i class="fa fa-star" />
                    <i class="fa fa-star" />
                    <i class="fa fa-star" />
                    <i class="fa fa-star" />
                  </div>
                  <NuxtLink to="/multikart/product/sidebar/1">
                    <h6>trim dress</h6>
                  </NuxtLink>
                  <h4>
                    $87.00
                    <del>$145.00</del>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ThemeCard extends Vue {

}
</script>

<style scoped lang="scss">
.swiper-wrapper {
  transform: translate3d(0px, 0px, 0px)
}
</style>
