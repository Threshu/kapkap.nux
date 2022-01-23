<template>
  <section class="categoryBox">
    <div class="collection-wrapper productBoxBg">
      <div class="container">
        <div class="row">
          <div
            v-if="(showConf || !isMobile) && isLoaded"
            :ref="{'productModalBox': isMobile}"
            :class="{'productModalBox': isMobile}"
            class="productBox"
          >
            <Preview />
            <EditArea
              @changeModal="changeModal"
              @changeEditModal="changeEditModal"
              @closeConfigurator="closeConfigurator"
              :editMode="editMode"
              :product-id="productId"
            />
          </div>
        </div>
      </div>
    </div>

    <RelatedProducts v-if="false" />

    <div
      v-if="showModal || showEditModal"
      class="overflow"
    />
  </section>
</template>

<script  lang="ts">
import { Component, Action, Vue, Prop, Mutation, Getter } from 'nuxt-property-decorator'
import EditArea from '~/components/Cup/EditArea.vue'
import Preview from '~/components/Cup/Preview.vue'
import RelatedProducts from '~/components/Cup/RelatedProducts.vue'
import { BasketContainer } from '~/store/basket/state'

@Component({
  components: {
    EditArea, Preview, RelatedProducts
  }
})
export default class Cup extends Vue {
  @Prop(String) readonly productId!: string
  @Prop(Boolean) readonly editMode!: boolean

  @Getter('cup/title') title!: string
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('basket/basket') basket!: BasketContainer

  @Mutation('cup/prepareRandomProduct') prepareRandomProduct!: Function
  @Mutation('cup/resetWorkingObject') resetWorkingObject!: Function
  @Mutation('app/setIsMobile') setIsMobile!: Function
  @Mutation('cup/setEditMode') setEditMode!: Function
  @Mutation('cup/editWorkingObject') editWorkingObject!: Function

  @Action('cup/setQuantity') setQuantity!: Function
  @Action('cup/loadDogs') loadDogs!: any
  @Action('cup/loadCats') loadCats!: any
  @Action('cup/loadMen') loadMen!: any
  @Action('cup/loadWomen') loadWomen!: any
  @Action('cup/loadProduct') loadProduct!: Function
  @Action('preview/getProductPreview') getProductPreview!: Function
  @Action('basket/loadBasket') loadBasket!: Function

  showModal = false
  showEditModal = false

  // old
  showConf = true

  async mounted () {
    this.setEditMode(this.editMode)
    let productId
    if (this.editMode) {
      await this.loadBasket()
      let product = this.basket.products.find((product: any) => product.cartItemId === this.productId);

      console.log(product)

      this.editWorkingObject(product)
      productId = product.productId
      this.setQuantity(product.number)
    } else {
      productId = this.productId
      this.resetWorkingObject()
      this.prepareRandomProduct()
      this.setQuantity(1)
    }

    if (productId) {
      await Promise.allSettled([
        this.loadDogs(),
        this.loadCats(),
        this.loadMen(),
        this.loadWomen(),
        this.loadProduct(productId)
      ])
    }

    this.checkIfMobile()
    window.addEventListener('resize', this.checkIfMobile)

    this.getProductPreview()
  }

  checkIfMobile () {
    this.setIsMobile(window.innerWidth <= 1350)
  }

  changeModal (value: boolean) {
    this.showModal = value
  }

  changeEditModal (value: boolean) {
    this.showEditModal = value
  }

  closeConfigurator () {
    this.showConf = false
  }
}
</script>
