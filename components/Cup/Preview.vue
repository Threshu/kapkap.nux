<template>
  <div class="productViewBox">
    <button
      v-if="preview && preview.data"
      class="frontCup"
      :class="{'active': preview.data.frontImageUrl == activePreview}"
      @click="setPreview(preview.data.frontImageUrl)"
    >
      Przód kubka
    </button>
    <button
      v-if="preview && preview.data"
      :class="{'active': preview.data.backImageUrl == activePreview}"
      class="backCup"
      @click="setPreview(preview.data.backImageUrl)"
    >
      Tył kubka
    </button>

    <div class="productView">
      <div v-if="preview && preview.data" class="productPreview">
        <image-zoom
          class="desktop"
          :regular="activePreview"
          :zoom="activePreview"
          alt="Podgląd wygenerowanego obrazu kubka"
          hover-message="Najedź myszką, aby powiększyć obraz"
        />

        <img
          class="mobile"
          :src="activePreview"
        >
      </div>

      <div v-if="false" class="shareBox">
        <button class="share" />
      </div>

      <span class="cupInfo">
        Przedstawione zdjęcia mają jedynie charakter poglądowy. <br>
        Docelowy kubek może różnić się kolorostycznie.
      </span>
    </div>
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class Preview extends Vue {
  preview: any = {}
  activePreview: any = ''

  async productPreview () {
    this.preview = await this.$store.dispatch('preview/getProductPreview', {
      product: this.prepareProductObject()
    })
    this.setPreview(this.preview.data.frontImageUrl)
  }

  setPreview (imgUrl: string) {
    this.activePreview = imgUrl
  }
}
</script>
