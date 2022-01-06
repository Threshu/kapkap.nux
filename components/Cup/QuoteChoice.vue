<template>
  <div
    v-if="confMenu == 4"
  >
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
      <button
        v-if="!editMode"
        class="next"
        @click="buyNow()"
      >
        Kup Teraz
      </button>
      <button
        v-if="!editMode"
        class="next fl"
        @click="addToCart()"
      >
        Dodaj do koszyka
      </button>
      <button
        v-if="editMode"
        class="next"
        @click="saveCartItem()"
      >
        Zapisz
      </button>
      <button
        v-if="editMode"
        class="next fl"
        @click="backToCart()"
      >
        Wróć
      </button>
      <button class="reset" @click="reset()">
        Resetuj i zacznij od nowa
      </button>
    </div>
  </div>
</template>
