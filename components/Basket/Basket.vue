<template>
  <div>
    <Breadcrumb title="Twój koszyk" />
    <SmallLoader
      v-if="!isLoaded"
    />
    <section
      v-if="isLoaded && cartItems.length > 0"
      class="cart-section section-b-space"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs">
              <thead>
                <tr class="table-head">
                  <th scope="col">
                    Podgląd
                  </th>
                  <th scope="col">
                    Nazwa kubka
                  </th>
                  <th scope="col">
                    Cena
                  </th>
                  <th scope="col">
                    Sztuk
                  </th>
                  <th scope="col" />
                  <th scope="col">
                    Suma
                  </th>
                </tr>
              </thead>
              <tbody key="index">
                <tr
                  v-for="(item, index) in cartItems"
                  :key="index"
                >
                  <!-- PREVIEWS -->
                  <td>
                    <NuxtLink
                      to="`/edytuj-produkt/${item.cartItemId}`"
                    >
                      <div class="small-preview cart">
                        <template
                          v-if="item.frontImageUrl && item.backImageUrl"
                        >
                          <img
                            :src="item.frontImageUrl"
                            alt="thumbnail"
                          >
                          <img
                            :src="item.backImageUrl"
                            alt="thumbnail"
                          >
                        </template>

                        <template
                          v-else
                        >
                          <img
                            src="/images/cart/kubek-lewy-90.webp"
                            alt="thumbnail"
                          >
                          <img
                            src="/images/cart/kubek-prawy-90.webp"
                            alt="thumbnail"
                          >
                        </template>
                      </div>
                    </NuxtLink>
                  </td>

                  <!-- PRODUCT NAME -->
                  <td>
                    <NuxtLink
                      :to="`/edytuj-produkt/${item.itemCartId}`"
                    >
                      {{ item.title }}
                    </NuxtLink>
                    <div class="mobile-cart-content row">
                      <div class="col-xs-3">
                        <div class="qty-box">
                          <div class="input-group">
                            <!-- !!! -->
                            <input
                              :value="item.count"
                              type="number"
                              class="form-control input-number"
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          {{ item.price }} zł
                        </h2>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          <a
                            href=""
                            class="icon"
                            @click="removeFromCart(index)"
                          >
                            <i class="icon-close" />
                          </a>
                        </h2>
                      </div>
                    </div>
                  </td>

                  <!-- TOTAL PRICE -->
                  <td>
                    <h2>{{ item.price }} zł</h2>
                  </td>
                  <td>
                    <div class="qty-box">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <button
                            type="button"
                            class="btn quantity-left-minus"
                            @click="changeProductQuantity(index, item.number - 1)"
                          >
                            <i class="fa fa-angle-left" />
                          </button>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          :value="item.number"
                          readOnly="true"
                          class="form-control input-number"
                        >
                        <span class="input-group-prepend">
                          <button
                            class="btn quantity-right-plus"
                            @click="changeProductQuantity(index, item.number + 1)"
                          >
                            <i class="fa fa-angle-right" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      class="btn quantity-right-plus separated"
                      @click="editProduct(index)"
                    >
                      <i class="fa fa-pencil" />
                    </button>
                    <button
                      class="btn quantity-right-plus separated"
                      @click="removeFromCart(index)"
                    >
                      <i class="fa fa-times" />
                    </button>
                  </td>
                  <td>
                    <h2
                      class="td-color"
                    >
                      {{ item.price*item.number }} zł
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table cart-table table-responsive-md">
              <tfoot>
                <tr>
                  <td>Suma:</td>
                  <td><h2>{{ basket.totalPrice }} zł</h2></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="row cart-buttons">
          <div class="col-xs-12 col-md-6">
            <NuxtLink
              to="/"
              class="btn btn-solid"
            >
              Kontynuuj zakupy
            </NuxtLink>
          </div>
          <div class="col-xs-12 col-md-6">
            <NuxtLink to="/kasa" class="btn btn-solid">
              Przejdź do zamówienia
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section
      v-else
      class="cart-section section-b-space"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div>
              <div class="col-sm-12 empty-cart-cls text-center">
                <img
                  src="/images/cart/icon-empty-cart.png"
                  class="img-fluid logo"
                  alt="Pusty koszyk"
                >
                <h3>Masz pusty koszyk</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import SmallLoader from '~/components/Common/SmallLoader.vue'
import { STATUS_LOADED } from '~/store/defaults/types'
import { BasketContainer } from '~/store/basket/state'

@Component({
  components: { SmallLoader, Breadcrumb }
})
export default class Basket extends Vue {
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('basket/basket') basket!: BasketContainer

  @Mutation('basket/removeItem') removeItem!: any
  @Mutation('basket/setBasketItemCount') setBasketItemCount!: any

  @Action('preview/fetchCartPreviews') fetchCartPreviews!: Function
  @Action('basket/setBasket') setBasket!: Function
  @Action('basket/loadBasket') loadBasket!: Function
  @Action('basket/editBasket') editBasket!: Function

  cartItems: any = []

  subscribe: any = this.$store.subscribe((mutation: any) => {
    if (mutation.type === 'basket/setBasket') {
      this.setCartItems(mutation.payload)
    }
  })

  setCartItems (items: any) {
    this.cartItems = items
  }

  removeFromCart (index: number) {
    this.removeItem(index)
    this.cartItems.splice(index, 1)
  }

  changeProductQuantity (index: number, count: number) {
    const editBasket = {
      token: localStorage.basketToken,
      number: count,
      previewId: this.basket?.products[index].previewId,
      productId: this.basket?.products[index].productId,
      product: this.basket?.products[index]
    }
    this.editBasket(editBasket)
  }

  processCartPreviews () {
    this.fetchCartPreviews(this.cartItems)
  }

  editProduct (index: number) {
    this.editBasket(index)
    this.$router.push('/kubek/xxx')
  }

  mounted () {
    this.loadBasket()
    this.cartItems = this.basket.products
    if (this.isLoaded) {
      this.processCartPreviews()
    } else {
      this.$store.watch(state => state.defaults.status, (newValue: string) => {
        if (newValue === STATUS_LOADED) {
          this.processCartPreviews()
        }
      })
    }
  }
}
</script>
