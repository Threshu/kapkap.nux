import { $axios } from '~/utils/api'

export const getCups = async ({ commit }) => {
  const res = await $axios.get('/cups')
  commit('setCups', res)
}

export const getDogs = async ({ commit }) => {
  const res = await $axios.get('/dogs')
  commit('setDogs', res.data.pets)
}

export const getCats = async ({ commit }) => {
  const res = await $axios.get('/cats')
  commit('setCats', res.data.pets)
}

export const getMens = async ({ commit }) => {
  const res = await $axios.get('/gender/male')
  commit('setMens', res.data)
}

export const getWomens = async ({ commit }) => {
  const res = await $axios.get('/gender/female')
  commit('setWomens', res.data)
}

