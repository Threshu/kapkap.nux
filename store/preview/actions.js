import { $axios } from '~/utils/api'

export const getProductPreview = async (apiData) => {
  await $axios.post('/preview', apiData)
}

export const fetchCartPreviews = ({ commit }, cart) => {
  if (cart?.products) {
    cart.products.forEach((cartItem) => {
      getProductPreview({
        product: cartItem,
        previewId: cartItem.previewId,
        setName: cartItem.setName
      }).then((data) => {
        commit('basket/setPreviewImage', {
          cartItemId: cartItem.id,
          frontImageUrl: data.frontImageUrl,
          backImageUrl: data.backImageUrl
        })
      })
    })
  }
}
