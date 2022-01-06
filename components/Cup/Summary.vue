<template>
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
</template>

<script  lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class Summary extends Vue {
  buyNow () {
  }

  async addToCart () {
    const basketObj = {
      product: this.productObject(),
      previewId: this.previewId,
      number: this.cupObject.count,
      token: localStorage.basketToken
    }

    const basket = await this.$store.dispatch('basket/setBasket', basketObj)
    if (basket) {
      localStorage.basketToken = basket.data.token
    }
  }

  formatPrice (value: number) {
    const val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  recalculateTotal () {
    this.cupObject.total = this.formatPrice(this.cupData.price * this.cupObject.count)
  }

  increaseQuantity () {
    this.cupObject.count++
    this.recalculateTotal()
  }

  decreaseQuantity () {
    this.cupObject.count--
    this.recalculateTotal()
  }

  saveCartItem () {
    let tempStorage: any = []
    if (localStorage.cup) {
      tempStorage = JSON.parse(localStorage.cup)
    }
    tempStorage[this.$store.state.basket.edit] = this.cupObject
    this.setBasket(tempStorage)
    this.reset()
    this.editBasket(null)
    this.$router.push('/koszyk')
  }

  backToCart () {
    this.editBasket(null)
    this.reset()
    this.$router.push('/koszyk')
  }

  reset () {
    this.confMenu = 1
    this.cupObject = {
      id: this.cupData.id,
      cupId: this.cups.cups[0].id,
      bgId: this.cups.backgrounds[0].backgroundId,
      quoteId: '',
      items: []
    }
    this.resetTempObject()
  }
}
</script>
