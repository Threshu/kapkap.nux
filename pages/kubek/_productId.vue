<template>
  <Cup
    :product-id="productId"
    :edit-mode="false"
  />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import { Action, Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    Cup: () => import(/* webpackChunkName: "Cup" */ '@/components/Cup/Cup.vue')
  },
  asyncData ({ params }: any) {
    return { productId: params.productId }
  }
})
export default class CupView extends Vue {
  @Action('cup/saveConfigurationForProduct') saveConfigurationForProduct!: Function
  productId: string = ''

  head () {
    const location = useBrowserLocation()

    return {
      title: 'Kubki klasy premium - Sklep KapKap.eu',
      meta: [],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: location.value.href
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

  destroyed () {
    this.saveConfigurationForProduct(this.productId)
  }
}
</script>
