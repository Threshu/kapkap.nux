import { Product, ProductsState } from '~/types/store/products/types'

export default {
  products: (state: ProductsState) => state.products,
  success: (state: ProductsState) => state.success,
  lastVisited: (state: ProductsState) => {
    const { lastVisited } = state
    return Object
      .keys(lastVisited).reduce((acc: Product[], curr) => {
        return [...acc, lastVisited[curr]]
      }, [])
  },
  path: (state: ProductsState) => state.path
}
