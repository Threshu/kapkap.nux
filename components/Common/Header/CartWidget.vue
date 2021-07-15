<template>
  <li class="onhover-div mobile-cart">
    <div class="cart-qty-cls">{{ itemsNumber }}</div>
    <NuxtLink rel="nofollow" to="/koszyk">
      <img src="/images/icon/cart.png" class="img-fluid" alt=""/>
    </NuxtLink>
    <div class="show-div">
      <ul class="shopping-cart">
        <span class="cart-title">KOSZYK</span>
        <template
          v-for="(item, index) in cartItems"
        >
          <CartSmallItem
            :key="index"
            :item="item"
          />
        </template>
        <li
          v-if="itemsNumber > 0"
          class="total"
        >
          <div>
            SUMA:
          </div>
          <div>
            {total} {symbol}
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
import { Component, Vue } from 'nuxt-property-decorator'
import CartSmallItem from '~/components/Common/Header/CartSmallItem.vue'

@Component({
  components: { CartSmallItem }
})
export default class CartWidget extends Vue {
  itemsNumber: number = 0
  cartItems: any = []
}
</script>
