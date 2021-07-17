export default {
  removeItem (state, itemId) {
    state.basket.products = state.basket.products.filter(item => item.id !== itemId)
  },

  setBasket (state, basket) {
    state.basket = basket
  },

  setPreviewImage (state, { cartItemId, frontImageUrl, backImageUrl }) {
    state.basket.products.forEach((item) => {
      if (item.id === cartItemId) {
        item.frontImageUrl = frontImageUrl
        item.backImageUrl = backImageUrl
      }
    })
  }
}
