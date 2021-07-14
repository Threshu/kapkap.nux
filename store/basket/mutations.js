export const BASKET_REMOVE_ITEM = 'basketRemoveItem'

export default {
  [BASKET_REMOVE_ITEM] (state, itemId) {
    state.basket.products = state.basket.products.filter(item => item.id !== itemId)
  }
}
