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
import { Component, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import Picture from '@/components/Common/Picture.vue'
import CupChoice from '~/components/Cup/CupChoice.vue'
import BackgroundChoice from '~/components/Cup/BackgroundChoice.vue'
import ItemsChoice from '~/components/Cup/ItemsChoice.vue'
import QuoteChoice from '~/components/Cup/QuoteChoice.vue'

@Component({
  components: {
    Picture, CupChoice, BackgroundChoice, ItemsChoice, QuoteChoice
  }
})
export default class EditArea extends Vue {
  confMenu = 1

  removeItem (itemId: any, confirmRemove: Boolean = false) {
    if (confirmRemove) {
      this.cupObject.items.splice(itemId, 1)
      this.removeItemId = null
      // this.productPreview()
    } else {
      this.removeItemId = itemId
    }
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
