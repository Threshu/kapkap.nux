<template>
  <div>
    <h3 class="productConfBoxTitle">
      Wybierz kubek
    </h3>

    <div v-if="cups" class="cupsList" :class="{'desktop': !isMobile, 'mobile': isMobile}">
      <div v-if="!isMobile">
        <div
          v-for="(item, index) in cups.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)"
          :key="index"
          class="cupItem"
          :class="{'selected': item.id === cupObject.cupId}"
          @click="setCup(item.id)"
        >
          <img v-if="item" :src="item.imageURL" :alt="item.name">
        </div>
      </div>

      <div v-if="isMobile">
        <div
          v-for="(item, index) in cups"
          :key="index"
          class="cupItem"
          :class="{'selected': item.id === cupObject.cupId}"
          @click="setCup(item.id)"
        >
          <img v-if="item" :src="item.imageURL" :alt="item.name">
        </div>
      </div>
    </div>

    <div v-if="!isMobile && cups" class="paginationBox">
      <div class="pagination">
        <button
          class="prevAll"
          @click="goToPage(1, 'cups')"
        >
          &lt;&lt;
        </button>
        <button
          class="prev"
          @click="goToPage(page - 1, 'cups')"
        >
          &lt;
        </button>

        <button
          v-for="btnPage in Math.ceil(cups.length/itemsPerPage)"
          :key="btnPage"
          class="page"
          :class="{'active': btnPage === page}"
          @click="goToPage(btnPage, 'cups')"
        >
          {{ btnPage }}
        </button>

        <button
          class="next"
          @click="goToPage(page + 1, 'cups')"
        >
          >
        </button>
        <button
          v-if="cups"
          class="nextAll"
          @click="goToPage(Math.ceil(cups.length/itemsPerPage), 'cups')"
        >
          >>
        </button>
      </div>
    </div>

    <Summary />
  </div>
</template>

<script  lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import Summary from '~/components/Cup/Summary.vue'
import { Cup } from '~/store/cup/state'

@Component({
  components: {
    Summary
  }
})
export default class CupChoice extends Vue {
  @Getter('cup/cups') cups!: Cup[]
  @Getter('app/isMobile') isMobile!: boolean

  itemsPerPage: number = 4
  page: number = 1

  goToPage (page: number) {
    const maxPage = Math.ceil(this.cups.length / this.itemsPerPage)

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }
}
</script>
