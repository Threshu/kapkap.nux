<i18n lang="yaml">
pl:
  freeShipping: 'darmowa dostawa'
  freeShippingWorldwide: 'darmowa dostawa na terenie Polski'
  service24h7days: 'jesteśmy dostępni 24/7'
  helpForNew: 'nasz sklep jest do twojej dyspozycji'
  specialOffers: 'słuchamy, gdy mówisz'
  newSpecialOffers: 'dostosowujemy się do twoich potrzeb'
  knowItFirst: 'tylko ciekawe wydarzenia'
  neverMissUpNewsletter: 'wysyłamy maksymalnie raz w miesiącu'
  subscribe: 'subskrybuj'
  enterEmail: 'Adres email'
</i18n>

<template>
  <footer class="footer-light">
    <div
      v-if="!isHomePage"
      class="light-layout"
    >
      <div class="container">
        <div class="row benefits-box">
          <div class="col-lg-4 service-block about">
            <div class="media">
              <svg-free-shipping />
              <div class="media-body">
                <h4>{{ $t('freeShipping') }}</h4>
                <p>{{ $t('freeShippingWorldwide') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 service-block about">
            <div class="media">
              <svg-service />
              <div class="media-body">
                <h4>{{ $t('service24h7days') }}</h4>
                <p>{{ $t('helpForNew') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 service-block about">
            <div class="media">
              <svg-offer />
              <div class="media-body">
                <h4>{{ $t('specialOffers') }}</h4>
                <p>{{ $t('newSpecialOffers') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="light-layout dark">
      <div class="container">
        <section class="small-section border-section border-top-0">
          <div class="row">
            <div class="col-lg-6">
              <div class="subscribe">
                <div>
                  <span class="know-it-first">{{ $t('knowItFirst') }}</span>
                  <p>{{ $t('neverMissUpNewsletter') }}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <form class="form-inline subscribe-form" @submit="addEmailToNewsletter">
                <div class="form-group mx-sm-3">
                  <input
                    v-bind="email"
                    type="email"
                    class="form-control"
                    :placeholder="$t('enterEmail')"
                    :required="true"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-solid"
                >
                  {{ $t('subscribe') }}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
    <section class="section-b-space light-layout">
      <div class="container">
        <div class="row footer-theme partition-f">
          <div class="col-lg-4 col-md-6">
            <div class="footer-title footer-mobile-title">
              <h4>about</h4>
            </div>
            <div class="footer-content">
              <div class="footer-logo">
                <LogoImage />
              </div>
              <p>Serwis z najładniejszymi kubkami w Polsce.</p>
              <div class="footer-social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/kapkap.eu">
                      <i class="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="sub-title to-left">
              <div class="footer-title">
                <span>Produkty</span>
              </div>
              <div class="footer-content">
                <ul>
                  <li
                    v-for="(option, key) in menuOptions"
                  >
                    <NuxtLink
                      :key="option.key"
                      :to="option.link"
                      @click="/* switchNav */"
                    >
                      {{ option.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="sub-title to-left">
              <div class="footer-title">
                <span>Informacje</span>
              </div>
              <div class="footer-content">
                <ul>
                  <li>
                    <NuxtLink to="/o-nas">
                      O nas
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      rel="nofollow"
                      to="/regulamin-infografika"
                    >
                      Regulamin
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink rel="nofollow" to="/polityka-prywatnosci">
                      Polityka prywatności
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="sub-title">
              <div class="footer-title">
                <span>Pomoc</span>
              </div>
              <div class="footer-content">
                <ul>
                  <li>
                    <NuxtLink to="/faq">
                      FAQ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/kontakt">
                      Kontakt
                    </NuxtLink>
                  </li>
<!--                  <li>-->
<!--                    <NuxtLink to="`${process.env.PUBLIC_URL}/sledz-zamowienie`}">-->
<!--                      Śledź zamówienie-->
<!--                    </NuxtLink>-->
<!--                  </li>-->
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="sub-title">
              <div class="footer-title">
                <span>Informacja o sklepie</span>
              </div>
              <div class="footer-content">
                <ul class="contact-list">
                  <li>
                    <i class="fa fa-map-marker" />{{ companyName }}<br>
                    {{ companyStreet }}<br>
                    {{ companyZip }} {{ companyCity }}
                  </li>
                  <li>
                    <i class="fa fa-phone" />
                    <a :href="`tel:${phone}`">{{ phoneFormatted }}</a>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" /> <a
                      :href="`mailto:${companyMail}`"
                    >{{ companyMail }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="sub-footer ">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-12 col-sm-12">
            <div class="footer-end">
              <p>
                <i class="fa fa-copyright" aria-hidden="true" /> {{ currentYear }} KapKap Sp. z o.o.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import svgFreeShipping from '~/components/HomePage/icons/svgFreeShipping.vue'
import svgOffer from '~/components/HomePage/icons/svgOffer.vue'
import svgService from '~/components/HomePage/icons/svgService.vue'

import LogoImage from '~/components/Common/LogoImage.vue'

type menuItem = {
  link: string,
  title: string
}

@Component({
  components: { LogoImage, svgFreeShipping, svgOffer, svgService }
})
export default class Footer extends Vue {
  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyName: string = <string>process.env.companyName
  companyStreet: string = <string>process.env.companyStreet
  companyZip: string = <string>process.env.companyZip
  companyCity: string = <string>process.env.companyCity
  companyMail: string = <string>process.env.companyMail
  email: string = ''

  menuOptions: menuItem[] = [
    { link: '/ja-i-pies/latem-nad-morzem', title: 'Nad morzem' },
    { link: '/ja-i-pies/nad-jeziorem', title: 'Nad jeziorem' },
    { link: '/ja-i-pies/zima', title: 'Zimą' },
    { link: '/ja-i-pies/w-lesie', title: 'W lesie' },
    { link: '/ja-i-pies/w-miescie', title: 'W mieście' },
    { link: '/ja-i-pies/na-swieta', title: 'Na święta' }
  ]

  get isHomePage () {
    return this.$route.path === '/'
  }

  get currentYear () {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    if (currentYear === 2020) {
      return currentYear
    }
    return `2020-${currentYear}`
  }

  async addEmailToNewsletter () {
    try {
      const res = await this.$axios.post("/newsletter", { email: this.email })
      this.$root.$emit('popup', {
        title: 'Dziękujemy',
        message: 'Aby korzystać z newslettera aktywuj go z poziomu wiadomości e-mail, którą właśnie do ciebie wysłaliśmy.'
      })
    } catch (err) {
      this.$root.$emit('popup', {
        title: 'Przepraszamy',
        message: 'Napotkaliśmy problem podczas dodawania adresu e-mail do newslettera. Spróbuj raz jeszcze.'
      })
    }
  }

  async acceptNewsletterRegulations (hash: any) {
    try {
      const res = await this.$axios.post(`/newsletter/${hash}`)
    } catch (err) {
      this.$root.$emit('popup', {
        title: 'Przepraszamy',
        message: 'Napotkaliśmy problem podczas aktywacji newslettera. Spróbuj odświeżyć stronę.'
      })
    }
  }
}
</script>
