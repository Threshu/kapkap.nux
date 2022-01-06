<template>
  <div
    v-if="confMenu == 2"
  >
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
          @click="setBg(item.backgroundId)"
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
          @click="setBg(item.backgroundId)"
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

    <div class="summary">
      <div class="qty-box">
        <span class="qty-label">Sztuk:</span>
        <div class="qty-flex">
          <button class="qty-minus" @click="decreaseQuantity">
            -
          </button>
          <input
            v-model="cupObject.count"
            type="number"
            class="qty-input"
            @keyup="recalculateTotal"
          >
          <button class="qty-plus" @click="increaseQuantity">
            +
          </button>
        </div>
      </div>

      <span class="price-sep">x</span>

      <div class="price-box">
        <span class="price-label">Cena za sztukę:</span>
        <div class="price-val">
          {{ cupData.price }} zł
        </div>
      </div>

      <span class="sum-sep">=</span>

      <div class="sum-box">
        <span class="sum-label">Suma:</span>
        <div class="sum-val">
          {{ cupObject.total }} zł
        </div>
      </div>
    </div>

    <div class="confButtons">
      <button class="back" @click="openCupItems(1)">
        Wstecz
      </button>
      <button class="next" @click="openCupItems(3)">
        Dalej
      </button>
    </div>
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class BackgroundChoice extends Vue {

}
</script>
