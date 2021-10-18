<template>
  <div>
    <Breadcrumb title="Dziękujemy za zamówienie" />

    <section className="section-b-space light-layout">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="success-text">
                        <i className="fa fa-check-circle" aria-hidden="true"/>
                        <h2>Dziękujemy!</h2>
                        <p>Otrzymaliśmy Twoją płatność za zamówienie numer: {{order.orderId}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section-b-space">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="product-order">
                        <h3>{translate('yourOrderDetails')}</h3>
                            <div :v-for="(item, index) in order.products" :key="index" 
                                className="row product-order-detail" key={index}>
                                <div className="col-3">
                                    <img :src="item.frontImageUrl" alt="thumbnail"/>
                                    <img :src="item.backThumbnail" alt="thumbnail"/>
                                </div>
                                <div className="col-3 order_detail">
                                    <div>
                                        <h4>{translate('productName')}</h4>
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                                <div className="col-3 order_detail">
                                    <div>
                                        <h4>Ilość</h4>
                                        <h5>{{item.number}}</h5>
                                    </div>
                                </div>
                                <div className="col-3 order_detail">
                                    <div>
                                        <h4>Cena</h4>
                                        <h5>{{item.price*item.number}} {{symbol}}</h5>
                                    </div>
                                </div>
                            </div>
                        <div className="total-sec">
                            <ul>
                                <li>Całość <span>{orderTotal} {symbol}</span></li>
                                <li>Wysyłka <span>bezpłatnie</span></li>
                            </ul>
                        </div>
                        <div className="final-total">
                            <h3>{translate('total')} <span>{orderTotal} {symbol}</span></h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row order-success-sec">
                        <div className="col-sm-6">
                            <h4>{translate('checkout')}</h4>
                            <ul className="order-detail">
                                <li>
                                    <div>
                                        {translate('orderId')}:&nbsp;<strong>{order.orderId}</strong>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        {translate('orderDate')}:<br /><strong>{CheckDate}</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {order.delivery && (
                            <div className="col-sm-6">
                                <h4>{translate('shippingAddress')}</h4>
                                <ul className="order-detail">
                                    <li>{order.delivery.name}</li>
                                    <li>{order.delivery.address}</li>
                                    <li>{order.delivery.city}, {order.delivery.zip}</li>
                                </ul>
                            </div>
                        )}
                        <div className="col-sm-12 payment-mode">
                            <h4>{translate('paymentMethod')}</h4>
                            <p>{getPaymentDescription(order.payment.method)}</p>
                        </div>
                        <div className="col-md-12">
                            <div className="delivery-sec">
                                <h3>{translate('deliveryDate')}</h3>
                                <h2>{deliveryDate}</h2>
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
  order: any = []

  mounted () {
    this.order = orderJSON
  }

  getPaymentDescription(type) {
      switch (type) {
          case 'ONLINE':
              return translate('paymentOnline');
          case 'CASH_ON_DELIVERY':
              return translate('cashOnDelivery');
          case 'TRANSFER':
              return translate('manualTransfer');
          default:
              return 'Nieznana forma płatności';
      }
  }


}
</script>
