<template>
  <div>
    <Breadcrumb title="Najczęściej zadawane pytania" />
    <section class="faq-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="accordion theme-accordion">
              <template
                v-for="(faqItem, index) in faqs"
              >
                <div
                  :key="index"
                  class="card"
                >
                  <div class="card-header">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link"
                        type="button"
                        :aria-controls="`card-${index}`"
                        @click="changeSelected(index)"
                      >
                        {{ faqItem.question }}
                      </button>
                    </h2>
                  </div>
                  <AnimateHeight
                    :id="`card-${index}`"
                    duration="130"
                    :height="selectedFaq === index ? 'auto' : 0"
                  >
                    <div class="card-body">
                      <p>
                        {{ faqItem.answer }}>
                      </p>
                    </div>
                  </AnimateHeight>
                </div>
              </template>
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
import { default as faqJSON } from '~/components/Faq/faq.json'
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
