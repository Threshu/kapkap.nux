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
                <ClientOnly>
                  <ThemeCard :last-visited="lastVisited" />
                </ClientOnly>
              </div>
            </div>
          </div>

          <div class="collection-content col">
            <div class="page-main-content">
              <div class="row">
                <div class="col-sm-12">
                  <TopBanner :title="title" :description="description" />
                  <div class="collection-product-wrapper">
                    <div class="product-wrapper-grid">
                      <ProductsList :products="products" @addLastVisited="handleAddLastVisited" />
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
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import FilterBtn from '~/components/Category/FilterBtn.vue'
import ThemeCard from '~/components/Category/ThemeCard.vue'
import CategoryMenu from '~/components/Category/CategoryMenu.vue'
import ProductsList from '~/components/Category/ItemList.vue'
import TopBanner from '~/components/Category/TopBanner.vue'
import { Product, Category as CategoryType } from '~/types/categories/types'

@Component({
  components: {
    FilterBtn,
    ThemeCard,
    CategoryMenu,
    ProductsList,
    Breadcrumb,
    TopBanner
  }
})
export default class Category extends Vue {
  @Getter('categories/categories') categories!: CategoryType[]
  @Getter('categories/products') products!: Product[]
  @Getter('categories/lastVisited') lastVisited!: Product[]

  staticDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
    '        the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley\n' +
    '        of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n' +
    '        but also the leap into electronic typesetting, remaining essentially unchanged. It was\n' +
    '        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
    '        and more recently with desktop publishing software like Aldus PageMaker including versions of\n' +
    '        Lorem Ipsum.'

  staticTitle = 'Lorem Ipsum is simply'

  async loadCategories () {
    await this.$store.dispatch('categories/loadCategories')
  }

  get title (): string {
    const category = this.findCategoryItem()
    return category?.title ?? this.staticTitle
  }

  get description (): string {
    const category = this.findCategoryItem()
    return category?.description ?? this.staticDescription
  }

  findCategoryItem () {
    const path = this.$route.path
    const category = this.categories.find((c: CategoryType) => c.path === path)
    return category ?? null
  }

  created () {
    this.loadCategories()
    this.$store.dispatch('categories/loadLastVisited')
  }

  handleAddLastVisited (product: Product) {
    this.$store.dispatch('categories/addLastVisited', product)
  }
}
</script>
