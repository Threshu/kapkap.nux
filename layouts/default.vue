<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <Popup />
  </div>
</template>

<script>
import Popup from '@/components/Common/Popup'

export default {
  components: { Popup },

  async mounted () {
    await this.$store.dispatch('defaults/load')
  }
}
</script>
