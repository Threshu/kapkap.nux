<template>
  <div>
    <Breadcrumb :title="categoryName" />

    <section class="categoryBox">
      <div class="collection-wrapper productBoxBg">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
<!--              <Sidebar @allFilters="allfilter" @priceVal="pricefilterArray" @categoryfilter="getCategoryFilter" />-->
            </div>


            <div class="collection-content col">
              <div class="page-main-content">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="top-banner-wrapper">
                      <a href="#">
                        <img
                          src=""
                          class="img-fluid"
                          alt
                        >
                      </a>

                    </div>
                    <ul class="product-filter-tags">
                      <li
                        v-for="(tag,index) in allfilters"
                        :key="index"
                        class="mr-1"
                      >
                        <a href="javascript:void(0)" class="filter_tag">{{ tag }}<i
                          class="ti-close"
                          @click="removeTags(tag)"
                        /></a>
                      </li>
                      <li v-if="allfilters.length > 0" class="clear_filter">
                        <a
                          href="javascript:void(0)"
                          class="clear_filter"
                          @click="removeAllTags()"
                        >Clear all</a>
                      </li>
                    </ul>
                    <div class="collection-product-wrapper">
                      <div class="product-top-filter">
                        <div class="row">
                          <div class="col-12">
                            <div class="product-filter-content">
                              <div class="search-count">
                                <h5>Showing Products 1-12 of {{ filterProduct.length }} Result</h5>
                              </div>
                              <div class="collection-view">
                                <ul>
                                  <li @click="gridView()">
                                    <i class="fa fa-th grid-layout-view" />
                                  </li>
                                  <li @click="listView()">
                                    <i class="fa fa-list-ul list-layout-view" />
                                  </li>
                                </ul>
                              </div>
                              <div class="collection-grid-view">
                                <ul>
                                  <li>
                                    <img
                                      src=""
                                      class="product-2-layout-view"
                                      @click="grid2()"
                                    >
                                  </li>
                                  <li>
                                    <img
                                      src=""
                                      class="product-3-layout-view"
                                      @click="grid3()"
                                    >
                                  </li>
                                  <li>
                                    <img
                                      src=""
                                      class="product-4-layout-view"
                                      @click="grid4()"
                                    >
                                  </li>
                                  <li>
                                    <img
                                      src=""
                                      class="product-6-layout-view"
                                      @click="grid6()"
                                    >
                                  </li>
                                </ul>
                              </div>
                              <div class="product-page-filter">
                                <select @change="onChangeSort($event)">
                                  <option value="all">
                                    Sorting Items
                                  </option>
                                  <option value="a-z">
                                    Alphabetically, A-Z
                                  </option>
                                  <option value="z-a">
                                    Alphabetically, Z-A
                                  </option>
                                  <option value="low">
                                    price, low to high
                                  </option>
                                  <option value="high">
                                    price, high to low
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-wrapper-grid" :class="{'list-view':listview == true}">
                        <div class="row">
                          <div class="col-sm-12">
                            <div v-if="filterProduct.length == 0" class="text-center section-t-space section-b-space">
                              <img src="" class="img-fluid" alt>
                              <h3 class="mt-3">
                                Sorry! Couldn't find the product you were looking For!!!
                              </h3>
                              <div class="col-12 mt-3">
                                <nuxt-link :to="{ path: '/'}" class="btn btn-solid">
                                  continue shopping
                                </nuxt-link>
                              </div>
                            </div>
                          </div>
                          <div
                            v-for="(product,index) in filterProduct"
                            v-show="setPaginate(index)"
                            :key="index"
                            class="col-grid-box"
                            :class="{'col-lg-3':col4 == true, 'col-lg-4':col3 == true, 'col-lg-6':col2 == true, 'col-lg-2':col6 == true, 'col-lg-12':listview == true}"
                          >
                            <div class="product-box">
<!--                              <productBox1-->
<!--                                :product="product"-->
<!--                                :index="index"-->
<!--                                @opencartmodel="showCart"-->
<!--                                @showCompareModal="showCoampre"-->
<!--                                @openquickview="showQuickview"-->
<!--                                @showalert="alert"-->
<!--                                @alertseconds="alert"-->
<!--                              />-->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="filterProduct.length > paginate" class="product-pagination mb-0">
                        <div class="theme-paggination-block">
                          <div class="row">
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <nav aria-label="Page navigation">
                                <ul class="pagination">
                                  <li class="page-item" :class="{'disable': current == 1 }">
                                    <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current-1)">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-left" aria-hidden="true" />
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    v-for="(page_index, index) in pages"
                                    :key="index"
                                    class="page-item"
                                    :class="{'active': page_index == current}"
                                  >
                                    <a
                                      class="page-link"
                                      href="javascrip:void(0)"
                                      @click.prevent="updatePaginate(page_index)"
                                    >{{ page_index }}</a>
                                  </li>
                                  <li class="page-item" :class="{'disable': current == paginates }">
                                    <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current+1)">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-right" aria-hidden="true" />
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <div class="product-search-count-bottom">
                                <h5>Showing Products 1-12 of {{ filterProduct.length }} Result</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Prop, Vue } from 'nuxt-property-decorator'
