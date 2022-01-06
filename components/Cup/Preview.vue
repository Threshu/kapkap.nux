<template>
  <div class="productViewBox">
    <button
      v-if="frontImage"
      class="frontCup"
      :class="{'active': frontImage === activePreview}"
      @click="setPreview(frontImage)"
    >
      Przód kubka
    </button>
    <button
      v-if="backImage"
      :class="{'active': backImage === activePreview}"
      class="backCup"
      @click="setPreview(backImage)"
    >
      Tył kubka
    </button>

    <div class="productView">
      <div v-if="frontImage || backImage" class="productPreview">
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
import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'

@Component({
  components: {
  }
})
export default class Preview extends Vue {
  @Getter('preview/frontImage') frontImage!: string
  @Getter('preview/backImage') backImage!: string
  @Getter('preview/activePreview') activePreview!: string
}
</script>
