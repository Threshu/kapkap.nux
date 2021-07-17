<template>
  <li>
    <div class="media">
      <div class="media-body">
        <NuxtLink :to="`/edytuj-produkt/${item.id}`">
          <h5>{{ item.title }}</h5>
        </NuxtLink>
        <div class="details">
          <span>{{ item.number }} x {{ item.price }} zł</span>
        </div>
      </div>
    </div>
    <div class="close-circle">
      <i class="fa fa-times" aria-hidden="true" @click="onRemoveFromCart" />
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Mutation, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CartSmallItem extends Vue {
  @Prop({ required: true }) item!: any
  @Mutation('basket/removeItem') removeItem!: any

  onRemoveFromCart () {
    this.removeItem(this.item.id)
  }
}
</script>