import { mapGetters } from 'vuex'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import Sidebar from '~/components/Category/Sidebar.vue'

var productConfBox = new Vue({
  el: '#productConfBox',
  data: {
    confMenu: 1
  }
})


@Component({
  components: { Breadcrumb, Sidebar },
  computed: {
    ...mapGetters({
      tags: 'filter.js/setTags',
      curr: 'products/changeCurrency'
    })
  }
})
export default class Category extends Vue {
  @Prop({
    type: String,
    required: false,
    default: ''
  }) alias!: string

  @Getter('filter/filterProducts') filterProduct!: any

  bannerimagepath: string = ''
  col2: boolean = false
  col3: boolean = false
  col4: boolean = true
  col6: boolean = false
  listview: boolean = false
  priceArray: any[] = []
  allfilters: any[] = []
  items: any[] = []
  current: number = 1
  paginate: number = 12
  paginateRange: number = 3
  pages: any[] = []
  paginates: number = 0
  showquickviewmodel: boolean = false
  showcomparemodal: boolean = false
  showcartmodal: boolean = false
  quickviewproduct: any = {}
  comapreproduct: any = {}
  cartproduct: any = {}
  dismissSecs: number = 5
  dismissCountDown: number = 0
  swiperOption: any = {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  get categoryName () {
    const names: Record<string, string> = {
      'dla-par': 'Kubki dla par',
      'z-kotami': 'Kubki z kotami',
      'z-psami': 'Kubki z psami',
      'ze-znajomymi': 'Kubki ze znajomymi'
    }

    return names[this.alias]
  }



  // mounted () {
  //   this.updatePaginate(1)
  // }
  //
  // onChangeSort (event: any) {
  //   this.$store.dispatch('filter.js/sortProducts', event.target.value)
  // }
  //
  // gridView () {
  //   this.col4 = true
  //   this.col2 = false
  //   this.col3 = false
  //   this.col6 = false
  //   this.listview = false
  // }
  //
  // listView () {
  //   this.listview = true
  //   this.col4 = false
  //   this.col2 = false
  //   this.col3 = false
  //   this.col6 = false
  // }
  //
  // grid2 () {
  //   this.col2 = true
  //   this.col3 = false
  //   this.col4 = false
  //   this.col6 = false
  //   this.listview = false
  // }
  //
  // grid3 () {
  //   this.col3 = true
  //   this.col2 = false
  //   this.col4 = false
  //   this.col6 = false
  //   this.listview = false
  // }
  //
  // grid4 () {
  //   this.col4 = true
  //   this.col2 = false
  //   this.col3 = false
  //   this.col6 = false
  //   this.listview = false
  // }
  //
  // grid6 () {
  //   this.col6 = true
  //   this.col2 = false
  //   this.col3 = false
  //   this.col4 = false
  //   this.listview = false
  // }
  //
  // removeTags (val: any) {
  //   this.allfilters.splice(this.allfilters.indexOf(val), 1)
  // }
  //
  // removeAllTags () {
  //   this.allfilters.splice(0, this.allfilters.length)
  // }
  //
  getCategoryFilter () {
    this.updatePaginate(1)
    this.$store.dispatch('filter.js/getCategoryFilter', this.$route.params.id)
  }

  allfilter (selectedVal: any) {
    this.allfilters = selectedVal
    this.$store.dispatch('filter.js/setTags', selectedVal)
    this.getPaginate()
    this.updatePaginate(1)
  }

  pricefilterArray (item: any) {
    this.getCategoryFilter()
    this.$store.dispatch('filter.js/priceFilter', item)
    this.getPaginate()
    this.updatePaginate(1)
  }

  getPaginate () {
    // this.paginates = Math.round(this.filterProduct.length / this.paginate)
    this.pages = []
    for (let i = 0; i < this.paginates; i++) {
      this.pages.push(i + 1)
    }
  }

  // setPaginate (i: any) {
  //   if (this.current === 1) {
  //     return i < this.paginate
  //   } else {
  //     return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate))
  //   }
  // }

  updatePaginate (i: number) {
    this.current = i
    let start: number = 0
    let end: number = 0
    if (this.current < this.paginateRange - 1) {
      start = 1
      end = start + this.paginateRange - 1
    } else {
      start = this.current - 1
      end = this.current + 1
    }
    if (start < 1) {
      start = 1
    }
    if (end > this.paginates) {
      end = this.paginates
    }
    this.pages = []
    for (let i: number = start; i <= end; i++) {
      this.pages.push(i)
    }
    return this.pages
  }

  // alert (item: any) {
  //   this.dismissCountDown = item
  // }
  //
  // showQuickview (item: any, productData: any) {
  //   this.showquickviewmodel = item
  //   this.quickviewproduct = productData
  // }
  //
  // showCoampre (item: any, productData: any) {
  //   this.showcomparemodal = item
  //   this.comapreproduct = productData
  // }
  //
  // closeCompareModal (item: any) {
  //   this.showcomparemodal = item
  // }
  //
  // showCart (item: any, productData: any) {
  //   this.showcartmodal = item
  //   this.cartproduct = productData
  // }
  //
  // closeCartModal (item: any) {
  //   this.showcartmodal = item
  // }
}
</script>
