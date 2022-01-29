import { CategoriesState } from '~/types/categories/types'

const categoriesState: CategoriesState = {
  success: false,
  categories: [],
  products: []
}

export default () => categoriesState
