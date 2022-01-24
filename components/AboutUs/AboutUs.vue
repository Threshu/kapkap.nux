<i18n lang="yaml">
pl:
  aboutUs: 'O nas'
  title: 'Każdy dzień jest ważny'
  article1: 'Założyliśmy tę rodzinną firmę, aby tworzyć rzeczy piękne i trwałe. Wiele chwil mija nas każdego dnia. Są wśród nich takie, które warto zachować.<br><br>Jesteśmy dumnymi posiadaczami psiny o wdzięcznym imieniu "Success", która jest wspaniałym miksem miłości i odrobiny nieposłuszeństwa. Tworząc ten projekt, chcieliśmy aby chwile z naszymi psami można było zachować na dłużej.<br><br>Włożyliśmy ogromną pracę w stworzenie kolekcji praktycznie wszystkich ras psów, wraz z różnymi wariantami kolorystycznymi.'
  article2: 'Po ponad roku planowania, rysowania i tworzenia tego sklepu, w końcu postanowiliśmy się z nim podzielić.<br><br>Mamy nadzieję, że spędzenie tych paru chwil na naszej stronie, a później cieszenie się codzienną kawą lub herbatą w specjalnie przez ciebie stworzonym kubku, sprawi ci jeszcze więcej przyjemności.'
cz:
  aboutUs: 'O nás'
  title: 'Každý den je důležitý'
  article1: 'Tuto rodinnou firmu jsme založili, abychom vytvářeli krásné a trvanlivé věci. Každý den nás míjí mnoho okamžiků.<br><br>Jsme hrdými majiteli psa jménem "Success", který je úžasnou směsicí lásky a trochu neposlušnosti. Při tvorbě tohoto projektu jsme chtěli, aby nám chvíle s našimi psy vydržely co nejdéle.<br><br>Vložili jsme spoustu práce do vytvoření kolekce prakticky všech psích plemen a různých barevných variant.'
  article2: 'Po více než roce plánování, kreslení a vytváření tohoto obchodu jsme se konečně rozhodli se s vámi o něj podělit.<br><br>Doufáme, že se vám bude líbit strávit těchto pár chvil na našich stránkách a pak si vychutnáte svou každodenní kávu nebo čaj ve speciálně vytvořeném hrnku.'
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
        <h3
          class="styled-page-header"
          v-html="$t('title')"
        />
        <div class="col-sm-12 col-md-12 col-lg-6 static-article">
          <article v-html="$t('article1')" />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 static-article">
          <article v-html="$t('article2')" />
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
