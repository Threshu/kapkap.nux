import { $axios } from '~/utils/api'

export const getProductPreview = async ({ commit }, apiData, previewId) => {
  console.log('apiData', apiData)
  return await $axios.post('/preview', apiData)
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
          previewId: data.previewId,
        }, { root: true })
      })
    })
  }
}
