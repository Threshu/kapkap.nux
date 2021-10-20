<template>
    <div>
        <Breadcrumb title="Podsumowanie zamówienia"/>
        <section class="section-b-space">
            <div class="container padding-cls">
                <div class="checkout-page">
                    <div class="checkout-form">
                        <FormProvider {...methods} >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="checkout row">
                                    <div class="col-lg-6 col-sm-12 col-xs-12">
                                        <div class="checkout-title">
                                            <h3>Zamówienie</h3>
                                        </div>
                                        <div class="row check-out">
                                            <Tabs
                                                class="col-lg-12"
                                                selectedIndex={tabIndex}
                                                onSelect={index => setTabIndex(index)}
                                            >
                                                <TabList style={{marginBottom: '20px'}}>
                                                    <Tab>Adres rozliczeniowy</Tab>
                                                    <Tab>Inny adres dostawy</Tab>
                                                </TabList>
                                                <TabPanel>
                                                    <AddressForm
                                                        form={billing}
                                                        formDispatch={billingDispatch}
                                                    />
                                                </TabPanel>
                                                <TabPanel>
                                                    <AddressForm
                                                        form={delivery}
                                                        formDispatch={shippingDispatch}
                                                    />
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                        <div class="additionalInfo">
                                            <p>Wpisz uwagi dotyczące zamówienia</p>
                                            <textarea
                                                rows="5"
                                                name="additionalInfo"
                                                value={{initialAdditionals.additionalInfo}}
                                                onChange={({target: {value}}) => additionalsDispatch({
                                                    type: 'additionalInfo',
                                                    value
                                                })}
                                                ref={methods.register({required: false})}/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-12 col-xs-12">
                                        <div class="checkout-details">
                                            <div class="order-box">
                                                <div class="title-box">
                                                    <div>Nazwa kubka<span> Cena</span>
                                                    </div>
                                                </div>
                                                <ul class="qty">
                                                    {cartItems.map((item, index) => {
                                                        return <li key={index}>{item.title} × {item.number}
                                                            <span>{calculateTotal(item, item.number)} {symbol}</span>
                                                        </li>
                                                    })}
                                                </ul>
                                                <ul class="sub-total">
                                                    <li>Suma <span
                                                        class="count">{total} {symbol}</span></li>
                                                    <ShippingComponent
                                                        title="Wybierz sposób dostawy"
                                                        group="shipping-group"
                                                        types={shippingTypes}
                                                        selected={{initialAdditionals.shippingType}}
                                                        changeSelected={value => {
                                                            if (value !== shippingTypes.length - 1) additionalsDispatch({
                                                                type: 'inpost',
                                                                value: null
                                                            });
                                                            return additionalsDispatch({
                                                                type: 'shippingType',
                                                                value
                                                            })
                                                        }}
                                                        changeInpostAddress={value => additionalsDispatch({
                                                            type: 'inpost',
                                                            value
                                                        })}
                                                        inpostAddress={{initialAdditionals.inpost}}
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
                                                                    onKeyPress={(e) => {
                                                                        e.key === 'Enter' && sendCoupon(e.target.value) && e.preventDefault();
                                                                    }}
                                                                    onChange={({target: {value}}) => additionalsDispatch({
                                                                        type: 'coupon',
                                                                        value
                                                                    })}
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
                                                    <li>Do zapłaty <span
                                                        class="count">{total} {symbol}</span></li>
                                                </ul>
                                            </div>

                                            <div class="payment-box">
                                                <div class="upper-box">
                                                    <ShippingComponent
                                                        title="Wybierz sposób płatności"
                                                        types={paymentTypes}
                                                        selected={{initialAdditionals.paymentOption}}
                                                        changeSelected={value =>
                                                            additionalsDispatch({
                                                                type: 'paymentOption',
                                                                value
                                                            })
                                                        }
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
                        </FormProvider>
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
export default class Summary extends Vue {
  order: any = orderJSON
  options: any = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  current: any = new Date(this.order.clientTime)
  nextDay: any = new Date(this.current.valueOf() + 2 * 60 * 60 * 24 * 1000)
  CheckDate: any = this.current.toLocaleDateString("pl-PL", this.options).toString()
  deliveryDate: any = this.nextDay.toLocaleDateString("pl-PL", this.options).toString()

  initialCheckoutForm: any = {
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

  initialAdditionals: any = {
      accountAnswer: false,
      paymentOption: 0,
      shippingType: 0,
      inpost: null,
      coupon: '',
      additionalInfo: 'Jakieś dodatkowe info'
  }

  shippingTypes: any = [
      {
          id: 'freeShipping',
          label: '<span className="type">Kurier</span><img src={inpostImg} alt="inpost"/>'
      },
      {
          id: 'inpost',
          label: '<span className="type">Paczkomaty</span><img src={inpostImg} alt="inpost"/>'
      }
  ];


  mounted () {
    this.order = orderJSON
  }


  getPaymentOption(option: any) {
      switch (option) {
          case 0:
              return 'ONLINE';
          case 1:
              return 'CASH_ON_DELIVERY';
          case 2:
              return 'TRANSFER';
          default:
              return 'ONLINE';
      }
  }




}
</script>
