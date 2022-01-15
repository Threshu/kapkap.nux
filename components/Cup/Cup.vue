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
            <h2 v-if="title">
              {{ title }}
            </h2>
            <Preview />
            <EditArea
              @changeModal="changeModal"
              @changeEditModal="changeEditModal"
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

@Component({
  components: {
    EditArea, Preview, RelatedProducts
  }
})
export default class Cup extends Vue {
  @Prop(String) readonly productId!: string

  @Getter('cup/title') title!: string
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('cup/editMode') editMode!: boolean

  @Mutation('cup/prepareRandomProduct') prepareRandomProduct!: Function
  @Mutation('cup/resetWorkingObject') resetWorkingObject!: Function
  @Mutation('app/setIsMobile') setIsMobile!: Function

  @Action('cup/setQuantity') setQuantity!: Function
  @Action('cup/loadDogs') loadDogs!: any
  @Action('cup/loadCats') loadCats!: any
  @Action('cup/loadMen') loadMen!: any
  @Action('cup/loadWomen') loadWomen!: any
  @Action('cup/loadProduct') loadProduct!: Function
  @Action('preview/getProductPreview') getProductPreview!: Function

  showModal = false
  showEditModal = false

  // old
  showConf = true

  async mounted () {
    await Promise.allSettled([
      this.loadDogs(),
      this.loadCats(),
      this.loadMen(),
      this.loadWomen(),
      this.loadProduct({ id: this.productId })
    ])

    this.checkIfMobile()
    window.addEventListener('resize', this.checkIfMobile)

    if (Number.isInteger(this.$store.state.basket.edit)) {
      this.setupEdit()
    } else {
      this.resetWorkingObject()
      this.prepareRandomProduct()
      this.setQuantity(1)
    }

    this.getProductPreview()
  }

  setupEdit () {
    const editObj = JSON.parse(localStorage.cup)
    if (editObj[this.$store.state.basket.edit]) {
      this.editMode = true
      // this.cupObject = editObj[this.$store.state.basket.edit]
    }
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
}
</script>
