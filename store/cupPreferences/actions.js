import { $axios } from '~/utils/api'

export const getCups = async ({ commit }) => {
  try {
    const res = await $axios.get('/cups')
    if (res) {
      commit('setCups', res)
    }
  } catch {}
}

export const getDogs = async ({ commit }) => {
  try {
    const res = await $axios.get('/dogs')
    if (res?.data?.pets) {
      commit('setDogs', res.data.pets)
    }
  } catch {}
}

export const getCats = async ({ commit }) => {
  try {
    const res = await $axios.get('/cats')
    if (res?.data?.pets) {
      commit('setCats', res.data.pets)
    }
  } catch {}
}

export const getMens = async ({ commit }) => {
  try {
    const res = await $axios.get('/gender/male')
    if (res?.data) {
      commit('setMens', res.data)
    }
  } catch {}
}

export const getWomens = async ({ commit }) => {
  try {
    const res = await $axios.get('/gender/female')
    if (res?.data) {
      commit('setWomens', res.data)
    }
  } catch {}
}
