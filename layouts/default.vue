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
import Header from '@/components/Common/Header/Header'
import Footer from '@/components/Common/Footer/Footer'

export default {
  components: { Footer, Header, Popup },

  async mounted () {
    await this.$store.dispatch('defaults/load')
  }
}
</script>
