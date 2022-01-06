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
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('cupPreferences/dogs') dogs!: any
  @Getter('cupPreferences/cats') cats!: any
  @Getter('cupPreferences/men') men!: any
  @Getter('cupPreferences/women') women!: any
  @Getter('basket/editb') edit!: any
  @Getter('preview/previewId') previewId!: string
  @Getter('cup/productObject') productObject!: Function

  @Mutation('cupPreferences/setProduct') setProduct!: any
  @Mutation('basket/setBasket') setBasket!: any
  @Mutation('basket/editBasket') editBasket!: any

  @Action('cupPreferences/getDogs') getDogs!: any
  @Action('cupPreferences/getCats') getCats!: any
  @Action('cupPreferences/getMen') getMen!: any
  @Action('cupPreferences/getWomen') getWomen!: any
  @Action('cupPreferences/getCupDetails') getCupDetails!: any

  cups: any = []
  cupData: any = {}
  showModal = false
  confMenu = 1
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
    await Promise.allSettled([this.getDogs(), this.getCats(), this.getMen(), this.getWomen()])
    // await this.$store.dispatch('cupPreferences/getCupDetails', { id: this.$route.params.alias }).then(() => {
    //   this.cupData = this.$store.state.cupPreferences.product
    //   this.cups = this.cupData.items
    //   this.cupObject = {
    //     id: this.cupData?.id,
    //     title: this.cupData?.title,
    //     price: this.cupData?.price,
    //     bgId: this.cups?.backgrounds[0]?.backgroundId,
    //     cupId: this.cups?.cups[0]?.id,
    //     quoteId: '',
    //     count: 0,
    //     total: 0,
    //     items: []
    //   }
    //
    //   this.checkIfMobile()
    //   window.addEventListener('resize', this.checkIfMobile)
    //   if (Number.isInteger(this.$store.state.basket.edit)) {
    //     this.setupEdit()
    //   } else {
    //     this.increaseQuantity()
    //   }
    //
    //   this.setStartObjects()
    // })
  }

  setCup (id: string) {
    this.cupObject.cupId = id
    // this.productPreview()
  }

  setBg (id: string) {
    this.cupObject.bgId = id
    // this.productPreview()
  }

  setQuote (id: string) {
    this.cupObject.quoteId = id
    // this.productPreview()
  }

  setHairColor (color: string) {
    this.tempObject.hairColor = color
  }

  setFigure (bodyId: string, bodyImageUrl: string) {
    this.tempObject.bodyId = bodyId
    this.tempObject.bodyImageUrl = bodyImageUrl
  }

  setPet (variantId: any, id: any, bodyImageUrl: any) {
    this.tempObject.id = id
    this.tempObject.variantId = variantId
    this.tempObject.bodyImageUrl = bodyImageUrl
  }

  setHairStyle (hairstyleId: string) {
    this.tempObject.hairstyleId = hairstyleId
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

  removeItem (itemId: any, confirmRemove: Boolean = false) {
    if (confirmRemove) {
      this.cupObject.items.splice(itemId, 1)
      this.removeItemId = null
      // this.productPreview()
    } else {
      this.removeItemId = itemId
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

  moveArrayItemToNewIndex (arr: any, oldIndex: number, newIndex: number) {
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
    return arr
  }

  topItem (index: number) {
    this.moveArrayItemToNewIndex(this.cupObject.items, index, index - 1)
    // this.productPreview()
  }

  downItem (index: number) {
    this.moveArrayItemToNewIndex(this.cupObject.items, index, index + 1)
    // this.productPreview()
  }

  openCupItems (id: number) {
    this.confMenu = id
    this.page = 1
  }

  buyNow () {
  }

  async addToCart () {
    const basketObj = {
      product: this.productObject(),
      previewId: this.previewId,
      number: this.cupObject.count,
      token: localStorage.basketToken
    }

    const basket = await this.$store.dispatch('basket/setBasket', basketObj)
    if (basket) {
      localStorage.basketToken = basket.data.token
    }
  }

  formatPrice (value: number) {
    const val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  recalculateTotal () {
    this.cupObject.total = this.formatPrice(this.cupData.price * this.cupObject.count)
  }

  increaseQuantity () {
    this.cupObject.count++
    this.recalculateTotal()
  }

  decreaseQuantity () {
    this.cupObject.count--
    this.recalculateTotal()
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

  saveCartItem () {
    let tempStorage: any = []
    if (localStorage.cup) {
      tempStorage = JSON.parse(localStorage.cup)
    }
    tempStorage[this.$store.state.basket.edit] = this.cupObject
    this.setBasket(tempStorage)
    this.reset()
    this.editBasket(null)
    this.$router.push('/koszyk')
  }

  backToCart () {
    this.editBasket(null)
    this.reset()
    this.$router.push('/koszyk')
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

  goToPage (page: number, type: string) {
    let maxPage
    if (type === 'quotes') {
      maxPage = Math.ceil(this.cups.quotes.length / this.quotesIPP)
    } else if (type === 'cups') {
      maxPage = Math.ceil(this.cups.cups.length / this.cupsIPP)
    } else {
      maxPage = Math.ceil(this.cups.backgrounds.length / this.bgsIPP)
    }

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }
}
</script>

<style lang="sass">
</style>
