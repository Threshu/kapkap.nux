<template>
  <div>
    <h3 class="productConfBoxTitle">
      Wybierz tło
    </h3>

    <div v-if="cups" class="bgList" :class="{'desktop': !isMobile, 'mobile': isMobile}">
      <div v-if="!isMobile">
        <div
          v-for="(item, index) in cups.backgrounds.slice(page*bgsIPP-bgsIPP, page*bgsIPP)"
          :key="index"
          class="bgItem"
          :class="{'selected': item.backgroundId == cupObject.bgId}"
          @click="setBackground(item.backgroundId)"
        >
          <img :src="item.backgroundURL">
        </div>
      </div>

      <div v-if="isMobile">
        <div
          v-for="(item, index) in cups.backgrounds"
          :key="index"
          class="bgItem"
          :class="{'selected': item.backgroundId == cupObject.bgId}"
          @click="setBackground(item.backgroundId)"
        >
          <img :src="item.backgroundURL">
        </div>
      </div>
    </div>

    <div v-if="!isMobile" class="paginationBox">
      <div class="pagination">
        <button
          class="prevAll"
          @click="goToPage(1, 'bgs')"
        >
          &lt;&lt;
        </button>
        <button
          class="prev"
          @click="goToPage(page - 1, 'bgs')"
        >
          &lt;
        </button>

        <button
          v-for="btnPage in Math.ceil(cups.backgrounds.length/bgsIPP)"
          :key="btnPage"
          class="page"
          :class="{'active': btnPage === page}"
          @click="goToPage(btnPage, 'bgs')"
        >
          {{ btnPage }}
        </button>

        <button
          class="next"
          @click="goToPage(page + 1, 'bgs')"
        >
          >
        </button>
        <button
          class="nextAll"
          @click="goToPage(Math.ceil(cups.backgrounds.length/bgsIPP), 'bgs')"
        >
          >>
        </button>
      </div>
    </div>

    <Summary />
  </div>
</template>

<script  lang="ts">
import { Component, Mutation, Vue } from 'nuxt-property-decorator'
import Summary from '~/components/Cup/Summary.vue'

@Component({
  components: {
    Summary
  }
})
export default class BackgroundChoice extends Vue {
  @Mutation('cup/setBackground') setBackground!: Function

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
