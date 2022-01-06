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
import { Component, Getter, Action, Vue, Prop } from 'nuxt-property-decorator'
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

  @Action('cup/getDogs') getDogs!: any
  @Action('cup/getCats') getCats!: any
  @Action('cup/getMen') getMen!: any
  @Action('cup/getWomen') getWomen!: any
  @Action('cup/getProduct') getProduct!: Function

  showModal = false
  showEditModal = false

  // old
  cups: any = []
  cupData: any = {}
  showConf = true
  removeBox = false
  removeItemId = null
  news = false
  isMobile = false
  editMode = false
  objectData: any = []

  tempObject: any = {
    type: '',
    edit: '',
    bodyId: '',
    variantId: '',
    bodyImageUrl: '',
    hairColor: 'black',
    hairstyleId: ''
  }

  cupObject: any = {}

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
      this.increaseQuantity()
    }

    this.setStartObjects()
  }

  setupEdit () {
    const editObj = JSON.parse(localStorage.cup)
    if (editObj[this.$store.state.basket.edit]) {
      this.editMode = true
      this.cupObject = editObj[this.$store.state.basket.edit]
    }
  }

  randomIntFromInterval (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  pickRandomProperty (obj: Object) {
    let result
    let count = 0
    for (const prop in obj) {
      if (Math.random() < 1 / ++count) {
        result = prop
      }
    }

    return result
  }

  setStartObjects () {
    const count = this.randomIntFromInterval(2, 4)
    let i = 0; let randBody; let randHair; let randProp; let typeRand

    while (i < count) {
      typeRand = this.randomIntFromInterval(1, 4)
      switch (typeRand) {
        case 1:
          if (this.men) {
            randBody = this.randomIntFromInterval(0, this.men.bodies.length - 1)
            randHair = this.randomIntFromInterval(0, this.men.hairstyles.black.all.length - 1)
            this.cupObject.items.push({
              type: 'man',
              bodyId: this.men.bodies[randBody].bodyId,
              bodyImageUrl: this.men.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: this.men.hairstyles.black.all[randHair].hairstyleId
            })
          }
          break
        case 2:
          if (this.women) {
            randBody = this.randomIntFromInterval(0, this.women.bodies.length - 1)
            randHair = this.randomIntFromInterval(0, this.women.hairstyles.black.bun.length - 1)
            this.cupObject.items.push({
              type: 'woman',
              bodyId: this.women.bodies[randBody].bodyId,
              bodyImageUrl: this.women.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: this.women.hairstyles.black.bun[randHair].hairstyleId
            })
          }
          break
        case 3:
          randProp = this.pickRandomProperty(this.dogs)
          if (randProp) {
            this.cupObject.items.push({
              type: 'dog',
              id: this.dogs[randProp][0].id,
              variantId: this.dogs[randProp][0].variantId,
              bodyImageUrl: this.dogs[randProp][0].imageUrl
            })
          }
          break
        case 4:
          randProp = this.pickRandomProperty(this.cats)
          if (randProp) {
            this.cupObject.items.push({
              type: 'cat',
              id: this.cats[randProp][0].id,
              variantId: this.cats[randProp][0].variantId,
              bodyImageUrl: this.cats[randProp][0].imageUrl
            })
          }
          break
      }

      i++
    }

    // this.productPreview()
  }

  checkIfMobile () {
    this.isMobile = window.innerWidth <= 1350
  }
}
</script>
