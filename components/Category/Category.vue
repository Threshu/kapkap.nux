<template>
  <div>
    <Breadcrumb title="Kubki" />
    <section class="section-b-space ratio_asos">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div>
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
                        <ProductsList @addLastVisited="handleAddLastVisited" />
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
import { Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import FilterBtn from '~/components/Category/FilterBtn.vue'
import ThemeCard from '~/components/Category/ThemeCard.vue'
import CategoryMenu from '~/components/Category/CategoryMenu.vue'
import ProductsList from '~/components/Category/ItemList.vue'
import TopBanner from '~/components/Category/TopBanner.vue'
import { Category as CategoryType } from '~/types/store/categories/types'
import { LastVisited, Product } from '~/types/store/products/types'

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
  @Getter('products/lastVisited') lastVisited!: Product[]
  @Getter('products/products') products!: Product[]
  @Mutation('products/addLastVisited') addLastVisited!: Function

  staticDescription = 'Stwórz własny kubek w parę minut. Dodawaj dowolną liczbę osób dodając własną fryzurę\n' +
    '        oraz rysunek postaci, wybierając wśród wielu szablonów kobiet i mężczyzn.\n' +
    '        Na kubku możesz umieścić psa dowolnej rasy z już gotowych rysunków. Nic nie musisz rysować samodzielnie.\n' +
    '        Jeżeli chcesz umieścić na kubku swojego kota, dwa lub więcej, możesz to zrobić w kolejnym kroku\n' +
    '        po wybraniu jednego z produktów.'

  staticTitle = 'Personalizowane kubki'

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

  handleAddLastVisited (item: LastVisited) {
    this.addLastVisited(item)
  }
}
</script>
