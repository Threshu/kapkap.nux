import { CategoriesState } from '~/types/categories/types'

export default {
  categories: (state: CategoriesState) => state.categories,
  success: (state: CategoriesState) => state.success
}
