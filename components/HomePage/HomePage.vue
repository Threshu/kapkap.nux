<template>
  <div>
    <section class="home-page section-b-space">
      <div class="home-slider">
        <h1 class="home-title">
          Sklep z personalizowanymi<br>gadżetami i prezentami
        </h1>
        <VueSlickCarousel
          class="center"
          :center-mode="true"
          :infinite="true"
          center-padding="60px"
          slides-to-show="3"
          speed="500"
          :dots="true"
          :responsive="slickOptions"
        >
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

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import { Ref } from '@vue/composition-api'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: { VueSlickCarousel }
})
export default class HomePage extends Vue {
  location = ''
  slickOptions = {
    breakpoint: 800,
    settings: {
      className: 'center',
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
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
    const location: Ref = useBrowserLocation()
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
