<template>
  <div id="productConfBox" class="productConfBox">
    <div class="confMenu">
      <div :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`" @click="openCupItems(1)" />
      <div :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`" @click="openCupItems(2)" />
      <div :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`" @click="openCupItems(3)" />
      <div :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`" @click="openCupItems(4)" />
    </div>

    <CupChoice
      v-if="confMenu === 1"
    />
    <BackgroundChoice
      v-if="confMenu === 2"
    />
    <ItemsChoice
      v-if="confMenu === 3"
    />
    <QuoteChoice
      v-if="confMenu === 4"
    />
  </div>
</template>

<script  lang="ts">
import { Action, Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import CupChoice from '~/components/Cup/CupChoice.vue'
import BackgroundChoice from '~/components/Cup/BackgroundChoice.vue'
import ItemsChoice from '~/components/Cup/ItemsChoice.vue'
import QuoteChoice from '~/components/Cup/QuoteChoice.vue'
import { Cats, Dogs, Men, Pet, Women } from '~/store/cup/state'

@Component({
  components: {
    CupChoice, BackgroundChoice, ItemsChoice, QuoteChoice
  }
})
export default class EditArea extends Vue {
  @Getter('cup/men') men!: Men
  @Getter('cup/women') women!: Women
  @Getter('cup/cats') cats!: Cats
  @Getter('cup/dogs') dogs!: Dogs

  @Mutation('cup/addItem') addItem!: Function

  @Action('preview/getProductPreview') getProductPreview!: Function

  confMenu = 1

  mounted () {
    this.setStartObjects()
    this.getProductPreview()
  }

  randomIntFromInterval (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  setStartObjects () {
    const count = this.randomIntFromInterval(2, 4)
    let i = 0; let randBody; let randHair; let typeRand
    let randPet
    let randVariant
    let pet: Pet[]

    while (i < count) {
      typeRand = this.randomIntFromInterval(1, 4)
      switch (typeRand) {
        case 1:
          if (this.men) {
            randBody = this.randomIntFromInterval(0, this.men.bodies.length - 1)
            randHair = this.randomIntFromInterval(0, this.men.hairstyles.black.all.length - 1)
            this.addItem({
              type: 'man',
              data: {
                bodyId: this.men.bodies[randBody].bodyId,
                bodyImageUrl: this.men.bodies[randBody].bodyImageUrl,
                hairColor: 'black',
                hairstyleId: this.men.hairstyles.black.all[randHair].hairstyleId
              }
            })
          }
          break
        case 2:
          if (this.women) {
            randBody = this.randomIntFromInterval(0, this.women.bodies.length - 1)
            randHair = this.randomIntFromInterval(0, this.women.hairstyles.black.bun.length - 1)
            this.addItem({
              type: 'woman',
              bodyId: this.women.bodies[randBody].bodyId,
              bodyImageUrl: this.women.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: this.women.hairstyles.black.bun[randHair].hairstyleId
            })
          }
          break
        case 3:
          randPet = this.randomIntFromInterval(0, Object.values(this.dogs.pets).length - 1)
          pet = this.dogs.pets[randPet]
          randVariant = this.randomIntFromInterval(0, pet.length - 1)
          this.addItem({
            type: 'dog',
            id: pet[0].id,
            variantId: pet[randVariant].variantId
          })
          break
        case 4:
          randPet = this.randomIntFromInterval(0, Object.values(this.cats.pets).length - 1)
          pet = this.dogs.pets[randPet]
          randVariant = this.randomIntFromInterval(0, pet.length - 1)
          this.addItem({
            type: 'cat',
            id: pet[0].id,
            variantId: pet[randVariant].variantId
          })
          break
      }

      i++
    }
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

  openCupItems (id: number) {
    this.confMenu = id
    this.page = 1
  }
}
</script>
