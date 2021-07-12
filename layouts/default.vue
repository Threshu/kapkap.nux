<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  async mounted () {
    await this.$store.dispatch('defaults/load')
  }
}
</script>
