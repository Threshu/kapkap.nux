import { $axios } from '~/utils/api'

export default {
  getOrder: async ({ commit }: any) => {
    try {
      const token = localStorage.basketToken
      if (token) {
        const res = await $axios.get('/order/' + token)
        return res.data
      }
    } catch {
    }
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
