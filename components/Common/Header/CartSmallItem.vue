<template>
  <li>
    <div class="media">
      <div class="media-body">
        <NuxtLink :to="`/edytuj-produkt/${item.id}`">
          <h5>{{ item.title }}</h5>
        </NuxtLink>
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
