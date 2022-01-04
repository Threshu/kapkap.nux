import { $axios } from '~/utils/api'

export const setBasket = async ({ commit }, apiData) => {
  return await $axios.post('/basket', apiData)
}

export const getBasket = async ({ commit }, payload) => {
  try {
    const res = await $axios.get('/basket/' + payload.token)
    if (res?.data) {
      console.log('zzz', res)
      commit('setBasket', res.data)
    }
  } catch {}
}
