<i18n lang="yaml">
pl:
  aboutUs: 'O nas'
</i18n>

<template>
  <div>
    <Breadcrumb :title="$t('aboutUs')" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="banner-section">
            <img
              src="/images/about/o-nas.jpeg"
              class="img-fluid"
              alt="Corgi jesienią"
              width="1370"
              height="385"
            >
          </div>
        </div>
        <h3 class="styled-page-header">
          Każdy dzień jest ważny
        </h3>
        <div class="col-sm-12 col-md-12 col-lg-6 static-article">
          <article>
            Założyliśmy tę rodzinną firmę, aby tworzyć rzeczy piękne i trwałe.
            Wiele chwil mija nas każdego dnia. Są wśród nich takie, które warto zachować.<br>
            <br>
            Jesteśmy dumnymi posiadaczami psiny o wdzięcznym imieniu "Success",
            która jest wspaniałym miksem miłości i odrobiny nieposłuszeństwa.
            Tworząc ten projekt, chcieliśmy aby chwile z naszymi psami można było zachować na dłużej.<br>
            <br>
            Włożyliśmy ogromną pracę w stworzenie kolekcji praktycznie wszystkich ras psów,
            wraz z różnymi wariantami kolorystycznymi.<br>
          </article>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 static-article">
          <article>
            Po ponad roku planowania, rysowania
            i tworzenia tego sklepu, w końcu postanowiliśmy się z nim podzielić.<br>
            <br>
            Mamy nadzieję, że spędzenie tych paru chwil na naszej stronie, a później
            cieszenie się codzienną kawą lub herbatą w specjalnie przez ciebie stworzonym
            kubku, sprawi ci jeszcze więcej przyjemności.
          </article>
        </div>
      </div>
    </div>
    <div class="owners container">
      <h3 class="styled-page-header">
        To my
      </h3>
      <div class="row">
        <div class="col-md-6">
          <div class="media">
            <div class="text-center">
              <img
                src="/images/about/basia.jpeg"
                alt="Barbara Gierlotka-Buk"
                width="250"
                height="250"
              >
              <h5>Basia</h5>
            </div>
            <div class="media-body">
              <p>
                Wkrótce skończy (kolejne po inżynierskich) studia, tym razem psychologiczne.
                Mama dwojga i pół (jeżeli liczyć psa, ewentualnie męża).
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="media">
            <div class="text-center">
              <img
                src="/images/about/mariusz.jpeg"
                alt="Mariusz Buk"
                width="250"
                height="250"
              >
              <h5>Mariusz</h5>
            </div>
            <div class="media-body">
              <p>
                Ostoja spokoju, doprowadza do szału wszystkich wokół.
                Niespełniony pisarz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

@Component({
  components: { Breadcrumb }
})
export default class AboutUs extends Vue {

}
</script>
