<template>
  <div>
    <Breadcrumb title="Najczęściej zadawane pytania" />
    <section class="faq-section section-b-space">
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
                      <p>{{ item.answer }}</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

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

// eslint-disable-next-line import/no-named-default
import faqJSON from '~/data/faq.json'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

@Jsonld
@Component({
  components: { Breadcrumb }
})
export default class Faq extends Vue {
  faqs: any = []
  selectedFaq: number = 0

  mounted () {
    this.faqs = faqJSON
  }

  changeSelected (faqNumber: number) {
    this.selectedFaq = faqNumber
  }

  jsonld () {
    const mainEntity: any = []
    Object.keys(faqJSON).forEach((value: any) => {
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
      ...mainEntity
    }
  }
}
</script>
