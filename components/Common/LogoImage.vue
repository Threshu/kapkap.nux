<template>
  <div>
    <NuxtLink to="/">
      <Picture
        path="images/logo/kapkap-logo-114x100.png"
        alt="personalizowane prezenty KapKap"
        class-name="img-fluid logo"
      />
    </NuxtLink>
    <Picture
      :path="petImage"
      alt="personalizowane prezenty KapKap"
      :class-name="`img-fluid logo dog ${petImage ? 'show' : ''}`"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'
import { useBrowserLocation } from '@vueuse/core'
import Picture from '~/components/Common/Picture.vue'

@Jsonld
@Component({
  components: { Picture }
})
export default class LogoImage extends Vue {
  petImage = ''

  mounted () {
    this.petImage = this.$store.state.defaults.defaultPetImageUrl
  }

  jsonld () {
    const location = useBrowserLocation()
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'https://www.kapkap.eu',
      logo: `${location.value.origin}/images/logo/kapkap-logo-114x100.png`
    }
  }
}
</script>
