<template>
  <div>
    <div id="productConfBox" class="productConfBox">
      <div class="confMenu">
        <div
          :class="`confMenu1 ${confMenu === tab.items ? 'active' : ''}`"
          @click="changeConfMenu(1)"
        />
        <div
          :class="`confMenu2 ${confMenu === tab.bgs ? 'active' : ''}`"
          @click="changeConfMenu(2)"
        />
        <div
          :class="`confMenu3 ${confMenu === tab.cups ? 'active' : ''}`"
          @click="changeConfMenu(3)"
        />
        <div
          :class="`confMenu4 ${confMenu === tab.quotes ? 'active' : ''}`"
          @click="changeConfMenu(4)"
        />
      </div>

      <div>
        <CupChoice
          v-show="confMenu === tab.cups"
        />
        <BackgroundChoice
          v-if="confMenu === tab.bgs"
        />
        <ItemsChoice
          v-if="confMenu === tab.items"
          :edit-mode="editMode"
          @changeModal="changeModal"
          @changeEditModal="changeEditModal"
        />
        <QuoteChoice
          v-if="confMenu === tab.quotes"
        />
      </div>
      <Summary
        :conf-menu="confMenu"
        :edit-mode="editMode"
        :cart-item-id="cartItemId"
        @changeEditor="changeConfMenu"
      />
    </div>
    <div
      v-if="showModal || showEditModal"
      class="overflow"
    />
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Mutation, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import CupChoice from '~/components/Cup/CupChoice.vue'
import BackgroundChoice from '~/components/Cup/BackgroundChoice.vue'
import ItemsChoice from '~/components/Cup/ItemsChoice.vue'
import QuoteChoice from '~/components/Cup/QuoteChoice.vue'
import Summary from '~/components/Cup/Summary.vue'
import { Side } from '~/store/preview/state'
import { Tabs } from '~/store/cup/state'

@Component({
  components: {
    CupChoice, BackgroundChoice, ItemsChoice, QuoteChoice, Summary
  }
})

export default class EditArea extends Vue {
  @Prop(Boolean) readonly editMode!: boolean
  @Prop(String) readonly cartItemId!: string
  @Prop(Number) readonly menu!: number
  @Mutation('preview/setActivePreview') setActivePreview!: Function
  confMenu = Tabs.items
  showModal = false
  showEditModal = false
  tab = Tabs
  
  created () {
    this.confMenu = this.menu
  }

  changeModal (value: boolean) {
    this.showModal = value
  }

  changeEditModal (value: boolean) {
    this.showEditModal = value
  }

  changeConfMenu (id: number) {
    this.confMenu = id
    if (id === Tabs.quotes) {
      this.setActivePreview(Side.Back)
    } else {
      this.setActivePreview(Side.Front)
    }
  }
}
</script>
