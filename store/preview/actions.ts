import { $axios } from '~/utils/api'
import { Product } from '~/store/basket/state'

export default {
  getProductPreview: async ({
    commit,
    rootGetters,
    getters
  }: any) => {
    const apiData = {
      ...rootGetters['cup/productObject'],
      previewId: getters.previewId
    }

    const result = await $axios.post('/preview', apiData)
    if (result?.data) {
      commit('setPreviewId', result.data.previewId)
      commit('setPreviewImages', { frontImageUrl: result.data.frontImageUrl, backImageUrl: result.data.backImageUrl })
      commit('setActivePreview', getters.currentSide)
    }
  },

  fetchCartPreviews: ({ commit, dispatch, rootGetters }: any) => {
    rootGetters['cart/basket']?.products?.forEach(function (cartItem: Product, index: number) {
      dispatch('getProductPreview', {
        product: cartItem,
        previewId: cartItem.previewId
      }).then((data: any) => {
        commit('basket/setPreviewImage', {
          cartItemIndex: index,
          frontImageUrl: data.frontImageUrl,
          backImageUrl: data.backImageUrl,
          previewId: data.previewId
        }, { root: true })
      })
    })
  }
}
