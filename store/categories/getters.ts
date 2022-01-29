import { CategoriesState } from '~/types/categories/types'

export default {
  categories: (state: CategoriesState) => state.categories,
  products: (state: CategoriesState) => state.products,
  success: (state: CategoriesState) => state.success
}
