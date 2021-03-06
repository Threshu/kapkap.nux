<template>
  <div>
    <Breadcrumb title="Podsumowanie zamówienia" />

    <section class="section-b-space">
      <div class="container padding-cls">
        <div class="checkout-page">
          <div class="checkout-form">
            <form method="POST" @submit.prevent="sendOrder">
              <div class="checkout row">
                <div class="col-lg-6 col-sm-12 col-xs-12">
                  <div class="checkout-title">
                    <h3>Zamówienie</h3>
                  </div>

                  <div class="address-tabs">
                    <button
                      class="tab-item"
                      :class="{'selected' : activeTab === 'billing'}"
                      type="button"
                      @click="activeTab='billing'"
                    >
                      Adres rozliczeniowy
                    </button>
                    <button
                      class="tab-item"
                      :class="{'selected' : activeTab === 'delivery'}"
                      type="button"
                      @click="activeTab='delivery'"
                    >
                      Inny adres dostawy
                    </button>
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
                      v-model="initialAdditionals.additionalInfo"
                      rows="5"
                      name="additionalInfo"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12 col-xs-12">
                  <div class="checkout-details">
                    <div class="order-box">
                      <div class="title-box">
                        <div>Nazwa kubka<span> Cena</span></div>
                      </div>
                      <ul class="qty">
                        <li
                          v-for="(item, index) in cartItems"
                          :key="index"
                        >
                          <img
                            :src="item.frontThumbnail"
                            width="50px"
                          >
                          {{ item.title }} × {{ item.number }}
                          <span>
                            {{ calculateTotal(item, item.number) }} zł
                          </span>
                        </li>
                      </ul>
                      <ul class="sub-total">
                        <li>
                          Suma
                          <span
                            class="count"
                          >
                            {{ totalPrice }} zł
                          </span>
                        </li>

                        <div class="input-box shipping-box">
                          <h4>Wybierz sposób dostawy</h4>
                          <ul class="icons shipping-select-container">
                            <li v-for="type in shippingTypes" :key="`shipping-${type.id}`" class="shipping-option">
                              <input
                                :id="`shipment-group-${type.id}`"
                                v-model="deliveryMethod"
                                type="radio"
                                name="shipment-group"
                                :value="type.id"
                                @click="handleChangeDeliveryMethod(type.id)"
                              >
                              <label
                                class="corner-picker"
                                :for="`shipment-group-${type.id}`"
                                @click="triggerResize"
                                v-html="type.label"
                              />
                            </li>
                          </ul>
                          <div
                            v-if="deliveryMethod === 'PACZKOMATY'"
                            class="title inpost-address"
                            @click="openMap"
                          >
                            <div v-if="additionalData.name" class="data">
                              <span>Paczkomat</span>
                              {{ additionalData.name }}
                              {{ additionalData.city }}
                              {{ additionalData.street }}
                              {{ additionalData.building_number }}
                              {{ additionalData.post_code }}
                            </div>
                          </div>
                          <div
                            id="inpost-geo"
                            :class="{ 'hide-map': !isMapVisible}"
                            data-duration="180"
                            data-height="300"
                          >
                            <div class="geowidget">
                              <div id="easypack-map" />
                            </div>
                          </div>
                        </div>
                      </ul>

                      <ul class="total">
                        <li>Kupon rabatowy</li>
                        <li>
                          <div class="row">
                            <div class="col-md-4 col-sm-4 col-xs-8">
                              <input
                                v-model="coupon"
                                type="text"
                                name="coupon"
                              >
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-8">
                              <input
                                class="btn-solid btn-small"
                                type="button"
                                value="Aktywuj"
                                @click="addCoupon"
                              >
                            </div>
                          </div>
                        </li>
                      </ul>

                      <ul class="total">
                        <li>
                          Do zapłaty
                          <span class="count">
                            {{ totalPrice }}&nbsp;zł
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div class="payment-box">
                      <div class="upper-box">
                        <div class="input-box shipping-box">
                          <h4>Wybierz sposób płatności</h4>
                          <ul class="icons shipping-select-container">
                            <li v-for="(type) in paymentTypes" :key="`shipping-${type.id}`" class="shipping-option">
                              <input
                                :id="`payment-group-${type.id}`"
                                v-model="initialAdditionals.payment"
                                type="radio"
                                name="payment-group"
                                :checked="initialAdditionals.paymentOption === type.id"
                                :value="type.id"
                              >
                              <label
                                class="corner-picker"
                                :for="`payment-group-${type.id}`"
                                v-html="type.label"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="text-right">
                        <input
                          class="btn-solid btn payment-btn"
                          type="submit"
                          value="zamów"
                        >
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
import { Component, Getter, Action, Vue, Mutation } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'
import AddressForm from './AddressForm.vue'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import { BasketContainer, Product } from '~/store/basket/state'

@Jsonld
@Component({
  components: { Breadcrumb, AddressForm }
})
export default class Summary extends Vue {
  @Getter('basket/cartItems') cartItems!: Product[]
  @Getter('basket/basket') basket!: BasketContainer
  @Getter('basket/totalPrice') totalPrice!: number
  @Getter('app/isEasyPackLoaded') isEasyPackLoaded!: boolean

  @Mutation('app/setEasyPackAsLoaded') setEasyPackAsLoaded!: Function

