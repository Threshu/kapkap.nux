import { CategoriesState, Product } from '~/types/categories/types'

export default {
  categories: (state: CategoriesState) => state.categories,
  products: (state: CategoriesState) => state.products,
  success: (state: CategoriesState) => state.success,
  lastVisited: (state: CategoriesState) => {
    const { lastVisited } = state
    return Object
      .keys(lastVisited).reduce((acc: Product[], curr) => {
        return [...acc, lastVisited[curr]]
      }, [])
  }
}
