<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  async mounted () {
    await this.$store.dispatch('defaults/load')
  }
}
</script>
