<i18n lang="yaml">
pl:
  freeShipping: 'darmowa dostawa'
  freeShippingWorldwide: 'darmowa dostawa na terenie Polski'
  service24h7days: 'jesteśmy dostępni 24/7'
  helpForNew: 'nasz sklep jest do twojej dyspozycji'
  specialOffers: 'słuchamy, gdy mówisz'
  newSpecialOffers: 'dostosowujemy się do twoich potrzeb'
</i18n>

<template>
  <div>
    <section class="home-page section-b-space">
      <div class="home-slider">
        <h1 class="home-title">
          Sklep z personalizowanymi<br>gadżetami i prezentami
        </h1>
        <NuxtLink to="/kubki">
          <div class="infographic" />
        </NuxtLink>

<!--      <VueSlickCarousel-->
<!--          v-if="topSlider && topSlider.length"-->
<!--          v-bind="topSliderSettings"-->
<!--        >-->
<!--          <template-->
<!--            v-for="(image, key) in topSlider"-->
<!--          >-->
<!--            <div-->
<!--              :key="key"-->
<!--              class="home-slider-item"-->
<!--            >-->
<!--              <div-->
<!--                v-if="image.news"-->
<!--                class="new"-->
<!--              >-->
<!--                Nowość-->
<!--              </div>-->
<!--              <NuxtLink :to="image.url">-->
<!--                <Picture-->
<!--                  :path="`/images/main-page/top-slider/${image.filename}`"-->
<!--                  :alt="image.alt"-->
<!--                />-->
<!--              </NuxtLink>-->
<!--            </div>-->
<!--          </template>-->
<!--          &lt;!&ndash;          <template #prevArrow="">&ndash;&gt;-->
<!--          &lt;!&ndash;            <div&ndash;&gt;-->
<!--          &lt;!&ndash;              class="carousel-left"&ndash;&gt;-->
<!--          &lt;!&ndash;            />&ndash;&gt;-->
<!--          &lt;!&ndash;          </template>&ndash;&gt;-->
<!--          &lt;!&ndash;          <template #nextArrow="">&ndash;&gt;-->
<!--          &lt;!&ndash;            <div&ndash;&gt;-->
<!--          &lt;!&ndash;              class="carousel-right"&ndash;&gt;-->
<!--          &lt;!&ndash;            />&ndash;&gt;-->
<!--          &lt;!&ndash;          </template>&ndash;&gt;-->
<!--        </VueSlickCarousel>-->
      </div>

      <div class="article-photo-box no-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 service-block about">
              <div class="media">
                <svgFreeShipping />
                <div class="media-body">
                  <h4>{{ $t('freeShipping') }}</h4>
                  <p>{{ $t('freeShippingWorldwide') }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block about">
              <div class="media">
                <svgService />
                <div class="media-body">
                  <h4>{{ $t('service24h7days') }}</h4>
                  <p>{{ $t('helpForNew') }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block about">
              <div class="media">
                <svgOffer />
                <div class="media-body">
                  <h4>{{ $t('specialOffers') }}</h4>
                  <p>{{ $t('newSpecialOffers') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-product-slider">
        <h3 class="styled-page-header">
          Nowości
        </h3>
        <VueSlickCarousel
          v-if="news && news.length"
          v-bind="sliderSettings"
        >
          <template
            v-for="(image, key) in news"
          >
            <div
              :key="key"
              class="bestseller-item"
            >
              <span
                v-if="image.news"
                class="promotion new"
              >
                Nowość
              </span>
              <NuxtLink
                :to="image.url"
              >
                <Picture
                  :path="`/images/main-page/news/${image.filename}`"
                  :alt="image.alt"
                />
              </NuxtLink>
              <h3>{{ image.title }}</h3>

              <NuxtLink
                class="ch2-btn ch2-allow-all-btn ch2-btn-primary ch2-btn-text-xs"
                :to="image.url"
              >
                Personalizuj
              </NuxtLink>
            </div>
          </template>
        </VueSlickCarousel>
      </div>

      <div class="article-photo-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 static-article">
              <h5 class="styled-small-header">
                Wyjątkowa grafika
              </h5>
              <article>
                Każdy z naszych kubków otrzymuje unikalny projekt graficzny, dzięki możliwości
                błyskawicznego personalizowania.
                Użytkownik nie musi tworzyć, czy też pozycjonować poszczególnych elementów na kubku.
                Wszystko jest realizowane w tle przez aplikację, aby uzyskać najlepszy możliwy
                efekt.
                Położyliśmy nacisk na jakość grafiki, dlatego też zaprojektowaliśmy od nowa
                każde tło, każdą z ras psów, wiele różnych postaci, które również można
                personalizować oraz każdy cytat.
                Prześledziliśmy najpopularniejsze rasy psów, aby nie zabrało żadnych dostępnych w Polsce, ale narysowaliśmy również bardziej egzotyczne, jak np. Łajki. Uwielbiamy psy, więc na pewno każdy znajdzie coś ciekawego dla siebie.
                Jesteśmy otwarci na wszelkie sugestie, więc jeżeli uważasz, że coś trzeba poprawić, albo masz własny pomysł na grafikę, daj nam znać przez formularz kontaktowy, mailem lub za pomocą telefonu, a chętnie zaprojektujemy coś specjalnie dla ciebie.
                W planach mamy stworzenie projektów dla sympatyków kotów. Mamy również interesujące projekty w głowie dla motocyklistów.
                Zatem zaprojektuj z nami swój spersonalizowany, zabawny kubek, który umili Ci poranną kawę i zawsze będzie ci przypominać o ulubionych chwilach z twoim psem lub kotem.
              </article>
            </div>

            <div class="col-lg-6">
              <div class="banner-section">
                <NuxtLink
                  to="/ja-i-pies/latem-nad-morzem"
                >
                  <Picture
                    path="/images/main-page/28718_120027_front_clipped_rev_1.png"
                    alt="Zabawny kubek z dziewczyną i jej corgi"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-product-slider">
        <h3 class="styled-page-header">
          Cytaty
        </h3>
        <VueSlickCarousel
          v-if="quotes && quotes.length"
          v-bind="sliderSettings"
        >
          <template
            v-for="(image, key) in quotes"
          >
            <div
              :key="key"
              class="bestseller-item"
            >
              <span
                v-if="image.news"
                class="promotion new"
              >
                Nowość
              </span>
              <NuxtLink :to="image.url">
                <Picture
                  :path="`/images/main-page/quotes/${image.filename}`"
                  :alt="image.alt"
                />
              </NuxtLink>
            </div>
          </template>
        </VueSlickCarousel>
      </div>

      <section class="faq-section section-b-space">
        <h3 class="styled-page-header">
          FAQ
        </h3>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="accordion theme-accordion">
                <b-card v-for="(item, index) in faqs" :key="index" no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button v-b-toggle="'accordion-' + index" block href="#" variant="light">
                      {{ item.question }}
                    </b-button>
                  </b-card-header>
                  <b-collapse :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p v-html="item.answer"></p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { useBrowserLocation } from '@vueuse/core'
import { Component, Vue } from 'nuxt-property-decorator'
import VueSlickCarousel from 'vue-slick-carousel'

import svgFreeShipping from '@/components/HomePage/icons/svgFreeShipping'
import svgOffer from '@/components/HomePage/icons/svgOffer'
import svgService from '@/components/HomePage/icons/svgService'
import Picture from '@/components/Common/Picture'

import { Jsonld } from 'nuxt-jsonld'
import topSliderJSON from '~/data/topSlider.json'
import newsJSON from '~/data/news.json'
import quotesJSON from '~/data/quotes.json'
import faqJSON from '~/data/faq.json'

@Jsonld
@Component({
  components: {
    Picture,
    VueSlickCarousel,
    svgFreeShipping,
    svgOffer,
    svgService
  }
})
export default class HomePage extends Vue {
  topSlider = []
  news = []
  faqs = []
  quotes = []
  location = ''
  selectedFaq = 0

  topSliderSettings = {
    class: 'center',
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [{
      breakpoint: 800,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

  sliderSettings = {
    arrows: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    touchThreshold: 5,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    responsive: [{
      breakpoint: 4000,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 1500,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 1024,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

  mounted () {
    const location = useBrowserLocation()
    this.location = location.value.href
    this.topSlider = ((arr) => {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
      }
      return newArr
    })(topSliderJSON)
    this.news = newsJSON
    this.quotes = quotesJSON
    this.faqs = faqJSON
  }

  changeSelectedFaq (faqIndex) {
    this.selectedFaq = faqIndex
  }

  jsonld () {
    return [this.structuredData, this.faqStructuredData, this.localStructuredData]
  }

  get localStructuredData () {
    return {
      '@context': 'https://schema.org',
      '@type': 'Store',
      image: [
        'https://kapkap.eu/assets/adv/K_1P_swieta_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/K_1P_zima_1200x628.png',
        'https://kapkap.eu/assets/adv/K_1P_zima_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/K_2P_zima_1200x628.png',
        'https://kapkap.eu/assets/adv/K_2P_zima_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/K_3P_morze_1200x628.png',
        'https://kapkap.eu/assets/adv/K_3P_morze_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/M_1P_jezioro_1200x628.png',
        'https://kapkap.eu/assets/adv/M_1P_jezioro_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/M_1P_las_1200x628.png',
        'https://kapkap.eu/assets/adv/M_1P_las_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/M_2P_miasto_1200x628kolor.png',
        'https://kapkap.eu/assets/adv/M_2P_swieta_1200x628kolor.png'
      ],
      '@id': 'https://kapkap.eu',
      name: 'KapKap - Personalizowane gadżety i prezenty',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Długa 43',
        addressLocality: 'Chorzów',
        postalCode: '41-506',
        addressCountry: 'PL'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.2773439,
        longitude: 18.9529832
      },
      url: 'https://kapkap.eu',
      telephone: '+48694051344',
      priceRange: '59.99',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          opens: '10:00',
          closes: '18:00'
        }
      ]
    }
  }

  get structuredData () {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'https://kapkap.eu',
      logo: 'https://kapkap.eu/assets/images/logos/kapkap-logo-114x100.png'
    }
  }

  get faqStructuredData () {
    const mainEntity = []
    Object.keys(faqJSON).forEach((value) => {
      if (value.question) {
        mainEntity.push({
          '@type': 'Question',
          name: value.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: value.answer
          }
        })
      }
    })

    return {
      '@context': 'http://schema.org',
      '@type': 'FAQPage',
      mainEntity
    }
  }
}
</script>
