import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import localStorageService from '~/services/localStorageService'
import { Product, ProductsState } from '~/types/store/products/types'
import { Category } from '~/types/store/categories/types'
import { RootState } from '~/types/store/root'

export const loadProducts = async ({
  commit,
  rootState
}: ActionContext<ProductsState, RootState>, payload: string) => {
  const { categories } = rootState.categories
  const category = categories.find((c: Category) => c.path === payload)

  if (category && typeof category !== 'undefined') {
    const res = await $axios.get<ProductsState>(`/products/${category.id}`)
    if (res?.data?.success) {
      commit('setStateForProducts', res.data)
    }
  } else {
    const res = await $axios.get<ProductsState>('/products')
    if (res?.data?.success) {
      commit('setStateForProducts', res.data)
    }
  }
}

export const loadLastVisited = async ({ commit }: ActionContext<ProductsState, RootState>) => {
  const res = await localStorageService.getData('lastVisited') ?? {}
  for (const [key, _] of Object.entries(res)) {
    commit('setLastVisited', res[key])
  }
}

export const addLastVisited = (
  { commit }: ActionContext<ProductsState, RootState>,
  payload: Product
) => {
  localStorageService.setObjectData('lastVisited', { [payload.productId]: payload })
  commit('setLastVisited', payload)
}
