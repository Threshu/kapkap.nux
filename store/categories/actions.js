import { $axios } from '~/utils/api'

export const getCategories = async () => {
  res = await $axios.get('/categories')
  commit('setCategories', res)
}

