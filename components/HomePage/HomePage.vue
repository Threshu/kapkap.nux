<template>
  <div />
</template>

<script lang="ts">
import { useBrowserLocation } from '@vueuse/core'
import { Ref } from '@vue/composition-api'

export default {
  data () {
    return {
      location: ''
    }
  },

  head () {
    return {
      title: 'Strona główna - Sklep KapKap.eu',
      meta: {
        link: [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: '',
          },
          {
            hid: 'shortcut icon',
            rel: 'shortcut icon',
            href: '/favicon.ico',
            type: 'image/x-icon',
          }
        ]
      }
    }
  },

  mounted () {
    const location: Ref = useBrowserLocation()
    this.location = location.value.href
  }
}
</script>
