import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import localStorageService from '~/services/localStorageService'
import { Product, ProductsState } from '~/types/products/types'

export const loadProducts = async ({ commit }: ActionContext<ProductsState, ProductsState>, payload: string) => {
  const res = await $axios.get<ProductsState>(`/products/${payload}`)
  if (res?.data?.success) {
    commit('setStateForProducts', res.data)
  }
}

export const loadLastVisited = ({ commit }: ActionContext<ProductsState, ProductsState>) => {
  const res = localStorageService.getData('lastVisited') ?? {}
  for (const [key, _] of Object.entries(res)) {
    commit('setLastVisited', res[key])
  }
}

export const addLastVisited = (
  { commit }: ActionContext<ProductsState, ProductsState>,
  payload: Product
) => {
  localStorageService.setObjectData('lastVisited', { [payload.productId]: payload })
  commit('setLastVisited', payload)
}
