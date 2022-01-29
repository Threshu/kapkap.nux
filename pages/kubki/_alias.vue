<template>
  <section class="section-b-space ratio_asos">
    <div class="collection-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div>
              <div class="row">
                <FilterBtn />
              </div>
              <div class="collection-filter">
                <CategoryMenu :categories="categories" />
                <ThemeCard />
                <SidebarBanner />
              </div>
            </div>
          </div>

          <div class="collection-content col">
            <div class="page-main-content">
              <div class="row">
                <div class="col-sm-12">
                  <TopBanner />
                  <div class="collection-product-wrapper">
                    <ProductTopFilters />
                    <div class="product-wrapper-grid">
                      <ProductsList :products="products" />
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
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { useBrowserLocation } from '@vueuse/core'
import { Jsonld } from 'nuxt-jsonld'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import ProductsList from '~/components/Category/ItemList.vue'
import CategoryMenu from '~/components/Category/CategoryMenu.vue'
import ThemeCard from '~/components/Category/ThemeCard.vue'
import { Category, Product } from '~/types/categories/types'
import TopBanner from '~/components/Category/TopBanner.vue'
import ProductTopFilters from '~/components/Category/ProductTopFilters.vue'
import SidebarBanner from '~/components/Category/SidebarBanner.vue'
import FilterBtn from '~/components/Category/FilterBtn.vue'

@Jsonld
@Component({
  components: {
    FilterBtn,
    SidebarBanner,
    ThemeCard,
    CategoryMenu,
    ProductsList,
    Breadcrumb,
    TopBanner,
    ProductTopFilters
  }
})
export default class Cups extends Vue {
  @Getter('categories/categories') categories!: Category[]
  @Getter('categories/products') products!: Product[]

  async getCategories () {
    await this.$store.dispatch('categories/loadCategories')
  }

  mounted () {
    this.getCategories()
  }

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
}
</script>
