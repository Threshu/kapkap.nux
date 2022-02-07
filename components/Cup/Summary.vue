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
            v-model="count"
            type="number"
            class="qty-input"
            disabled="disabled"
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
      <template
        v-if="confMenu < 4"
      >
        <button
          v-if="!editMode"
          class="next"
          @click="openNextEditor"
        >
          Dalej
        </button>
        <button
          v-if="!editMode"
          class="next fl"
          @click="openPrevEditor"
        >
          Wstecz
        </button>
      </template>
      <template
        v-else-if="!editMode"
      >
        <button
          class="next"
          @click="addToCart()"
        >
          Dodaj do koszyka
        </button>
        <button
          class="next fl"
          @click="buyNow()"
        >
          Kup Teraz
        </button>
      </template>
      <template
        v-if="editMode"
      >
        <button
          class="next"
          @click="saveCartItem()"
        >
          Zapisz
        </button>
        <button
          class="next fl"
          @click="backToCart()"
        >
          Wróć
        </button>
      </template>

      <button class="reset" @click="reset()">
        Resetuj i zacznij od nowa
      </button>
    </div>
  </div>
</template>

<script  lang="ts">
import { Action, Component, Getter, Mutation, Prop, Vue } from 'nuxt-property-decorator'
import { ProductObject } from '~/store/cup/getters'
import { ProductAddRequest, ProductUpdateRequest } from '~/store/basket/state'

@Component
export default class Summary extends Vue {
  @Prop(Number) readonly confMenu!: number
  @Prop(Boolean) readonly editMode!: boolean
  @Prop(String) readonly cartItemId!: string

  @Getter('cup/price') price!: number
  // @Getter('cup/total') total!: number
  @Getter('cup/productObject') productObject!: ProductObject
  @Getter('preview/previewId') previewId!: string
  @Getter('cup/count') count!: number

  @Mutation('cup/setTotal') setTotal!: Function
  @Mutation('cup/recalculateTotal') recalculateTotal!: Function
  @Mutation('cup/resetWorkingObject') resetWorkingObject!: Function

  @Action('cup/setQuantity') setQuantity!: Function
  @Action('basket/addToBasket') addToBasket!: Function
  @Action('basket/editBasket') editBasket!: Function

  total () {
    return this.$store.state.cup.total
  }

  openPrevEditor () {
    if (this.confMenu > 1) {
      this.$emit('changeEditor', this.confMenu - 1)
    } else {
      this.$emit('closeConfigurator')
      this.$router.push('/kubki')
    }
  }

  openNextEditor () {
    if (this.confMenu < 4) {
      this.$emit('changeEditor', this.confMenu + 1)
    }
  }

  increaseQuantity () {
    this.setQuantity(this.count + 1)
  }

  decreaseQuantity () {
    this.setQuantity(this.count - 1)
  }

  formatPrice (value: number) {
    if (!value) {
      value = 0
    }
    const val = value.toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  buyNow () {
    this.$router.push('/kasa')
  }

  addToCart () {
    const basket: ProductAddRequest = {
      product: this.productObject,
      previewId: this.previewId,
      number: this.count,
      token: localStorage.basketToken
    }

    this.addToBasket(basket)
    this.$router.push('/koszyk')
  }

  saveCartItem () {
    const basket: ProductUpdateRequest = {
      product: this.productObject,
      previewId: this.previewId,
      number: this.count,
      token: localStorage.basketToken,
      cartItemId: this.cartItemId
    }

    this.editBasket(basket)
    this.$router.push('/koszyk')
  }

  backToCart () {
    this.$router.push('/koszyk')
  }

  reset () {
    this.resetWorkingObject()
  }
}
</script>
