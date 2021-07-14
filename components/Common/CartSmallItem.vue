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
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { BASKET_REMOVE_ITEM } from '~/store/basket/mutations'

@Component
export default class CartSmallItem extends Vue {
  @Prop({ required: true }) item: any

  onRemoveFromCart () {
    this.$store.commit(BASKET_REMOVE_ITEM, this.item.id)
  }
}
</script>
