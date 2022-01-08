<template>
  <div>
    <h3 class="productConfBoxTitle">
      Dodaj cytat
    </h3>

    <div v-if="quotes" class="quotesList" :class="{'desktop': !isMobile, 'mobile': isMobile}">
      <div v-if="!isMobile">
        <div
          v-for="(item, index) in quotes.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)"
          :key="index"
          class="quoteItem"
          :class="{'selected': item.quoteId === quoteId}"
          @click="setQuote(item.quoteId)"
        >
          <img :src="item.quoteImageUrl" :alt="`Cytat: ${item.quoteTitle}`" />
        </div>
      </div>
      <div v-if="isMobile">
        <div
          v-for="(item, index) in quotes"
          :key="index"
          class="quoteItem"
          :class="{'selected': item.quoteId === quoteId}"
          @click="setQuote(item.quoteId)"
        >
          <img :src="item.quoteImageUrl" :alt="`Cytat: ${item.quoteTitle}`" />
        </div>
      </div>
    </div>

    <div v-if="!isMobile" class="paginationBox">
      <div class="pagination">
        <button
          class="prevAll"
          @click="goToPage(1)"
        >
          &lt;&lt;
        </button>

        <button
          class="prev"
          @click="goToPage(page - 1)"
        >
          &lt;
        </button>

        <button
          v-for="btnPage in Math.ceil(quotes.length / itemsPerPage)"
          :key="btnPage"
          class="page"
          :class="{'active': btnPage === page}"
          @click="goToPage(btnPage)"
        >
          {{ btnPage }}
        </button>

        <button
          class="next"
          @click="goToPage(page + 1)"
        >
          >
        </button>
        <button
          class="nextAll"
          @click="goToPage(Math.ceil(quotes.length / itemsPerPage))"
        >
          >>
        </button>
      </div>
    </div>

    <Summary />
  </div>
</template>

<script  lang="ts">
import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import Summary from '~/components/Cup/Summary.vue'
import { Quote } from '~/store/cup/state'

@Component({
  components: {
    Summary
  }
})
export default class QuoteChoice extends Vue {
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('cup/quotes') quotes!: Quote[]
  @Getter('cup/quoteId') quoteId!: string

  @Action('cup/setQuote') setQuote!: Function

  itemsPerPage: number = 9
  page: number = 1

  goToPage (page: number) {
    const maxPage = Math.ceil(this.quotes.length / this.itemsPerPage)

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }
}
</script>
