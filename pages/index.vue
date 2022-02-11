<template>
  <HomePage />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import HomePage from '~/components/HomePage/HomePage.vue'

export default {
  components: { HomePage },
  head () {
    const location = useBrowserLocation()

    return {
      title: 'Kubki personalizowane - na prezent, dla przyjaciela | KapKap',
      meta: [
        {
          keywords: 'duży kubek personalizowany, kubek na zamówienie, kubek personalizowany, kubek prezent, kubek z cytatem, kubek z grafiką, kubek z napisem na zamówienie, kubek z personalizacją, kubek z psem, kubek ze śmiesznym napisem, kubki na zamówienie, kubki personalizowane, kubki spersonalizowane, kubki z cytatami, kubki z napisami śmieszne, kub- ki z personalizacją, kubki z psami, personalizowane kubki, personalizowany kubek, kubki psy, spersonalizowane kubki, kubek na prezent, zestaw kubków na prezent, kubek na prezent dla faceta, kubek na prezent dla przyjaciółki',
          description: 'Postaw na oryginalne rozwiązania na prezent. Nasze spersonalizowane kubki przypadną do gustu każdej obdarowanej osobie!',
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: location.value.href
        },
        {
          hid: 'shortcut icon',
          rel: 'shortcut icon',
          href: '/favicon.ico',
          type: 'image/x-icon'
        }
      ]
    }
  }
}
</script>
