<template>
  <div class="productViewBox">
    <button
      class="frontCup"
      :class="{'active': frontImage === activePreview}"
      @click="setActivePreview('front')"
    >
      Przód kubka
    </button>
    <button
      :class="{'active': backImage === activePreview}"
      class="backCup"
      @click="setActivePreview('back')"
    >
      Tył kubka
    </button>

    <div class="productView">
      <div class="productPreview">
        <SmallLoader v-if="loader" />
        <image-zoom
          v-if="activePreview"
          class="desktop"
          :class="{'loading': loader}"
          :regular="activePreview"
          alt="Podgląd wygenerowanego obrazu kubka"
          hover-message="Najedź myszką, aby powiększyć obraz"
        />

        <img
          v-if="activePreview"
          class="mobile"
          :class="{'loading': loader}"
          :src="activePreview"
          @load="onImageLoad"
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
import { Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import SmallLoader from '~/components/Common/SmallLoader.vue'
@Component({
  components: { SmallLoader }
})
export default class Preview extends Vue {
  @Getter('preview/frontImage') frontImage!: string
  @Getter('preview/backImage') backImage!: string
  @Getter('preview/activePreview') activePreview!: string
  @Getter('preview/loaderVisible') loader!: boolean

  @Mutation('preview/setActivePreview') setActivePreview!: Function
  @Mutation('preview/setLoader') setLoader!: Function

  onImageLoad () {
    console.log(this.loader)
    this.setLoader(false)
  }
}
</script>
