import { $axios } from '~/utils/api'

export const load = async ({ commit }) => {
  const res = await $axios.$get('/defaults')
  commit('setDefaults', res)
}
