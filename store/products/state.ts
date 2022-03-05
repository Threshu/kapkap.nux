import { ProductsState } from '~/types/store/products/types'

const productsState: ProductsState = {
  success: false,
  products: [],
  lastVisited: []
}

export default () => productsState
