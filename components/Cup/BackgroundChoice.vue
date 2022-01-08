<template>
  <div>
    <h3 class="productConfBoxTitle">
      Wybierz tło
    </h3>

    <div v-if="backgrounds" class="bgList" :class="{'desktop': !isMobile, 'mobile': isMobile}">
      <div v-if="!isMobile">
        <div
          v-for="(item, index) in backgrounds.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)"
          :key="index"
          class="bgItem"
          :class="{'selected': item.backgroundId === backgroundId}"
          @click="setBackground(item.backgroundId)"
        >
          <img :src="item.backgroundURL" :alt="`Tło: ${item.backgroundTitle}`" />
        </div>
      </div>

      <div v-if="isMobile">
        <div
          v-for="(item, index) in backgrounds"
          :key="index"
          class="bgItem"
          :class="{'selected': item.backgroundId === backgroundId}"
          @click="setBackground(item.backgroundId)"
        >
          <img :src="item.backgroundURL" :alt="`Tło: ${item.backgroundTitle}`" />
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
          v-for="btnPage in Math.ceil(backgrounds.length / itemsPerPage)"
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
          @click="goToPage(Math.ceil(backgrounds.length / itemsPerPage))"
        >
          >>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Action, Component, Getter, Vue } from 'nuxt-property-decorator'
import { Background } from '~/store/cup/state'

@Component
export default class BackgroundChoice extends Vue {
  @Getter('cup/backgrounds') backgrounds!: Background[]
  @Getter('cup/backgroundId') backgroundId!: string
  @Getter('app/isMobile') isMobile!: boolean

  @Action('cup/setBackground') setBackground!: Function

  itemsPerPage: number = 9
  page: number = 1

  goToPage (page: number) {
    const maxPage = Math.ceil(this.backgrounds.length / this.itemsPerPage)

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }
}
</script>
