<template>
  <div>
    <Breadcrumb title="Twój koszyk" />
    <SmallLoader
      v-if="!cart || cart.status === LOADING_STATUS"
    />
    <section
      v-if="cart && cart.status === LOADED_STATUS && cart.cartItems.length"
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
                  v-for="(item, index) in cart.cartItems"
                  :key="index"
                >
                  <!-- PREVIEWS -->
                  <td>
                    <NuxtLink
                      to="`/edytuj-produkt/${item.id}`"
                    >
                      <div class="small-preview cart">
                        <template
                          v-if="item.preview"
                        >
                          <img
                            v-for="(p, previewIndex) in item.preview"
                            :key="previewIndex"
                            src="p"
                            alt="thumbnail"
                          >
                        </template>

                        <template
                          v-else
                        >
                          <img
                            key="1"
                            src="/images/cart/kubek-lewy-90.webp"
                            alt="thumbnail"
                          >,
                          <img
                            key="2"
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
                      :to="`/edytuj-produkt${item.id}`"
                    >
                      {{ item.title }}
                    </NuxtLink>
                    <div class="mobile-cart-content row">
                      <div class="col-xs-3">
                        <div class="qty-box">
                          <div class="input-group">
                            <!-- !!! -->
                            <input
                              v-bind="item.number"
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
                            @click="changeProductQuantity(item.id, item.number - 1)"
                          >
                            <i class="fa fa-angle-left" />
                          </button>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          value="item.number"
                          readOnly="true"
                          class="form-control input-number"
                        >
                        <span class="input-group-prepend">
                          <button
                            class="btn quantity-right-plus"
                            @click="changeProductQuantity(item.id, item.number + 1)"
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
                      @click="history.push(`/edytuj-produkt/${item.id}`)"
                    >
                      <i class="fa fa-pencil" />
                    </button>
                    <button
                      class="btn quantity-right-plus separated"
                      @click="removeFromCart(item.id)"
                    >
                      <i class="fa fa-times" />
                    </button>
                  </td>
                  <td>
                    <h2
                      class="td-color"
                    >
                      {{ calculateTotal(item, item.number) }} zł
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table cart-table table-responsive-md">
              <tfoot>
                <tr>
                  <td>Suma:</td>
                  <td><h2>{{ total }} zł</h2></td>
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
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import SmallLoader from '~/components/Common/SmallLoader.vue'
@Component({
  components: { SmallLoader, Breadcrumb }
})
export default class Basket extends Vue {
  cart: any = {}
}
</script>
