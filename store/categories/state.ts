import { CategoriesState } from '~/types/categories/types'

const categoriesState: CategoriesState = {
  success: false,
  categories: [],
  products: [],
  lastVisited: { }
}

export default () => categoriesState
