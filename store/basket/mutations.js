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
  },
  setBasketItemCount (state, basket) {
    var tempStorage = []
    if (localStorage.cup) {
      tempStorage = JSON.parse(localStorage.cup)
      tempStorage[basket.index].count = basket.count
      localStorage.cup = JSON.stringify(tempStorage)
      state.basket = tempStorage
    }
  },

  editBasket (state, index) {
    state.edit = index
  },

  setPreviewImage (state, { cartItemIndex, frontImageUrl, backImageUrl, previewId }) {
    state.basket.forEach(function (item, index) {
      if (index === cartItemIndex) {
        item.frontImageUrl = frontImageUrl
        item.backImageUrl = backImageUrl
        item.previewId = previewId
      }
    })
  }
}

