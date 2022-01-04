import { $axios } from '~/utils/api'

export const setBasket = async ({ commit }, apiData) => {
  return await $axios.post('/basket', apiData)
}