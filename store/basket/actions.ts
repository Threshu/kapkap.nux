import { $axios } from '~/utils/api'
import { ProductUpdateRequest } from '~/store/basket/state'
import { ProductObject } from '~/store/cup/getters'

export default {
  addToBasket: async ({ commit }: any, apiData: ProductObject) => {
    const res = await $axios.post('/basket', apiData)
    commit('setBasket', res.data.basket)
    localStorage.basketToken = res.data.token
  },

  editBasket: async ({ commit }: any, apiData: ProductUpdateRequest) => {
    const res = await $axios.patch('/basket', apiData)
    commit('setBasket', res.data.basket)
  },

  loadBasket: async ({ commit }: any) => {
    try {
      const token = localStorage.basketToken
      if (token) {
        const res = await $axios.get('/basket/' + token)
        if (res?.data?.basket) {
          commit('setBasket', res.data.basket)
        }
      }
    } catch {
    }
  },

  applyCoupon: async ({ commit }: any, coupon: string) => {
    const res = await $axios.post('/coupon', {
        token: localStorage.basketToken,
        coupon
    })
    commit('setBasket', res.data.basket)
  },

  makeOrder: async ({ commit }: any, order: any) => {
    const clientTime = new Date();
    const formattedClientTime = clientTime.toISOString();
    const res = await $axios.post('/order', {
        clientTime: formattedClientTime,
        token: localStorage.basketToken,
        ...order,
    })

    return res
  }

}
