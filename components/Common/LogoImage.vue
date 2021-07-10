<template>
  <div>
    <Helmet>
      <script type="application/ld+json">{structuredData}</script>
    </Helmet>
    <NuxtLink to="/">
      <picture>
        <source srcSet={`${process.env.PUBLIC_URL}/assets/images/logos/${props.logo}`} type="image/webp" />
        <img src={`${process.env.PUBLIC_URL}/assets/images/logos/${pngLogo}`}
             alt="personalizowane prezenty KapKap"
             className="img-fluid logo"
        />
      </picture>
    </NuxtLink>
    <img src={petImage}
         alt="personalizowane prezenty KapKap"
         className={`img-fluid logo dog ${petImage ? 'show' : null}`}
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Jsonld } from 'nuxt-jsonld';

@Jsonld
@Component
export default class LogoImage extends Vue {
  jsonld () {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'https://www.kapkap.eu',
      logo: `${process.env.PUBLIC_URL}/assets/images/logos/${props.logo}`
    }
  }
}
</script>
