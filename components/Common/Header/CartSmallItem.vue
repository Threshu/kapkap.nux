<template>
  <li v-if="item">
    <div class="media">
      <div class="media-body">
        <h5>{{ item.title }}</h5>
        <div class="details">
          <span>{{ item.number }} x {{ item.price }} zł</span>
        </div>
      </div>
    </div>
    <div class="close-circle">
      <i class="fa fa-times" aria-hidden="true" @click="onRemoveFromCart(index)" />
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Mutation, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CartSmallItem extends Vue {
  @Prop({ required: true }) item!: any
  @Prop({ required: true }) index!: number

  @Mutation('basket/removeItem') removeItem!: any

  // @todo - we have to base on basketItemId, not on index!
  onRemoveFromCart (index: any) {
    this.removeItem(index)
  }
}
</script>
