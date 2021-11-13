import { $axios } from '~/utils/api'

export const getCups = async () => {
  res = await $axios.get('/cups')
  commit('setCups', res)
}

