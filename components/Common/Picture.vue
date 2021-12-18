<template>
  <picture>
    <source
      v-if="path"
      :srcset="path.replace(/\.png$/, '.webp')"
      type="image/webp"
    >
    <img
      v-if="path"
      :src="path"
      :class="className"
      :alt="alt"
      loading="lazy"
    >
  </picture>
</template>

<script lang="ts">
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    className: {
      type: String,
      required: false,
      default: 'img-fluid'
    }
  }
}
</script>
