<template>
  <BModal
    v-if="open"
    :title="title"
    @popup="handle"
    @close="open = false"
  >
    <p>{{ message }}</p>
  </BModal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Popup extends Vue {
  message: string = ''
  title: string = ''
  open: boolean = false

  handle (data: any) {
    this.message = data.message
    this.title = data.title
    this.open = true
  }
}
</script>
