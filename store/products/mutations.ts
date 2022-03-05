import { LastVisited, ProductsState } from '~/types/store/products/types'

export default {
  setStateForProducts (state: ProductsState, products: ProductsState) {
    state.success = products.success
    state.products = products.products
  },
  setLastVisited (state: ProductsState, item: LastVisited) {
    const productIndex = state.lastVisited.findIndex((i: LastVisited) => i.product.productId === item.product.productId)
    if (productIndex > -1) {
      state.lastVisited[productIndex].addDate = item.addDate
    } else {
      state.lastVisited = [...state.lastVisited, item]
    }
    // @ts-ignore
    state.lastVisited = state.lastVisited.sort((a, b) => new Date(b.addDate) - new Date(a.addDate))
  }
}
