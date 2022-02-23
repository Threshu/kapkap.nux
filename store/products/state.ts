import { ProductsState } from '~/types/products/types'

const productsState: ProductsState = {
  success: false,
  products: [],
  lastVisited: { }
}

export default () => productsState
