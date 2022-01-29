import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import { CategoriesState } from '~/types/categories/types'

export const loadCategories = async ({ commit }: ActionContext<CategoriesState, CategoriesState>) => {
  const res = await $axios.get<CategoriesState>('/categories')
  commit('setStateForCategories', res.data)
}
