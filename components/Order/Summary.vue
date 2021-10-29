<template>
  <div>
    <Breadcrumb title="Podsumowanie zamówienia"/>
    <section class="section-b-space">
      <div class="container padding-cls">
        <div class="checkout-page">
          <div class="checkout-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="checkout row">
                <div class="col-lg-6 col-sm-12 col-xs-12">
                  <div class="checkout-title">
                    <h3>Zamówienie</h3>
                  </div>

                  <div class="address-tabs">
                    <a class="tab-item" 
                      v-on:click="activeTab='billing'">Adres rozliczeniowy</a>
                    <a class="tab-item" v-on:click="activeTab='delivery'">Inny adres dostawy</a>
                  </div>

                  <div v-if="activeTab == 'delivery'">
                    <AddressForm
                      :form="delivery"  
                    />
                  </div>

                  <div v-if="activeTab == 'billing'">
                    <AddressForm
                      :form="billing"
                    />
                  </div>
                      
                  <div class="additionalInfo">
                    <p>Wpisz uwagi dotyczące zamówienia</p>
                    <textarea
                      rows="5"
                      name="additionalInfo"
                      :value="initialAdditionals.additionalInfo"
                      ref={methods.register({required: false})}/>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12 col-xs-12">
                  <div class="checkout-details">
                    <div class="order-box">
                      <div class="title-box">
                        <div>Nazwa kubka<span> Cena</span></div>
                      </div>
                      <ul class="qty">
                        <li v-for="(item, index) in cartItems.products" :key="index" >
                          {{item.title}} × {{item.number}}
                          <span>{{calculateTotal(item, item.number)}} {{cartItems.payment.symbol}}</span>
                        </li>
                      </ul>
                      <ul class="sub-total">
                        <li>Suma <span
                          class="count">{{cartItems.payment.orderTotal}} 
                          {{cartItems.payment.symbol}}</span></li>
                        <CheckoutBoxes
                          title="Wybierz sposób dostawy"
                          group="shipping-group"
                          :types="shippingTypes"
                          :selected="initialAdditionals.shippingType"
                          :inpostAddress="initialAdditionals.inpost"
                        />
                      </ul>

                      <ul class="total">
                        <li>Kupon rabatowy</li>
                        <li>
                          <div class="row">
                            <div class="col-md-4 col-sm-4 col-xs-8">
                              <input
                                type="text"
                                name="coupon"
                              />
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-8">
                              <input
                                class="btn-solid btn-small"
                                type="button"
                                value="Aktywuj"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>

                      <ul class="total">
                        <li>
                          Do zapłaty 
                          <span class="count">
                            {{cartItems.totalPrice}} {{cartItems.payment.symbol}}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div class="payment-box">
                      <div class="upper-box">
                        <CheckoutBoxes
                          title="Wybierz sposób płatności"
                          :types="paymentTypes"
                          :selected="initialAdditionals.paymentOption"
                          group="payment-group"
                        />
                      </div>
                      <div class="text-right">
                        <input
                          class="btn-solid btn payment-btn"
                          type="submit"
                          value="zamów"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'
import CheckoutBoxes from './CheckoutBoxes';
import AddressForm from "./AddressForm";
import orderJSON from '~/data/order.json'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

@Jsonld
@Component({
  components: { Breadcrumb, CheckoutBoxes, AddressForm }
})


export default class Summary extends Vue {
  cartItems: any = orderJSON
  activeTab: any = 'delivery'
  billing: any = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    phone: '666-777-888',
    email: 'jan.kowalski@gmail.com',
    address: 'Słoneczna 8',
    city: 'Warszawa',
    zip: '22-022',
    isCompany: false,
    companyName: '',
    taxId: ''
  }
  delivery: any = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    isCompany: false,
    companyName: '',
    taxId: ''
  }
  
  initialAdditionals: any = {
    accountAnswer: false,
    paymentOption: 0,
    shippingType: 1,
    inpost: null,
    coupon: '',
    additionalInfo: 'Jakieś dodatkowe info'
  }

  shippingTypes: any = [
    {
      id: 'freeShipping',
      label: `
        <span class="type">Kurier</span>
        <img src="https://kapkap.eu/static/media/logo-paczkomaty-inpost-kurier.f596ebe0.png" alt="inpost"/>
      `
    },
    {
      id: 'inpost',
      label: `
        <span class="type">Paczkomaty</span>
        <img src="https://kapkap.eu/static/media/logo-paczkomaty-inpost-kurier.f596ebe0.png" alt="inpost"/>
      `
    }
  ];

  paymentTypes: any = [
    {
      id: 'paymentOnline',
      label: `
        <img src="https://kapkap.eu/static/media/Przelewy24_logo.37ea72ff.svg" alt='payment online'/>
        <div className="type payment">Płatność on-line</div>
      `,
    },
    {
      id: 'cashOnDelivery',
      label: `
        <img src="/static/media/banknoty.7ceb1b83.png" alt='cash on delivery'/>
        <div className="type payment">Płatność za pobraniem</div>
      `,
    },
    {
      id: 'manualTransfer',
      label: `
        <img src="=" alt='manual transfer'/>
        <div className="type payment">Przelew na konto</div>
      `
    }
  ];

  mounted () {
    this.cartItems = orderJSON
  }

  calculateTotal(product: any, numb: any) {
    return parseFloat(product.price) * numb.toFixed(2);
  } 

}
</script>
