import { $axios } from '~/utils/api'

export const getProductPreview = async (apiData, previewId) => {
  // var apiDataObject = {
  //   "previewId": previewId,
  //   "product": {
  //       "dogIds": [{
  //           "id": "",
  //           "variantId": "",
  //           "name": ""
  //       }],
  //       "quoteIds": [],
  //       "maleHairstyleIds": [],
  //       "femaleHairstyleIds": [],
  //       "maleBodyIds": [],
  //       "femaleBodyIds": [],
  //       "humanNames": []
  //   }
  // }
  console.log(apiData, 'arle')

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
