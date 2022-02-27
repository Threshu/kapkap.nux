<template>
  <div class="top-banner-wrapper">
    <div class="top-banner-content small-section pt-0">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class TopBanner extends Vue {
  @Prop() readonly title!: string
  @Prop() readonly description!: string
}
</script>

<style scoped>

</style>
