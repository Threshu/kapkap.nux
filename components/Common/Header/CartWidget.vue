<template>
  <li class="onhover-div mobile-cart">
    <div class="cart-qty-cls">
      {{ itemsNumber }}
    </div>
    <NuxtLink rel="nofollow" to="/koszyk">
      <img src="/images/icon/cart.png" class="img-fluid" alt="">
    </NuxtLink>
    <div class="show-div">
      <ul class="shopping-cart">
        <span class="cart-title">KOSZYK</span>
        <template
          v-for="(item, index) in cartItems.products"
        >
          <CartSmallItem
            :key="index"
            :index="index"
            :item="item"
          />
        </template>
        <li
          v-if="cartItems.products && cartItems.products.length > 0"
          class="total"
        >
          <div>
            SUMA:
          </div>
          <div>
            {{ cartItems.totalPrice }} zł
          </div>
        </li>
        <li
          v-else
        >
          <h5>Masz pusty koszyk.</h5>
        </li>
      </ul>
      <div class="buttons">
        <NuxtLink rel="nofollow" to="/koszyk" class="view-cart">
          KOSZYK
        </NuxtLink>
        <NuxtLink rel="nofollow" to="/kasa" class="checkout">
          ZAMÓW
        </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import CartSmallItem from '~/components/Common/Header/CartSmallItem.vue'

@Component({
  components: { CartSmallItem }
})
export default class CartWidget extends Vue {
  @Getter('basket/basket') basket!: any
  total: any = 0
  itemsNumber: number = 0
  cartItems: any = []

  suscribe: any = this.$store.subscribe((mutation, state) => {
    if (mutation.type === 'basket/setBasket') {
      this.setCartItems(mutation.payload)
    } else if (mutation.type === 'basket/removeItem') {
      this.removeCartItem(mutation.payload)
    } else if (mutation.type === 'basket/setBasketItemCount') {
      this.setCartItems(state.basket.basket)
    }
  })

  removeCartItem (index: number) {
    this.cartItems.splice(index, 1)
  }

  setCartItems (items: any) {
    this.cartItems = items.basket
    this.itemsNumber = this.cartItems?.products?.length || 0
  }

  mounted () {
    if (localStorage.cup) {
      this.setCartItems(JSON.parse(localStorage.cup))
    }
  }
}
</script>
