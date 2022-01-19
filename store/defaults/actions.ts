import { $axios } from '~/utils/api'

export default {
  load: async ({ commit }: any) => {
    const result = await $axios.$get('/defaults')
    commit('setDefaults', result)
    if (result.basket) {
      commit('basket/setBasket', result.basket, { root: true })
    }
  }
}
