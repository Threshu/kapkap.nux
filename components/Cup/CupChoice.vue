<template>
  <div v-if="confMenu == 1">
    <h3 class="productConfBoxTitle">
      Wybierz kubek
    </h3>

    <div v-if="cups.cups" class="cupsList" :class="{'desktop': !isMobile, 'mobile': isMobile}">
      <div v-if="!isMobile">
        <div
          v-for="(item, index) in cups.cups.slice(page*cupsIPP-cupsIPP, page*cupsIPP)"
          :key="index"
          class="cupItem"
          :class="{'selected': item.id == cupObject.cupId}"
          @click="setCup(item.id)"
        >
          <img v-if="item" :src="item.imageURL" :alt="item.name">
        </div>
      </div>

      <div v-if="isMobile">
        <div
          v-for="(item, index) in cups.cups"
          :key="index"
          class="cupItem"
          :class="{'selected': item.id == cupObject.cupId}"
          @click="setCup(item.id)"
        >
          <img v-if="item" :src="item.imageURL" :alt="item.name">
        </div>
      </div>
    </div>

    <div v-if="!isMobile && cups.cups" class="paginationBox">
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
          v-for="btnPage in Math.ceil(cups.cups.length/cupsIPP)"
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
          v-if="cups && cups.cups && cups.cups.length"
          class="nextAll"
          @click="goToPage(Math.ceil(cups.cups.length/cupsIPP), 'cups')"
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
        <div v-if="cupData" class="price-val">
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
      <NuxtLink
        to="/kubki"
        class="back"
      >
        Wstecz
      </NuxtLink>
      <button class="next" @click="openCupItems(2)">
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
export default class CupChoice extends Vue {

}
</script>
