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
          Spersonalizowane kubki z grafiką na prezent
        </h1>
        <NuxtLink to="/kubki">
          <div class="infographic" />
        </NuxtLink>
        <div style="text-align: center;">
          <NuxtLink
            class="btn btn-info center-align"
            style="background-color: #31a745;"
            to="/kubki"
          >
            Zbuduj własny kubek
          </NuxtLink>
        </div>

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
                  <p class="media-title">
                    {{ $t('freeShipping') }}
                  </p>
                  <p>{{ $t('freeShippingWorldwide') }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block about">
              <div class="media">
                <svgService />
                <div class="media-body">
                  <p class="media-title">
                    {{ $t('service24h7days') }}
                  </p>
                  <p>{{ $t('helpForNew') }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block about">
              <div class="media">
                <svgOffer />
                <div class="media-body">
                  <p class="media-title">
                    {{ $t('specialOffers') }}
                  </p>
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
                class="nuxt-link-exact-active nuxt-link-active"
              >
                <Picture
                  :path="`/images/main-page/news/${image.filename}`"
                  :alt="image.alt"
                />
              </NuxtLink>
              <p class="bestseller-name">
                {{ image.title }}
              </p>

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
              <h2 class="styled-small-header">
                Wyjątkowa grafika
              </h2>
              <p>
                Każdy z naszych kubków na zamówienie otrzymuje unikalny projekt graficzny, dzięki możliwości błyskawicznego personalizowania. Użytkownik nie musi tworzyć, czy też pozycjonować poszczególnych elementów na kubku – wszystko realizowane jest w tle przez aplikację, która pozwala uzyskać jak najlepszy możliwy efekt. Położyliśmy nacisk na jakość grafiki, dlatego też zaprojektowaliśmy od nowa każde tło, każdą z ras psów, wiele różnych postaci, które również można personalizować oraz każdy cytat. Prześledziliśmy najpopularniejsze rasy psów, aby nie zabrakło żadnych dostępnych w Polsce, ale narysowaliśmy również te bardziej egzotyczne, jak np. Łajki. Uwielbiamy psy, więc na pewno każdy ich wielbiciel znajdzie coś ciekawego dla siebie. Jesteśmy otwarci na wszelkie sugestie, więc jeżeli uważasz, że coś trzeba poprawić, albo masz własny pomysł na grafikę, daj nam znać przez formularz kontaktowy, mailem lub za pomocą telefonu. Chętnie zaprojektujemy coś specjalnie dla Ciebie! W planach mamy także stworzenie projektów dla sympatyków kotów. Mamy również interesujące projekty w głowie idealne dla motocyklistów. Zaprojektuj z nami swój spersonalizowany, zabawny kubek, który umili Ci poranną kawę i zawsze będzie ci przypominać o ulubionych chwilach z twoim zwierzakiem.
              </p>
            </div>

            <div class="col-lg-6">
              <div class="banner-section">
                <NuxtLink
                  to="/kubki"
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
        <p class="styled-page-header">
          Cytaty
        </p>
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

      <div class="article-photo-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="banner-section">
                <Picture
                  path="/images/main-page/28718_120027_front_clipped_rev_1.png"
                  alt="Zabawny kubek z dziewczyną i jej corgi"
                />
              </div>
            </div>
            <div class="col-lg-6 static-article">
              <h2 class="styled-small-header">
                Kubki personalizowane
              </h2>
              <p>
                Wiemy, jak istotną rolę pełnią niewielkie prezenty wręczane bliskim, dlatego w naszej ofercie znaleźć można personalizowane kubki, które są świetnym pomysłem prezentowym dla ważnej osoby. Kubek wykonywany na zamówienie to nie tylko gwarancja najlepszej jakości, ale także oryginalne i nietuzinkowe rozwiązanie. Oferujemy kubek z cytatem, z grafiką lub całkowicie spersonalizowane kubki według własnych preferencji. Niezwykłą popularnością cieszą się nasze kubki ze śmiesznym napisem, jak również ciekawie wyglądające kubki z psami, które mogą być spersonalizowane np. pod kątem ulubionej pory roku.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="faq-section section-b-space">
        <p class="styled-page-header">
          FAQ
        </p>
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
                        <p v-html="item.answer" />
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="article-photo-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 static-article">
              <h2 class="styled-small-header">
                Najlepszy pomysł na prezent
              </h2>
              <p>
                Nie wiesz, co podarować bliskiej Ci osobie na prezent? Duży kubek to świetna opcja, zarówno praktyczna, jak i estetyczna. Podarunek dla faceta lub dla przyjaciółki w postaci spersonalizowanego przedmiotu pozwoli na wyrażenie swoich uczuć, a także pokazanie, że pamięta się o drobnych szczegółach, związanych z konkretną osobą. Jedna sztuka to za mało? Wybierz zestaw kubków na prezent, dzięki czemu obdarowana osoba będzie mogła posiadać niepowtarzalną kolekcję naczyń do picia z oryginalną grafiką. Postaw na nasze spersonalizowane kubki i zagwarantuj sobie oraz najbliższym najwyższą jakość produktów!
              </p>
            </div>

            <div class="col-lg-6">
              <div class="banner-section">
                <Picture
                  path="/images/main-page/28718_120027_front_clipped_rev_1.png"
                  alt="Zabawny kubek z dziewczyną i jej corgi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useBrowserLocation } from '@vueuse/core'
import { Component, Vue } from 'nuxt-property-decorator'
import VueSlickCarousel from 'vue-slick-carousel'
import { Jsonld } from 'nuxt-jsonld'

import svgFreeShipping from '@/components/HomePage/icons/svgFreeShipping'
import svgOffer from '@/components/HomePage/icons/svgOffer'
import svgService from '@/components/HomePage/icons/svgService'
import Picture from '@/components/Common/Picture'

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

  created () {
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

  mounted () {
    const location = useBrowserLocation()
    this.location = location.value.href
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
