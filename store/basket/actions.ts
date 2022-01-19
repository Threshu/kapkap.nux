import { $axios } from '~/utils/api'
import { BasketContainer } from '~/store/basket/state'

export default {
  setBasket: async ({ commit }: any, apiData: any) => {
    const res = await $axios.post('/basket', apiData)
    commit('setBasket', res.data)
    return res
  },

  editBasket: async ({ commit }: any, apiData: any) => {
    const res = await $axios.patch('/basket', apiData)
    commit('setBasket', res.data)
    return res
  },

  loadBasket: async ({ commit }: any) => {
    try {
      const token = localStorage.basketToken || ''
      const res = await $axios.get('/basket/' + token)
      if (res?.data) {
        commit('setBasket', res.data)
      }
    } catch {
    }
  }
}
