import { CategoriesState } from '~/types/store/categories/types'

export default {
  setStateForCategories (state: CategoriesState, categories: CategoriesState) {
    state.categories = categories.categories
    state.success = categories.success
  }
}
