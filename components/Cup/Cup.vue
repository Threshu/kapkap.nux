<template>
  <section class="categoryBox">
    <div v-if="showModal || showEditModal" class="overflow" />

    <div class="collection-wrapper productBoxBg">
      <div class="container">
        <div class="row">
          <div
            v-if="(showConf || !isMobile) && isLoaded"
            :ref="{'productModalBox': isMobile}"
            :class="{'productModalBox': isMobile}"
            class="productBox"
          >
            <h2 v-if="cupData">
              {{ cupData.title }}
            </h2>
            <Preview />
            <EditArea />
          </div>
        </div>
      </div>
    </div>

    <RelatedProducts v-if="false" />
  </section>
</template>

<script  lang="ts">
import { Component, Getter, Action, Vue, Prop, Mutation } from 'nuxt-property-decorator'
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

  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('app/isMobile') isMobile!: boolean

  @Mutation('cup/prepareRandomProduct') prepareRandomProduct!: Function
  @Mutation('app/setIsMobile') setIsMobile!: Function

  @Action('cup/getDogs') getDogs!: any
  @Action('cup/getCats') getCats!: any
  @Action('cup/getMen') getMen!: any
  @Action('cup/getWomen') getWomen!: any
  @Action('cup/getProduct') getProduct!: Function
  @Action('preview/getProductPreview') getProductPreview!: Function

  showModal = false
  showEditModal = false

  // old
  showConf = true
  editMode = false

  async mounted () {
    await Promise.allSettled([
      this.getDogs(),
      this.getCats(),
      this.getMen(),
      this.getWomen(),
      this.getProduct({ id: this.$route.params.alias })
    ])

    this.checkIfMobile()
    window.addEventListener('resize', this.checkIfMobile)

    if (Number.isInteger(this.$store.state.basket.edit)) {
      this.setupEdit()
    } else {
      this.prepareRandomProduct()
      // this.increaseQuantity()
    }

    this.getProductPreview()
  }

  setupEdit () {
    const editObj = JSON.parse(localStorage.cup)
    if (editObj[this.$store.state.basket.edit]) {
      this.editMode = true
      this.cupObject = editObj[this.$store.state.basket.edit]
    }
  }

  checkIfMobile () {
    this.setIsMobile(window.innerWidth <= 1350)
  }
}
</script>
