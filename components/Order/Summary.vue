<template>
  <div>
    <Breadcrumb title="Podsumowanie zamówienia" />

    <section class="section-b-space">
      <div class="container padding-cls">
        <div class="checkout-page">
          <div class="checkout-form">
              <div class="checkout row">
                <div class="col-lg-6 col-sm-12 col-xs-12">
                  <div class="checkout-title">
                    <h3>Zamówienie</h3>
                  </div>

                  <div class="address-tabs">
                    <button
                      class="tab-item"
                      @click="activeTab='billing'"
                      :class="{'selected' : activeTab === 'billing'}"
                    >
                      Adres rozliczeniowy
                    </button>
                    <button 
                      class="tab-item" 
                      :class="{'selected' : activeTab === 'delivery'}"
                      @click="activeTab='delivery'">
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
                      ref="{methods.register({required:"
                      rows="5"
                      name="additionalInfo"
                      v-model="initialAdditionals.additionalInfo"
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
                          :key="index">
                          <img :src="item.frontThumbnail" width="50px"/>
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
                            {{ totalPrice }}
                              zł
                          </span>
                        </li>


                        <div class="input-box shipping-box">
                          <h4>Wybierz sposób dostawy</h4>
                          <ul class="icons shipping-select-container">
                            <li v-for="(type, index) in shippingTypes" class="shipping-option" :key="`shipping-${type.id}`">
                              <input
                                  type="radio"
                                  name="shipment-group"
                                  :id="`shipment-group-${type.id}`"
                                  :checked="delivery.method === type.id"
                                  :value="type.id"
                                  v-model="delivery.method"
                              />
                              <label class="corner-picker" :for="`shipment-group-${type.id}`" v-html="type.label"></label>
                            </li>
                          </ul>
                            <div class="title inpost-address">
                                <div>Paczkomat</div>
                                <div v-if="additionalData" class="data">{{Object.values(additionalData)}}</div>
                            </div>
                              <div
                                  v-show="delivery.method === 'PACZKOMATY'"
                                  id="inpost-geo"
                                  duration="180"
                                  height="300"
                              >
                                <div class="geowidget">
                                    <div id="easypack-map"></div>
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
                                type="text"
                                name="coupon"
                                v-model="coupon"
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
                            <li v-for="(type, index) in paymentTypes" class="shipping-option" :key="`shipping-${type.id}`">
                              <input
                                  type="radio"
                                  name="payment-group"
                                  :id="`payment-group-${type.id}`"
                                  :checked="initialAdditionals.paymentOption === type.id"
                                  :value="type.id"
                                  v-model="initialAdditionals.payment"
                              />
                              <label class="corner-picker" :for="`payment-group-${type.id}`" v-html="type.label"></label>
                            </li>
                          </ul>
                        </div>



                      </div>
                      <div class="text-right">
                        <input
                          class="btn-solid btn payment-btn"
                          type="submit"
                          @click="sendOrder"
                          value="zamów"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Action, Vue } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'
import AddressForm from './AddressForm.vue'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import { BasketContainer, Product, ProductUpdateRequest } from '~/store/basket/state'

@Jsonld
@Component({
  components: { Breadcrumb, AddressForm }
})
export default class Summary extends Vue {
  @Getter('basket/cartItems') cartItems!: Product[]
  @Getter('basket/basket') basket!: BasketContainer
  @Getter('basket/totalPrice') totalPrice!: number
  @Action('basket/applyCoupon') applyCoupon!: Function
  @Action('basket/makeOrder') makeOrder!: Function

  activeTab: any = 'delivery'
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
    method: 'COURIER_INPOST',
  }

    additionalData: any = {}

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
      id: 'COURIER_INPOST',
      label: `
        <span class="type">Kurier</span>
        <img src="https://kapkap.eu/static/media/logo-paczkomaty-inpost-kurier.f596ebe0.png" alt="inpost"/>
      `
    },
    {
      id: 'PACZKOMATY',
      label: `
        <span class="type">Paczkomaty</span>
        <img src="https://kapkap.eu/static/media/logo-paczkomaty-inpost-kurier.f596ebe0.png" alt="inpost"/>
      `
    }
  ];

  paymentTypes: any = [
    {
      id: 'ONLINE',
      label: `
        <img src="https://kapkap.eu/static/media/Przelewy24_logo.37ea72ff.svg" alt='payment online'/>
        <div className="type payment">Płatność on-line</div>
      `
    },
    {
      id: 'CASH_ON_DELIVERY',
      label: `
        <img src="https://kapkap.eu/static/media/banknoty.7ceb1b83.png" alt='cash on delivery'/>
        <div className="type payment">Płatność za pobraniem</div>
      `
    },
    {
      id: 'TRANSFER',
      label: `
        <img src="https://kapkap.eu/static/media/przelew-poczta.png"" alt='manual transfer'/>
        <div className="type payment">Przelew na konto</div>
      `
    }
  ];


    calculateTotal (product: any, numb: any) {
        return parseFloat(product.price) * numb.toFixed(2)
    }

    addCoupon () {
        this.applyCoupon(this.coupon);
    }

    sendOrder() {
        this.delivery.additionalData = this.additionalData

        this.billing.name = this.billing.firstName + this.billing.lastName
        this.billing.country = 'pl'
        let order = {
            billing: this.billing,
            delivery: this.delivery,
            additionalInfo: this.initialAdditionals.additionalInfo,
            payment: {
                'method': this.initialAdditionals.payment
            }
        }
        this.makeOrder(order);
    }

    mounted () {
        let self = this
        if ((window as any).easyPack) {
          (window as any).easyPackAsyncInit = function () {
              (window as any).easyPack.init({
                  defaultLocale: 'pl',
                  mapType: 'osm',
                  searchType: 'osm',
                  points: {
                      types: ['parcel_locker']
                  },
                  map: {
                      initialTypes: ['parcel_locker']
                  }
              });

              (window as any).easyPack.mapWidget('easypack-map', function (point: any) {
                    self.additionalData.building_number = point.address_details.building_number
                    self.additionalData.city = point.address_details.city
                    self.additionalData.flat_number = point.address_details.flat_number
                    self.additionalData.post_code = point.address_details.post_code
                    self.additionalData.province = point.address_details.province
                    self.additionalData.street = point.address_details.street
                    self.additionalData.functions = point.functions
                    self.additionalData.location = point.location
                    self.additionalData.latitude = point.latitude
                    self.additionalData.longitude = point.longitude
                    self.additionalData.location_247 = point.location_247
                    self.additionalData.location_date = point.location_date
                    self.additionalData.name = point.name
                    self.additionalData.opening_hours = point.opening_hours
                    self.additionalData.type = point.type
              });
          };
        }
    }

}
</script>
