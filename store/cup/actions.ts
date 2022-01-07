import { $axios } from '~/utils/api'
import { Product } from '~/store/cup/state'

export const loadCups = async ({ commit }: any) => {
  try {
    const res = await $axios.get('/cups')
    if (res) {
      commit('setCups', res)
    }
  } catch {}
}

export const loadDogs = async ({ commit }: any) => {
  try {
    const res = await $axios.get('/dogs')
    if (res?.data?.pets) {
      commit('setDogs', res.data.pets)
    }
  } catch {}
}

export const loadCats = async ({ commit }: any) => {
  try {
    const res = await $axios.get('/cats')
    if (res?.data?.pets) {
      commit('setCats', res.data.pets)
    }
  } catch {}
}

export const loadMen = async ({ commit }: any) => {
  try {
    const res = await $axios.get('/gender/male')
    if (res?.data) {
      commit('setMen', res.data)
    }
  } catch {}
}

export const loadWomen = async ({ commit }: any) => {
  try {
    const res = await $axios.get('/gender/female')
    if (res?.data) {
      commit('setWomen', res.data)
    }
  } catch {}
}

export const loadProduct = async ({ commit }: any, payload: Product) => {
  try {
    const res = await $axios.get('/product/' + payload.id)
    if (res?.data) {
      commit('setProduct', res.data)
    }
  } catch {}
}
