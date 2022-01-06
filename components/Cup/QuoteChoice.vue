<template>
  <div>
    <h3 class="productConfBoxTitle">
      Dodaj cytat
    </h3>

    <div v-if="cups" class="quotesList" :class="{'desktop': !isMobile, 'mobile': isMobile}">
      <div v-if="!isMobile">
        <div
          v-for="(item, index) in cups.quotes.slice(page*quotesIPP-quotesIPP, page*quotesIPP)"
          :key="index"
          class="quoteItem"
          :class="{'selected': item.quoteId == cupObject.quoteId}"
          @click="setQuote(item.quoteId)"
        >
          <img :src="item.quoteImageUrl">
        </div>
      </div>
      <div v-if="isMobile">
        <div
          v-for="(item, index) in cups.quotes"
          :key="index"
          class="quoteItem"
          :class="{'selected': item.quoteId == cupObject.quoteId}"
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
          v-for="btnPage in Math.ceil(cups.quotes.length/quotesIPP)"
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
          @click="goToPage(Math.ceil(cups.quotes.length/quotesIPP), 'quotes')"
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
export default class QuoteChoice extends Vue {
  @Mutation('cup/setQuote') setQuote!: Function

  quotesIPP: number = 9 // items per page - quotes
  page: number = 1

  goToPage (page: number) {
    const maxPage = Math.ceil(this.cups.quotes.length / this.quotesIPP)

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }
}
</script>
