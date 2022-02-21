import { CategoriesState, Product } from '~/types/categories/types'

export default {
  setStateForCategories (state: CategoriesState, categories: CategoriesState) {
    state.categories = categories.categories
    state.products = categories.products
    state.success = categories.success
  },
  setLastVisited (state: CategoriesState, product: Product) {
    const item = { [product.productId]: product }
    state.lastVisited = { ...state.lastVisited, ...item }
  }
}
