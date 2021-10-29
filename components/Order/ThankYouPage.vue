<template>
  <div>
    <Breadcrumb title="Dziękujemy za zamówienie" />
    <section class="section-b-space light-layout">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="success-text">
              <i class="fa fa-check-circle" aria-hidden="true"/>
              <h2>Dziękujemy!</h2>
              <p>Otrzymaliśmy Twoją płatność za zamówienie numer: {{order.orderId}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product-order">
              <h3>szczegóły Twojego zamówienia</h3>
              <div v-for="(item, index) in order.products" :key="index" class="row product-order-detail" key={index}>
                <div class="col-3">
                  <img :src="item.frontImageUrl" alt="thumbnail"/>
                  <img :src="item.backThumbnail" alt="thumbnail"/>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>Produkt</h4>
                    <h5>{{item.title}}</h5>
                  </div>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>Ilość</h4>
                    <h5>{{item.number}}</h5>
                  </div>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>Cena</h4>
                    <h5>{{item.price*item.number}} {{order.payment.symbol}}</h5>
                  </div>
                </div>
              </div>
              <div class="total-sec">
                <ul>
                  <li>Całość <span>{{order.payment.orderTotal}} {{order.payment.symbol}}</span></li>
                  <li>Wysyłka <span>bezpłatnie</span></li>
                </ul>
              </div>
              <div class="final-total">
                <h3>suma <span>{{order.payment.orderTotal}} {{order.payment.symbol}}</span></h3>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row order-success-sec">
              <div class="col-sm-6">
                <h4>Podsumowanie</h4>
                  <ul class="order-detail">
                    <li>
                      <div>
                        numer zamówienia:&nbsp;<strong>{{order.orderId}}</strong>
                      </div>
                    </li>
                    <li>
                      <div>
                        data zamówienia:<br /><strong>{{CheckDate}}</strong>
                      </div>
                    </li>
                  </ul>
              </div>

              <div class="col-sm-6">
                <h4>Adres dostawy</h4>
                <ul class="order-detail">
                  <li>{{order.delivery.name}}</li>
                  <li>{{order.delivery.address}}</li>
                  <li>{{order.delivery.city}}, {{order.delivery.zip}}</li>
                </ul>
              </div>

              <div class="col-sm-12 payment-mode">
                <h4>Metoda płatności</h4>
                <p>{{getPaymentDescription(order.payment.method)}}</p>
              </div>
              <div class="col-md-12">
                <div class="delivery-sec">
                  <h3>przewidywana dostawa</h3>
                  <h2>{{deliveryDate}}</h2>
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
import { Component, Vue } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'
import orderJSON from '~/data/order.json'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

@Jsonld
@Component({
  components: { Breadcrumb }
})
export default class ThankYou extends Vue {
  order: any = orderJSON
  options: any = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  current: any = new Date(this.order.clientTime)
  nextDay: any = new Date(this.current.valueOf() + 2 * 60 * 60 * 24 * 1000)
  CheckDate: any = this.current.toLocaleDateString("pl-PL", this.options).toString()
  deliveryDate: any = this.nextDay.toLocaleDateString("pl-PL", this.options).toString()

  mounted () {
    this.order = orderJSON
  }

  getPaymentDescription(type: any) {
    switch (type) {
      case 'ONLINE':
        return 'Płatność on-line';
      case 'CASH_ON_DELIVERY':
        return 'Płatność za pobraniem';
      case 'TRANSFER':
        return 'Przelew na konto';
      default:
        return 'Nieznana forma płatności';
    }
  }

}
</script>
