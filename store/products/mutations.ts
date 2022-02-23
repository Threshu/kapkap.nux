import { Product, ProductsState } from '~/types/products/types'

export default {
  setStateForProducts (state: ProductsState, products: ProductsState) {
    state.success = products.success
    state.products = products.products
  },
  setLastVisited (state: ProductsState, product: Product) {
    const item = { [product.productId]: product }
    state.lastVisited = { ...state.lastVisited, ...item }
  }
}
