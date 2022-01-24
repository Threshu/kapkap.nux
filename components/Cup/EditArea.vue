<template>
  <div id="productConfBox" class="productConfBox">
    <div class="confMenu">
      <div
        :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`"
        @click="openCupItems(1)"
      />
      <div
        :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`"
        @click="openCupItems(2)"
      />
      <div
        :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`"
        @click="openCupItems(3)"
      />
      <div
        :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`"
        @click="openCupItems(4)"
      />
    </div>

    <div>
      <CupChoice
        v-show="confMenu === 1"
      />
      <BackgroundChoice
        v-if="confMenu === 2"
      />
      <ItemsChoice
        v-if="confMenu === 3"
        :edit-mode="editMode"
      />
      <QuoteChoice
        v-if="confMenu === 4"
      />
    </div>
    <Summary
      :conf-menu="confMenu"
      :edit-mode="editMode"
      :cart-item-id="cartItemId"
      @changeEditor="changeConfMenu"
    />
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import CupChoice from '~/components/Cup/CupChoice.vue'
import BackgroundChoice from '~/components/Cup/BackgroundChoice.vue'
import ItemsChoice from '~/components/Cup/ItemsChoice.vue'
import QuoteChoice from '~/components/Cup/QuoteChoice.vue'
import Summary from '~/components/Cup/Summary.vue'

@Component({
  components: {
    CupChoice, BackgroundChoice, ItemsChoice, QuoteChoice, Summary
  }
})

export default class EditArea extends Vue {
  @Prop(Boolean) readonly editMode!: boolean
  @Prop(String) readonly cartItemId!: string
  @Prop(Number) readonly menu!: number

  confMenu = 1

  mounted () {
    this.confMenu = this.menu
  }

  openCupItems (id: number) {
    this.confMenu = id
  }

  changeConfMenu (id: number) {
    this.confMenu = id
  }
}
</script>
