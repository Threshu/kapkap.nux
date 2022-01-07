<template>
  <div>
    <h3 class="productConfBoxTitle">
      Dodaj cytat
    </h3>

    <div v-if="cups" class="quotesList" :class="{'desktop': !isMobile, 'mobile': isMobile}">
      <div v-if="!isMobile">
        <div
          v-for="(item, index) in cups.quotes.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)"
          :key="index"
          class="quoteItem"
          :class="{'selected': item.quoteId === cupObject.quoteId}"
          @click="setQuote(item.quoteId)"
        >
          <img :src="item.quoteImageUrl">
        </div>
      </div>
      <div v-if="isMobile">
        <div
          v-for="(item, index) in quotes"
          :key="index"
          class="quoteItem"
          :class="{'selected': item.quoteId === cupObject.quoteId}"
          @click="setQuote(item.quoteId)"
        >
          <img :src="item.quoteImageUrl">
        </div>
      </div>
    </div>

    <div v-if="!isMobile" class="paginationBox">
      <div class="pagination">
        <button
          class="prevAll"
          @click="goToPage(1, 'quotes')"
        >
          &lt;&lt;
        </button>

        <button
          class="prev"
          @click="goToPage(page - 1, 'quotes')"
        >
          &lt;
        </button>

        <button
          v-for="btnPage in Math.ceil(quotes.length / itemsPerPage)"
          :key="btnPage"
          class="page"
          :class="{'active': btnPage === page}"
          @click="goToPage(btnPage, 'quotes')"
        >
          {{ btnPage }}
        </button>

        <button
          class="next"
          @click="goToPage(page + 1, 'quotes')"
        >
          >
        </button>
        <button
          class="nextAll"
          @click="goToPage(Math.ceil(quotes.length / itemsPerPage), 'quotes')"
        >
          >>
        </button>
      </div>
    </div>

    <Summary />
  </div>
</template>

<script  lang="ts">
import { Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
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

  @Mutation('cup/setQuote') setQuote!: Function

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