  @Action('basket/applyCoupon') applyCoupon!: Function
  @Action('order/makeOrder') makeOrder!: Function

  get isMapVisible (): boolean {
    return this.delivery.method === 'PACZKOMATY'
  }

  get deliveryMethod (): string {
    return this.delivery.method
  }

  set deliveryMethod (val: string) {
    this.$set(this.delivery, 'method', val)
  }

  showInpostMap: boolean = true
  activeTab: any = 'billing'
  billing: any = {
    firstName: '',
    lastName: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    isCompany: false,
    companyName: '',
    taxId: ''
  }

  coupon: string = ''

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
    taxId: '',
    method: 'INPOST_COURIER'
  }

  additionalData: any = {
    building_number: null,
    city: null,
    post_code: null,
    province: null,
    street: null,
    functions: null,
    location: null,
    latitude: null,
    longitude: null,
    location_247: null,
    location_date: null,
    name: null,
    opening_hours: null,
    type: null
  }

  initialAdditionals: any = {
    accountAnswer: false,
    payment: 'ONLINE',
    shippingType: 0,
    inpost: null,
    coupon: '',
    additionalInfo: ''
  }

  shippingTypes: any = [
    {
      id: 'INPOST_COURIER',
      label: `
        <span class="type">Kurier</span>
        <img src="/images/logo-paczkomaty-inpost-kurier.png" alt="inpost"/>
      `,
      checked: 'checked'
    },
    {
      id: 'PACZKOMATY',
      label: `
        <span class="type">Paczkomaty</span>
        <img src="/images/logo-paczkomaty-inpost-kurier.png" alt="inpost"/>
      `,
      checked: ''
    }
  ];

  paymentTypes: any = [
    {
      id: 'ONLINE',
      label: `
        <img src="/images/Przelewy24_logo.svg" alt='payment online'/>
        <div class="type payment">Płatność on-line</div>
      `
    },
    {
      id: 'CASH_ON_DELIVERY',
      label: `
        <img src="/images/banknoty.png" alt='cash on delivery'/>
        <div class="type payment">Płatność za pobraniem</div>
      `
    },
    {
      id: 'TRANSFER',
      label: `
        <img src="/images/przelew.png"" alt='manual transfer'/>
        <div class="type payment">Przelew na konto</div>
      `
    }
  ];

  calculateTotal (product: any, numb: any) {
    return parseFloat(product.price) * numb.toFixed(2)
  }

  addCoupon () {
    this.applyCoupon(this.coupon)
  }

  handleChangeDeliveryMethod (method: string) {
    this.$set(this.delivery, 'method', method)
  }

  async sendOrder () {
    this.delivery.additionalData = this.additionalData
    this.delivery.name = this.billing.firstName + ' ' + this.billing.lastName
    this.delivery.country = 'pl'
    this.billing.name = this.billing.firstName + ' ' + this.billing.lastName
    this.billing.country = 'pl'
    const order = {
      billing: this.billing,
      delivery: this.delivery,
      additionalInfo: this.initialAdditionals.additionalInfo,
      payment: {
        method: this.initialAdditionals.payment
      }
    }
    const response = await this.makeOrder(order)
    if (response.data && response.data.success === true) {
      if (response.data.redirectUrl !== '') {
        window.location.href = response.data.redirectUrl
      } else {
        window.location.href = '/dziekujemy-za-zamowienie'
      }
    }
  }

  setInpostData (point: any) {
    this.additionalData.building_number = point.address_details.building_number
    this.additionalData.city = point.address_details.city
    this.additionalData.flat_number = point.address_details.flat_number
    this.additionalData.post_code = point.address_details.post_code
    this.additionalData.province = point.address_details.province
    this.additionalData.street = point.address_details.street
    this.additionalData.functions = point.functions
    this.additionalData.location = point.location
    this.additionalData.latitude = point.latitude
    this.additionalData.longitude = point.longitude
    this.additionalData.location_247 = point.location_247
    this.additionalData.location_date = point.location_date
    this.additionalData.name = point.name
    this.additionalData.opening_hours = point.opening_hours
    this.additionalData.type = point.type
    this.showInpostMap = false
  }

  triggerResize () {
    window.dispatchEvent(new Event('resize'))
  }

  mounted () {
    // https://dokumentacja-inpost.atlassian.net/wiki/spaces/PL/pages/7438409/Geowidget+v4+User+s+Guide+New
    (window as any).easyPackAsyncInit = () => {
      this.openMap()
      this.setEasyPackAsLoaded()
    }
  }

  destroyed () {
    (window as any).easyPack = {}
  }

  openMap () {
    (window as any).easyPack.init({
      defaultLocale: 'pl',
      mapType: 'osm',
      searchType: 'osm',
      points: {
        types: ['parcel_locker']
      },
      map: {
        useGeolocation: true,
        initialTypes: ['parcel_locker'],
        googleKey: 'AIzaSyCUBttKx4hbiP81yPkR_aV0N8jA1750OLc'
      }
    });
    (window as any).easyPack.mapWidget('easypack-map', (point: any) => {
      this.setInpostData(point)
    })
  }
}
</script>

<style lang="scss" scoped>
.hide-map {
  visibility: hidden;
  height: 0;
  ::v-deep .map-widget {
    visibility: hidden !important;
    height: 0;
  }
}

</style>
