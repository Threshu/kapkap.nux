import { $axios } from '~/utils/api'

export const getCategories = async ({ commit }) => {
  const res = await $axios.get('/categories')
  commit('setCategories', res.data)
}

