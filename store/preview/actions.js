import { $axios } from '~/utils/api'

export const getProductPreview = async ({ commit, rootGetters, getters }) => {
  const apiData = { ...rootGetters['cup/productObject'], previewId: getters.previewId }
  const result = await $axios.post('/preview', apiData)
  if (result?.data) {
    commit('setPreviewId', result.data.previewId)
    commit('setPreviewImages', result.data.frontImageUrl, result.data.backImageUrl)
    commit('setActivePreview', getters.currentSide)
  }
}

export const fetchCartPreviews = ({ commit }, cart) => {
  if (cart) {
    cart.forEach(function (cartItem, index) {
      getProductPreview({
        product: cartItem,
        previewId: cartItem.previewId
      }).then((data) => {
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
