<template>
  <div>
    <div class="row">
      <div class="col-xl-12">
        <div class="filter-main-btn" @click="filter = !filter">
          <span class="filter-btn btn btn-theme">
            <i class="fa fa-filter" aria-hidden="true" /> Filter
          </span>
        </div>
      </div>
    </div>
    <div class="collection-filter" :class="{ 'openFilterbar' : filter }">
      <div class="collection-filter-block">
        <!-- brand filter start -->
        <div class="collection-mobile-back">
          <span class="filter-back" @click="filter = !filter">
            <i class="fa fa-angle-left" aria-hidden="true" /> back
          </span>
        </div>
        <div class="collection-collapse-block open">
          <h3 v-b-toggle.category class="collapse-block-title">
            Category
          </h3>
          <b-collapse id="category" visible accordion="myaccordion" role="tabpanel">
            <div class="collection-collapse-block-content">
              <div class="collection-brand-filter">
                <ul class="category-list">
                  <li>
                    <nuxt-link :to="{ path: '/collection/leftsidebar/all'}">
                      All products
                    </nuxt-link>
                  </li>
                  <li
                    v-for="(category,index) in filterbyCategory"
                    :key="index"
                  >
                    <nuxt-link :to="{ path: '/collection/leftsidebar/'+category}" @click="getCategoryFilter(category)">
                      {{ category }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
      <!-- side-bar single product slider start -->
      <div class="theme-card">
        <h5 class="title-border">
          new products
        </h5>
        <div class="offer-slider slide-1">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div>
                  <div v-for="(product,index) in getCategoryProduct('new products').splice(0,3)" :key="index" class="media">
                    <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                      <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                    </nuxt-link>
                    <div class="media-body align-self-center">
                      <div class="rating">
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                      </div>
                      <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                        <h6>{{ product.title }}</h6>
                      </nuxt-link>
                      <h4 v-if="product.sale">
                        {{ discountedPrice(product) * currency.curr | currency(currency.symbol) }}
                        <del>{{ product.price * currency.curr | currency(currency.symbol) }}</del>
                      </h4>
                      <h4 v-else>
                        {{ product.price * currency.curr | currency(currency.symbol) }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="getCategoryProduct('new products').length >= 4" class="swiper-slide">
                <div>
                  <div v-for="(product, index) in getCategoryProduct('new products').splice(3,3)" :key="index" class="media">
                    <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                      <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                    </nuxt-link>
                    <div class="media-body align-self-center">
                      <div class="rating">
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                        <i class="fa fa-star" />
                      </div>
                      <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                        <h6>{{ product.title }}</h6>
                      </nuxt-link>
                      <h4 v-if="product.sale">
                        {{ discountedPrice(product) * currency.curr | currency(currency.symbol) }}
                        <del>{{ product.price * currency.curr | currency(currency.symbol) }}</del>
                      </h4>
                      <h4 v-else>
                        {{ product.price * currency.curr | currency(currency.symbol) }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div slot="button-prev" class="swiper-button-prev">
              <i class="fa fa-angle-left" aria-hidden="true" />
            </div>
            <div slot="button-next" class="swiper-button-next">
              <i class="fa fa-angle-right" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <!-- side-bar single product slider end -->
      <!-- side-bar banner start here -->
      <div class="collection-sidebar-banner">
        <a href="#">
          <img :src="bannerimagepath" class="img-fluid">
        </a>
      </div>
      <!-- side-bar banner end here -->
    </div>
    <!-- silde-bar colleps block end here -->
  </div>
</template>

<script lang="ts">
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import { Component, Getter, State, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    VueSlider
  }
})
export default class Sidebar extends Vue {
  bannerimagepath: string = '' // require('@/assets/images/side-banner.png'),
  value: any = [50, 550]
  applyFilter: any[] = []
  activeItem: string = 'category'
  filter: boolean = false
  openBlock: boolean = true
  swiperOption: any = {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  @State('products/productslist') productslist!: any
  @State('products/currency') currency!: any
  @Getter('filter/filterbyCategory') filterbyCategory!: any

  mounted () {
    this.$emit('priceVal', this.value)
  }

  getCategoryProduct (collection: any) {
    return this.productslist.filter((item: any) => {
      if (item.collection.find((i: any) => i === collection)) {
        return item
      }
      return false
    })
  }

  getImgUrl (path: string) {
    return '' // require('@/assets/images/' + path)
  }

  discountedPrice (product: any) {
    const price = product.price - (product.price * product.discount / 100)
    return price
  }

  isActive (filterItem: any) {
    return this.applyFilter.includes(filterItem)
  }

  appliedFilter (val: any) {
    this.$emit('allFilters', this.applyFilter)
  }

  sliderChange (event: any) {
    this.$emit('priceVal', event)
  }

  toggleSidebarBlock () {
    this.openBlock = !this.openBlock
  }

  getCategoryFilter (category: any) {
    this.$store.dispatch('filter.js/getCategoryFilter', category)
  }
}
</script>
