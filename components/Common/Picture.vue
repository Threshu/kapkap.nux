<template>
  <picture>
    <source
      :srcset="path.replace(/\.png$/, '.webp')"
      type="image/webp"
    >
    <img
      :src="path"
      class="img-fluid"
      :alt="alt"
    >
  </picture>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Picture extends Vue {
  @Prop({ type: String, required: true }) readonly path: String = ''
  @Prop({ type: String, required: false, default: '' }) readonly alt: String = ''
}
</script>
