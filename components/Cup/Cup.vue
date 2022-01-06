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

    <RelatedProducts />
  </section>
</template>

<script  lang="ts">
import { Component, Getter, Mutation, Action, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import Picture from '@/components/Common/Picture.vue'
import EditArea from '~/components/Cup/EditArea.vue'
import Preview from '~/components/Cup/Preview.vue'
import RelatedProducts from '~/components/Cup/RelatedProducts.vue'

@Component({
  components: {
    Picture, EditArea, Preview, RelatedProducts
  }
})
export default class Cup extends Vue {
  // old
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('cup/dogs') dogs!: any
  @Getter('cup/cats') cats!: any
  @Getter('cup/men') men!: any
  @Getter('cup/women') women!: any
  @Getter('basket/editb') edit!: any

  // new
  @Getter('preview/previewId') previewId!: string
  @Getter('cup/productObject') productObject!: Function

  // new
  @Mutation('cup/setProduct') setProduct!: any
  @Mutation('basket/setBasket') setBasket!: any
  @Mutation('basket/editBasket') editBasket!: any

  // old
  @Action('cup/getDogs') getDogs!: any
  @Action('cup/getCats') getCats!: any
  @Action('cup/getMen') getMen!: any
  @Action('cup/getWomen') getWomen!: any
  @Action('cup/getCupDetails') getCupDetails!: any

  // new
  @Action('cup/getProduct') getProduct!: Function

  cups: any = []
  cupData: any = {}
  showModal = false
  showConf = true
  showEditModal = false
  removeBox = false
  removeItemId = null
  news = false
  isMobile = false
  editMode = false
  page: number = 1
  quotesIPP: number = 9 // items per page - quotes
  bgsIPP: number = 9 // items per page - bgs
  cupsIPP: number = 4 // items per page - cups
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

  sliderSettings = {
    arrows: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    touchThreshold: 5,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    responsive: [{
      breakpoint: 4000,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 1500,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 1024,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

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

  pushObject (type: any, edit: any) {
    this.tempObject.type = type
    if (typeof edit === 'number') {
      this.cupObject.items[edit] = this.tempObject
    } else {
      this.cupObject.items.push(this.tempObject)
    }
    // this.productPreview()
    this.resetTempObject()
    this.showEditModal = false
  }

  editCancel () {
    this.showEditModal = false
    this.resetTempObject()
    this.objectData = []
  }

  editItem (itemIndex: number) {
    this.tempObject = this.cupObject.items[itemIndex]
    this.showModal = false
    this.showEditModal = true
    this.tempObject = this.cupObject.items[itemIndex]
    if (typeof itemIndex === 'number') {
      this.tempObject.edit = itemIndex
    }

    switch (this.tempObject.type) {
      case 'cat':
        this.objectData = this.cats
        this.objectData.type = this.tempObject.type
        break
      case 'dog':
        this.objectData = this.dogs
        this.objectData.type = this.tempObject.type
        break
      case 'woman':
        this.objectData = this.women
        this.objectData.type = this.tempObject.type
        break
      case 'man':
        this.objectData = this.men
        this.objectData.type = this.tempObject.type
        break
    }
  }

  resetTempObject () {
    this.tempObject = {
      name: '',
      type: '',
      edit: '',
      bodyId: '',
      variantId: '',
      bodyImageUrl: '',
      hairColor: 'black',
      hairstyleId: ''
    }
  }

  newCupObject (data: Object, type: String) {
    this.objectData = data
    this.showModal = false
    this.objectData.type = type
    this.showEditModal = true
  }

  reset () {
    this.confMenu = 1
    this.cupObject = {
      id: this.cupData.id,
      cupId: this.cups.cups[0].id,
      bgId: this.cups.backgrounds[0].backgroundId,
      quoteId: '',
      items: []
    }
    this.resetTempObject()
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
