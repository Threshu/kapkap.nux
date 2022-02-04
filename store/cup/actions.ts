import { ActionContext } from 'vuex/types'
import { $axios } from '~/utils/api'
import { Product as CartProduct } from '~/store/basket/state'
import { EditorState } from '~/store/cup/state'

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

  loadProduct: async ({ commit }: any, productId: string) => {
    try {
      const res = await $axios.get('/product/' + productId)
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
    dispatch('preview/getProductPreview', null, { root: true })
  },

  setBackground: ({ commit, dispatch } : any, backgroundId: string) => {
    commit('setBackground', backgroundId)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  setQuote: ({ commit, dispatch } : any, quoteId: string) => {
    commit('setQuote', quoteId)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  moveItemUp: ({ commit, dispatch } : any, index: number) => {
    commit('moveItemUp', index)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  moveItemDown: ({ commit, dispatch } : any, index: number) => {
    commit('moveItemDown', index)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  removeItem: ({ commit, dispatch } : any, index: number) => {
    commit('removeItem', index)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  setItem: ({ commit, dispatch } : any, payload: any) => {
    commit('setItem', payload)
    dispatch('preview/getProductPreview', null, { root: true })
  },

  loadProductFromCart: async ({ commit, dispatch, rootGetters } : ActionContext<EditorState, EditorState>, cartItemId: string): Promise<string> => {
    await dispatch('basket/loadBasket', null, { root: true })
    const basket = rootGetters['basket/basket']
    const cartItem: CartProduct = basket.products.find((product: CartProduct) => product.cartItemId === cartItemId)
    commit('setWorkingObjectFromCart', cartItem)
    commit('setQuantity', cartItem.number)
    commit('preview/setPreviewId', cartItem.previewId, { root: true })

    return cartItem.productId
  }
}
