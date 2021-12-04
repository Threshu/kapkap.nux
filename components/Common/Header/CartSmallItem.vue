<template>
  <li v-if="item">
    <div class="media">
      <div class="media-body">
        <h5>{{ item.title }}</h5>
        <div class="details">
          <span>{{ item.count }} x {{ item.total }} zł</span>
        </div>
      </div>
    </div>
    <div class="close-circle">
      <i class="fa fa-times" aria-hidden="true" @click="onRemoveFromCart(index)" />
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Mutation, Emit, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CartSmallItem extends Vue {
  @Prop({ required: true }) item!: any
  @Prop({ required: true }) index!: any
  @Mutation('basket/removeItem') removeItem!: any

  onRemoveFromCart (index: any) {
    this.removeItem(index)
  }
}
</script>
