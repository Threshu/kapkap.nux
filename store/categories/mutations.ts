import { CategoriesState } from '~/types/categories/types'

export default {
  setStateForCategories (state: CategoriesState, categories: CategoriesState) {
    state.categories = categories.categories
    state.products = categories.products
    state.success = categories.success
  }
}
