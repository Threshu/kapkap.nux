<template>
  <div>
    <section class="home-page section-b-space">
      <div class="home-slider">
        <h1 class="home-title">
          Sklep z personalizowanymi<br>gadżetami i prezentami
        </h1>
        <VueSlickCarousel v-bind="settings">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <!--          {topSlider && topSlider.map((image, key) =>-->
          <!--          <div class="home-slider-item" key={key}>-->
          <!--            {image.news && <div class="new">Nowość</div>}-->
          <!--            <NuxtLink :to="image.url">-->
          <!--              <Picture-->
          <!--                :path="`/assets/images/main-page/top-slider/${image.filename}`"-->
          <!--                :alt="image.alt"-->
          <!--              />-->
          <!--            </NuxtLink>-->
          <!--          </div>-->
          <!--          )}-->
        </VueSlickCarousel>
      </div>
    </section>
  </div>
</template>

<script>
import { useBrowserLocation } from '@vueuse/core'
// import { Ref } from '@vue/composition-api'
import { Component, Vue } from 'nuxt-property-decorator'
import VueSlickCarousel from 'vue-slick-carousel'

@Component({
  components: { VueSlickCarousel }
})
export default class HomePage extends Vue {
  location = ''
  settings = {
    class: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    // responsive: {
    //   breakpoint: 800,
    //   settings: {
    //     className: 'center',
    //     centerMode: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
  }

  head () {
    return {
      title: 'Strona główna - Sklep KapKap.eu',
      meta: [],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: ''
        },
        {
          hid: 'shortcut icon',
          rel: 'shortcut icon',
          href: '/favicon.ico',
          type: 'image/x-icon'
        }
      ]
    }
  }

  mounted () {
    const location = useBrowserLocation()
    this.location = location.value.href
  }

  structuredData () {

  }

  faqStructuredData () {

  }

  localStructuredData () {

  }
}
</script>
