import { $axios } from '~/utils/api'

export const getProductPreview = async ({ commit }, apiData, previewId) => {
  const result = await $axios.post('/preview', apiData)
  if (result?.data) {
    commit('preview/setPreviewId', result.data.previewId)
    commit('preview/setPreviewImages', result.data.frontImageUrl, result.data, backImageUrl)
  }
}

export const productPreview = async ({ commit }) => {
  result = await this.$store.dispatch('preview/getProductPreview', {
    product: this.productObject()
  })
  this.setPreview(this.frontImage)
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
