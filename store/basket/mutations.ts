import { BasketContainer, BasketState, Product } from '~/store/basket/state'

export default {
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
    state.basket = basket
  },

  setBasketItemCount (state: BasketState, basket: any) {
    state.basket.products[basket.index].number = basket.count
    console.log(state.basket)
  },

  editBasket (state: BasketState, index: any) {
    state.edit = index
  },

  setPreviewImage (state: BasketState, { cartItemIndex, frontImageUrl, backImageUrl, previewId }: any) {
    state.basket.products.forEach(function (item: Product, index: number) {
      if (index === cartItemIndex) {
        item.frontThumbnail = frontImageUrl
        item.backThumbnail = backImageUrl
        item.previewId = previewId
      }
    })
  }
}
