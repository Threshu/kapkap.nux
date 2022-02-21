import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import { CategoriesState, Product } from '~/types/categories/types'
import localStorageService from '~/services/localStorageService'

export const loadCategories = async ({ commit }: ActionContext<CategoriesState, CategoriesState>) => {
  const res = await $axios.get<CategoriesState>('/categories')

  if (res?.data?.success) {
    commit('setStateForCategories', res.data)
  }
}

export const loadLastVisited = async ({ commit }: ActionContext<CategoriesState, CategoriesState>) => {
  const res = localStorageService.getData('lastVisited') ?? {}
  for (const [key, _] of Object.entries(res)) {
    commit('setLastVisited', res[key])
  }
}

export const addLastVisited = (
  { commit }: ActionContext<CategoriesState, CategoriesState>,
  payload: Product
) => {
  localStorageService.setObjectData('lastVisited', { [payload.productId]: payload })
  commit('setLastVisited', payload)
}
