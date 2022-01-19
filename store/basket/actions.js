import { $axios } from '~/utils/api'

export const setBasket = async ({ commit }, apiData) => {
  const res = await $axios.post('/basket', apiData)
  commit('setBasket', res.data)
  return res
}

export const editBasket = async ({ commit }, apiData) => {
  const res = await $axios.patch('/basket', apiData)
  commit('setBasket', res.data)
  return res
}

export const getBasket = async ({ commit }, payload) => {
  try {
    const res = await $axios.get('/basket/' + payload.token)
    if (res?.data) {
      commit('setBasket', res.data)
    }
  } catch {}
}
