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
              :edit-mode="editMode"
              :cart-item-id="cartItemId"
              :menu="defaultMenu"
              @changeModal="changeModal"
              @changeEditModal="changeEditModal"
              @closeConfigurator="closeConfigurator"
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
  @Prop(String) readonly cartItemId!: string
  @Prop(Boolean) readonly editMode!: boolean

  @Getter('cup/title') title!: string
  @Getter('cup/productId') productIdFromBasket!: string
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
  @Action('cup/loadProductFromCart') loadProductFromCart!: Function

  showModal = false
  showEditModal = false
  defaultMenu = 1

  // old
  showConf = true

  async mounted () {
    this.setEditMode(this.editMode)
    let productId
    if (this.editMode) {
      this.defaultMenu = 3
      productId = await this.loadProductFromCart(this.cartItemId)
    } else {
      productId = this.productId
      this.resetWorkingObject()
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
      if (!this.editMode) {
        this.prepareRandomProduct()
      }
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
