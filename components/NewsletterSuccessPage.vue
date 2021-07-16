<i18n lang="yaml">
pl:
  thankYou: "Dziękujemy"
  newsletterRegulationAcceptance: "Regulamin newslettera został zaakceptowany"
  goToRegulations: "Kliknij, aby ponownie przejrzeć regulamin"
</i18n>

<template>
  <section class="section-b-space light-layout">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="success-text">
            <i class="fa fa-check-circle" aria-hidden="true" />
            <h2>{{ $t('thankYou') }}</h2>
            <p>{{ $t('newsletterRegulationAcceptance') }}</p>
          </div>
        </div>
        <p
          class="goToRegulations"
          @click="history.push('/regulamin-newslettera')"
        >
          {{ $t('goToRegulations') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  async mounted () {
    try {
      await this.$axios.post(`/newsletter/${hash}`)
    } catch (err) {
      this.$root.$emit('popup', {
        title: 'Przepraszamy',
        message: 'Napotkaliśmy problem podczas aktywacji newslettera. Spróbuj odświeżyć stronę.'
      })
    }
  }
}
</script>
