<template>
  <li class="onhover-div mobile-cart">
    <div class="cart-qty-cls">
      {{ cartItems.length }}
    </div>
    <NuxtLink rel="nofollow" to="/koszyk">
      <img src="/images/icon/cart.png" class="img-fluid" alt="">
    </NuxtLink>
    <div class="show-div">
      <ul class="shopping-cart">
        <span class="cart-title">KOSZYK</span>
        <template
          v-for="(item, index) in cartItems"
        >
          <CartSmallItem
            :key="index"
            :index="index"
            :item="item"
          />
        </template>
        <li
          v-if="cartItems.length > 0"
          class="total"
        >
          <div>
            SUMA:
          </div>
          <div>
            {{ totalPrice }} zł
          </div>
        </li>
        <li
          v-else
        >
          <p>Masz pusty koszyk.</p>
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
import { Component, Getter, Action, Vue } from 'nuxt-property-decorator'
import CartSmallItem from '~/components/Common/Header/CartSmallItem.vue'
import { BasketContainer, Product, ProductUpdateRequest } from '~/store/basket/state'
import { ProductObject } from '~/store/cup/getters'

@Component({
  components: { CartSmallItem }
})
export default class CartWidget extends Vue {
  @Getter('basket/cartItems') cartItems!: Product[]
  @Getter('basket/basket') basket!: BasketContainer
  @Getter('basket/totalPrice') totalPrice!: number


}
</script>
