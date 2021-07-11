import { $axios } from '~/utils/api'
import { SET_DEFAULTS } from '~/store/defaults/mutations'

export const load = async ({ commit }) => {
  const res = await $axios.$get('/defaults')
  commit(SET_DEFAULTS, res)
}
