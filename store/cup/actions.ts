import { $axios } from '~/utils/api'

// @ts-ignore
export const getCups = async ({ commit }) => {
  try {
    const res = await $axios.get('/cups')
    if (res) {
      commit('setCups', res)
    }
  } catch {}
}

// @ts-ignore
export const getDogs = async ({ commit }) => {
  try {
    const res = await $axios.get('/dogs')
    if (res?.data?.pets) {
      commit('setDogs', res.data.pets)
    }
  } catch {}
}

// @ts-ignore
export const getCats = async ({ commit }) => {
  try {
    const res = await $axios.get('/cats')
    if (res?.data?.pets) {
      commit('setCats', res.data.pets)
    }
  } catch {}
}

// @ts-ignore
export const getMen = async ({ commit }) => {
  try {
    const res = await $axios.get('/gender/male')
    if (res?.data) {
      commit('setMen', res.data)
    }
  } catch {}
}

// @ts-ignore
export const getWomen = async ({ commit }) => {
  try {
    const res = await $axios.get('/gender/female')
    if (res?.data) {
      commit('setWomen', res.data)
    }
  } catch {}
}

// @ts-ignore
export const getProduct = async ({ commit }, payload: Product) => {
  try {
    const res = await $axios.get('/product/' + payload.id)
    if (res?.data) {
      commit('setProduct', res.data)
    }
  } catch {}
}
