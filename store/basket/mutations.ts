import { Vue } from 'nuxt-property-decorator'
import { BasketContainer, BasketState, Product } from '~/store/basket/state'

export default {
  // @todo check if it is working properly
  removeItem (state: BasketState, index: any) {
    let tempStorage = []
    if (localStorage.cup) {
      tempStorage = JSON.parse(localStorage.cup)
    }
    tempStorage.splice(index, 1)
    localStorage.cup = JSON.stringify(tempStorage)
    state.basket = tempStorage
  },

  setBasket (state: BasketState, basket: BasketContainer) {
    Vue.set(state, 'basket', basket)
  },

  // @todo
  setBasketItemCount (state: BasketState, basket: any) {
    state.basket.products[basket.index].number = basket.count
  },

  // @todo
  setEditBasket (state: BasketState, index: any) {
    state.edit = index
  },

  setPreviewImage (state: BasketState, { cartItemId, frontImageUrl, backImageUrl, previewId }: any) {
    state.basket.products.forEach(function (item: Product) {
      if (item.cartItemId === cartItemId) {
        item.frontThumbnail = frontImageUrl
        item.backThumbnail = backImageUrl
        item.previewId = previewId
      }
    })
  }
}
