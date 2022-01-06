import { Preview, Side } from '~/store/preview/state'

export default {
  setPreviewImages: (state: Preview, frontImage: string, backImage: string) => {
    state.frontImageUrl = frontImage
    state.backImageUrl = backImage
  },

  setActivePreview: (state: Preview, side: Side) => {
    if (side === Side.Front) {
      state.activePreviewImageUrl = state.frontImageUrl
    } else {
      state.activePreviewImageUrl = state.backImageUrl
    }
  }
}
