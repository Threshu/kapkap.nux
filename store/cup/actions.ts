import { $axios } from '~/utils/api'
import { Product } from '~/store/cup/state'

export default {
  loadCups: async ({ commit }: any) => {
    try {
      const res = await $axios.get('/cups')
      if (res) {
        commit('setCups', res)
      }
    } catch {
    }
  },

  loadDogs: async ({ commit }: any) => {
    try {
      const res = await $axios.get('/dogs')
      if (res?.data?.pets) {
        commit('setDogs', res.data.pets)
      }
    } catch {
    }
  },

  loadCats: async ({ commit }: any) => {
    try {
      const res = await $axios.get('/cats')
      if (res?.data?.pets) {
        commit('setCats', res.data.pets)
      }
    } catch {
    }
  },

  loadMen: async ({ commit }: any) => {
    try {
      const res = await $axios.get('/gender/male')
      if (res?.data) {
        commit('setMen', res.data)
      }
    } catch {
    }
  },

  loadWomen: async ({ commit }: any) => {
    try {
      const res = await $axios.get('/gender/female')
      if (res?.data) {
        commit('setWomen', res.data)
      }
    } catch {
    }
  },

  loadProduct: async ({ commit }: any, payload: Product) => {
    try {
      const res = await $axios.get('/product/' + payload.id)
      if (res?.data) {
        commit('setProduct', res.data)
      }
    } catch {
    }
  },

  setQuantity: ({ commit }: any, quantity: number) => {
    commit('setQuantity', quantity)
    commit('recalculateTotal')
  },

  setCup: ({ commit, dispatch } : any, cupId: string) => {
    commit('setCup', cupId)
    dispatch('preview/getProductPreview')
  },

  setBackground: ({ commit, dispatch } : any, backgroundId: string) => {
    commit('setBackground', backgroundId)
    dispatch('preview/getProductPreview')
  },

  setQuote: ({ commit, dispatch } : any, quoteId: string) => {
    commit('setQuote', quoteId)
    dispatch('preview/getProductPreview')
  },
}
