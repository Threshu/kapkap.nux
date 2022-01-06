<template>
  <div id="productConfBox" class="productConfBox">
    <div class="confMenu">
      <div :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`" @click="openCupItems(1)" />
      <div :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`" @click="openCupItems(2)" />
      <div :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`" @click="openCupItems(3)" />
      <div :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`" @click="openCupItems(4)" />
    </div>

    <CupChoice />
    <BackgroundChoice />
    <ItemsChoice />
    <QuoteChoice />
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import Picture from '@/components/Common/Picture.vue'

@Component({
  components: {
    Picture
  }
})
export default class EditArea extends Vue {

}
</script>
