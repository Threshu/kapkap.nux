<template>
  <div>
    <div class="summary">
      <div class="qty-box">
        <span class="qty-label">Sztuk:</span>
        <div class="qty-flex">
          <button class="qty-minus" @click="decreaseQuantity">
            &dash;
          </button>
          <input
            v-model="numberOfCups"
            type="number"
            class="qty-input"
          >
          <button class="qty-plus" @click="increaseQuantity">
            &plus;
          </button>
        </div>
      </div>

      <span class="price-sep">&times;</span>

      <div class="price-box">
        <span class="price-label">Cena za sztukę:</span>
        <div class="price-val">
          {{ formatPrice(price) }} zł
        </div>
      </div>

      <span class="sum-sep">&equals;</span>

      <div class="sum-box">
        <span class="sum-label">Suma:</span>
        <div class="sum-val">
          {{ formatPrice(total()) }} zł
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

<script  lang="ts">
import { Action, Component, Getter, Mutation, Vue, Watch } from 'nuxt-property-decorator'
import { ProductObject } from '~/store/cup/getters'

@Component
export default class Summary extends Vue {
  @Getter('cup/price') price!: number
  // @Getter('cup/total') total!: number
  @Getter('cup/productObject') productObject!: ProductObject
  @Getter('preview/previewId') previewId!: string
  @Getter('cup/editMode') editMode!: boolean

  @Mutation('cup/setTotal') setTotal!: Function
  @Mutation('cup/recalculateTotal') recalculateTotal!: Function

  @Action('cup/setQuantity') setQuantity!: Function

  total () {
    return this.$store.state.cup.total
  }

  numberOfCups: number = this.count() || 1

  @Watch('numberOfCups')
  setNumberOfCups () {
    this.setQuantity(this.numberOfCups)
    this.$forceUpdate()
  }

  count () {
    return this.$store.state.cup.count
  }

  increaseQuantity () {
    this.numberOfCups = this.count() + 1
    this.setQuantity(this.numberOfCups)
    this.$forceUpdate()
  }

  decreaseQuantity () {
    this.numberOfCups = this.count() - 1
    this.setQuantity(this.numberOfCups)
    this.$forceUpdate()
  }

  formatPrice (value: number) {
    if (!value) {
      value = 0
    }
    const val = value.toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  buyNow () {
  }

  async addToCart () {
    const basketObj = {
      product: this.productObject,
      previewId: this.previewId,
      number: this.count,
      token: localStorage.basketToken
    }

    const basket = await this.$store.dispatch('basket/setBasket', basketObj)
    if (basket) {
      localStorage.basketToken = basket.data.token
    }
  }

  saveCartItem () {
    // let tempStorage: any = []
    if (localStorage.cup) {
      // tempStorage = JSON.parse(localStorage.cup)
    }
    // tempStorage[this.$store.state.basket.edit] = this.cupObject
    // this.setBasket(tempStorage)
    this.reset()
    // this.editBasket(null)
    this.$router.push('/koszyk')
  }

  backToCart () {
    // this.editBasket(null)
    this.reset()
    this.$router.push('/koszyk')
  }

  reset () {
    // this.confMenu = 1
    // this.cupObject = {
    //   id: this.cupData.id,
    //   cupId: this.cups.cups[0].id,
    //   bgId: this.cups.backgrounds[0].backgroundId,
    //   quoteId: '',
    //   items: []
    // }
    // this.resetTempObject()
  }
}
</script>
