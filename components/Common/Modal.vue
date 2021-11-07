<template>
  <div class="nuxtmodal-overlay" @click="$emit('close-modal')">
    <div class="nuxtmodal" @click.stop>
      <h6>{{xtitle}}</h6>
      <p>{{message}}</p>
    </div>
    <div class="close" @click="$emit('close-modal')">
      <a class="close-img">xx</a>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Prop } from 'nuxt-property-decorator'

export default class Modal extends Vue {
  @Prop({ type: String, required: false }) xtitle!: String
  @Prop({ type: String, required: false }) message! : String
}
</script>
