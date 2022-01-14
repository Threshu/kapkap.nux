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
          :class="{'selected': item.id === cupId}"
          @click="setCup(item.id)"
        >
          <img v-if="item" :src="item.imageURL" :alt="`Kubek: ${item.name}`" />
        </div>
      </div>

      <div v-if="isMobile">
        <div
          v-for="(item, index) in cups"
          :key="index"
          class="cupItem"
          :class="{'selected': item.id === cupId}"
          @click="setCup(item.id)"
        >
          <img v-if="item" :src="item.imageURL" :alt="`Kubek: ${item.name}`" />
        </div>
      </div>
    </div>

    <div v-if="!isMobile && cups" class="paginationBox">
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
          v-for="btnPage in Math.ceil(cups.length / itemsPerPage)"
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
          v-if="cups"
          class="nextAll"
          @click="goToPage(Math.ceil(cups.length / itemsPerPage))"
        >
          >>
        </button>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Action, Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
import { Cup } from '~/store/cup/state'

@Component
export default class CupChoice extends Vue {
  @Getter('cup/cups') cups!: Cup[]
  @Getter('cup/cupId') cupId!: string
  @Getter('app/isMobile') isMobile!: boolean

  @Action('cup/setCup') setCup!: Function

  @Mutation('app/setIsMobile') setIsMobile!: Function

  itemsPerPage: number = 4
  page: number = 1

  mounted () {
    this.checkIfMobile()
    console.log('mobi2', this.isMobile)
  }

  goToPage (page: number) {
    const maxPage = Math.ceil(this.cups.length / this.itemsPerPage)

    if (page > 0 && page <= maxPage) {
      this.page = page
    }
  }
  async checkIfMobile () {
    await this.setIsMobile(window.innerWidth <= 1350)
  }
}
</script>
