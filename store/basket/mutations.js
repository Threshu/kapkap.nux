export default {
  removeItem (state, index) {
    var tempStorage = []
    if (localStorage.cup) {
      tempStorage = JSON.parse(localStorage.cup)
    }
    tempStorage.splice(index, 1)
    localStorage.cup = JSON.stringify(tempStorage)
    state.basket = tempStorage
  },

  setBasket (state, basket) {
    state.basket = basket
    localStorage.cup = JSON.stringify(basket)
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
